import React from 'react';
import { motion } from 'framer-motion';
import { PeepIllustrationProps, PeepColors, PeepPose } from '../types';

const DEFAULT_COLORS: Required<PeepColors> = {
  skin: '#FFD5A0',
  hair: '#2D2D2D',
  outfit: '#0047FF',
};

/* ── Idle animation variants for each pose ── */
const IDLE_ANIMATIONS: Record<PeepPose, { animate: Record<string, unknown>; transition: Record<string, unknown> }> = {
  'sitting-laptop': {
    animate: { y: [0, -3, 0] },
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
  'standing-wave': {
    animate: { rotate: [0, -2, 0, 2, 0] },
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
  'pointing-right': {
    animate: { x: [0, 4, 0] },
    transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
  },
  'thinking': {
    animate: { rotate: [0, -1, 0] },
    transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
  },
  'working-desk': {
    animate: { y: [0, -2, 0] },
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
  'thumbs-up': {
    animate: { rotate: [0, -3, 0, 3, 0] },
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
};

const SittingLaptop: React.FC<{ c: Required<PeepColors> }> = ({ c }) => (
  <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <ellipse cx="100" cy="52" rx="32" ry="34" fill={c.hair} />
    <circle cx="100" cy="56" r="28" fill={c.skin} stroke="#0A0A0A" strokeWidth="3" />
    <path d="M72 48c0-18 12-32 28-32s28 14 28 32c0 2-1 4-3 5 4-2 8-8 8-16 0-16-14-28-33-28S67 37 67 53c0 8 3 13 7 15-2-1-3-3-3-5z" fill={c.hair} stroke="#0A0A0A" strokeWidth="2" />
    {/* Eyes with blink */}
    <circle cx="90" cy="56" r="3" fill="#0A0A0A" />
    <circle cx="110" cy="56" r="3" fill="#0A0A0A" />
    <path d="M92 66c3 4 13 4 16 0" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M76 84c0-4 10-8 24-8s24 4 24 8v44c0 4-4 8-8 8H84c-4 0-8-4-8-8V84z" fill={c.outfit} stroke="#0A0A0A" strokeWidth="3" />
    <path d="M76 92c-12 6-18 20-16 30" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill={c.skin} />
    <path d="M124 92c12 6 18 20 16 30" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill={c.skin} />
    <circle cx="60" cy="124" r="6" fill={c.skin} stroke="#0A0A0A" strokeWidth="2" />
    <circle cx="140" cy="124" r="6" fill={c.skin} stroke="#0A0A0A" strokeWidth="2" />
    <path d="M84 136c-4 16-2 32 8 40" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M116 136c4 16 2 32-8 40" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M92 176l-8 8" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
    <path d="M108 176l8 8" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
    <rect x="62" y="118" width="76" height="6" rx="1" fill="#555" stroke="#0A0A0A" strokeWidth="2" />
    <rect x="66" y="100" width="68" height="20" rx="2" fill="#333" stroke="#0A0A0A" strokeWidth="2" />
    <rect x="70" y="104" width="60" height="12" rx="1" fill={c.outfit} opacity="0.3" />
    <line x1="80" y1="107" x2="120" y2="107" stroke="#FFF" strokeWidth="1.5" opacity="0.6" />
    <line x1="80" y1="111" x2="108" y2="111" stroke="#FFF" strokeWidth="1.5" opacity="0.4" />
  </svg>
);

const StandingWave: React.FC<{ c: Required<PeepColors> }> = ({ c }) => (
  <svg viewBox="0 0 160 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <ellipse cx="80" cy="42" rx="30" ry="32" fill={c.hair} />
    <circle cx="80" cy="46" r="26" fill={c.skin} stroke="#0A0A0A" strokeWidth="3" />
    <path d="M54 40c0-16 12-28 26-28s26 12 26 28c0 2-1 3-2 4 4-2 7-7 7-14 0-14-12-25-31-25S49 30 49 44c0 7 3 11 6 13-2-1-2-3-2-4z" fill={c.hair} stroke="#0A0A0A" strokeWidth="2" />
    <circle cx="72" cy="46" r="3" fill="#0A0A0A" />
    <circle cx="88" cy="46" r="3" fill="#0A0A0A" />
    <path d="M73 56c3 3 11 3 14 0" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M60 72c0-3 8-6 20-6s20 3 20 6v50c0 4-4 6-8 6H68c-4 0-8-2-8-6V72z" fill={c.outfit} stroke="#0A0A0A" strokeWidth="3" />
    {/* Waving arm — this one animates */}
    <motion.g
      animate={{ rotate: [0, -15, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      style={{ transformOrigin: '60px 80px' }}
    >
      <path d="M60 80c-10-4-20-14-22-26" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M60 80c-10-4-20-14-22-26" stroke={c.skin} strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M60 80c-10-4-20-14-22-26" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="38" cy="54" r="5" fill={c.skin} stroke="#0A0A0A" strokeWidth="2" />
    </motion.g>
    <path d="M100 80c10 8 14 20 12 32" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M100 80c10 8 14 20 12 32" stroke={c.skin} strokeWidth="8" strokeLinecap="round" fill="none" />
    <path d="M100 80c10 8 14 20 12 32" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
    <circle cx="112" cy="114" r="5" fill={c.skin} stroke="#0A0A0A" strokeWidth="2" />
    <path d="M72 128v60" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
    <path d="M72 128v60" stroke={c.skin} strokeWidth="8" strokeLinecap="round" />
    <path d="M72 128v60" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
    <path d="M88 128v60" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
    <path d="M88 128v60" stroke={c.skin} strokeWidth="8" strokeLinecap="round" />
    <path d="M88 128v60" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
    <rect x="64" y="186" width="16" height="10" rx="2" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="2" />
    <rect x="80" y="186" width="16" height="10" rx="2" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="2" />
  </svg>
);

const PointingRight: React.FC<{ c: Required<PeepColors> }> = ({ c }) => (
  <svg viewBox="0 0 180 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <ellipse cx="70" cy="42" rx="28" ry="30" fill={c.hair} />
    <circle cx="70" cy="46" r="26" fill={c.skin} stroke="#0A0A0A" strokeWidth="3" />
    <path d="M44 40c0-16 12-28 26-28s26 12 26 28c0 2-1 3-2 4 4-2 7-7 7-14 0-14-12-25-31-25S39 30 39 44c0 7 3 11 6 13-2-1-2-3-2-4z" fill={c.hair} stroke="#0A0A0A" strokeWidth="2" />
    <circle cx="62" cy="46" r="3" fill="#0A0A0A" />
    <circle cx="78" cy="46" r="3" fill="#0A0A0A" />
    <path d="M62 56c3 3 11 3 14 0" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M50 72c0-3 8-6 20-6s20 3 20 6v46c0 4-4 6-8 6H58c-4 0-8-2-8-6V72z" fill={c.outfit} stroke="#0A0A0A" strokeWidth="3" />
    <path d="M50 80c-8 6-12 16-10 28" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M50 80c-8 6-12 16-10 28" stroke={c.skin} strokeWidth="8" strokeLinecap="round" fill="none" />
    <path d="M50 80c-8 6-12 16-10 28" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
    <circle cx="40" cy="110" r="5" fill={c.skin} stroke="#0A0A0A" strokeWidth="2" />
    {/* Pointing arm */}
    <path d="M90 82c14-2 30-4 46-6" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M90 82c14-2 30-4 46-6" stroke={c.skin} strokeWidth="8" strokeLinecap="round" fill="none" />
    <path d="M90 82c14-2 30-4 46-6" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M136 76l10-2 10-2" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M136 76l10-2 10-2" stroke={c.skin} strokeWidth="5" strokeLinecap="round" fill="none" />
    <path d="M136 76l10-2 10-2" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M62 124v56" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
    <path d="M62 124v56" stroke={c.skin} strokeWidth="8" strokeLinecap="round" />
    <path d="M62 124v56" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
    <path d="M78 124v56" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
    <path d="M78 124v56" stroke={c.skin} strokeWidth="8" strokeLinecap="round" />
    <path d="M78 124v56" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
    <rect x="54" y="178" width="16" height="10" rx="2" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="2" />
    <rect x="70" y="178" width="16" height="10" rx="2" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="2" />
  </svg>
);

const ThinkingPose: React.FC<{ c: Required<PeepColors> }> = ({ c }) => (
  <svg viewBox="0 0 160 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <ellipse cx="80" cy="42" rx="28" ry="30" fill={c.hair} />
    <circle cx="80" cy="46" r="26" fill={c.skin} stroke="#0A0A0A" strokeWidth="3" />
    <path d="M54 40c0-16 12-28 26-28s26 12 26 28c0 2-1 3-2 4 4-2 7-7 7-14 0-14-12-25-31-25S49 30 49 44c0 7 3 11 6 13-2-1-2-3-2-4z" fill={c.hair} stroke="#0A0A0A" strokeWidth="2" />
    <circle cx="72" cy="43" r="3" fill="#0A0A0A" />
    <circle cx="88" cy="43" r="3" fill="#0A0A0A" />
    <path d="M74 56c2-1 8-1 12 0" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M60 72c0-3 8-6 20-6s20 3 20 6v46c0 4-4 6-8 6H68c-4 0-8-2-8-6V72z" fill={c.outfit} stroke="#0A0A0A" strokeWidth="3" />
    <path d="M60 82c-6 2-10 10-8 20c1 6 4 10 8 14" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M60 82c-6 2-10 10-8 20c1 6 4 10 8 14" stroke={c.skin} strokeWidth="8" strokeLinecap="round" fill="none" />
    <path d="M60 82c-6 2-10 10-8 20c1 6 4 10 8 14" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
    <circle cx="60" cy="62" r="5" fill={c.skin} stroke="#0A0A0A" strokeWidth="2" />
    <path d="M100 82c8 8 10 18 6 28" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M100 82c8 8 10 18 6 28" stroke={c.skin} strokeWidth="8" strokeLinecap="round" fill="none" />
    <path d="M100 82c8 8 10 18 6 28" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
    <circle cx="106" cy="112" r="5" fill={c.skin} stroke="#0A0A0A" strokeWidth="2" />
    <path d="M72 124v56" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
    <path d="M72 124v56" stroke={c.skin} strokeWidth="8" strokeLinecap="round" />
    <path d="M72 124v56" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
    <path d="M88 124v56" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
    <path d="M88 124v56" stroke={c.skin} strokeWidth="8" strokeLinecap="round" />
    <path d="M88 124v56" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
    <rect x="64" y="178" width="16" height="10" rx="2" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="2" />
    <rect x="80" y="178" width="16" height="10" rx="2" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="2" />
    {/* Thought bubbles */}
    <circle cx="120" cy="28" r="4" fill="#FFF" stroke="#0A0A0A" strokeWidth="2" />
    <circle cx="130" cy="18" r="6" fill="#FFF" stroke="#0A0A0A" strokeWidth="2" />
    <circle cx="142" cy="10" r="9" fill="#FFF" stroke="#0A0A0A" strokeWidth="2" />
    <text x="139" y="14" fontSize="10" fontWeight="bold" fill="#0A0A0A" textAnchor="middle">?</text>
  </svg>
);

const WorkingDesk: React.FC<{ c: Required<PeepColors> }> = ({ c }) => (
  <svg viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="20" y="130" width="200" height="8" rx="1" fill="#8B7355" stroke="#0A0A0A" strokeWidth="3" />
    <rect x="30" y="138" width="8" height="50" fill="#8B7355" stroke="#0A0A0A" strokeWidth="2" />
    <rect x="202" y="138" width="8" height="50" fill="#8B7355" stroke="#0A0A0A" strokeWidth="2" />
    <rect x="140" y="70" width="60" height="45" rx="3" fill="#333" stroke="#0A0A0A" strokeWidth="3" />
    <rect x="144" y="74" width="52" height="37" rx="1" fill={c.outfit} opacity="0.2" />
    <rect x="165" y="115" width="10" height="15" fill="#555" stroke="#0A0A0A" strokeWidth="2" />
    <rect x="155" y="128" width="30" height="4" rx="1" fill="#555" stroke="#0A0A0A" strokeWidth="2" />
    <line x1="150" y1="82" x2="190" y2="82" stroke="#FFF" strokeWidth="2" opacity="0.5" />
    <line x1="150" y1="88" x2="180" y2="88" stroke="#FFF" strokeWidth="2" opacity="0.3" />
    <line x1="150" y1="94" x2="186" y2="94" stroke="#FFF" strokeWidth="2" opacity="0.4" />
    <line x1="150" y1="100" x2="170" y2="100" stroke="#FFE500" strokeWidth="2" opacity="0.6" />
    <rect x="40" y="115" width="18" height="16" rx="2" fill="#FFF" stroke="#0A0A0A" strokeWidth="2" />
    <path d="M58 119c4 0 6 2 6 5s-2 5-6 5" stroke="#0A0A0A" strokeWidth="2" fill="none" />
    <circle cx="100" cy="50" r="22" fill={c.skin} stroke="#0A0A0A" strokeWidth="3" />
    <ellipse cx="100" cy="44" rx="22" ry="18" fill={c.hair} />
    <path d="M78 40c0-14 10-24 22-24s22 10 22 24c0 2-1 3-2 3 3-1 6-6 6-12 0-12-10-22-26-22S74 29 74 41c0 6 2 9 5 11-1-1-2-2-2-3z" fill={c.hair} stroke="#0A0A0A" strokeWidth="2" />
    <circle cx="93" cy="50" r="2.5" fill="#0A0A0A" />
    <circle cx="107" cy="50" r="2.5" fill="#0A0A0A" />
    <line x1="95" y1="58" x2="105" y2="58" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" />
    <path d="M82 72c0-2 8-5 18-5s18 3 18 5v30c0 3-3 5-7 5H89c-4 0-7-2-7-5V72z" fill={c.outfit} stroke="#0A0A0A" strokeWidth="3" />
    <path d="M82 78c-8 4-12 12-10 20" stroke={c.skin} strokeWidth="8" strokeLinecap="round" fill="none" />
    <path d="M82 78c-8 4-12 12-10 20" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
    <circle cx="72" cy="100" r="4" fill={c.skin} stroke="#0A0A0A" strokeWidth="2" />
    <path d="M118 78c8 4 12 12 10 20" stroke={c.skin} strokeWidth="8" strokeLinecap="round" fill="none" />
    <path d="M118 78c8 4 12 12 10 20" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
    <circle cx="128" cy="100" r="4" fill={c.skin} stroke="#0A0A0A" strokeWidth="2" />
    <rect x="70" y="122" width="40" height="6" rx="1" fill="#DDD" stroke="#0A0A0A" strokeWidth="2" />
  </svg>
);

const ThumbsUp: React.FC<{ c: Required<PeepColors> }> = ({ c }) => (
  <svg viewBox="0 0 160 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <ellipse cx="80" cy="42" rx="28" ry="30" fill={c.hair} />
    <circle cx="80" cy="46" r="26" fill={c.skin} stroke="#0A0A0A" strokeWidth="3" />
    <path d="M54 40c0-16 12-28 26-28s26 12 26 28c0 2-1 3-2 4 4-2 7-7 7-14 0-14-12-25-31-25S49 30 49 44c0 7 3 11 6 13-2-1-2-3-2-4z" fill={c.hair} stroke="#0A0A0A" strokeWidth="2" />
    <circle cx="72" cy="46" r="3" fill="#0A0A0A" />
    <circle cx="88" cy="46" r="3" fill="#0A0A0A" />
    <path d="M73 56c3 4 11 4 14 0" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M60 72c0-3 8-6 20-6s20 3 20 6v46c0 4-4 6-8 6H68c-4 0-8-2-8-6V72z" fill={c.outfit} stroke="#0A0A0A" strokeWidth="3" />
    {/* Left arm at side */}
    <path d="M60 80c-8 6-12 16-10 28" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M60 80c-8 6-12 16-10 28" stroke={c.skin} strokeWidth="8" strokeLinecap="round" fill="none" />
    <path d="M60 80c-8 6-12 16-10 28" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
    <circle cx="50" cy="110" r="5" fill={c.skin} stroke="#0A0A0A" strokeWidth="2" />
    {/* Right arm — thumbs up */}
    <path d="M100 80c8-4 14-12 16-22" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M100 80c8-4 14-12 16-22" stroke={c.skin} strokeWidth="8" strokeLinecap="round" fill="none" />
    <path d="M100 80c8-4 14-12 16-22" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
    {/* Thumb */}
    <rect x="112" y="48" width="8" height="16" rx="4" fill={c.skin} stroke="#0A0A0A" strokeWidth="2" />
    {/* Fist */}
    <circle cx="116" cy="66" r="6" fill={c.skin} stroke="#0A0A0A" strokeWidth="2" />
    {/* Legs */}
    <path d="M72 124v56" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
    <path d="M72 124v56" stroke={c.skin} strokeWidth="8" strokeLinecap="round" />
    <path d="M72 124v56" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
    <path d="M88 124v56" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
    <path d="M88 124v56" stroke={c.skin} strokeWidth="8" strokeLinecap="round" />
    <path d="M88 124v56" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
    <rect x="64" y="178" width="16" height="10" rx="2" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="2" />
    <rect x="80" y="178" width="16" height="10" rx="2" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="2" />
  </svg>
);

const POSES: Record<PeepPose, React.FC<{ c: Required<PeepColors> }>> = {
  'sitting-laptop': SittingLaptop,
  'standing-wave': StandingWave,
  'pointing-right': PointingRight,
  'thinking': ThinkingPose,
  'working-desk': WorkingDesk,
  'thumbs-up': ThumbsUp,
};

const PeepIllustration: React.FC<PeepIllustrationProps> = ({
  pose,
  colors = {},
  className = '',
  size,
  animate = true,
}) => {
  const c: Required<PeepColors> = { ...DEFAULT_COLORS, ...colors };
  const PoseComponent = POSES[pose];
  const idle = animate ? IDLE_ANIMATIONS[pose] : undefined;

  return (
    <motion.div
      className={`inline-block ${className}`}
      style={size ? { width: size, height: 'auto' } : undefined}
      role="img"
      aria-label={`Illustration: person ${pose.replace(/-/g, ' ')}`}
      {...(idle ? { animate: idle.animate, transition: idle.transition } : {})}
    >
      <PoseComponent c={c} />
    </motion.div>
  );
};

export default PeepIllustration;
