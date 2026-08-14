import React, { useState } from 'react';
import { ALL_PROJECTS, ALL_TECH_TAGS, PROJECT_COUNTS } from '../portfolioData';
import { ExternalLink, ArrowUpRight, Folder } from 'lucide-react';
import SeoHelmet from '../components/SeoHelmet';
import ScrollReveal from '../components/ScrollReveal';
import MagneticButton from '../components/MagneticButton';
import ProjectChapter from '../components/ProjectChapter';
import ProjectModal from '../components/ProjectModal';
import ChapterHeader from '../components/ChapterHeader';
import { InkStar } from '../components/Ink';
import type { Project } from '../types';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [active, setActive] = useState<Project | null>(null);
  const allProjects = ALL_PROJECTS;
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
        title="The Work — Sumit Chauhan | Full-Stack Developer"
        description="Every project as a chapter: real-time anonymous chat, AI-powered blogging, Flutter apps, computer vision platforms, and open source projects — synced straight from GitHub."
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
            Each project below is a chapter with its own case file. Real-time platforms, AI tools, cross-platform apps — synced straight from my GitHub, nothing staged.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="flex flex-wrap gap-2.5" style={{ marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: 'var(--bw) solid var(--border)' }}>
            <div className="brutal-card-static flex items-center gap-2" style={{ padding: '0.5rem 0.875rem' }}>
              <div className="brutal-icon-box" style={{ width: '32px', height: '32px' }}><Folder size={16} /></div>
              <div>
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1rem', color: 'var(--black)' }}>{PROJECT_COUNTS.total}</p>
                <p className="font-mono" style={{ fontSize: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-faint)' }}>Chapters</p>
              </div>
            </div>
            <div className="brutal-card-static flex items-center gap-2" style={{ padding: '0.5rem 0.875rem' }}>
              <div className="brutal-icon-box" style={{ width: '32px', height: '32px' }}><ExternalLink size={16} /></div>
              <div>
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1rem', color: 'var(--black)' }}>{PROJECT_COUNTS.openSource}</p>
                <p className="font-mono" style={{ fontSize: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-faint)' }}>On GitHub</p>
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
              style={{ fontSize: '0.5625rem', cursor: 'pointer' }}
            >All</button>
            {ALL_TECH_TAGS.slice(0, 12).map(tag => (
              <button
                key={tag}
                onClick={() => handleFilter(tag)}
                aria-pressed={activeFilter === tag}
                className={`brutal-tag ${activeFilter === tag ? '!bg-[var(--black)] !text-[var(--bg)]' : ''}`}
                style={{ fontSize: '0.5625rem', cursor: 'pointer' }}
              >{tag}</button>
            ))}
          </div>
          <p role="status" aria-live="polite" className="font-mono" style={{ fontSize: '0.5625rem', color: 'var(--ink-faint)', marginBottom: '1.5rem' }}>
            Showing {filteredProjects.length} of {allProjects.length} chapters
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-6">
          {filteredProjects.map((p, i) => (
            <ProjectChapter key={p.id} project={p} index={i} onOpen={setActive} />
          ))}
        </div>

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