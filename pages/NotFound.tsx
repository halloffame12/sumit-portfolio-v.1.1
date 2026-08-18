import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { SPRING_BOUNCY } from '../types';
import SeoHelmet from '../components/SeoHelmet';
import { InkArrow, InkStar, InkStroke } from '../components/Ink';

const NotFound: React.FC = () => {
  return (
    <article className="page-shell flex items-center" style={{ height: '100svh', paddingTop: 0 }}>
      <SeoHelmet path="/404" title="404 — Page Not Found | Sumit Chauhan" description="This page does not exist." />
      <div className="page-container">
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-center" style={{ maxWidth: '46rem', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center gap-3 flex-wrap" style={{ marginBottom: '0.875rem' }}>
              <span className="brutal-badge" style={{ padding: '0.3rem 0.7rem', background: 'var(--black)', color: 'var(--bg)' }}>PAGE NOT FOUND</span>
              <span className="ink-page-chip">404</span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4rem, 18vw, 10rem)',
              lineHeight: 0.8, letterSpacing: '-0.06em',
              color: 'var(--black)', marginBottom: '0.75rem',
            }}>
              404
            </h1>
            <div style={{ width: '140px', marginBottom: '0.875rem' }}>
              <InkStroke kind="scratch" width="100%" height={10} />
            </div>

            <p style={{ color: 'var(--ink-soft)', fontSize: '0.875rem', marginBottom: '1.5rem', maxWidth: '20rem' }}>
              This address doesn't resolve. The page was either moved or never existed.
            </p>

            <Link to="/" className="brutal-btn">
              <ArrowLeft size={14} /> Back to the cover
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ ...SPRING_BOUNCY, delay: 0.3 }}
            className="hidden lg:flex flex-col items-center gap-3"
          >
            <div className="relative" style={{ border: 'var(--bw) solid var(--border)', boxShadow: 'var(--sh)', background: 'var(--bg-card)', padding: '1.25rem 1.5rem', transform: 'rotate(2deg)' }}>
              <span className="font-ink" style={{ fontSize: '1.6rem', color: 'var(--black)' }}>you look lost?</span>
              <div style={{ marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <span className="font-ink" style={{ fontSize: '1.2rem', color: 'var(--ink-faint)' }}>back to the start</span>
                <InkArrow variant="curved" width={52} height={28} strokeWidth={2.5} style={{ color: 'var(--black)' }} />
              </div>
              <span aria-hidden="true" style={{ position: 'absolute', top: '-14px', right: '-10px', color: 'var(--ink-faint)', opacity: 0.7, transform: 'rotate(12deg)' }}>
                <InkStar width={22} height={22} />
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </article>
  );
};

export default NotFound;
