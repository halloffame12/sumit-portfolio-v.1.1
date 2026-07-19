import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Download, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';

const NAV_LINKS = [
  { name: 'Builds', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
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

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
        className="fixed top-0 left-0 right-0 z-[100]"
        style={{
          background: scrolled ? 'var(--bg)' : 'transparent',
          borderBottom: scrolled ? 'var(--bw) solid var(--border)' : 'none',
          transition: 'background 0.2s, border 0.2s',
        }}
      >
        <div className="page-container">
          <div className="flex items-center justify-between" style={{ height: '60px' }}>
            <Link to="/" className="flex items-center gap-2 group">
              <div
                className="group-hover:rotate-[-4deg]"
                style={{
                  width: '34px', height: '34px',
                  background: 'var(--blue)',
                  border: 'var(--bw) solid var(--border)',
                  boxShadow: '3px 3px 0px var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontSize: '1rem',
                  color: '#FFF', transition: 'transform 0.15s',
                }}
              >S</div>
              <span className="hidden sm:block" style={{
                fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.9375rem',
                letterSpacing: '-0.03em', color: 'var(--black)',
              }}>
                SUMIT<span style={{ color: 'var(--blue)' }}>.</span>
              </span>
              <span className="hidden md:flex items-center gap-1.5" style={{
                marginLeft: '4px', padding: '2px 8px',
                background: 'var(--cream)', border: '1px solid var(--border)',
                borderRadius: '999px', fontSize: '0.5625rem', fontWeight: 700,
                fontFamily: 'var(--font-heading)', textTransform: 'uppercase',
                letterSpacing: '0.06em', color: '#999',
              }}>
                <span className="animate-pulse-dot" style={{
                  width: '5px', height: '5px', borderRadius: '50%',
                  background: '#00CC66', display: 'inline-block',
                }} />
                Available
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative ${isActive(link.path) ? 'text-[var(--blue)]' : 'text-[#666] hover:text-[var(--black)]'}`}
                  style={{
                    padding: '0.35rem 0.875rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700, fontSize: '0.8125rem',
                    textTransform: 'uppercase', letterSpacing: '0.05em',
                    transition: 'color 0.15s',
                  }}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="nav-indicator"
                      style={{ position: 'absolute', bottom: '-1px', left: '0.875rem', right: '0.875rem', height: '3px', background: 'var(--blue)' }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-2">
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
                background: isOpen ? 'var(--blue)' : 'var(--bg-card)',
                boxShadow: '3px 3px 0px var(--border)',
                color: isOpen ? '#FFF' : 'var(--border)',
                cursor: 'pointer', transition: 'all 0.1s',
              }}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[99] lg:hidden"
          >
            <div className="absolute inset-0" style={{ background: 'var(--bg)' }} onClick={toggle} />
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25, delay: 0.03 }}
              className="relative h-full flex flex-col items-center justify-center gap-8 p-8"
            >
              {[{ name: 'Home', path: '/' }, ...NAV_LINKS].map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 + i * 0.04, type: 'spring', stiffness: 500, damping: 22 }}
                >
                  <Link
                    to={link.path}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2.25rem',
                      letterSpacing: '-0.04em',
                      color: isActive(link.path) ? 'var(--blue)' : 'var(--black)',
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
                transition={{ delay: 0.25, type: 'spring', stiffness: 500, damping: 25 }}
                className="flex gap-3 mt-4"
              >
                <a href="/resume.pdf" download className="brutal-btn-outline">
                  <Download size={15} /> Resume
                </a>
                <Link to="/contact" className="brutal-btn">
                  Hire Me <ArrowUpRight size={15} />
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
