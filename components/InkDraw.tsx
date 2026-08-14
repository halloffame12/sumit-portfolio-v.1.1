import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

/* ═══════════════════════════════════════════════════════════
   INK DRAW — scroll-linked SVG stroke draw-in.
   Wraps any SVG path(s); progress is driven by the element's
   position in the viewport, so lines feel "inked in" as you
   read down the page. Use `pathLength` on children instead of
   pathLength props (paths must not be pre-dashed).
   ═══════════════════════════════════════════════════════════ */

interface InkDrawProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  width?: number | string;
  height?: number | string;
  viewBox?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  strokeLinecap?: 'round' | 'butt' | 'square';
  strokeLinejoin?: 'round' | 'miter' | 'bevel';
  start?: number;   // 0..1, how far along the path the line begins
  startOffset?: number; // extra delay before drawing starts (px of scroll)
  drawDuration?: number; // how much scroll distance the draw spans
  preserveAspectRatio?: string;
}

const InkDraw: React.FC<InkDrawProps> = ({
  children,
  className = '',
  style,
  width,
  height,
  viewBox,
  fill = 'none',
  stroke = 'currentColor',
  strokeWidth = 3,
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  start = 0,
  startOffset = 0,
  drawDuration = 900,
  preserveAspectRatio = 'none',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 92%', `start ${92 - drawDuration / 1200}%`],
  });

  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
  const drawn = useTransform(progress, [start, 1], [startOffset, startOffset + 1]);
  const p = useTransform(drawn, (v) => Math.min(1, Math.max(0, v)));

  return (
    <div
      ref={ref}
      className={className}
      style={{ position: 'relative', ...style }}
    >
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        preserveAspectRatio={preserveAspectRatio}
        aria-hidden="true"
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null;
          const d = (child as React.ReactElement<{ d?: string }>).props.d;
          if (!d) return null;
          return (
            <motion.path
              d={d}
              style={{ pathLength: p }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default InkDraw;
