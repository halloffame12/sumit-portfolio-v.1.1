import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, MapPin, Calendar, User, GraduationCap, Briefcase, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ACHIEVEMENTS_DATA, RESEARCH } from '../data/experience';
import { MOST_USED_TECH } from '../portfolioData';
import { SPRING_SNAPPY } from '../types';
import SeoHelmet from '../components/SeoHelmet';
import ScrollReveal from '../components/ScrollReveal';
import MagneticButton from '../components/MagneticButton';
import Timeline from '../components/Timeline';
import TechDiagram from '../components/TechDiagram';
import LabExperiments from '../components/LabExperiments';
import ChapterHeader from '../components/ChapterHeader';
import { InkStar, InkStroke } from '../components/Ink';

const About: React.FC = () => {
  const location = useLocation();

  /* handle "scroll to a chapter" nav requests (LAB / JOURNEY) */
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!target) return;
    const t = window.setTimeout(() => {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState({}, '');
    }, 120);
    return () => window.clearTimeout(t);
  }, [location.state]);

  return (
    <article className="page-shell">
      <SeoHelmet
        path="/about"
        title="About — Sumit Chauhan | Software Engineer"
        description="The chapters behind the code: ctx, Versz, the journey to IIT Patna, and the person doing the work."
      />

      <div className="page-container">
        {/* ═══ CHAPTER 08 — PERSON · the person doing the work ═══ */}
        <section id="person" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }} aria-label="About Sumit Chauhan">
          <ScrollReveal variant="clipReveal">
            <ChapterHeader
              level={1}
              kicker="Chapter 08 — Person"
              page="PAGE 08 / 09"
              title={<>The story behind<br /><span className="ink-underline">the ink.</span></>}
              intro="chapters 05–07 below, the person here ↓"
            />
          </ScrollReveal>

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 items-start" style={{ marginTop: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={SPRING_SNAPPY}>
              <div className="relative">
                <div className="relative" style={{ border: 'var(--bw) solid var(--border)', boxShadow: 'var(--sh-lg)', background: 'var(--bg-card)', padding: '0.625rem 0.625rem 0', transform: 'rotate(-1.5deg)' }}>
                  <img
                    src="/sumit.jpg"
                    alt="Sumit Chauhan — Full-Stack Developer based in Delhi, India"
                    width={960}
                    height={1200}
                    className="w-full object-cover object-top"
                    style={{ aspectRatio: '4/5' }}
                    loading="eager"
                  />
                  <p className="font-ink" style={{ padding: '0.5rem 0.25rem 0.6rem', fontSize: '1.05rem', color: 'var(--ink-soft)', textAlign: 'center', lineHeight: 1.1 }}>
                    the person behind the pixels
                  </p>
                </div>
                <div aria-hidden="true" style={{ position: 'absolute', top: '-14px', left: '-16px', width: '84px', height: '26px', background: 'rgba(236,230,217,0.85)', border: '1px solid var(--border)', transform: 'rotate(-42deg)', zIndex: 4 }} />
                <div aria-hidden="true" style={{ position: 'absolute', top: '-14px', right: '-16px', width: '84px', height: '26px', background: 'rgba(236,230,217,0.85)', border: '1px solid var(--border)', transform: 'rotate(42deg)', zIndex: 4 }} />
                <span aria-hidden="true" style={{ position: 'absolute', bottom: '-30px', left: '12%', width: 'clamp(90px, 12vw, 140px)', color: 'var(--ink-faint)', opacity: 0.6 }}>
                  <InkStroke kind="squiggle" width="100%" height={12} strokeWidth={2} />
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5" style={{ marginTop: '2rem' }}>
                <div className="brutal-badge" style={{ gap: '0.3rem' }}><MapPin size={11} /> Delhi, India</div>
                <div className="brutal-badge" style={{ gap: '0.3rem' }}><Calendar size={11} /> Coding since 2020</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ ...SPRING_SNAPPY, delay: 0.1 }}>
              <div style={{ maxWidth: '40rem', display: 'flex', flexDirection: 'column', gap: '0.875rem', fontSize: 'clamp(0.8125rem, 1.4vw, 0.9375rem)', color: 'var(--ink-soft)', lineHeight: 1.75 }}>
                <p>
                  Computer Science & Data Science student at IIT Patna who spent a self-directed gap year shipping real products — ctx, an open-source MCP code-intelligence server for AI coding agents, and Versz, a production social debate platform in React and Flutter.
                </p>
                <p>
                  The proof is public — every claim has a repo. A Rust code-graph engine that indexes 1,200+ files in about a second, an MCP server with eleven tools that Claude, Cursor and opencode can call over stdio, and a research paper on BrowserOS on OSF Preprints. Currently automating operational reporting as an MIS/Automation Intern at Rozana. Based in Delhi, seeking a Software Engineering Intern role on a high-caliber team.
                </p>
              </div>

              {/* Achievements */}
              <h2 className="sr-only">Achievements</h2>
              <div className="grid sm:grid-cols-2 gap-3" style={{ marginTop: '1.5rem' }}>
                {ACHIEVEMENTS_DATA.map((a, i) => (
                  <ScrollReveal key={a.id} variant="fadeUp" delay={i * 0.06}>
                    <div className="brutal-card-static h-full" style={{ padding: '1rem', transform: i % 2 === 1 ? 'rotate(0.3deg)' : 'rotate(-0.3deg)' }}>
                      <div className="flex items-start gap-2.5">
                        <div style={{ width: '34px', height: '34px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--black)', border: '2px solid var(--border)', color: 'var(--bg)', boxShadow: '2px 2px 0px var(--border)' }}>
                          <Trophy size={15} />
                        </div>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-1.5" style={{ marginBottom: '2px' }}>
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.75rem', color: 'var(--black)' }}>{a.title}</h3>
                            <span className="font-mono" style={{ fontSize: '0.5625rem', color: 'var(--ink-faint)' }}>{a.date}</span>
                          </div>
                          <p className="font-mono" style={{ fontSize: '0.5625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-faint)', marginBottom: '0.2rem' }}>{a.organization}</p>
                          <p style={{ fontSize: '0.6875rem', color: 'var(--ink-soft)', lineHeight: 1.55 }}>{a.description}</p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Identity card — recruiter-scannable facts */}
              <div className="brutal-card" style={{ padding: '1rem', marginTop: '1.5rem' }}>
                <div className="flex items-center gap-2" style={{ marginBottom: '0.875rem' }}>
                  <div className="brutal-icon-box" style={{ width: '30px', height: '30px' }}><User size={14} /></div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--black)' }}>
                    At a glance
                  </h3>
                </div>
                <dl className="flex flex-col" style={{ gap: '0.625rem' }}>
                  {[
                    { icon: <GraduationCap size={13} />, k: 'Education', v: 'IIT Patna — B.S. CS & Data Science · CGPA 8.4' },
                    { icon: <Briefcase size={13} />, k: 'Experience', v: 'Rozana · MIS/Automation Intern + Founder @ Versz' },
                    { icon: <MapPin size={13} />, k: 'Base', v: 'Delhi, India' },
                    { icon: <Sparkles size={13} />, k: 'Availability', v: 'Open — SDE Intern roles, 2026' },
                    { icon: <Calendar size={13} />, k: 'Research', v: 'BrowserOS paper — OSF Preprints, 2026' },
                  ].map((r) => (
                    <div key={r.k} className="flex items-center gap-2.5" style={{ paddingBottom: '0.625rem', borderBottom: 'var(--bw-sm) dashed var(--border)' }}>
                      <span style={{ color: 'var(--ink-faint)', display: 'flex', flexShrink: 0 }}>{r.icon}</span>
                      <dt className="font-mono" style={{ fontSize: '0.5625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-faint)', minWidth: '6.5rem' }}>{r.k}</dt>
                      <dd style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--black)' }}>{r.v}</dd>
                    </div>
                  ))}
                </dl>
                <div style={{ marginTop: '0.875rem' }}>
                  <p className="font-mono" style={{ fontSize: '0.5625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-faint)', marginBottom: '0.5rem' }}>
                    Stack at a glance
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {MOST_USED_TECH.map((t) => (
                      <span key={t.name} className="brutal-tag" style={{ fontSize: '0.5625rem' }}>{t.name}<span className="font-mono" style={{ color: 'var(--ink-faint)' }}> ·{t.count}</span></span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══ CHAPTER 07 — JOURNEY ═══ */}
        <section id="journey">
          <Timeline />
        </section>

        {/* ═══ CHAPTER 06 — TOOLS ═══ */}
        <section id="tools">
          <TechDiagram />
        </section>

        {/* ═══ CHAPTER 05 — EXPERIMENTS ═══ */}
        <section id="lab">
          <LabExperiments
            research={{
              title: RESEARCH.title,
              desc: RESEARCH.abstract,
              org: RESEARCH.journal,
              year: RESEARCH.date,
              link: RESEARCH.link,
            }}
          />
        </section>

        {/* ═══ CTA — the final chapter ═══ */}
        <ScrollReveal variant="fadeUp" viewportMargin="-60px">
          <div className="brutal-card-dark text-center relative overflow-hidden" style={{ padding: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
            <span aria-hidden="true" style={{ position: 'absolute', top: '1rem', left: '1.25rem', color: 'var(--bg)', opacity: 0.25 }}>
              <InkStar width={26} height={26} />
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem, 2.75vw, 2rem)', color: 'var(--bg)', marginBottom: '0.5rem' }}>
              Finished the back matter?
            </h2>
            <p style={{ color: '#B5B0A4', fontSize: '0.8125rem', maxWidth: '26rem', margin: '0 auto 1.25rem' }}>
              Chapter 09 — the last one — starts with a hard problem and your message.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <MagneticButton strength={0.2}>
                <Link to="/projects" className="brutal-btn">Back to the Work <span aria-hidden="true">←</span></Link>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <Link to="/contact" className="brutal-btn-outline" style={{ borderColor: '#B5B0A4', color: 'var(--bg)' }}>Write Chapter 09 <span aria-hidden="true">→</span></Link>
              </MagneticButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </article>
  );
};

export default About;