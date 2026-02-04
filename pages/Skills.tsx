
import React from 'react';
import { SKILLS_DATA } from '../constants';
import { motion } from 'framer-motion';
// Added Database to the imports from lucide-react
import { CheckCircle2, TrendingUp, Award, Zap, Code, Shield, Brain, Layers, Smartphone, Database, Terminal, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden px-6">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00ff66]/5 blur-[150px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24 text-center lg:text-left max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block px-5 py-2 rounded-lg bg-[#00ff66]/10 border border-[#00ff66]/30 text-[#00ff66] font-tech text-xs tracking-widest uppercase">
              Full-Stack Capability Index
            </div>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-tech font-bold tracking-tighter uppercase leading-none">
              Technical <span className="text-[#00ff66] neon-glow">DNA</span>
            </h2>
            <p className="text-[#E6E6E6] text-lg sm:text-xl leading-relaxed">
              Merging artistic UI with scientific performance. I architect <span className="text-white font-medium">end-to-end digital ecosystems</span>—from low-latency backends to fluid mobile and web interfaces.
            </p>
          </motion.div>
        </div>

        {/* Primary Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS_DATA.map((category, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`bg-neutral-950 p-10 rounded-[3rem] border relative flex flex-col h-full border-white/10`}
            >
              <div className="flex items-center gap-6 mb-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-neutral-900 text-[#00ff66] border border-white/10`}>
                  {category.icon}
                </div>
                <div>
                   <h3 className="font-tech text-2xl font-bold tracking-tight uppercase leading-none">
                     {category.title}
                   </h3>
                   <div className="mt-2 text-[10px] font-tech text-[#A1A1A1] uppercase tracking-widest">
                     Proficiency: L9 Architect
                   </div>
                </div>
              </div>

              <p className="text-[#A1A1A1] text-sm mb-10 leading-relaxed min-h-[4rem]">
                {category.description}
              </p>
              
              <div className="space-y-4 flex-grow">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-4 group/item">
                    <CheckCircle2 size={16} className={`flex-shrink-0 text-[#00ff66] opacity-60`} />
                    <span className="text-[#E6E6E6] text-base font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-between text-[10px] font-tech text-[#A1A1A1] uppercase tracking-widest">
                 <span>Architecture: Full-Stack</span>
                 <Layers size={14} className="text-[#A1A1A1]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Focus Detail: Updated Full-Stack Frontier Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 sm:p-20 bg-neutral-950 border border-[#00ff66]/20 rounded-[4rem] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] rotate-12">
            <Layers size={300} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-4xl sm:text-5xl font-tech font-bold uppercase tracking-tighter">
                The <span className="text-[#00ff66]">Full-Stack</span> Frontier
              </h3>
                <p className="text-[#E6E6E6] text-lg leading-relaxed">
                I don't just build interfaces; I engineer <span className="text-white font-medium">unified digital platforms</span>. My expertise spans the entire development lifecycle, combining advanced <span className="text-white">Flutter mobile apps</span> with high-concurrency <span className="text-white">Node.js/React</span> backends, <span className="text-white">Cloud & DevOps</span> infrastructure, and intelligent <span className="text-white">AI-driven</span> logic.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                   <h4 className="text-[#00ff66] font-tech text-xs uppercase tracking-widest mb-4">Core Tech Stack</h4>
                   <ul className="text-[#A1A1A1] text-sm space-y-2">
                      <li>• Mobile: Flutter & React Native</li>
                      <li>• Frontend: React & Next.js 14</li>
                      <li>• Backend: Node.js, NestJS, FastAPI</li>
                      <li>• State: Redux, Riverpod, Zustand</li>
                   </ul>
                </div>
                <div>
                   <h4 className="text-[#00ff66] font-tech text-xs uppercase tracking-widest mb-4">Infrastructure</h4>
                   <ul className="text-[#A1A1A1] text-sm space-y-2">
                      <li>• Cloud: AWS, GCP, Vercel</li>
                      <li>• Containers: Docker, Kubernetes</li>
                      <li>• Database: PostgreSQL, MongoDB</li>
                      <li>• CI/CD: GitHub Actions, Nginx</li>
                   </ul>
                </div>
              </div>
            </div>
            
              <div className="flex flex-col items-center justify-center p-10 bg-black/70 border border-white/10 rounded-[3rem]">
               <div className="relative">
                  <div className="w-32 h-32 rounded-full border-4 border-[#00ff66]/10 flex items-center justify-center">
                     <div className="text-4xl font-tech font-bold text-white">100<span className="text-[#00ff66] text-xl">%</span></div>
                  </div>
                  <svg className="absolute top-0 left-0 w-32 h-32 -rotate-90">
                    <circle 
                      cx="64" cy="64" r="60" 
                      fill="transparent" 
                      stroke="#00ff66" 
                      strokeWidth="4" 
                      strokeDasharray="377" 
                      strokeDashoffset="0"
                      className="opacity-50"
                    />
                  </svg>
               </div>
              <p className="mt-6 text-xs font-tech text-[#A1A1A1] uppercase tracking-widest">Full-Stack Synergy Rating</p>
              <div className="mt-4 flex gap-4 text-[#A1A1A1]">
                  <Smartphone size={16} />
                  <Globe size={16} />
                  <Database size={16} />
                  <Brain size={16} />
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
