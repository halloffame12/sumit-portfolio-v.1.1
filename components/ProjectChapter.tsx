import React from 'react';
import { ArrowUpRight, Star, GitFork } from 'lucide-react';
import type { Project } from '../types';
import SkeletonImage from './SkeletonImage';
import ProjectVisual, { needsArtwork } from './ProjectVisual';
import StatusBadge from './StatusBadge';
import { getFormattedDate } from '../portfolioData';
import { InkArrow, InkCross, InkStar, InkStroke } from './Ink';

/* Project artwork: a real screenshot when one exists, otherwise the
   hand-drawn animated scene (ctx code-graph, Versz debate, letter tile). */
const Art: React.FC<{ project: Project; alt: string; className?: string }> = ({ project, alt, className }) =>
  needsArtwork(project)
    ? <ProjectVisual project={project} className={className} />
    : <SkeletonImage src={project.imageUrl} alt={alt} className={className} />;

/* ═══════════════════════════════════════════════════════════
   PROJECT CHAPTER — projects as chapters, not cards.
   Four compositions that alternate by index so no two
   chapters look identical. All open the CASE FILE modal.
   ─ A: giant editorial poster (full-bleed)
   ─ B: split-screen case study
   ─ C: asymmetric vertical sketch (index on the spine)
   ─ D: ruled notebook spread with annotations
   ═══════════════════════════════════════════════════════════ */

interface ProjectChapterProps {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}

const N = (i: number) => `0${i + 1}`;

const TechChips: React.FC<{ items: string[]; size?: string }> = ({ items, size = '0.5625rem' }) => (
  <div className="flex flex-wrap gap-1.5">
    {items.slice(0, 6).map((t) => (
      <span key={t} className="brutal-tag" style={{ fontSize: size }}>{t}</span>
    ))}
  </div>
);

const ChapterLabel: React.FC<{ index: number }> = ({ index }) => (
  <div className="flex items-center gap-2" style={{ marginBottom: '0.5rem' }}>
    <span className="ink-page-chip">CHAPTER {String(index + 1).padStart(2, '0')}</span>
    <InkArrow variant="bend" width={34} height={18} strokeWidth={2.5} style={{ color: 'var(--ink-faint)' }} />
  </div>
);

/* Plain-language value line — the "why it matters" for non-technical readers */
const ValueNote: React.FC<{ text?: string; compact?: boolean }> = ({ text, compact }) => {
  if (!text) return null;
  return (
    <div className="flex items-start gap-1.5" style={{ marginTop: compact ? '0.5rem' : '0.75rem' }}>
      <InkStar width={12} height={12} style={{ color: 'var(--black)', flexShrink: 0, marginTop: '3px' }} />
      <p className="font-ink" style={{ fontSize: compact ? '0.95rem' : '1.1rem', color: 'var(--ink-soft)', lineHeight: 1.4, transform: 'rotate(-0.5deg)' }}>
        {text}
      </p>
    </div>
  );
};

