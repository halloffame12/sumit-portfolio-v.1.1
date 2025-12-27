
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[10000] transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-[#00ff66]/10 py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group relative z-[10001]">
            <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg group-hover:border-[#00ff66]/40 group-hover:shadow-[0_0_15px_rgba(0,255,102,0.2)] transition-all duration-300">
              <Terminal size={22} className="text-[#00ff66]" />
            </div>
            <span className="font-tech text-xl sm:text-2xl font-bold tracking-tighter uppercase">
              Sumit<span className="text-[#00ff66] neon-glow">.Dev</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative py-2 text-xs font-tech font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:text-[#00ff66] ${
                  isActive(link.path) ? 'text-[#00ff66]' : 'text-gray-400'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.span 
                    layoutId="active-nav-line"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#00ff66] shadow-[0_0_10px_#00ff66]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden relative z-[10001] p-2 text-white hover:text-[#00ff66] transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center space-y-8"
          >
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Link
                  to={link.path}
                  className={`text-2xl font-tech font-bold uppercase tracking-[0.2em] ${
                    isActive(link.path) ? 'text-[#00ff66] neon-glow scale-105' : 'text-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
