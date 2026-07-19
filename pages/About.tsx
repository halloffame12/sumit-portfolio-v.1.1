import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FileText, Trophy, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ACHIEVEMENTS_DATA, SKILLS_DATA } from '../constants';
import { SPRING_SNAPPY, staggerContainer, fadeUp, clipReveal } from '../types';
import SeoHelmet from '../components/SeoHelmet';
import PeepIllustration from '../components/PeepIllustration';
import ScrollReveal from '../components/ScrollReveal';
import MagneticButton from '../components/MagneticButton';

const RESEARCH = {
  title: 'BrowserOS: A Web-Based Operating System Simulation',
  abstract: 'This paper presents BrowserOS, an innovative web-based operating system simulation running entirely in the browser using Rust and WebAssembly.',
  journal: 'OSF Preprints', date: '2026',
  link: 'https://osf.io/m3gv8/files/vu5eq',
};

const About: React.FC = () => {
  const experiences = [
    { period: '2023 \u2014 Now', title: 'Full-Stack & AI Development', org: 'Freelance & OSS', desc: 'Building production apps with React, Node.js, and AI integrations. Real-time platforms with Socket.IO, computer vision with OpenCV, and cross-platform mobile apps with Flutter.', tech: ['React', 'Node.js', 'Flutter', 'Python'] },
    { period: '2022 \u2014 Now', title: 'Mobile Development', org: 'Freelance', desc: 'Shipping high-performance Flutter apps with gesture-based UX, local-first architecture, and deep native API integration across Android and iOS.', tech: ['Flutter', 'Dart', 'SQLite', 'Material 3'] },
    { period: '2024 \u2014 Now', title: 'Systems & OS Research', org: 'Independent', desc: 'Building BrowserOS \u2014 a Rust kernel compiled to WASM with process management, vFS, syscall dispatch, and cooperative multitasking in the browser.', tech: ['Rust', 'WebAssembly', 'wasm-bindgen'] },
  ];

  return (
    <article className="page-shell">
      <SeoHelmet
        path="/about"
        title="About \u2014 Sumit Chauhan | Full-Stack Developer"
        description="Full-stack developer building real-time platforms, AI-powered tools, and cross-platform apps. Based in New Delhi, India."
      />

      <div className="page-container">
        {/* ═══ HERO: Photo + Bio ═══ */}
        <section className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-start" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={SPRING_SNAPPY}
          >
            <div className="relative" style={{ marginBottom: '0.875rem' }}>
              <div className="absolute w-full h-full" style={{ top: '10px', left: '10px', background: 'var(--yellow)', border: 'var(--bw) solid var(--border)' }} />
              <div className="relative overflow-hidden" style={{ border: 'var(--bw) solid var(--border)', boxShadow: 'var(--sh)', background: 'var(--bg-card)', transform: 'rotate(-1deg)' }}>
                <img
                  src="/sumit.jpg"
                  alt="Sumit Chauhan \u2014 Full-Stack Developer based in New Delhi, India"
                  className="w-full object-cover object-top"
                  style={{ aspectRatio: '4/5' }}
                  loading="eager"
                />
                <div className="absolute bottom-0 left-0 right-0" style={{ padding: '1.125rem', background: 'linear-gradient(to top, rgba(10,10,10,0.85), transparent)' }}>
                  <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1.125rem', color: 'var(--bg)' }}>Sumit Chauhan</p>
                  <p style={{ color: 'var(--blue)', fontSize: '0.75rem', fontWeight: 700 }}>Full-Stack Developer</p>
                </div>
              </div>
            </div>

            <div className="flex items-end gap-3">
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22, delay: 0.3 }}
                className="flex flex-wrap gap-1.5"
              >
                <div className="brutal-badge" style={{ gap: '0.25rem' }}><MapPin size={11} /> New Delhi, India</div>
                <div className="brutal-badge" style={{ gap: '0.25rem' }}><Calendar size={11} /> Coding since 2020</div>
              </motion.div>
              <div className="hidden lg:block" style={{ width: '72px', marginLeft: 'auto' }}>
                <PeepIllustration pose="standing-wave" colors={{ outfit: 'var(--yellow)' }} size={72} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...SPRING_SNAPPY, delay: 0.1 }}
          >
            <motion.span className="brutal-kicker" style={{ marginBottom: '0.875rem', display: 'inline-flex' }} variants={clipReveal} initial="hidden" animate="show">About</motion.span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4.5vw, 3rem)', lineHeight: 1.0, letterSpacing: '-0.03em', color: 'var(--black)', marginTop: '0.625rem', marginBottom: '1.25rem' }}>
              <motion.span className="block" variants={clipReveal} initial="hidden" animate="show">I build things that</motion.span>
              <motion.span className="block" variants={clipReveal} initial="hidden" animate="show"><span style={{ color: 'var(--blue)' }}>actually ship.</span></motion.span>
            </h1>
            <motion.div style={{ maxWidth: '40rem', display: 'flex', flexDirection: 'column', gap: '0.875rem', fontSize: 'clamp(0.8125rem, 1.4vw, 0.9375rem)', color: '#555', lineHeight: 1.75 }}
              variants={staggerContainer} initial="hidden" animate="show"
            >
              <motion.p variants={fadeUp}>
                My work sits at the intersection of full-stack product engineering and AI automation \u2014
                real-time chat platforms that handle live traffic, Flutter apps that ship fast,
                and computer vision pipelines that actually work in production.
              </motion.p>
              <motion.p variants={fadeUp}>
                I don't do hand-waving. 15-20 hour deep-work sprints, clean code, zero scope creep.
                If it runs on silicon, I can architect it, build it, and ship it. Based in New Delhi, working with clients everywhere.
              </motion.p>
            </motion.div>
          </motion.div>
        </section>

        {/* ═══ SKILLS ═══ */}
        <section style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <ScrollReveal variant="fadeUp">
            <div className="flex items-center gap-3" style={{ marginBottom: '1.5rem' }}>
              <h2 className="brutal-section-title">Technical DNA</h2>
              <div className="hidden lg:block" style={{ marginLeft: 'auto', width: '100px' }}>
                <PeepIllustration pose="pointing-right" colors={{ outfit: 'var(--yellow)' }} size={100} />
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              {[
                { name: 'Flutter / Dart', level: 90 },
                { name: 'React / Next.js', level: 92 },
                { name: 'Node.js / Express', level: 88 },
                { name: 'Python / AI', level: 82 },
                { name: 'TypeScript', level: 90 },
              ].map((skill, i) => (
                <ScrollReveal key={skill.name} variant="fadeUp" delay={i * 0.06}>
                  <div style={{ marginBottom: '0.625rem' }}>
                    <div className="flex justify-between" style={{ marginBottom: '0.25rem' }}>
                      <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.6875rem', color: 'var(--black)' }}>{skill.name}</span>
                      <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.625rem', color: 'var(--blue)' }}>{skill.level}%</span>
                    </div>
                    <div className="brutal-skill-bar">
                      <motion.div
                        className="brutal-skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {SKILLS_DATA.map((cat, i) => (
                <ScrollReveal key={cat.title} variant="fadeUp" delay={i * 0.06}>
                  <div className="brutal-card-static" style={{ padding: '1rem' }}>
                    <div className="flex items-center gap-2" style={{ marginBottom: '0.5rem' }}>
                      <div className="brutal-icon-box" style={{ width: '32px', height: '32px' }}>{cat.icon}</div>
                      <h3 style={{ fontWeight: 800, fontSize: '0.8125rem', color: 'var(--black)' }}>{cat.title}</h3>
                    </div>
                    <p style={{ fontSize: '0.6875rem', color: '#888', lineHeight: 1.55, marginBottom: '0.5rem' }}>{cat.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {cat.skills.map((s, j) => (
                        <span key={j} className="brutal-tag" style={{ fontSize: '0.5625rem' }}>{s}</span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* ═══ EXPERIENCE ═══ */}
        <section style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <ScrollReveal variant="fadeUp">
            <h2 className="brutal-section-title" style={{ marginBottom: '1.5rem' }}>Experience</h2>
            <div className="grid md:grid-cols-3 gap-3">
              {experiences.map((exp, i) => (
                <ScrollReveal key={i} variant="fadeUp" delay={i * 0.08}>
                  <div className="brutal-card" style={{ padding: '1.125rem' }}>
                    <div className="flex flex-wrap items-center gap-1.5" style={{ marginBottom: '0.4rem' }}>
                      <span className="brutal-badge brutal-badge-primary">{exp.period}</span>
                      <span style={{ fontSize: '0.625rem', color: '#888' }}>{exp.org}</span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.875rem', color: 'var(--black)', marginBottom: '0.35rem' }}>{exp.title}</h3>
                    <p style={{ fontSize: '0.75rem', color: '#555', lineHeight: 1.6, marginBottom: '0.625rem' }}>{exp.desc}</p>
                    <div className="flex flex-wrap gap-1">
                      {exp.tech.map((t, j) => <span key={j} className="brutal-tag" style={{ fontSize: '0.5625rem' }}>{t}</span>)}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* ═══ RESEARCH & ACHIEVEMENTS ═══ */}
        <section style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <ScrollReveal variant="fadeUp">
            <h2 className="brutal-section-title" style={{ marginBottom: '1.5rem' }}>Recognition</h2>

            <article className="brutal-card" style={{ padding: 'clamp(1.125rem, 2.5vw, 1.75rem)', marginBottom: '1rem' }}>
              <div className="flex items-center gap-2.5" style={{ marginBottom: '0.75rem' }}>
                <div className="brutal-icon-box"><FileText size={16} /></div>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--blue)' }}>Published Research</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(0.9375rem, 1.8vw, 1.125rem)', color: 'var(--black)', marginBottom: '0.4rem' }}>{RESEARCH.title}</h3>
              <p style={{ fontSize: '0.75rem', color: '#555', lineHeight: 1.7, marginBottom: '0.875rem', maxWidth: '58ch' }}>{RESEARCH.abstract}</p>
              <a href={RESEARCH.link} target="_blank" rel="noopener noreferrer" className="brutal-btn brutal-btn-sm">
                Read Paper <ArrowUpRight size={13} />
              </a>
            </article>

            <div className="grid sm:grid-cols-2 gap-3">
              {ACHIEVEMENTS_DATA.map((a) => (
                <ScrollReveal key={a.id} variant="fadeUp">
                  <div className="brutal-card-static" style={{ padding: '1rem' }}>
                    <div className="flex items-start gap-2.5">
                      <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--yellow)', border: '2px solid var(--border)', color: 'var(--border)' }}>
                        <Trophy size={14} />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5" style={{ marginBottom: '2px' }}>
                          <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.75rem', color: 'var(--black)' }}>{a.title}</h4>
                          <span style={{ fontSize: '0.625rem', color: '#888' }}>{a.date}</span>
                        </div>
                        <p style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--blue)', marginBottom: '0.2rem' }}>{a.organization}</p>
                        <p style={{ fontSize: '0.6875rem', color: '#555', lineHeight: 1.55 }}>{a.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* ═══ CTA ═══ */}
        <ScrollReveal variant="fadeUp" viewportMargin="-60px">
          <div className="brutal-card-dark text-center" style={{ padding: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.125rem, 2.5vw, 1.75rem)', color: 'var(--bg)', marginBottom: '0.5rem' }}>
              Want to work together?
            </h2>
            <p style={{ color: '#888', fontSize: '0.8125rem', maxWidth: '26rem', margin: '0 auto 1.25rem' }}>
              Open to freelance contracts, AI automation projects, and full-stack builds.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <MagneticButton strength={0.2}>
                <Link to="/projects" className="brutal-btn">View Builds <ArrowUpRight size={15} /></Link>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <Link to="/contact" className="brutal-btn-outline" style={{ borderColor: '#555', color: 'var(--bg)' }}>Get in Touch <ArrowUpRight size={15} /></Link>
              </MagneticButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </article>
  );
};

export default About;
