import { useEffect, useRef } from 'react';

const SlidingEaseVerticalBars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef(Math.PI * 0.35);
  const animationFrameId = useRef<number | null>(null);

  const noise = (x: number, y: number, t: number) => {
    const n = Math.sin(x * 0.02 + t) * Math.cos(y * 0.02 + t) +
             Math.sin(x * 0.03 - t) * Math.cos(y * 0.01 + t);
    return (n + 1) / 2;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const generatePattern = (seed: number, width: number, height: number) => {
      const numLines = Math.ceil(width / 14);
      const lineSpacing = width / numLines;
      const pattern: Array<Array<{ y: number; height: number; width: number }>> = [];

      for (let i = 0; i < numLines; i++) {
        const lineBars: Array<{ y: number; height: number; width: number }> = [];
        let currentY = 0;

        while (currentY < height) {
          const noiseVal = noise(i * lineSpacing, currentY, seed);

          if (noiseVal > 0.5) {
            const barLength = 10 + noiseVal * 30;
            const barWidth = 2 + noiseVal * 3;

            lineBars.push({
              y: currentY + barLength / 2,
              height: barLength,
              width: barWidth
            });

            currentY += barLength + 15;
          } else {
            currentY += 15;
          }
        }
        pattern.push(lineBars);
      }
      return pattern;
    };

    let pattern1 = generatePattern(0, canvas.width, canvas.height);
    let pattern2 = generatePattern(5, canvas.width, canvas.height);

    const animate = () => {
      if (!canvas || !ctx) return;

      const numLines = Math.ceil(canvas.width / 14);
      const lineSpacing = canvas.width / numLines;

      if (pattern1.length !== numLines) {
        pattern1 = generatePattern(0, canvas.width, canvas.height);
        pattern2 = generatePattern(5, canvas.width, canvas.height);
      }

      timeRef.current += 0.005;

      const cycleTime = timeRef.current % (Math.PI * 2);
      let easingFactor;

      if (cycleTime < Math.PI) {
        const transitionProgress = cycleTime / Math.PI;
        easingFactor = transitionProgress;
      } else {
        const transitionProgress = (cycleTime - Math.PI) / Math.PI;
        easingFactor = 1 - transitionProgress;
      }

      const smoothEasing = easingFactor < 0.5
        ? 4 * easingFactor * easingFactor * easingFactor
        : 1 - Math.pow(-2 * easingFactor + 2, 3) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < numLines; i++) {
        const x = i * lineSpacing + lineSpacing / 2;

        ctx.beginPath();
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 1;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();

        const bars1 = pattern1[i] || [];
        const bars2 = pattern2[i] || [];
        const maxBars = Math.max(bars1.length, bars2.length);

        for (let j = 0; j < maxBars; j++) {
          let bar1 = bars1[j];
          let bar2 = bars2[j];

          if (!bar1) bar1 = { y: bar2.y - 100, height: 0, width: 0 };
          if (!bar2) bar2 = { y: bar1.y + 100, height: 0, width: 0 };

          const waveOffset = Math.sin(i * 0.3 + j * 0.5 + timeRef.current * 2) * 10 *
                           (smoothEasing * (1 - smoothEasing) * 4);

          const y = bar1.y + (bar2.y - bar1.y) * smoothEasing + waveOffset;
          const height = bar1.height + (bar2.height - bar1.height) * smoothEasing;
          const width = bar1.width + (bar2.width - bar1.width) * smoothEasing;

          if (height > 0.1 && width > 0.1) {
            ctx.fillStyle = '#cbd5e1';
            ctx.fillRect(x - width/2, y - height/2, width, height);
          }
        }
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      timeRef.current = 0;
      animationFrameId.current = null;
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default SlidingEaseVerticalBars;
