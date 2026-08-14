import React from 'react';
import { TIMELINE } from '../data/experience';
import ScrollReveal from './ScrollReveal';
import InkDraw from './InkDraw';
import ChapterHeader from './ChapterHeader';
import { InkCircle, InkStar } from './Ink';

const TAG_STYLE: Record<string, { className: string }> = {
  origin: { className: 'brutal-badge' },
  build: { className: 'brutal-badge-primary' },
  research: { className: 'brutal-badge-yellow' },
  milestone: { className: 'brutal-badge-dark' },
};

const Timeline: React.FC = () => {
  const items = TIMELINE ?? [];
  const nodes: { x: number; y: number; bend: number }[] = [];
  const N = items.length;
  items.forEach((_, i) => {
    const t = N === 1 ? 0.5 : i / (N - 1);
    const x = 50 + Math.sin(t * Math.PI * 2.4) * 42;
    const y = 8 + t * 84;
    const bend = (Math.cos(t * Math.PI * 2.4) > 0 ? 1 : -1) * 16;
    nodes.push({ x: Math.round(x), y: Math.round(y), bend: Math.round(bend) });
  });

  /* hand-drawn wavy spine path through all nodes */
  let d = `M ${nodes[0].x} 2`;
  for (let i = 0; i < nodes.length - 1; i++) {
    const a = nodes[i];
    const b = nodes[i + 1];
    const mx = (a.x + b.x) / 2 + (b.bend || 0) * 0.4;
    d += ` Q ${mx} ${a.y + (b.y - a.y) * 0.5}, ${b.x} ${b.y}`;
  }
  d += ` L ${nodes[nodes.length - 1].x} 98`;

  return (
    <section style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }} aria-labelledby="journey-h">
      <ScrollReveal variant="fadeUp">
        <ChapterHeader
          kicker="Chapter 07 — Journey"
          page="PAGE 07 / 09 · THE PATH"
          titleId="journey-h"
          title={<>One line from <span className="ink-underline">start to now</span></>}
          intro="scroll — the line draws itself under you →"
        />
      </ScrollReveal>

      <div className="relative">
        {/* large drawn ink path — draws itself in as you scroll */}
        <InkDraw
          className="hidden sm:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2"
          style={{ width: 'clamp(160px, 26vw, 300px)', height: '100%', color: 'var(--border)', opacity: 0.16 }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          strokeWidth={1.6}
          drawDuration={700}
        >
          <path d={d} />
        </InkDraw>

        <div className="flex flex-col gap-5">
          {items.map((item, i) => {
            const tag = TAG_STYLE[item.tag || 'build'] || TAG_STYLE.build;
            const isMilestone = item.tag === 'milestone';
            const left = i % 2 === 0; /* alternate sides on desktop */
            return (
              <ScrollReveal key={i} variant="fadeUp" delay={i * 0.05}>
                <div className="relative sm:grid sm:grid-cols-2 sm:gap-0" style={{ alignItems: 'center' }}>
                  {/* node marker on the spine */}
                  <div aria-hidden="true" style={{
                    position: 'absolute', left: '1.25rem', top: '50%', transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                  }} className="sm:left-1/2">
                    <div style={{
                      width: isMilestone ? '30px' : '22px', height: isMilestone ? '30px' : '22px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'var(--bg-card)', borderRadius: '50%',
                      border: '2px solid var(--border)', boxShadow: '2px 2px 0px var(--border)',
                    }}>
                      {isMilestone ? <InkStar width={16} height={16} /> : (
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--black)' }} />
                      )}
                    </div>
                  </div>

                  <div className={left ? 'sm:pr-10 sm:col-start-1 sm:text-right' : 'sm:pl-10 sm:col-start-2'}
                    style={{ paddingLeft: 'clamp(3rem, 8vw, 4.5rem)', paddingRight: '0.25rem' }}>
                    <div className="brutal-card inline-block text-left" style={{ padding: 'clamp(0.875rem, 2vw, 1.25rem)', transform: isMilestone ? 'rotate(1.2deg)' : i % 2 === 1 ? 'rotate(0.4deg)' : 'rotate(-0.3deg)' }}>
                      <div className="flex flex-wrap items-center gap-2" style={{ marginBottom: '0.375rem' }}>
                        <span className={`${tag.className} font-mono`} style={{ fontSize: '0.5625rem' }}>{item.period}</span>
                        <span className="font-ink" style={{ fontSize: '1rem', color: 'var(--ink-faint)' }}>{item.org}</span>
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.875rem', color: 'var(--black)', marginBottom: '0.3rem' }}>{item.title}</h3>
                      <p style={{ fontSize: '0.75rem', color: 'var(--ink-soft)', lineHeight: 1.65, maxWidth: '34ch' }}>{item.desc}</p>
                      {Array.isArray(item.tech) && item.tech.length > 0 && (
                        <div className="flex flex-wrap gap-1" style={{ marginTop: '0.5rem', justifyContent: left ? 'flex-end' : 'flex-start' }}>
                          {item.tech.map((t) => <span key={t} className="brutal-tag" style={{ fontSize: '0.5rem' }}>{t}</span>)}
                        </div>
                      )}
                    </div>

                    {isMilestone && (
                      <span aria-hidden="true" className="hidden sm:inline-block" style={{ color: 'var(--ink-faint)', opacity: 0.5, transform: 'rotate(10deg)', marginTop: '0.5rem' }}>
                        <InkCircle width={44} height={44} strokeWidth={2.5} />
                      </span>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;