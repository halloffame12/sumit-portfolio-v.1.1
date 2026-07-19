import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  strength = 0.3,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const posX = useMotionValue(0);
  const posY = useMotionValue(0);
  const x = useSpring(posX, { stiffness: 400, damping: 20, mass: 0.1 });
  const y = useSpring(posY, { stiffness: 400, damping: 20, mass: 0.1 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    posX.set((e.clientX - rect.left - rect.width / 2) * strength);
    posY.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const onLeave = () => {
    posX.set(0);
    posY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ display: 'inline-flex', x, y }}
    >
      <div className={className}>{children}</div>
    </motion.div>
  );
};

export default MagneticButton;
