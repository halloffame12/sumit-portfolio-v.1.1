import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import { ExternalLink, ArrowUpRight, Folder, Star, GitFork } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-32 relative overflow-hidden bg-black">
      
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#00ff66]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-purple-500/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#00ff66]/10 rounded-full border border-[#00ff66]/20 mb-6"
          >
            <svg viewBox="0 0 48 48" fill="none" className="w-4 h-4">
              <circle cx="24" cy="24" r="22" fill="#00ff66" />
              <path d="M30 16H21C18.79 16 17 17.79 17 20C17 22.21 18.79 24 21 24H27C29.21 24 31 25.79 31 28C31 30.21 29.21 32 27 32H18" stroke="black" strokeWidth="3" strokeLinecap="round" fill="none" />
              <circle cx="33" cy="15" r="3" fill="black" />
            </svg>
            <span className="text-sm text-[#00ff66] font-medium">Portfolio</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Featured Projects
          </h1>
          <p className="text-lg text-white/50 max-w-2xl">
            A curated collection of systems, applications, and experiments showcasing my technical expertise.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-6 mb-16 pb-12 border-b border-white/[0.05]"
        >
          <div className="flex items-center gap-3 px-5 py-3 bg-white/[0.03] rounded-xl border border-white/[0.05]">
            <Folder size={20} className="text-[#00ff66]" />
            <div>
              <p className="text-2xl font-bold text-white">{PROJECTS_DATA.length}+</p>
              <p className="text-xs text-white/40">Projects</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 bg-white/[0.03] rounded-xl border border-white/[0.05]">
            <Star size={20} className="text-amber-400" />
            <div>
              <p className="text-2xl font-bold text-white">50+</p>
              <p className="text-xs text-white/40">Stars</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 bg-white/[0.03] rounded-xl border border-white/[0.05]">
            <GitFork size={20} className="text-purple-400" />
            <div>
              <p className="text-2xl font-bold text-white">500+</p>
              <p className="text-xs text-white/40">Commits</p>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:gap-10">
          {PROJECTS_DATA.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
              className="group"
            >
              <a 
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.06] hover:border-[#00ff66]/30 transition-all duration-500"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  
                  {/* Image Section */}
                  <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                    <img 
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent lg:bg-gradient-to-t" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-full border border-white/10">
                      <span className="text-xs text-[#00ff66] font-medium">{project.category}</span>
                    </div>
                    
                    {/* Mobile Title */}
                    <div className="lg:hidden absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    
                    {/* Desktop Title */}
                    <div className="hidden lg:flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#00ff66] transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight 
                        size={22} 
                        className="text-white/30 group-hover:text-[#00ff66] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0 mt-1" 
                      />
                    </div>
                    
                    <p className="text-white/50 leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.slice(0, 5).map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1.5 text-xs bg-white/[0.05] text-white/60 rounded-lg border border-white/[0.05] group-hover:border-[#00ff66]/20 group-hover:text-white/80 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 5 && (
                        <span className="px-3 py-1.5 text-xs bg-white/[0.03] text-white/40 rounded-lg">
                          +{project.techStack.length - 5}
                        </span>
                      )}
                    </div>
                    
                    {/* Role */}
                    <div className="flex items-center gap-2 text-xs text-white/30">
                      <span className="w-1 h-1 rounded-full bg-[#00ff66]" />
                      <span>Role: <span className="text-white/50">{project.role}</span></span>
                    </div>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <p className="text-white/40 mb-8">Explore more on GitHub</p>
          <a 
            href="https://github.com/halloffame12"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:shadow-[0_0_32px_rgba(255,255,255,0.2)] transition-all"
          >
            <ExternalLink size={18} />
            <span>View All Repositories</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
