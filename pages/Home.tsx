
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Brain, Cpu, Code, ArrowRight, Terminal, Activity, Zap, Layers, Command, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative px-4 xs:px-6 pt-32 sm:pt-40 md:pt-44 lg:pt-48 xl:pt-52 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[250px] h-[250px] md:w-[600px] md:h-[600px] bg-[#00ff66]/10 blur-[80px] md:blur-[160px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] md:w-[600px] md:h-[600px] bg-emerald-500/5 blur-[80px] md:blur-[160px] rounded-full -z-10"></div>
      
      {/* Grid Background Overlay */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start lg:items-center flex-grow">
        
        {/* Left Section: Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 z-20 space-y-8 sm:space-y-10 text-center lg:text-left"
        >
          <div className="space-y-6 sm:space-y-8">
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900/90 border border-[#00ff66]/20 text-[#00ff66] font-tech text-[10px] sm:text-xs tracking-[0.2em] uppercase backdrop-blur-md shadow-[0_0_20px_rgba(0,255,102,0.05)]"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ff66] animate-pulse"></div>
              <span>Status: Full-Stack Architect Active</span>
            </motion.div>
            
            <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-9xl font-tech font-bold leading-[0.9] sm:leading-[0.85] tracking-tighter uppercase transition-all">
              Sumit<br />
              <span className="text-[#00ff66] neon-glow relative">
                Chauhan
                <div className="absolute -right-6 top-1/2 -translate-y-1/2 opacity-10 hidden xl:block">
                  <Command size={48} />
                </div>
              </span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Building <span className="text-white border-b border-[#00ff66]/40">ForgeStack OS</span> & engineering Full-Stack Architectures. Specialized in high-performance Flutter mobile systems, immersive web logic, Cloud/DevOps, and AI/ML research.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col xs:flex-row justify-center lg:justify-start gap-4 pt-4 pb-12 lg:pb-0">
            <Link 
              to="/projects" 
              className="group px-8 py-4 sm:px-10 sm:py-5 bg-[#00ff66] text-black rounded-xl sm:rounded-2xl font-tech font-bold flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_15px_30px_-5px_rgba(0,255,102,0.3)] text-xs sm:text-sm uppercase tracking-widest"
            >
              Init Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 sm:px-10 sm:py-5 border border-white/10 text-white rounded-xl sm:rounded-2xl font-tech font-bold flex items-center justify-center gap-2 hover:bg-white/5 hover:border-[#00ff66]/40 transition-all text-xs sm:text-sm uppercase tracking-widest backdrop-blur-md"
            >
              Contact Me
            </Link>
          </div>

          {/* Tech Chips */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
            {[
              { label: 'Full-Stack', icon: <Layers size={12} /> },
              { label: 'Flutter/Mobile', icon: <Smartphone size={12} /> },
              { label: 'AI/ML/NLP', icon: <Brain size={12} /> },
              { label: 'Cloud/DevOps', icon: <Cpu size={12} /> }
            ].map((item, idx) => (
              <motion.span 
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="px-4 py-2 bg-neutral-900/50 border border-white/5 rounded-xl flex items-center gap-2 text-[8px] sm:text-[10px] font-tech text-gray-400 uppercase tracking-widest hover:border-[#00ff66]/30 transition-all cursor-default"
              >
                <span className="text-[#00ff66]">{item.icon}</span> {item.label}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Right Section Terminal remains as is (good visuals) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="lg:col-span-5 hidden lg:flex justify-end relative z-10"
        >
          <div className="w-full max-w-[420px] aspect-[4/5] bg-neutral-950 border border-white/10 rounded-[2.5rem] p-8 relative shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-grid opacity-10"></div>
            
            <div className="flex gap-2.5 mb-10">
              <div className="w-3.5 h-3.5 rounded-full bg-red-500/30"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/30"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#00ff66]/30"></div>
            </div>

            <div className="font-tech text-sm space-y-6 relative z-10">
              <div className="flex items-center gap-3">
                <span className="text-gray-700 font-bold italic text-xs tracking-tighter">0x01</span>
                <span className="text-[#00ff66] text-sm">~/sumit.dev --deploy --fullstack</span>
              </div>
              
              <div className="space-y-3 pl-4 border-l border-[#00ff66]/20">
                <p className="text-gray-500 text-[10px] uppercase tracking-widest">Global Stack Ready</p>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center bg-black/60 p-3 rounded-xl border border-white/5">
                    <span className="text-white text-xs">MOBILE_CORE</span>
                    <span className="text-[#00ff66] text-[10px]">FLUTTER_3.19</span>
                  </div>
                  <div className="flex justify-between items-center bg-black/60 p-3 rounded-xl border border-white/5">
                    <span className="text-white text-xs">BACKEND_API</span>
                    <span className="text-[#00ff66] text-[10px]">NODE_JS_V20</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-gray-500 mb-2">
                  <span>Full-Stack Integrity</span>
                  <span>100%</span>
                </div>
                <div className="h-1.5 bg-neutral-900 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#00ff66]" 
                    animate={{ width: ["10%", "100%"] }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4">
                <Activity size={14} className="text-[#00ff66] animate-pulse" />
                <span className="text-[10px] text-gray-500 font-tech uppercase tracking-widest">Stack Operations: Seamless</span>
              </div>
            </div>

            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -right-4 p-5 bg-black border border-[#00ff66]/30 rounded-[2rem] text-[#00ff66] shadow-2xl z-20"
            >
              <Smartphone size={32} />
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 -left-4 p-5 bg-black border border-white/10 rounded-[2rem] text-white/50 shadow-2xl z-20"
            >
              <Layers size={32} />
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Responsive Bottom Status Bar */}
      <div className="mt-auto pb-6 sm:pb-12 lg:absolute lg:bottom-6 left-0 w-full px-6 sm:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 opacity-30 text-[8px] sm:text-[10px] font-tech text-[#00ff66] tracking-[0.3em] uppercase">
        <div className="flex items-center gap-4">
          <Terminal size={14} />
          <span>ARCHITECTURE: FULL_STACK_MODULAR</span>
        </div>
        <div className="flex items-center gap-4 sm:gap-8">
          <span>UPTIME: 99.9%</span>
          <span className="hidden sm:inline">NODES: MOBILE_WEB_BACKEND</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
