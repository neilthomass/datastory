import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import DelicateAsciiDots from '@/components/DelicateAsciiDots'
import gsap from 'gsap'

export default function Apply() {
  const contentRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      gsap.set([badgeRef.current, headlineRef.current, descRef.current, ctaRef.current], {
        opacity: 0,
        y: 40,
      })

      tl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.6, delay: 0.3 })
        .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
    }, contentRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ isolation: 'isolate' }}>
      <DelicateAsciiDots />

      <div ref={contentRef} className="relative z-10 text-center px-6">
        <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-medium text-emerald-700">Recruitment Cycle Closed</span>
        </div>

        <h1 ref={headlineRef} className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-900">
          Applications are closed
          <br />
          <span className="text-emerald-600">for this cycle</span>
        </h1>

        <p ref={descRef} className="mt-8 text-xl text-slate-600 leading-relaxed max-w-xl mx-auto">
          We recruit at the beginning of each semester. Check back in Fall 2026 for our next application cycle.
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4 justify-center">
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
