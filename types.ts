import type { ReactNode } from 'react';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  problem: string;
  solution: string;
  role: string;
  techStack: string[];
  repoUrl: string;
  stars?: number;
  forks?: number;
  source?: 'curated' | 'github';
  demoUrl?: string;
  status?: ProjectStatus;
  score?: number;
  pushedAt?: string;
  topics?: string[];
  featured?: boolean;
  priority?: number;
  display?: boolean;
  howItWorks?: string;
  challenges?: string;
  learned?: string;
}

export type ProjectStatus = 'active' | 'maintained' | 'stable' | 'archived';

export interface GithubActivityEvent {
  type: string;
  repo: string;
  at: string;
}

export interface ContributionWeek {
  date: string;
  level: number;
}

export interface SyncMeta {
  syncedAt: string;
  owner: string;
  repoCount: number;
  totalContributionsLastYear: number;
  source: string;
}

export interface TimelineItem {
  period: string;
  title: string;
  org: string;
  desc: string;
  tech: string[];
  tag?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: ReactNode;
  handle: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  icon?: ReactNode;
  skills: string[];
}

export type PeepColors = {
  skin?: string;
  hair?: string;
  outfit?: string;
};

export type PeepPose = 'sitting-laptop' | 'standing-wave' | 'pointing-right' | 'thinking' | 'working-desk' | 'thumbs-up';

export interface PeepIllustrationProps {
  pose: PeepPose;
  colors?: PeepColors;
  className?: string;
  size?: number;
  animate?: boolean;
}

/* ── Motion Tokens — High stiffness, low damping for snappy springs ── */
export const SPRING_SNAPPY = { type: 'spring' as const, stiffness: 500, damping: 25 };
export const SPRING_BOUNCY = { type: 'spring' as const, stiffness: 400, damping: 18 };
export const SPRING_CARD = { type: 'spring' as const, stiffness: 400, damping: 22 };

export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

export const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { ...SPRING_SNAPPY } },
};

export const clipReveal = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  show: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const scaleIn = {
  hidden: { scale: 0.85, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { ...SPRING_BOUNCY } },
};
