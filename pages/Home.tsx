import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Code2, Layers, Cpu, Zap, Play, Terminal, Braces, Database, Globe, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  };

  // Staggered text animation
  const letterAnimation = {
    hidden: { opacity: 0, y: 80, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, delay: 0.3 + i * 0.05, ease: [0.22, 1, 0.36, 1] }
    })
  };

  const name = "SUMIT";
  const lastname = "CHAUHAN";

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      
      {/* Supreme Animated Background */}
      <div className="fixed inset-0 -z-10">
        {/* Central massive glow */}
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.2, 0.35, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-conic from-[#00ff66]/30 via-transparent via-50% to-[#00ff66]/30 rounded-full blur-3xl"
        />
        {/* Orbiting elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        >
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#00ff66] rounded-full blur-sm" />
          <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-500 rounded-full blur-sm" />
          <div className="absolute left-0 top-1/2 w-2 h-2 bg-blue-500 rounded-full blur-sm" />
        </motion.div>
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.5 }}
            className="absolute w-1 h-1 bg-[#00ff66] rounded-full"
            style={{ left: `${15 + i * 15}%`, top: `${30 + i * 10}%` }}
          />
        ))}
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,102,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,102,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        {/* Radial fade */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black" />
      </div>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex items-center justify-center px-6 pt-28 pb-24 relative"
      >
        <div className="max-w-7xl mx-auto w-full">

          {/* Main Hero Content */}
          <div className="text-center">
            
            {/* Floating tech icons - positioned to avoid navbar and content overlap */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-[35%] left-[5%] p-4 bg-white/[0.03] rounded-2xl border border-white/[0.06] backdrop-blur-sm"
              >
                <Terminal size={24} className="text-[#00ff66]" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute top-[35%] right-[5%] p-4 bg-white/[0.03] rounded-2xl border border-white/[0.06] backdrop-blur-sm"
              >
                <Braces size={24} className="text-purple-400" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, delay: 1 }}
                className="absolute bottom-[40%] left-[5%] p-4 bg-white/[0.03] rounded-2xl border border-white/[0.06] backdrop-blur-sm"
              >
                <Database size={24} className="text-blue-400" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-[40%] right-[5%] p-4 bg-white/[0.03] rounded-2xl border border-white/[0.06] backdrop-blur-sm"
              >
                <Globe size={24} className="text-emerald-400" />
              </motion.div>
            </div>

            {/* Pre-title with animated border */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 relative inline-block"
            >
              <div className="relative px-6 py-3 rounded-full bg-black border border-[#00ff66]/30 overflow-hidden group">
                {/* Animated border glow */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-conic from-[#00ff66] via-transparent to-[#00ff66] opacity-20"
                />
                <div className="absolute inset-[1px] bg-black rounded-full" />
                <div className="relative flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <svg viewBox="0 0 48 48" fill="none" className="w-5 h-5">
                      <circle cx="24" cy="24" r="22" fill="#00ff66" />
                      <path d="M30 16H21C18.79 16 17 17.79 17 20C17 22.21 18.79 24 21 24H27C29.21 24 31 25.79 31 28C31 30.21 29.21 32 27 32H18" stroke="black" strokeWidth="3" strokeLinecap="round" fill="none" />
                      <circle cx="33" cy="15" r="3" fill="black" />
                    </svg>
                  </motion.div>
                  <span className="text-sm font-medium bg-gradient-to-r from-[#00ff66] via-white to-[#00ff66] bg-clip-text text-transparent">
                    Full-Stack Developer & Systems Architect
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Main Title - 3D Letter Animation */}
            <div className="relative mb-8 perspective-1000">
              <h1 className="text-[clamp(4rem,18vw,14rem)] font-black leading-[0.8] tracking-[-0.05em]">
                {/* First Name */}
                <span className="block overflow-hidden">
                  <span className="inline-flex">
                    {name.split('').map((letter, i) => (
                      <motion.span
                        key={i}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={letterAnimation}
                        className="inline-block text-white hover:text-[#00ff66] transition-colors cursor-default"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                </span>
                {/* Last Name with gradient */}
                <span className="block overflow-hidden relative">
                  <span className="inline-flex">
                    {lastname.split('').map((letter, i) => (
                      <motion.span
                        key={i}
                        custom={i + name.length}
                        initial="hidden"
                        animate="visible"
                        variants={letterAnimation}
                        className="inline-block bg-gradient-to-br from-[#00ff66] via-emerald-300 to-[#00ff66] bg-clip-text text-transparent hover:from-white hover:to-white transition-all cursor-default"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                  {/* Glowing underline */}
                  <motion.div 
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute -bottom-4 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#00ff66] to-transparent origin-left"
                  />
                  <motion.div 
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 0.5 }}
                    transition={{ duration: 1.2, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute -bottom-4 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#00ff66] to-transparent origin-left blur-md"
                  />
                </span>
              </h1>
            </div>

            {/* Description with typing effect */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mb-14"
            >
              <p className="text-xl md:text-2xl lg:text-3xl text-white/60 max-w-4xl mx-auto leading-relaxed font-light">
                Engineering <span className="text-white font-medium">next-generation systems</span> with 
                <span className="text-[#00ff66] font-semibold"> Rust</span> & 
                <span className="text-purple-400 font-semibold"> WebAssembly</span>
                <br className="hidden md:block" />
                <span className="text-white/30">—</span> Building the future of the web.
              </p>
            </motion.div>

            {/* CTA Buttons - Glassy */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="flex flex-wrap items-center justify-center gap-5"
            >
              <Link 
                to="/projects"
                className="group relative inline-flex items-center gap-3 px-10 py-5 overflow-hidden rounded-2xl transition-all duration-500"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff66] via-emerald-400 to-[#00ff66] bg-[length:200%_100%] animate-gradient" />
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#00ff66] blur-2xl -z-10" />
                <span className="relative text-black font-bold text-lg">Explore Work</span>
                <ArrowRight size={20} className="relative text-black group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              
              <Link 
                to="/contact"
                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl overflow-hidden"
              >
                {/* Glass background */}
                <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl group-hover:border-[#00ff66]/30 transition-colors" />
                {/* Hover fill */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff66]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <span className="relative text-white font-medium text-lg group-hover:text-[#00ff66] transition-colors">Let's Connect</span>
                <ArrowUpRight size={18} className="relative text-white/50 group-hover:text-[#00ff66] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </Link>
            </motion.div>

            {/* Tech stack pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="mt-16 flex flex-wrap justify-center gap-3"
            >
              {['Rust', 'TypeScript', 'React', 'WebAssembly', 'Node.js', 'PostgreSQL'].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.3 + i * 0.1 }}
                  className="px-4 py-2 text-sm text-white/60 bg-white/[0.02] rounded-full border border-white/[0.05] hover:border-[#00ff66]/30 hover:text-[#00ff66] transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Add gradient animation keyframes */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .bg-gradient-conic {
          background: conic-gradient(var(--tw-gradient-stops));
        }
      `}</style>

      {/* Featured Project Section */}
      <div className="py-8" />
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-[#00ff66] text-sm font-medium tracking-wider uppercase mb-4">Featured Project</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              ForgeStack OS
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.08] overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-radial from-[#00ff66]/10 to-transparent blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-radial from-purple-500/10 to-transparent blur-3xl" />
              
              <div className="relative grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Rust', 'WebAssembly', 'React', 'TypeScript'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-[#00ff66]/10 text-[#00ff66] text-xs font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    A Full Operating System in Your Browser
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-8">
                    ForgeStack OS is a revolutionary web-based operating system that brings the power of a full desktop environment to your browser. Built with Rust and WebAssembly for native-like performance.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link 
                      to="/projects"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#00ff66] text-black font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(0,255,102,0.4)] transition-all"
                    >
                      <Play size={16} />
                      <span>See Details</span>
                    </Link>
                    <a 
                      href="https://github.com/halloffame12"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white font-medium rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-[#00ff66]/20 to-purple-500/20 p-1">
                    <div className="w-full h-full rounded-lg bg-black/80 flex items-center justify-center">
                      <div className="text-center">
                        <Cpu size={48} className="text-[#00ff66] mx-auto mb-3" />
                        <p className="text-white/60 text-sm">Live Preview Coming Soon</p>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    animate={floatingAnimation}
                    className="absolute -bottom-4 -right-4 px-4 py-2 bg-[#00ff66] text-black text-sm font-bold rounded-lg shadow-lg shadow-[#00ff66]/30"
                  >
                    In Development
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 px-6 relative border-t border-white/[0.03]">
        <div className="max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-[#00ff66] text-sm font-medium tracking-wider uppercase mb-4">What I Do</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Core Expertise
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Cpu size={28} />, title: 'Systems Dev', desc: 'Rust, WebAssembly, OS Development', highlight: true },
              { icon: <Layers size={28} />, title: 'Full-Stack', desc: 'React, Next.js, Node.js, PostgreSQL', highlight: false },
              { icon: <Code2 size={28} />, title: 'Mobile Apps', desc: 'Flutter, Dart, React Native', highlight: false },
              { icon: <Zap size={28} />, title: 'AI & ML', desc: 'PyTorch, TensorFlow, LLMs', highlight: false },
            ].map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className={`relative p-7 rounded-2xl border transition-all duration-500 h-full ${
                  skill.highlight 
                    ? 'bg-gradient-to-br from-[#00ff66]/15 to-[#00ff66]/5 border-[#00ff66]/30 hover:border-[#00ff66]/50' 
                    : 'bg-white/[0.02] border-white/[0.05] hover:border-white/[0.15] hover:bg-white/[0.04]'
                }`}>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                    skill.highlight 
                      ? 'bg-[#00ff66]/20 text-[#00ff66]' 
                      : 'bg-white/[0.05] text-white/50 group-hover:text-[#00ff66]'
                  }`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.06]"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: '10+', label: 'Projects Shipped' },
                { value: '5+', label: 'Tech Mastered' },
                { value: '1', label: 'Research Published' },
                { value: '4+', label: 'Years Experience' }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="text-5xl md:text-6xl font-black text-[#00ff66] mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-white/60">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#00ff66]/5 to-transparent" />
        
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#00ff66]/20 to-[#00ff66]/5 flex items-center justify-center border border-[#00ff66]/20"
            >
              <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
                <circle cx="24" cy="24" r="22" fill="#00ff66" />
                <path d="M30 16H21C18.79 16 17 17.79 17 20C17 22.21 18.79 24 21 24H27C29.21 24 31 25.79 31 28C31 30.21 29.21 32 27 32H18" stroke="black" strokeWidth="3" strokeLinecap="round" fill="none" />
                <circle cx="33" cy="15" r="3" fill="black" />
              </svg>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Ready to build
              <br />
              <span className="text-[#00ff66]"> something amazing?</span>
            </h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto mb-10">
              I'm always excited to work on challenging projects. Let's discuss how we can bring your ideas to life.
            </p>
            
            <Link 
              to="/contact"
              className="group inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-bold text-lg rounded-full hover:bg-white/95 transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
            >
              Start a Conversation
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
