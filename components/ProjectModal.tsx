import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, Star, GitFork, Calendar, Zap, Lightbulb, AlertTriangle, BookOpen, Puzzle } from 'lucide-react';
import type { Project } from '../types';
import SkeletonImage from './SkeletonImage';
import StatusBadge from './StatusBadge';
import { getFormattedDate } from '../portfolioData';
import { InkCross, InkStroke } from './Ink';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => closeRef.current?.focus(), 60);
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prev; clearTimeout(t); window.removeEventListener('keydown', onKey); };
  }, [project, onClose]);

  if (!project) return null;

  const sections = [
    { icon: <Zap size={15} />, label: 'What I Built', body: project.solution },
    { icon: <AlertTriangle size={15} />, label: 'The Problem', body: project.problem },
    { icon: <Puzzle size={15} />, label: 'How It Works', body: project.howItWorks },
    { icon: <BookOpen size={15} />, label: 'Challenges', body: project.challenges },
    { icon: <Lightbulb size={15} />, label: 'What I Learned', body: project.learned },
  ].filter((s) => s.body);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200]"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} — project details`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
          style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,10,0.6)' }}
        />
        <motion.aside
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 380, damping: 42 }}
          className="sheet-lined"
          style={{
            position: 'absolute', top: 0, right: 0, bottom: 0,
            width: 'min(44rem, 100%)',
            background: 'var(--bg-card)',
            borderLeft: 'var(--bw) solid var(--border)',
            overflowY: 'auto', zIndex: 1,
            boxShadow: '-10px 0 0 rgba(10,10,10,0.12)',
          }}
          aria-label={`${project.title} details`}
        >
          <div style={{ padding: 'clamp(1rem, 3vw, 1.75rem)' }}>
            {/* Header */}
            <div className="flex items-center justify-between gap-3" style={{ marginBottom: '1rem' }}>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-mono ink-label" style={{ fontSize: '0.5625rem', color: 'var(--ink-faint)' }}>CASE FILE · CH 04 — THE WORK</span>
                <StatusBadge status={project.status} />
                <span className="brutal-badge" style={{ fontSize: '0.5rem' }}>{project.category}</span>
                {project.pushedAt && (
                  <span className="flex items-center gap-1 font-mono" style={{ fontSize: '0.5625rem', fontWeight: 700, color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    <Calendar size={11} /> {getFormattedDate(project.pushedAt)}
                  </span>
                )}
              </div>
              <button
                ref={closeRef}
                onClick={onClose}
                aria-label="Close project details"
                style={{
                  width: '40px', height: '40px', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--black)', border: 'var(--bw-sm) solid var(--border)',
                  boxShadow: '3px 3px 0px var(--border)', cursor: 'pointer', color: 'var(--bg)',
                }}
              >
                <InkCross width={18} height={18} />
              </button>
            </div>

            {/* Title */}
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4.5vw, 2.5rem)', color: 'var(--black)', lineHeight: 0.92, letterSpacing: '-0.03em', marginBottom: '0.625rem' }}>
              {project.title}
            </h2>
            <div style={{ width: 'clamp(120px, 30%, 220px)', marginBottom: '0.625rem' }}>
              <InkStroke kind="scratch" width="100%" height={8} />
            </div>
            <p style={{ color: 'var(--ink-soft)', fontSize: '0.8125rem', lineHeight: 1.7, marginBottom: '1rem', maxWidth: '52ch' }}>{project.description}</p>

            {/* Taped polaroid screenshot */}
            <div className="relative" style={{ marginBottom: '1.25rem' }}>
              <div className="brutal-card overflow-hidden" style={{ transform: 'rotate(-1deg)' }}>
                <SkeletonImage src={project.imageUrl} alt={`Screenshot of ${project.title}`} className="w-full aspect-video" />
              </div>
              <div aria-hidden="true" style={{ position: 'absolute', top: '-12px', left: '18%', width: '84px', height: '24px', background: 'rgba(236,230,217,0.9)', border: '1px solid var(--border)', transform: 'rotate(-8deg)' }} />
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-2" style={{ marginBottom: '1.25rem' }}>
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" data-cursor="open" className="brutal-btn brutal-btn-sm">
                  <Github size={14} /> Repository <ArrowUpRight size={12} />
                </a>
              )}
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" data-cursor="open" className="brutal-btn-outline brutal-btn-sm">
                  Live Demo <ArrowUpRight size={12} />
                </a>
              )}
              {typeof project.stars === 'number' && project.stars > 0 && (
                <span className="flex items-center gap-1.5 brutal-btn-outline brutal-btn-sm" style={{ cursor: 'default' }}>
                  <Star size={13} /> {project.stars}
                </span>
              )}
              {typeof project.forks === 'number' && project.forks > 0 && (
                <span className="flex items-center gap-1.5 brutal-btn-outline brutal-btn-sm" style={{ cursor: 'default' }}>
                  <GitFork size={13} /> {project.forks}
                </span>
              )}
            </div>

            {project.role && (
              <p className="font-mono" style={{ fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-faint)', marginBottom: '1.25rem' }}>
                ROLE — {project.role}
              </p>
            )}

            {/* Field notes */}
            {sections.length > 0 && (
              <div className="flex flex-col gap-3" style={{ marginBottom: '1.25rem' }}>
                {sections.map((s, i) => (
                  <div key={s.label} className="brutal-card-static" style={{ padding: '0.875rem 1rem' }}>
                    <div className="flex items-center gap-2" style={{ marginBottom: '0.375rem' }}>
                      <div className="brutal-icon-box" style={{ width: '28px', height: '28px' }}>{s.icon}</div>
                      <span className="font-mono" style={{ fontSize: '0.5rem', color: 'var(--ink-faint)', marginRight: '0.25rem' }}>{String(i + 1).padStart(2, '0')}</span>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--black)' }}>{s.label}</h3>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--ink-soft)', lineHeight: 1.7 }}>{s.body}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Tech stack */}
            <div style={{ marginBottom: '0.5rem' }}>
              <h3 className="font-mono" style={{ fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-faint)', marginBottom: '0.625rem' }}>
                USED TO BUILD THIS
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((t) => <span key={t} className="brutal-tag">{t}</span>)}
              </div>
            </div>

            {/* Signature */}
            <div className="flex items-center justify-between flex-wrap gap-2" style={{ marginTop: '1.5rem', borderTop: 'var(--bw-sm) solid var(--border)', paddingTop: '0.875rem' }}>
              <span className="ink-page-chip">END OF CASE FILE — CLOSE TO KEEP READING</span>
              <span className="font-ink" style={{ fontSize: '1.25rem', color: 'var(--ink-faint)', transform: 'rotate(-3deg)' }}>— Sumit</span>
            </div>
          </div>
        </motion.aside>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
