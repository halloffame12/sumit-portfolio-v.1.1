import React, { useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/* ═══════════════════════════════════════════════════════════
   CURSOR TRAIL — ink dot follows cursor with spring physics.
   Desktop only. Respects prefers-reduced-motion.
   ═══════════════════════════════════════════════════════════ */
const CursorTrail: React.FC = () => {
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const springX = useSpring(dotX, { stiffness: 300, damping: 25 });
  const springY = useSpring(dotY, { stiffness: 300, damping: 25 });
  const trailRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: MouseEvent) => {
    dotX.set(e.clientX - 3);
    dotY.set(e.clientY - 3);
  }, [dotX, dotY]);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia?.('(pointer: coarse)').matches) return;

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, [handleMove]);

  return (
    <motion.div
      ref={trailRef}
      className="ink-cursor-dot"
      style={{
        x: springX,
        y: springY,
        willChange: 'transform',
      }}
      aria-hidden="true"
    />
  );
};

export default CursorTrail;
