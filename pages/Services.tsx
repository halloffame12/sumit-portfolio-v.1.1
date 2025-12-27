
import React from 'react';
import { SERVICES_DATA } from '../constants';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Activity, ShieldCheck, Zap, Cpu, Settings, Globe, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const workflow = [
    { step: "01", title: "Architecture", desc: "System design & logic mapping.", icon: <Settings size={18} /> },
    { step: "02", title: "Full-Stack Dev", desc: "Unified code implementation.", icon: <Layers size={18} /> },
    { step: "03", title: "Hardening", desc: "Rigorous QA & security audits.", icon: <ShieldCheck size={18} /> },
    { step: "04", title: "Deployment", desc: "Automated cloud delivery.", icon: <Globe size={18} /> },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-[#00ff66]/5 to-transparent pointer-events-none -z-10"></div>
      <div className="absolute -left-20 top-1/2 w-80 h-80 bg-[#00ff66]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/20 text-[#00ff66] font-tech text-[10px] tracking-widest uppercase mb-6">
              <Zap size={12} /> Solution Modules
            </div>
            <h2 className="text-5xl sm:text-7xl font-tech font-bold tracking-tighter uppercase leading-[0.9] mb-8">
              System <span className="text-[#00ff66] neon-glow">Solutions</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed">
              Engineering <span className="text-white font-medium">end-to-end ecosystems</span>. I build the infrastructure that powers your business, from specialized AI models to high-concurrency Full-Stack backends.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-neutral-900/50 border border-white/5 p-8 rounded-[2.5rem] backdrop-blur-md hidden xl:block"
          >
             <div className="space-y-4">
                <div className="flex justify-between items-center gap-12 text-[10px] font-tech text-gray-500 uppercase tracking-widest">
                   <span>Full-Stack Integrity</span>
                   <span className="text-[#00ff66]">100%</span>
                </div>
                <div className="w-48 h-1.5 bg-black rounded-full overflow-hidden">
                   <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} className="h-full bg-[#00ff66]" />
                </div>
                <div className="flex items-center gap-3 pt-2">
                   <Activity size={14} className="text-[#00ff66] animate-pulse" />
                   <span className="text-[9px] text-gray-600 font-tech uppercase">Unified Logic Stream</span>
                </div>
             </div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-32">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 sm:p-12 bg-neutral-950 border border-white/5 rounded-[3rem] hover:border-[#00ff66]/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#00ff66]/5 blur-[80px] rounded-full group-hover:bg-[#00ff66]/10 transition-all pointer-events-none"></div>
              
              <div className="flex items-start justify-between mb-10">
                <div className="p-5 bg-emerald-500/10 rounded-2xl group-hover:bg-[#00ff66] group-hover:text-black transition-all duration-300">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 32 })}
                </div>
                <div className="text-[10px] font-tech text-gray-700 uppercase tracking-widest border border-white/5 px-3 py-1 rounded-full">
                  VER: 2.5.0
                </div>
              </div>

              <h3 className="text-3xl font-tech font-bold text-white mb-6 uppercase group-hover:text-[#00ff66] transition-colors">{service.title}</h3>
              
              <p className="text-gray-400 text-base leading-relaxed mb-10">
                {service.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {service.features.map(feature => (
                  <div key={feature} className="flex items-center gap-3 text-gray-500 text-xs font-tech group-hover:text-gray-300 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]/40" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse" />
                   <span className="text-[9px] font-tech text-gray-600 uppercase tracking-[0.2em]">Architecture Optimized</span>
                </div>
                <Link to="/contact" className="flex items-center gap-2 text-[#00ff66] text-xs font-tech font-bold uppercase tracking-widest group-hover:translate-x-2 transition-all">
                  Get Started <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Workflow Section */}
        <div className="relative pt-20 border-t border-white/5">
          <div className="text-center mb-16">
             <h3 className="text-3xl font-tech font-bold uppercase tracking-tighter mb-4">The Architectural <span className="text-[#00ff66]">Cycle</span></h3>
             <p className="text-gray-500 text-sm font-tech uppercase tracking-widest">End-to-End Production Standards</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-neutral-900/40 border border-white/5 p-8 rounded-[2rem] text-center group hover:border-[#00ff66]/20 transition-all"
              >
                <div className="w-12 h-12 bg-black border border-white/5 rounded-xl flex items-center justify-center mx-auto mb-6 text-gray-500 group-hover:text-[#00ff66] transition-colors">
                  {item.icon}
                </div>
                <span className="text-[#00ff66] font-tech text-xs font-bold mb-2 block">{item.step}</span>
                <h4 className="text-white font-tech font-bold uppercase text-sm mb-3">{item.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
