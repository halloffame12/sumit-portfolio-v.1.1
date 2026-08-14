import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = resolve(ROOT, 'generated');
const OUT_FILE = resolve(OUT_DIR, 'github-projects.json');
const IGNORE_FILE = resolve(ROOT, 'scripts', 'repo-ignore.json');
const OWNER = 'halloffame12';
const API = `https://api.github.com/users/${OWNER}/repos?per_page=100&sort=updated`;
const EVENTS_API = `https://api.github.com/users/${OWNER}/events?per_page=20`;
const CONTRIBUTIONS_URL = `https://github.com/users/${OWNER}/contributions`;

const AUTH = process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {};

const placeholder = (initial) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">` +
      `<rect x="16" y="16" width="800" height="450" fill="#FFE500" stroke="#0A0A0A" stroke-width="6"/>` +
      `<rect x="0" y="0" width="800" height="450" fill="#FFFDF7" stroke="#0A0A0A" stroke-width="6"/>` +
      `<text x="400" y="315" font-family="'Archivo Black','Arial Black',sans-serif" font-size="230" font-weight="900" text-anchor="middle" fill="#0A0A0A">${initial}</text>` +
      `</svg>`
  )}`;

const readJson = (path, fallback) => {
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch {
    return fallback;
  }
};

const fetchJson = async (url, signal) => {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'sumit-portfolio-sync', ...AUTH, Accept: 'application/vnd.github+json' },
    signal,
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status} for ${url}`);
  return res.json();
};

const ignored = new Set(readJson(IGNORE_FILE, []));

const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const titleize = (name) =>
  name
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[-_.]+/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/\b(Os|Ai|Api|Ui)\b/g, (m) => m.toUpperCase())
    .trim();

const daysSince = (iso) => Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);

const deriveStatus = (pushedAt) => {
  const d = daysSince(pushedAt);
  if (d <= 90) return 'active';
  if (d <= 365) return 'maintained';
  return 'stable';
};

const qualityScore = (repo, topics) => {
  let score = 0;
  score += Math.min(repo.stargazers_count ?? 0, 20) * 2;
  score += Math.min(repo.forks_count ?? 0, 10);
  score += Math.min(topics.length, 6) * 2;
  score += repo.description && repo.description.length >= 20 ? 6 : repo.description ? 3 : 0;
  const d = daysSince(repo.pushed_at);
  score += d <= 30 ? 14 : d <= 90 ? 9 : d <= 180 ? 5 : 1;
  score += repo.language ? 2 : 0;
  if (repo.name.length >= 3) score += 2;
  return score;
};

const mapRepo = (repo, topics) => {
  const techStack = [repo.language, ...topics].filter(Boolean);
  return {
    id: `gh-${repo.id}`,
    slug: slugify(repo.name),
    title: titleize(repo.name),
    category: 'Open Source',
    imageUrl: placeholder((repo.name || 'S').charAt(0).toUpperCase()),
    description: repo.description || 'Open-source project by Sumit Chauhan.',
    problem: '',
    solution: '',
    role: 'Open Source',
    techStack,
    repoUrl: repo.html_url,
    stars: repo.stargazers_count ?? 0,
    forks: repo.forks_count ?? 0,
    source: 'github',
    status: deriveStatus(repo.pushed_at),
    score: qualityScore(repo, topics),
    pushedAt: repo.pushed_at,
    topics,
  };
};

const fetchTopics = async (repo, signal) => {
  try {
    const data = await fetchJson(repo.topics_url, signal);
    return Array.isArray(data.names) ? data.names.slice(0, 6) : [];
  } catch {
    return [];
  }
};

const fetchContributions = async (signal) => {
  try {
    const res = await fetch(CONTRIBUTIONS_URL, { headers: { 'User-Agent': 'sumit-portfolio-sync' }, signal });
    if (!res.ok) throw new Error(`contributions ${res.status}`);
    const html = await res.text();
    const total = /(\d[\d,]*)\s+contributions?\s+in the last year/.exec(html);
    const cells = [];
    const re = /data-date="([^"]+)"[^>]*data-level="(\d+)"/g;
    let m;
    while ((m = re.exec(html))) cells.push({ date: m[1], level: Number(m[2]) });

    const monday = (dateStr) => {
      const d = new Date(`${dateStr}T00:00:00Z`);
      const day = d.getUTCDay();
      const diff = day === 0 ? -6 : 1 - day;
      d.setUTCDate(d.getUTCDate() + diff);
      return d.toISOString().slice(0, 10);
    };

    const byWeek = new Map();
    for (const cell of cells) {
      const key = monday(cell.date);
      byWeek.set(key, Math.max(byWeek.get(key) || 0, cell.level));
    }
    const weeks = [...byWeek.entries()]
      .map(([date, level]) => ({ date, level }))
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(-53);

    return {
      totalContributionsLastYear: total ? Number(total[1].replace(/,/g, '')) : 0,
      weeks,
    };
  } catch {
    return { totalContributionsLastYear: 0, weeks: [] };
  }
};

const main = async () => {
  const cached = readJson(OUT_FILE, null);
  const existing = cached && Array.isArray(cached.projects) ? cached : { meta: null, projects: [] };
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 30000);
    const signal = controller.signal;

    const repos = await fetchJson(API, signal);
    const included = repos.filter((r) => !r.fork && !r.archived && !r.private && !ignored.has(r.name));

    let projects = [];
    for (const repo of included) {
      const topics = await fetchTopics(repo, signal);
      projects.push(mapRepo(repo, topics));
    }

    let events = [];
    try {
      const raw = await fetchJson(EVENTS_API, signal);
      events = raw.map((e) => ({ type: e.type, repo: e.repo?.name || '', at: e.created_at })).slice(0, 15);
    } catch {}

    const contributions = await fetchContributions(signal);
    clearTimeout(timer);

    if (!projects.length) throw new Error('no projects mapped');

    const output = {
      meta: {
        syncedAt: new Date().toISOString(),
        owner: OWNER,
        repoCount: projects.length,
        totalContributionsLastYear: contributions.totalContributionsLastYear,
        source: 'github-api',
      },
      projects,
      contributions: contributions.weeks,
      activity: events,
    };

    mkdirSync(OUT_DIR, { recursive: true });
    writeFileSync(OUT_FILE, JSON.stringify(output, null, 2) + '\n', 'utf8');
    console.log(`[sync-github] synced ${projects.length} repos + ${contributions.weeks.length} weeks + ${events.length} events -> generated/github-projects.json`);
  } catch (err) {
    const kept = existing.projects.length;
    console.warn(`[sync-github] sync failed (${err.message}); keeping cached data (${kept} projects).`);
  }
};

main();