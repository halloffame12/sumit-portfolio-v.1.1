import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import SeoHelmet from '../components/SeoHelmet';

const SkeletonImage = ({ src, alt, className = '', loading = 'lazy' }: { src: string; alt: string; className?: string; loading?: 'lazy' | 'eager' }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && <div className="skeleton-loading absolute inset-0" />}
      <img
        src={src} alt={alt} loading={loading}
        onLoad={() => setLoaded(true)}
        className="w-full h-full object-cover transition-opacity duration-500"
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </div>
  );
};

const MARQUEE_ITEMS = ['RUST', 'WEBASSEMBLY', 'REACT', 'NODE.JS', 'TYPESCRIPT', 'FLUTTER', 'POSTGRESQL', 'DOCKER', 'PYTHON', 'TENSORFLOW'];

const containerSpring = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const clipReveal = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  show: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeUpSpring = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 22 } },
};

const Home: React.FC = () => {
  const featured = PROJECTS_DATA[0];

  const metrics = [
    { value: '10+', label: 'Shipped Projects' },
    { value: '7', label: 'Domains' },
    { value: '1', label: 'Published Paper' },
    { value: '150+', label: 'Stack Combos (ForgeStack)' },
  ];

  return (
    <article className="page-shell">
      <SeoHelmet path="/" />

      {/* ═══ HERO ═══ */}
      <section className="page-container flex items-center" style={{ minHeight: 'calc(100svh - clamp(6rem, 10vw, 8rem))', paddingBottom: 'var(--section-gap)' }}>
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center w-full">
          {/* Left */}
          <motion.div variants={containerSpring} initial="hidden" animate="show">
            <motion.div className="flex flex-wrap gap-2" style={{ marginBottom: '1.25rem' }} variants={fadeUpSpring}>
              <span className="brutal-kicker">Systems Engineer</span>
              <span className="brutal-badge-blue brutal-badge">Full-Stack Architect</span>
            </motion.div>

            <h1 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 900,
              fontSize: 'clamp(3.5rem, 12vw, 8rem)',
              lineHeight: 0.85, letterSpacing: '-0.05em',
              marginBottom: '1.5rem',
            }}>
              <motion.span className="block" style={{ color: 'var(--text-primary)' }}
                variants={clipReveal}
              >SUMIT</motion.span>
              <motion.span className="block" style={{ color: 'var(--accent-orange)' }}
                variants={clipReveal}
              >CHAUHAN</motion.span>
            </h1>

            <motion.p
              variants={fadeUpSpring}
              style={{
                maxWidth: '38rem', fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                color: 'var(--text-secondary)', lineHeight: 1.75,
                marginBottom: '2rem',
              }}
            >
              I write Rust kernels that compile to WebAssembly and run in browsers.
              I ship production React applications that handle real traffic.
              ForgeStack OS generates 150+ full-stack app configurations from a single CLI command.
              I don't stop until the problem is solved.
            </motion.p>

            <motion.div variants={fadeUpSpring} className="flex flex-wrap gap-3">
              <Link to="/projects" className="brutal-btn">
                View My Work <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="brutal-btn-outline">
                Start a Project <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Offset background block */}
            <div className="absolute w-full h-full" style={{
              top: '12px', left: '12px',
              background: 'var(--accent-orange)',
              border: 'var(--border-w) solid var(--border)',
            }} />
            <div className="relative" style={{
              border: 'var(--border-w) solid var(--border)',
              boxShadow: 'var(--shadow-brutal)',
              background: 'var(--bg-card)',
              overflow: 'hidden',
            }}>
              <SkeletonImage src="/sumit.jpg" alt="Sumit Chauhan" className="w-full" loading="eager" />
              {/* Overlapping badge - spring entrance */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 8, y: 8 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ type: 'spring', stiffness: 250, damping: 18, delay: 0.8 }}
                className="absolute" style={{
                  bottom: '-8px', right: '-8px',
                  padding: '0.6rem 1rem',
                  background: 'var(--accent-yellow)',
                  border: 'var(--border-w) solid var(--border)',
                  boxShadow: 'var(--shadow-brutal-sm)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800, fontSize: '0.75rem',
                  color: 'var(--border)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Available for Hire
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <div className="marquee-wrapper" style={{ marginTop: 'var(--section-gap)' }}>
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="marquee-item">{item}</span>
          ))}
        </div>
      </div>

      {/* ═══ METRICS ═══ */}
      <section className="page-container" style={{ paddingTop: 'var(--section-gap)' }} aria-labelledby="metrics-h">
        <h2 id="metrics-h" className="sr-only">Key Metrics</h2>
        <div className="brutal-grid grid grid-cols-2 sm:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <motion.div key={m.label}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.08, type: 'spring', stiffness: 200, damping: 20 }}
              className="brutal-card-static text-center"
              style={{ padding: '1.25rem 1rem' }}
            >
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1.5rem', color: 'var(--accent-orange)' }}>{m.value}</p>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginTop: '4px' }}>{m.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ FEATURED PROJECT ═══ */}
      <motion.section className="page-container" style={{ paddingTop: 'var(--section-gap)' }}
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ type: 'spring', stiffness: 180, damping: 22 }}
        aria-labelledby="featured-h"
      >
        <h2 id="featured-h" className="sr-only">Featured Project: {featured.title}</h2>
        <div className="brutal-grid">
          <a href={featured.repoUrl} target="_blank" rel="noopener noreferrer"
            className="block brutal-card overflow-hidden group" style={{ cursor: 'pointer' }}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <SkeletonImage
                src={featured.imageUrl} alt={`Screenshot of ${featured.title} — a ${featured.category} project`}
                className="w-full aspect-video lg:aspect-auto lg:h-full"
              />
              <div style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)' }} className="flex flex-col justify-center">
                <span className="brutal-kicker" style={{ marginBottom: '1rem', alignSelf: 'flex-start' }} aria-hidden="true">Featured Project</span>
                <h3 className="group-hover:text-[var(--accent-orange)] transition-colors" style={{
                  fontWeight: 900, fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                  color: 'var(--text-primary)', marginBottom: '0.75rem',
                }}>{featured.title}</h3>
                <p className="line-clamp-3" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem', maxWidth: '50ch' }}>
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-1.5" style={{ marginBottom: '1.25rem' }}>
                  {featured.techStack.slice(0, 5).map(t => (
                    <span key={t} className="brutal-tag">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-orange)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  View Project <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          </a>
        </div>
      </motion.section>

      {/* ═══ VIEW ALL PROJECTS LINK ═══ */}
      <motion.div className="page-container flex justify-center" style={{ paddingTop: 'var(--section-gap)' }}
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 0.1 }}
      >
        <Link to="/projects" className="brutal-btn-outline">
          View All Projects <ArrowUpRight size={16} />
        </Link>
      </motion.div>

      {/* ═══ BOTTOM CTA ═══ */}
      <motion.section className="page-container" style={{ paddingTop: 'var(--section-gap)' }}
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ type: 'spring', stiffness: 180, damping: 22 }}
      >
        <div className="brutal-grid">
          <div className="brutal-card-dark text-center" style={{ padding: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 900,
              fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
              color: 'var(--text-on-dark)', marginBottom: '0.75rem',
              letterSpacing: '-0.03em',
            }}>
              Got a problem worth solving?
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '36rem', margin: '0 auto 1.5rem', fontSize: '0.9375rem' }}>
              I take on freelance contracts, infrastructure builds, and systems-level challenges. Let's talk scope.
            </p>
            <Link to="/contact" className="brutal-btn">
              Get in Touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </motion.section>
    </article>
  );
};

export default Home;
