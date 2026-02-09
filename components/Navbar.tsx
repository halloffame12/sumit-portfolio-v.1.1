import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Research', path: '/research' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[#00ff66] flex items-center justify-center">
              <span className="text-black font-bold text-sm">S</span>
            </div>
            <span className="font-semibold text-white">
              Sumit<span className="text-[#00ff66]">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive(link.path) 
                    ? 'text-[#00ff66]' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div 
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#00ff66] rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Link 
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-[#00ff66] text-black text-sm font-semibold rounded-lg hover:bg-[#00ff66]/90 transition-colors"
          >
            Let's Talk
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 text-white hover:text-[#00ff66] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[99] bg-black lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 pt-20">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`text-2xl font-semibold ${
                      isActive(link.path) ? 'text-[#00ff66]' : 'text-white/80'
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
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
