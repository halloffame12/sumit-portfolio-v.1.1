import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Github, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { InkStroke } from './Ink';
import { PROFILE } from '../data/profile';

/* ═══════════════════════════════════════════════════════════
   NAV CONFIG
   ═══════════════════════════════════════════════════════════ */

interface NavLink {
  n: string;
  name: string;
  path: string;
  anchor?: string;
}

const NAV_LINKS: NavLink[] = [
  { n: '04', name: 'Work', path: '/projects' },
  { n: '08', name: 'About', path: '/about', anchor: 'person' },
  { n: '09', name: 'Contact', path: '/contact' },
];

const MENU_LINKS: NavLink[] = [
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

/* ═══════════════════════════════════════════════════════════
   FOCUS TRAP HOOK — traps Tab inside an element
   ═══════════════════════════════════════════════════════════ */

function useFocusTrap(active: boolean, containerRef: React.RefObject<HTMLElement | null>) {
  const restoreRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active) return;

    restoreRef.current = document.activeElement as HTMLElement;

    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !containerRef.current) return;
      const focusable = containerRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };

    const frame = requestAnimationFrame(() => {
      const el = containerRef.current;
      if (!el) return;
      const first = el.querySelector<HTMLElement>(
        'button, a[href], [tabindex]:not([tabindex="-1"])'
      );
      first?.focus();
    });

    document.addEventListener('keydown', trap);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('keydown', trap);
      restoreRef.current?.focus();
    };
  }, [active, containerRef]);
}

