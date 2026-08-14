import type { Achievement, TimelineItem } from '../types';

export const TIMELINE: TimelineItem[] = [
  {
    period: '2020',
    title: 'Started coding',
    org: 'Self-taught',
    desc: 'Picked up web development and Python during school. Got hooked on building things that run.',
    tech: ['HTML', 'Python', 'JavaScript'],
    tag: 'origin',
  },
  {
    period: '2022 — Now',
    title: 'Mobile Development',
    org: 'Freelance',
    desc: 'Shipping high-performance Flutter apps with gesture-based UX, local-first architecture, and deep native API integration across Android and iOS.',
    tech: ['Flutter', 'Dart', 'SQLite', 'Material 3'],
    tag: 'build',
  },
  {
    period: '2023 — Now',
    title: 'Full-Stack & AI Development',
    org: 'Freelance & OSS',
    desc: 'Building production apps with React, Node.js, and AI integrations. Real-time platforms with Socket.IO, computer vision with OpenCV, and cross-platform mobile apps with Flutter.',
    tech: ['React', 'Node.js', 'Flutter', 'Python'],
    tag: 'build',
  },
  {
    period: '2024',
    title: '4th Place — DTC Competition',
    org: 'Delhi Technical University',
    desc: 'Ranked among top developers in a competitive coding and app development challenge.',
    tech: [],
    tag: 'milestone',
  },
  {
    period: '2024 — Now',
    title: 'Systems & OS Research',
    org: 'Independent',
    desc: 'Building BrowserOS — a Rust kernel compiled to WASM with process management, vFS, syscall dispatch, and cooperative multitasking in the browser.',
    tech: ['Rust', 'WebAssembly', 'wasm-bindgen'],
    tag: 'research',
  },
  {
    period: '2026',
    title: 'Published Research Paper',
    org: 'OSF Preprints',
    desc: 'BrowserOS: A Web-Based Operating System Simulation — published research on building a virtual OS in WebAssembly using Rust.',
    tech: ['Rust', 'WebAssembly'],
    tag: 'milestone',
  },
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: 'a1',
    title: '4th Place — DTC Competition',
    organization: 'Delhi Technical University',
    date: '2024',
    description: 'Ranked among top developers in a competitive coding and app development challenge.',
  },
  {
    id: 'a2',
    title: 'Published Research Paper',
    organization: 'OSF Preprints',
    date: '2026',
    description:
      'BrowserOS: A Web-Based Operating System Simulation — published research on building a virtual OS in WebAssembly using Rust.',
  },
];

export const RESEARCH = {
  title: 'BrowserOS: A Web-Based Operating System Simulation',
  abstract:
    'This paper presents BrowserOS, an innovative web-based operating system simulation running entirely in the browser using Rust and WebAssembly.',
  journal: 'OSF Preprints',
  date: '2026',
  link: 'https://osf.io/m3gv8/files/vu5eq',
};