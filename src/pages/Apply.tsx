import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'

function MouseParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0

    const resize = () => {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * 2
      canvas.height = height * 2
      ctx.scale(2, 2)
    }
    resize()
    window.addEventListener('resize', resize)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    interface Particle {
      x: number
      y: number
      baseX: number
      baseY: number
      radius: number
      color: string
    }

    const particles: Particle[] = []
    const numParticles = 150
    const colors = ['rgba(16, 185, 129, 0.4)', 'rgba(52, 211, 153, 0.3)', 'rgba(110, 231, 183, 0.25)']

    for (let i = 0; i < numParticles; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        radius: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }

    let animationId: number

    const animate = () => {
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, width, height)

      const mouse = mouseRef.current

      particles.forEach((particle) => {
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const maxDist = 200

        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist
          const angle = Math.atan2(dy, dx)
          const moveX = Math.cos(angle) * force * 50
          const moveY = Math.sin(angle) * force * 50
          particle.x -= moveX * 0.05
          particle.y -= moveY * 0.05
        }

        // Return to base position
        particle.x += (particle.baseX - particle.x) * 0.05
        particle.y += (particle.baseY - particle.y) * 0.05

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Draw connections to nearby particles
        particles.forEach((other) => {
          const ddx = other.x - particle.x
          const ddy = other.y - particle.y
          const distance = Math.sqrt(ddx * ddx + ddy * ddy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.15 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  )
}

export default function Apply() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <MouseParticles />

      <div className="relative z-10 text-center px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 rounded-full mb-8">
          <span className="text-sm font-medium text-slate-600">Recruitment Cycle Closed</span>
        </div>

        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-900">
          Applications are closed
          <br />
          <span className="text-emerald-600">for this cycle</span>
        </h1>

        <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-xl mx-auto">
          We recruit at the beginning of each semester. Check back in Fall 2026 for our next application cycle.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/25"
          >
            Back to home
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="https://www.instagram.com/datastoryberkeley/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-semibold rounded-full border border-slate-200 hover:bg-slate-50 transition-all"
          >
            Stay updated
          </a>
        </div>
      </div>
    </section>
  )
}
