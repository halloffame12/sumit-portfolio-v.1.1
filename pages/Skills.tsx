import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../constants';
import { Zap, TrendingUp } from 'lucide-react';

const Skills: React.FC = () => {
  const techLogos = [
    { name: 'Rust', color: '#DEA584' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Python', color: '#3776AB' },
    { name: 'React', color: '#61DAFB' },
    { name: 'Flutter', color: '#02569B' },
    { name: 'Node.js', color: '#339933' },
    { name: 'PostgreSQL', color: '#4169E1' },
    { name: 'Docker', color: '#2496ED' }
  ];

  return (
    <div className="min-h-screen pt-28 pb-24 relative overflow-hidden">
      
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-[#00ff66]/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#00ff66] text-sm font-medium tracking-wider uppercase mb-4">Skills & Technologies</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Technical<br />
            <span className="text-white/40">expertise.</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl">
            From systems programming to cloud infrastructure, I bring a comprehensive toolkit to every project.
          </p>
        </motion.div>

        {/* Tech Marquee */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-20 overflow-hidden py-6"
        >
          <div className="flex gap-8 animate-marquee">
            {[...techLogos, ...techLogos].map((tech, i) => (
              <div 
                key={i}
                className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10 whitespace-nowrap"
              >
                <div className="w-2 h-2 rounded-full bg-[#00ff66]"></div>
                <span className="text-white/70 font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_DATA.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="group p-6 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-[#00ff66]/20 transition-all duration-500"
            >
              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-[#00ff66]/10 rounded-xl text-[#00ff66] group-hover:bg-[#00ff66]/20 transition-colors">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{category.title}</h3>
                  <p className="text-xs text-white/40">{category.description}</p>
                </div>
              </div>
              
              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    className="px-3 py-1.5 text-xs bg-white/5 text-white/60 rounded-lg border border-white/5 hover:border-[#00ff66]/30 hover:text-[#00ff66] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 p-8 md:p-12 bg-gradient-to-br from-white/[0.03] to-transparent rounded-3xl border border-white/5"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-[#00ff66]/10 rounded-lg">
              <TrendingUp size={20} className="text-[#00ff66]" />
            </div>
            <h3 className="text-xl font-semibold text-white">Proficiency Levels</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { skill: 'Systems Programming (Rust/WASM)', level: 90 },
              { skill: 'Frontend Development (React/Next.js)', level: 95 },
              { skill: 'Mobile Development (Flutter)', level: 85 },
              { skill: 'Backend Development (Node.js)', level: 90 },
              { skill: 'AI/Machine Learning', level: 75 },
              { skill: 'Cloud & DevOps', level: 80 }
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">{item.skill}</span>
                  <span className="text-[#00ff66]">{item.level}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#00ff66] to-emerald-400 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00ff66]/10 rounded-full mb-6">
            <Zap size={14} className="text-[#00ff66]" />
            <span className="text-xs text-[#00ff66] font-medium">Philosophy</span>
          </div>
          <blockquote className="text-2xl md:text-3xl font-light text-white/60 max-w-3xl mx-auto leading-relaxed">
            "Code is not just about solving problems—it's about <span className="text-white">crafting elegant solutions</span> that stand the test of time."
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
