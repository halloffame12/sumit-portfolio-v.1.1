import React from 'react';
import { ArrowUpRight, Star, GitFork, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Project } from '../types';
import StatusBadge from './StatusBadge';
import { InkStroke } from './Ink';

interface ProjectGridCardProps {
  project: Project;
  index: number;
}

const shortDate = (iso?: string): string => {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
};

const ProjectGridCard: React.FC<ProjectGridCardProps> = ({ project: p, index }) => {
  const href = p.repoUrl || p.demoUrl;
  const isLink = Boolean(href);
  const genericDesc = /^Open-source project by Sumit Chauhan\.?$/i.test(p.description);

  const inner = (
    <>
      <div className="flex flex-col flex-1" style={{ padding: '0.875rem 1rem' }}>
        <div className="flex items-center justify-between gap-2" style={{ marginBottom: '0.4rem' }}>
          <span className="font-mono" style={{ fontSize: '0.5rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--ink-faint)' }}>
            N° {String(index + 1).padStart(2, '0')}
          </span>
          <StatusBadge status={p.status} size="0.45rem" />
        </div>
        <h3 className="relative inline-block" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.875rem', color: 'var(--black)', lineHeight: 1.35, marginBottom: '0.35rem' }}>
          {p.title}
          <span aria-hidden="true" className="absolute -bottom-0.5 left-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" style={{ width: '65%' }}>
            <InkStroke kind="underline" width="100%" height={6} strokeWidth={3} />
          </span>
        </h3>
        {genericDesc ? (
          <p className="font-ink" style={{ fontSize: '0.95rem', color: 'var(--ink-soft)', lineHeight: 1.5, marginBottom: '0.625rem' }}>
            on the bench — open the repo to see what's inside
          </p>
        ) : (
          <p className="line-clamp-3" style={{ fontSize: '0.6875rem', color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: '0.625rem' }}>
            {p.description}
          </p>
        )}
        <div className="flex flex-wrap gap-1.5" style={{ marginBottom: '0.75rem' }}>
          {p.techStack.slice(0, 4).map((t) => (
            <motion.span
              key={t}
              className="brutal-tag ink-stamp"
              style={{ fontSize: '0.5625rem' }}
              whileHover={{ scale: 1.1, rotate: -2 }}
              transition={{ type: 'spring', stiffness: 500, damping: 20 }}
            >
              {t}
            </motion.span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between gap-2" style={{ borderTop: 'var(--bw-sm) dashed var(--border)', paddingTop: '0.6rem' }}>
          <div className="flex items-center gap-3 font-mono" style={{ fontSize: '0.5625rem', fontWeight: 700, color: 'var(--ink-faint)' }}>
            {typeof p.stars === 'number' && p.stars > 0 && (
              <span className="flex items-center gap-1"><Star size={11} /> {p.stars}</span>
            )}
            {typeof p.forks === 'number' && p.forks > 0 && (
              <span className="flex items-center gap-1"><GitFork size={11} /> {p.forks}</span>
            )}
            {p.pushedAt && (
              <span className="flex items-center gap-1"><Calendar size={11} /> {shortDate(p.pushedAt)}</span>
            )}
          </div>
          {isLink && (
            <span className="flex items-center gap-1 font-mono" style={{ fontSize: '0.5625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--black)' }}>
              Repo
              <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          )}
        </div>
      </div>
    </>
  );

  if (isLink) {
    return (
      <a
        href={href!}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="open"
        aria-label={`${p.title} — open repository on GitHub`}
        className="brutal-card ink-card-lift group h-full flex flex-col"
        style={{ transform: index % 2 === 1 ? 'rotate(0.2deg)' : 'rotate(-0.2deg)' }}
      >
        {inner}
      </a>
    );
  }

  return (
    <div
      data-cursor="view"
      className="brutal-card ink-card-lift group h-full flex flex-col"
      style={{ transform: index % 2 === 1 ? 'rotate(0.2deg)' : 'rotate(-0.2deg)' }}
    >
      {inner}
    </div>
  );
};

export default ProjectGridCard;