/* ═══════════════════════════════════════════════════════════
   NAVBAR COMPONENT
   ═══════════════════════════════════════════════════════════ */

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 30, restDelta: 0.001 });

  useFocusTrap(isOpen, menuRef);

  /* ── scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── close on route change ── */
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  /* ── escape to close ── */
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        document.body.style.overflow = '';
        triggerRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [isOpen]);

  /* ── lock body scroll when menu open ── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const toggle = () => setIsOpen(prev => !prev);

  const isActive = (path: string) => location.pathname === path;

  const goToSection = useCallback((path: string, anchor?: string) => {
    if (!anchor) { navigate(path); return; }
    if (location.pathname === path) {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate(path, { state: { scrollTo: anchor } });
    }
  }, [location.pathname, navigate]);

  return (
    <>
      {/* ── skip link ── */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      {/* ── reading progress bar ── */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-[120]"
        style={{ scaleX: progress, transformOrigin: '0% 0%', height: '3px', background: 'var(--black)' }}
      />

      {/* ── header ── */}
      <motion.header
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
        className="fixed top-0 left-0 right-0 z-[100]"
        style={{
          height: '60px',
          background: scrolled ? 'var(--bg)' : 'transparent',
          borderBottom: scrolled ? 'var(--bw) solid var(--border)' : '1px solid transparent',
          boxShadow: scrolled ? 'var(--sh-sm)' : 'none',
          transition: 'background 0.25s, box-shadow 0.25s, border-color 0.25s',
        }}
      >
        <div className="page-container" style={{ height: '100%' }}>
          <div className="flex items-center justify-between" style={{ height: '60px' }}>

            {/* ── brand ── */}
            <Link to="/" className="flex items-center gap-2 group" aria-label="Sumit Chauhan - Home">
              <div
                className="group-hover:rotate-[-5deg]"
                style={{
                  width: '36px', height: '36px',
                  background: 'var(--black)',
                  border: 'var(--bw) solid var(--border)',
                  boxShadow: '3px 3px 0px var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontSize: '1rem',
                  color: 'var(--bg)', transition: 'transform 0.15s',
                  flexShrink: 0,
                }}
              >S</div>
              <span style={{
                fontFamily: 'var(--font-display)', fontSize: '1.1rem',
                letterSpacing: '-0.02em', color: 'var(--black)', lineHeight: 1,
              }}>
                SUMIT<span className="font-ink" style={{ fontSize: '1.3rem', fontWeight: 700 }}>.</span>
              </span>
              <span
                className="hidden md:inline-block font-ink"
                style={{
                  marginLeft: '6px', fontSize: '1rem',
                  color: 'var(--ink-faint)', transform: 'rotate(-2deg)',
                  opacity: scrolled ? 0 : 1,
                  transition: 'opacity 0.25s',
                  pointerEvents: scrolled ? 'none' : 'auto',
                  width: scrolled ? 0 : 'auto',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                }}
              >
                - open for SDE intern roles
              </span>
            </Link>

            {/* ── desktop nav ── */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
              {NAV_LINKS.map(link => (
                <MagneticButton key={`${link.path}-${link.name}`} strength={0.15}>
                  <button
                    type="button"
                    onClick={() => goToSection(link.path, link.anchor)}
                    onMouseEnter={() => prefetchOnInteract(link.path)}
                    onFocus={() => prefetchOnInteract(link.path)}
                    className={`relative ink-underline ${isActive(link.path) ? 'is-active' : ''}`}
                    aria-current={isActive(link.path) ? 'page' : undefined}
                    style={{
                      display: 'flex', alignItems: 'baseline', gap: '6px',
                      padding: '0.35rem 0.75rem',
                      fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8125rem',
                      textTransform: 'uppercase', letterSpacing: '0.05em',
                      color: isActive(link.path) ? 'var(--black)' : 'var(--ink-faint)',
                      background: 'none', border: 'none', cursor: 'pointer',
                      transition: 'color 0.12s',
                    }}
                  >
                    <span className="font-mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.1em' }}>{link.n}</span>
                    {link.name}
                    {isActive(link.path) && (
                      <motion.span
                        layoutId="nav-active"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        style={{ position: 'absolute', bottom: '2px', left: '0.75rem', right: '0.75rem', display: 'block' }}
                      >
                        <InkStroke width="100%" height={8} />
                      </motion.span>
                    )}
                  </button>
                </MagneticButton>
              ))}
            </nav>

            {/* ── desktop actions ── */}
            <div className="hidden lg:flex items-center gap-2.5">
              <MagneticButton strength={0.2}>
                <a href={PROFILE.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="brutal-btn-outline brutal-btn-sm">
                  <Github size={14} /> GitHub
                </a>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <Link to="/contact" className="brutal-btn brutal-btn-sm">
                  Hire Me <ArrowUpRight size={13} />
                </Link>
              </MagneticButton>
            </div>

            {/* ── mobile hamburger ── */}
            <button
              ref={triggerRef}
              onClick={toggle}
              className="lg:hidden flex items-center justify-center"
              style={{
                width: '40px', height: '40px',
                border: 'var(--bw-sm) solid var(--border)',
                background: isOpen ? 'var(--black)' : 'var(--bg-card)',
                boxShadow: '3px 3px 0px var(--border)',
                color: isOpen ? 'var(--bg)' : 'var(--border)',
                cursor: 'pointer', transition: 'all 0.1s',
                flexShrink: 0,
              }}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── mobile menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[110] lg:hidden"
            style={{ background: 'rgba(10, 10, 10, 0.15)' }}
            onMouseDown={(e) => { if (e.target === e.currentTarget) { setIsOpen(false); triggerRef.current?.focus(); } }}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 400, damping: 34 }}
              className="sheet-lined absolute inset-0 flex flex-col"
              style={{ background: 'var(--bg-card)' }}
            >
              {/* menu header */}
              <div className="flex items-center justify-between" style={{ padding: '0.75rem 1.25rem', borderBottom: 'var(--bw) solid var(--border)' }}>
                <div className="flex items-center gap-2">
                  <span className="ink-page-chip">INDEX</span>
                  <span className="font-ink" style={{ fontSize: '1.1rem', color: 'var(--ink-faint)' }}>open for SDE intern roles</span>
                </div>
                <button
                  onClick={() => { setIsOpen(false); triggerRef.current?.focus(); }}
                  style={{
                    width: '36px', height: '36px',
                    border: 'var(--bw-sm) solid var(--border)',
                    background: 'var(--bg)', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* menu links */}
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
                      onClick={() => { setIsOpen(false); goToSection(link.path, link.anchor); }}
                      onMouseEnter={() => prefetchOnInteract(link.path)}
                      onFocus={() => prefetchOnInteract(link.path)}
                      className={`flex items-baseline gap-3 ink-underline ${isActive(link.path) ? 'is-active' : ''}`}
                      aria-current={isActive(link.path) ? 'page' : undefined}
                      style={{
                        padding: '0.4rem 0',
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.8rem, 8vw, 2.5rem)',
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

              {/* menu footer */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ padding: '1.25rem', borderTop: 'var(--bw) solid var(--border)' }}
              >
                <div className="flex gap-2.5">
                  <a href="/resume.pdf" download className="brutal-btn-outline" style={{ flex: 1 }}>
                    Resume
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
