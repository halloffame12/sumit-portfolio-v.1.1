
import React from 'react';
import { SERVICES_DATA } from '../constants';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Activity, ShieldCheck, Zap, Cpu, Settings, Globe, Layers, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const workflow = [
    { step: "01", title: "Architecture", desc: "System design & logic mapping.", icon: <Settings size={20} /> },
    { step: "02", title: "Full-Stack Dev", desc: "Unified code implementation.", icon: <Layers size={20} /> },
    { step: "03", title: "Hardening", desc: "Rigorous QA & security audits.", icon: <ShieldCheck size={20} /> },
    { step: "04", title: "Deployment", desc: "Automated cloud delivery.", icon: <Globe size={20} /> },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Enhanced Background Ambience */}
      <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-[#00ff66]/5 to-transparent pointer-events-none -z-10"></div>
      <div className="absolute -left-20 top-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#00ff66]/8 blur-[120px] md:blur-[180px] rounded-full pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[400px] bg-emerald-500/5 blur-[100px] rounded-full -z-10"></div>
      <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6"
      >
        <motion.div 
          variants={itemVariants}
          className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-28"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-neutral-900/95 via-neutral-800/80 to-neutral-900/60 border border-[#00ff66]/25 text-[#00ff66] font-tech text-[10px] sm:text-xs tracking-[0.2em] uppercase backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,102,0.1)] mb-7">
              <Zap size={14} className="text-[#00ff66]" /> Solution Modules
            </div>
            <h2 className="text-5xl sm:text-7xl font-tech font-bold tracking-[-0.03em] uppercase leading-[0.9] mb-9">
              System <span className="text-[#00ff66] relative">
                Solutions
                <svg className="absolute -bottom-2 left-0 w-full h-3 opacity-40" viewBox="0 0 200 12">
                  <path d="M0 6 Q50 0, 100 6 T200 6" stroke="#00ff66" strokeWidth="2" fill="none"/>
                </svg>
              </span>
            </h2>
            <p className="text-[#B0B0B0] text-lg sm:text-xl leading-[1.85]">
              Engineering <span className="text-white font-medium">end-to-end ecosystems</span>. I build the infrastructure that powers your business, from specialized AI models to high-concurrency Full-Stack backends.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-neutral-900/90 to-neutral-950/80 border border-white/10 p-10 rounded-[2rem] hidden xl:block hover:border-[#00ff66]/20 transition-all duration-500 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]"
          >
             <div className="space-y-5">
               <div className="flex justify-between items-center gap-16 text-[10px] font-tech text-[#808080] uppercase tracking-[0.2em]">
                   <span>Full-Stack Integrity</span>
                   <span className="text-[#00ff66]">100%</span>
                </div>
                <div className="w-52 h-2 bg-black rounded-full overflow-hidden">
                   <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2, delay: 0.5 }} className="h-full bg-gradient-to-r from-[#00ff66] to-emerald-400" />
                </div>
                <div className="flex items-center gap-3 pt-3">
                   <Activity size={14} className="text-[#00ff66]" />
                   <span className="text-[9px] text-[#707070] font-tech uppercase tracking-[0.2em]">Unified Logic Stream</span>
                </div>
             </div>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-36">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group p-8 sm:p-12 bg-gradient-to-br from-neutral-950 via-neutral-900/50 to-neutral-950 border border-white/10 rounded-[2.5rem] relative overflow-hidden hover:border-[#00ff66]/35 transition-all duration-700 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] hover:shadow-[0_40px_80px_-20px_rgba(0,255,102,0.1)]"
            >
              {/* Hover glow */}
              <div className="absolute -right-12 -top-12 w-64 h-64 bg-[#00ff66]/5 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff66]/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="flex items-start justify-between mb-10 relative z-10">
                <div className="p-5 bg-[#00ff66]/10 border border-[#00ff66]/20 rounded-2xl text-[#00ff66] group-hover:bg-[#00ff66]/15 group-hover:border-[#00ff66]/35 transition-all duration-500">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 32 })}
                </div>
                <div className="text-[9px] font-tech text-[#707070] uppercase tracking-[0.2em] border border-white/10 px-4 py-2 rounded-xl bg-black/30">
                  VER: 2.5.0
                </div>
              </div>

              <h3 className="text-3xl font-tech font-bold text-white mb-7 uppercase tracking-[-0.02em] relative z-10 group-hover:text-[#00ff66] transition-colors duration-500">{service.title}</h3>
              
              <p className="text-[#B0B0B0] text-base leading-[1.85] mb-10 relative z-10">
                {service.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 relative z-10">
                {service.features.map(feature => (
                  <div key={feature} className="flex items-center gap-3 text-[#909090] text-xs font-tech p-2 rounded-lg hover:bg-white/3 transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-[#00ff66]/50" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-white/8 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                   <div className="relative">
                     <div className="w-2.5 h-2.5 rounded-full bg-[#00ff66] animate-pulse shadow-[0_0_10px_#00ff66]" />
                   </div>
                   <span className="text-[9px] font-tech text-[#707070] uppercase tracking-[0.2em]">Architecture Optimized</span>
                </div>
                <Link to="/contact" className="flex items-center gap-2 text-[#00ff66] text-xs font-tech font-bold uppercase tracking-[0.15em] hover:translate-x-1 transition-transform duration-300">
                  Get Started <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Workflow Section */}
        <motion.div 
          variants={itemVariants}
          className="relative pt-24 border-t border-white/8"
        >
           <div className="text-center mb-20">
             <h3 className="text-3xl sm:text-4xl font-tech font-bold uppercase tracking-[-0.02em] mb-5">The Architectural <span className="text-[#00ff66]">Cycle</span></h3>
             <p className="text-[#707070] text-xs font-tech uppercase tracking-[0.2em]">End-to-End Production Standards</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-gradient-to-br from-neutral-900/90 to-neutral-950/70 border border-white/8 p-10 rounded-[2rem] text-center hover:border-[#00ff66]/25 transition-all duration-500 shadow-[0_25px_50px_-15px_rgba(0,0,0,0.5)]"
              >
                <div className="w-14 h-14 bg-black border border-white/10 rounded-xl flex items-center justify-center mx-auto mb-7 text-[#808080] group-hover:border-[#00ff66]/30 group-hover:text-[#00ff66] transition-all duration-500">
                  {item.icon}
                </div>
                <span className="text-[#00ff66] font-tech text-xs font-bold mb-3 block tracking-[0.2em]">{item.step}</span>
                <h4 className="text-white font-tech font-bold uppercase text-sm mb-4 tracking-wide">{item.title}</h4>
                <p className="text-[#808080] text-xs leading-[1.7]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
