# AGENTS.md

## Quick Start

```bash
npm install
npm run dev          # Vite dev server on :3000
npm run build        # syncs GitHub data → Vite build → dist/
npm run preview      # preview production build
```

**No lint, typecheck, or test commands exist.** `tsc` is `noEmit` only — run `npx tsc --noEmit` to check types manually.

## Architecture

Single-page React 19 app. Not a monorepo.

| Path | Purpose |
|---|---|
| `App.tsx` | Router, lazy routes, error boundary, loading screen |
| `pages/` | 5 routes: Home, About, Projects, Contact, NotFound |
| `components/` | 22 UI components (ink-styled, framer-motion driven) |
| `data/` | Static curated data: `projects.ts`, `experience.ts`, `profile.ts`, `config.ts` |
| `generated/github-projects.json` | Auto-synced from GitHub API — **never edit by hand** |
| `portfolioData.ts` | Merges curated + GitHub data, deduplicates by slug, ranks |
| `types.ts` | All TypeScript interfaces + motion presets (SPRING_SNAPPY, etc.) |
| `index.css` | Full ink design system in CSS (789 lines) — tokens, cards, buttons, ink utilities |
| `scripts/sync-github.mjs` | Fetches repos, topics, contributions, events from GitHub API |

## Data Flow

1. `npm run sync:github` (or `npm run build`) pulls GitHub data → `generated/github-projects.json`
2. `data/config.ts` applies overrides (featured, category, priority, status) to specific repo slugs
3. `portfolioData.ts` merges curated projects from `data/projects.ts` with synced GitHub projects, deduplicates, ranks by featured → priority → score → recency
4. Components consume `ALL_PROJECTS`, `LAB_PROJECTS`, `ACTIVE_PROJECTS`, etc. from `portfolioData.ts`

**To add/modify a project:** edit `data/projects.ts` (curated) or `data/config.ts` (overrides for GitHub repos). Never edit `generated/` directly.

## Design System

Ink neo-brutalism — monochrome (`#F7F3EC` paper, `#FFFFFF` card, `#0A0A0A` ink). All styling via CSS custom properties in `index.css` and Tailwind v4 utilities.

Key CSS classes: `.brutal-card`, `.brutal-btn`, `.brutal-btn-outline`, `.brutal-input`, `.brutal-badge`, `.brutal-tag`, `.ink-wobble`, `.ink-note`, `.ink-label`, `.ink-block`, `.sheet-lined`, `.ink-rule`

Fonts: Archivo Black (display), Space Grotesk (headings), Inter (body), Space Mono (mono/labels), Caveat (handwritten ink annotations). Loaded via Google Fonts `<link>` in `index.html`.

`prefers-reduced-motion` is fully supported — all animations collapse to `0.01ms`.

## Deployment

Primary: **Cloudflare Pages** via `wrangler pages deploy dist`.
Fallbacks configured: `netlify.toml`, `vercel.json` (SPA rewrites).
`wrangler.jsonc` sets SPA `not_found_handling`.

```bash
npm run deploy       # build + wrangler pages deploy
```

## Key Gotchas

- **`@` alias** resolves to project root (configured in both `vite.config.ts` and `tsconfig.json`)
- **Cloudflare Vite plugin** only loads in dev mode — not in production build
- **`npm run build`** runs `sync:github` first, then `vite build` — GitHub API rate limits can cause build failures if unauthenticated (set `GITHUB_TOKEN` env var for higher limits)
- **Framer Motion** imported from `framer-motion` (not `motion/react` as some docs suggest) — this project uses the legacy import path
- **No `.env.example`** — `.env*` files are gitignored; check `wrangler.jsonc` and `sync-github.mjs` for required vars
- **React 19** — `use` hook and new features available; existing code uses classic patterns (lazy, Suspense, class error boundary)

## Installed Skills

Design skills are installed in `.agents/skills/`. Load via the `skill` tool when doing UI work:

- **`design-taste-frontend`** — Anti-slop frontend skill for portfolios/landing pages. Infer design brief, set variance/motion/density dials, enforce layout discipline.
- **`web-design-guidelines`** — Review UI code for Web Interface Guidelines compliance (fetches fresh rules from vercel-labs).
- **`industrial-brutalist-ui`** — Brutalist UI patterns (relevant to this project's ink neo-brutalism).
- **`DESIGN.md`** — OpenCode design analysis (Berkeley Mono system). Reference for monospace-heavy design decisions.

When modifying UI: load `design-taste-frontend` first for design direction, then `web-design-guidelines` for compliance review.

## Redesign Prompt

`PROMPT.md` contains the full supreme-level redesign brief with dial configuration, section-by-section execution plan, anti-patterns, and pre-flight checklist. Reference it when executing UI changes.
