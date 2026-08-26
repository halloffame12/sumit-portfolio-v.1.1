# Portfolio Redesign Prompt — Supreme-Level Execution

## Design Read

Reading this as: **developer portfolio for hiring managers, tech recruiters, and open-source collaborators, with an ink neo-brutalist / editorial casebook language, leaning toward custom CSS ink design system + Framer Motion choreography + asymmetric hand-drawn layouts.**

This is NOT a SaaS landing page, NOT a generic portfolio template, NOT an agency site. It is a hand-drawn casebook — 9 chapters, real GitHub data, every project presented as a case file. The entire visual identity is "ink on paper, but make it Awwwards."

---

## Dial Configuration

```
DESIGN_VARIANCE:    9   (asymmetric, editorial, hand-drawn)
MOTION_INTENSITY:   8   (rich choreography, scroll-driven, magnetic)
VISUAL_DENSITY:     3   (airy, generous whitespace, editorial breath)
```

Rationale: The existing site already has high variance (ink wobble borders, rotated elements, parallax doodles). Push it to 9. The motion is currently framer-motion basics — elevate to 8 with scroll-triggered reveals, cursor-reactive elements, and page transitions. Density stays at 3 because editorial portfolios breathe.

---

## Non-Negotiable Constraints

1. **Keep the ink neo-brutalist monochrome system.** Paper `#F7F3EC`, card `#FFFFFF`, ink `#0A0A0A`. Do not introduce color. Do not break the monochrome discipline.
2. **Keep the chapter-based narrative structure.** 9 chapters, "the cover," "the casebook," "the experiments," etc. This is the site's soul.
3. **Keep all existing data flows.** `portfolioData.ts`, `data/config.ts`, `generated/github-projects.json` — do not change the data layer.
4. **Keep React 19 + Vite 6 + Tailwind v4 + Framer Motion stack.** Do not add new frameworks.
5. **Keep `prefers-reduced-motion` fully supported.** Every animation must collapse gracefully.
6. **Keep the `@` alias and existing routing.** Do not change page slugs or route structure.
7. **No new dependencies unless absolutely justified.** Prefer native CSS + existing Framer Motion. If you need GSAP, justify it and isolate it.

---

## What "Supreme Level" Means Here

This is not "add more animations." This is a complete elevation of craft. Every pixel, every frame, every transition must feel intentional. The gap between "good portfolio" and "portfolio that wins awards" is in the details:

### A. Hero — The First 3 Seconds

The hero is the single most important section. It must stop scroll, communicate identity instantly, and feel like opening a physical casebook.

**Current state:** Character-by-character name reveal, parallax ink doodles, static photo with tape strips. Good foundation, but predictable.

**Supreme execution:**
- **Text scramble decode on load** — the name "SUMIT CHAUHAN" should not just animate up from below. It should decode from random glyphs into the final characters, like ink forming on paper. Use Framer Motion's `useMotionValue` to drive per-character opacity/rotation from chaos to order over 600ms with staggered delay.
- **Ink stroke draw-in** — the underline beneath "CHAUHAN" should not just scale in. It should draw itself using SVG `stroke-dashoffset` animation, timed to complete 200ms after the last character lands.
- **Photo should breathe** — the portrait in ink-bracket frame should have a subtle parallax tilt on mouse move (not just scroll). Use `useMotionValue` + `useTransform` to map mouse position to `rotateX` and `rotateY` (max ±3deg). On mobile, use device gyroscope via `DeviceOrientationEvent` or fall back to scroll-based parallax.
- **Magnetic CTA buttons** — already exists via `MagneticButton`, but increase the pull radius and add a subtle ink-fill animation on hover: the button background should fill from the cursor's approach direction, not just shift position.
- **Ink doodles should react to cursor** — the floating `InkCircle`, `InkScribble`, `InkStar` elements should have a subtle attraction/repulsion from the cursor position. Not distracting, just alive. Use `useMotionValue` for mouse tracking, spring physics for the response.
- **Scroll-to-reveal transition** — as the user scrolls past the hero, it should not just scroll away. The hero content should scale down slightly (0.97), fade opacity, and the ink doodles should accelerate their parallax, creating a "closing the cover" sensation. Use `useScroll` + `useTransform` mapped to the first 400px of scroll.

