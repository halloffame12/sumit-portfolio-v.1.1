import React from 'react';
import type { Project } from '../types';
import SkeletonImage from './SkeletonImage';
import StatusBadge from './StatusBadge';
import { InkArrow, InkStar, InkStroke } from './Ink';

interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'wide' | 'featured';
  onOpen: (p: Project) => void;
  index?: number;
}

const num = (i?: number) => `N° ${String((i ?? 0) + 1).padStart(2, '0')}`;

const ProjectCard: React.FC<ProjectCardProps> = ({ project: p, variant = 'default', onOpen, index }) => {
  if (variant === 'featured') {
    return (
      <div
        data-cursor="view"
        role="button"
        tabIndex={0}
        onClick={() => onOpen(p)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(p); } }}
        className="brutal-card overflow-hidden group cursor-pointer"
        style={{ transform: 'rotate(-0.3deg)' }}
      >
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="relative">
            <SkeletonImage src={p.imageUrl} alt={`Screenshot of ${p.title} — ${p.category}`} className="w-full aspect-video lg:aspect-auto lg:h-full" />
            <span aria-hidden="true" className="hidden lg:block absolute top-3 right-3" style={{ color: 'var(--bg-card)', WebkitTextStroke: '1.5px var(--border)', opacity: 0.8 }}>
              <InkStar width={18} height={18} />
            </span>
          </div>
          <div style={{ padding: 'clamp(1.25rem, 2.5vw, 2rem)' }} className="flex flex-col justify-center relative">
            <div className="flex items-center gap-2" style={{ marginBottom: '0.6rem' }}>
              <span className="font-mono ink-label" style={{ fontSize: '0.5625rem', color: 'var(--ink-faint)' }}>{num(index)}</span>
              <StatusBadge status={p.status} />
              <span className="brutal-badge" style={{ fontSize: '0.5rem' }}>{p.category}</span>
            </div>
            <h3 className="relative inline-block" style={{
              fontFamily: 'var(--font-heading)', fontWeight: 900,
              fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)',
              color: 'var(--black)', marginBottom: '0.5rem', letterSpacing: '-0.02em', lineHeight: 1.1,
            }}>
              {p.title}
              <span aria-hidden="true" className="absolute -bottom-1 left-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" style={{ width: '70%' }}>
                <InkStroke kind="underline" width="100%" height={8} strokeWidth={3} />
              </span>
            </h3>
            <p className="line-clamp-3" style={{ fontSize: '0.8125rem', color: 'var(--ink-soft)', lineHeight: 1.7, marginBottom: '1rem', maxWidth: '48ch' }}>{p.description}</p>
            <div className="flex flex-wrap gap-1" style={{ marginBottom: '1rem' }}>
              {p.techStack.slice(0, 6).map((t) => <span key={t} className="brutal-tag">{t}</span>)}
            </div>
            <div className="flex items-center gap-2 font-mono" style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--black)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Open case file
              <InkArrow variant="straight" width={44} height={22} strokeWidth={2.5} style={{ color: 'var(--black)', transform: 'translateY(1px)' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'wide') {
    return (
      <div
        data-cursor="view"
        role="button"
        tabIndex={0}
        onClick={() => onOpen(p)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(p); } }}
        className="brutal-card overflow-hidden group cursor-pointer h-full"
        style={{ transform: index !== undefined && index % 2 === 1 ? 'rotate(0.3deg)' : 'rotate(-0.3deg)' }}
      >
        <div className="grid sm:grid-cols-2 gap-0 h-full">
          <SkeletonImage src={p.imageUrl} alt={`Screenshot of ${p.title}`} className="w-full aspect-video sm:aspect-auto sm:h-full" />
          <div className="flex flex-col justify-center relative" style={{ padding: '1rem 1.125rem' }}>
            <div className="flex items-center gap-1.5" style={{ marginBottom: '0.5rem' }}>
              <span className="font-mono" style={{ fontSize: '0.5rem', color: 'var(--ink-faint)', fontWeight: 700, letterSpacing: '0.08em' }}>{num(index)}</span>
              <StatusBadge status={p.status} size="0.45rem" />
            </div>
            <h3 className="relative inline-block" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.9375rem', color: 'var(--black)', lineHeight: 1.3, marginBottom: '0.3rem' }}>
              {p.title}
              <span aria-hidden="true" className="absolute -bottom-1 left-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" style={{ width: '60%' }}>
                <InkStroke kind="underline" width="100%" height={7} strokeWidth={3} />
              </span>
            </h3>
            <p className="line-clamp-3" style={{ fontSize: '0.6875rem', color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: '0.625rem' }}>{p.description}</p>
            <div className="flex flex-wrap gap-1">
              {p.techStack.slice(0, 4).map((t) => <span key={t} className="brutal-tag" style={{ fontSize: '0.5rem' }}>{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      data-cursor="view"
      role="button"
      tabIndex={0}
      onClick={() => onOpen(p)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(p); } }}
      className="brutal-card overflow-hidden group cursor-pointer h-full flex flex-col"
      style={{ transform: index !== undefined && index % 2 === 1 ? 'rotate(0.4deg)' : 'rotate(-0.4deg)' }}
    >
      <SkeletonImage src={p.imageUrl} alt={`Screenshot of ${p.title} — ${p.category}`} className="w-full aspect-video" />
      <div className="flex flex-col flex-1" style={{ padding: '0.875rem 1rem' }}>
        <div className="flex items-start justify-between gap-2" style={{ marginBottom: '0.25rem' }}>
          <div className="min-w-0">
            <span className="font-mono" style={{ fontSize: '0.5rem', color: 'var(--ink-faint)', fontWeight: 700, letterSpacing: '0.08em', display: 'block', marginBottom: '2px' }}>{num(index)}</span>
            <h3 className="relative inline-block" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.8125rem', color: 'var(--black)', lineHeight: 1.3 }}>
              {p.title}
              <span aria-hidden="true" className="absolute -bottom-1 left-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" style={{ width: '65%' }}>
                <InkStroke kind="underline" width="100%" height={6} strokeWidth={3} />
              </span>
            </h3>
          </div>
          <InkArrow variant="curved" width={26} height={16} strokeWidth={2.5} className="flex-shrink-0 mt-0.5 opacity-40 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" style={{ color: 'var(--black)' }} />
        </div>
        <p className="line-clamp-2" style={{ fontSize: '0.6875rem', color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: '0.625rem' }}>{p.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto" style={{ marginBottom: '0.625rem' }}>
          {p.techStack.slice(0, 4).map((t) => <span key={t} className="brutal-tag" style={{ fontSize: '0.5rem' }}>{t}</span>)}
        </div>
        <div className="flex items-center gap-1.5">
          <StatusBadge status={p.status} size="0.45rem" />
          <span className="brutal-badge" style={{ fontSize: '0.45rem' }}>{p.category}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
