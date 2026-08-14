import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { InkArrow, InkStar } from './Ink';
import { TECH_TO_PROJECTS, MOST_USED_TECH } from '../portfolioData';
import ScrollReveal from './ScrollReveal';
import ChapterHeader from './ChapterHeader';

/* ═══════════════════════════════════════════════════════════
   TECH DIAGRAM — "how the pipe runs".
   A hand-drawn pipeline: FRONTEND → BACKEND → DATABASE →
   REALTIME → AI/ML → SYSTEMS. Every tech label is backed by
   real synced data — hover a label and the "USED IN" panel
   lists the actual repos it shipped in. Nothing fabricated.
   ═══════════════════════════════════════════════════════════ */

const STAGES: { label: string; code: string; tech: string[] }[] = [
  { label: 'Frontend', code: '01', tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { label: 'Backend', code: '02', tech: ['Node.js', 'Express', 'Flask', 'FastAPI'] },
  { label: 'Database', code: '03', tech: ['PostgreSQL', 'MongoDB', 'Supabase'] },
  { label: 'Realtime', code: '04', tech: ['Socket.IO', 'WebSockets', 'WebRTC'] },
  { label: 'AI / ML', code: '05', tech: ['Python', 'PyTorch', 'OpenCV', 'MediaPipe'] },
  { label: 'Systems', code: '06', tech: ['Rust', 'WebAssembly', 'Socket.IO'] },
];

const hasProjects = (t: string) => (TECH_TO_PROJECTS[t]?.length ?? 0) > 0;

const TechDiagram: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const usedIn = hovered ? (TECH_TO_PROJECTS[hovered] ?? []) : [];

  return (
    <section style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
      <ScrollReveal variant="fadeUp">
        <ChapterHeader
          kicker="The Pipeline"
          page="FIG. 01 — HOW THE PIPE RUNS"
          title={<>Ink in, <span className="ink-underline">working things</span> out</>}
          sub="hover any label — it lists the real repos it shipped in"
        />
      </ScrollReveal>

      <ScrollReveal variant="fadeUp">
        <div className="brutal-card relative" style={{ padding: 'clamp(1rem, 3vw, 1.5rem)', overflow: 'visible' }}>
          <span aria-hidden="true" style={{ position: 'absolute', top: '0.875rem', right: '1rem', color: 'var(--ink-faint)', opacity: 0.35 }}>
            <InkStar width={16} height={16} />
          </span>

          <div className="hidden xl:flex items-stretch justify-between gap-0" style={{ minHeight: '11rem' }}>
            {STAGES.map((stage, i) => (
              <React.Fragment key={stage.code}>
                <div className="flex-1 flex flex-col items-center text-center" style={{ padding: '0 0.375rem' }}>
                  <div className="font-mono" style={{ fontSize: '0.5rem', fontWeight: 700, color: 'var(--ink-faint)', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>
                    NODE {stage.code}
                  </div>
                  <div className="brutal-card-static" style={{ width: '100%', maxWidth: '10.5rem', padding: '0.625rem 0.5rem' }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.8125rem', color: 'var(--black)', marginBottom: '0.375rem' }}>
                      {stage.label}
                    </div>
                    <div className="flex flex-wrap justify-center gap-1">
                      {stage.tech.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onMouseEnter={() => setHovered(t)}
                          onMouseLeave={() => setHovered((h) => (h === t ? null : h))}
                          onFocus={() => setHovered(t)}
                          onBlur={() => setHovered((h) => (h === t ? null : h))}
                          className="brutal-tag"
                          style={{ fontSize: '0.5rem', cursor: hasProjects(t) ? 'help' : 'default', opacity: hasProjects(t) ? 1 : 0.55 }}
                        >
                          {t}{hasProjects(t) ? ' ·' : ''}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                {i < STAGES.length - 1 && (
                  <div className="flex items-center self-start" style={{ paddingTop: '2.75rem' }}>
                    <InkArrow variant="straight" width={56} height={24} strokeWidth={2.5} style={{ color: 'var(--ink-faint)' }} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="xl:hidden flex flex-col items-center gap-2">
            {STAGES.map((stage, i) => (
              <React.Fragment key={stage.code}>
                <div className="w-full" style={{ maxWidth: '22rem' }}>
                  <div className="font-mono" style={{ fontSize: '0.5rem', fontWeight: 700, color: 'var(--ink-faint)', letterSpacing: '0.1em', marginBottom: '0.25rem', textAlign: 'center' }}>
                    NODE {stage.code}
                  </div>
                  <div className="brutal-card-static" style={{ padding: '0.625rem' }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.8125rem', color: 'var(--black)', marginBottom: '0.375rem', textAlign: 'center' }}>
                      {stage.label}
                    </div>
                    <div className="flex flex-wrap justify-center gap-1">
                      {stage.tech.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onMouseEnter={() => setHovered(t)}
                          onMouseLeave={() => setHovered((h) => (h === t ? null : h))}
                          onFocus={() => setHovered(t)}
                          onBlur={() => setHovered((h) => (h === t ? null : h))}
                          className="brutal-tag"
                          style={{ fontSize: '0.5rem', cursor: hasProjects(t) ? 'help' : 'default', opacity: hasProjects(t) ? 1 : 0.55 }}
                        >
                          {t}{hasProjects(t) ? ' ·' : ''}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                {i < STAGES.length - 1 && (
                  <InkArrow variant="straight" width={40} height={20} strokeWidth={2.5} style={{ color: 'var(--ink-faint)', transform: 'rotate(90deg)' }} />
                )}
              </React.Fragment>
            ))}
          </div>

          <motion.div
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
            transition={{ duration: 0.18 }}
            className="sheet-lined"
            style={{
              marginTop: '1rem', border: 'var(--bw) solid var(--border)', boxShadow: 'var(--sh-sm)', background: 'var(--bg-card)',
              padding: '0.625rem 0.875rem', minHeight: '3.25rem', pointerEvents: hovered ? 'auto' : 'none',
            }}
            aria-live="polite"
          >
            {hovered ? (
              <>
                <div className="flex items-center gap-2" style={{ marginBottom: '0.25rem' }}>
                  <span className="font-mono" style={{ fontSize: '0.5625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--black)' }}>
                    {hovered} · USED IN
                  </span>
                  <InkArrow variant="bend" width={28} height={14} strokeWidth={2.5} style={{ color: 'var(--ink-faint)' }} />
                </div>
                {usedIn.length > 0 ? (
                  <div className="flex flex-wrap gap-1.5">
                    {usedIn.slice(0, 6).map((title) => (
                      <span key={title} className="brutal-tag" style={{ fontSize: '0.5rem', background: 'var(--black)', color: 'var(--bg)' }}>{title}</span>
                    ))}
                    {usedIn.length > 6 && (
                      <span className="font-mono" style={{ fontSize: '0.5rem', color: 'var(--ink-faint)', fontWeight: 700, alignSelf: 'center' }}>
                        +{usedIn.length - 6} more
                      </span>
                    )}
                  </div>
                ) : (
                  <p className="font-mono" style={{ fontSize: '0.5625rem', color: 'var(--ink-faint)' }}>no synced repo yet — it's in the toolbox, waiting</p>
                )}
              </>
            ) : (
              <p className="font-mono" style={{ fontSize: '0.5625rem', color: 'var(--ink-faint)' }}>
                hover / focus a label above · most-used stack: {MOST_USED_TECH.map((t) => t.name).slice(0, 4).join(' · ')}
              </p>
            )}
          </motion.div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default TechDiagram;
