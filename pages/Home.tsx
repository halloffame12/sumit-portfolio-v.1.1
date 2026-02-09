import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Github, Linkedin, ChevronDown, Mail, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      
      {/* Ambient Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-radial from-[#00ff66]/10 via-[#00ff66]/3 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-emerald-500/8 via-transparent to-transparent rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,102,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,102,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              {/* Status */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff66] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff66]"></span>
                  </span>
                  <span className="text-xs font-medium text-white/70">Available for work</span>
                </div>
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight">
                  <span className="text-white">Sumit</span>
                  <br />
                  <span className="text-[#00ff66]">Chauhan</span>
                </h1>
                <p className="text-xl sm:text-2xl text-white/40 font-light">
                  Full-Stack Architect & Systems Programmer
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-white/60 leading-relaxed max-w-lg">
                Crafting <span className="text-white">high-performance systems</span> with Rust & WebAssembly. 
                Building <span className="text-[#00ff66]">ForgeStack OS</span> and researching OS concepts through BrowserOS.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  to="/projects"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00ff66] text-black font-semibold rounded-xl hover:bg-[#00ff66]/90 transition-all duration-300 shadow-[0_0_40px_rgba(0,255,102,0.3)]"
                >
                  View Projects
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <Mail size={18} />
                  Contact Me
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                <a 
                  href="https://github.com/halloffame12" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-xl bg-white/5 text-white/50 hover:text-[#00ff66] hover:bg-white/10 transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sumit-chauhan-a4ba98325/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-xl bg-white/5 text-white/50 hover:text-[#00ff66] hover:bg-white/10 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <div className="h-6 w-px bg-white/10 mx-2"></div>
                <div className="flex items-center gap-2 text-sm text-white/40">
                  <MapPin size={14} />
                  <span>IIT Patna, India</span>
                </div>
              </div>
            </motion.div>

            {/* Right - Terminal Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#00ff66]/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-50"></div>
                
                {/* Terminal Window */}
                <div className="relative bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                    </div>
                    <span className="ml-4 text-xs text-white/40 font-mono">portfolio.sh</span>
                  </div>
                  
                  {/* Terminal Content */}
                  <div className="p-6 font-mono text-sm space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-[#00ff66]">$</span>
                      <span className="text-white/80">whoami</span>
                    </div>
                    <div className="pl-6 text-white/50 space-y-1">
                      <p>→ Full-Stack Developer</p>
                      <p>→ Systems Programmer</p>
                      <p>→ AI/ML Researcher</p>
                    </div>
                    
                    <div className="flex items-start gap-3 pt-2">
                      <span className="text-[#00ff66]">$</span>
                      <span className="text-white/80">cat skills.json</span>
                    </div>
                    <div className="pl-6 text-white/50">
                      <p className="text-[#00ff66]">{"{"}</p>
                      <p className="pl-4">"systems": <span className="text-amber-400">"Rust, WASM"</span>,</p>
                      <p className="pl-4">"frontend": <span className="text-amber-400">"React, Next.js"</span>,</p>
                      <p className="pl-4">"mobile": <span className="text-amber-400">"Flutter, Dart"</span>,</p>
                      <p className="pl-4">"ai": <span className="text-amber-400">"PyTorch, TensorFlow"</span></p>
                      <p className="text-[#00ff66]">{"}"}</p>
                    </div>
                    
                    <div className="flex items-center gap-3 pt-2">
                      <span className="text-[#00ff66]">$</span>
                      <span className="text-white/80">_</span>
                      <span className="w-2 h-5 bg-[#00ff66] animate-pulse"></span>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -top-4 -right-4 p-4 bg-black border border-[#00ff66]/30 rounded-2xl shadow-xl"
                >
                  <Terminal className="text-[#00ff66]" size={24} />
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-4 -left-4 px-4 py-2 bg-black border border-white/10 rounded-xl shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-[#00ff66]" />
                    <span className="text-xs text-white/60">BS-MS @ IIT Patna</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-white/30 uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown size={20} className="text-white/30" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '10+', label: 'Projects Completed' },
              { value: '5+', label: 'Tech Stacks' },
              { value: '1', label: 'Research Paper' },
              { value: '∞', label: 'Lines of Code' }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <p className="text-4xl md:text-5xl font-bold text-[#00ff66]">{stat.value}</p>
                <p className="text-sm text-white/40">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
