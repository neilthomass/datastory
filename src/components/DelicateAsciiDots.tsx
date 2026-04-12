import { useEffect, useRef } from 'react'

const CHARS = '⠁⠂⠄⠈⠐⠠⡀⢀⠃⠅⠘⠨⠊⠋⠌⠍⠎⠏'
const GRID_COLS = 120

const VERTEX_SHADER = `
  attribute vec2 a_position;
  attribute vec2 a_texCoord;
  attribute float a_charIndex;
  attribute float a_opacity;

  uniform vec2 u_resolution;
  uniform float u_charCount;

  varying vec2 v_texCoord;
  varying float v_opacity;

  void main() {
    vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;
    gl_Position = vec4(clipSpace * vec2(1, -1), 0.0, 1.0);

    float charWidth = 1.0 / u_charCount;
    v_texCoord = vec2(a_texCoord.x * charWidth + a_charIndex * charWidth, a_texCoord.y);
    v_opacity = a_opacity;
  }
`

const FRAGMENT_SHADER = `
  precision mediump float;

  uniform sampler2D u_texture;
  uniform vec3 u_color;

  varying vec2 v_texCoord;
  varying float v_opacity;

  void main() {
    vec4 texColor = texture2D(u_texture, v_texCoord);
    gl_FragColor = vec4(u_color, texColor.a * v_opacity);
  }
`

function createCharTexture(gl: WebGLRenderingContext, chars: string): WebGLTexture {
  const size = 128
  const canvas = document.createElement('canvas')
  canvas.width = size * chars.length
  canvas.height = size
  const ctx = canvas.getContext('2d')!

  ctx.fillStyle = 'transparent'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = 'white'
  ctx.font = `${size * 1.8}px monospace`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  for (let i = 0; i < chars.length; i++) {
    ctx.fillText(chars[i], size * i + size / 2, size / 2)
  }

  const texture = gl.createTexture()!
  gl.bindTexture(gl.TEXTURE_2D, texture)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)

  return texture
}

interface Wave {
  x: number
  y: number
  frequency: number
  amplitude: number
  phase: number
  speed: number
}

