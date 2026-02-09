import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import { ExternalLink, ArrowUpRight, Folder, GitBranch } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 pb-24 relative overflow-hidden">
      
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#00ff66]/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-purple-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#00ff66] text-sm font-medium tracking-wider uppercase mb-4">Portfolio</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Featured<br />
            <span className="text-white/40">projects.</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl">
            A collection of systems, applications, and experiments that showcase my technical expertise and problem-solving approach.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-8 mb-16 pb-8 border-b border-white/5"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#00ff66]/10 rounded-lg">
              <Folder size={18} className="text-[#00ff66]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{PROJECTS_DATA.length}</p>
              <p className="text-xs text-white/40">Projects</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <GitBranch size={18} className="text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">500+</p>
              <p className="text-xs text-white/40">Commits</p>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {PROJECTS_DATA.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="group"
            >
              <a 
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 md:p-8 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-[#00ff66]/20 transition-all duration-500"
              >
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  
                  {/* Image */}
                  <div className="md:col-span-5 relative overflow-hidden rounded-xl aspect-video bg-neutral-900">
                    <img 
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full">
                      <span className="text-xs text-[#00ff66] font-medium">{project.category}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:col-span-7 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-[#00ff66] transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight 
                        size={20} 
                        className="text-white/30 group-hover:text-[#00ff66] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" 
                      />
                    </div>
                    
                    <p className="text-white/50 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.slice(0, 5).map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-xs bg-white/5 text-white/60 rounded-full border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 5 && (
                        <span className="px-3 py-1 text-xs bg-white/5 text-white/40 rounded-full">
                          +{project.techStack.length - 5} more
                        </span>
                      )}
                    </div>
                    
                    {/* Role */}
                    <p className="text-xs text-white/30 pt-2">
                      Role: <span className="text-white/50">{project.role}</span>
                    </p>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-white/40 mb-6">Want to see more or collaborate?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://github.com/halloffame12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white font-medium rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <ExternalLink size={16} />
              View GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
