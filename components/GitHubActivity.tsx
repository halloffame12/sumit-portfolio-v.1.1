import React, { useMemo } from 'react';
import { GitCommitHorizontal, ArrowUpRight, TrendingUp, Layers, CalendarClock } from 'lucide-react';
import { CONTRIBUTION_WEEKS, ACTIVITY_EVENTS, SYNC_META, getSyncAgeLabel, getCurrentStreak, getLatestPush, MOST_USED_TECH } from '../portfolioData';
import ScrollReveal from './ScrollReveal';
import ChapterHeader from './ChapterHeader';
import { InkArrow } from './Ink';

/* ═══════════════════════════════════════════════════════════
   CHAPTER 04 — PROOF · the annual ledger.
   One ruled sheet for the last 53 weeks, real synced data.
   Stats read as marginalia; the ledger is the star.
   ═══════════════════════════════════════════════════════════ */

const LEVEL_COLORS = ['#FFFFFF', '#E7E0D0', '#CBC2A8', '#8A8578', '#0A0A0A'];

const monthLabel = (date: string) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString('en-GB', { month: 'short' });

const eventAction = (type: string) => {
  switch (type) {
    case 'PushEvent': return 'pushed to';
    case 'CreateEvent': return 'created';
    case 'ForkEvent': return 'forked';
    case 'WatchEvent': return 'starred';
    case 'PullRequestEvent': return 'opened a PR in';
    case 'IssueEvent': return 'opened an issue in';
    case 'ReleaseEvent': return 'released';
    default: return 'worked on';
  }
};

