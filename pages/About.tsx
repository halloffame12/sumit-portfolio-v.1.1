
import React from 'react';
import { User, Terminal, Target, BookOpen, Briefcase, Cpu, Layers, Code, Smartphone, Zap, ShieldCheck, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden px-6">
      {/* Enhanced Background Ambience */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-[#00ff66]/8 blur-[120px] md:blur-[180px] rounded-full -z-10 translate-x-1/3 -translate-y-1/3 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-emerald-500/5 blur-[100px] md:blur-[150px] rounded-full -z-10"></div>
      <div className="absolute top-1/2 right-0 w-[200px] h-[400px] bg-cyan-500/3 blur-[100px] rounded-full -z-10"></div>
      <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none"></div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center gap-12 mb-28"
        >
          <div className="relative shrink-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-52 h-52 sm:w-72 sm:h-72 rounded-[3rem] bg-neutral-950 border-2 border-[#00ff66]/25 overflow-hidden relative shadow-[0_30px_80px_-20px_rgba(0,255,102,0.2)] group"
            >
              <img 
                src="https://i.postimg.cc/hGCbJj5s/sumit-chauhan.png" 
                alt="Sumit Chauhan" 
                className="w-full h-full object-cover object-top grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70"></div>
              <div className="absolute inset-0 border-[12px] border-black/60 pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#00ff66] via-[#00ff66]/60 to-transparent shadow-[0_0_20px_#00ff66] z-20"></div>
              
              {/* Scan line effect */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#00ff66]/50 to-transparent animate-scan"></div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-5 -right-5 p-5 bg-black border border-[#00ff66]/30 rounded-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] z-20"
            >
              <Terminal size={28} className="text-[#00ff66]" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, type: "spring" }}
              className="absolute -top-3 -left-3 p-3 bg-black border border-white/15 rounded-xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.8)] z-20"
            >
              <Sparkles size={20} className="text-[#00ff66]/60" />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-grow space-y-7 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-neutral-900/95 via-neutral-800/80 to-neutral-900/60 border border-[#00ff66]/25 text-[#00ff66] font-tech text-[10px] sm:text-xs tracking-[0.2em] uppercase backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,102,0.1)]">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse shadow-[0_0_10px_#00ff66]"></div>
              </div>
              <span>Full-Stack Architect</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-tech font-bold tracking-[-0.03em] uppercase leading-[0.9]">
              The <span className="text-[#00ff66] relative">
                Architect
                <svg className="absolute -bottom-1 left-0 w-full h-2 opacity-40" viewBox="0 0 200 8">
                  <path d="M0 4 Q50 0, 100 4 T200 4" stroke="#00ff66" strokeWidth="2" fill="none"/>
                </svg>
              </span> <br className="hidden sm:block" />
              Behind the Code
            </h2>
            <p className="text-[#B0B0B0] text-lg sm:text-xl max-w-2xl leading-[1.85]">
              I am <span className="text-white font-medium">Sumit Chauhan</span>, a Full-Stack Application Developer, Systems Programmer, and AI/ML researcher pursuing BS-MS in Computer Science and Data Analytics at IIT Patna. Currently building <span className="text-[#00ff66]">ForgeStack OS</span>, researching OS concepts with <span className="text-[#00ff66]">BrowserOS</span> (Rust/WebAssembly), and exploring ML/DL/NLP.
            </p>
          </motion.div>
        </motion.div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-28">
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 space-y-10"
          >
            <div className="bg-gradient-to-br from-neutral-900/95 via-neutral-900/70 to-neutral-950/50 p-8 sm:p-12 rounded-[2.5rem] border border-white/10 relative overflow-hidden hover:border-[#00ff66]/20 transition-all duration-700 group shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff66]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <h3 className="text-2xl font-tech font-bold text-[#00ff66] uppercase mb-10 flex items-center gap-4 relative z-10">
                <span className="w-12 h-[2px] bg-gradient-to-r from-[#00ff66] to-transparent"></span>
                Who Am I?
              </h3>
              <div className="space-y-7 text-[#B0B0B0] text-base sm:text-lg leading-[1.9] relative z-10">
                <p>
                  As a <span className="text-white font-semibold">BS-MS student at IIT Patna</span> in Computer Science and Data Analytics, I bridge the gap between deterministic logic and probabilistic learning. My current focus lies in building <span className="text-[#00ff66]">ForgeStack OS</span> - a next-gen CLI for full-stack SaaS generation, and <span className="text-[#00ff66]">BrowserOS</span> - a research-level OS kernel in Rust/WebAssembly, while diving deep into <span className="text-[#00ff66]">ML/DL/NLP</span> research.
                </p>
                <p>
                  I don't just write code; I design <span className="text-white font-medium">scalable architectures</span> and explore <span className="text-white font-medium">systems programming</span>. Whether it's building an OS kernel running in the browser, real-time chat infrastructure like <span className="text-[#00ff66]">AnonChat</span>, complex AI models, or developer tools with 150+ stack combinations, my philosophy is rooted in performance, security, and a future-ready tech stack.
                </p>
                <p>
                  Based in India, I've spent thousands of hours perfecting my craft—from <span className="text-white font-medium">Flutter & Mobile development</span> to <span className="text-white font-medium">Cloud & DevOps</span>. Fun fact: I debug with console.log() and I'm not ashamed!
                </p>
              </div>
            </div>

            {/* The Mobile Frontier Section (User-Requested Detail) */}
            <div className="p-8 sm:p-12 bg-gradient-to-br from-neutral-950/95 via-neutral-900/70 to-neutral-950/50 border border-[#00ff66]/20 rounded-[2.5rem] relative overflow-hidden group hover:border-[#00ff66]/40 transition-all duration-700 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
               <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
                  <Smartphone size={140} />
               </div>
               <div className="absolute inset-0 bg-gradient-to-br from-[#00ff66]/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               
               <h3 className="text-2xl font-tech font-bold text-white uppercase mb-7 flex items-center gap-4 relative z-10">
                  The <span className="text-[#00ff66] ml-2">Mobile</span> Frontier
               </h3>
              <p className="text-[#B0B0B0] mb-10 leading-[1.9] text-lg relative z-10">
                  Specialized in high-end <span className="text-white font-medium">Flutter & Dart development</span>. I build cross-platform applications for iOS and Android that don't just work—they perform at native speeds with beautiful, fluid motion.
               </p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                  <div className="space-y-5 p-6 bg-black/30 rounded-2xl border border-white/5">
                     <h4 className="text-[#00ff66] font-tech text-xs uppercase tracking-[0.2em] flex items-center gap-3">
                        <Zap size={16} /> Core Ecosystem
                     </h4>
                    <ul className="text-[#909090] text-sm space-y-3 leading-relaxed">
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#00ff66] rounded-full"></span> State Management (Provider/Riverpod)</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#00ff66] rounded-full"></span> Custom Native Integrations</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#00ff66] rounded-full"></span> Dynamic UI Architecture</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#00ff66] rounded-full"></span> CI/CD Pipeline Automation</li>
                     </ul>
                  </div>
                  <div className="space-y-5 p-6 bg-black/30 rounded-2xl border border-white/5">
                     <h4 className="text-[#00ff66] font-tech text-xs uppercase tracking-[0.2em] flex items-center gap-3">
                        <ShieldCheck size={16} /> Quality Control
                     </h4>
                    <ul className="text-[#909090] text-sm space-y-3 leading-relaxed">
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#00ff66] rounded-full"></span> Performance Profiling</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#00ff66] rounded-full"></span> Offline-First Design</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#00ff66] rounded-full"></span> Secure Storage Implementation</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#00ff66] rounded-full"></span> Platform-Specific UX</li>
                     </ul>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Side Panels */}
          <motion.div 
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="p-8 bg-gradient-to-br from-neutral-900/90 to-neutral-950/70 border border-white/8 rounded-[2rem] relative overflow-hidden group hover:border-[#00ff66]/20 transition-all duration-500 shadow-[0_25px_50px_-15px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff66]/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-xl font-tech font-bold text-white uppercase mb-7 flex items-center gap-3 relative z-10">
                <BookOpen size={22} className="text-[#00ff66]" />
                Education
              </h3>
              <div className="space-y-6 relative z-10">
                <div className="p-5 bg-black/40 rounded-xl border border-white/5">
                  <h4 className="text-[#00ff66] font-tech text-[10px] tracking-[0.2em] uppercase mb-2">IIT Patna</h4>
                  <p className="text-white font-bold text-lg">BS-MS in Computer Science</p>
                  <p className="text-[#808080] text-xs mt-2 italic leading-relaxed">Computer Science and Data Analytics</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-black via-neutral-950 to-black border border-[#00ff66]/25 rounded-[2rem] group hover:border-[#00ff66]/40 transition-all duration-500 shadow-[0_25px_50px_-15px_rgba(0,0,0,0.5),0_0_50px_-25px_rgba(0,255,102,0.2)]">
              <h3 className="text-xl font-tech font-bold text-white uppercase mb-7 flex items-center gap-3">
                <Briefcase size={22} className="text-[#00ff66]" />
                Industry Status
              </h3>
              <div className="space-y-5">
                <div className="flex justify-between items-center text-sm p-4 bg-white/3 rounded-xl">
                  <span className="text-[#909090]">Live Projects</span>
                  <span className="text-white font-tech font-bold">15+</span>
                </div>
                <div className="flex justify-between items-center text-sm p-4 bg-[#00ff66]/5 rounded-xl border border-[#00ff66]/10">
                  <span className="text-[#909090]">Current Focus</span>
                  <span className="text-[#00ff66] font-tech text-xs">BrowserOS & ForgeStack</span>
                </div>
                <div className="flex justify-between items-center text-sm p-4 bg-white/3 rounded-xl">
                  <span className="text-[#909090]">Research</span>
                  <span className="text-white font-tech">OS/WASM</span>
                </div>
                <div className="pt-4">
                  <Link to="/contact" className="group/btn relative block text-center py-4 bg-[#00ff66]/10 border border-[#00ff66]/30 text-[#00ff66] rounded-xl text-xs font-tech font-bold uppercase tracking-[0.2em] hover:bg-[#00ff66] hover:text-black transition-all duration-300 overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      INITIATE COLLAB
                      <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-20px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(300px); opacity: 0; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default About;
