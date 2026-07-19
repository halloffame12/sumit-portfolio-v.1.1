import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SPRING_SNAPPY } from '../types';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: 'fadeUp' | 'clipReveal' | 'scaleIn' | 'slideLeft' | 'slideRight';
  delay?: number;
  className?: string;
  viewportMargin?: string;
  style?: React.CSSProperties;
}

const variants: Record<string, Variants> = {
  fadeUp: {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: SPRING_SNAPPY },
  },
  clipReveal: {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    show: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  },
  scaleIn: {
    hidden: { scale: 0.9, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: SPRING_SNAPPY },
  },
  slideLeft: {
    hidden: { x: -40, opacity: 0 },
    show: { x: 0, opacity: 1, transition: SPRING_SNAPPY },
  },
  slideRight: {
    hidden: { x: 40, opacity: 0 },
    show: { x: 0, opacity: 1, transition: SPRING_SNAPPY },
  },
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  className = '',
  viewportMargin = '-60px',
  style,
}) => {
  return (
    <motion.div
      variants={variants[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: viewportMargin }}
      transition={delay ? { delay } : undefined}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