**Hero copy discipline (from taste skill Section 4.7):**
- Headline: "SUMIT CHAUHAN" — 2 words, max 2 lines. Perfect.
- Subtext: current tagline is fine but must be ≤ 20 words. Audit it.
- CTAs: 2 buttons ("Open the work" + "Skip to the last chapter"). Keep exactly 2.
- Hero must fit in initial viewport — no scroll to find CTA.
- Top padding max `pt-24` equivalent at desktop.

### B. Page Transitions — The Ink Wipe

The existing `PageWipe` component handles route transitions. Elevate it:

- **Ink bleed transition** — when navigating between pages, the exit should feel like ink bleeding across paper. A monochrome wipe that originates from the click position (not a fixed left-to-right sweep). Use Framer Motion's `layoutId` on the clicked element to create a shared-element transition where the card/button expands into a full-page ink wash, then contracts to reveal the new page.
- **Loading skeleton** — the current `PageLoader` is a spinning border. Replace with an ink-themed skeleton: horizontal lines drawing themselves across the page (like ruled paper appearing), with a blinking cursor. Keep it under 400ms.
- **Scroll position restoration** — already handled by `ScrollToTop`, but add smooth scroll restoration for back-button navigation using `sessionStorage`.

### C. Scroll-Reveal Choreography — Every Section is a Chapter Turn

The current `ScrollReveal` is a simple fade-up. Supreme level means every section entrance is a composed moment:

- **Staggered ink reveals** — elements within a section should not all fade up together. They should appear in reading order: headline first (with a draw-in or decode effect), then body text (fade up from below), then visual elements (scale in from 0.95 with a slight rotation). Use `staggerChildren` with 80-120ms delay between elements.
- **Chapter numbers should draw** — the large watermark chapter numbers (`.brutal-section-number`) should use SVG path animation (`stroke-dashoffset`) to draw themselves as the section enters viewport. Not a fade, a draw.
- **Ink rule animations** — the `.ink-rule` dividers between sections should draw their stroke as they enter. Use `IntersectionObserver` to trigger `stroke-dashoffset` animation when the rule enters the viewport.
- **Parallax depth layers** — within each section, create 3 depth layers: background (slowest scroll), midground (normal), foreground (fastest). Use `useScroll` with different `target` offsets for elements at different visual depths. This creates a physical paper-stacking sensation.

### D. Project Cards — The Case Files

The `ProjectChapter` and `ProjectGridCard` components are the heart of the portfolio. They must feel like real case files:

- **Hover state elevation** — when hovering a project card, it should not just shift shadow. It should: (1) lift with a spring physics translate, (2) the ink-bracket border should animate its stroke to "tighten" around the card, (3) a subtle paper-crinkle noise texture should appear on the card surface (CSS `background-image` with SVG noise at 3% opacity), (4) the status badge should pulse once.
- **Click-to-expand transition** — clicking a project card should use Framer Motion's `layoutId` to create a smooth expansion from card to modal (`ProjectModal`). The card's image should morph into the modal's hero image. The card's title should animate to the modal's title position. No jarring pop-in.
- **Tech stack tags** — the `.brutal-tag` elements should have a subtle ink-stamp animation on hover: scale from 1.05 to 1.0 with a slight rotation, like a rubber stamp pressing down.

### E. Navigation — The Book Spine

The `Navbar` is the book's spine. It must feel physical:

- **Scroll-aware opacity** — the navbar should start transparent over the hero, then gain a paper background (`var(--bg)`) with a subtle border-bottom as the user scrolls past the hero. Use `useScroll` with a threshold of 100px.
- **Active page indicator** — the current page link should have an animated ink underline that slides between positions when the route changes. Use `layoutId="nav-underline"` on the active link indicator.
- **Mobile menu** — the hamburger menu should open with an ink-bleed animation (a dark overlay that expands from the menu icon), not a simple slide-in. The menu items should stagger-reveal with 60ms delay.

### F. Micro-Interactions — The Ink Details

