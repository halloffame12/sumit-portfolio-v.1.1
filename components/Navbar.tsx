import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Download, Github, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { InkStroke } from './Ink';
import { PROFILE } from '../data/profile';

const NAV_LINKS = [
  { n: '04', name: 'Work', path: '/projects' },
  { n: '08', name: 'About', path: '/about', anchor: 'person' },
  { n: '07', name: 'Journey', path: '/about', anchor: 'journey' },
  { n: '09', name: 'Contact', path: '/contact' },
];

const MENU_LINKS = [
  { n: '00', name: 'Cover', path: '/' },
  ...NAV_LINKS,
];

const PREFETCH: Record<string, () => Promise<unknown>> = {
  '/': () => import('../pages/Home'),
  '/projects': () => import('../pages/Projects'),
  '/about': () => import('../pages/About'),
  '/contact': () => import('../pages/Contact'),
};

const prefetchOnInteract = (path: string) => {
  PREFETCH[path]?.().catch(() => {});
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPill, setShowPill] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 48);
      const doc = document.documentElement;
      const nearBottom = y + window.innerHeight >= doc.scrollHeight - 160;
      setShowPill(y > 48 && !nearBottom);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); document.body.style.overflow = ''; }, [location]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setIsOpen(false); document.body.style.overflow = ''; }
    };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, []);

  const toggle = () => {
    setIsOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : '';
      return !prev;
    });
  };

  const isActive = (path: string) => location.pathname === path;

  const goToSection = useCallback((path: string, anchor?: string) => {
    if (!anchor) { navigate(path); return; }
    const scrollToId = () => {
      const el = document.getElementById(anchor);
      if (el) {
        window.setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
      }
    };
    if (location.pathname === path) {
      scrollToId();
    } else {
      navigate(path, { state: { scrollTo: anchor } });
    }
  }, [location.pathname, navigate]);

  return (
    <>
      {/* ── reading progress — the ink line at the very top ── */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-[120]"
        style={{ scaleX: progress, transformOrigin: '0% 0%', height: '3px', background: 'var(--black)' }}
      />

      {/* ── Editorial header — full index (folds away on scroll) ── */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
        className="fixed top-0 left-0 right-0 z-[100]"
        style={{
          background: 'var(--bg)',
          borderBottom: 'var(--bw) solid var(--border)',
          boxShadow: scrolled ? 'var(--sh-sm)' : 'none',
          transition: 'box-shadow 0.2s',
        }}
      >
        <motion.div
          animate={{
            height: scrolled ? 0 : 68,
            opacity: scrolled ? 0 : 1,
            pointerEvents: scrolled ? 'none' : 'auto',
          }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ overflow: 'hidden' }}
        >
          <div className="page-container">
            <div className="flex items-center justify-between" style={{ height: '68px' }}>
              <Link to="/" className="flex items-center gap-2.5 group" aria-label="Sumit Chauhan — Home">
                <div
                  className="group-hover:rotate-[-5deg]"
                  style={{
                    width: '38px', height: '38px',
                    background: 'var(--black)',
                    border: 'var(--bw) solid var(--border)',
                    boxShadow: '3px 3px 0px var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontSize: '1.05rem',
                    color: 'var(--bg)', transition: 'transform 0.15s',
                  }}
                >S</div>
                <span style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.1rem',
                  letterSpacing: '-0.02em', color: 'var(--black)', lineHeight: 1,
                }}>
                  SUMIT<span className="font-ink" style={{ fontSize: '1.4rem', fontWeight: 700 }}>.</span>
                </span>
                <span className="hidden md:inline-block font-ink" style={{ marginLeft: '6px', fontSize: '1.05rem', color: 'var(--ink-faint)', transform: 'rotate(-2deg)' }}>
                  — open for SDE intern roles
                </span>
              </Link>

              <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
                {NAV_LINKS.map(link => (
                  <button
                    key={`${link.path}-${link.name}`}
                    type="button"
                    onClick={() => goToSection(link.path, link.anchor)}
                    onMouseEnter={() => prefetchOnInteract(link.path)}
                    onFocus={() => prefetchOnInteract(link.path)}
                    className={`relative ink-underline ${isActive(link.path) ? 'is-active' : ''} hover:!bg-[var(--black)] hover:!text-[var(--bg)]`}
                    style={{
                      display: 'flex', alignItems: 'baseline', gap: '6px',
                      padding: '0.35rem 0.75rem',
                      fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8125rem',
                      textTransform: 'uppercase', letterSpacing: '0.05em',
                      color: isActive(link.path) ? 'var(--black)' : 'var(--ink-faint)',
                      transition: 'background 0.12s, color 0.12s', background: 'none', border: 'none', cursor: 'pointer',
                    }}
                  >
                    <span className="font-mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.1em' }}>{link.n}</span>
                    {link.name}
                    {isActive(link.path) && (
                      <motion.span
                        layoutId="nav-ink-underline"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        style={{ position: 'absolute', bottom: '2px', left: '0.75rem', right: '0.75rem', display: 'block' }}
                      >
                        <InkStroke width="100%" height={8} />
                      </motion.span>
                    )}
                  </button>
                ))}
              </nav>

              <div className="hidden lg:flex items-center gap-2.5">
                <MagneticButton strength={0.2}>
                  <a href={PROFILE.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="brutal-btn-outline brutal-btn-sm">
                    <Github size={14} /> GitHub
                  </a>
                </MagneticButton>
                <MagneticButton strength={0.2}>
                  <a href="/resume.pdf" download className="brutal-btn-outline brutal-btn-sm">
                    <Download size={13} /> Resume
                  </a>
                </MagneticButton>
                <MagneticButton strength={0.2}>
                  <Link to="/contact" className="brutal-btn brutal-btn-sm">
                    Hire Me <ArrowUpRight size={13} />
                  </Link>
                </MagneticButton>
              </div>

              <button
                onClick={toggle}
                className="lg:hidden flex items-center justify-center"
                style={{
                  width: '40px', height: '40px',
                  border: 'var(--bw-sm) solid var(--border)',
                  background: isOpen ? 'var(--black)' : 'var(--bg-card)',
                  boxShadow: '3px 3px 0px var(--border)',
                  color: isOpen ? 'var(--bg)' : 'var(--border)',
                  cursor: 'pointer', transition: 'all 0.1s',
                }}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* ── Floating ink pill — appears once you start reading ── */}
      <AnimatePresence>
        {showPill && (
          <motion.div
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -70, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            className="fixed top-0 left-0 right-0 z-[100] flex justify-center"
            style={{ padding: '12px 16px 0', pointerEvents: 'none' }}
            aria-label="Reading progress nav"
          >
            <div
              className="flex items-center gap-1.5"
              style={{
                pointerEvents: 'auto',
                background: 'var(--bg-card)',
                border: 'var(--bw) solid var(--border)',
                borderRadius: '999px',
                boxShadow: 'var(--sh-sm)',
                padding: '0.4rem 0.6rem',
                maxWidth: '100%',
                overflowX: 'auto',
              }}
            >
              <Link to="/" className="flex items-center justify-center" aria-label="Home" style={{
                width: '28px', height: '28px', flexShrink: 0,
                background: 'var(--black)', color: 'var(--bg)',
                fontFamily: 'var(--font-display)', fontSize: '0.875rem',
                borderRadius: '999px',
              }}>
                S
              </Link>
              {NAV_LINKS.map(link => (
                <button
                  key={`${link.path}-${link.name}`}
                  type="button"
                  onClick={() => goToSection(link.path, link.anchor)}
                  onMouseEnter={() => prefetchOnInteract(link.path)}
                  onFocus={() => prefetchOnInteract(link.path)}
                  className="font-mono"
                  style={{
                    fontSize: '0.5625rem', fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '0.08em', color: isActive(link.path) ? 'var(--bg)' : 'var(--ink-faint)',
                    background: isActive(link.path) ? 'var(--black)' : 'transparent',
                    border: 'var(--bw-sm) solid transparent',
                    padding: '0.25rem 0.55rem', borderRadius: '999px',
                    cursor: 'pointer', whiteSpace: 'nowrap',
                    transition: 'background 0.12s, color 0.12s',
                  }}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={toggle}
                className="lg:hidden flex items-center justify-center"
                style={{
                  width: '28px', height: '28px', flexShrink: 0,
                  border: 'var(--bw-sm) solid var(--border)', borderRadius: '999px',
                  background: 'var(--bg-card)', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={14} /> : <Menu size={14} />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu — full notebook page */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[99] lg:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 400, damping: 34 }}
              className="sheet-lined absolute inset-0 flex flex-col"
              style={{ background: 'var(--bg-card)' }}
            >
              <div className="flex items-center justify-between" style={{ padding: '0.75rem 1.25rem', borderBottom: 'var(--bw) solid var(--border)' }}>
                <div className="flex items-center gap-2">
                  <span className="ink-page-chip">INDEX</span>
                  <span className="font-ink" style={{ fontSize: '1.15rem', color: 'var(--ink-faint)' }}>open for SDE intern roles</span>
                </div>
                <button
                  onClick={toggle}
                  style={{ width: '36px', height: '36px', border: 'var(--bw-sm) solid var(--border)', background: 'var(--bg)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center gap-1 px-6" aria-label="Mobile primary">
                {MENU_LINKS.map((link, i) => (
                  <motion.div
                    key={`${link.path}-${link.name}`}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.05, type: 'spring', stiffness: 500, damping: 24 }}
                  >
                    <button
                      type="button"
                      onClick={() => { setIsOpen(false); document.body.style.overflow = ''; goToSection(link.path, link.anchor); }}
                      onMouseEnter={() => prefetchOnInteract(link.path)}
                      onFocus={() => prefetchOnInteract(link.path)}
                      className={`flex items-baseline gap-3 ink-underline ${isActive(link.path) ? 'is-active' : ''}`}
                      style={{
                        padding: '0.35rem 0',
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2rem, 9vw, 2.75rem)',
                        letterSpacing: '-0.03em',
                        color: 'var(--black)',
                        textTransform: 'uppercase',
                        borderBottom: i === MENU_LINKS.length - 1 ? 'none' : 'var(--bw-sm) solid var(--border)',
                        background: 'none', borderTop: 'none', borderLeft: 'none', borderRight: 'none',
                        width: '100%', textAlign: 'left', cursor: 'pointer', lineHeight: 1.2,
                      }}
                    >
                      <span className="font-mono" style={{ fontSize: '0.8125rem', letterSpacing: '0.1em', color: 'var(--ink-faint)' }}>{link.n}</span>
                      {link.name}
                    </button>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ padding: '1.25rem', borderTop: 'var(--bw) solid var(--border)' }}
              >
                <div className="flex gap-2.5">
                  <a href="/resume.pdf" download className="brutal-btn-outline" style={{ flex: 1 }}>
                    <Download size={15} /> Resume
                  </a>
                  <Link to="/contact" className="brutal-btn" style={{ flex: 1 }}>
                    Hire Me <ArrowUpRight size={15} />
                  </Link>
                </div>
                <div className="flex items-center justify-center gap-2" style={{ marginTop: '0.75rem' }}>
                  <a href={PROFILE.githubUrl} target="_blank" rel="noopener noreferrer" className="brutal-badge" style={{ gap: '0.3rem' }}>
                    <Github size={11} /> halloffame12
                  </a>
                  <a href={`mailto:${PROFILE.email}`} className="brutal-badge" style={{ gap: '0.3rem' }}>
                    <Mail size={11} /> Email
                  </a>
                </div>
                <p className="font-ink" style={{ marginTop: '0.75rem', fontSize: '1.1rem', color: 'var(--ink-faint)', textAlign: 'center' }}>
                  see something you like? let's talk →
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
