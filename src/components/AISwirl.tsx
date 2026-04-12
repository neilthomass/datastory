import { motion } from "framer-motion"

interface AISwirlProps {
  className?: string
  size?: number
  color?: string
  opacity?: number
  rotationDuration?: number
  initialRotation?: number
}

export function AISwirl({
  className = "",
  size = 400,
  color = "#10b981",
  opacity = 0.2,
  rotationDuration = 30,
  initialRotation = 0,
}: AISwirlProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{
        rotate: [initialRotation, initialRotation + 360],
      }}
      transition={{
        rotate: {
          duration: rotationDuration,
          repeat: Infinity,
          ease: "linear",
        },
      }}
      style={{
        width: size,
        height: size,
        opacity: opacity,
      }}
    >
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ filter: `drop-shadow(0 0 60px ${color})` }}
      >
        {/* Outer spiral */}
        <motion.path
          d="M200 40 C320 40, 360 160, 360 200 C360 300, 280 360, 200 360 C100 360, 40 280, 40 200 C40 100, 120 60, 180 50 C200 48, 220 80, 220 120 C220 160, 200 180, 200 200"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: {
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 0.5,
            },
            opacity: {
              duration: 0.5,
            }
          }}
        />

        {/* Middle spiral */}
        <motion.path
          d="M200 80 C280 80, 320 140, 320 200 C320 270, 260 320, 200 320 C130 320, 80 260, 80 200 C80 130, 130 90, 180 82 C195 80, 210 100, 210 140"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          style={{ opacity: 0.7 }}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0.3,
            delay: 0.3,
          }}
        />

        {/* Inner spiral */}
        <motion.path
          d="M200 120 C250 120, 280 160, 280 200 C280 250, 240 280, 200 280 C150 280, 120 240, 120 200 C120 160, 150 130, 185 122 C195 120, 205 140, 205 170"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          style={{ opacity: 0.5 }}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0.5,
            delay: 0.6,
          }}
        />

        {/* Glowing center */}
        <motion.circle
          cx="200"
          cy="200"
          r="60"
          fill={color}
          style={{ opacity: 0.1 }}
          animate={{
            r: [60, 80, 60],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orbiting particles */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.circle
            key={i}
            r={4 - i * 0.5}
            fill={color}
            initial={{
              cx: 200 + Math.cos((i * Math.PI) / 3) * (80 + i * 20),
              cy: 200 + Math.sin((i * Math.PI) / 3) * (80 + i * 20),
              opacity: 0.8 - i * 0.1,
            }}
            animate={{
              cx: [
                200 + Math.cos((i * Math.PI) / 3) * (80 + i * 20),
                200 + Math.cos((i * Math.PI) / 3 + Math.PI) * (80 + i * 20),
                200 + Math.cos((i * Math.PI) / 3 + Math.PI * 2) * (80 + i * 20),
              ],
              cy: [
                200 + Math.sin((i * Math.PI) / 3) * (80 + i * 20),
                200 + Math.sin((i * Math.PI) / 3 + Math.PI) * (80 + i * 20),
                200 + Math.sin((i * Math.PI) / 3 + Math.PI * 2) * (80 + i * 20),
              ],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </motion.div>
  )
}
