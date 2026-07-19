import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { PROJECTS_DATA, MARQUEE_ITEMS } from '../constants';
import { SPRING_SNAPPY, SPRING_BOUNCY, staggerContainer, fadeUp } from '../types';
import SeoHelmet from '../components/SeoHelmet';
import PeepIllustration from '../components/PeepIllustration';
import MagneticButton from '../components/MagneticButton';
import ScrollReveal from '../components/ScrollReveal';

const SkeletonImage = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && <div className="skeleton-loading absolute inset-0" />}
      <img src={src} alt={alt} loading="lazy" decoding="async"
        onLoad={() => setLoaded(true)}
        className="w-full h-full object-cover transition-opacity duration-300" style={{ opacity: loaded ? 1 : 0 }} />
    </div>
  );
};

/* ═══ HERO BACKGROUND — Parallax shapes ═══ */
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

  const y1 = useTransform(scrollY, [0, 800], [0, -180]);
  const y2 = useTransform(scrollY, [0, 800], [0, -90]);
  const y3 = useTransform(scrollY, [0, 800], [0, -250]);
  const y4 = useTransform(scrollY, [0, 800], [0, -50]);
  const r1 = useTransform(scrollY, [0, 800], [0, 30]);
  const r2 = useTransform(scrollY, [0, 800], [0, -20]);
  const mx1 = useSpring(useTransform(mouseX, v => v * 18), { stiffness: 120, damping: 20 });
  const mx2 = useSpring(useTransform(mouseX, v => v * -10), { stiffness: 120, damping: 20 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div style={{
        position: 'absolute', top: '-12%', right: '-10%',
        width: 'clamp(260px, 36vw, 480px)', height: 'clamp(260px, 36vw, 480px)',
        background: 'var(--yellow)', border: 'var(--bw) solid var(--border)',
        borderRadius: '50%', y: y1, x: mx1, rotate: r1, opacity: 0.4,
      }} />
      <motion.div style={{
        position: 'absolute', bottom: '5%', left: '-5%',
        width: 'clamp(120px, 18vw, 240px)', height: 'clamp(120px, 18vw, 240px)',
        background: 'var(--blue)', border: 'var(--bw) solid var(--border)',
        y: y2, x: mx2, rotate: r2, opacity: 0.08,
      }} />
      <motion.svg style={{ position: 'absolute', top: '20%', left: '3%', width: '140px', height: '70px', y: y3 }} viewBox="0 0 160 80" fill="none">
        <path d="M0 40 L25 15 L50 40 L75 15 L100 40 L125 15 L160 40" stroke="var(--border)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.08" />
      </motion.svg>
      <motion.svg style={{ position: 'absolute', bottom: '18%', right: '5%', width: '100px', height: '100px', y: y4, x: mx1 }} viewBox="0 0 110 110" fill="none">
        {[0, 27, 54, 81].map(dx => [0, 27, 54, 81].map(dy => (
          <circle key={`${dx}-${dy}`} cx={dx + 14} cy={dy + 14} r="3" fill="var(--border)" opacity="0.06" />
        )))}
      </motion.svg>
      <motion.div style={{
        position: 'absolute', top: '58%', left: '1%',
        width: 'clamp(45px, 6vw, 70px)', height: 'clamp(45px, 6vw, 70px)',
        background: 'var(--yellow)', border: '2px solid var(--border)',
        y: y2, rotate: 15, opacity: 0.25,
      }} />
      <motion.div style={{
        position: 'absolute', top: '75%', right: '8%',
        width: 'clamp(70px, 10vw, 140px)', height: '3px',
        background: 'var(--border)', y: y4, opacity: 0.06,
      }} />
      <motion.svg style={{ position: 'absolute', top: '12%', right: '25%', width: '28px', height: '28px', y: y3 }} viewBox="0 0 30 30" fill="none">
        <line x1="15" y1="0" x2="15" y2="30" stroke="var(--border)" strokeWidth="3" opacity="0.05" />
        <line x1="0" y1="15" x2="30" y2="15" stroke="var(--border)" strokeWidth="3" opacity="0.05" />
      </motion.svg>
    </div>
  );
};

