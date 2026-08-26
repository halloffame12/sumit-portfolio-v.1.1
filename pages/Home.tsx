import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { MARQUEE_ITEMS, PROFILE } from '../data/profile';
import { ALL_PROJECTS, ACTIVE_PROJECTS, PROJECT_COUNTS, getFormattedDate, getCurrentStreak, getLastActiveLabel } from '../portfolioData';
import { SPRING_SNAPPY, SPRING_BOUNCY, staggerContainer, fadeUp } from '../types';
import SeoHelmet from '../components/SeoHelmet';
import MagneticButton from '../components/MagneticButton';
import ScrollReveal from '../components/ScrollReveal';
import ProjectChapter from '../components/ProjectChapter';
import ProjectModal from '../components/ProjectModal';
import CurrentlyBuilding from '../components/CurrentlyBuilding';
import GitHubActivity from '../components/GitHubActivity';
import StatCounter from '../components/StatCounter';
import ChapterHeader from '../components/ChapterHeader';
import StatusBadge from '../components/StatusBadge';
import { InkArrow, InkBrackets, InkCircle, InkScribble, InkSpiral, InkStar, InkStroke } from '../components/Ink';
import type { Project } from '../types';

/* ═══════════════════════════════════════════════════════════
   TEXT SCRAMBLE — decode from random glyphs into final text
   ═══════════════════════════════════════════════════════════ */
