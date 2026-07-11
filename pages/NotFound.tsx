import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Terminal } from 'lucide-react';
import SeoHelmet from '../components/SeoHelmet';

const NotFound: React.FC = () => {
  return (
    <article className="page-shell flex items-center" style={{ minHeight: '70vh' }}>
      <SeoHelmet
        path="/404"
        title="404 — Page Not Found | Sumit Chauhan"
        description="This page does not exist. Navigate back to Sumit Chauhan's portfolio."
      />
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center"
          style={{ maxWidth: '36rem', margin: '0 auto' }}
        >
          {/* Error Badge */}
          <motion.div
            initial={{ rotate: -8, scale: 0.85 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-3"
            style={{
              padding: '0.75rem 1.5rem',
              background: 'var(--accent-orange)',
              border: 'var(--border-w) solid var(--border)',
              boxShadow: 'var(--shadow-brutal)',
              marginBottom: '2rem',
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              fontSize: '0.875rem',
              color: 'var(--border)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            <Terminal size={20} aria-hidden="true" />
            SEGFAULT
          </motion.div>

          {/* Big 404 */}
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(6rem, 25vw, 14rem)',
            fontWeight: 900,
            lineHeight: 0.8,
            letterSpacing: '-0.06em',
            color: 'var(--text-primary)',
            marginBottom: '1rem',
          }}>
            404
          </h1>

          {/* Fake terminal output */}
          <div
            className="text-left mx-auto"
            role="log" aria-label="Terminal error output"
            style={{
              maxWidth: '24rem',
              padding: '1.25rem',
              background: 'var(--bg-dark)',
              border: 'var(--border-w) solid var(--border)',
              boxShadow: 'var(--shadow-brutal)',
              marginBottom: '2rem',
              fontFamily: 'monospace',
              fontSize: '0.75rem',
              lineHeight: 1.8,
              color: 'var(--accent-green)',
            }}
          >
            <span style={{ color: 'var(--text-muted)' }} aria-hidden="true">$</span> GET {typeof window !== 'undefined' ? window.location.pathname : '/unknown'}<br />
            <span style={{ color: 'var(--accent-orange)' }} aria-hidden="true">Error:</span> <span style={{ color: 'var(--text-on-dark)' }}>Route not found in filesystem</span><br />
            <span style={{ color: 'var(--text-muted)' }} aria-hidden="true">$</span> <span className="animate-pulse" aria-hidden="true">█</span>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', marginBottom: '2rem', maxWidth: '22rem', margin: '0 auto 2rem' }}>
            This address doesn't resolve. The page was either moved or never existed.
          </p>

          <Link to="/" className="brutal-btn">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </article>
  );
};

export default NotFound;