/* ── A: giant editorial poster ── */
const LayoutPoster: React.FC<ProjectChapterProps> = ({ project: p, index, onOpen }) => (
  <div
    data-cursor="view"
    role="button"
    tabIndex={0}
    onClick={() => onOpen(p)}
    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(p); } }}
    className="brutal-card overflow-hidden group cursor-pointer"
    style={{ transform: 'rotate(-0.3deg)' }}
  >
    <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-0">
      <div className="relative">
        <Art project={p} alt={`Screenshot of ${p.title} — ${p.category}`} className="w-full aspect-video lg:aspect-auto lg:h-full" />
        <span aria-hidden="true" className="hidden lg:block absolute top-3 right-3" style={{ color: 'var(--bg-card)', WebkitTextStroke: '1.5px var(--border)', opacity: 0.85 }}>
          <InkStar width={20} height={20} />
        </span>
        <span
          aria-hidden="true"
          className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 items-center justify-center"
          style={{
            width: 'clamp(56px, 6vw, 76px)', height: 'clamp(56px, 6vw, 76px)', borderRadius: '50%',
            background: 'var(--bg-card)', border: '2px solid var(--border)', boxShadow: 'var(--sh)',
            fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--black)',
          }}
        >
          {N(index)}
        </span>
      </div>
      <div className="flex flex-col justify-center relative" style={{ padding: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
        <ChapterLabel index={index} />
        <div className="flex items-center gap-2" style={{ marginBottom: '0.5rem' }}>
          <StatusBadge status={p.status} />
          <span className="brutal-badge" style={{ fontSize: '0.5rem' }}>{p.category}</span>
          {p.pushedAt && (
            <span className="font-mono" style={{ fontSize: '0.5rem', color: 'var(--ink-faint)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              PUSHED {getFormattedDate(p.pushedAt)}
            </span>
          )}
        </div>
        <h3 className="relative inline-block" style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: 'var(--black)',
          marginBottom: '0.75rem', letterSpacing: '-0.02em', lineHeight: 1.02,
        }}>
          {p.title}
          <span aria-hidden="true" className="absolute -bottom-1 left-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" style={{ width: '70%' }}>
            <InkStroke kind="underline" width="100%" height={10} strokeWidth={3} />
          </span>
        </h3>
        <p className="line-clamp-3" style={{ fontSize: '0.875rem', color: 'var(--ink-soft)', lineHeight: 1.7, marginBottom: '1rem', maxWidth: '48ch' }}>
          {p.description}
        </p>
        <ValueNote text={p.value} />
        <TechChips items={p.techStack} />
        <div className="flex items-center justify-between flex-wrap gap-2" style={{ marginTop: '1.25rem' }}>
          <div className="flex items-center gap-3 font-mono" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--black)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Open case file
            <InkArrow variant="straight" width={44} height={22} strokeWidth={2.5} style={{ transform: 'translateY(1px)' }} />
          </div>
          {(typeof p.stars === 'number' && p.stars > 0 || typeof p.forks === 'number' && p.forks > 0) && (
            <div className="flex items-center gap-2 font-mono" style={{ fontSize: '0.625rem', color: 'var(--ink-faint)', fontWeight: 700 }}>
              {typeof p.stars === 'number' && p.stars > 0 && <span className="flex items-center gap-1"><Star size={12} /> {p.stars}</span>}
              {typeof p.forks === 'number' && p.forks > 0 && <span className="flex items-center gap-1"><GitFork size={12} /> {p.forks}</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

/* ── B: split-screen case study ── */
const LayoutSplit: React.FC<ProjectChapterProps> = ({ project: p, index, onOpen }) => (
  <div
    data-cursor="view"
    role="button"
    tabIndex={0}
    onClick={() => onOpen(p)}
    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(p); } }}
    className="brutal-card overflow-hidden group cursor-pointer"
    style={{ transform: index % 2 === 1 ? 'rotate(0.4deg)' : 'rotate(-0.4deg)' }}
  >
    <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-0 h-full">
      <div className="relative">
        <Art project={p} alt={`Screenshot of ${p.title}`} className="w-full aspect-video md:aspect-auto md:h-full" />
        <span
          aria-hidden="true"
          className="md:absolute md:top-3 md:right-3 font-mono"
          style={{ color: 'var(--bg-card)', WebkitTextStroke: '1.5px var(--border)', opacity: 0.9, fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em' }}
        >
          N° {N(index)}
        </span>
      </div>
      <div className="flex flex-col justify-center relative" style={{ padding: '1.25rem 1.375rem' }}>
        <div className="flex items-center gap-2" style={{ marginBottom: '0.5rem' }}>
          <StatusBadge status={p.status} size="0.45rem" />
          <span className="brutal-badge" style={{ fontSize: '0.45rem' }}>{p.category}</span>
        </div>
        <h3 className="relative inline-block" style={{
          fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
          color: 'var(--black)', lineHeight: 1.05, marginBottom: '0.5rem', letterSpacing: '-0.02em',
        }}>
          {p.title}
          <span aria-hidden="true" className="absolute -bottom-1 left-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" style={{ width: '60%' }}>
            <InkStroke kind="underline" width="100%" height={8} strokeWidth={3} />
          </span>
        </h3>
        <p className="line-clamp-3" style={{ fontSize: '0.75rem', color: 'var(--ink-soft)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
          {p.description}
        </p>

        <ValueNote text={p.value} compact />

        {(p.problem || p.solution) && (
          <div className="flex flex-col gap-2" style={{ marginBottom: '0.75rem' }}>
            {p.problem && (
              <div className="brutal-card-static" style={{ padding: '0.5rem 0.625rem' }}>
                <span className="font-mono" style={{ fontSize: '0.4375rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-faint)', display: 'block', marginBottom: '0.15rem' }}>THE PROBLEM</span>
                <p className="line-clamp-1" style={{ fontSize: '0.625rem', color: 'var(--ink-soft)' }}>{p.problem}</p>
              </div>
            )}
            {p.solution && (
              <div className="brutal-card-static" style={{ padding: '0.5rem 0.625rem' }}>
                <span className="font-mono" style={{ fontSize: '0.4375rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-faint)', display: 'block', marginBottom: '0.15rem' }}>THE FIX</span>
                <p className="line-clamp-1" style={{ fontSize: '0.625rem', color: 'var(--ink-soft)' }}>{p.solution}</p>
              </div>
            )}
          </div>
        )}

        <TechChips items={p.techStack} size="0.5rem" />
        <div className="flex items-center justify-between flex-wrap gap-2" style={{ marginTop: '0.875rem' }}>
          <span className="font-mono" style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--black)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Open case file →
          </span>
          {p.pushedAt && (
            <span className="font-mono" style={{ fontSize: '0.5rem', color: 'var(--ink-faint)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {getFormattedDate(p.pushedAt)}
            </span>
          )}
        </div>
      </div>
    </div>
  </div>
);

/* ── C: asymmetric vertical sketch (index on spine) ── */
const LayoutVertical: React.FC<ProjectChapterProps> = ({ project: p, index, onOpen }) => (
  <div
    data-cursor="view"
    role="button"
    tabIndex={0}
    onClick={() => onOpen(p)}
    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(p); } }}
    className="brutal-card overflow-hidden group cursor-pointer"
    style={{ transform: index % 2 === 1 ? 'rotate(0.3deg)' : 'rotate(-0.3deg)' }}
  >
    <div className="relative">
      <div className="grid sm:grid-cols-[auto_1fr]">
        <span
          aria-hidden="true"
          className="flex items-center justify-center"
          style={{
            width: 'clamp(56px, 7vw, 84px)',
            fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            color: 'var(--bg-card)', WebkitTextStroke: '2px var(--border)', opacity: 0.9,
            writingMode: 'vertical-rl', textOrientation: 'mixed', letterSpacing: '0.1em',
          }}
        >
          CHAPTER {String(index + 1).padStart(2, '0')}
        </span>
        <div className="grid sm:grid-cols-2 gap-0">
          <div className="relative">
            <Art project={p} alt={`Screenshot of ${p.title}`} className="w-full aspect-video sm:aspect-auto sm:h-full" />
          </div>
          <div className="flex flex-col justify-center" style={{ padding: '1.125rem 1.25rem' }}>
            <div className="flex items-center gap-2" style={{ marginBottom: '0.5rem' }}>
              <StatusBadge status={p.status} size="0.45rem" />
              <span className="brutal-badge" style={{ fontSize: '0.45rem' }}>{p.category}</span>
            </div>
            <h3 className="relative inline-block" style={{
              fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(1.125rem, 2.2vw, 1.5rem)',
              color: 'var(--black)', lineHeight: 1.05, marginBottom: '0.5rem', letterSpacing: '-0.02em',
            }}>
              {p.title}
              <span aria-hidden="true" className="absolute -bottom-1 left-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" style={{ width: '60%' }}>
                <InkStroke kind="scratch" width="100%" height={7} strokeWidth={3} />
              </span>
            </h3>
            <p className="line-clamp-3" style={{ fontSize: '0.6875rem', color: 'var(--ink-soft)', lineHeight: 1.7, marginBottom: '0.625rem' }}>
              {p.description}
            </p>
            <ValueNote text={p.value} compact />
            <TechChips items={p.techStack} size="0.5rem" />
            <div className="flex items-center gap-2 font-mono" style={{ marginTop: '0.75rem', fontSize: '0.625rem', fontWeight: 700, color: 'var(--black)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Open case file
              <InkArrow variant="curved" width={36} height={20} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ── D: ruled notebook spread with annotations ── */
const LayoutNotebook: React.FC<ProjectChapterProps> = ({ project: p, index, onOpen }) => (
  <div
    data-cursor="view"
    role="button"
    tabIndex={0}
    onClick={() => onOpen(p)}
    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(p); } }}
    className="group cursor-pointer relative"
    style={{ transform: index % 2 === 1 ? 'rotate(0.3deg)' : 'rotate(-0.3deg)' }}
  >
    <div className="sheet-lined relative overflow-hidden" style={{ border: 'var(--bw) solid var(--border)', boxShadow: 'var(--sh)', background: 'var(--bg-card)' }}>
      <span aria-hidden="true" className="hidden lg:block absolute top-4 right-5 font-mono" style={{ fontSize: '0.5625rem', color: 'var(--ink-faint)', fontWeight: 700, letterSpacing: '0.1em' }}>
        FIELD NOTES · {N(index)}
      </span>

      <div className="grid lg:grid-cols-3 gap-0">
        <div className="lg:col-span-1 relative" style={{ padding: 'clamp(1rem, 2.5vw, 1.5rem)' }}>
          <div className="flex items-center gap-2" style={{ marginBottom: '0.5rem' }}>
            <StatusBadge status={p.status} size="0.45rem" />
            <span className="brutal-badge" style={{ fontSize: '0.45rem' }}>{p.category}</span>
          </div>
          <h3 className="relative inline-block" style={{
            fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
            color: 'var(--black)', lineHeight: 1.05, marginBottom: '0.625rem', letterSpacing: '-0.02em',
          }}>
            {p.title}
            <span aria-hidden="true" className="absolute -bottom-1 left-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" style={{ width: '65%' }}>
              <InkStroke kind="underline" width="100%" height={8} strokeWidth={3} />
            </span>
          </h3>
          <p className="line-clamp-4" style={{ fontSize: '0.6875rem', color: 'var(--ink-soft)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            {p.description}
          </p>
          <ValueNote text={p.value} compact />
          <TechChips items={p.techStack} size="0.5rem" />
          <div className="flex items-center gap-2 font-mono" style={{ marginTop: '1rem', fontSize: '0.625rem', fontWeight: 700, color: 'var(--black)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Open case file <InkArrow variant="bend" width={36} height={18} strokeWidth={2.5} />
          </div>
        </div>
        <div className="lg:col-span-2 relative">
          <Art project={p} alt={`Screenshot of ${p.title}`} className="w-full aspect-video lg:aspect-auto lg:h-full" />
          <span aria-hidden="true" className="hidden lg:flex absolute -bottom-2 -left-2 items-center" style={{ color: 'var(--ink-faint)', opacity: 0.7 }}>
            <InkCross width={20} height={20} />
          </span>
        </div>
      </div>
    </div>
  </div>
);

/* ── dispatcher ── */
const ProjectChapter: React.FC<ProjectChapterProps> = ({ project, index, onOpen }) => {
  const layout = index % 4;
  if (layout === 0) return <LayoutPoster project={project} index={index} onOpen={onOpen} />;
  if (layout === 1) return <LayoutSplit project={project} index={index} onOpen={onOpen} />;
  if (layout === 2) return <LayoutVertical project={project} index={index} onOpen={onOpen} />;
  return <LayoutNotebook project={project} index={index} onOpen={onOpen} />;
};

export default ProjectChapter;
