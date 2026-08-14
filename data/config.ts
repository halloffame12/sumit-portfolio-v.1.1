import type { Project, ProjectStatus } from '../types';

export type ProjectOverride = Partial<Pick<Project, 'category' | 'description' | 'imageUrl' | 'demoUrl' | 'status' | 'featured' | 'priority' | 'display' | 'role' | 'title'>> & {
  customDescription?: string;
};

export const PROJECT_OVERRIDES: Record<string, ProjectOverride> = {
  'anonchat-live': {
    featured: true,
    priority: 100,
    status: 'active',
    category: 'Real-time Platform',
    demoUrl: 'https://anonchatweb.netlify.app/',
  },
  'ai-powered-blog': {
    featured: true,
    priority: 90,
    status: 'maintained',
    category: 'AI Integration',
  },
  clearlist: {
    featured: true,
    priority: 85,
    status: 'stable',
    category: 'Mobile App',
  },
  'codecraftgames': {
    featured: true,
    priority: 80,
    status: 'stable',
    category: 'AI / Computer Vision',
    demoUrl: 'https://codecraftgames.netlify.app/',
  },
  'versz-app': {
    priority: 60,
    featured: true,
    category: 'Mobile App',
    status: 'maintained',
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
  'ctx': {
    priority: 45,
    category: 'Systems',
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
};

export const ACTIVE_SLUGS: string[] = ['anonchat-live'];

export const HIDE_SLUGS: string[] = [];