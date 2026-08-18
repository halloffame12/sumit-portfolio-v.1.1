import React from 'react';
import type { Project } from '../types';

/* ═══════════════════════════════════════════════════════════
   PROJECT VISUAL — animated, hand-drawn SVG scenes for projects
   that have no real screenshot (ctx, Versz, and the auto-
   generated repo placeholders). Each scene is drawn in the same
   ink-brutalist language as the site, so the "missing" artwork
   becomes part of the aesthetic instead of a gap.
   Animations are CSS-only and respect prefers-reduced-motion.
   ═══════════════════════════════════════════════════════════ */

/** True when the project's artwork is an auto-generated placeholder
 *  (or missing entirely) — the cases where we draw a scene instead. */
export const needsArtwork = (p: Project): boolean =>
  !p.imageUrl || p.imageUrl.startsWith('data:image/svg');

const ART = `/* pv = project visual */
.pv-root{color:var(--black);}
.pv-root text{user-select:none;}
@keyframes pv-blink{0%,49%{opacity:1}50%,100%{opacity:0}}
@keyframes pv-dash{to{stroke-dashoffset:0}}
@keyframes pv-pulse{0%{transform:scale(.4);opacity:.9}100%{transform:scale(2.6);opacity:0}}
@keyframes pv-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}
@keyframes pv-draw{0%{opacity:0}100%{opacity:1}}
@keyframes pv-bubble{0%{opacity:0;transform:scale(.85) translateY(10px)}60%{opacity:1}100%{opacity:1;transform:scale(1) translateY(0)}}
.pv-blink{animation:pv-blink 1s steps(1) infinite}
.pv-float{animation:pv-float 2.6s ease-in-out infinite}
.pv-pulse{animation:pv-pulse 2s ease-out infinite;transform-origin:center;transform-box:fill-box}
.pv-draw{animation:pv-draw .8s ease-out both}
.pv-bubble{animation:pv-bubble .5s cubic-bezier(.34,1.56,.64,1) both}
@media (prefers-reduced-motion: reduce){
  .pv-blink,.pv-float,.pv-pulse,.pv-draw,.pv-bubble{animation:none}
}`;

const Paper = ({ title }: { title: string }) => (
  <>
    <rect x="0" y="0" width="800" height="450" fill="#FFFDF7" stroke="currentColor" strokeWidth="6" />
    <rect x="14" y="14" width="772" height="422" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 7" opacity="0.25" />
    <text x="26" y="40" fontFamily="'Space Mono','Courier New',monospace" fontSize="15" fontWeight="700" fill="currentColor" opacity="0.55">
      {title}
    </text>
  </>
);

/* ── scene: ctx — the code graph indexing itself ── */
const SceneCodeGraph: React.FC = () => (
  <svg viewBox="0 0 800 450" className="pv-root" role="img" aria-label="Animated code graph: files connected by dependency edges being indexed">
    <style>{ART}</style>
    <Paper title="CTX — CODEGRAPH / LIVE INDEX" />
    <rect x="688" y="22" width="88" height="22" fill="#FFE500" stroke="currentColor" strokeWidth="3" />

    {/* graph nodes + edges */}
    <g stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round">
      <line x1="180" y1="120" x2="360" y2="170" />
      <line x1="180" y1="120" x2="240" y2="300" />
      <line x1="360" y1="170" x2="560" y2="140" />
      <line x1="360" y1="170" x2="420" y2="320" />
      <line x1="560" y1="140" x2="600" y2="300" />
      <line x1="240" y1="300" x2="420" y2="320" />
      <line x1="600" y1="300" x2="420" y2="320" />
    </g>
    <g stroke="currentColor" strokeWidth="3" strokeDasharray="90 400" className="pv-draw">
      <line x1="180" y1="120" x2="560" y2="140" />
    </g>

    {/* nodes */}
    {[
      { x: 180, y: 120, w: 84, h: 34, t: 'main.rs' },
      { x: 360, y: 170, w: 96, h: 34, t: 'index.rs' },
      { x: 560, y: 140, w: 78, h: 34, t: 'mcp.rs' },
      { x: 240, y: 300, w: 88, h: 34, t: 'parser.rs' },
      { x: 420, y: 320, w: 92, h: 34, t: 'graph.db' },
      { x: 600, y: 300, w: 84, h: 34, t: 'cli.rs' },
    ].map((n, i) => (
      <g key={n.t}>
        <rect x={n.x - 5} y={n.y - 5} width={n.w + 10} height={n.h + 10} fill="#FFFDF7" stroke="currentColor" strokeWidth={3} />
        {i === 2 && <rect x={n.x - 5} y={n.y - 5} width={n.w + 10} height={n.h + 10} fill="#FFE500" stroke="currentColor" strokeWidth={3} />}
        <text x={n.x + n.w / 2} y={n.y + 21} fontFamily="'Space Mono',monospace" fontSize="15" fontWeight="700" textAnchor="middle" fill="currentColor">{n.t}</text>
      </g>
    ))}

    {/* pulse traveling the graph */}
    <g className="pv-float">
      <circle cx="180" cy="120" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="180" cy="120" r="6" fill="currentColor" />
    </g>
    <g className="pv-pulse" style={{ opacity: 0 }}>
      <circle cx="560" cy="140" r="22" fill="none" stroke="currentColor" strokeWidth="3" />
    </g>

    {/* terminal footer */}
    <rect x="40" y="392" width="720" height="38" fill="currentColor" />
    <text x="56" y="417" fontFamily="'Space Mono',monospace" fontSize="17" fontWeight="700" fill="#FFFDF7">
      ctx mcp · 11 tools over stdio
    </text>
    <rect className="pv-blink" x="428" y="400" width="10" height="20" fill="#FFE500" />
  </svg>
);

