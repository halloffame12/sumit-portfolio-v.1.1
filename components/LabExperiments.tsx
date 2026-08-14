import React from 'react';
import { ArrowUpRight, Star, GitFork } from 'lucide-react';
import { LAB_PROJECTS, getFormattedDate } from '../portfolioData';
import ScrollReveal from './ScrollReveal';
import { InkArrow } from './Ink';
import ChapterHeader from './ChapterHeader';
import type { Project } from '../types';

/* ═══════════════════════════════════════════════════════════
   LAB EXPERIMENTS — the "chapter of unfinished ideas".
   Auto-sourced from real, non-curated GitHub repos (no fake
   content). Sketched ledger rows — messy on purpose, honest
   about the "still cooking" state of open exploration.
   ═══════════════════════════════════════════════════════════ */

interface LabExperimentsProps {
  research?: { title: string; desc: string; org: string; year: string; link?: string };
  className?: string;
}

const LabRow: React.FC<{ project: Project; index: number }> = ({ project: p, index }) => (
  <a
    href={p.repoUrl}
    target="_blank"
    rel="noreferrer noopener"
    className="group flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 no-underline"
    style={{ padding: '0.75rem 0', borderBottom: 'var(--bw-sm) dashed var(--border)', color: 'inherit' }}
  >
    <span className="font-mono" style={{ fontSize: '0.5625rem', fontWeight: 700, color: 'var(--ink-faint)', minWidth: '2.5rem', flexShrink: 0 }}>
      {String(index + 1).padStart(2, '0')}
    </span>
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="font-mono" style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--black)', textDecoration: 'underline', textDecorationStyle: 'wavy', textUnderlineOffset: '3px' }}>
          {p.title}
        </span>
        <span className="brutal-tag" style={{ fontSize: '0.4375rem' }}>{p.category || 'experiment'}</span>
      </div>
      <p className="line-clamp-1 font-mono" style={{ fontSize: '0.5625rem', color: 'var(--ink-soft)', marginTop: '0.15rem' }}>{p.description}</p>
    </div>
    <div className="flex items-center gap-2.5 flex-shrink-0">
      {p.pushedAt && (
        <span className="font-mono" style={{ fontSize: '0.5rem', color: 'var(--ink-faint)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {getFormattedDate(p.pushedAt)}
        </span>
      )}
      {typeof p.stars === 'number' && p.stars > 0 && (
        <span className="flex items-center gap-1 font-mono" style={{ fontSize: '0.5rem', color: 'var(--ink-faint)', fontWeight: 700 }}><Star size={11} /> {p.stars}</span>
      )}
      {typeof p.forks === 'number' && p.forks > 0 && (
        <span className="flex items-center gap-1 font-mono" style={{ fontSize: '0.5rem', color: 'var(--ink-faint)', fontWeight: 700 }}><GitFork size={11} /> {p.forks}</span>
      )}
      <span className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--black)' }}>
        <ArrowUpRight size={14} />
      </span>
    </div>
  </a>
);

const LabExperiments: React.FC<LabExperimentsProps> = ({ research, className = '' }) => {
  const rows = LAB_PROJECTS.slice(0, 8);

  return (
    <section className={className} style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
      <ScrollReveal variant="fadeUp">
        <ChapterHeader
          kicker="The Lab"
          page="EXPERIMENTS — UNFINISHED BUSINESS"
          title={<>Ideas I <span className="ink-underline">didn't let die</span></>}
          sub={`auto-listed from ${rows.length}+ real repos — no curation, just the bench`}
        />
      </ScrollReveal>

      <ScrollReveal variant="fadeUp">
        <div className="sheet-lined relative" style={{ border: 'var(--bw) solid var(--border)', boxShadow: 'var(--sh)', background: 'var(--bg-card)', padding: '0.875rem 1rem 0.5rem' }}>
          <div className="flex items-center justify-between flex-wrap gap-2" style={{ marginBottom: '0.25rem' }}>
            <span className="font-mono ink-label" style={{ fontSize: '0.5625rem', color: 'var(--black)' }}>OPEN-SOURCE BENCH · AUTO-SYNCED</span>
            <span className="flex items-center gap-1.5">
              <InkArrow variant="bend" width={32} height={16} strokeWidth={2.5} style={{ color: 'var(--ink-faint)', transform: 'rotate(180deg)' }} />
              <span className="font-ink" style={{ fontSize: '0.95rem', color: 'var(--ink-faint)' }}>live from GitHub ↓</span>
            </span>
          </div>

          {rows.map((p, i) => <LabRow key={p.id} project={p} index={i} />)}

          {rows.length === 0 && (
            <p className="font-mono" style={{ fontSize: '0.625rem', color: 'var(--ink-faint)', padding: '0.5rem 0' }}>
              bench is empty right now — checking the bench drawer again soon.
            </p>
          )}

          {research && (
            <div className="flex items-start gap-3" style={{ padding: '0.875rem 0 0.625rem' }}>
              <div className="brutal-icon-box" style={{ width: '38px', height: '38px', flexShrink: 0 }}>
                <span className="font-mono" style={{ fontSize: '0.625rem', fontWeight: 800 }}>PAPER</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.8125rem', color: 'var(--black)' }}>{research.title}</span>
                  <span className="brutal-tag" style={{ fontSize: '0.4375rem' }}>{research.org} · {research.year}</span>
                </div>
                <p className="line-clamp-2" style={{ fontSize: '0.6875rem', color: 'var(--ink-soft)', lineHeight: 1.6, marginTop: '0.2rem', maxWidth: '72ch' }}>{research.desc}</p>
                {research.link && (
                  <a href={research.link} target="_blank" rel="noreferrer noopener" className="font-mono no-underline" style={{ fontSize: '0.5625rem', fontWeight: 700, color: 'var(--black)', textDecoration: 'underline', textDecorationStyle: 'wavy', textUnderlineOffset: '3px', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.25rem' }}>
                    read the paper <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default LabExperiments;
