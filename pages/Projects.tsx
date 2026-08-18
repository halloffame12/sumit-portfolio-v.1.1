import React, { useState } from 'react';
import { ALL_PROJECTS, ALL_TECH_TAGS, PROJECT_COUNTS } from '../portfolioData';
import { ExternalLink, ArrowUpRight, Folder } from 'lucide-react';
import SeoHelmet from '../components/SeoHelmet';
import ScrollReveal from '../components/ScrollReveal';
import MagneticButton from '../components/MagneticButton';
import ProjectChapter from '../components/ProjectChapter';
import ProjectGridCard from '../components/ProjectGridCard';
import ProjectModal from '../components/ProjectModal';
import ChapterHeader from '../components/ChapterHeader';
import { InkStar } from '../components/Ink';
import type { Project } from '../types';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [active, setActive] = useState<Project | null>(null);

  const curated = ALL_PROJECTS.filter((p) => p.source === 'curated');
  const openSource = ALL_PROJECTS.filter((p) => p.source !== 'curated');

  const matches = (p: Project) =>
    activeFilter
      ? p.techStack.some((t) => t.toLowerCase() === activeFilter.toLowerCase())
      : true;

  const filteredCurated = curated.filter(matches);
  const filteredOpen = openSource.filter(matches);
  const shownCount = filteredCurated.length + filteredOpen.length;

  const handleFilter = (tag: string) => {
    setActiveFilter(prev => prev === tag ? null : tag);
  };

  return (
    <article className="page-shell">
      <SeoHelmet
        path="/projects"
        title="The Work — Sumit Chauhan | Software Engineer"
        description="Every project as a chapter: ctx (MCP code-intelligence), Versz, real-time chat, computer vision, and the open-source backlog — synced straight from GitHub."
      />

      <div className="page-container">
        {/* ═══ CHAPTER 04 — WORK · opener ═══ */}
        <ScrollReveal variant="clipReveal">
          <ChapterHeader
            level={1}
            kicker="Chapter 04 — Work"
            page="PAGE 04 / 09 · THE CASEBOOK"
            titleId="work-page-h"
            title="The Work"
            intro="open any chapter → read the case file"
          />
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-soft)', maxWidth: '34rem' }}>
            Four case files below, then the full open-source backlog — every entry synced straight from GitHub, nothing staged.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="flex flex-wrap gap-2.5" style={{ marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: 'var(--bw) solid var(--border)' }}>
            <div className="brutal-card-static flex items-center gap-2" style={{ padding: '0.5rem 0.875rem' }}>
              <div className="brutal-icon-box" style={{ width: '32px', height: '32px' }}><Folder size={16} /></div>
              <div>
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1rem', color: 'var(--black)' }}>{PROJECT_COUNTS.total}</p>
                <p className="font-mono" style={{ fontSize: '0.5625rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-faint)' }}>Projects</p>
              </div>
            </div>
            <div className="brutal-card-static flex items-center gap-2" style={{ padding: '0.5rem 0.875rem' }}>
              <div className="brutal-icon-box" style={{ width: '32px', height: '32px' }}><ExternalLink size={16} /></div>
              <div>
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1rem', color: 'var(--black)' }}>{PROJECT_COUNTS.openSource}</p>
                <p className="font-mono" style={{ fontSize: '0.5625rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-faint)' }}>On GitHub</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.15}>
          <div role="group" aria-label="Filter projects by technology" className="flex flex-wrap gap-1.5" style={{ marginBottom: '1.25rem' }}>
            <button
              onClick={() => setActiveFilter(null)}
              aria-pressed={!activeFilter}
              className={`brutal-tag ${!activeFilter ? '!bg-[var(--black)] !text-[var(--bg)]' : ''}`}
              style={{ fontSize: '0.625rem', cursor: 'pointer' }}
            >All</button>
            {ALL_TECH_TAGS.slice(0, 12).map(tag => (
              <button
                key={tag}
                onClick={() => handleFilter(tag)}
                aria-pressed={activeFilter === tag}
                className={`brutal-tag ${activeFilter === tag ? '!bg-[var(--black)] !text-[var(--bg)]' : ''}`}
                style={{ fontSize: '0.625rem', cursor: 'pointer' }}
              >{tag}</button>
            ))}
          </div>
          <p role="status" aria-live="polite" className="font-mono" style={{ fontSize: '0.5625rem', color: 'var(--ink-faint)', marginBottom: '1.5rem' }}>
            Showing {shownCount} of {ALL_PROJECTS.length} projects
          </p>
        </ScrollReveal>

        {/* ── curated case files ── */}
        {filteredCurated.length > 0 && (
          <>
            <h2 className="sr-only">Case files</h2>
            <div className="flex flex-col gap-6">
              {filteredCurated.map((p, i) => (
                <ProjectChapter key={p.id} project={p} index={i} onOpen={setActive} />
              ))}
            </div>
          </>
        )}

        {/* ── open-source backlog ── */}
        {filteredOpen.length > 0 && (
          <>
            <div className="flex items-center justify-between flex-wrap gap-2" style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)', color: 'var(--black)', letterSpacing: '-0.02em' }}>
                The <span className="ink-underline">open-source</span> backlog
              </h2>
              <span className="font-mono" style={{ fontSize: '0.5625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-faint)' }}>
                {filteredOpen.length} repos · live from GitHub
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredOpen.map((p, i) => (
                <ProjectGridCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </>
        )}

        <ScrollReveal variant="fadeUp">
          <div className="flex flex-col items-center gap-3" style={{ paddingTop: 'var(--section-gap)' }}>
            <div className="flex items-center gap-3">
              <InkStar width={18} height={18} style={{ opacity: 0.6 }} />
              <span className="font-ink" style={{ fontSize: '1.35rem', color: 'var(--ink-faint)', transform: 'rotate(-2deg)' }}>the full backlog lives on GitHub</span>
              <InkStar width={14} height={14} style={{ opacity: 0.6 }} />
            </div>
            <MagneticButton strength={0.2}>
              <a href="https://github.com/halloffame12" target="_blank" rel="noopener noreferrer" className="brutal-btn">
                <ExternalLink size={15} /> View All Repos <ArrowUpRight size={13} />
              </a>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </article>
  );
};

export default Projects;