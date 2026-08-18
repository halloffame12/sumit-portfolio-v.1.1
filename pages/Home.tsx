import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';
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
import { InkArrow, InkBrackets, InkCircle, InkCross, InkScribble, InkSpiral, InkStar, InkStroke } from '../components/Ink';
import type { Project } from '../types';

/* ═══ HERO BACKGROUND — parallax ink doodles ═══ */
const HeroBackground: React.FC = () => {
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [mouseX]);

  const y1 = useTransform(scrollY, [0, 800], [0, -200]);
  const y2 = useTransform(scrollY, [0, 800], [0, -90]);
  const y3 = useTransform(scrollY, [0, 800], [0, -260]);
  const y4 = useTransform(scrollY, [0, 800], [0, -50]);
  const r1 = useTransform(scrollY, [0, 800], [0, 40]);
  const r2 = useTransform(scrollY, [0, 800], [0, -30]);
  const mx1 = useSpring(useTransform(mouseX, v => v * 18), { stiffness: 120, damping: 20 });
  const mx2 = useSpring(useTransform(mouseX, v => v * -14), { stiffness: 120, damping: 20 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div style={{ position: 'absolute', top: '-6%', right: '-6%', y: y1, x: mx1, rotate: r1, opacity: 0.1, width: 'clamp(200px, 30vw, 420px)' }}>
        <InkCircle width="100%" height="100%" />
      </motion.div>
      <motion.div style={{ position: 'absolute', bottom: '10%', left: '-2%', y: y2, x: mx2, opacity: 0.12, width: 'clamp(150px, 20vw, 280px)' }}>
        <InkScribble width="100%" height="100%" />
      </motion.div>
      <motion.div style={{ position: 'absolute', top: '16%', left: '5%', y: y3, opacity: 0.18, rotate: -12 }}>
        <InkSpiral width={42} height={42} strokeWidth={2.5} />
      </motion.div>
      <motion.div style={{ position: 'absolute', top: '10%', right: '22%', y: y4, opacity: 0.2 }}>
        <motion.div animate={{ rotate: [0, 18, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}>
          <InkStar width={22} height={22} />
        </motion.div>
      </motion.div>
      <motion.div style={{ position: 'absolute', bottom: '24%', right: '8%', y: y2, opacity: 0.16 }}>
        <motion.div animate={{ rotate: [0, -22, 0] }} transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}>
          <InkStar width={16} height={16} />
        </motion.div>
      </motion.div>
      <motion.div style={{ position: 'absolute', top: '44%', left: '2%', y: y1, opacity: 0.16, rotate: 8 }}>
        <InkCross width={18} height={18} />
      </motion.div>
      <motion.div style={{ position: 'absolute', bottom: '8%', right: '36%', y: y3, opacity: 0.14, rotate: -6 }}>
        <InkCross width={24} height={24} />
      </motion.div>
      <motion.svg style={{ position: 'absolute', top: '18%', right: '10%', height: 'clamp(100px, 16vh, 180px)', width: '14px', y: y4 }} viewBox="0 0 16 200" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.14">
        <path d="M8 0 C 12 30, 4 60, 8 90 S 4 150, 8 180 S 12 196, 8 200" />
      </motion.svg>
      <motion.div style={{ position: 'absolute', top: '70%', right: '6%', width: 'clamp(60px, 9vw, 120px)', y: y2, opacity: 0.14 }}>
        <InkStroke kind="squiggle" width="100%" height={10} strokeWidth={2} />
      </motion.div>
    </div>
  );
};

/* ═══ HERO — character reveal ═══ */
const CharReveal: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => (
  <span className="block" style={{ color: 'var(--black)' }}>
    {text.split('').map((char, i) => (
      <motion.span
        key={i}
        className="inline-block"
        initial={{ y: 80, opacity: 0, rotateX: -60 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ ...SPRING_BOUNCY, delay: delay + i * 0.03 }}
        style={{ transformOrigin: 'bottom center' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </span>
);

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

  const metrics = [
    { num: PROJECT_COUNTS.total, suffix: '+', label: 'Shipped Projects' },
    { num: PROJECT_COUNTS.openSource, suffix: '+', label: 'Open Source' },
    { num: getCurrentStreak(), suffix: 'w', label: 'Week Streak' },
    { num: 24, suffix: 'h', label: 'Response Time' },
  ];

  return (
    <article>
      <SeoHelmet path="/" />

      {/* ═══ CHAPTER 01 — THE COVER · the whole story fits on one screen ═══ */}
      <section
        className="relative overflow-hidden grain-overlay"
        style={{ height: '100svh', minHeight: '540px', maxHeight: '100svh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
      >
        <HeroBackground />

        <div className="page-container relative z-10 w-full flex-1 flex flex-col" style={{ minHeight: 0 }}>
          {/* cover header — like a book's title page */}
          <div className="flex items-center justify-between gap-3 flex-wrap" style={{ paddingTop: 'clamp(4.5rem, 7vh, 6rem)', paddingBottom: 'clamp(0.5rem, 1.5vh, 1rem)' }}>
            <motion.span
              className="ink-page-chip"
              variants={fadeUp}
              initial="hidden"
              animate="show"
            >CHAPTER 01 / 09 — THE COVER</motion.span>
            <motion.span
              className="font-ink hidden sm:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{ fontSize: '1.15rem', color: 'var(--ink-faint)', transform: 'rotate(-2deg)' }}
            >
              an ink story, drawn from real commits
            </motion.span>
          </div>

          {/* cover body */}
          <div className="flex-1 flex items-center" style={{ minHeight: 0, overflow: 'hidden' }}>
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-center w-full">

              {/* story text */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...SPRING_SNAPPY, delay: 0.15 }}
                  style={{ marginBottom: 'clamp(0.75rem, 1.5vh, 1.25rem)' }}
                >
                  <InkArrow variant="bend" width={40} height={20} strokeWidth={2.5} style={{ color: 'var(--ink-faint)', transform: 'scaleX(-1)' }} />
                  <span className="font-ink" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.45rem)', color: 'var(--ink-faint)', transform: 'rotate(-1.5deg)' }}>
                    once upon a build, a developer decided to write everything down —
                  </span>
                </motion.div>

                <h1 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, min(11vw, 13vh), 7rem)',
                  lineHeight: 0.85,
                  letterSpacing: '-0.03em',
                  marginBottom: 'clamp(0.5rem, 1.2vh, 0.9rem)',
                }}>
                  <CharReveal text="SUMIT" delay={0.1} />
                  <span className="block relative" style={{ display: 'inline-block' }}>
                    <CharReveal text="CHAUHAN" delay={0.3} />
                    <motion.span
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ delay: 0.9, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      style={{ position: 'absolute', left: 0, bottom: '-0.14em', width: '72%', transformOrigin: 'left', display: 'block' }}
                    >
                      <InkStroke kind="scratch" width="100%" height={10} />
                    </motion.span>
                  </span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...SPRING_SNAPPY, delay: 0.85 }}
                  className="font-mono"
                  style={{
                    fontSize: 'clamp(0.6rem, 1vw, 0.75rem)',
                    fontWeight: 700, color: 'var(--ink-soft)', letterSpacing: '0.14em',
                    textTransform: 'uppercase', marginBottom: 'clamp(0.5rem, 1.2vh, 0.9rem)',
                  }}
                >
                  {PROFILE.roleLine}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...SPRING_SNAPPY, delay: 0.95 }}
                  className="line-clamp-2"
                  style={{
                    maxWidth: '30rem', fontSize: 'clamp(0.8rem, 1.1vw, 0.9375rem)',
                    color: 'var(--ink-soft)', lineHeight: 1.7,
                    marginBottom: 'clamp(0.75rem, 2vh, 1.25rem)',
                  }}
                >
                  {PROFILE.tagline}
                </motion.p>

                <motion.div variants={staggerContainer} initial="hidden" animate="show" className="flex flex-wrap gap-3">
                  <motion.div variants={fadeUp}>
                    <MagneticButton strength={0.25}>
                      <Link to="/projects" className="brutal-btn">
                        Open the work <ArrowRight size={15} />
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

              {/* cover illustration (desktop) */}
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.94 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ ...SPRING_BOUNCY, delay: 0.25 }}
                className="hidden lg:flex justify-end"
              >
                <div className="relative" style={{ maxWidth: '300px', width: '100%' }}>
                  <div className="hidden lg:block" style={{ position: 'absolute', inset: '-10px', color: 'var(--black)', opacity: 0.85, zIndex: 6, pointerEvents: 'none' }}>
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
                      alt="Sumit Chauhan — Full-Stack Developer based in Delhi, India"
                      width={960}
                      height={1280}
                      style={{ width: '100%', aspectRatio: '3/3.4', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                      loading="eager"
                    />
                    <p className="font-ink" style={{ padding: '0.4rem 0.2rem 0.5rem', fontSize: '0.95rem', color: 'var(--ink-soft)', textAlign: 'center', lineHeight: 1.1 }}>
                      the one who writes the story
                    </p>
                  </div>

                  <div aria-hidden="true" style={{ position: 'absolute', top: '-14px', left: '-16px', width: '80px', height: '24px', background: 'rgba(236,230,217,0.85)', border: '1px solid var(--border)', transform: 'rotate(-42deg)', zIndex: 4 }} />
                  <div aria-hidden="true" style={{ position: 'absolute', top: '-14px', right: '-16px', width: '80px', height: '24px', background: 'rgba(236,230,217,0.85)', border: '1px solid var(--border)', transform: 'rotate(42deg)', zIndex: 4 }} />

                  <motion.div
                    initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
                    animate={{ opacity: 1, scale: 1, rotate: -4 }}
                    transition={{ ...SPRING_BOUNCY, delay: 1.05 }}
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
                      transition={{ ...SPRING_BOUNCY, delay: 1.2 }}
                    >
                      <div className="flex items-center gap-1.5" style={{ transform: 'rotate(-3deg)' }}>
                        <InkStar width={16} height={16} />
                        <span className="font-ink" style={{ fontSize: '1.2rem', color: 'var(--ink-faint)' }}>Delhi, IN</span>
                      </div>
                    </motion.div>
                  </div>

                  <div style={{ position: 'absolute', top: '50%', right: '-34px', zIndex: 7, transform: 'translateY(-50%)' }}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ ...SPRING_BOUNCY, delay: 1.3 }}
                    >
                      <div className="ink-block" style={{ padding: '0.3rem 0.6rem', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em', transform: 'rotate(2deg)' }}>
                        Open for work
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* cover footer — metrics / turn-the-page hint */}
          <div className="flex-none" style={{ paddingBottom: 'clamp(0.75rem, 2vh, 1.25rem)' }}>
            <div style={{ borderTop: 'var(--bw) solid var(--border)', paddingTop: '0.65rem', maxWidth: '46rem' }}>
              <div className="flex items-center justify-between flex-wrap gap-y-1.5">
                <div className="flex items-center flex-wrap gap-x-4 gap-y-1">
                  {metrics.map((s, i) => (
                    <div key={s.label} className="flex items-center gap-1.5" style={i < metrics.length - 1 ? { borderRight: 'var(--bw-sm) solid var(--border)', paddingRight: '0.875rem' } : {}}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', color: 'var(--black)' }}>
                        <StatCounter value={s.num} suffix={s.suffix} />
                      </span>
                      <span className="font-mono" style={{ fontSize: '0.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-faint)' }}>{s.label}</span>
                    </div>
                  ))}
                </div>
                <div className="hidden md:flex items-center gap-2">
                  <span className="font-mono" style={{ fontSize: '0.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-faint)' }}>Last pushed</span>
                  <span className="brutal-badge" style={{ fontSize: '0.5rem', padding: '0.12rem 0.4rem' }}>{getLastActiveLabel()}</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1 }}
              className="md:hidden flex flex-col items-center gap-1"
              style={{ marginTop: '0.5rem' }}
            >
              <span className="font-mono" style={{ fontSize: '0.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--ink-faint)' }}>
                turn the page
              </span>
              <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
                <ChevronDown size={16} style={{ color: 'var(--ink-faint)' }} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

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