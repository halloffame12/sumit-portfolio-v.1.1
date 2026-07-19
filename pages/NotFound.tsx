import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { SPRING_BOUNCY } from '../types';
import SeoHelmet from '../components/SeoHelmet';
import PeepIllustration from '../components/PeepIllustration';

const NotFound: React.FC = () => {
  return (
    <article className="page-shell flex items-center" style={{ height: '100svh', paddingTop: 0 }}>
      <SeoHelmet path="/404" title="404 \u2014 Page Not Found | Sumit Chauhan" description="This page does not exist." />
      <div className="page-container">
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-center" style={{ maxWidth: '46rem', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ rotate: -12, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.1, ...SPRING_BOUNCY }}
              className="inline-flex items-center gap-2"
              style={{
                padding: '0.5rem 1rem',
                background: 'var(--yellow)',
                border: 'var(--bw) solid var(--border)',
                boxShadow: 'var(--sh)',
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: 900, fontSize: '0.75rem',
                color: 'var(--black)',
                textTransform: 'uppercase', letterSpacing: '0.06em',
              }}
            >
              <AlertTriangle size={16} aria-hidden="true" />
              PAGE NOT FOUND
            </motion.div>

            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4rem, 18vw, 10rem)',
              lineHeight: 0.8, letterSpacing: '-0.06em',
              color: 'var(--black)', marginBottom: '0.75rem',
            }}>
              404
            </h1>

            <p style={{ color: '#555', fontSize: '0.875rem', marginBottom: '1.5rem', maxWidth: '20rem' }}>
              This address doesn't resolve. The page was either moved or never existed.
            </p>

            <Link to="/" className="brutal-btn">
              <ArrowLeft size={14} />
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ ...SPRING_BOUNCY, delay: 0.3 }}
            className="hidden lg:flex flex-col items-center gap-3"
          >
            <div style={{
              border: 'var(--bw) solid var(--border)',
              boxShadow: 'var(--sh)',
              background: 'var(--cream)',
              padding: '1.25rem',
              transform: 'rotate(2deg)',
            }}>
              <PeepIllustration pose="thinking" colors={{ outfit: 'var(--yellow)' }} size={140} animate />
            </div>
            <span className="brutal-sticker" style={{ transform: 'rotate(-5deg)' }}>
              Lost?
            </span>
          </motion.div>
        </div>
      </div>
    </article>
  );
};

export default NotFound;