const DelicateAsciiDots: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    if (!containerRef.current) return

    const canvas = document.createElement('canvas')
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.position = 'absolute'
    canvas.style.left = '0'
    canvas.style.top = '0'
    containerRef.current.appendChild(canvas)

    const gl = canvas.getContext('webgl', {
      alpha: true,
      antialias: true,
      premultipliedAlpha: false
    })

    if (!gl) {
      console.error('WebGL not supported')
      return
    }

    // Initialize waves
    const waves: Wave[] = []
    for (let i = 0; i < 6; i++) {
      waves.push({
        x: Math.random(),
        y: Math.random(),
        frequency: 0.15 + Math.random() * 0.25,
        amplitude: 0.8 + Math.random() * 0.7,
        phase: Math.random() * Math.PI * 2,
        speed: 0.6 + Math.random() * 0.6
      })
    }

    // Create shaders
    const vertexShader = gl.createShader(gl.VERTEX_SHADER)!
    gl.shaderSource(vertexShader, VERTEX_SHADER)
    gl.compileShader(vertexShader)
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      console.error('Vertex shader error:', gl.getShaderInfoLog(vertexShader))
    }

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)!
    gl.shaderSource(fragmentShader, FRAGMENT_SHADER)
    gl.compileShader(fragmentShader)
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      console.error('Fragment shader error:', gl.getShaderInfoLog(fragmentShader))
    }

    // Create program
    const program = gl.createProgram()!
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program))
    }
    gl.useProgram(program)

    // Create texture
    const texture = createCharTexture(gl, CHARS)

    // Get attribute/uniform locations
    const positionLoc = gl.getAttribLocation(program, 'a_position')
    const texCoordLoc = gl.getAttribLocation(program, 'a_texCoord')
    const charIndexLoc = gl.getAttribLocation(program, 'a_charIndex')
    const opacityLoc = gl.getAttribLocation(program, 'a_opacity')
    const resolutionLoc = gl.getUniformLocation(program, 'u_resolution')
    const charCountLoc = gl.getUniformLocation(program, 'u_charCount')
    const colorLoc = gl.getUniformLocation(program, 'u_color')

    // Enable blending
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    // Buffers
    const positionBuffer = gl.createBuffer()
    const texCoordBuffer = gl.createBuffer()
    const charIndexBuffer = gl.createBuffer()
    const opacityBuffer = gl.createBuffer()

    let gridCols = GRID_COLS
    let gridRows = 0
    let time = 0

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      gl.viewport(0, 0, canvas.width, canvas.height)

      // Calculate grid rows to maintain square cells
      const cellSize = canvas.width / gridCols
      gridRows = Math.ceil(canvas.height / cellSize)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    let animationId: number

    const render = () => {
      time += 0.016

      // Use square cells
      const cellSize = canvas.width / gridCols

      const positions: number[] = []
      const texCoords: number[] = []
      const charIndices: number[] = []
      const opacities: number[] = []

      const mouseX = mouseRef.current.x * gridCols
      const mouseY = mouseRef.current.y * gridRows

      for (let y = 0; y < gridRows; y++) {
        for (let x = 0; x < gridCols; x++) {
          let totalWave = 0

          // Calculate wave influence
          waves.forEach(wave => {
            const wx = wave.x * gridCols
            const wy = wave.y * gridRows
            const dx = x - wx
            const dy = y - wy
            const dist = Math.sqrt(dx * dx + dy * dy)
            const falloff = 1 / (1 + dist * 0.1)
            totalWave += Math.sin(dist * wave.frequency - time * wave.speed + wave.phase) * wave.amplitude * falloff
          })

          // Mouse wave
          const mdx = x - mouseX
          const mdy = y - mouseY
          const mouseDist = Math.sqrt(mdx * mdx + mdy * mdy)
          totalWave += Math.sin(mouseDist * 0.3 - time * 2) * (1 / (1 + mouseDist * 0.15)) * 1.5

          // Only render if wave is strong enough
          if (Math.abs(totalWave) < 0.15) continue

          const normalizedWave = (totalWave + 2) / 4
          const charIndex = Math.min(CHARS.length - 1, Math.max(0, Math.floor(normalizedWave * CHARS.length)))
          const opacity = Math.min(0.9, Math.max(0.3, 0.3 + normalizedWave * 0.6))

          const px = x * cellSize
          const py = y * cellSize

          // Two triangles for quad (square cells)
          positions.push(
            px, py,
            px + cellSize, py,
            px, py + cellSize,
            px, py + cellSize,
            px + cellSize, py,
            px + cellSize, py + cellSize
          )

          texCoords.push(
            0, 0,
            1, 0,
            0, 1,
            0, 1,
            1, 0,
            1, 1
          )

          for (let i = 0; i < 6; i++) {
            charIndices.push(charIndex)
            opacities.push(opacity)
          }
        }
      }

      // Clear
      gl.clearColor(0.973, 0.980, 0.988, 1.0)
      gl.clear(gl.COLOR_BUFFER_BIT)

      if (positions.length === 0) {
        animationId = requestAnimationFrame(render)
        return
      }

      // Upload data
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.DYNAMIC_DRAW)
      gl.enableVertexAttribArray(positionLoc)
      gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0)

      gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer)
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texCoords), gl.DYNAMIC_DRAW)
      gl.enableVertexAttribArray(texCoordLoc)
      gl.vertexAttribPointer(texCoordLoc, 2, gl.FLOAT, false, 0, 0)

      gl.bindBuffer(gl.ARRAY_BUFFER, charIndexBuffer)
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(charIndices), gl.DYNAMIC_DRAW)
      gl.enableVertexAttribArray(charIndexLoc)
      gl.vertexAttribPointer(charIndexLoc, 1, gl.FLOAT, false, 0, 0)

      gl.bindBuffer(gl.ARRAY_BUFFER, opacityBuffer)
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(opacities), gl.DYNAMIC_DRAW)
      gl.enableVertexAttribArray(opacityLoc)
      gl.vertexAttribPointer(opacityLoc, 1, gl.FLOAT, false, 0, 0)

      // Set uniforms
      gl.uniform2f(resolutionLoc, canvas.width, canvas.height)
      gl.uniform1f(charCountLoc, CHARS.length)
      gl.uniform3f(colorLoc, 0.063, 0.725, 0.506) // Emerald

      // Bind texture
      gl.activeTexture(gl.TEXTURE0)
      gl.bindTexture(gl.TEXTURE_2D, texture)

      // Draw
      gl.drawArrays(gl.TRIANGLES, 0, positions.length / 2)

      animationId = requestAnimationFrame(render)
    }

    animationId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
      if (containerRef.current && canvas.parentNode === containerRef.current) {
        containerRef.current.removeChild(canvas)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        background: '#f8fafc',
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}
    />
  )
}

export default DelicateAsciiDots
