import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    // Smooth animation loop
    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15
      cursorY += (mouseY - cursorY) * 0.15
      cursor.style.transform = `translate(${cursorX - 7}px, ${cursorY - 7}px)`
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove)
    animate()

    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          * { cursor: none !important; }
        }

        #cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 14px;
          height: 14px;
          background: white;
          border-radius: 50%;
          pointer-events: none;
          z-index: 2147483647;
          mix-blend-mode: difference;
          will-change: transform;
        }

        @media (pointer: coarse) {
          #cursor-dot {
            display: none;
          }
        }
      `}</style>
      <div ref={cursorRef} id="cursor-dot" />
    </>
  )
}