/* ═══ HERO — Character reveal ═══ */
const CharReveal: React.FC<{ text: string; color?: string; delay?: number }> = ({
  text, color = 'var(--black)', delay = 0,
}) => (
  <span className="block" style={{ color }}>
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

const BlinkingCursor: React.FC = () => (
  <motion.span
    className="inline-block"
    initial={{ opacity: 0 }}
    animate={{ opacity: [1, 1, 0, 0] }}
    transition={{ duration: 1, repeat: Infinity }}
    style={{
      width: '4px', height: '0.85em', background: 'var(--blue)',
      marginLeft: '4px', verticalAlign: 'baseline',
    }}
  />
);

const DrawnLine: React.FC = () => (
  <motion.div
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
    style={{
      width: '100%', height: '3px', background: 'var(--border)',
      transformOrigin: 'left', marginTop: '0.5rem', marginBottom: '0.5rem',
    }}
  />
);

/* ═══ HOME PAGE ═══ */
const Home: React.FC = () => {
  const featured = PROJECTS_DATA[0];
  const secondary = PROJECTS_DATA.slice(1, 3);

  const metrics = [
    { value: '10+', label: 'Shipped Projects' },
    { value: '7+', label: 'Tech Domains' },
    { value: '1', label: 'Published Paper' },
    { value: '24h', label: 'Response Time' },
  ];

  return (
    <article>
      <SeoHelmet path="/" />

      {/* ═══ HERO ═══ */}
      <section
        className="relative overflow-hidden grain-overlay"
        style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        <HeroBackground />

        <div className="page-container relative z-10 w-full" style={{ flex: '1 1 0', display: 'flex', alignItems: 'center', minHeight: 0 }}>
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-8 items-center w-full">

            <div style={{ position: 'relative', zIndex: 2 }}>
              <motion.div
                className="flex flex-wrap gap-2"
                style={{ marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)' }}
                variants={staggerContainer}
                initial="hidden"
                animate="show"
              >
                <motion.span variants={fadeUp} className="brutal-kicker">Full-Stack Developer</motion.span>
                <motion.span variants={fadeUp} className="brutal-badge brutal-badge-dark">Mobile + Web + AI</motion.span>
              </motion.div>

              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.75rem, 9vw, 6.5rem)',
                lineHeight: 0.88,
                letterSpacing: '-0.03em',
                marginBottom: 'clamp(0.25rem, 0.5vw, 0.5rem)',
              }}>
                <CharReveal text="SUMIT" delay={0.1} />
                <CharReveal text="CHAUHAN" color="var(--blue)" delay={0.3} />
                <motion.span className="inline-block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
                  <BlinkingCursor />
                </motion.span>
              </h1>

              <DrawnLine />

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...SPRING_SNAPPY, delay: 0.55 }}
                style={{
                  fontFamily: 'var(--font-heading)', fontSize: 'clamp(0.6875rem, 1vw, 0.8125rem)',
                  fontWeight: 600, color: '#999', letterSpacing: '0.04em',
                  textTransform: 'uppercase', marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)',
                }}
              >
                Full-Stack Developer · Mobile + Web + AI
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...SPRING_SNAPPY, delay: 0.65 }}
                style={{
                  maxWidth: '30rem', fontSize: 'clamp(0.8125rem, 1.1vw, 0.9375rem)',
                  color: '#555', lineHeight: 1.75,
                  marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                }}
              >
                I build real-time platforms that handle live traffic, AI-powered tools that automate
                the hard stuff, and cross-platform apps that ship fast.
              </motion.p>

              <motion.div variants={staggerContainer} initial="hidden" animate="show" className="flex flex-wrap gap-3">
                <motion.div variants={fadeUp}>
                  <MagneticButton strength={0.25}>
                    <Link to="/projects" className="brutal-btn">
                      View My Builds <ArrowRight size={15} />
                    </Link>
                  </MagneticButton>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <MagneticButton strength={0.25}>
                    <Link to="/contact" className="brutal-btn-outline">
                      Start a Project <ArrowUpRight size={15} />
                    </Link>
                  </MagneticButton>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ ...SPRING_BOUNCY, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative" style={{ maxWidth: '360px', width: '100%' }}>
                <div style={{
                  position: 'absolute', top: '14px', left: '14px',
                  width: '100%', height: '100%',
                  background: 'var(--yellow)',
                  border: 'var(--bw) solid var(--border)',
                  transform: 'rotate(2.5deg)',
                }} />
                <div style={{
                  position: 'absolute', top: '7px', left: '7px',
                  width: '100%', height: '100%',
                  background: 'var(--bg-card)',
                  border: 'var(--bw-sm) solid var(--border)',
                  transform: 'rotate(1deg)',
                  opacity: 0.5,
                }} />
                <div style={{
                  position: 'relative',
                  border: 'var(--bw) solid var(--border)',
                  boxShadow: '10px 10px 0px var(--border)',
                  background: 'var(--bg-card)',
                  padding: '6px',
                  transform: 'rotate(-1.5deg)',
                }}>
                  <img
                    src="/sumit.jpg"
                    alt="Sumit Chauhan — Full-Stack Developer based in New Delhi, India"
                    style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                    loading="eager"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -25 }}
                  animate={{ opacity: 1, scale: 1, rotate: -10 }}
                  transition={{ ...SPRING_BOUNCY, delay: 0.8 }}
                  style={{
                    position: 'absolute', top: '-12px', right: '-16px',
                    padding: '0.35rem 0.75rem',
                    background: 'var(--blue)', border: 'var(--bw) solid var(--border)',
                    boxShadow: '3px 3px 0px var(--border)',
                    fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.6rem',
                    color: '#FFF', textTransform: 'uppercase', letterSpacing: '0.06em', zIndex: 5,
                  }}
                >
                  Open for Work
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: 20 }}
                  animate={{ opacity: 1, scale: 1, rotate: 6 }}
                  transition={{ ...SPRING_BOUNCY, delay: 0.95 }}
                  style={{
                    position: 'absolute', bottom: '14px', left: '-18px',
                    padding: '0.3rem 0.6rem',
                    background: 'var(--bg-card)', border: 'var(--bw-sm) solid var(--border)',
                    boxShadow: '2px 2px 0px var(--border)',
                    fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.5rem',
                    color: 'var(--black)', textTransform: 'uppercase', letterSpacing: '0.06em', zIndex: 5,
                  }}
                >
                  New Delhi, IN
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...SPRING_BOUNCY, delay: 1.05 }}
                  style={{
                    position: 'absolute', bottom: '-22px', right: '-22px',
                    width: 'clamp(65px, 9vw, 90px)', zIndex: 3,
                  }}
                >
                  <PeepIllustration pose="thumbs-up" colors={{ outfit: 'var(--yellow)' }} animate />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom status bar — desktop only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING_SNAPPY, delay: 1.0 }}
          className="absolute bottom-6 left-0 right-0 z-10 hidden lg:block"
        >
          <div className="page-container">
            <div className="flex items-center justify-between" style={{ maxWidth: '48rem' }}>
              <div className="flex items-center gap-6">
                {metrics.map((s) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', color: 'var(--blue)' }}>{s.value}</span>
                    <span style={{ fontSize: '0.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#999' }}>{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span style={{ fontSize: '0.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#999' }}>Based in</span>
                <span className="brutal-badge" style={{ fontSize: '0.5rem', padding: '0.15rem 0.4rem' }}>New Delhi, IN</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator — mobile only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 lg:hidden z-10"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
            <ChevronDown size={16} style={{ color: '#999' }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="marquee-item">{item}</span>
          ))}
        </div>
      </div>

      {/* ═══ METRICS ═══ */}
      <section className="page-container" style={{ paddingTop: 'var(--section-gap)' }} aria-labelledby="metrics-h">
        <h2 id="metrics-h" className="sr-only">Key Metrics</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {metrics.map((m, i) => (
            <ScrollReveal key={m.label} variant="scaleIn" delay={i * 0.06}>
              <div className="brutal-card-static text-center" style={{ padding: 'clamp(0.875rem, 2vw, 1.25rem) 0.75rem' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.125rem, 2.25vw, 1.5rem)', color: 'var(--blue)' }}>{m.value}</p>
                <p style={{ fontSize: '0.5625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#999', marginTop: '3px' }}>{m.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══ FEATURED PROJECT ═══ */}
      <section className="page-container" style={{ paddingTop: 'var(--section-gap)' }} aria-labelledby="featured-h">
        <ScrollReveal variant="fadeUp" viewportMargin="-80px">
          <h2 id="featured-h" className="sr-only">Featured Project: {featured.title}</h2>
          <div style={{ marginBottom: '0.75rem' }}>
            <span className="brutal-sticker" style={{ display: 'inline-flex' }}>Featured Build</span>
          </div>
          <a href={featured.repoUrl} target="_blank" rel="noopener noreferrer"
            className="block brutal-card overflow-hidden group" style={{ cursor: 'pointer' }}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <SkeletonImage
                src={featured.imageUrl}
                alt={`Screenshot of ${featured.title} — a ${featured.category} project`}
                className="w-full aspect-video lg:aspect-auto lg:h-full"
              />
              <div style={{ padding: 'clamp(1.25rem, 2.5vw, 2rem)' }} className="flex flex-col justify-center">
                <h3 className="group-hover:text-[var(--blue)] transition-colors" style={{
                  fontFamily: 'var(--font-heading)', fontWeight: 900,
                  fontSize: 'clamp(1.125rem, 2.25vw, 1.5rem)',
                  color: 'var(--black)', marginBottom: '0.5rem',
                }}>{featured.title}</h3>
                <p className="line-clamp-3" style={{
                  fontSize: '0.8125rem', color: '#555',
                  lineHeight: 1.7, marginBottom: '1rem', maxWidth: '48ch',
                }}>{featured.description}</p>
                <div className="flex flex-wrap gap-1" style={{ marginBottom: '1rem' }}>
                  {featured.techStack.slice(0, 5).map(t => (
                    <span key={t} className="brutal-tag">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2" style={{
                  fontSize: '0.6875rem', fontWeight: 700, color: 'var(--blue)',
                  textTransform: 'uppercase', letterSpacing: '0.05em',
                }}>
                  View Project <ArrowUpRight size={13} />
                </div>
              </div>
            </div>
          </a>
        </ScrollReveal>
      </section>

      {/* ═══ SECONDARY PROJECTS ═══ */}
      <section className="page-container" style={{ paddingTop: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
        <div className="grid md:grid-cols-2 gap-3">
          {secondary.map((p, i) => (
            <ScrollReveal key={p.id} variant="fadeUp" delay={i * 0.08}>
              <a href={p.repoUrl} target="_blank" rel="noopener noreferrer"
                className="block brutal-card overflow-hidden group h-full"
              >
                <SkeletonImage src={p.imageUrl} alt={`Screenshot of ${p.title}`} className="w-full aspect-video" />
                <div style={{ padding: '0.875rem 1.125rem' }}>
                  <div className="flex items-start justify-between gap-2" style={{ marginBottom: '0.25rem' }}>
                    <h3 className="group-hover:text-[var(--blue)] transition-colors" style={{
                      fontFamily: 'var(--font-heading)', fontWeight: 800,
                      fontSize: '0.875rem', color: 'var(--black)', lineHeight: 1.3,
                    }}>{p.title}</h3>
                    <ArrowUpRight size={13} className="flex-shrink-0 mt-0.5" style={{ color: '#999' }} />
                  </div>
                  <p className="line-clamp-2" style={{
                    fontSize: '0.6875rem', color: '#555',
                    lineHeight: 1.6, marginBottom: '0.625rem',
                  }}>{p.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {p.techStack.slice(0, 3).map((t, j) => (
                      <span key={j} className="brutal-tag" style={{ fontSize: '0.5rem' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══ VIEW ALL + PEEP ═══ */}
      <ScrollReveal variant="fadeUp" className="page-container flex flex-col items-center gap-3" style={{ paddingTop: 'var(--section-gap)' }}>
        <div style={{ width: '72px' }}>
          <PeepIllustration pose="pointing-right" colors={{ outfit: 'var(--blue)' }} animate />
        </div>
        <MagneticButton strength={0.2}>
          <Link to="/projects" className="brutal-btn-outline">
            View All Builds <ArrowUpRight size={15} />
          </Link>
        </MagneticButton>
      </ScrollReveal>

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="page-container" style={{ paddingTop: 'var(--section-gap)' }}>
        <ScrollReveal variant="scaleIn" viewportMargin="-60px">
          <div className="brutal-card-dark text-center" style={{ padding: 'clamp(2rem, 4vw, 3.5rem)' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.25rem, 3vw, 2.25rem)',
              color: 'var(--bg)', marginBottom: '0.5rem',
              letterSpacing: '-0.02em',
            }}>
              Got a problem worth solving?
            </h2>
            <p style={{ color: '#888', maxWidth: '32rem', margin: '0 auto 1.25rem', fontSize: '0.875rem' }}>
              I take on freelance contracts, AI automation projects, and full-stack builds. Let's talk scope.
            </p>
            <MagneticButton strength={0.2}>
              <Link to="/contact" className="brutal-btn">
                Get in Touch <ArrowRight size={15} />
              </Link>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </section>
    </article>
  );
};

export default Home;
