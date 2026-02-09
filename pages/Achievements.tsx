
import React from 'react';
import { ACHIEVEMENTS_DATA } from '../constants';
import { Award, Calendar, ChevronRight, Target, Activity, Zap, TrendingUp, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements: React.FC = () => {
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
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#00ff66]/8 blur-[120px] md:blur-[180px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[400px] bg-emerald-500/5 blur-[100px] rounded-full -z-10"></div>
      <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none -z-10"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        <motion.div 
          variants={itemVariants}
          className="mb-28"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-neutral-900/95 via-neutral-800/80 to-neutral-900/60 border border-[#00ff66]/25 text-[#00ff66] font-tech text-[10px] sm:text-xs tracking-[0.2em] uppercase backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,102,0.1)] mb-8">
            <Target size={14} /> Service Record
          </div>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-tech font-bold tracking-[-0.03em] uppercase mb-14 leading-[0.9]">
            Mission <span className="text-[#00ff66] relative">
              Logs
              <svg className="absolute -bottom-2 left-0 w-full h-3 opacity-40" viewBox="0 0 120 12">
                <path d="M0 6 Q30 0, 60 6 T120 6" stroke="#00ff66" strokeWidth="2" fill="none"/>
              </svg>
            </span>
          </h2>

          {/* Statistics Header */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-14 border-t border-white/8">
             <div className="p-6 bg-neutral-950/50 rounded-2xl border border-white/5 space-y-3">
               <p className="text-[#606060] text-[9px] font-tech uppercase tracking-[0.2em]">Total XP</p>
                <div className="flex items-center gap-4">
                   <span className="text-5xl font-tech font-bold text-white">04+</span>
                 <span className="text-[#707070] text-xs">Years</span>
                </div>
             </div>
             <div className="p-6 bg-[#00ff66]/5 rounded-2xl border border-[#00ff66]/15 space-y-3">
               <p className="text-[#606060] text-[9px] font-tech uppercase tracking-[0.2em]">Success Rate</p>
                <div className="flex items-center gap-4">
                   <span className="text-5xl font-tech font-bold text-[#00ff66]">100%</span>
                   <Activity size={20} className="text-[#00ff66]/50" />
                </div>
             </div>
             <div className="hidden md:block p-6 bg-neutral-950/50 rounded-2xl border border-white/5 space-y-3">
               <p className="text-[#606060] text-[9px] font-tech uppercase tracking-[0.2em]">Industry Rank</p>
                <div className="flex items-center gap-4">
                   <span className="text-4xl font-tech font-bold text-white">Elite</span>
                 <TrendingUp size={20} className="text-[#00ff66]/50" />
                </div>
             </div>
          </div>
        </motion.div>

        {/* Timeline Log */}
        <div className="relative border-l-2 border-[#00ff66]/25 pl-8 sm:pl-16 space-y-20 ml-4">
          {ACHIEVEMENTS_DATA.map((achievement, idx) => (
            <motion.div 
              key={achievement.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Indicator */}
              <div className="absolute -left-[41px] sm:-left-[73px] top-0 w-10 h-10 sm:w-12 sm:h-12 bg-black border-2 border-[#00ff66]/40 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,255,102,0.15)] z-10 group-hover:border-[#00ff66] transition-all duration-500">
                <ChevronRight size={20} className="text-[#00ff66]" />
              </div>

              {/* Decorative Connector for Desktop */}
              <div className="absolute -left-[41px] sm:-left-[73px] top-6 w-20 h-[2px] bg-gradient-to-r from-[#00ff66]/40 to-transparent -z-10 hidden sm:block opacity-40"></div>
              
              <div className="group bg-gradient-to-br from-neutral-950 via-neutral-900/50 to-neutral-950 border border-white/10 p-8 sm:p-10 rounded-[2rem] relative overflow-hidden hover:border-[#00ff66]/35 transition-all duration-700 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ff66]/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                {/* Visual Flair */}
                <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700">
                   <Award size={140} />
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start gap-5 mb-9 relative z-10">
                  <div>
                    <div className="flex items-center gap-3 text-[#00ff66] text-[9px] font-tech uppercase tracking-[0.2em] mb-5">
                      <div className="w-2 h-2 bg-[#00ff66] rounded-full shadow-[0_0_8px_#00ff66] animate-pulse" />
                      {achievement.organization}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-tech font-bold text-white leading-tight uppercase tracking-[-0.02em] group-hover:text-[#00ff66] transition-colors duration-500">
                      {achievement.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 text-[#808080] text-[9px] font-tech bg-black/60 border border-white/10 px-5 py-3 rounded-xl">
                    <Calendar size={14} className="text-[#00ff66]" />
                    <span className="tracking-[0.1em]">LOG_DATE: {achievement.date}</span>
                  </div>
                </div>
                
                <p className="text-[#B0B0B0] text-base leading-[1.85] mb-10 relative z-10">
                  {achievement.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/8 relative z-10">
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/3 transition-all duration-300">
                    <div className="p-2 bg-[#00ff66]/10 rounded-lg text-[#00ff66]">
                      <Zap size={14} />
                    </div>
                    <span className="text-[9px] text-[#808080] uppercase tracking-[0.2em] font-tech">Verified Event</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/3 transition-all duration-300">
                    <div className="p-2 bg-neutral-900 rounded-lg text-[#808080]">
                      <Target size={14} />
                    </div>
                    <span className="text-[9px] text-[#808080] uppercase tracking-[0.2em] font-tech">High Impact</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Sign-off */}
        <motion.div 
          variants={itemVariants}
          className="mt-36 text-center py-20 border-t border-white/8 relative"
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02]">
            <Sparkles size={200} />
          </div>
          <p className="text-[#707070] font-tech text-[10px] uppercase tracking-[0.4em] mb-5 relative z-10">Continuous Development</p>
          <h4 className="text-white font-tech font-bold uppercase text-xl tracking-wide relative z-10">Next milestone under construction...</h4>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Achievements;
