
import React from 'react';
import { User, Terminal, Target, BookOpen, Briefcase, Cpu, Layers, Code, Smartphone, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden px-6">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00ff66]/5 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-24">
          <div className="relative group shrink-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-48 h-48 sm:w-64 sm:h-64 rounded-[3rem] bg-neutral-950 border-2 border-[#00ff66]/20 overflow-hidden relative shadow-[0_0_50px_rgba(0,255,102,0.1)]"
            >
              <img 
                src="https://i.postimg.cc/rwjfhvrk/sumitc.png" 
                alt="Sumit Chauhan" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-75 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              <div className="absolute inset-0 border-[10px] border-black/50 pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-[#00ff66]/40 shadow-[0_0_15px_#00ff66] animate-[scan_4s_infinite] z-20"></div>
            </motion.div>
            
            <div className="absolute -bottom-4 -right-4 p-4 bg-black border border-white/10 rounded-2xl shadow-xl z-20 group-hover:border-[#00ff66]/50 transition-colors">
              <Terminal size={24} className="text-[#00ff66]" />
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-grow space-y-6 text-center md:text-left"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/20 text-[#00ff66] font-tech text-xs tracking-widest uppercase">
              Full-Stack Architect
            </div>
            <h2 className="text-4xl sm:text-6xl font-tech font-bold tracking-tighter uppercase leading-none">
              The <span className="text-[#00ff66] neon-glow">Architect</span> <br />
              Behind the Code
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl leading-relaxed">
              I am <span className="text-white font-medium">Sumit Chauhan</span>, a Full-Stack Application Developer and AI/ML researcher specializing in building ultra-scalable mobile and web ecosystems.
            </p>
          </motion.div>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-neutral-900/40 p-8 sm:p-12 rounded-[3rem] border border-white/5 backdrop-blur-sm relative overflow-hidden group">
              <h3 className="text-2xl font-tech font-bold text-[#00ff66] uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#00ff66]"></span>
                Who Am I?
              </h3>
              <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
                <p>
                  As an <span className="text-white font-semibold">AI/ML student</span>, I bridge the gap between deterministic logic and probabilistic learning. My core focus lies in <span className="text-[#00ff66]">Full-Stack development</span> and <span className="text-[#00ff66]">Android & iOS engineering using Flutter & Dart</span>, ensuring that cross-platform performance never compromises on native user experience.
                </p>
                <p>
                  I don't just write code; I design <span className="text-white font-medium">scalable architectures</span>. Whether it's a real-time chat infrastructure like <span className="text-[#00ff66]">AnonChat</span> or complex AI models, my philosophy is rooted in performance, security, and a future-ready tech stack.
                </p>
                <p>
                  Based in India, I've spent thousands of hours perfecting my craft, transitioning from simple scripts to orchestrating complex distributed systems that handle thousands of concurrent interactions.
                </p>
              </div>
            </div>

            {/* The Mobile Frontier Section (User-Requested Detail) */}
            <div className="p-8 sm:p-12 bg-neutral-950/80 border border-[#00ff66]/20 rounded-[3rem] relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Smartphone size={100} />
               </div>
               <h3 className="text-2xl font-tech font-bold text-white uppercase mb-6 flex items-center gap-3">
                  The <span className="text-[#00ff66]">Mobile</span> Frontier
               </h3>
               <p className="text-gray-400 mb-8 leading-relaxed">
                  Specialized in high-end <span className="text-white font-medium">Flutter & Dart development</span>. I build cross-platform applications for iOS and Android that don't just work—they perform at native speeds with beautiful, fluid motion.
               </p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                     <h4 className="text-[#00ff66] font-tech text-xs uppercase tracking-widest flex items-center gap-2">
                        <Zap size={14} /> Core Ecosystem
                     </h4>
                     <ul className="text-gray-500 text-sm space-y-2">
                        <li>• State Management (Provider/Riverpod)</li>
                        <li>• Custom Native Integrations</li>
                        <li>• Dynamic UI Architecture</li>
                        <li>• CI/CD Pipeline Automation</li>
                     </ul>
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-[#00ff66] font-tech text-xs uppercase tracking-widest flex items-center gap-2">
                        <ShieldCheck size={14} /> Quality Control
                     </h4>
                     <ul className="text-gray-500 text-sm space-y-2">
                        <li>• Performance Profiling</li>
                        <li>• Offline-First Design</li>
                        <li>• Secure Storage Implementation</li>
                        <li>• Platform-Specific UX</li>
                     </ul>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Side Panels */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-neutral-900/60 border border-white/5 rounded-[2.5rem] relative overflow-hidden"
            >
              <h3 className="text-xl font-tech font-bold text-white uppercase mb-6 flex items-center gap-3">
                <BookOpen size={20} className="text-[#00ff66]" />
                Education
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-[#00ff66] font-tech text-xs tracking-widest uppercase mb-1">IIT Patna</h4>
                  <p className="text-white font-bold">BS-MS in CSDA</p>
                  <p className="text-gray-500 text-xs mt-1 italic">Computer Science and Data Analytics.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-black border border-[#00ff66]/20 rounded-[2.5rem] group"
            >
              <h3 className="text-xl font-tech font-bold text-white uppercase mb-6 flex items-center gap-3">
                <Briefcase size={20} className="text-[#00ff66]" />
                Industry Status
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Live Projects</span>
                  <span className="text-white font-tech">13+</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">App Versions</span>
                  <span className="text-[#00ff66] font-tech">V2.6.0</span>
                </div>
                <div className="pt-6">
                  <Link to="/contact" className="block text-center py-3 bg-[#00ff66]/10 border border-[#00ff66]/30 text-[#00ff66] rounded-xl text-xs font-tech font-bold uppercase tracking-widest hover:bg-[#00ff66] hover:text-black transition-all">
                    INITIATE COLLAB
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-10px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(260px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default About;
