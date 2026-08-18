import type { Project } from '../types';

/* ═══════════════════════════════════════════════════════════
   CURATED CASE FILES — the four chapters in the front of the
   book. Every claim is grounded in the real repositories and
   READMEs (verified via the GitHub API) — nothing fabricated.
   Order = rank of importance, newest and most ambitious first.
   ═══════════════════════════════════════════════════════════ */

export const CURATED_PROJECTS: Project[] = [
  {
    id: 'project-ctx',
    slug: 'ctx',
    title: 'CTX',
    category: 'Developer Tooling',
    imageUrl: '',
    description:
      'A local codebase intelligence engine for AI coding agents. Indexes a repo into files, symbols and dependency edges, then serves compact, relevance-ranked context to Claude, Cursor, Copilot and opencode over MCP.',
    problem:
      'AI coding agents get codebases wrong in predictable ways: they hallucinate file paths, dump whole directories into context, and miss ripple effects when a symbol changes — burning tokens and confidence.',
    solution:
      'ctx builds a SQLite code graph (.ctx/index.db) with tree-sitter, answers searches, dependencies, impact and diffs, and exposes eleven tools over MCP over stdio. Local, fast, private, offline — nothing leaves the machine.',
    value: 'Agents stop guessing file paths and flooding context — they get the handful of files that matter, ranked and explained.',
    howItWorks:
      'ctx init walks the repository and builds a queryable code graph — files, symbols, signatures and import edges — updated incrementally so only changed files re-parse. context and search rank files with five explainable signals (keyword, hub, recency, path, git); impact analysis runs a cycle-safe breadth-first search over the graph and buckets fallout into direct, indirect, tests and unknown. It ships as one native Rust binary over npm, cargo, Homebrew, Scoop and Winget, verified against SHA-256 checksums.',
    challenges:
      'Honesty in a graph: relative imports, Python dotted modules, Rust use paths and Go imports either resolve to a real file or are marked external/unresolved — ctx never fabricates an internal edge it cannot prove. And speed: the incremental index keeps re-indexing to a handful of changed files.',
    learned:
      'Tooling is distribution. The project did not become real when the engine worked — it became real when it installed anywhere (npm, cargo, brew, scoop, winget) behind one command. Open source is a shipping problem as much as an engineering one.',
    role: 'Creator & Maintainer — Open Source',
    techStack: ['Rust', 'TypeScript', 'tree-sitter', 'SQLite', 'MCP'],
    repoUrl: 'https://github.com/halloffame12/CTX',
    source: 'curated',
    featured: true,
    priority: 100,
    status: 'active',
    pushedAt: '2026-08-15T01:23:13Z',
    demoNote: 'CLI tool — install with npm i -g ctxai-cli · scoop install ctx · brew install ctx · cargo install ctxai-cli',
  },
  {
    id: 'project-versz',
    slug: 'versz-app',
    title: 'Versz',
    category: 'Social Platform',
    imageUrl: '',
    description:
      'A production social debate platform built end-to-end — React web, Flutter mobile, and a Firebase backend with structured debates, community groups, and a reputation engine.',
    problem:
      'Online discourse rewards outrage, not argument. Feeds are noise: no structure, no sides, no accountability — just engagement loops.',
    solution:
      'Versz structures every debate: users create topics, take a side, and argue in threads while a reputation/ranking engine scores substance instead of likes. One product, two clients, one data model.',
    value: 'Arguments with structure and sides with scores — a debate platform where reputation is earned by substance, not noise.',
    howItWorks:
      'A React web frontend and a Flutter app for Android/iOS both talk to a Firebase-backed backend. Users create debates, pick positions, join community groups, and climb leaderboards through a reputation engine that ranks contributions rather than reactions. REST APIs, JWT auth flows, and the data models are first-party — I own the schema, the deploy pipeline, and production uptime.',
    challenges:
      'Two clients, one truth. Every schema and auth change ships to the web app and the mobile app together, then to production — the deployment pipeline is the product.',
    learned:
      'A product is not a feature list. Making a social platform work means designing the reputation loop, the data model, and the auth flow before a single screen — and shipping it solo end-to-end is the closest thing to a startup education.',
    role: 'Founder & Developer',
    techStack: ['React', 'Flutter', 'Dart', 'Firebase', 'Node.js'],
    repoUrl: 'https://github.com/halloffame12/versz-app',
    demoUrl: 'https://versz.app/',
    source: 'curated',
    featured: true,
    priority: 95,
    status: 'maintained',
    pushedAt: '2026-03-14T11:56:26Z',
  },
  {
    id: 'project-1',
    slug: 'anonchat-live',
    title: 'AnonChat Live',
    category: 'Real-time Platform',
    imageUrl: 'https://i.postimg.cc/HWyk9mDZ/anonchatweb.png',
    description:
      'Production-ready anonymous real-time chat platform. No sign-ups, instant connections, live participant tracking.',
    problem: 'Most chat platforms require sign-ups, track user data, or introduce delays.',
    solution:
      'Low-latency WebSocket architecture with Socket.IO, anonymous identities, random matchmaking, and public rooms.',
    value: 'Visitors start talking in seconds — no account, no sign-up, no personal data stored.',
    howItWorks:
      'A Node.js server keeps a live roster of connected users over Socket.IO. Joining assigns a random partner or an open room; messages route instantly over WebSockets. Identity is a generated UUID token, so sessions stay connected without any account.',
    challenges:
      'Speed without sign-ups. Solved with in-memory Socket.IO rooms and a UUID token per session — no database lookup on the hot path. The README documents JWT + HttpOnly cookies as the hardening step before real deployment.',
    learned:
      'Splitting the server and the Vite client and deploying each half separately (Render + Vercel) taught me to treat the API URL as a first-class environment variable, not an afterthought.',
    role: 'Full-Stack Developer',
    techStack: ['Node.js', 'Express', 'Socket.IO', 'React', 'Tailwind CSS'],
    repoUrl: 'https://github.com/halloffame12/AnonChatLive',
    source: 'curated',
    featured: true,
    priority: 90,
    status: 'active',
    demoUrl: 'https://anonchatweb.netlify.app/',
  },
  {
    id: 'project-4',
    slug: 'codecraftgames',
    title: 'CodeCraftGames',
    category: 'AI / Computer Vision',
    imageUrl: 'https://i.postimg.cc/k4bZhTCv/codecraft.png',
    description:
      'Gesture-controlled 3D game — move, scale, and dismantle a cube with hand movements in front of the webcam.',
    problem: 'Traditional input devices limit natural interaction with digital content.',
    solution:
      'A Python + MediaPipe + OpenCV pipeline tracks the hand in real time: finger position moves the cube, a pinch scales it, an open palm breaks it apart — rendered live in OpenGL.',
    value: 'Play a 3D game by moving your hands in front of the webcam — no controller needed.',
    howItWorks:
      'MediaPipe tracks the hand from a webcam feed: the index finger moves the cube, pinching thumb and index scales it, and an open palm dismantles it. The tracking loop and the OpenGL render loop share the same tick so the model reacts in real time.',
    challenges:
      'Balancing frame rate with gesture accuracy — the vision pipeline and the 3D renderer must keep pace with each other or the controls feel laggy.',
    learned:
      'Computer vision looks magical until you have to hit a frame budget; MediaPipe keeps the pipeline simple enough to stay interactive.',
    role: 'ML Developer',
    techStack: ['Python', 'OpenGL', 'MediaPipe', 'OpenCV'],
    repoUrl: 'https://github.com/halloffame12/3D-Model-Game-with-Hand-Gesture-Control-Using-Python-OpenGL-and-MediaPipe',
    source: 'curated',
    featured: true,
    priority: 80,
    status: 'stable',
    demoNote: 'Python app — pip install the requirements, then launch with a webcam.',
  },
];
