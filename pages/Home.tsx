import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Code2, Layers, Cpu, Zap, Play, Terminal, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 72, rotateX: -90 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.75, delay: 0.22 + index * 0.045, ease: [0.22, 1, 0.36, 1] }
    })
  };

  const name = 'SUMIT';
  const lastname = 'CHAUHAN';

  const metrics = [
    { value: '10+', label: 'Production Projects' },
    { value: '<100ms', label: 'Realtime Delivery Goal' },
    { value: '4+', label: 'Years in Development' },
    { value: '24h', label: 'Communication SLA' }
  ];

  const capabilities = [
    {
      icon: <Cpu size={22} />,
      title: 'Systems Engineering',
      description: 'Rust + WebAssembly architecture designed for speed, reliability, and scalability.'
    },
    {
      icon: <Layers size={22} />,
      title: 'Full-Stack Products',
      description: 'Clean frontend systems backed by robust APIs, data modeling, and deployment pipelines.'
    },
    {
      icon: <Code2 size={22} />,
      title: 'Mobile Experiences',
      description: 'High-quality Flutter apps with polished UX and fast, responsive interactions.'
    },
    {
      icon: <Zap size={22} />,
      title: 'Realtime Platforms',
      description: 'Socket-based infrastructure for chat, events, and collaborative live experiences.'
    }
  ];

  return (
    <div className="page-shell">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.14, 0.3, 0.14], rotate: [0, 180, 360] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] bg-gradient-conic from-[#00ff66]/25 via-transparent to-[#00ff66]/25 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:68px_68px]" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black" />
      </div>

      <section className="page-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="rounded-3xl border border-white/[0.08] bg-black/45 backdrop-blur-2xl shadow-xl shadow-black/25 p-5 sm:p-8 lg:p-10"
        >
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[11px] sm:text-xs text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] animate-pulse" />
                  Designer + Engineer
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00ff66]/20 bg-[#00ff66]/10 text-[11px] sm:text-xs text-[#00ff66]">
                  Building Modern Digital Products
                </span>
              </div>

              <h1 className="text-[clamp(2.6rem,12vw,7rem)] font-black leading-[0.85] tracking-[-0.04em] mb-5 perspective-1000">
                <span className="block overflow-hidden">
                  <span className="inline-flex">
                    {name.split('').map((letter, index) => (
                      <motion.span
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={letterAnimation}
                        className="inline-block text-white"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="inline-flex">
                    {lastname.split('').map((letter, index) => (
                      <motion.span
                        key={index}
                        custom={index + name.length}
                        initial="hidden"
                        animate="visible"
                        variants={letterAnimation}
                        className="inline-block bg-gradient-to-r from-[#00ff66] via-emerald-300 to-[#00ff66] bg-clip-text text-transparent"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05 }}
                className="fluid-subtitle text-white/65 max-w-2xl"
              >
                I craft advanced, modern, and high-performance digital experiences — blending strong UI/UX decisions with
                production-grade engineering for web, mobile, and realtime platforms.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <Link
                  to="/projects"
                  className="group relative inline-flex items-center gap-2 px-7 sm:px-9 py-3.5 sm:py-4 rounded-2xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00ff66] via-emerald-400 to-[#00ff66] bg-[length:200%_100%] animate-gradient" />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                  <span className="relative text-black font-bold text-sm sm:text-base">Explore Portfolio</span>
                  <ArrowRight size={17} className="relative text-black group-hover:translate-x-1.5 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-2 px-7 sm:px-9 py-3.5 sm:py-4 rounded-2xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/[0.03] border border-white/[0.12] rounded-2xl backdrop-blur-xl group-hover:border-[#00ff66]/30 transition-colors" />
                  <span className="relative text-white/85 font-medium text-sm sm:text-base group-hover:text-white">Start a Project</span>
                  <ArrowUpRight size={17} className="relative text-white/50 group-hover:text-[#00ff66] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="relative"
            >
              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  animate={{ x: [0, 12, -6, 0], y: [0, -12, 8, 0], scale: [1, 1.1, 0.95, 1] }}
                  transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-6 left-6 w-40 h-40 bg-[#00ff66]/20 blur-2xl rounded-full"
                />
                <motion.div
                  animate={{ x: [0, -14, 9, 0], y: [0, 12, -10, 0], scale: [1, 0.9, 1.1, 1] }}
                  transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                  className="absolute bottom-6 right-4 w-44 h-44 bg-purple-500/20 blur-3xl rounded-full"
                />
              </div>

              <div className="neo-card rounded-3xl p-5 sm:p-6 overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00ff66]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-400/90" />
                  </div>
                  <span className="text-[11px] text-white/55 tracking-wider uppercase">Live Product Board</span>
                </div>

                <div className="rounded-2xl border border-white/[0.08] bg-black/50 p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-xs text-white/60 mb-4">
                    <Terminal size={14} className="text-[#00ff66]" />
                    <span>deployment.stream</span>
                  </div>

                  <div className="space-y-3">
                    {capabilities.slice(0, 3).map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.85 + index * 0.1 }}
                        className="rounded-xl p-3 border border-white/[0.08] bg-white/[0.02]"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-xs sm:text-sm text-white/90 font-medium">{item.title}</p>
                          <span className="text-[10px] text-[#00ff66]">ACTIVE</span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-white/55 mt-1.5">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    animate={{ opacity: [0.45, 1, 0.45] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                    className="mt-4 flex items-center gap-2 text-[11px] text-white/50"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
                    System ready for cross-device delivery
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="page-container mt-8 sm:mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {metrics.map((item) => (
            <div key={item.label} className="neo-card p-3.5 rounded-xl text-center">
              <p className="text-base sm:text-lg font-bold text-[#00ff66]">{item.value}</p>
              <p className="text-[10px] sm:text-[11px] tracking-wider uppercase text-white/60">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-container py-16 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="neo-card rounded-3xl p-6 sm:p-8 lg:p-10"
        >
          <div className="flex items-center justify-between flex-wrap gap-4 mb-7">
            <div>
              <p className="section-kicker">Featured Product</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-4">ForgeStack OS</h2>
            </div>
            <motion.span animate={floatingAnimation} className="px-3.5 py-2 rounded-lg text-xs font-semibold bg-[#00ff66] text-black">
              In Development
            </motion.span>
          </div>

          <div className="grid md:grid-cols-2 gap-7 lg:gap-10 items-center">
            <div>
              <p className="neo-text-muted mb-6 leading-relaxed">
                A browser-native operating system built with Rust + WebAssembly to explore modern system design,
                process architecture, and interactive desktop experiences in the web runtime.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Rust', 'WebAssembly', 'React', 'TypeScript'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full text-xs border border-[#00ff66]/20 bg-[#00ff66]/10 text-[#00ff66]">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#00ff66] text-black font-semibold">
                  <Play size={16} />
                  View Details
                </Link>
                <a
                  href="https://github.com/halloffame12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white"
                >
                  <Github size={16} />
                  Source Code
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-black/50 p-5 sm:p-6">
              <div className="aspect-video rounded-xl border border-white/[0.08] bg-gradient-to-br from-[#00ff66]/12 to-purple-500/12 flex items-center justify-center">
                <div className="text-center">
                  <Cpu size={44} className="text-[#00ff66] mx-auto mb-3" />
                  <p className="text-sm text-white/65">Interactive Preview Pipeline</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="page-container pb-16 sm:pb-20 lg:pb-24">
        <div className="text-center mb-10 sm:mb-12">
          <p className="section-kicker">Capabilities</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">What I Build</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {capabilities.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="neo-card rounded-2xl p-5 sm:p-6"
            >
              <div className="w-11 h-11 rounded-xl bg-[#00ff66]/12 border border-[#00ff66]/20 flex items-center justify-center text-[#00ff66] mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="page-container pb-6 sm:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-[#00ff66]/20 bg-gradient-to-br from-[#00ff66]/14 via-[#00ff66]/6 to-transparent p-8 sm:p-10 text-center"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Let’s Build Something Remarkable</h3>
          <p className="text-white/65 max-w-2xl mx-auto mb-8">
            Ready to launch a modern product with strong design, scalable engineering, and responsive UX on every device.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold"
          >
            Start a Conversation
            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
