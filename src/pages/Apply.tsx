import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'

function DataAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2
      canvas.height = canvas.offsetHeight * 2
      ctx.scale(2, 2)
    }
    resize()
    window.addEventListener('resize', resize)

    const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = []
    const numNodes = 50

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 3 + 2,
      })
    }

    let animationId: number

    const animate = () => {
      ctx.fillStyle = '#f8fafc'
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > canvas.offsetWidth) node.vx *= -1
        if (node.y < 0 || node.y > canvas.offsetHeight) node.vy *= -1

        // Draw connections
        nodes.forEach((other, j) => {
          if (i >= j) return
          const dx = other.x - node.x
          const dy = other.y - node.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.3 * (1 - dist / 150)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(16, 185, 129, 0.6)'
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      <DataAnimation />

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
