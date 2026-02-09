import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom Logo Component - Premium geometric S mark
const Logo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    {/* Background circle with gradient */}
    <circle cx="24" cy="24" r="22" fill="url(#logoBg)" />
    {/* S shape */}
    <path 
      d="M30 16H21C18.7909 16 17 17.7909 17 20C17 22.2091 18.7909 24 21 24H27C29.2091 24 31 25.7909 31 28C31 30.2091 29.2091 32 27 32H18" 
      stroke="black" 
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    {/* Accent dot */}
    <circle cx="33" cy="15" r="3" fill="black" />
    <defs>
      <linearGradient id="logoBg" x1="2" y1="2" x2="46" y2="46" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00ff66" />
        <stop offset="1" stopColor="#00dd55" />
      </linearGradient>
    </defs>
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
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
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Research', path: '/research' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Main Navbar */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-[100]"
      >
        <div className={`transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}>
          <nav className={`max-w-[1100px] mx-auto px-4 transition-all duration-500 ${
            scrolled ? 'mx-4 md:mx-auto' : ''
          }`}>
            <div className={`relative flex items-center justify-between h-14 px-4 md:px-6 transition-all duration-500 ${
              scrolled 
                ? 'bg-black/60 backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-xl shadow-black/20' 
                : ''
            }`}>
              
              {/* Logo */}
              <Link to="/" className="relative flex items-center gap-2.5 group z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#00ff66]/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <Logo className="w-9 h-9 transition-transform duration-300 group-hover:scale-105" />
                </div>
                <span className="hidden sm:block font-bold text-white text-[15px] tracking-tight">
                  Sumit<span className="text-[#00ff66]">.</span>
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-0.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="relative px-3.5 py-2 group"
                  >
                    <span className={`relative z-10 text-[13px] font-medium transition-all duration-300 ${
                      isActive(link.path) 
                        ? 'text-[#00ff66]' 
                        : 'text-white/50 group-hover:text-white'
                    }`}>
                      {link.name}
                    </span>
                    
                    {/* Active underline */}
                    {isActive(link.path) && (
                      <motion.div 
                        layoutId="navbar-underline"
                        className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-[#00ff66] rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover dot */}
                    {!isActive(link.path) && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <Link 
                to="/contact"
                className="hidden lg:flex items-center gap-1.5 px-4 py-2 bg-[#00ff66] rounded-xl text-black text-[13px] font-semibold hover:shadow-[0_0_24px_rgba(0,255,102,0.4)] transition-all duration-300 group"
              >
                <span>Let's Talk</span>
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMenu}
                className="lg:hidden relative w-10 h-10 flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <div className="relative w-5 h-3.5 flex flex-col justify-between">
                  <motion.span 
                    animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
                    className="block h-0.5 w-5 bg-white rounded-full origin-center"
                  />
                  <motion.span 
                    animate={{ opacity: isOpen ? 0 : 1, scaleX: isOpen ? 0 : 1 }}
                    className="block h-0.5 w-3 bg-white/60 rounded-full ml-auto"
                  />
                  <motion.span 
                    animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
                    className="block h-0.5 w-4 bg-white rounded-full origin-center"
                  />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] lg:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={toggleMenu} />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative h-full flex flex-col items-center justify-center gap-6 p-8"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`text-3xl font-semibold transition-colors ${
                      isActive(link.path) ? 'text-[#00ff66]' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#00ff66] text-black font-semibold rounded-xl"
                >
                  Let's Talk
                  <ArrowUpRight size={18} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
