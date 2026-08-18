# Sumit Chauhan — Portfolio

A monochrome "ink neo-brutalist" portfolio built as a hand-drawn casebook: 9 chapters, real GitHub data, and every project presented as a case file. Design by hand, data synced from GitHub, no staging.

## Stack

- **Frontend:** React 19 + TypeScript (ES modules)
- **Styling:** Tailwind CSS v4 with a custom ink design system (paper/card/ink tokens)
- **Motion:** Framer Motion for page wipes, scroll reveals, and micro-interactions
- **Routing:** react-router-dom (BrowserRouter) with lazy-loaded routes
- **Icons:** lucide-react
- **SEO:** react-helmet-async per-route metadata + static meta in `index.html`
- **Forms:** @formspree/react contact form
- **Build:** Vite 6 · **Deploy:** Cloudflare Pages (with `netlify.toml` / `vercel.json` fallbacks)

## Data sync

Project and contribution data is generated from the GitHub API:

```bash
npm run sync:github    # pulls repos, stars, contribution weeks, and activity → generated/github-projects.json
```

The sync script maps real repos to curated case files via `data/config.ts` overrides. Everything rendered on the site is either in `data/` or synced from GitHub — nothing is fabricated.

## Development

```bash
npm install
npm run dev       # local dev server on :3000
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Design system

- **Colors:** paper `#F7F3EC`, card `#FFFFFF`, ink `#0A0A0A` — monochrome by discipline
- **Typefaces:** Archivo Black (display), Space Grotesk (headings), Inter (body), Space Mono (technical labels), Caveat (handwritten annotations)
- **Interactions:** sketchy borders, hard offset shadows, magnetic buttons, focus-visible outlines, and full `prefers-reduced-motion` support

## Contact

- **Email:** sumitchauhan10062004@gmail.com
- **GitHub:** [@halloffame12](https://github.com/halloffame12)
- **LinkedIn:** [sumit-chauhan](https://www.linkedin.com/in/sumit-chauhan-a4ba98325/)
