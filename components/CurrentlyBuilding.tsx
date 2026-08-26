import React from 'react';
import { ArrowUpRight, Activity } from 'lucide-react';
import type { Project } from '../types';
import { getFormattedDate, getSyncAgeLabel } from '../portfolioData';
import ScrollReveal from './ScrollReveal';
import StatusBadge from './StatusBadge';
import ChapterHeader from './ChapterHeader';

interface CurrentlyBuildingProps {
  projects: Project[];
}

/* ═══════════════════════════════════════════════════════════
   CHAPTER 02 — MIND · the desk ledger.
   One ruled notebook sheet that lists what is on the desk right
   now, straight from the repo. Ledger rows = live projects.
   ═══════════════════════════════════════════════════════════ */

const CurrentlyBuilding: React.FC<CurrentlyBuildingProps> = ({ projects }) => {
  if (projects.length === 0) return null;

  return (
    <section className="page-container" style={{ paddingTop: 'var(--section-gap)' }} aria-labelledby="building-h">
      <ScrollReveal variant="fadeUp">
        <ChapterHeader
          kicker="Chapter 02 — Mind"
          page="PAGE 02 / 09 · ON THE DESK"
          titleId="building-h"
          title={<>On the desk, <span className="ink-underline">right now</span></>}
          intro="work in progress, straight from the repo —"
          meta={
            <span className="flex items-center gap-1.5" style={{ fontSize: '0.5625rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-faint)' }}>
              <span className="animate-pulse-dot" style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--black)', display: 'inline-block' }} />
              Live · GitHub sync {getSyncAgeLabel()}
            </span>
          }
        />
      </ScrollReveal>

      {/* ── the desk ledger ── */}
      <ScrollReveal variant="fadeUp" delay={0.06}>
        <div className="sheet-lined relative" style={{ border: 'var(--bw) solid var(--border)', boxShadow: 'var(--sh-lg)', background: 'var(--bg-card)', transform: 'rotate(-0.2deg)' }}>
          <div className="flex items-center justify-between flex-wrap gap-2" style={{ padding: '0.875rem 1.125rem', borderBottom: 'var(--bw-sm) dashed var(--border)' }}>
            <span className="font-mono ink-label" style={{ color: 'var(--ink-faint)' }}>The Desk · Open Ledger</span>
            <span className="font-ink" style={{ fontSize: '1rem', color: 'var(--ink-faint)', transform: 'rotate(-2deg)' }}>live from the repo ↓</span>
          </div>

          <div className="flex flex-col">
            {projects.map((p, i) => (
              <div
                key={p.id}
                className="grid md:grid-cols-[auto_1fr_auto] gap-x-6 gap-y-3 md:items-center"
                style={{ padding: 'clamp(1rem, 2vw, 1.25rem) 1.125rem', borderBottom: i < projects.length - 1 ? 'var(--bw-sm) dashed var(--border)' : 'none' }}
              >
                {/* index + name */}
                <div className="flex items-center gap-3">
                  <span className="chapter-no" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', lineHeight: 1 }}>{String(i + 1).padStart(2, '0')}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap" style={{ marginBottom: '2px' }}>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--black)', letterSpacing: '-0.02em' }}>{p.title}</h3>
                      <StatusBadge status={p.status} size="0.5rem" />
                    </div>
                    <p className="font-mono" style={{ fontSize: '0.5625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-faint)' }}>{p.category}</p>
                  </div>
                </div>

                {/* note + tags */}
                <div>
                  <p className="line-clamp-2" style={{ fontSize: '0.75rem', color: 'var(--ink-soft)', lineHeight: 1.7, maxWidth: '52ch' }}>{p.description}</p>
                  <div className="flex flex-wrap gap-1.5" style={{ marginTop: '0.5rem' }}>
                    {p.techStack.slice(0, 5).map((t) => <span key={t} className="brutal-tag" style={{ fontSize: '0.5625rem' }}>{t}</span>)}
                  </div>
                </div>

                {/* meta + actions */}
                <div className="flex items-center gap-3 md:flex-col md:items-end md:gap-2 flex-shrink-0">
                  {p.pushedAt && (
                    <span className="flex items-center gap-1 font-mono" style={{ fontSize: '0.5625rem', fontWeight: 700, color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      <Activity size={12} /> {getFormattedDate(p.pushedAt)}
                    </span>
                  )}
                  <div className="flex items-center gap-2">
                    {p.repoUrl && (
                      <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} repository`} className="brutal-btn-outline brutal-btn-sm">
                        Code <ArrowUpRight size={12} />
                      </a>
                    )}
                    {p.demoUrl && (
                      <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live demo`} className="brutal-btn brutal-btn-sm">
                        Demo <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ledger footer */}
          <div className="flex items-center justify-between flex-wrap gap-2" style={{ padding: '0.75rem 1.125rem', borderTop: 'var(--bw-sm) dashed var(--border)' }}>
            <span className="font-ink" style={{ fontSize: '1rem', color: 'var(--ink-faint)', transform: 'rotate(-1deg)' }}>
              the desk never clears — more on the work page →
            </span>
            <span className="font-mono" style={{ fontSize: '0.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-faint)' }}>
              {projects.length} in motion
            </span>
          </div>
        </div>
      </ScrollReveal>

      {/* running footer */}
      <div className="chapter-footer" style={{ marginTop: '1.5rem' }}>
        <span>PAGE 02 / 09 · ON THE DESK</span>
        <span>CHAPTER TWO — THE MIND</span>
      </div>
    </section>
  );
};

export default CurrentlyBuilding;