These are the touches that separate "built" from "crafted":

- **Cursor trail** — a subtle ink-dot trail that follows the cursor with spring delay. 3-4 dots, decreasing opacity and size, with 200ms spring delay between each. Only on desktop, disabled under `prefers-reduced-motion`.
- **Link hover ink-fill** — inline links in body text should have an animated underline that draws from left to right on hover (existing `.ink-underline` but smoother). Use CSS `background-size` transition on the SVG underline, not `opacity`.
- **Button press ink-squish** — on `:active`, buttons should scale to 0.97 with a slight rotation (±0.5deg) and the shadow should compress, simulating ink being pressed.
- **Scroll progress indicator** — a thin ink line at the top of the viewport that draws from left to right as the user scrolls through the page. Use `useScroll` + `useTransform` to map scroll progress to a scaleX transform on a 2px-high bar.
- **Number counters** — the `StatCounter` component should count up from 0 when it enters the viewport, not on page load. Use `IntersectionObserver` to trigger the count.
- **Ink splatter on CTA success** — when the contact form submits successfully, a brief ink-splatter SVG animation should play at the button position (300ms, then fade). This is the "delight" moment.

### G. Typography Hierarchy — Supreme Refinement

The current type system is good but can be sharper:

- **Display type (Archivo Black)** — should be used ONLY for the hero name and chapter titles. Nothing else gets display weight. This preserves its impact.
- **Heading type (Space Grotesk)** — section headlines, project titles. Use `letter-spacing: -0.04em` at large sizes for tighter, more editorial feel. At `text-3xl` and above, increase tracking compression.
- **Body type (Inter)** — keep for body copy. But increase `line-height` to 1.75 for better readability on the paper background. Add `font-variant-numeric: tabular-nums` for any numerical content.
- **Mono type (Space Mono)** — labels, metadata, chapter footers. Keep at 0.625rem base with 0.12em tracking. This is the "technical annotation" layer.
- **Ink type (Caveat)** — handwritten annotations. Use sparingly: 1-2 per section maximum. Each should feel like a margin note, not a label. Rotate -2deg to -3deg. Never use for more than 8 words.
- **Italic descender clearance** — any italic text with descenders (y, g, j, p, q) must have `leading-[1.1]` minimum and `pb-1` reserve. Audit every italic instance.

### H. Performance — Invisible but Critical

Supreme portfolios load fast. No excuses:

- **Image optimization** — the hero portrait (`/sumit.jpg`) must be served in WebP with `srcset` for different viewports. Add `<link rel="preload" as="image">` in `index.html` for the hero image.
- **Font loading** — the 5 Google Fonts are loaded via `<link>`. Add `font-display: swap` to prevent invisible text. Consider self-hosting for better control.
- **Code splitting** — already using `React.lazy()` for routes. Verify that component-level code splitting is also happening for heavy components (ProjectModal, GitHubActivity).
- **Animation budget** — no more than 6 animated elements visible simultaneously. If a section has 8 scroll-reveal elements, stagger them so only 3-4 are animating at any moment.
- **CLS prevention** — all images must have explicit `width` and `height` attributes. The hero photo already has this. Verify all project images do too.

### I. Accessibility — Non-Negotiable

- **Focus rings** — the existing `focus-visible` outline (3px solid black, 2px offset) is good. Verify it never gets hidden by `outline: none` without replacement.
- **Skip link** — exists in `index.html`. Verify it works and is visually hidden until focused.
- **Alt text** — every project image must have descriptive alt text. Not "project screenshot" but "CTX CLI terminal showing code graph indexing progress".
- **Keyboard navigation** — all interactive elements must be reachable via Tab. The project modal must trap focus when open and return focus to the triggering element when closed.
- **Reduced motion** — the existing `@media (prefers-reduced-motion: reduce)` block in `index.css` is excellent. Verify every new animation added has a corresponding reduced-motion path.
- **Color contrast** — monochrome system makes this easier, but verify: ink text on paper bg = 15.4:1 (excellent), ink-faint on paper bg must be ≥ 4.5:1.

---

## Anti-Patterns to Avoid (from taste skill Section 9)

