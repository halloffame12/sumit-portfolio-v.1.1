
import React from 'react';
import { PROJECTS_DATA } from '../constants';
import { ExternalLink, Terminal, Cpu, Database, Activity, Code, ShieldCheck, Zap, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-[0.03] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Stats */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-12 mb-24 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-block px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[#00ff66] font-tech text-[10px] tracking-widest uppercase mb-4">
              Production Registry
            </div>
            <h2 className="text-5xl sm:text-7xl font-tech font-bold tracking-tighter uppercase leading-[0.85]">
              Project <span className="text-[#00ff66] neon-glow">Vault</span>
            </h2>
          </motion.div>

          <div className="flex gap-8 sm:gap-16">
             <div className="text-center">
                <p className="text-[#A1A1A1] font-tech uppercase text-[10px] tracking-widest mb-1">Active Modules</p>
                <span className="text-3xl sm:text-4xl font-tech font-bold text-white">0{PROJECTS_DATA.length}</span>
             </div>
             <div className="text-center">
                <p className="text-[#A1A1A1] font-tech uppercase text-[10px] tracking-widest mb-1">Global Reach</p>
                <span className="text-3xl sm:text-4xl font-tech font-bold text-[#00ff66]">LIVE</span>
             </div>
             <div className="text-center hidden sm:block">
                <p className="text-[#A1A1A1] font-tech uppercase text-[10px] tracking-widest mb-1">Integrity</p>
                <span className="text-3xl sm:text-4xl font-tech font-bold text-white">99%</span>
             </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS_DATA.map((project, idx) => (
                  <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
                     className="bg-neutral-950 border border-white/10 rounded-[3rem] overflow-hidden flex flex-col relative"
            >
              {/* Image Section */}
              <div className="relative aspect-video overflow-hidden">
                 <img 
                   src={project.imageUrl} 
                   alt={project.title} 
                            className="w-full h-full object-cover grayscale"
                 />
                         <div className="absolute inset-0 bg-black/40"></div>
                 
                 {/* Floating Badge */}
                 <div className="absolute top-6 left-6 px-4 py-1.5 bg-black/80 backdrop-blur-md border border-[#00ff66]/30 text-[#00ff66] font-tech text-[10px] uppercase tracking-widest rounded-full z-20">
                    {project.category}
                 </div>

                 {/* Role Overlay */}
                 <div className="absolute bottom-6 left-6 flex items-center gap-3 z-20">
                    <div className="w-8 h-8 rounded-lg bg-[#00ff66] flex items-center justify-center text-black">
                       <Terminal size={16} />
                    </div>
                    <span className="text-white font-tech text-xs uppercase font-bold tracking-widest drop-shadow-lg">{project.role}</span>
                 </div>
              </div>

              {/* Content Section */}
              <div className="p-8 sm:p-10 flex flex-col flex-grow">
                 <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl sm:text-3xl font-tech font-bold uppercase tracking-tighter leading-none">
                       {project.title}
                    </h3>
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-neutral-900 border border-white/10 rounded-2xl text-[#A1A1A1] hover:text-[#00ff66] hover:border-[#00ff66]/40 transition-all"
                    >
                       <ExternalLink size={20} />
                    </a>
                 </div>

                 <p className="text-[#E6E6E6] text-sm leading-relaxed mb-8">
                    {project.description}
                 </p>

                 {/* Brief Insights (Problem/Solution) */}
                 <div className="space-y-4 mb-8">
                    <div className="flex gap-4 items-start">
                       <div className="mt-1 text-[#00ff66]/40"><Info size={14} /></div>
                       <p className="text-xs text-[#A1A1A1] italic"><span className="text-[#E6E6E6] not-italic uppercase font-tech text-[10px] tracking-widest mr-2">Problem:</span>{project.problem}</p>
                    </div>
                 </div>

                 {/* Tech Stack */}
                 <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                                 <span key={tech} className="px-3 py-1 bg-black border border-white/10 rounded-lg text-[9px] font-tech text-[#A1A1A1] uppercase tracking-widest">
                        {tech}
                      </span>
                    ))}
                 </div>
              </div>

              {/* Status Bar */}
              <div className="h-1 w-full bg-neutral-900 overflow-hidden">
                 <motion.div 
                   className="h-full bg-[#00ff66]" 
                   initial={{ width: 0 }} 
                   whileInView={{ width: "100%" }} 
                   viewport={{ once: true }}
                   transition={{ duration: 2, delay: idx * 0.2 }}
                 />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Action CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 lg:p-20 bg-neutral-950 border border-white/10 rounded-[4rem] text-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ff66]/5 to-transparent"></div>
          
          <div className="relative z-10">
             <div className="flex justify-center gap-4 mb-10">
                <div className="px-4 py-2 bg-black border border-[#00ff66]/20 rounded-xl flex items-center gap-3">
                   <ShieldCheck size={16} className="text-[#00ff66]" />
                   <span className="text-[9px] font-tech text-[#A1A1A1] uppercase tracking-widest">Hardened Security</span>
                </div>
                <div className="px-4 py-2 bg-black border border-[#00ff66]/20 rounded-xl flex items-center gap-3">
                   <Zap size={16} className="text-[#00ff66]" />
                   <span className="text-[9px] font-tech text-[#A1A1A1] uppercase tracking-widest">Ultra Performance</span>
                </div>
             </div>

             <Code size={48} className="text-[#A1A1A1] mx-auto mb-8" />
             <h3 className="text-3xl sm:text-5xl font-tech font-bold mb-8 uppercase tracking-tighter">Seeking high-performance <br /> <span className="text-[#00ff66]">Development?</span></h3>
             
             <p className="max-w-xl mx-auto text-[#A1A1A1] mb-12 text-sm sm:text-base leading-relaxed">
               Every project is initialized with a custom-engineered stack designed for maximum efficiency. 
               From memory-safe mobile logic to high-concurrency cloud bridges.
             </p>

             <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a 
                  href="https://github.com/halloffame12" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-12 py-6 bg-[#00ff66] text-black font-tech font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest text-sm shadow-[0_15px_30px_-5px_rgba(0,255,102,0.3)] flex items-center justify-center gap-3"
                >
                   <Terminal size={18} /> View Matrix
                </a>
                <Link 
                  to="/contact" 
                  className="px-12 py-6 border border-[#00ff66]/30 text-white font-tech font-bold rounded-2xl hover:bg-[#00ff66]/10 hover:border-[#00ff66] transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-3"
                >
                   <Activity size={18} className="text-[#00ff66]" /> Open Channel
                </Link>
             </div>

             <div className="mt-16 flex flex-wrap justify-center gap-8 text-[#A1A1A1]">
                <span className="text-[8px] font-tech uppercase tracking-[0.5em]">Scalability: Modular</span>
                <span className="text-[8px] font-tech uppercase tracking-[0.5em]">Infrastructure: Cloud-Native</span>
                <span className="text-[8px] font-tech uppercase tracking-[0.5em]">Performance: Native-Grade</span>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
