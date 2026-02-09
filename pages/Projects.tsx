
import React from 'react';
import { PROJECTS_DATA } from '../constants';
import { ExternalLink, Terminal, Cpu, Database, Activity, Code, ShieldCheck, Zap, Info, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Enhanced Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-[0.04] pointer-events-none -z-10"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-[#00ff66]/8 blur-[120px] md:blur-[180px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-emerald-500/5 blur-[100px] md:blur-[150px] rounded-full -z-10"></div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6"
      >
        {/* Header with Stats */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-12 mb-28 text-center lg:text-left"
        >
          <div>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-neutral-900/95 via-neutral-800/80 to-neutral-900/60 border border-[#00ff66]/25 text-[#00ff66] font-tech text-[10px] sm:text-xs tracking-[0.2em] uppercase backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,102,0.1)] mb-6">
              <Sparkles size={14} className="text-[#00ff66]" />
              <span>Production Registry</span>
            </div>
            <h2 className="text-5xl sm:text-7xl font-tech font-bold tracking-[-0.03em] uppercase leading-[0.9]">
              Project <span className="text-[#00ff66] relative">
                Vault
                <svg className="absolute -bottom-2 left-0 w-full h-3 opacity-40" viewBox="0 0 140 12">
                  <path d="M0 6 Q35 0, 70 6 T140 6" stroke="#00ff66" strokeWidth="2" fill="none"/>
                </svg>
              </span>
            </h2>
          </div>

          <div className="flex gap-10 sm:gap-16">
             <div className="text-center p-5 bg-neutral-950/50 rounded-2xl border border-white/5 backdrop-blur-sm">
                <p className="text-[#707070] font-tech uppercase text-[9px] tracking-[0.2em] mb-2">Active Modules</p>
                <span className="text-3xl sm:text-4xl font-tech font-bold text-white">0{PROJECTS_DATA.length}</span>
             </div>
             <div className="text-center p-5 bg-[#00ff66]/5 rounded-2xl border border-[#00ff66]/15 backdrop-blur-sm">
                <p className="text-[#707070] font-tech uppercase text-[9px] tracking-[0.2em] mb-2">Global Reach</p>
                <span className="text-3xl sm:text-4xl font-tech font-bold text-[#00ff66]">LIVE</span>
             </div>
             <div className="text-center hidden sm:block p-5 bg-neutral-950/50 rounded-2xl border border-white/5 backdrop-blur-sm">
                <p className="text-[#707070] font-tech uppercase text-[9px] tracking-[0.2em] mb-2">Integrity</p>
                <span className="text-3xl sm:text-4xl font-tech font-bold text-white">99%</span>
             </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS_DATA.map((project, idx) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
              className="group bg-gradient-to-br from-neutral-950 via-neutral-900/50 to-neutral-950 border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col relative hover:border-[#00ff66]/35 transition-all duration-700 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] hover:shadow-[0_40px_80px_-20px_rgba(0,255,102,0.12)]"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff66]/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"></div>
              
              {/* Image Section */}
              <div className="relative aspect-video overflow-hidden">
                 <img 
                   src={project.imageUrl} 
                   alt={project.title} 
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                 
                 {/* Floating Badge */}
                 <div className="absolute top-6 left-6 px-4 py-2 bg-black/80 backdrop-blur-xl border border-[#00ff66]/30 text-[#00ff66] font-tech text-[9px] uppercase tracking-[0.2em] rounded-xl z-20 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
                    {project.category}
                 </div>

                 {/* Role Overlay */}
                 <div className="absolute bottom-6 left-6 flex items-center gap-3 z-20">
                    <div className="w-10 h-10 rounded-xl bg-[#00ff66] flex items-center justify-center text-black shadow-[0_10px_30px_-10px_rgba(0,255,102,0.5)]">
                       <Terminal size={18} />
                    </div>
                    <span className="text-white font-tech text-xs uppercase font-bold tracking-[0.15em] drop-shadow-lg">{project.role}</span>
                 </div>
              </div>

              {/* Content Section */}
              <div className="p-8 sm:p-10 flex flex-col flex-grow relative z-10">
                 <div className="flex justify-between items-start mb-7">
                    <h3 className="text-2xl sm:text-3xl font-tech font-bold uppercase tracking-[-0.02em] leading-[0.95] group-hover:text-[#00ff66] transition-colors duration-500">
                       {project.title}
                    </h3>
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      title={`View ${project.title}`}
                      aria-label={`View ${project.title} project`}
                      className="p-3.5 bg-black border border-white/10 rounded-xl text-[#808080] hover:text-[#00ff66] hover:border-[#00ff66]/40 hover:shadow-[0_0_20px_-5px_rgba(0,255,102,0.3)] transition-all duration-300"
                    >
                       <ExternalLink size={20} />
                    </a>
                 </div>

                 <p className="text-[#B0B0B0] text-sm leading-[1.85] mb-8">
                    {project.description}
                 </p>

                 {/* Brief Insights (Problem/Solution) */}
                 <div className="space-y-4 mb-8">
                    <div className="flex gap-4 items-start p-5 bg-black/40 rounded-xl border border-white/5 hover:border-[#00ff66]/15 transition-all duration-300">
                       <div className="mt-0.5 text-[#00ff66]/70"><Info size={14} /></div>
                       <p className="text-xs text-[#909090] leading-[1.8]"><span className="text-[#B0B0B0] uppercase font-tech text-[9px] tracking-[0.15em] mr-2 font-medium">Problem:</span>{project.problem}</p>
                    </div>
                 </div>

                 {/* Tech Stack */}
                 <div className="mt-auto pt-6 border-t border-white/8 flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-3.5 py-2 bg-black/60 border border-white/10 rounded-xl text-[9px] font-tech text-[#707070] uppercase tracking-[0.15em] hover:border-[#00ff66]/30 hover:text-[#00ff66] transition-all duration-300 cursor-default">
                        {tech}
                      </span>
                    ))}
                 </div>
              </div>

              {/* Status Bar */}
              <div className="h-1.5 w-full bg-neutral-900 overflow-hidden">
                 <motion.div 
                   className="h-full bg-gradient-to-r from-[#00ff66] to-emerald-400" 
                   initial={{ width: 0 }} 
                   whileInView={{ width: "100%" }} 
                   viewport={{ once: true }}
                   transition={{ duration: 2, delay: idx * 0.15 }}
                 />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Action CTA */}
        <motion.div 
          variants={itemVariants}
          className="mt-32 p-12 lg:p-20 bg-gradient-to-br from-neutral-950 via-neutral-900/30 to-neutral-950 border border-white/10 rounded-[3rem] text-center relative overflow-hidden shadow-[0_40px_80px_-25px_rgba(0,0,0,0.6)] hover:border-[#00ff66]/20 transition-all duration-700 group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ff66]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative z-10">
             <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="px-5 py-3 bg-black border border-[#00ff66]/20 rounded-xl flex items-center gap-3 hover:border-[#00ff66]/40 transition-all duration-300">
                   <ShieldCheck size={16} className="text-[#00ff66]" />
                   <span className="text-[9px] font-tech text-[#808080] uppercase tracking-[0.2em]">Hardened Security</span>
                </div>
                <div className="px-5 py-3 bg-black border border-[#00ff66]/20 rounded-xl flex items-center gap-3 hover:border-[#00ff66]/40 transition-all duration-300">
                   <Zap size={16} className="text-[#00ff66]" />
                   <span className="text-[9px] font-tech text-[#808080] uppercase tracking-[0.2em]">Ultra Performance</span>
                </div>
             </div>

             <Code size={52} className="text-[#606060] mx-auto mb-10" />
             <h3 className="text-3xl sm:text-5xl font-tech font-bold mb-10 uppercase tracking-[-0.02em] leading-[1.1]">Seeking high-performance <br /> <span className="text-[#00ff66]">Development?</span></h3>
             
             <p className="max-w-xl mx-auto text-[#909090] mb-14 text-sm sm:text-base leading-[1.85]">
               Every project is initialized with a custom-engineered stack designed for maximum efficiency. 
               From memory-safe mobile logic to high-concurrency cloud bridges.
             </p>

             <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a 
                  href="https://github.com/halloffame12" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group/btn relative px-12 py-6 bg-[#00ff66] text-black font-tech font-bold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-[0.2em] text-sm shadow-[0_20px_50px_-15px_rgba(0,255,102,0.4)] flex items-center justify-center gap-3 overflow-hidden"
                >
                   <span className="relative z-10 flex items-center gap-3"><Terminal size={18} /> View Matrix</span>
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                </a>
                <Link 
                  to="/contact" 
                  className="px-12 py-6 border border-[#00ff66]/30 text-white font-tech font-bold rounded-2xl hover:bg-[#00ff66]/10 hover:border-[#00ff66] transition-all duration-300 uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 backdrop-blur-sm"
                >
                   <Activity size={18} className="text-[#00ff66]" /> Open Channel
                </Link>
             </div>

             <div className="mt-16 flex flex-wrap justify-center gap-10 text-[#606060]">
                <span className="text-[8px] font-tech uppercase tracking-[0.4em]">Scalability: Modular</span>
                <span className="text-[8px] font-tech uppercase tracking-[0.4em]">Infrastructure: Cloud-Native</span>
                <span className="text-[8px] font-tech uppercase tracking-[0.4em]">Performance: Native-Grade</span>
             </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
