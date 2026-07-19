import React, { Suspense, lazy, useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { MotionConfig, AnimatePresence, motion } from 'framer-motion';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'var(--black)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '1.5rem',
      }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.1 }}
        style={{
          width: '64px', height: '64px',
          background: 'var(--blue)',
          border: '3px solid var(--border)',
          boxShadow: '6px 6px 0px var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)', fontSize: '1.5rem',
          color: '#FFF',
        }}
      >
        S
      </motion.div>
      <div style={{ width: '120px', height: '3px', background: 'rgba(255,255,255,0.1)', overflow: 'hidden' }}>
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          style={{ width: '100%', height: '100%', background: 'var(--blue)' }}
        />
      </div>
    </motion.div>
  );
};

const PageLoader = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
    <div style={{
      width: '32px', height: '32px',
      border: '3px solid var(--border)',
      borderTopColor: 'var(--blue)',
      animation: 'spin 0.6s linear infinite',
    }} />
  </div>
);

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <HelmetProvider>
      <MotionConfig reducedMotion="user">
        <AnimatePresence>
          {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        {!loading && (
          <Router>
            <ScrollToTop />
            <div
              className="min-h-screen w-full flex flex-col overflow-x-hidden antialiased"
              style={{ background: 'var(--bg)', color: 'var(--black)' }}
            >
              <Navbar />
              <main id="main-content" className="flex-grow relative" role="main">
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          </Router>
        )}
      </MotionConfig>
    </HelmetProvider>
  );
};

export default App;
