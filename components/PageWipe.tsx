import React from 'react';
import { motion } from 'framer-motion';

const PageWipe: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
      <motion.div
        aria-hidden="true"
        style={{ position: 'fixed', inset: 0, zIndex: 9998, background: 'var(--black)', pointerEvents: 'none' }}
        initial={{ x: '100%' }}
        animate={{ x: '100%' }}
        exit={{ x: 0 }}
        transition={{ duration: 0.28, ease: [0.65, 0, 0.35, 1] }}
      />
    </>
  );
};

export default PageWipe;