export function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Radial gradient overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial-green blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial-green blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />

      {/* Scan line effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-datastory-green to-transparent animate-scan" />
      </div>
    </div>
  )
}
