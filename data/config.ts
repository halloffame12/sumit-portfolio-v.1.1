import type { Project, ProjectStatus } from '../types';

export type ProjectOverride = Partial<Pick<Project, 'category' | 'description' | 'imageUrl' | 'demoUrl' | 'status' | 'featured' | 'priority' | 'display' | 'role' | 'title'>> & {
  customDescription?: string;
};

export const PROJECT_OVERRIDES: Record<string, ProjectOverride> = {
  ctx: {
    featured: true,
    priority: 100,
    status: 'active',
    category: 'Developer Tooling',
  },
  'versz-app': {
    featured: true,
    priority: 95,
    status: 'maintained',
    category: 'Social Platform',
    demoUrl: 'https://versz.app/',
  },
  'anonchat-live': {
    featured: true,
    priority: 90,
    status: 'active',
    category: 'Real-time Platform',
    demoUrl: 'https://anonchatweb.netlify.app/',
  },
  'codecraftgames': {
    featured: true,
    priority: 80,
    status: 'stable',
    category: 'AI / Computer Vision',
  },
  'browser-os': {
    priority: 55,
    category: 'Systems / Research',
    status: 'active',
  },
  'replaytrade': {
    priority: 50,
    category: 'Web Platform',
  },
  'hush': {
    priority: 40,
    category: 'Mobile App',
  },
  'data-analyst-ai': {
    priority: 35,
    category: 'AI / Data',
  },
  'exoplanets-with-ai': {
    priority: 32,
    category: 'AI / Data Science',
  },
  'hand-gesture-mouse': {
    priority: 30,
    category: 'Computer Vision',
  },
  '3d-model-game-with-hand-gesture-control-using-python-opengl-and-mediapipe': {
    priority: 30,
    category: 'Computer Vision',
  },
  'snakegame-ai': {
    priority: 28,
    category: 'AI / Reinforcement Learning',
  },
};

export const ACTIVE_SLUGS: string[] = ['ctx', 'anonchat-live'];

export const HIDE_SLUGS: string[] = [];
