import { useRef, useCallback, ReactNode } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
}

export default function TiltCard({ children, className = '' }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
    card.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
  }, [])

  const onMouseLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return

    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)'
    card.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  }, [])

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)',
        transition: 'transform 200ms ease-out, box-shadow 200ms ease-out',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      }}
    >
      {children}
    </div>
  )
}
