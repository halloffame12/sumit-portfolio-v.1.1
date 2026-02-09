import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Cpu, Globe, Smartphone, Brain, ArrowUpRight, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const experiences = [
    {
      period: '2024 - Present',
      title: 'Systems & OS Research',
      company: 'Personal Projects',
      description: 'Building ForgeStack OS and BrowserOS using Rust & WebAssembly. Published research on virtual operating systems.',
      tech: ['Rust', 'WebAssembly', 'OS Concepts']
    },
    {
      period: '2023 - Present',
      title: 'Full-Stack Development',
      company: 'Freelance',
      description: 'Architecting scalable web applications with modern frameworks and cloud infrastructure.',
      tech: ['React', 'Node.js', 'AWS', 'PostgreSQL']
    },
    {
      period: '2022 - Present',
      title: 'Mobile App Development',
      company: 'Freelance',
      description: 'Creating cross-platform mobile experiences with Flutter and native technologies.',
      tech: ['Flutter', 'Dart', 'Firebase']
    }
  ];

  const expertise = [
    { icon: <Cpu size={22} />, title: 'Systems', desc: 'Rust, WASM, OS Dev', color: 'from-orange-500/20 to-orange-500/5' },
    { icon: <Globe size={22} />, title: 'Web', desc: 'React, Next.js, Node', color: 'from-cyan-500/20 to-cyan-500/5' },
    { icon: <Smartphone size={22} />, title: 'Mobile', desc: 'Flutter, React Native', color: 'from-purple-500/20 to-purple-500/5' },
    { icon: <Brain size={22} />, title: 'AI/ML', desc: 'PyTorch, TensorFlow', color: 'from-pink-500/20 to-pink-500/5' }
  ];

  const quickFacts = [
    { icon: <GraduationCap size={18} />, label: 'Education', value: 'BS-MS @ IIT Patna' },
    { icon: <MapPin size={18} />, label: 'Location', value: 'India' },
    { icon: <Calendar size={18} />, label: 'Experience', value: '4+ Years' },
    { icon: <Briefcase size={18} />, label: 'Focus', value: 'Systems & Full-Stack' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-32 relative overflow-hidden bg-black">
      
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#00ff66]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-emerald-500/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start mb-24">
          
          {/* Left - Photo */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Photo Card */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#00ff66]/20 to-emerald-500/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
                <img 
                  src="https://i.postimg.cc/hGCbJj5s/sumit-chauhan.png"
                  alt="Sumit Chauhan"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-2xl font-bold text-white mb-1">Sumit Chauhan</h2>
                  <p className="text-[#00ff66] text-sm font-medium">Full-Stack Developer & Systems Programmer</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -right-4 px-4 py-3 bg-black border border-white/10 rounded-xl shadow-xl"
            >
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 48 48" fill="none" className="w-4 h-4">
                  <circle cx="24" cy="24" r="22" fill="#00ff66" />
                  <path d="M30 16H21C18.79 16 17 17.79 17 20C17 22.21 18.79 24 21 24H27C29.21 24 31 25.79 31 28C31 30.21 29.21 32 27 32H18" stroke="black" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <circle cx="33" cy="15" r="3" fill="black" />
                </svg>
                <span className="text-sm text-white/70">Passionate about code</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00ff66]/10 rounded-full border border-[#00ff66]/20">
              <svg viewBox="0 0 48 48" fill="none" className="w-4 h-4">
                <circle cx="24" cy="24" r="22" fill="#00ff66" />
                <path d="M30 16H21C18.79 16 17 17.79 17 20C17 22.21 18.79 24 21 24H27C29.21 24 31 25.79 31 28C31 30.21 29.21 32 27 32H18" stroke="black" strokeWidth="3" strokeLinecap="round" fill="none" />
                <circle cx="33" cy="15" r="3" fill="black" />
              </svg>
              <span className="text-sm text-[#00ff66] font-medium">About Me</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Building the future,
              <br />
              <span className="text-white/40">one system at a time.</span>
            </h1>

            {/* Description */}
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                I'm a <span className="text-white">Full-Stack Developer</span>, <span className="text-white">Systems Programmer</span>, 
                and <span className="text-white">AI/ML enthusiast</span> currently pursuing my BS-MS in Computer Science at IIT Patna.
              </p>
              <p>
                My passion lies in building systems that push boundaries. Currently developing 
                <span className="text-[#00ff66]"> ForgeStack OS</span>, a custom operating system, while researching 
                OS concepts through <span className="text-[#00ff66]"> BrowserOS</span>.
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {quickFacts.map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="p-4 bg-white/[0.03] rounded-xl border border-white/[0.05]"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-[#00ff66]/60">{fact.icon}</div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/30">{fact.label}</p>
                      <p className="text-sm font-medium text-white">{fact.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Expertise Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Core Expertise</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {expertise.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${item.color} border border-white/[0.05] cursor-default`}
              >
                <div className="text-[#00ff66] mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-white/50">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative pl-8 pb-8 border-l-2 border-white/10 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-black border-2 border-[#00ff66] group-hover:bg-[#00ff66] transition-colors" />
                
                {/* Content */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] group-hover:border-[#00ff66]/20 transition-colors">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-medium text-[#00ff66] bg-[#00ff66]/10 px-2.5 py-1 rounded-full">{exp.period}</span>
                    <span className="text-xs text-white/40">{exp.company}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{exp.title}</h4>
                  <p className="text-sm text-white/50 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, j) => (
                      <span key={j} className="px-2.5 py-1 text-xs bg-white/5 text-white/60 rounded-md border border-white/5">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link 
            to="/projects"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#00ff66] text-black font-semibold rounded-xl hover:shadow-[0_0_32px_rgba(0,255,102,0.4)] transition-all"
          >
            View My Work
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-medium rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
