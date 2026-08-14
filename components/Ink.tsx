import React from 'react';

/* ═══════════════════════════════════════════════════════════
   INK VOCABULARY — hand-drawn SVG strokes
   All components inherit `currentColor`, so they adapt to ink
   on paper and paper on ink. Pure monochrome, no fills by default.
   ═══════════════════════════════════════════════════════════ */

interface InkProps {
  className?: string;
  style?: React.CSSProperties;
  width?: number | string;
  height?: number | string;
  strokeWidth?: number;
}

const S = ({ className = '', style, width, height, strokeWidth = 3, children }: InkProps & { children: React.ReactNode }) => (
  <svg
    className={className}
    style={style}
    width={width}
    height={height}
    viewBox="0 0 200 200"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

/* ── Hand-drawn arrows ── */
export const InkArrow: React.FC<InkProps & { variant?: 'curved' | 'bend' | 'straight' | 'cork' }> = ({
  variant = 'curved',
  className,
  style,
  width = 120,
  height = 60,
  strokeWidth = 3,
}) => {
  const v = 200; /* viewBox units scale: use 0..200 x 0..100 for arrows */
  return (
    <svg className={className} style={style} width={width} height={height} viewBox={`0 0 ${v} 100`} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {variant === 'curved' && (
        <>
          <path d="M6 88 C 34 12, 128 12, 170 50" />
          <path d="M130 30 L 171 51 L 148 72" />
        </>
      )}
      {variant === 'bend' && (
        <>
          <path d="M6 84 C 64 84, 96 16, 168 28" />
          <path d="M134 8 L 170 27 L 146 46" />
        </>
      )}
      {variant === 'straight' && (
        <>
          <path d="M6 50 L 162 50" />
          <path d="M126 26 L 166 50 L 126 74" />
        </>
      )}
      {variant === 'cork' && (
        <>
          <path d="M8 50 C 26 30, 44 70, 62 50 C 80 30, 98 70, 116 50 C 134 30, 152 66, 170 48" />
          <path d="M138 26 L 172 48 L 148 70" />
        </>
      )}
    </svg>
  );
};

export const InkArrowDown: React.FC<InkProps> = (props) => (
  <svg className={props.className} style={props.style} width={props.width ?? 24} height={props.height ?? 30} viewBox="0 0 40 60" fill="none" stroke="currentColor" strokeWidth={props.strokeWidth ?? 3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 4 C 18 16, 22 26, 20 40" />
    <path d="M5 32 C 12 44, 16 50, 21 56" />
    <path d="M35 32 C 28 44, 24 50, 19 56" />
  </svg>
);

/* ── Hand-drawn underline / stroke ── */
export const InkStroke: React.FC<InkProps & { kind?: 'underline' | 'scratch' | 'squiggle' }> = ({
  kind = 'underline', className, style, width = '100%', height = 10, strokeWidth = 3,
}) => (
  <svg className={className} style={style} width={width} height={height} viewBox="0 0 200 20" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === 'underline' && <path d="M2 12 Q 25 5 50 12 T 100 12 T 150 12 T 198 12" />}
    {kind === 'scratch' && <path d="M4 8 C 40 2, 70 18, 110 8 S 180 4, 198 12" />}
    {kind === 'squiggle' && <path d="M2 10 C 20 2, 40 18, 60 10 S 100 2, 120 10 S 160 18, 180 10 S 196 6, 198 8" />}
  </svg>
);

/* ── Rough hand-drawn circle (highlight around content) ── */
export const InkCircle: React.FC<InkProps> = ({ className, style, width = 120, height = 120, strokeWidth = 3 }) => (
  <S className={className} style={style} width={width} height={height} strokeWidth={strokeWidth}>
    <path d="M24 118 C 6 96, 6 64, 20 38 C 32 16, 70 8, 96 14 C 126 20, 150 46, 148 76 C 146 104, 120 134, 88 136 C 58 138, 34 124, 24 100" />
    <path d="M60 132 C 50 140, 46 146, 50 152" strokeWidth={strokeWidth - 1} />
  </S>
);

/* ── Scribble (doodle noise) ── */
export const InkScribble: React.FC<InkProps> = ({ className, style, width = 120, height = 24, strokeWidth = 3 }) => (
  <svg className={className} style={style} width={width} height={height} viewBox="0 0 200 40" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 20 C 14 6, 26 34, 38 20 C 50 6, 62 34, 74 20 C 86 6, 98 34, 110 20 C 122 6, 134 34, 146 20 C 158 6, 170 34, 182 20 C 188 14, 194 12, 198 14" />
  </svg>
);

/* ── Four-point ink star (sparkle) ── */
export const InkStar: React.FC<InkProps> = ({ className, style, width = 24, height = 24, strokeWidth = 2.5 }) => (
  <svg className={className} style={style} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 1.5 C 12.8 7.5, 16 10.6, 22.5 12 C 16 13.4, 12.8 16.5, 12 22.5 C 11.2 16.5, 8 13.4, 1.5 12 C 8 10.6, 11.2 7.5, 12 1.5 Z" />
  </svg>
);

/* ── Hand-drawn X (cross out / close) ── */
export const InkCross: React.FC<InkProps> = ({ className, style, width = 24, height = 24, strokeWidth = 3 }) => (
  <svg className={className} style={style} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" aria-hidden="true">
    <path d="M5.5 5.5 L 18.5 18.5 M 18.5 5.5 L 5.5 18.5" />
    <path d="M4.5 6.5 L 5.5 5.5" opacity="0" />
  </svg>
);

/* ── Editorial divider rule with center flourish ── */
export const InkDivider: React.FC<InkProps> = ({ className, style, width = '100%', height = 16, strokeWidth = 2.5 }) => (
  <svg className={className} style={style} width={width} height={height} viewBox="0 0 200 24" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" aria-hidden="true">
    <path d="M2 12 H 80" />
    <path d="M120 12 H 198" />
    <path d="M96 6 C 100 3, 103 5, 100 9 M 104 6 C 108 3, 111 5, 108 9" strokeWidth={strokeWidth - 0.5} />
    <circle cx="100" cy="13" r="1.6" fill="currentColor" stroke="none" />
  </svg>
);

/* ── Corner brackets (poster frame) ── */
export const InkBrackets: React.FC<InkProps> = ({ className, style, width = '100%', height = '100%', strokeWidth = 3 }) => (
  <svg className={className} style={style} width={width} height={height} viewBox="0 0 200 200" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 40 V 18 Q 6 6 26 6 H 48" />
    <path d="M152 6 H 174 Q 194 6 194 26 V 48" />
    <path d="M6 160 V 182 Q 6 194 26 194 H 48" />
    <path d="M152 194 H 174 Q 194 194 194 174 V 152" />
  </svg>
);

/* ── Small spiral doodle ── */
export const InkSpiral: React.FC<InkProps> = ({ className, style, width = 24, height = 24, strokeWidth = 2.5 }) => (
  <svg className={className} style={style} width={width} height={height} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" aria-hidden="true">
    <path d="M20 20 m -2 0 a 2 2 0 1 1 4 0 a 6 6 0 1 1 -12 0 a 10 10 0 1 1 20 0 a 14 14 0 1 1 -28 0" />
  </svg>
);

/* ── Swirl doodle ── */
export const InkSwirl: React.FC<InkProps> = ({ className, style, width = 30, height = 30, strokeWidth = 2.5 }) => (
  <svg className={className} style={style} width={width} height={height} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" aria-hidden="true">
    <path d="M6 22 C 6 10, 26 4, 30 13 C 33 21, 21 27, 16 19 C 12 13, 20 10, 24 14" />
  </svg>
);

/* ── Big directional arrow used on the contact page ── */
export const InkArrowBig: React.FC<InkProps & { flip?: boolean }> = ({ className, style, width = 200, height = 80, strokeWidth = 4, flip }) => (
  <svg className={className} style={style} width={width} height={height} viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 78 C 40 10, 120 6, 180 40" />
    <path d="M140 20 L 182 41 L 156 60" />
    {flip && <path d="M30 62 C 50 46, 70 44, 84 52" strokeWidth={strokeWidth - 1.5} />}
  </svg>
);