const timeAgo = (iso: string) => {
  const mins = Math.floor((Date.now() - new Date(iso).getTime()) / 60000);
  if (mins < 60) return `${Math.max(1, mins)}m`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h`;
  return `${Math.floor(hours / 24)}d`;
};

const GitHubActivity: React.FC = () => {
  const weeks = useMemo(() => CONTRIBUTION_WEEKS, []);
  const events = ACTIVITY_EVENTS.slice(0, 6);
  const total = SYNC_META.totalContributionsLastYear;

  if (weeks.length === 0 && events.length === 0) return null;

  const monthGroups = useMemo(() => {
    const seen: { label: string; index: number }[] = [];
    let last = '';
    weeks.forEach((w, i) => {
      const label = monthLabel(w.date);
      if (label !== last) { seen.push({ label, index: i }); last = label; }
    });
    return seen;
  }, [weeks]);

  const stats = [
    {
      icon: <TrendingUp size={15} />,
      value: `${getCurrentStreak()}`,
      unit: ' wks',
      label: 'Current streak',
    },
    {
      icon: <Layers size={15} />,
      value: MOST_USED_TECH[0]?.name ?? '—',
      unit: '',
      label: 'Most used tech',
    },
    {
      icon: <CalendarClock size={15} />,
      value: getLatestPush()?.title ?? '—',
      unit: '',
      label: 'Last pushed',
    },
  ];

  return (
    <section className="page-container" style={{ paddingTop: 'var(--section-gap)' }} aria-labelledby="activity-h">
      <ScrollReveal variant="fadeUp">
        <ChapterHeader
          kicker="Chapter 04 — Proof"
          page="PAGE 04 / 09 · THE PROOF"
          titleId="activity-h"
          title={<>Shipping <span className="ink-underline">in public</span></>}
          intro="every square below is a week I showed up —"
          meta={
            <span className="font-mono" style={{ fontSize: '0.5625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-faint)' }}>
              Sync {getSyncAgeLabel()}
            </span>
          }
        />
      </ScrollReveal>

      {/* marginalia — the year at a glance */}
      <ScrollReveal variant="fadeUp" delay={0.05}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" style={{ marginBottom: '1.25rem' }}>
          {stats.map((s) => (
            <div key={s.label} className="brutal-card-static flex items-center gap-2.5" style={{ padding: '0.75rem 0.875rem' }}>
              <div className="brutal-icon-box" style={{ width: '34px', height: '34px' }}>{s.icon}</div>
              <div className="min-w-0">
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: s.value.length > 14 ? '0.75rem' : '1rem', color: 'var(--black)', lineHeight: 1.2 }}>
                  {s.value}<span className="font-mono" style={{ fontSize: '0.625rem', color: 'var(--ink-faint)' }}>{s.unit}</span>
                </p>
                <p className="font-mono" style={{ fontSize: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-faint)' }}>{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* the annual ledger */}
      <ScrollReveal variant="fadeUp" delay={0.1}>
        <div className="sheet-lined relative" style={{ border: 'var(--bw) solid var(--border)', boxShadow: 'var(--sh-lg)', background: 'var(--bg-card)', transform: 'rotate(-0.2deg)' }}>
          <div className="flex items-center justify-between flex-wrap gap-2" style={{ padding: '0.875rem 1.125rem', borderBottom: 'var(--bw-sm) dashed var(--border)' }}>
            <span className="font-mono ink-label" style={{ color: 'var(--ink-faint)' }}>Last 53 Weeks · Annual Ledger</span>
            <div className="flex items-center gap-1.5">
              <InkArrow variant="cork" width={40} height={20} strokeWidth={2.5} style={{ color: 'var(--ink-faint)', transform: 'rotate(180deg)' }} />
              <span className="font-ink" style={{ fontSize: '1.1rem', color: 'var(--ink-faint)', transform: 'rotate(-2deg)' }}>darker = busier</span>
            </div>
          </div>

          <div style={{ padding: '1.125rem' }}>
            <div
              className="grid"
              style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(12px, 1fr))', gap: '3px' }}
              role="img"
              aria-label="Contribution activity over the last year, darker blocks mean more activity"
            >
              {weeks.map((w) => (
                <div
                  key={w.date}
                  style={{ aspectRatio: '1', background: LEVEL_COLORS[w.level] || LEVEL_COLORS[0], border: '1px solid rgba(10,10,10,0.22)' }}
                  title={`Week of ${w.date} — level ${w.level}`}
                  aria-label={`Week of ${w.date}, activity level ${w.level} of 4`}
                />
              ))}
            </div>
            <div className="flex items-center justify-between flex-wrap gap-2" style={{ marginTop: '0.75rem' }}>
              <div className="flex items-center gap-2 font-mono" style={{ fontSize: '0.5rem', fontWeight: 700, color: 'var(--ink-faint)' }}>
                <span>LESS</span>
                {LEVEL_COLORS.map((c) => (
                  <span key={c} style={{ width: '10px', height: '10px', background: c, border: '1px solid rgba(10,10,10,0.22)', display: 'inline-block' }} />
                ))}
                <span>MORE</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {monthGroups.map((m) => (
                  <span key={m.index} className="font-mono" style={{ fontSize: '0.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--ink-faint)' }}>
                    {m.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-2" style={{ padding: '0.75rem 1.125rem', borderTop: 'var(--bw-sm) dashed var(--border)' }}>
            <span className="font-mono" style={{ fontSize: '0.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-faint)' }}>
              {total} ink drops logged this year
            </span>
            <span className="font-ink" style={{ fontSize: '1rem', color: 'var(--ink-faint)', transform: 'rotate(-1.5deg)' }}>no gaps, no excuses →</span>
          </div>
        </div>
      </ScrollReveal>

      {/* recent ink — the footnote */}
      {events.length > 0 && (
        <ScrollReveal variant="fadeUp" delay={0.15}>
          <div className="brutal-card-dark" style={{ padding: 'clamp(1rem, 2.5vw, 1.5rem)', marginTop: '1.25rem' }}>
            <div className="flex items-center justify-between flex-wrap gap-2" style={{ marginBottom: '0.875rem' }}>
              <div className="flex items-center gap-2">
                <GitCommitHorizontal size={16} style={{ color: 'var(--bg)' }} />
                <h3 className="font-mono" style={{ fontWeight: 700, fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--bg)' }}>
                  Recent Ink
                </h3>
              </div>
              <span className="font-ink" style={{ fontSize: '1rem', color: 'var(--bg)', opacity: 0.6, transform: 'rotate(-2deg)' }}>the latest from the log →</span>
            </div>
            <ul className="flex flex-col">
              {events.map((e, i) => (
                <li key={i} className="flex items-center gap-2" style={{ padding: '0.4rem 0', borderBottom: i < events.length - 1 ? '1px solid rgba(247,243,236,0.12)' : 'none', fontSize: '0.6875rem', color: '#B5B0A4' }}>
                  <span className="font-mono" style={{ fontWeight: 700, color: 'var(--bg)' }}>{eventAction(e.type)}</span>
                  <a href={`https://github.com/${e.repo}`} target="_blank" rel="noopener noreferrer"
                    className="ink-underline"
                    style={{ color: 'var(--bg)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                    {e.repo.replace('halloffame12/', '')} <ArrowUpRight size={10} />
                  </a>
                  <span className="ml-auto font-mono" style={{ color: '#77736A', flexShrink: 0 }}>{timeAgo(e.at)}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      )}

      {/* running footer */}
      <div className="chapter-footer" style={{ marginTop: '1.5rem' }}>
        <span>PAGE 04 / 09 · THE PROOF</span>
        <span>CHAPTER FOUR — THE PROOF</span>
      </div>
    </section>
  );
};

export default GitHubActivity;
