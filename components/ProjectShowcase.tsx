import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../types';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { SPRING_CARD } from '../types';

interface ProjectShowcaseProps {
  projects: Project[];
  showFeatured?: boolean;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projects, showFeatured = true }) => {
  const [active, setActive] = useState<Project | null>(null);

  const list = projects;
  if (list.length === 0) return null;

  const [featured, ...rest] = list;
  const wide = showFeatured ? rest.slice(0, 2) : rest.slice(0, 3);
  const grid = showFeatured ? rest.slice(2) : rest.slice(3);

  return (
    <>
      <div className="flex flex-col gap-3">
        {showFeatured && featured && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={SPRING_CARD}>
            <ProjectCard project={featured} variant="featured" index={0} onOpen={setActive} />
          </motion.div>
        )}

        {wide.length > 0 && (
          <div className="grid md:grid-cols-2 gap-3">
            {wide.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...SPRING_CARD, delay: i * 0.06 }}>
                <ProjectCard project={p} variant="wide" index={i + 1} onOpen={setActive} />
              </motion.div>
            ))}
          </div>
        )}

        {grid.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {grid.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...SPRING_CARD, delay: i * 0.04 }}>
                <ProjectCard project={p} variant="default" index={i + (showFeatured ? 3 : 3)} onOpen={setActive} />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  );
};

export default ProjectShowcase;
