import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlowingCardProps {
  children: ReactNode
  className?: string
  glowColor?: 'green' | 'teal' | 'white'
}

export function GlowingCard({
  children,
  className = '',
  glowColor = 'green',
}: GlowingCardProps) {
  const glowColors = {
    green: 'rgba(16, 185, 129, 0.2)',
    teal: 'rgba(20, 184, 166, 0.2)',
    white: 'rgba(255, 255, 255, 0.1)',
  }

  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0"
        style={{
          background: `radial-gradient(circle at center, ${glowColors[glowColor]}, transparent 70%)`,
        }}
        whileHover={{
          opacity: 1,
          transition: { duration: 0.3 },
        }}
      />
      <div className="relative card-dark rounded-lg">{children}</div>
    </motion.div>
  )
}
