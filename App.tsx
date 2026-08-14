import React, { Suspense, lazy, useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { MotionConfig, AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageWipe from './components/PageWipe';
import { InkStroke } from './components/Ink';


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

/* ── Error state: ink spilled ── */
class InkErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) {
      return (
        <div className="page-container" style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 8vw, 4rem)', color: 'var(--black)', lineHeight: 0.95 }}>INK SPILLED.</p>
          <p style={{ fontSize: '0.875rem', color: 'var(--ink-soft)', maxWidth: '24rem' }}>
            Something on this page ran off the page. Refresh to pick the pen back up.
          </p>
          <button onClick={() => window.location.reload()} className="brutal-btn">Refresh Page</button>
        </div>
      );
    }
    return (this as any).props.children;
  }
}

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1600);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="grain-overlay"
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'var(--bg)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '1rem',
      }}
    >
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 8vw, 4rem)', color: 'var(--black)', lineHeight: 0.9 }}>
        S<span className="font-ink" style={{ fontSize: '1.2em' }}>.</span>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        style={{ width: 'clamp(120px, 22vw, 220px)', transformOrigin: 'left' }}
      >
        <InkStroke kind="scratch" width="100%" height={10} />
      </motion.div>
      <p className="font-mono" style={{ fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--ink-faint)' }}>
        Drawing the data<span className="ink-cursor" style={{ color: 'var(--black)' }}>_</span>
      </p>
    </motion.div>
  );
};

const PageLoader = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
    <div style={{
      width: '32px', height: '32px',
      border: '3px solid var(--border)',
      borderTopColor: 'var(--bg-card)',
      animation: 'spin 0.6s linear infinite',
    }} />
  </div>
);

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <PageWipe key={location.pathname}>
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </PageWipe>
    </AnimatePresence>
  );
};

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
                <InkErrorBoundary>
                  <AnimatedRoutes />
                </InkErrorBoundary>
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