- NO em-dashes (`—`) anywhere. Use hyphens or commas.
- NO three equal-width feature cards in a row.
- NO generic section numbering as eyebrows ("01 / INDEX").
- NO scroll cues ("Scroll to explore").
- NO decorative status dots on every element.
- NO version labels in hero ("V2.0", "BETA").
- NO locale/time strips ("Delhi, 14:23").
- NO pills/labels overlaid on images.
- NO div-based fake screenshots.
- NO AI-purple gradients or neon glows.
- NO `border-t` + `border-b` on every row of lists.

---

## Section-by-Section Execution Order

1. **Hero (Chapter 01)** — text scramble, ink stroke draw, parallax photo tilt, cursor-reactive doodles, scroll-close transition
2. **Page transitions** — ink bleed wipe, skeleton loader, shared-element morphing
3. **Navigation** — scroll-aware bg, active link animation, mobile ink-bleed menu
4. **Project cards** — hover elevation, layoutId expand, tech tag stamp, ink-bracket tighten
5. **Scroll reveals** — staggered choreography, chapter number draw, ink rule animation
6. **Micro-interactions** — cursor trail, link ink-fill, button squish, scroll progress bar
7. **Currently Building section** — elevated card with live pulse animation
8. **GitHub Activity section** — contribution graph should animate bars on scroll-reveal
9. **Bottom CTA** — ink splatter on submit, atmospheric ink doodles
10. **Typography audit** — tighten tracking, verify hierarchy, italic descender clearance
11. **Performance** — image optimization, font loading, animation budget
12. **Accessibility pass** — focus rings, keyboard nav, alt text, contrast verification

---

## Pre-Flight Checklist (adapted from taste skill Section 14)

Before declaring done, verify:

- [ ] ZERO em-dashes anywhere on the page
- [ ] Hero fits viewport (headline ≤ 2 lines, subtext ≤ 20 words, CTA visible)
- [ ] Hero top padding ≤ `pt-24` equivalent
- [ ] Max 4 text elements in hero
- [ ] One accent color (monochrome — black is the accent)
- [ ] One corner-radius system (ink wobble for cards, sharp for containers, 0 for everything else)
- [ ] Every CTA text readable against background (WCAG AA)
- [ ] No duplicate CTA intent ("Open the work" + "Read all projects" = similar, differentiate)
- [ ] Motion motivated for every animation (can articulate why in one sentence)
- [ ] Reduced motion path for every animation
- [ ] `prefers-reduced-motion` collapses all to 0.01ms
- [ ] Navigation on one line at desktop, height ≤ 80px
- [ ] Section layout families varied (at least 4 different layouts across 8+ sections)
- [ ] Real images used (hero photo exists, project images from GitHub/picsum)
- [ ] No pills/labels overlaid on images
- [ ] No scroll cues
- [ ] No decorative dots
- [ ] No AI tells (purple gradients, glassmorphism, three equal cards)
- [ ] Core Web Vitals plausible (LCP < 2.5s, INP < 200ms, CLS < 0.1)
- [ ] All new code uses existing libraries (Framer Motion, Tailwind v4, CSS)
- [ ] No new dependencies added without justification

---

## Success Criteria

The portfolio is "supreme level" when:

1. **A recruiter scrolling Twitter stops on the hero.** The text scramble + ink draw + parallax photo must create a visual moment that breaks the scroll pattern.
2. **Every project card feels like opening a real case file.** The layoutId expansion from card to modal must feel physical, not digital.
3. **The ink system feels cohesive, not bolted on.** Every component must use the same CSS custom properties, the same border weights, the same shadow tokens. No component should feel like it belongs to a different design system.
4. **Motion serves the narrative.** Every animation should make the "casebook" metaphor stronger — ink drawing, pages turning, chapters revealing. Motion for motion's sake is banned.
5. **It performs.** Under 2.5s LCP on 3G, zero layout shifts, smooth 60fps animations. A beautiful site that stutters is not supreme.
6. **It's accessible.** Full keyboard navigation, screen reader compatible, contrast compliant. Beauty that excludes is not supreme.