const SCRAMBLE_CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const TextScramble: React.FC<{ text: string; delay?: number; className?: string; style?: React.CSSProperties }> = ({ text, delay = 0, className, style }) => {
  const [display, setDisplay] = useState(() => text.split('').map(() => SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]));
  const frameRef = useRef(0);

  useEffect(() => {
    const scrambleDuration = 600;
    const staggerPerChar = 30;
    const startTime = Date.now() + delay * 1000;

    const tick = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      if (elapsed < 0) { frameRef.current = requestAnimationFrame(tick); return; }

      const newDisplay = text.split('').map((finalChar, i) => {
        const charStart = i * staggerPerChar;
        const progress = Math.min(1, Math.max(0, (elapsed - charStart) / scrambleDuration));
        if (progress >= 1) return finalChar;
        if (progress <= 0) return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        const eased = progress * progress;
        if (eased > 0.7) return finalChar;
        return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      });

      setDisplay(newDisplay);
      if (newDisplay.some((c, i) => c !== text[i])) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [text, delay]);

  return (
    <span className={className} style={style}>
      {display.map((char, i) => (
        <span key={i} className="inline-block" style={{ opacity: char === text[i] ? 1 : 0.4 }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

/* ═══════════════════════════════════════════════════════════
   HERO BACKGROUND — dot grid + 3 curated ink doodles
   ═══════════════════════════════════════════════════════════ */
const HeroBackground: React.FC = () => {
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, [mouseX, mouseY]);

  const y1 = useTransform(scrollY, [0, 600], [0, -150]);
  const y2 = useTransform(scrollY, [0, 600], [0, -60]);
  const mx1 = useSpring(useTransform(mouseX, v => v * 18), { stiffness: 100, damping: 25 });
  const mx2 = useSpring(useTransform(mouseX, v => v * -14), { stiffness: 100, damping: 25 });
  const my1 = useSpring(useTransform(mouseY, v => v * 10), { stiffness: 100, damping: 25 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="hero-bg-pattern" />

      <motion.div
        className="absolute"
        style={{ top: '-6%', right: '-4%', y: y1, x: mx1, opacity: 0.05, width: 'clamp(200px, 26vw, 360px)' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <InkCircle width="100%" height="100%" strokeWidth={2} />
      </motion.div>

      <motion.div
        className="absolute"
        style={{ bottom: '14%', left: '-1%', y: y2, x: mx2, opacity: 0.06, width: 'clamp(100px, 14vw, 200px)' }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.06, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <InkScribble width="100%" height={10} strokeWidth={2} />
      </motion.div>

      <motion.div
        className="absolute"
        style={{ top: '36%', right: '6%', y: y2, x: my1, opacity: 0.1 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ ...SPRING_BOUNCY, delay: 0.9 }}
      >
        <InkStar width={16} height={16} />
      </motion.div>

      <motion.svg
        className="absolute"
        style={{ top: '20%', right: '3%', height: 'clamp(80px, 12vh, 140px)', width: '10px', y: y1, opacity: 0.06 }}
        viewBox="0 0 10 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.06 }}
        transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <path d="M5 0 C 8 30, 2 60, 5 90 S 2 150, 5 180 S 8 196, 5 200" />
      </motion.svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   PHOTO TILT — ink-framed portrait with mouse parallax
   ═══════════════════════════════════════════════════════════ */
const PhotoTilt: React.FC<{ activeProject?: Project | null }> = ({ activeProject }) => {
  const tiltRef = useRef<HTMLDivElement>(null);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springX = useSpring(tiltX, { stiffness: 150, damping: 20 });
  const springY = useSpring(tiltY, { stiffness: 150, damping: 20 });

  const handleMouse = useCallback((e: React.MouseEvent) => {
    const rect = tiltRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    tiltX.set(x * 10);
    tiltY.set(y * -7);
  }, [tiltX, tiltY]);

  const handleLeave = useCallback(() => {
    tiltX.set(0);
    tiltY.set(0);
  }, [tiltX, tiltY]);

  useEffect(() => {
    const handleGyro = (e: DeviceOrientationEvent) => {
      if (e.gamma == null || e.beta == null) return;
      tiltX.set(Math.max(-10, Math.min(10, e.gamma * 0.3)));
      tiltY.set(Math.max(-7, Math.min(7, (e.beta - 45) * 0.25)));
    };
    window.addEventListener('deviceorientation', handleGyro, { passive: true });
    return () => window.removeEventListener('deviceorientation', handleGyro);
  }, [tiltX, tiltY]);

  return (
    <motion.div
      ref={tiltRef}
      className="relative"
      style={{ maxWidth: '300px', width: '100%', rotateX: springY, rotateY: springX, transformPerspective: 800 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
    >
      <div className="hidden lg:block" style={{ position: 'absolute', inset: '-12px', color: 'var(--black)', opacity: 0.8, zIndex: 6, pointerEvents: 'none' }}>
        <InkBrackets width="100%" height="100%" strokeWidth={2.5} />
      </div>

      <div style={{
        position: 'relative',
        border: 'var(--bw) solid var(--border)',
        boxShadow: 'var(--sh-lg)',
        background: 'var(--bg-card)',
        padding: '0.5rem 0.5rem 0',
        transform: 'rotate(-1.5deg)',
      }}>
        <img
          src="/sumit.jpg"
          alt="Sumit Chauhan - Software Engineer based in Delhi, India"
          width={960}
          height={1280}
          style={{ width: '100%', aspectRatio: '3/3.4', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
          loading="eager"
        />
        <p className="font-ink" style={{ padding: '0.4rem 0.2rem 0.5rem', fontSize: '0.9rem', color: 'var(--ink-faint)', textAlign: 'center', lineHeight: 1.1 }}>
          the one who writes the story
        </p>
      </div>

      <div aria-hidden="true" style={{ position: 'absolute', top: '-14px', left: '-16px', width: '80px', height: '24px', background: 'rgba(236,230,217,0.85)', border: '1px solid var(--border)', transform: 'rotate(-42deg)', zIndex: 4 }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: '-14px', right: '-16px', width: '80px', height: '24px', background: 'rgba(236,230,217,0.85)', border: '1px solid var(--border)', transform: 'rotate(42deg)', zIndex: 4 }} />

      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
        animate={{ opacity: 1, scale: 1, rotate: -4 }}
        transition={{ ...SPRING_BOUNCY, delay: 1.3 }}
        style={{ position: 'absolute', top: '-24px', right: '-10px', zIndex: 7 }}
      >
        <div className="flex items-center gap-2 brutal-badge" style={{ padding: '0.35rem 0.65rem', boxShadow: 'var(--sh-sm)', background: 'var(--bg-card)', lineHeight: 1.4 }}>
          <span className="animate-pulse-dot" style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--black)', display: 'inline-block' }} />
          <span>
            <span className="block" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.5rem', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1.6 }}>
              Currently Building
            </span>
            <span className="block font-mono" style={{ fontSize: '0.5rem', color: 'var(--ink-faint)', lineHeight: 1.6 }}>
              {activeProject?.title ?? 'something new'}
            </span>
          </span>
        </div>
      </motion.div>

      <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '-28px', zIndex: 7, transform: 'translateY(-50%)' }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING_BOUNCY, delay: 1.45 }}
        >
          <div className="flex items-center gap-1.5" style={{ transform: 'rotate(-3deg)' }}>
            <InkStar width={14} height={14} />
            <span className="font-ink" style={{ fontSize: '1.1rem', color: 'var(--ink-faint)' }}>Delhi, IN</span>
          </div>
        </motion.div>
      </div>

      <div style={{ position: 'absolute', top: '50%', right: '-34px', zIndex: 7, transform: 'translateY(-50%)' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...SPRING_BOUNCY, delay: 1.55 }}
        >
          <div className="ink-block" style={{ padding: '0.3rem 0.6rem', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em', transform: 'rotate(2deg)' }}>
            Open for work
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

/* ═══ CHAPTER CONNECTOR — tiny thread continuation between chapters ═══ */
const ChapterConnector: React.FC<{ label?: string }> = ({ label }) => (
  <div className="flex flex-col items-center" style={{ margin: '0.75rem 0 1.25rem' }} aria-hidden="true">
    <span className="ink-thread-node" />
    <svg width="3" height="34" viewBox="0 0 3 34" fill="none" preserveAspectRatio="none" style={{ color: 'var(--border)' }}>
      <path d="M1.5 0 C 3 10, 0 20, 1.5 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
    {label && (
      <span className="font-mono" style={{ fontSize: '0.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-faint)', marginTop: '0.25rem' }}>
        {label}
      </span>
    )}
  </div>
);

/* ═══ HOME PAGE ═══ */
const Home: React.FC = () => {
  const [active, setActive] = useState<Project | null>(null);
  const chapters = ALL_PROJECTS.slice(0, 3);
  const activeProject = ACTIVE_PROJECTS[0];
  const { scrollY } = useScroll();

  const metrics = [
    { num: PROJECT_COUNTS.total, suffix: '+', label: 'Shipped Projects' },
    { num: PROJECT_COUNTS.openSource, suffix: '+', label: 'Open Source' },
    { num: getCurrentStreak(), suffix: 'w', label: 'Week Streak' },
    { num: 24, suffix: 'h', label: 'Response Time' },
  ];

  /* Hero scroll-close: scale down + fade as user scrolls past */
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.97]);
  const heroOpacity = useTransform(scrollY, [0, 350], [1, 0]);

  return (
    <article>
      <SeoHelmet path="/" />

      {/* ═══ CHAPTER 01 — THE COVER · the whole story fits on one screen ═══ */}
      <motion.section
        className="relative overflow-hidden grain-overlay"
        style={{ height: '100svh', minHeight: '540px', maxHeight: '100svh', overflow: 'hidden', display: 'flex', flexDirection: 'column', scale: heroScale, opacity: heroOpacity }}
      >
        <HeroBackground />

        <div className="page-container relative z-10 w-full flex-1 flex flex-col" style={{ minHeight: 0 }}>
          {/* Cover header */}
          <div className="flex items-center justify-between gap-3 flex-wrap" style={{ paddingTop: 'clamp(4.5rem, 7vh, 6rem)', paddingBottom: 'clamp(0.5rem, 1.5vh, 1rem)' }}>
            <motion.span
              className="ink-page-chip"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING_SNAPPY, delay: 0.05 }}
            >CHAPTER 01 / 09 — THE COVER</motion.span>
            <motion.span
              className="font-ink hidden sm:block"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...SPRING_SNAPPY, delay: 0.3 }}
              style={{ fontSize: '1.1rem', color: 'var(--ink-faint)', transform: 'rotate(-2deg)' }}
            >
              an ink story, drawn from real commits
            </motion.span>
          </div>

          {/* Cover body — asymmetric grid */}
          <div className="flex-1 flex items-center" style={{ minHeight: 0, overflow: 'hidden' }}>
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-14 items-center w-full">

              {/* ── Story text ── */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                {/* Intro line — handwritten ink arrow + Caveat text */}
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...SPRING_SNAPPY, delay: 0.1 }}
                  style={{ marginBottom: 'clamp(0.5rem, 1vh, 0.85rem)' }}
                >
                  <InkArrow variant="bend" width={36} height={18} strokeWidth={2.5} style={{ color: 'var(--ink-faint)', transform: 'scaleX(-1)' }} />
                  <span className="font-ink" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.35rem)', color: 'var(--ink-faint)', transform: 'rotate(-1.5deg)' }}>
                    once upon a build, a developer decided to write everything down —
                  </span>
                </motion.div>

                {/* Name — TextScramble with ink underline */}
                <h1 className="hero-name-display" style={{ marginBottom: 'clamp(0.5rem, 1.2vh, 0.85rem)' }}>
                  <motion.span
                    className="block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.08 }}
                  >
                    <TextScramble text="SUMIT" delay={0.06} />
                  </motion.span>
                  <span className="block relative" style={{ display: 'inline-block' }}>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.22 }}
                    >
                      <TextScramble text="CHAUHAN" delay={0.22} />
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ delay: 0.82, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      style={{ position: 'absolute', left: 0, bottom: '-0.12em', width: '68%', transformOrigin: 'left', display: 'block' }}
                    >
                      <InkStroke kind="scratch" width="100%" height={10} />
                    </motion.span>
                  </span>
                </h1>

                {/* Role line */}
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...SPRING_SNAPPY, delay: 0.65 }}
                  className="font-mono"
                  style={{
                    fontSize: 'clamp(0.5625rem, 0.9vw, 0.6875rem)',
                    fontWeight: 700, color: 'var(--ink-soft)', letterSpacing: '0.14em',
                    textTransform: 'uppercase', marginBottom: 'clamp(0.6rem, 1.4vh, 1rem)',
                  }}
                >
                  {PROFILE.roleLine}
                </motion.p>

                {/* Accomplishments — scannable proof list */}
                <motion.ul
                  className="hero-accomplishments"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.08, delayChildren: 0.75 } },
                  }}
                  style={{ marginBottom: 'clamp(0.75rem, 1.8vh, 1.25rem)' }}
                >
                  {[
                    'ctx - MCP server that Claude, Cursor & opencode call over stdio',
                    'Rust code-graph engine indexing 1,200+ files in ~1s',
                    'Versz - production social debate platform (React + Flutter)',
                    'Published research on BrowserOS (Rust + WebAssembly)',
                  ].map((item) => (
                    <motion.li
                      key={item}
                      variants={{
                        hidden: { opacity: 0, x: -12 },
                        show: { opacity: 1, x: 0, transition: SPRING_SNAPPY },
                      }}
                    >{item}</motion.li>
                  ))}
                </motion.ul>

                {/* CTAs — staggered entrance */}
                <motion.div variants={staggerContainer} initial="hidden" animate="show" className="flex flex-wrap gap-3">
                  <motion.div variants={fadeUp}>
                    <MagneticButton strength={0.25}>
                      <Link to="/projects" className="brutal-btn">
                        Browse case files <ArrowRight size={15} />
                      </Link>
                    </MagneticButton>
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    <MagneticButton strength={0.25}>
                      <Link to="/contact" className="brutal-btn-outline">
                        Skip to the last chapter <ArrowUpRight size={15} />
                      </Link>
                    </MagneticButton>
                  </motion.div>
                </motion.div>

                {/* Meta line */}
                <motion.p
                  className="font-mono"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  style={{ marginTop: 'clamp(0.75rem, 2vh, 1.25rem)', fontSize: '0.5625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-faint)' }}
                >
                  9 chapters · {PROJECT_COUNTS.total}+ real projects · synced live from GitHub
                </motion.p>
              </div>

              {/* ── Cover illustration (desktop) ── */}
              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ ...SPRING_BOUNCY, delay: 0.18 }}
                className="hidden lg:flex justify-end"
              >
                <PhotoTilt activeProject={activeProject} />
              </motion.div>

              {/* ── Compact photo (mobile) ── */}
              <motion.div
                className="lg:hidden flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...SPRING_SNAPPY, delay: 0.55 }}
              >
                <div className="relative" style={{ maxWidth: '140px', width: '100%' }}>
                  <div style={{
                    border: 'var(--bw) solid var(--border)',
                    boxShadow: 'var(--sh-sm)',
                    background: 'var(--bg-card)',
                    padding: '0.3rem 0.3rem 0',
                    transform: 'rotate(-1deg)',
                  }}>
                    <img
                      src="/sumit.jpg"
                      alt="Sumit Chauhan"
                      width={960}
                      height={1280}
                      style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                      loading="eager"
                    />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ...SPRING_BOUNCY, delay: 0.85 }}
                    style={{ position: 'absolute', top: '-8px', right: '-8px', zIndex: 2 }}
                  >
                    <div className="flex items-center gap-1 brutal-badge" style={{ padding: '0.2rem 0.4rem', boxShadow: 'var(--sh-sm)', background: 'var(--bg-card)', fontSize: '0.45rem' }}>
                      <span className="animate-pulse-dot" style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--black)', display: 'inline-block' }} />
                      <span className="font-mono" style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>building</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Cover footer — metrics bar */}
          <div className="flex-none" style={{ paddingBottom: 'clamp(0.75rem, 2vh, 1.25rem)' }}>
            <div style={{ borderTop: 'var(--bw) solid var(--border)', paddingTop: '0.75rem', maxWidth: '48rem' }}>
              <div className="flex items-center justify-between flex-wrap gap-y-2">
                <div className="flex items-center flex-wrap gap-x-5 gap-y-1.5">
                  {metrics.map((s, i) => (
                    <div key={s.label} className="flex items-center gap-2" style={i < metrics.length - 1 ? { borderRight: 'var(--bw-sm) solid var(--border)', paddingRight: '1rem' } : {}}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--black)' }}>
                        <StatCounter value={s.num} suffix={s.suffix} />
                      </span>
                      <span className="font-mono" style={{ fontSize: '0.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-faint)' }}>{s.label}</span>
                    </div>
                  ))}
                </div>
                <div className="hidden md:flex items-center gap-2">
                  <span className="font-mono" style={{ fontSize: '0.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-faint)' }}>Last pushed</span>
                  <span className="brutal-badge" style={{ fontSize: '0.5rem', padding: '0.15rem 0.5rem' }}>{getLastActiveLabel()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ═══ MARQUEE ═══ */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="marquee-item">{item}</span>
          ))}
        </div>
      </div>

      {/* ═══ CHAPTER 02 — MIND · on the desk right now ═══ */}
      <CurrentlyBuilding projects={ACTIVE_PROJECTS} />
      <div className="page-container"><ChapterConnector label="the work continues ↓" /></div>

      {/* ═══ CHAPTER 03 — WORK · a taste of the chapters ═══ */}
      <section className="page-container" style={{ paddingTop: 'var(--section-gap)' }} aria-labelledby="work-teaser-h">
        <ScrollReveal variant="fadeUp">
          <ChapterHeader
            kicker="Chapter 03 — Work"
            page="PAGE 03 / 09 · THE CASEBOOK"
            titleId="work-teaser-h"
            title={<>A taste of the <span className="ink-underline">chapters</span></>}
            intro="three entries from the casebook — the rest is on the work page"
          />
        </ScrollReveal>

        {/* featured chapter — the poster */}
        <ScrollReveal variant="fadeUp" delay={0.06}>
          <ProjectChapter project={chapters[0]} index={0} onOpen={setActive} />
        </ScrollReveal>

        {/* also in this volume — compact contents */}
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="sheet-lined relative" style={{ border: 'var(--bw) solid var(--border)', boxShadow: 'var(--sh-lg)', background: 'var(--bg-card)', transform: 'rotate(0.15deg)' }}>
            <div className="flex items-center justify-between flex-wrap gap-2" style={{ padding: '0.875rem 1.125rem', borderBottom: 'var(--bw-sm) dashed var(--border)' }}>
              <span className="font-mono ink-label" style={{ color: 'var(--ink-faint)' }}>Also in this volume</span>
              <span className="font-ink" style={{ fontSize: '1rem', color: 'var(--ink-faint)', transform: 'rotate(-2deg)' }}>keep going →</span>
            </div>
            <div className="flex flex-col">
              {chapters.slice(1).map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActive(p)}
                  className="group flex items-center gap-4 text-left w-full"
                  style={{ padding: '1rem 1.125rem', borderBottom: i < chapters.slice(1).length - 1 ? 'var(--bw-sm) dashed var(--border)' : 'none', background: 'none', cursor: 'pointer' }}
                >
                  <span className="chapter-no flex-shrink-0" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1 }}>
                    {String(i + 2).padStart(2, '0')}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="flex items-center gap-2 flex-wrap">
                      <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)', color: 'var(--black)', letterSpacing: '-0.02em' }}>{p.title}</span>
                      <StatusBadge status={p.status} size="0.45rem" />
                      <span className="font-mono" style={{ fontSize: '0.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-faint)' }}>
                        {p.category}
                        {p.pushedAt ? ` · ${getFormattedDate(p.pushedAt)}` : ''}
                      </span>
                    </span>
                    <span className="line-clamp-1 block" style={{ fontSize: '0.6875rem', color: 'var(--ink-soft)', marginTop: '0.15rem' }}>{p.description}</span>
                  </span>
                  <span className="flex items-center gap-1 font-mono flex-shrink-0 group-hover:translate-x-1 transition-transform" style={{ fontSize: '0.5625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-faint)' }}>
                    Open <ArrowUpRight size={12} />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" className="flex justify-center" style={{ marginTop: '2rem' }}>
          <MagneticButton strength={0.2}>
            <Link to="/projects" className="brutal-btn-outline">
              Read all {PROJECT_COUNTS.total}+ projects <ArrowUpRight size={15} />
            </Link>
          </MagneticButton>
        </ScrollReveal>

        {/* running footer */}
        <div className="chapter-footer" style={{ marginTop: '1.5rem' }}>
          <span>PAGE 03 / 09 · THE CASEBOOK</span>
          <span>CHAPTER THREE — THE WORK</span>
        </div>
      </section>

      {/* ═══ CHAPTER 04 — PROOF · shipping in public ═══ */}
      <GitHubActivity />

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="page-container" style={{ paddingTop: 'var(--section-gap)', paddingBottom: 'var(--section-gap)' }}>
        <ScrollReveal variant="scaleIn" viewportMargin="-60px">
          <div className="brutal-card-dark text-center relative overflow-hidden" style={{ padding: 'clamp(2rem, 4vw, 3.5rem)' }}>
            <div aria-hidden="true" style={{ position: 'absolute', top: '1rem', left: '1.25rem', color: 'var(--bg)', opacity: 0.25 }}>
              <InkStar width={26} height={26} />
            </div>
            <div aria-hidden="true" style={{ position: 'absolute', bottom: '1.25rem', right: '1.5rem', color: 'var(--bg)', opacity: 0.25, transform: 'rotate(10deg)' }}>
              <InkSpiral width={30} height={30} />
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)',
              color: 'var(--bg)', marginBottom: '0.5rem',
              letterSpacing: '-0.02em',
            }}>
              Chapter 09 hasn't been written yet.
            </h2>
            <p style={{ color: 'var(--ink-faint)', maxWidth: '32rem', margin: '0 auto 1.25rem', fontSize: '0.875rem' }}>
              It starts when you bring the hard problem. Freelance, AI automation, full-stack builds — let's write it.
            </p>
            <MagneticButton strength={0.2}>
              <Link to="/contact" className="brutal-btn brutal-btn-yellow" style={{ background: 'var(--bg)', color: 'var(--black)' }}>
                Write Chapter 09 <ArrowRight size={15} />
              </Link>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </section>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </article>
  );
};

export default Home;