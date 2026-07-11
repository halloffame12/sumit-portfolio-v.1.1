import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FileText, Trophy, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ACHIEVEMENTS_DATA } from '../constants';
import SeoHelmet from '../components/SeoHelmet';

const RESEARCH = {
  title: 'BrowserOS: A Web-Based Operating System Simulation',
  abstract: 'This paper presents BrowserOS, an innovative web-based operating system simulation running entirely in the browser using Rust and WebAssembly.',
  journal: 'OSF Preprints', date: '2026',
  link: 'https://osf.io/m3gv8/files/vu5eq',
};

const fadeUpSpring = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 22 } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const clipReveal = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  show: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const About: React.FC = () => {
  const experiences = [
    { period: '2024 — Now', title: 'Systems & OS Research', org: 'Independent', desc: 'Building BrowserOS — a Rust kernel compiled to WASM with process management, vFS, syscall dispatch, and cooperative multitasking in the browser.', tech: ['Rust', 'WebAssembly', 'wasm-bindgen'] },
    { period: '2023 — Now', title: 'Full-Stack Infrastructure', org: 'Freelance & OSS', desc: 'Architecting production apps with React, Node.js, and cloud infra. Built ForgeStack OS CLI — generates 150+ full-stack app configs from one command.', tech: ['React', 'Node.js', 'TypeScript', 'AWS'] },
    { period: '2022 — Now', title: 'Cross-Platform Development', org: 'Freelance', desc: 'Shipping high-performance Flutter apps with gesture-based UX, local-first architecture, and deep native API integration.', tech: ['Flutter', 'Dart', 'SQLite'] },
  ];

  return (
    <article className="page-shell">
      <SeoHelmet
        path="/about"
        title="About — Sumit Chauhan | Systems Engineer & Full-Stack Architect"
        description="Sumit Chauhan builds WebAssembly kernels, production React infrastructure, and CLI tools. BrowserOS research published on OSF Preprints."
      />

      <div className="page-container">
        {/* ═══ HERO ═══ */}
        <section className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start" style={{ marginBottom: 'var(--section-gap)' }}>
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 180, damping: 22 }}
          >
            {/* Photo with offset backdrop — scoped to photo only */}
            <div className="relative" style={{ marginBottom: '1rem' }}>
              <div className="absolute w-full h-full" style={{ top: '10px', left: '10px', background: 'var(--accent-orange)', border: 'var(--border-w) solid var(--border)' }} />
              <div className="relative overflow-hidden" style={{ border: 'var(--border-w) solid var(--border)', boxShadow: 'var(--shadow-brutal)', background: 'var(--bg-card)' }}>
                <img src="/sumit.jpg" alt="Sumit Chauhan" className="w-full object-cover object-top" style={{ aspectRatio: '4/5' }} />
                <div className="absolute bottom-0 left-0 right-0" style={{ padding: '1.25rem', background: 'linear-gradient(to top, rgba(26,26,26,0.85), transparent)' }}>
                  <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1.25rem', color: 'var(--text-on-dark)' }}>Sumit Chauhan</p>
                  <p style={{ color: 'var(--accent-orange)', fontSize: '0.8125rem', fontWeight: 700 }}>Systems Engineer & Full-Stack Architect</p>
                </div>
              </div>
            </div>
            {/* Badges — outside the offset backdrop scope */}
            <motion.div className="relative flex flex-wrap gap-2" style={{ zIndex: 1 }}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.3 }}
            >
              <div className="brutal-badge" style={{ gap: '0.3rem' }}>
                <MapPin size={12} /> India
              </div>
              <div className="brutal-badge" style={{ gap: '0.3rem' }}>
                <Calendar size={12} /> Coding since 2020
              </div>
            </motion.div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 0.1 }}
          >
            <motion.span className="brutal-kicker" style={{ marginBottom: '1rem', display: 'inline-flex' }} variants={clipReveal} initial="hidden" animate="show">About</motion.span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.0, letterSpacing: '-0.04em', color: 'var(--text-primary)', marginTop: '0.75rem', marginBottom: '1.5rem' }}>
              <motion.span className="block" variants={clipReveal} initial="hidden" animate="show">I write Rust kernels.</motion.span>
              <motion.span className="block" variants={clipReveal} initial="hidden" animate="show" custom={1}><span style={{ color: 'var(--text-muted)' }}>I ship production apps.</span></motion.span>
            </h1>
            <motion.div style={{ maxWidth: '42rem', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', color: 'var(--text-secondary)', lineHeight: 1.75 }}
              variants={staggerContainer} initial="hidden" animate="show"
            >
              <motion.p variants={fadeUpSpring}>
                My workflow sits at the gap between systems programming and product engineering —
                the space where Rust syscall dispatchers meet React component trees.
                I built BrowserOS, a research-level kernel running entirely in WebAssembly.
                I built ForgeStack OS, a CLI that generates 150+ production-ready full-stack configs.
              </motion.p>
              <motion.p variants={fadeUpSpring}>
                I take contracts seriously: 15-20 hour deep-work sprints, zero hand-waving,
                zero scope creep. If it runs on silicon, I can architect it, build it, and ship it.
              </motion.p>
            </motion.div>
          </motion.div>
        </section>

        {/* ═══ EXPERIENCE TIMELINE ═══ */}
        <section style={{ marginBottom: 'var(--section-gap)' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 180, damping: 22 }}
          >
          <h2 className="brutal-section-title" style={{ marginBottom: '2rem' }}>Experience</h2>
          <div className="brutal-timeline">
            {experiences.map((exp, i) => (
              <motion.div key={i} className="brutal-timeline-item group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, damping: 22, delay: i * 0.12 }}
              >
                <div className="brutal-timeline-dot" />
                <div className="brutal-card" style={{ padding: '1.25rem' }}>
                  <div className="flex flex-wrap items-center gap-2" style={{ marginBottom: '0.5rem' }}>
                    <span className="brutal-badge-accent brutal-badge">{exp.period}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{exp.org}</span>
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>{exp.title}</h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '0.75rem', maxWidth: '55ch' }}>{exp.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t, j) => <span key={j} className="brutal-tag" style={{ fontSize: '0.625rem' }}>{t}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </section>

        {/* ═══ RESEARCH & ACHIEVEMENTS ═══ */}
        <section style={{ marginBottom: 'var(--section-gap)' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 180, damping: 22 }}
          >
          <h2 className="brutal-section-title" style={{ marginBottom: '2rem' }}>Research & Recognition</h2>

          {/* Research Card */}
          <article className="brutal-card" style={{ padding: 'clamp(1.25rem, 3vw, 2rem)', marginBottom: '1.5rem' }}>
            <div className="flex items-center gap-3" style={{ marginBottom: '1rem' }}>
              <div className="brutal-icon-box"><FileText size={18} /></div>
              <span style={{ fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent-orange)' }}>Published Research</span>
            </div>
            <h3 style={{ fontWeight: 900, fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{RESEARCH.title}</h3>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem', maxWidth: '60ch' }}>{RESEARCH.abstract}</p>
            <a href={RESEARCH.link} target="_blank" rel="noopener noreferrer" className="brutal-btn brutal-btn-sm">
              Read Paper <ArrowUpRight size={14} />
            </a>
          </article>

          {/* Achievements */}
          <motion.div className="brutal-grid grid sm:grid-cols-2 gap-4"
            variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            {ACHIEVEMENTS_DATA.map((a) => (
              <motion.div key={a.id} className="brutal-card-static" style={{ padding: '1.25rem' }} variants={fadeUpSpring}>
                <div className="flex items-start gap-3">
                  <div style={{ width: '36px', height: '36px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--accent-yellow)', border: '2px solid var(--border)', color: 'var(--border)' }}>
                    <Trophy size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2" style={{ marginBottom: '2px' }}>
                      <h4 style={{ fontWeight: 800, fontSize: '0.8125rem', color: 'var(--text-primary)' }}>{a.title}</h4>
                      <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>{a.date}</span>
                    </div>
                    <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--accent-orange)', marginBottom: '0.25rem' }}>{a.organization}</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{a.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        </section>

        {/* ═══ CTA ═══ */}
        <section>
          <motion.div className="brutal-grid"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 180, damping: 22 }}
          >
          <div className="brutal-card-dark text-center" style={{ padding: 'clamp(2rem, 4vw, 3rem)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(1.25rem, 3vw, 2rem)', color: 'var(--text-on-dark)', marginBottom: '0.75rem' }}>
              Interested in working together?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', maxWidth: '28rem', margin: '0 auto 1.5rem' }}>
              Open to freelance contracts, systems-level work, and high-impact infrastructure projects.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/projects" className="brutal-btn">View Projects <ArrowUpRight size={16} /></Link>
              <Link to="/contact" className="brutal-btn-outline">Get in Touch <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </motion.div>
        </section>
      </div>
    </article>
  );
};

export default About;
