import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import { ExternalLink, ArrowUpRight, Folder } from 'lucide-react';
import SeoHelmet from '../components/SeoHelmet';

const SkeletonImage = ({ src, alt, className = '', loading = 'lazy' }: { src: string; alt: string; className?: string; loading?: 'lazy' | 'eager' }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && <div className="skeleton-loading absolute inset-0" />}
      <img src={src} alt={alt} loading={loading} onLoad={() => setLoaded(true)}
        className="w-full h-full object-cover transition-opacity duration-500"
        style={{ opacity: loaded ? 1 : 0 }} />
    </div>
  );
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const fadeUpSpring = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 22 } },
};

const clipReveal = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  show: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Projects: React.FC = () => {
  const featured = PROJECTS_DATA[0];
  const main = PROJECTS_DATA.slice(1, 4);
  const rest = PROJECTS_DATA.slice(4);

  return (
    <article className="page-shell">
      <SeoHelmet
        path="/projects"
        title="Projects — Sumit Chauhan | Systems Engineer & Full-Stack Architect"
        description="Browse systems-level projects: BrowserOS WebAssembly kernel, ForgeStack OS CLI, AnonChat real-time platform, gesture-controlled games, and productivity apps."
      />

      <div className="page-container">
        {/* Header */}
        <section>
          <motion.div style={{ marginBottom: '2.5rem' }}
            variants={staggerContainer} initial="hidden" animate="show"
          >
            <span className="brutal-kicker" style={{ marginBottom: '0.75rem', display: 'inline-flex' }}>Portfolio</span>
            <motion.h1 className="brutal-section-title" style={{ marginTop: '0.75rem', marginBottom: '0.5rem' }} variants={clipReveal}>Work</motion.h1>
            <motion.p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '36rem' }} variants={fadeUpSpring}>
              Systems, platforms, and tools — shipped and battle-tested.
            </motion.p>
          </motion.div>
        </section>

        {/* Stats */}
        <section aria-labelledby="stats-h">
          <h2 id="stats-h" className="sr-only">Project Statistics</h2>
          <motion.div className="flex flex-wrap gap-3" style={{ marginBottom: '2.5rem', paddingBottom: '2.5rem', borderBottom: 'var(--border-w) solid var(--border)' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 0.3 }}
          >
          <div className="brutal-card-static flex items-center gap-2.5" style={{ padding: '0.6rem 1rem' }}>
            <Folder size={18} style={{ color: 'var(--accent-orange)' }} />
            <div>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1.125rem', color: 'var(--text-primary)' }}>{PROJECTS_DATA.length}</p>
              <p style={{ fontSize: '0.5625rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>Projects</p>
            </div>
          </div>
          <div className="brutal-card-static flex items-center gap-2.5" style={{ padding: '0.6rem 1rem' }}>
            <ExternalLink size={18} style={{ color: 'var(--accent-blue)' }} />
            <div>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1.125rem', color: 'var(--text-primary)' }}>Open Source</p>
              <p style={{ fontSize: '0.5625rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>On GitHub</p>
            </div>
          </div>
        </motion.div>
        </section>

        {/* Featured */}
        <section aria-labelledby="featured-label">
          <motion.div style={{ marginBottom: '2.5rem' }}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 180, damping: 22 }}
          >
          <h2 id="featured-label" className="sr-only">Featured Project: {featured.title}</h2>
          <span className="brutal-kicker" style={{ fontSize: '0.6875rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-orange)', marginBottom: '1rem', display: 'inline-flex' }} aria-hidden="true">Featured</span>
          <div className="brutal-grid">
            <a href={featured.repoUrl} target="_blank" rel="noopener noreferrer"
              className="block brutal-card overflow-hidden group">
              <div className="grid lg:grid-cols-2 gap-0">
                <SkeletonImage src={featured.imageUrl} alt={featured.title} className="w-full aspect-video lg:aspect-auto lg:h-full" loading="eager" />
                <div className="flex flex-col justify-center" style={{ padding: 'clamp(1.25rem, 3vw, 2rem)' }}>
                  <div className="flex items-start justify-between gap-3" style={{ marginBottom: '0.5rem' }}>
                    <h3 className="group-hover:text-[var(--accent-orange)] transition-colors" style={{ fontWeight: 900, fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)', color: 'var(--text-primary)' }}>{featured.title}</h3>
                    <ArrowUpRight size={18} className="flex-shrink-0 mt-1 transition-colors" style={{ color: 'var(--text-muted)' }} />
                  </div>
                  <p className="line-clamp-3" style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem', maxWidth: '50ch' }}>{featured.description}</p>
                  <div className="flex flex-wrap gap-1.5" style={{ marginBottom: '1rem' }}>
                    {featured.techStack.slice(0, 5).map(t => <span key={t} className="brutal-tag">{t}</span>)}
                  </div>
                  <div className="flex items-center gap-2" style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                    <span style={{ width: '6px', height: '6px', background: 'var(--accent-orange)' }} />
                    {featured.role}
                  </div>
                </div>
              </div>
            </a>
          </div>
        </motion.div>
        </section>

        {/* Main Grid */}
        <section aria-labelledby="grid-h">
          <h2 id="grid-h" className="sr-only">Project Grid</h2>
          <motion.div className="brutal-grid grid md:grid-cols-2 lg:grid-cols-3 gap-4" style={{ marginBottom: '2.5rem' }}
            variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }}
          >
          {main.map((p) => (
            <motion.a key={p.id} href={p.repoUrl} target="_blank" rel="noopener noreferrer"
              className="block brutal-card overflow-hidden group h-full flex flex-col"
              whileHover={{ y: -4, boxShadow: '8px 8px 0px var(--border)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              variants={fadeUpSpring}
            >
              <SkeletonImage src={p.imageUrl} alt={`Screenshot of ${p.title} — ${p.category}`} className="w-full aspect-video" />
              <div className="flex flex-col flex-1" style={{ padding: '1rem 1.25rem' }}>
                <div className="flex items-start justify-between gap-2" style={{ marginBottom: '0.35rem' }}>
                  <h3 className="group-hover:text-[var(--accent-orange)] transition-colors" style={{ fontWeight: 800, fontSize: '0.875rem', color: 'var(--text-primary)', lineHeight: 1.3 }}>{p.title}</h3>
                  <ArrowUpRight size={14} className="flex-shrink-0 mt-0.5 transition-colors" style={{ color: 'var(--text-muted)' }} />
                </div>
                <p className="line-clamp-2" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.75rem' }}>{p.description}</p>
                <div className="flex flex-wrap gap-1 mt-auto" style={{ marginBottom: '0.75rem' }}>
                  {p.techStack.slice(0, 4).map((t, i) => <span key={i} className="brutal-tag" style={{ fontSize: '0.5625rem' }}>{t}</span>)}
                </div>
                <span className="brutal-badge" style={{ alignSelf: 'flex-start', fontSize: '0.5625rem' }}>{p.category}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
        </section>

        {/* More Projects */}
        {rest.length > 0 && (
          <section aria-labelledby="more-h">
          <motion.div style={{ marginBottom: 'var(--section-gap)' }}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ type: 'spring', stiffness: 180, damping: 22 }}
          >
            <h2 id="more-h" style={{ fontSize: '0.6875rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '1rem' }}>More Projects</h2>
            <div className="brutal-grid grid sm:grid-cols-2 gap-3">
              {rest.map((p) => (
                <motion.a key={p.id} href={p.repoUrl} target="_blank" rel="noopener noreferrer"
                  className="brutal-card flex items-center gap-3 group"
                  style={{ padding: '1rem' }}
                  whileHover={{ y: -2, boxShadow: '8px 8px 0px var(--border)', transition: { type: 'spring', stiffness: 300, damping: 25 } }}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, damping: 22 }}
                >
                  <div className="flex-shrink-0 overflow-hidden" style={{ width: '40px', height: '40px', border: '2px solid var(--border)', background: 'var(--bg-main)' }}>
                    <img src={p.imageUrl} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="group-hover:text-[var(--accent-orange)] transition-colors truncate" style={{ fontWeight: 800, fontSize: '0.8125rem', color: 'var(--text-primary)' }}>{p.title}</p>
                    <p className="truncate" style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>{p.category}</p>
                  </div>
                  <ArrowUpRight size={14} className="flex-shrink-0 transition-colors" style={{ color: 'var(--text-muted)' }} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          </section>
        )}

        {/* GitHub CTA */}
        <section>
          <motion.div className="text-center"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 0.1 }}
          >
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.25rem' }}>More on GitHub</p>
            <a href="https://github.com/halloffame12" target="_blank" rel="noopener noreferrer" className="brutal-btn">
              <ExternalLink size={16} /> View All Repos <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </section>
      </div>
    </article>
  );
};

export default Projects;
