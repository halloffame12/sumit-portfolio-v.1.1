import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS_DATA } from '../constants';
import { Trophy, Award, Medal, Star, Calendar, Building2 } from 'lucide-react';

const Achievements: React.FC = () => {
  const getIcon = (index: number) => {
    const icons = [Trophy, Award, Medal, Star];
    const Icon = icons[index % icons.length];
    return <Icon size={20} />;
  };

  return (
    <div className="min-h-screen pt-28 pb-24 relative overflow-hidden">
      
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-[#00ff66]/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-radial from-amber-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#00ff66] text-sm font-medium tracking-wider uppercase mb-4">Recognition</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Achievements &<br />
            <span className="text-white/40">milestones.</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl">
            A journey of continuous learning, competition, and academic contributions.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-6 mb-16"
        >
          <div className="text-center p-6 bg-white/[0.02] rounded-2xl border border-white/5">
            <p className="text-3xl font-bold text-[#00ff66] mb-1">{ACHIEVEMENTS_DATA.length}</p>
            <p className="text-xs text-white/40">Achievements</p>
          </div>
          <div className="text-center p-6 bg-white/[0.02] rounded-2xl border border-white/5">
            <p className="text-3xl font-bold text-amber-400 mb-1">1</p>
            <p className="text-xs text-white/40">Research Paper</p>
          </div>
          <div className="text-center p-6 bg-white/[0.02] rounded-2xl border border-white/5">
            <p className="text-3xl font-bold text-purple-400 mb-1">3+</p>
            <p className="text-xs text-white/40">Competitions</p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-6">
          {ACHIEVEMENTS_DATA.map((achievement, idx) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="relative"
            >
              <div className="flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#00ff66]/10 rounded-xl text-[#00ff66] border border-[#00ff66]/20">
                    {getIcon(idx)}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-grow p-6 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-[#00ff66]/20 transition-colors">
                  {/* Header Row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-semibold text-white">
                      {achievement.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-white/40">
                      <Calendar size={12} />
                      <span>{achievement.date}</span>
                    </div>
                  </div>
                  
                  {/* Organization */}
                  <div className="flex items-center gap-2 mb-4 text-sm text-[#00ff66]">
                    <Building2 size={14} />
                    <span>{achievement.organization}</span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-white/50 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
              
              {/* Connector Line */}
              {idx < ACHIEVEMENTS_DATA.length - 1 && (
                <div className="absolute left-6 top-14 w-px h-[calc(100%-20px)] bg-gradient-to-b from-[#00ff66]/30 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full mb-6">
            <Star size={14} className="text-amber-400" />
            <span className="text-xs text-amber-400 font-medium">Mindset</span>
          </div>
          <blockquote className="text-2xl md:text-3xl font-light text-white/60 max-w-2xl mx-auto leading-relaxed">
            "Every achievement is just a <span className="text-white">stepping stone</span> to the next challenge."
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;
