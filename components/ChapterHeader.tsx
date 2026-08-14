import React from 'react';
import { InkArrow } from './Ink';

/* ═══════════════════════════════════════════════════════════
   CHAPTER HEADER — one header system for every chapter, so the
   whole site reads like a single book: kicker sticker + page
   chip on the top line, a display title, then either a
   handwritten intro or a mono sub-caption. Chapters 01→09 all
   use this, so the story stays visually continuous.
   ═══════════════════════════════════════════════════════════ */

interface ChapterHeaderProps {
  /** sticker label — e.g. "Chapter 02 — Mind" */
  kicker?: string;
  /** page chip — e.g. "PAGE 02 / 09 · ON THE DESK" */
  page?: string;
  title: React.ReactNode;
  /** handwritten sub-line (Caveat) with a leading ink arrow */
  intro?: React.ReactNode;
  /** mono caption, uppercase — for technical sub-labels */
  sub?: React.ReactNode;
  /** right-aligned meta chip (sync status, etc.) */
  meta?: React.ReactNode;
  /** heading level */
  level?: 1 | 2;
  titleId?: string;
}

const ChapterHeader: React.FC<ChapterHeaderProps> = ({
  kicker,
  page,
  title,
  intro,
  sub,
  meta,
  level = 2,
  titleId,
}) => {
  const Tag = (level === 1 ? 'h1' : 'h2') as 'h1' | 'h2';
  return (
    <header style={{ marginBottom: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
      <div className="flex items-center justify-between gap-3 flex-wrap" style={{ marginBottom: '0.875rem' }}>
        <div className="flex items-center gap-3 flex-wrap">
          {kicker && <span className="brutal-sticker" style={{ display: 'inline-flex' }}>{kicker}</span>}
          {page && <span className="ink-page-chip">{page}</span>}
        </div>
        {meta && (
          <div className="flex items-center gap-2" style={{ flexShrink: 0 }}>{meta}</div>
        )}
      </div>

      <Tag
        id={titleId}
        className="brutal-section-title"
        style={{ marginBottom: intro || sub ? '0.875rem' : 0 }}
      >
        {title}
      </Tag>

      {intro && (
        <div className="flex items-center gap-2">
          <InkArrow variant="bend" width={44} height={22} strokeWidth={2.5} style={{ color: 'var(--ink-faint)', flexShrink: 0 }} />
          <span className="font-ink" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', color: 'var(--ink-faint)', transform: 'rotate(-2deg)', display: 'inline-block' }}>
            {intro}
          </span>
        </div>
      )}
      {!intro && sub && (
        <p className="font-mono" style={{ fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-faint)' }}>
          {sub}
        </p>
      )}
    </header>
  );
};

export default ChapterHeader;
