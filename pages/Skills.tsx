import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../constants';
import { Code2, Layers, Cpu, Smartphone, Brain, Cloud, Database, Workflow } from 'lucide-react';

const Skills: React.FC = () => {
  const techStack = [
    { name: 'Rust', category: 'Systems' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'Python', category: 'AI/ML' },
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Full-Stack' },
    { name: 'Flutter', category: 'Mobile' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'WebAssembly', category: 'Systems' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'PyTorch', category: 'AI/ML' },
  ];

  const proficiencies = [
    { skill: 'Systems Programming', level: 90, icon: <Cpu size={18} />, color: 'from-orange-500 to-red-500' },
    { skill: 'Frontend Development', level: 95, icon: <Code2 size={18} />, color: 'from-cyan-500 to-blue-500' },
    { skill: 'Backend Development', level: 90, icon: <Database size={18} />, color: 'from-green-500 to-emerald-500' },
    { skill: 'Mobile Development', level: 85, icon: <Smartphone size={18} />, color: 'from-purple-500 to-violet-500' },
    { skill: 'AI & Machine Learning', level: 75, icon: <Brain size={18} />, color: 'from-pink-500 to-rose-500' },
    { skill: 'Cloud & DevOps', level: 80, icon: <Cloud size={18} />, color: 'from-amber-500 to-yellow-500' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-32 relative overflow-hidden bg-black">
      
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-gradient-radial from-[#00ff66]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-cyan-500/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#00ff66]/10 rounded-full border border-[#00ff66]/20 mb-6"
          >
            <svg viewBox="0 0 48 48" fill="none" className="w-4 h-4">
              <circle cx="24" cy="24" r="22" fill="#00ff66" />
              <path d="M30 16H21C18.79 16 17 17.79 17 20C17 22.21 18.79 24 21 24H27C29.21 24 31 25.79 31 28C31 30.21 29.21 32 27 32H18" stroke="black" strokeWidth="3" strokeLinecap="round" fill="none" />
              <circle cx="33" cy="15" r="3" fill="black" />
            </svg>
            <span className="text-sm text-[#00ff66] font-medium">Technical Expertise</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Skills & Stack
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A comprehensive toolkit spanning systems programming, web development, mobile apps, and artificial intelligence.
          </p>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-24"
        >
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.03 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative px-4 py-2.5 bg-white/[0.03] rounded-xl border border-white/[0.06] hover:border-[#00ff66]/30 hover:bg-[#00ff66]/5 transition-all duration-300 cursor-default"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
              <span className="absolute -top-2 -right-2 px-2 py-0.5 text-[10px] bg-white/10 text-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Categories Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-white/5 rounded-xl">
              <Layers size={20} className="text-[#00ff66]" />
            </div>
            <h2 className="text-2xl font-bold text-white">Skill Categories</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SKILLS_DATA.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.06] hover:border-[#00ff66]/20 transition-all duration-500"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00ff66]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 bg-[#00ff66]/10 rounded-xl text-[#00ff66] group-hover:bg-[#00ff66]/20 transition-colors">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{category.title}</h3>
                      <p className="text-xs text-white/60">{category.description}</p>
                    </div>
                  </div>
                  
                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <span 
                        key={skillIdx}
                        className="px-2.5 py-1 text-xs bg-white/[0.04] text-white/60 rounded-lg border border-white/[0.04] hover:text-[#00ff66] hover:border-[#00ff66]/20 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Proficiency Bars */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-white/5 rounded-xl">
              <Workflow size={20} className="text-[#00ff66]" />
            </div>
            <h2 className="text-2xl font-bold text-white">Proficiency</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {proficiencies.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="group p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 text-white/60 group-hover:text-[#00ff66] transition-colors">
                      {item.icon}
                    </div>
                    <span className="font-medium text-white">{item.skill}</span>
                  </div>
                  <span className="text-lg font-bold text-[#00ff66]">{item.level}%</span>
                </div>
                
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-10 md:p-14 rounded-3xl bg-gradient-to-br from-[#00ff66]/10 via-[#00ff66]/5 to-transparent border border-[#00ff66]/10 overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff66]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative">
            <div className="text-6xl text-[#00ff66]/20 font-serif mb-4">"</div>
            <blockquote className="text-xl md:text-2xl lg:text-3xl text-white/70 leading-relaxed max-w-3xl mx-auto font-light">
              Code is poetry written for machines to perform and humans to appreciate. 
              <span className="text-white font-normal"> Every line should serve a purpose.</span>
            </blockquote>
            <div className="mt-8 text-sm text-white/50">— My Development Philosophy</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
