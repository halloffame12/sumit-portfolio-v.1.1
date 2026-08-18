import type { Project, SyncMeta, ContributionWeek, GithubActivityEvent } from './types';
import { CURATED_PROJECTS } from './data/projects';
import { PROJECT_OVERRIDES, HIDE_SLUGS } from './data/config';
import generated from './generated/github-projects.json';

type GeneratedFile = {
  meta: SyncMeta;
  projects: Project[];
  contributions: ContributionWeek[];
  activity: GithubActivityEvent[];
};

const normalize = (raw: unknown): GeneratedFile => {
  const obj = raw as Partial<GeneratedFile>;
  if (obj && Array.isArray(obj.projects)) {
    return {
      meta: obj.meta ?? { syncedAt: '', owner: 'halloffame12', repoCount: 0, totalContributionsLastYear: 0, source: 'static' },
      projects: obj.projects as Project[],
      contributions: Array.isArray(obj.contributions) ? (obj.contributions as ContributionWeek[]) : [],
      activity: Array.isArray(obj.activity) ? (obj.activity as GithubActivityEvent[]) : [],
    };
  }
  if (Array.isArray(raw)) {
    return {
      meta: { syncedAt: '', owner: 'halloffame12', repoCount: raw.length, totalContributionsLastYear: 0, source: 'static' },
      projects: raw as Project[],
      contributions: [],
      activity: [],
    };
  }
  return { meta: { syncedAt: '', owner: 'halloffame12', repoCount: 0, totalContributionsLastYear: 0, source: 'static' }, projects: [], contributions: [], activity: [] };
};

const { meta, projects: ghProjects, contributions, activity } = normalize(generated);

const applyOverride = (p: Project): Project => {
  const o = PROJECT_OVERRIDES[p.slug];
  if (!o) return p;
  return {
    ...p,
    title: o.title ?? p.title,
    category: o.category ?? p.category,
    role: o.role ?? p.role,
    description: o.customDescription ?? o.description ?? p.description,
    imageUrl: o.imageUrl ?? p.imageUrl,
    demoUrl: o.demoUrl ?? p.demoUrl,
    status: o.status ?? p.status,
    featured: o.featured ?? p.featured,
    priority: o.priority ?? p.priority,
    display: o.display ?? p.display,
  };
};

const merged: Project[] = [...CURATED_PROJECTS, ...ghProjects].map(applyOverride);

const rank = (p: Project): number[] => [
  p.featured ? 0 : 1,
  -(p.priority ?? 0),
  -(p.score ?? 0),
  p.source === 'curated' ? 0 : 1,
  new Date(p.pushedAt || 0).getTime(),
];

const compare = (a: Project, b: Project) => {
  const ra = rank(a);
  const rb = rank(b);
  for (let i = 0; i < ra.length; i++) {
    if (ra[i] !== rb[i]) return ra[i] < rb[i] ? -1 : 1;
  }
  return 0;
};

const visible = merged.filter((p) => (p.display ?? true) && !HIDE_SLUGS.includes(p.slug)).sort(compare);

/* Dedup by slug, preferring the curated case file when a repo is both
   curated and synced from GitHub (ctx, versz-app). */
const bySlug = new Map<string, Project>();
for (const p of visible) {
  const existing = bySlug.get(p.slug);
  if (!existing || p.source === 'curated') bySlug.set(p.slug, p);
}
export const ALL_PROJECTS: Project[] = [...bySlug.values()];

export const ALL_TECH_TAGS: string[] = Array.from(
  new Set(ALL_PROJECTS.flatMap((p) => p.techStack.filter(Boolean)))
).sort();

export const ACTIVE_PROJECTS: Project[] = ALL_PROJECTS
  .filter((p) => p.status === 'active')
  .slice(0, 4);

export const PROJECT_COUNTS = {
  curated: CURATED_PROJECTS.length,
  openSource: ALL_PROJECTS.filter((p) => p.source === 'github').length,
  total: ALL_PROJECTS.length,
};

export const SYNC_META: SyncMeta = meta;
export const CONTRIBUTION_WEEKS: ContributionWeek[] = contributions;
export const ACTIVITY_EVENTS: GithubActivityEvent[] = activity;

export const getSyncAgeLabel = (): string => {
  if (!meta.syncedAt) return 'static data';
  const mins = Math.max(0, Math.floor((Date.now() - new Date(meta.syncedAt).getTime()) / 60000));
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins} min ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return new Date(meta.syncedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
};

export const getFormattedDate = (iso?: string): string => {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
};

/* ── Story helpers (all derived from real synced data — nothing fabricated) ── */

/** Non-curated, real open-source repos → the "experiments" chapter. */
export const LAB_PROJECTS: Project[] = ALL_PROJECTS.filter(
  (p) => p.source === 'github' && !p.featured
).slice(0, 12);

/** tech → projects it actually appears in (for the tech diagram hover). */
export const TECH_TO_PROJECTS: Record<string, string[]> = (() => {
  const map: Record<string, string[]> = {};
  for (const p of ALL_PROJECTS) {
    for (const t of p.techStack.filter(Boolean)) {
      (map[t] ??= []).push(p.title);
    }
  }
  return map;
})();

/** Most-used technologies across real projects, ranked by occurrence. */
export const MOST_USED_TECH: { name: string; count: number }[] = Object.entries(TECH_TO_PROJECTS)
  .map(([name, titles]) => ({ name, count: titles.length }))
  .sort((a, b) => b.count - a.count)
  .slice(0, 8);

/** Current streak of consecutive non-empty contribution weeks (real data). */
export const getCurrentStreak = (): number => {
  let streak = 0;
  for (let i = CONTRIBUTION_WEEKS.length - 1; i >= 0; i--) {
    if (CONTRIBUTION_WEEKS[i].level > 0) streak++;
    else break;
  }
  return streak;
};

/** Most recently pushed repo (real "last active on GitHub"). */
export const getLatestPush = (): Project | undefined =>
  ALL_PROJECTS.filter((p) => p.pushedAt).sort(
    (a, b) => new Date(b.pushedAt!).getTime() - new Date(a.pushedAt!).getTime()
  )[0];

/** Short human label for the most recent contribution window. */
export const getLastActiveLabel = (): string => {
  const latest = getLatestPush();
  if (!latest?.pushedAt) return '—';
  return getFormattedDate(latest.pushedAt);
};