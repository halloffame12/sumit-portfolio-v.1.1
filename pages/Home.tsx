
import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Brain, Cpu, ArrowRight, Terminal, Activity, Layers, Sparkles, BookOpen, Code2, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen flex flex-col relative px-4 xs:px-6 pt-28 sm:pt-36 md:pt-40 lg:pt-44 pb-32 sm:pb-36 lg:pb-28 overflow-hidden">
      
      {/* Enhanced Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] md:w-[700px] md:h-[700px] bg-[#00ff66]/8 blur-[100px] md:blur-[180px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-emerald-500/5 blur-[100px] md:blur-[160px] rounded-full -z-10"></div>
      <div className="absolute top-1/2 left-0 w-[200px] h-[400px] bg-cyan-500/3 blur-[120px] rounded-full -z-10"></div>
      
      {/* Grid Background Overlay */}
      <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start lg:items-center flex-grow"
      >
        
        {/* Left Section: Hero Content */}
        <div className="lg:col-span-7 z-20 space-y-10 text-center lg:text-left">
          
          {/* Status Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-neutral-900/95 via-neutral-800/80 to-neutral-900/60 border border-[#00ff66]/25 text-[#00ff66] font-tech text-[10px] sm:text-xs tracking-[0.2em] uppercase backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,102,0.1),inset_0_1px_0_rgba(255,255,255,0.05)]"
          >
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00ff66] animate-pulse shadow-[0_0_12px_#00ff66]"></div>
              <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-[#00ff66] animate-ping opacity-40"></div>
            </div>
            <span>Systems Architect • Active</span>
          </motion.div>
          
          {/* Main Headline */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-[8rem] font-tech font-bold leading-[0.85] tracking-[-0.04em] uppercase">
              <span className="block text-white">Sumit</span>
              <span className="block text-[#00ff66] relative">
                Chauhan
                <svg className="absolute -bottom-2 left-0 w-full h-3 opacity-30" viewBox="0 0 300 12">
                  <path d="M0 6 Q75 0, 150 6 T300 6" stroke="#00ff66" strokeWidth="2" fill="none"/>
                </svg>
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-[#A8A8A8] text-base sm:text-lg md:text-xl lg:text-[1.35rem] font-light max-w-xl mx-auto lg:mx-0 leading-[1.8]"
          >
            Building <span className="text-white font-medium">ForgeStack OS</span> & <span className="text-white font-medium">BrowserOS</span>. 
            Systems programming in <span className="text-[#00ff66]">Rust/WebAssembly</span>, 
            Full-Stack architectures, and <span className="text-white font-medium">AI/ML research</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col xs:flex-row justify-center lg:justify-start gap-4 pt-2"
          >
            <Link 
              to="/projects" 
              className="group relative px-8 py-4 sm:px-10 sm:py-5 bg-[#00ff66] text-black rounded-2xl font-tech font-bold flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_20px_50px_-15px_rgba(0,255,102,0.5)] hover:shadow-[0_25px_60px_-15px_rgba(0,255,102,0.6)] text-xs sm:text-sm uppercase tracking-widest overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Projects 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Link>
            <Link 
              to="/research" 
              className="group px-8 py-4 sm:px-10 sm:py-5 border border-white/15 text-white rounded-2xl font-tech font-bold flex items-center justify-center gap-3 hover:bg-white/5 hover:border-[#00ff66]/40 transition-all duration-300 text-xs sm:text-sm uppercase tracking-widest backdrop-blur-md"
            >
              <BookOpen size={16} className="text-[#00ff66]" />
              Read Research
            </Link>
          </motion.div>

          {/* Tech Chips */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 pt-4"
          >
            {[
              { label: 'Systems/WASM', icon: <Terminal size={13} />, highlight: true },
              { label: 'Full-Stack', icon: <Layers size={13} /> },
              { label: 'Flutter/Mobile', icon: <Smartphone size={13} /> },
              { label: 'AI/ML Research', icon: <Brain size={13} /> },
              { label: 'Cloud Native', icon: <Cpu size={13} /> }
            ].map((item, idx) => (
              <motion.span 
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.08 }}
                className={`px-4 py-2.5 rounded-xl flex items-center gap-2.5 text-[9px] sm:text-[10px] font-tech uppercase tracking-widest cursor-default transition-all duration-300 ${
                  item.highlight 
                    ? 'bg-[#00ff66]/10 border border-[#00ff66]/30 text-[#00ff66] hover:bg-[#00ff66]/15' 
                    : 'bg-neutral-900/80 border border-white/8 text-[#808080] hover:border-[#00ff66]/20 hover:text-[#A0A0A0]'
                }`}
              >
                <span className={item.highlight ? 'text-[#00ff66]' : 'text-[#00ff66]/60'}>{item.icon}</span> 
                {item.label}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Right Section: Enhanced Terminal Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="lg:col-span-5 hidden lg:flex justify-end relative z-10"
        >
          <div className="w-full max-w-[440px] aspect-[4/5] bg-gradient-to-br from-neutral-950 via-neutral-900/90 to-neutral-950 border border-white/10 rounded-[2.5rem] p-8 relative shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)] overflow-hidden group hover:border-[#00ff66]/25 transition-all duration-700">
            
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ff66]/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute inset-0 bg-grid opacity-[0.06]"></div>
            
            {/* Window controls */}
            <div className="flex gap-2.5 mb-8 relative z-10">
              <div className="w-3.5 h-3.5 rounded-full bg-red-500/40 hover:bg-red-500/60 transition-colors"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/40 hover:bg-yellow-500/60 transition-colors"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#00ff66]/40 hover:bg-[#00ff66]/60 transition-colors"></div>
            </div>

            <div className="font-tech text-sm space-y-5 relative z-10">
              {/* Command line */}
              <div className="flex items-center gap-3 p-3 bg-black/40 rounded-xl border border-white/5">
                <span className="text-[#00ff66]">$</span>
                <span className="text-[#B0B0B0] text-sm">sumit.dev --init --fullstack</span>
                <span className="w-2 h-4 bg-[#00ff66] animate-pulse ml-auto"></span>
              </div>
              
              {/* System modules */}
              <div className="space-y-3 p-4 border-l-2 border-[#00ff66]/30 bg-black/20 rounded-r-xl">
                <p className="text-[#606060] text-[10px] uppercase tracking-[0.2em] flex items-center gap-2">
                  <Sparkles size={12} className="text-[#00ff66]" />
                  Active Modules
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    { name: 'KERNEL_SYS', value: 'RUST_WASM', status: 'active' },
                    { name: 'MOBILE_SDK', value: 'FLUTTER_3.19', status: 'active' },
                    { name: 'BACKEND_API', value: 'NODE_V20', status: 'active' },
                    { name: 'ML_ENGINE', value: 'PYTORCH_2.0', status: 'ready' }
                  ].map((mod, i) => (
                    <motion.div 
                      key={mod.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="flex justify-between items-center bg-black/50 p-3 rounded-xl border border-white/5 hover:border-[#00ff66]/20 transition-all duration-300 group/item"
                    >
                      <span className="text-[#909090] text-xs group-hover/item:text-white transition-colors">{mod.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[#00ff66] text-[10px]">{mod.value}</span>
                        <div className={`w-1.5 h-1.5 rounded-full ${mod.status === 'active' ? 'bg-[#00ff66] shadow-[0_0_6px_#00ff66]' : 'bg-yellow-500'}`}></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Progress bar */}
              <div className="pt-4">
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-[#606060] mb-3">
                  <span>System Integrity</span>
                  <span className="text-[#00ff66]">100%</span>
                </div>
                <div className="h-2 bg-black/60 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-[#00ff66] to-emerald-400 rounded-full" 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                  />
                </div>
              </div>

              {/* Status footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Activity size={14} className="text-[#00ff66]" />
                  <span className="text-[10px] text-[#606060] font-tech uppercase tracking-widest">All Systems Nominal</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-[#00ff66] animate-pulse"></div>
                  <div className="w-1 h-1 rounded-full bg-[#00ff66] animate-pulse animation-delay-200"></div>
                  <div className="w-1 h-1 rounded-full bg-[#00ff66] animate-pulse animation-delay-400"></div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute top-8 -right-6 p-4 bg-black border border-[#00ff66]/40 rounded-2xl text-[#00ff66] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] z-20"
            >
              <Code2 size={28} />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute bottom-12 -left-6 p-4 bg-black border border-white/15 rounded-2xl text-[#808080] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] z-20"
            >
              <Layers size={28} />
            </motion.div>
          </div>
        </motion.div>

      </motion.div>

      {/* Enhanced Bottom Status Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="fixed bottom-4 sm:bottom-6 left-0 w-full px-4 sm:px-6 lg:px-12 z-50"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 p-4 bg-neutral-950/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-4 text-[9px] sm:text-[10px] font-tech text-[#505050] tracking-[0.25em] uppercase">
            <Terminal size={14} className="text-[#00ff66]/50" />
            <span>Architecture: <span className="text-[#808080]">Full_Stack_Modular</span></span>
          </div>
          <div className="flex items-center gap-4 sm:gap-8 text-[9px] sm:text-[10px] font-tech text-[#505050] tracking-[0.2em] uppercase">
            <span className="hidden xs:inline">Uptime: <span className="text-[#00ff66]">99.9%</span></span>
            <span className="hidden md:inline">Nodes: <span className="text-[#808080]">Systems • Web • Mobile</span></span>
            <Link to="/research" className="flex items-center gap-1.5 text-[#00ff66] hover:text-[#00ff66]/80 transition-colors">
              Research <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