/* ── scene: versz — the debate ── */
const SceneDebate: React.FC = () => (
  <svg viewBox="0 0 800 450" className="pv-root" role="img" aria-label="Animated debate: two positions arguing on Versz">
    <style>{ART}</style>
    <Paper title="VERSZ — DEBATE STREAM / LIVE" />

    {/* FOR bubble */}
    <g className="pv-bubble">
      <rect x="70" y="150" width="260" height="150" fill="#FFFDF7" stroke="currentColor" strokeWidth="5" />
      <circle cx="110" cy="105" r="30" fill="none" stroke="currentColor" strokeWidth="4" />
      <line x1="98" y1="105" x2="122" y2="105" stroke="currentColor" strokeWidth="4" />
      <line x1="110" y1="93" x2="110" y2="117" stroke="currentColor" strokeWidth="4" />
      <text x="200" y="185" fontFamily="'Archivo Black','Arial Black',sans-serif" fontSize="26" fontWeight="900" textAnchor="middle" fill="currentColor">FOR</text>
      <line x1="100" y1="212" x2="300" y2="212" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="pv-draw" />
      <line x1="100" y1="236" x2="270" y2="236" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="pv-draw" style={{ opacity: 0.55 }} />
      <line x1="100" y1="260" x2="250" y2="260" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="pv-draw" style={{ opacity: 0.3 }} />
    </g>

    {/* AGAINST bubble */}
    <g className="pv-bubble" style={{ animationDelay: '0.35s' }}>
      <rect x="470" y="150" width="260" height="150" fill="currentColor" />
      <circle cx="510" cy="105" r="30" fill="none" stroke="currentColor" strokeWidth="4" />
      <path d="M500 95 l20 20 M520 95 l-20 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <text x="600" y="185" fontFamily="'Archivo Black','Arial Black',sans-serif" fontSize="26" fontWeight="900" textAnchor="middle" fill="#FFFDF7">AGAINST</text>
      <line x1="500" y1="212" x2="700" y2="212" stroke="#FFFDF7" strokeWidth="4" strokeLinecap="round" className="pv-draw" />
      <line x1="500" y1="236" x2="670" y2="236" stroke="#FFFDF7" strokeWidth="4" strokeLinecap="round" className="pv-draw" style={{ opacity: 0.55 }} />
      <line x1="500" y1="260" x2="650" y2="260" stroke="#FFFDF7" strokeWidth="4" strokeLinecap="round" className="pv-draw" style={{ opacity: 0.3 }} />
    </g>

    {/* VS badge */}
    <g className="pv-float">
      <rect x="352" y="150" width="96" height="96" fill="#FFE500" stroke="currentColor" strokeWidth="5" />
      <text x="400" y="212" fontFamily="'Archivo Black','Arial Black',sans-serif" fontSize="34" fontWeight="900" textAnchor="middle" fill="currentColor">VS</text>
    </g>

    {/* reputation score */}
    <rect x="70" y="345" width="130" height="42" fill="#FFFDF7" stroke="currentColor" strokeWidth="4" />
    <text x="82" y="372" fontFamily="'Space Mono',monospace" fontSize="15" fontWeight="700" fill="currentColor">+128 REP</text>
    <rect x="470" y="345" width="130" height="42" fill="#FFFDF7" stroke="currentColor" strokeWidth="4" />
    <text x="482" y="372" fontFamily="'Space Mono',monospace" fontSize="15" fontWeight="700" fill="currentColor">+96 REP</text>
    <line x1="240" y1="366" x2="430" y2="366" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <rect className="pv-blink" x="724" y="358" width="10" height="16" fill="currentColor" />
  </svg>
);

/* ── scene: generic — big letter tile with a drawn doodle ── */
const SceneLetter: React.FC<{ letter: string; tag?: string }> = ({ letter, tag }) => (
  <svg viewBox="0 0 800 450" className="pv-root" role="img" aria-label={tag ? `${letter} — ${tag}` : `${letter} project tile`}>
    <style>{ART}</style>
    <Paper title={tag ?? ''} />
    <rect x="620" y="350" width="150" height="18" fill="#FFE500" stroke="currentColor" strokeWidth="3" />
    <g className="pv-float" style={{ transformOrigin: 'center' }}>
      <circle cx="400" cy="210" r="110" fill="none" stroke="currentColor" strokeWidth="6" />
    </g>
    <text x="400" y="300" fontFamily="'Archivo Black','Arial Black',sans-serif" fontSize="230" fontWeight="900" textAnchor="middle" fill="currentColor">
      {letter}
    </text>
    <circle className="pv-pulse" cx="560" cy="120" r="24" fill="none" stroke="currentColor" strokeWidth="4" />
  </svg>
);

const KINDS: Record<string, 'graph' | 'debate'> = {
  ctx: 'graph',
  'versz-app': 'debate',
  versz: 'debate',
};

const firstLetter = (p: Project): string => (p.title || p.slug || '?').trim().charAt(0).toUpperCase();

const ProjectVisual: React.FC<{ project: Project; className?: string }> = ({ project: p, className = '' }) => {
  const kind = KINDS[p.slug] ?? KINDS[p.title.toLowerCase()] ?? null;
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: '#FFFDF7', color: 'var(--black)' }}>
      {kind === 'graph' && <SceneCodeGraph />}
      {kind === 'debate' && <SceneDebate />}
      {!kind && <SceneLetter letter={firstLetter(p)} tag={`REPO ${p.title.toUpperCase()}`} />}
    </div>
  );
};

export default ProjectVisual;
