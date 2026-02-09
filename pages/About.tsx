import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Code, Cpu, Globe, Smartphone, Brain, ArrowUpRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const experiences = [
    {
      period: '2023 - Present',
      title: 'Systems & OS Research',
      description: 'Building ForgeStack OS and BrowserOS using Rust & WebAssembly. Published research on virtual operating systems.',
      tech: ['Rust', 'WebAssembly', 'OS Concepts']
    },
    {
      period: '2022 - Present',
      title: 'Full-Stack Development',
      description: 'Architecting scalable web applications with modern frameworks and cloud infrastructure.',
      tech: ['React', 'Node.js', 'AWS', 'PostgreSQL']
    },
    {
      period: '2021 - Present',
      title: 'Mobile App Development',
      description: 'Creating cross-platform mobile experiences with Flutter and native technologies.',
      tech: ['Flutter', 'Dart', 'Firebase']
    }
  ];

  const expertise = [
    { icon: <Cpu size={24} />, title: 'Systems', desc: 'Rust, WASM, OS Dev' },
    { icon: <Globe size={24} />, title: 'Web', desc: 'React, Next.js, Node' },
    { icon: <Smartphone size={24} />, title: 'Mobile', desc: 'Flutter, React Native' },
    { icon: <Brain size={24} />, title: 'AI/ML', desc: 'PyTorch, TensorFlow' }
  ];

  return (
    <div className="min-h-screen pt-28 pb-24 relative overflow-hidden">
      
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#00ff66]/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-emerald-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[#00ff66] text-sm font-medium tracking-wider uppercase mb-4">About Me</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Building the future,<br />
            <span className="text-white/40">one system at a time.</span>
          </h1>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Column - Photo & Quick Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 space-y-8"
          >
            {/* Photo */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#00ff66]/30 to-emerald-500/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
                <img 
                  src="https://i.postimg.cc/hGCbJj5s/sumit-chauhan.png"
                  alt="Sumit Chauhan"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="space-y-3">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="p-2 bg-[#00ff66]/10 rounded-lg">
                  <GraduationCap size={20} className="text-[#00ff66]" />
                </div>
                <div>
                  <p className="text-xs text-white/40">Education</p>
                  <p className="text-sm text-white font-medium">BS-MS in CS & Data Analytics</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="p-2 bg-[#00ff66]/10 rounded-lg">
                  <MapPin size={20} className="text-[#00ff66]" />
                </div>
                <div>
                  <p className="text-xs text-white/40">Location</p>
                  <p className="text-sm text-white font-medium">IIT Patna, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="p-2 bg-[#00ff66]/10 rounded-lg">
                  <Calendar size={20} className="text-[#00ff66]" />
                </div>
                <div>
                  <p className="text-xs text-white/40">Experience</p>
                  <p className="text-sm text-white font-medium">3+ Years in Development</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 space-y-16"
          >
            {/* Bio */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Hello, I'm Sumit</h2>
              <div className="space-y-4 text-white/60 leading-relaxed text-lg">
                <p>
                  I'm a <span className="text-white">Full-Stack Application Developer</span>, <span className="text-white">Systems Programmer</span>, and <span className="text-white">AI/ML researcher</span> currently pursuing my BS-MS in Computer Science and Data Analytics at IIT Patna.
                </p>
                <p>
                  My passion lies in building systems that push the boundaries of what's possible. I'm currently developing <span className="text-[#00ff66]">ForgeStack OS</span>, a custom operating system, while also researching OS concepts through <span className="text-[#00ff66]">BrowserOS</span> — a virtual operating system built entirely with Rust and WebAssembly.
                </p>
                <p>
                  Beyond systems programming, I architect full-stack applications, build cross-platform mobile apps with Flutter, and explore the frontiers of artificial intelligence and machine learning.
                </p>
              </div>
            </div>

            {/* Expertise Grid */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Core Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {expertise.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="p-5 bg-white/5 rounded-xl border border-white/5 hover:border-[#00ff66]/20 transition-colors group"
                  >
                    <div className="text-[#00ff66]/60 group-hover:text-[#00ff66] transition-colors mb-3">
                      {item.icon}
                    </div>
                    <p className="text-white font-medium text-sm">{item.title}</p>
                    <p className="text-white/40 text-xs mt-1">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="relative pl-6 border-l border-white/10"
                  >
                    <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-[#00ff66]/20 border-2 border-[#00ff66]"></div>
                    <p className="text-xs text-[#00ff66] mb-1">{exp.period}</p>
                    <h4 className="text-white font-semibold mb-2">{exp.title}</h4>
                    <p className="text-white/50 text-sm mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t, j) => (
                        <span key={j} className="px-2 py-1 text-xs bg-white/5 text-white/60 rounded-md">{t}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00ff66] text-black font-semibold rounded-xl hover:bg-[#00ff66]/90 transition-colors"
              >
                View My Work
                <ArrowUpRight size={18} />
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white font-medium rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
