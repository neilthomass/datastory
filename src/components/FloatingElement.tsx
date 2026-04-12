import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FloatingElementProps {
  children?: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function FloatingElement({
  children,
  className = '',
  delay = 0,
  duration = 4,
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-10, 10, -10],
        rotateZ: [-2, 2, -2],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}
