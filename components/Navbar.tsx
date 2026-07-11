import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Download, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Magnetic: React.FC<{ children: React.ReactNode; strength?: number }> = ({ children, strength = 0.3 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * strength,
      y: (e.clientY - rect.top - rect.height / 2) * strength,
    });
  };

  const onLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      style={{ display: 'inline-flex' }}
    >
      {children}
    </motion.div>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setIsOpen(false); document.body.style.overflow = ''; }
    };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, []);

  const toggle = () => {
    setIsOpen(p => !p);
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  };

  const links = [
    { name: 'Work', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-[100]"
        style={{
          background: scrolled ? 'var(--bg-main)' : 'transparent',
          borderBottom: scrolled ? 'var(--border-w) solid var(--border)' : 'none',
          transition: 'background 0.3s, border 0.3s',
        }}
      >
        <div className="page-container">
          <div className="flex items-center justify-between" style={{ height: '64px' }}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group" style={{ textDecoration: 'none' }}>
              <div
                className="flex items-center justify-center"
                style={{
                  width: '36px', height: '36px',
                  background: 'var(--accent-orange)',
                  border: 'var(--border-w) solid var(--border)',
                  boxShadow: '3px 3px 0px var(--border)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 900, fontSize: '1.1rem',
                  color: 'var(--border)',
                  transition: 'transform 0.15s',
                }}
              >
                S
              </div>
              <span
                className="hidden sm:block"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800, fontSize: '1rem',
                  letterSpacing: '-0.03em',
                  color: 'var(--text-primary)',
                }}
              >
                SUMIT<span style={{ color: 'var(--accent-orange)' }}>.</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {links.map(link => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative ${isActive(link.path) ? 'text-[var(--accent-orange)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
                    style={{
                      padding: '0.4rem 1rem',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '0.8125rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      transition: 'color 0.2s',
                    }}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="nav-indicator"
                      style={{
                        position: 'absolute', bottom: '-2px', left: '1rem', right: '1rem',
                        height: '3px', background: 'var(--accent-orange)',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Magnetic strength={0.2}>
                <a
                  href="/resume.pdf"
                  download
                  className="brutal-btn-outline brutal-btn-sm"
                >
                  <Download size={14} />
                  Resume
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Link to="/contact" className="brutal-btn brutal-btn-sm">
                  Hire Me
                  <ArrowUpRight size={14} />
                </Link>
              </Magnetic>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={toggle}
              className="lg:hidden flex items-center justify-center"
              style={{
                width: '44px', height: '44px',
                border: 'var(--border-w-sm) solid var(--border)',
                background: isOpen ? 'var(--accent-orange)' : 'var(--bg-card)',
                boxShadow: '3px 3px 0px var(--border)',
                color: 'var(--border)',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[99] lg:hidden"
          >
            <div
              className="absolute inset-0"
              style={{ background: 'var(--bg-main)', opacity: 0.98 }}
              onClick={toggle}
            />
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="relative h-full flex flex-col items-center justify-center gap-8 p-8"
            >
              {[{ name: 'Home', path: '/' }, ...links].map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + i * 0.05, type: 'spring', stiffness: 200, damping: 20 }}
                >
                  <Link
                    to={link.path}
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 900,
                      fontSize: '2.5rem',
                      letterSpacing: '-0.04em',
                      color: isActive(link.path) ? 'var(--accent-orange)' : 'var(--text-primary)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="flex gap-3 mt-4"
              >
                <a href="/resume.pdf" download className="brutal-btn-outline">
                  <Download size={16} /> Resume
                </a>
                <Link to="/contact" className="brutal-btn">
                  Hire Me <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
