
import React from 'react';
import { SKILLS_DATA } from '../constants';
import { motion } from 'framer-motion';
// Added Database to the imports from lucide-react
import { CheckCircle2, TrendingUp, Award, Zap, Code, Shield, Brain, Layers, Smartphone, Database, Terminal, Globe, Sparkles } from 'lucide-react';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden px-6">
      
      {/* Enhanced Background Ambience */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-[#00ff66]/8 blur-[120px] md:blur-[180px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-emerald-500/5 blur-[100px] md:blur-[150px] rounded-full -z-10"></div>
      <div className="absolute top-1/2 left-1/4 w-[200px] h-[400px] bg-cyan-500/3 blur-[100px] rounded-full -z-10"></div>
      <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none"></div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div 
          variants={itemVariants}
          className="mb-28 text-center lg:text-left max-w-3xl"
        >
          <div className="space-y-7">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-neutral-900/95 via-neutral-800/80 to-neutral-900/60 border border-[#00ff66]/25 text-[#00ff66] font-tech text-[10px] sm:text-xs tracking-[0.2em] uppercase backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,102,0.1)]">
              <Zap size={14} className="text-[#00ff66]" />
              <span>Full-Stack Capability Index</span>
            </div>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-tech font-bold tracking-[-0.03em] uppercase leading-[0.9]">
              Technical <span className="text-[#00ff66] relative">
                DNA
                <svg className="absolute -bottom-2 left-0 w-full h-3 opacity-40" viewBox="0 0 120 12">
                  <path d="M0 6 Q30 0, 60 6 T120 6" stroke="#00ff66" strokeWidth="2" fill="none"/>
                </svg>
              </span>
            </h2>
            <p className="text-[#B0B0B0] text-lg sm:text-xl leading-[1.85]">
              Merging artistic UI with scientific performance. I architect <span className="text-white font-medium">end-to-end digital ecosystems</span>—from low-level systems programming in Rust/WebAssembly to fluid mobile and web interfaces.
            </p>
          </div>
        </motion.div>

        {/* Primary Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS_DATA.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="group bg-gradient-to-br from-neutral-950 via-neutral-900/50 to-neutral-950 p-10 rounded-[2.5rem] border border-white/10 relative flex flex-col h-full hover:border-[#00ff66]/30 transition-all duration-700 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff66]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="flex items-center gap-6 mb-10 relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-black border border-[#00ff66]/20 text-[#00ff66] group-hover:border-[#00ff66]/40 group-hover:shadow-[0_0_30px_-10px_rgba(0,255,102,0.3)] transition-all duration-500">
                  {category.icon}
                </div>
                <div>
                   <h3 className="font-tech text-2xl font-bold tracking-tight uppercase leading-none group-hover:text-[#00ff66] transition-colors duration-500">
                     {category.title}
                   </h3>
                   <div className="mt-2 text-[9px] font-tech text-[#707070] uppercase tracking-[0.2em]">
                     Proficiency: L9 Architect
                   </div>
                </div>
              </div>

              <p className="text-[#909090] text-sm mb-10 leading-[1.8] min-h-[4rem] relative z-10">
                {category.description}
              </p>
              
              <div className="space-y-4 flex-grow relative z-10">
                {category.skills.map((skill, sIdx) => (
                  <motion.div 
                    key={sIdx} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 + sIdx * 0.05 }}
                    className="flex items-center gap-4 group/item p-2 -ml-2 rounded-lg hover:bg-white/3 transition-all duration-300"
                  >
                    <CheckCircle2 size={16} className="flex-shrink-0 text-[#00ff66] opacity-60 group-hover/item:opacity-100 transition-opacity duration-300" />
                    <span className="text-[#C0C0C0] text-base font-medium group-hover/item:text-white transition-colors duration-300">{skill}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/8 flex items-center justify-between text-[9px] font-tech text-[#606060] uppercase tracking-[0.2em] relative z-10">
                 <span>Architecture: Full-Stack</span>
                 <Layers size={14} className="text-[#606060] group-hover:text-[#00ff66]/50 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Focus Detail: Updated Full-Stack Frontier Section */}
        <motion.div 
          variants={itemVariants}
          className="mt-24 p-12 sm:p-20 bg-gradient-to-br from-neutral-950 via-neutral-900/30 to-neutral-950 border border-[#00ff66]/20 rounded-[3rem] relative overflow-hidden group hover:border-[#00ff66]/35 transition-all duration-700 shadow-[0_40px_80px_-25px_rgba(0,0,0,0.6),0_0_80px_-40px_rgba(0,255,102,0.15)]"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.05] rotate-12 transition-opacity duration-700">
            <Layers size={320} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#00ff66]/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-10">
              <h3 className="text-4xl sm:text-5xl font-tech font-bold uppercase tracking-[-0.02em] leading-[0.95]">
                The <span className="text-[#00ff66] relative">
                  Full-Stack
                  <svg className="absolute -bottom-1 left-0 w-full h-2 opacity-40" viewBox="0 0 200 8">
                    <path d="M0 4 Q50 0, 100 4 T200 4" stroke="#00ff66" strokeWidth="2" fill="none"/>
                  </svg>
                </span> Frontier
              </h3>
              <p className="text-[#B0B0B0] text-lg leading-[1.85]">
                I don't just build interfaces; I engineer <span className="text-white font-medium">unified digital platforms</span>. My expertise spans the entire development lifecycle, from <span className="text-white">systems programming in Rust/WebAssembly</span> to advanced <span className="text-white">Flutter mobile apps</span>, high-concurrency <span className="text-white">Node.js/React</span> backends, <span className="text-white">Cloud & DevOps</span> infrastructure, and intelligent <span className="text-white">AI-driven</span> logic.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 bg-black/40 rounded-2xl border border-white/5 hover:border-[#00ff66]/20 transition-all duration-500">
                   <h4 className="text-[#00ff66] font-tech text-[10px] uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
                     <Code size={14} /> Core Tech Stack
                   </h4>
                   <ul className="text-[#909090] text-sm space-y-3 leading-relaxed">
                      <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#00ff66] rounded-full"></span> Systems: Rust & WebAssembly</li>
                      <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#00ff66] rounded-full"></span> Mobile: Flutter & React Native</li>
                      <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#00ff66] rounded-full"></span> Frontend: React & Next.js 14</li>
                      <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#00ff66] rounded-full"></span> Backend: Node.js, NestJS, FastAPI</li>
                   </ul>
                </div>
                <div className="p-6 bg-black/40 rounded-2xl border border-white/5 hover:border-[#00ff66]/20 transition-all duration-500">
                   <h4 className="text-[#00ff66] font-tech text-[10px] uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
                     <Shield size={14} /> Infrastructure
                   </h4>
                   <ul className="text-[#909090] text-sm space-y-3 leading-relaxed">
                      <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#00ff66] rounded-full"></span> Cloud: AWS, GCP, Vercel</li>
                      <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#00ff66] rounded-full"></span> Containers: Docker, Kubernetes</li>
                      <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#00ff66] rounded-full"></span> Database: PostgreSQL, MongoDB</li>
                      <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#00ff66] rounded-full"></span> CI/CD: GitHub Actions, Nginx</li>
                   </ul>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center p-12 bg-gradient-to-br from-black via-neutral-950 to-black border border-white/10 rounded-[2.5rem] hover:border-[#00ff66]/20 transition-all duration-500 shadow-[0_25px_50px_-15px_rgba(0,0,0,0.5)]">
               <div className="relative">
                  <div className="w-36 h-36 rounded-full border-4 border-[#00ff66]/15 flex items-center justify-center bg-black/50">
                     <div className="text-5xl font-tech font-bold text-white">100<span className="text-[#00ff66] text-2xl">%</span></div>
                  </div>
                  <svg className="absolute top-0 left-0 w-36 h-36 -rotate-90">
                    <circle 
                      cx="72" cy="72" r="68" 
                      fill="transparent" 
                      stroke="#00ff66" 
                      strokeWidth="4" 
                      strokeDasharray="427" 
                      strokeDashoffset="0"
                      className="opacity-50"
                    />
                  </svg>
                  {/* Animated glow */}
                  <div className="absolute inset-0 rounded-full bg-[#00ff66]/5 blur-xl animate-pulse"></div>
               </div>
              <p className="mt-8 text-[10px] font-tech text-[#707070] uppercase tracking-[0.2em]">Full-Stack Synergy Rating</p>
              <div className="mt-6 flex gap-5 text-[#606060]">
                  <Terminal size={18} className="hover:text-[#00ff66] transition-colors duration-300 cursor-default" />
                  <Smartphone size={18} className="hover:text-[#00ff66] transition-colors duration-300 cursor-default" />
                  <Globe size={18} className="hover:text-[#00ff66] transition-colors duration-300 cursor-default" />
                  <Database size={18} className="hover:text-[#00ff66] transition-colors duration-300 cursor-default" />
                  <Brain size={18} className="hover:text-[#00ff66] transition-colors duration-300 cursor-default" />
               </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
