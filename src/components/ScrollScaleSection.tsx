import { useRef, useEffect, ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollScaleSectionProps {
  children: ReactNode
  className?: string
  bgColor?: string
}

export default function ScrollScaleSection({
  children,
  className = '',
  bgColor = 'bg-slate-900'
}: ScrollScaleSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const inner = innerRef.current
    if (!container || !inner) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Set initial state - constrained width with rounded corners
      gsap.set(inner, {
        maxWidth: '90%',
        borderRadius: '24px',
        margin: '0 auto',
      })

      // Create timeline for scroll-driven animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 70%',
          end: 'top 20%',
          scrub: 0.8,
        }
      })

      // Animate to full width
      tl.to(inner, {
        maxWidth: '100%',
        borderRadius: '0px',
        duration: 1,
        ease: 'power2.out',
      })

      // Second timeline for shrinking back
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'bottom 80%',
          end: 'bottom 30%',
          scrub: 0.8,
        }
      })

      tl2.to(inner, {
        maxWidth: '90%',
        borderRadius: '24px',
        duration: 1,
        ease: 'power2.in',
      })
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative">
      <div
        ref={innerRef}
        className={`${bgColor} ${className} overflow-hidden transition-shadow duration-300`}
        style={{ maxWidth: '90%', borderRadius: '24px', margin: '0 auto' }}
      >
        {children}
      </div>
    </div>
  )
}
