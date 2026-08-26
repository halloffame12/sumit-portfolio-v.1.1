import React from 'react';
import { motion } from 'framer-motion';
import { InkArrow, InkStroke } from './Ink';
import { SPRING_SNAPPY } from '../types';

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
          {kicker && (
            <motion.span
              className="brutal-sticker"
              style={{ display: 'inline-flex' }}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ ...SPRING_SNAPPY, delay: 0 }}
            >
              {kicker}
            </motion.span>
          )}
          {page && (
            <motion.span
              className="ink-page-chip"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...SPRING_SNAPPY, delay: 0.06 }}
            >
              {page}
            </motion.span>
          )}
        </div>
        {meta && (
          <div className="flex items-center gap-2" style={{ flexShrink: 0 }}>{meta}</div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...SPRING_SNAPPY, delay: 0.1 }}
      >
        <Tag
          id={titleId}
          className="brutal-section-title"
          style={{ marginBottom: intro || sub ? '0.875rem' : 0 }}
        >
          {title}
        </Tag>
      </motion.div>

      {intro && (
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ ...SPRING_SNAPPY, delay: 0.18 }}
        >
          <InkArrow variant="bend" width={44} height={22} strokeWidth={2.5} style={{ color: 'var(--ink-faint)', flexShrink: 0 }} />
          <span className="font-ink" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', color: 'var(--ink-faint)', transform: 'rotate(-2deg)', display: 'inline-block' }}>
            {intro}
          </span>
        </motion.div>
      )}
      {!intro && sub && (
        <motion.p
          className="font-mono"
          style={{ fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-faint)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
        >
          {sub}
        </motion.p>
      )}

      {/* Ink rule divider below header */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        style={{ transformOrigin: 'left', marginTop: '0.5rem' }}
        aria-hidden="true"
      >
        <InkStroke kind="scratch" width="100%" height={6} strokeWidth={1.5} />
      </motion.div>
    </header>
  );
};

export default ChapterHeader;
