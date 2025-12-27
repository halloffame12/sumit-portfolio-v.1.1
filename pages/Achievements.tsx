
import React from 'react';
import { ACHIEVEMENTS_DATA } from '../constants';
import { Award, Calendar, ChevronRight, Target, Activity, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden px-6">
      {/* Visual Accents */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#00ff66]/5 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-grid opacity-[0.02] pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00ff66] font-tech text-[10px] tracking-widest uppercase mb-6">
            <Target size={12} /> Service Record
          </div>
          <h2 className="text-5xl sm:text-7xl font-tech font-bold tracking-tighter uppercase mb-12">
            Mission <span className="text-[#00ff66] neon-glow">Logs</span>
          </h2>

          {/* Statistics Header */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-10 border-t border-white/5">
             <div className="space-y-1">
                <p className="text-gray-600 text-[10px] font-tech uppercase tracking-widest">Total XP</p>
                <div className="flex items-center gap-3">
                   <span className="text-3xl font-tech font-bold text-white">04+</span>
                   <span className="text-gray-700 text-xs">Years</span>
                </div>
             </div>
             <div className="space-y-1">
                <p className="text-gray-600 text-[10px] font-tech uppercase tracking-widest">Success Rate</p>
                <div className="flex items-center gap-3">
                   <span className="text-3xl font-tech font-bold text-[#00ff66]">100%</span>
                   <Activity size={18} className="text-[#00ff66]/40" />
                </div>
             </div>
             <div className="space-y-1 hidden md:block">
                <p className="text-gray-600 text-[10px] font-tech uppercase tracking-widest">Industry Rank</p>
                <div className="flex items-center gap-3">
                   <span className="text-3xl font-tech font-bold text-white">Elite</span>
                   <TrendingUp size={18} className="text-gray-700" />
                </div>
             </div>
          </div>
        </motion.div>

        {/* Timeline Log */}
        <div className="relative border-l-2 border-[#00ff66]/20 pl-8 sm:pl-16 space-y-16 ml-4">
          {ACHIEVEMENTS_DATA.map((achievement, idx) => (
            <motion.div 
              key={achievement.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Timeline Indicator */}
              <div className="absolute -left-[41px] sm:-left-[73px] top-0 w-8 h-8 sm:w-10 sm:h-10 bg-black border-2 border-[#00ff66]/40 rounded-full flex items-center justify-center group-hover:bg-[#00ff66] group-hover:border-[#00ff66] transition-all shadow-[0_0_20px_rgba(0,255,102,0.1)] z-10">
                <ChevronRight size={18} className="text-[#00ff66] group-hover:text-black transition-colors" />
              </div>

              {/* Decorative Connector for Desktop */}
              <div className="absolute -left-[41px] sm:-left-[73px] top-5 w-16 h-[2px] bg-gradient-to-r from-[#00ff66]/40 to-transparent -z-10 hidden sm:block opacity-30"></div>
              
              <div className="bg-neutral-950 border border-white/5 p-8 rounded-[2.5rem] group-hover:border-[#00ff66]/30 transition-all duration-500 relative overflow-hidden">
                {/* Visual Flair */}
                <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                   <Award size={120} />
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                  <div>
                    <div className="flex items-center gap-3 text-[#00ff66] text-[10px] font-tech uppercase tracking-[0.2em] mb-4">
                      <div className="w-1 h-1 bg-[#00ff66] rounded-full" />
                      {achievement.organization}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-tech font-bold text-white leading-tight uppercase group-hover:text-[#00ff66] transition-colors">
                      {achievement.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500 text-[10px] font-tech bg-black border border-white/5 px-4 py-2 rounded-xl group-hover:border-[#00ff66]/20 transition-all">
                    <Calendar size={14} className="text-[#00ff66]" />
                    <span>LOG_DATE: {achievement.date}</span>
                  </div>
                </div>
                
                <p className="text-gray-500 text-base leading-relaxed mb-10 group-hover:text-gray-300 transition-colors">
                  {achievement.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-emerald-500/10 rounded-lg text-[#00ff66]">
                      <Zap size={14} />
                    </div>
                    <span className="text-[9px] text-gray-600 uppercase tracking-widest font-tech">Verified Event</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-neutral-900 rounded-lg text-gray-600">
                      <Target size={14} />
                    </div>
                    <span className="text-[9px] text-gray-600 uppercase tracking-widest font-tech">High Impact</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Sign-off */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center py-20 border-t border-white/5"
        >
           <p className="text-gray-700 font-tech text-[10px] uppercase tracking-[0.5em] mb-4">Continuous Development</p>
           <h4 className="text-white font-tech font-bold uppercase text-lg">Next milestone under construction...</h4>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;
