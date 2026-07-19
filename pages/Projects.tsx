import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA, ALL_TECH_TAGS } from '../constants';
import { ExternalLink, ArrowUpRight, Folder } from 'lucide-react';
import { SPRING_CARD } from '../types';
import SeoHelmet from '../components/SeoHelmet';
import PeepIllustration from '../components/PeepIllustration';
import ScrollReveal from '../components/ScrollReveal';
import MagneticButton from '../components/MagneticButton';

const SkeletonImage = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && <div className="skeleton-loading absolute inset-0" />}
      <img src={src} alt={alt} loading="lazy" decoding="async" onLoad={() => setLoaded(true)}
        className="w-full h-full object-cover transition-opacity duration-300" style={{ opacity: loaded ? 1 : 0 }} />
    </div>
  );
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const featured = PROJECTS_DATA[0];
  const allProjects = PROJECTS_DATA;
  const filteredProjects = activeFilter
    ? allProjects.filter(p => p.techStack.some(t => t.toLowerCase() === activeFilter.toLowerCase()))
    : allProjects;

  const handleFilter = (tag: string) => {
    setActiveFilter(prev => prev === tag ? null : tag);
  };

  return (
    <article className="page-shell">
      <SeoHelmet
        path="/projects"
        title="Builds \u2014 Sumit Chauhan | Full-Stack Developer"
        description="Browse builds: real-time anonymous chat, AI-powered blogging, Flutter task manager, gesture-controlled gaming platform."
      />

      <div className="page-container">
        <ScrollReveal variant="clipReveal">
          <div style={{ marginBottom: '1.25rem' }}>
            <div className="flex items-end gap-4 flex-wrap">
              <div>
                <span className="brutal-kicker" style={{ marginBottom: '0.625rem', display: 'inline-flex' }}>Portfolio</span>
                <h1 className="brutal-section-title" style={{ marginTop: '0.625rem', marginBottom: '0.375rem' }}>Builds</h1>
              </div>
              <p style={{ fontSize: '0.9375rem', color: '#555', maxWidth: '34rem' }}>
                Real-time platforms, AI tools, and cross-platform apps \u2014 shipped and battle-tested.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="flex flex-wrap gap-2.5" style={{ marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: 'var(--bw) solid var(--border)' }}>
            <div className="brutal-card-static flex items-center gap-2" style={{ padding: '0.5rem 0.875rem' }}>
              <Folder size={16} style={{ color: 'var(--blue)' }} />
              <div>
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1rem', color: 'var(--black)' }}>{allProjects.length}</p>
                <p style={{ fontSize: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888' }}>Projects</p>
              </div>
            </div>
            <div className="brutal-card-static flex items-center gap-2" style={{ padding: '0.5rem 0.875rem' }}>
              <ExternalLink size={16} style={{ color: 'var(--yellow)' }} />
              <div>
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1rem', color: 'var(--black)' }}>Open Source</p>
                <p style={{ fontSize: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888' }}>On GitHub</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.15}>
          <div className="flex flex-wrap gap-1.5" style={{ marginBottom: '1.25rem' }}>
            <button
              onClick={() => setActiveFilter(null)}
              className={`brutal-tag ${!activeFilter ? '!bg-[var(--blue)] !text-white' : ''}`}
              style={{ fontSize: '0.5625rem', cursor: 'pointer' }}
            >All</button>
            {ALL_TECH_TAGS.slice(0, 10).map(tag => (
              <button
                key={tag}
                onClick={() => handleFilter(tag)}
                className={`brutal-tag ${activeFilter === tag ? '!bg-[var(--blue)] !text-white' : ''}`}
                style={{ fontSize: '0.5625rem', cursor: 'pointer' }}
              >{tag}</button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" viewportMargin="-60px" style={{ marginBottom: '1.25rem' } as React.CSSProperties}>
          <div>
            <span className="brutal-sticker" style={{ marginBottom: '0.75rem', display: 'inline-flex' }} aria-hidden="true">Featured Build</span>
            <a href={featured.repoUrl} target="_blank" rel="noopener noreferrer"
              className="block brutal-card overflow-hidden group">
              <div className="grid lg:grid-cols-2 gap-0">
                <SkeletonImage src={featured.imageUrl} alt={featured.title} className="w-full aspect-video lg:aspect-auto lg:h-full" />
                <div className="flex flex-col justify-center" style={{ padding: 'clamp(1.125rem, 2.5vw, 1.75rem)' }}>
                  <div className="flex items-start justify-between gap-2.5" style={{ marginBottom: '0.4rem' }}>
                    <h3 className="group-hover:text-[var(--blue)] transition-colors" style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(1rem, 2.25vw, 1.375rem)', color: 'var(--black)' }}>{featured.title}</h3>
                    <ArrowUpRight size={16} className="flex-shrink-0 mt-0.5 transition-colors" style={{ color: '#888' }} />
                  </div>
                  <p className="line-clamp-3" style={{ fontSize: '0.75rem', color: '#555', lineHeight: 1.7, marginBottom: '0.875rem', maxWidth: '48ch' }}>{featured.description}</p>
                  <div className="flex flex-wrap gap-1" style={{ marginBottom: '0.875rem' }}>
                    {featured.techStack.slice(0, 5).map(t => <span key={t} className="brutal-tag">{t}</span>)}
                  </div>
                  <div className="flex items-center gap-1.5" style={{ fontSize: '0.625rem', color: '#888' }}>
                    <span style={{ width: '5px', height: '5px', background: 'var(--blue)', display: 'inline-block' }} />
                    {featured.role}
                  </div>
                </div>
              </div>
            </a>
          </div>
        </ScrollReveal>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3" style={{ marginBottom: '1.25rem' }} layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <motion.a
                key={p.id}
                href={p.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ ...SPRING_CARD, delay: i * 0.04 }}
                className="block brutal-card overflow-visible group h-full flex flex-col"
                style={{ position: 'relative' }}
              >
                <SkeletonImage src={p.imageUrl} alt={`Screenshot of ${p.title} \u2014 ${p.category}`} className="w-full aspect-video" />
                <div className="flex flex-col flex-1" style={{ padding: '0.875rem 1rem' }}>
                  <div className="flex items-start justify-between gap-2" style={{ marginBottom: '0.25rem' }}>
                    <h3 className="group-hover:text-[var(--blue)] transition-colors" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.8125rem', color: 'var(--black)', lineHeight: 1.3 }}>{p.title}</h3>
                    <ArrowUpRight size={12} className="flex-shrink-0 mt-0.5 transition-colors" style={{ color: '#888' }} />
                  </div>
                  <p className="line-clamp-2" style={{ fontSize: '0.6875rem', color: '#555', lineHeight: 1.6, marginBottom: '0.625rem' }}>{p.description}</p>
                  <div className="flex flex-wrap gap-0.5 mt-auto" style={{ marginBottom: '0.625rem' }}>
                    {p.techStack.slice(0, 4).map((t, j) => <span key={j} className="brutal-tag" style={{ fontSize: '0.5rem' }}>{t}</span>)}
                  </div>
                  <span className="brutal-badge" style={{ alignSelf: 'flex-start', fontSize: '0.5rem' }}>{p.category}</span>
                </div>
                <div className="hidden group-hover:block" style={{
                  position: 'absolute', bottom: '-12px', right: '-8px',
                  width: '44px', zIndex: 5, pointerEvents: 'none',
                }}>
                  <PeepIllustration pose="thumbs-up" colors={{ outfit: 'var(--yellow)' }} size={44} />
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
              style={{ padding: '2.5rem 0', color: '#888' }}
            >
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1rem', marginBottom: '0.375rem', color: 'var(--black)' }}>No projects match this filter</p>
              <p style={{ fontSize: '0.8125rem' }}>Try selecting a different tech stack tag.</p>
            </motion.div>
          )}
        </AnimatePresence>

        <ScrollReveal variant="fadeUp">
          <div className="flex flex-col items-center gap-3">
            <div style={{ width: '88px' }}>
              <PeepIllustration pose="thumbs-up" colors={{ outfit: 'var(--blue)' }} />
            </div>
            <p style={{ color: '#888', fontSize: '0.8125rem' }}>More on GitHub</p>
            <MagneticButton strength={0.2}>
              <a href="https://github.com/halloffame12" target="_blank" rel="noopener noreferrer" className="brutal-btn">
                <ExternalLink size={15} /> View All Repos <ArrowUpRight size={13} />
              </a>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </article>
  );
};

export default Projects;
