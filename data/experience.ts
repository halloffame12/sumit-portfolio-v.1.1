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
    period: '2025',
    title: 'Snake AI',
    org: 'Independent · gap year',
    desc: 'Trained an autonomous agent with Q-Learning and Deep Q-Networks to play Snake — experience replay and epsilon-greedy exploration to stabilize training.',
    tech: ['Python', 'DQN', 'TensorFlow'],
    tag: 'build',
  },
  {
    period: '2025',
    title: 'AnonChat — real-time anonymous chat',
    org: 'Independent · gap year',
    desc: 'Full-stack chat app with instant anonymous matching over Socket.IO and WebRTC, JWT-based sessions, themed rooms, and a production deployment.',
    tech: ['Node.js', 'Socket.IO', 'WebRTC', 'React'],
    tag: 'build',
  },
  {
    period: '2025 — Present',
    title: 'Versz — social debate platform',
    org: 'Founder & Developer',
    desc: 'Production platform end-to-end: React web, Flutter mobile, Firebase backend, reputation engine, and my own deployment pipeline. Core features shipped: feed, structured debates, groups, leaderboards.',
    tech: ['React', 'Flutter', 'Firebase'],
    tag: 'build',
  },
  {
    period: '2025',
    title: 'NASA App Challenge — 4th place',
    org: 'DTC regional leg',
    desc: 'Contributed to an AI exoplanet-detection solution; team placed 4th at the Delhi Technical Campus regional leg.',
    tech: ['Python', 'AI'],
    tag: 'milestone',
  },
  {
    period: '2026',
    title: 'ctx — MCP code-intelligence server',
    org: 'Open source',
    desc: 'Codebase context engine for AI coding agents: Rust + TypeScript code-graph engine over MCP, distributed via npm, cargo, Homebrew, Scoop and Winget.',
    tech: ['Rust', 'TypeScript', 'tree-sitter', 'MCP'],
    tag: 'build',
  },
  {
    period: '2026 — Present',
    title: 'MIS / Automation Intern',
    org: 'Rozana · Operations',
    desc: 'Automating recurring MIS reports with Python scripts that integrate StockOne and Locatr — replacing manual compilation and shortening report turnaround.',
    tech: ['Python', 'Automation'],
    tag: 'build',
  },
  {
    period: '2026',
    title: 'Published research paper',
    org: 'OSF Preprints',
    desc: 'BrowserOS: A Web-Based Operating System Simulation — building a virtual OS in WebAssembly using Rust.',
    tech: ['Rust', 'WebAssembly'],
    tag: 'research',
  },
  {
    period: '2026 — 2030',
    title: 'B.S. Computer Science & Data Science',
    org: 'IIT Patna',
    desc: 'CGPA 8.4 / 10. Coursework: DSA, Database Systems, Operating Systems, Computer Networks, Linear Algebra, Probability & Statistics.',
    tech: ['DSA', 'OS', 'DBMS'],
    tag: 'milestone',
  },
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: 'a1',
    title: 'NASA App Challenge — 4th Place',
    organization: 'DTC Regional',
    date: '2025',
    description: 'Contributed to an AI exoplanet-detection solution; team placed 4th at the Delhi Technical Campus regional leg.',
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
