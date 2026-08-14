import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

/* ═══════════════════════════════════════════════════════════
   INK THREAD — the persistent hand-drawn story line.
   A single wavy vertical line that "draws itself in" as the
   reader scrolls, connecting one chapter to the next. Each
   node is an arrowhead that points onward — the recurring
   storytelling element that threads the whole site together.

   Usage:
     <InkThread className="absolute left-8 top-0 bottom-0" />
   Place inside a relatively-positioned section wrapper.
   ═══════════════════════════════════════════════════════════ */

interface InkThreadProps {
  className?: string;
  style?: React.CSSProperties;
  /** number of bends along the line */
  bends?: number;
  /** render an arrowhead at the bottom (the "next" node) */
  arrow?: boolean;
  /** how much of the line is visible before draw begins */
  lead?: number;
  width?: number;
  color?: string;
  dash?: boolean;
}

const InkThread: React.FC<InkThreadProps> = ({
  className = '',
  style,
  bends = 5,
  arrow = true,
  lead = 0.12,
  width = 3,
  color = 'var(--black)',
  dash = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 88%', 'end 55%'],
  });

  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 22, mass: 0.35 });
  const p = useTransform(progress, [0, 1], [lead, 1]);
  const clamped = useTransform(p, (v) => Math.min(1, Math.max(0, v)));

  const seed = React.useMemo(() => Array.from({ length: bends }, (_, i) => 18 + ((i * 37) % 26)), [bends]);
  const total = 100;
  let d = `M 24 0`;
  let cursor = 0;
  seed.forEach((dx, i) => {
    const seg = total / (seed.length + 1);
    cursor += seg;
    const c1 = cursor - seg / 2;
    d += ` C ${24 + dx} ${Math.round(c1 * 0.92)}, ${24 - dx * 0.6} ${Math.round(c1 * 1.08)}, 24 ${Math.round(cursor)}`;
  });
  d += ` L 24 ${total + 24}`;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: 'relative',
        width: '48px',
        color,
        ...style,
      }}
      aria-hidden="true"
    >
      <motion.svg
        viewBox="0 0 48 124"
        preserveAspectRatio="none"
        fill="none"
        stroke="currentColor"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: '100%', height: '100%' }}
      >
        <motion.path
          d={d}
          strokeDasharray={dash ? '4 6' : 'none'}
          style={{ pathLength: clamped }}
        />
        {arrow && (
          <motion.path
            d="M 18 108 C 24 114, 26 116, 24 120 M 30 108 C 24 114, 22 116, 24 120"
            style={{ pathLength: clamped }}
          />
        )}
      </motion.svg>
    </div>
  );
};

export default InkThread;
