
import React from 'react';
import { BookOpen, ExternalLink, FileText, Calendar, Layers, Cpu, Globe, Award, Sparkles, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ResearchPaper {
  id: string;
  title: string;
  abstract: string;
  publishedDate: string;
  platform: string;
  paperUrl: string;
  relatedProject?: {
    name: string;
    slug: string;
  };
  tags: string[];
  highlights?: string[];
}

const RESEARCH_DATA: ResearchPaper[] = [
  {
    id: 'research-1',
    title: 'BrowserOS: A Virtual Operating System in WebAssembly',
    abstract: 'This research paper explores the design and implementation of a research-level operating system kernel written in Rust and compiled to WebAssembly (WASM), running entirely inside a web browser. The paper demonstrates core OS concepts including process management, virtual file systems, syscall abstraction, and cooperative multitasking within the browser sandbox environment.',
    publishedDate: '2026',
    platform: 'OSF Preprints',
    paperUrl: 'https://osf.io/m3gv8/files/vu5eq',
    relatedProject: {
      name: 'BrowserOS',
      slug: 'browser-os'
    },
    tags: ['Operating Systems', 'WebAssembly', 'Rust', 'Systems Programming', 'Virtual Machines'],
    highlights: [
      'Process management & scheduling',
      'Inode-based virtual file system',
      'Syscall dispatcher architecture',
      'Browser as hardware abstraction'
    ]
  }
];

const Research: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden px-6">
      {/* Enhanced Visual Accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00ff66]/5 blur-[150px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-emerald-500/3 blur-[100px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-grid opacity-[0.02] pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          {/* Enhanced Header Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-transparent border border-emerald-500/20 text-[#00ff66] font-tech text-[10px] tracking-widest uppercase mb-8 backdrop-blur-sm"
          >
            <Sparkles size={12} className="animate-pulse" />
            Research & Publications
          </motion.div>
          
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-tech font-bold tracking-tighter uppercase mb-8 leading-[0.9]">
            Research <br className="sm:hidden" />
            <span className="text-[#00ff66] relative">
              Papers
              <svg className="absolute -bottom-2 left-0 w-full h-2 opacity-30" viewBox="0 0 200 8">
                <path d="M0 4 Q50 0, 100 4 T200 4" stroke="#00ff66" strokeWidth="2" fill="none"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-[#B0B0B0] text-lg sm:text-xl max-w-2xl leading-relaxed">
            Exploring the <span className="text-white font-medium">frontiers of systems programming</span>, WebAssembly, and operating system design through academic research and practical implementations.
          </p>

          {/* Enhanced Statistics Header */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-12 border-t border-white/5">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <p className="text-[#606060] text-[10px] font-tech uppercase tracking-widest">Publications</p>
              <div className="flex items-center gap-3">
                <span className="text-4xl font-tech font-bold text-white">01</span>
                <FileText size={20} className="text-[#00ff66]/40" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-2"
            >
              <p className="text-[#606060] text-[10px] font-tech uppercase tracking-widest">Focus Area</p>
              <div className="flex items-center gap-3">
                <span className="text-xl font-tech font-bold text-[#00ff66]">Systems</span>
                <Cpu size={18} className="text-[#00ff66]/40" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-2"
            >
              <p className="text-[#606060] text-[10px] font-tech uppercase tracking-widest">Platform</p>
              <div className="flex items-center gap-3">
                <span className="text-xl font-tech font-bold text-white">OSF</span>
                <Globe size={18} className="text-[#A1A1A1]/40" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-2"
            >
              <p className="text-[#606060] text-[10px] font-tech uppercase tracking-widest">Status</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse shadow-[0_0_10px_#00ff66]"></div>
                <span className="text-sm font-tech font-bold text-[#00ff66]">Published</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Research Papers - Enhanced */}
        <div className="space-y-16">
          {RESEARCH_DATA.map((paper, idx) => (
            <motion.article 
              key={paper.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-neutral-950 to-neutral-900/50 border border-white/10 p-8 sm:p-12 rounded-[3rem] relative overflow-hidden group hover:border-[#00ff66]/40 transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,255,102,0.08)]"
            >
              {/* Visual Flair - Enhanced */}
              <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.06] transition-opacity duration-700">
                <Layers size={200} />
              </div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#00ff66]/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Header */}
              <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[#00ff66] text-[10px] font-tech uppercase tracking-[0.25em]">
                    <div className="w-2 h-2 bg-[#00ff66] rounded-full animate-pulse shadow-[0_0_8px_#00ff66]" />
                    <span className="bg-[#00ff66]/10 px-3 py-1 rounded-full">{paper.platform}</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-tech font-bold text-white leading-tight tracking-tight">
                    {paper.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3 text-[#808080] text-xs font-tech bg-black/50 border border-white/10 px-5 py-3 rounded-2xl shrink-0 backdrop-blur-sm">
                  <Calendar size={16} className="text-[#00ff66]" />
                  <span>Published: <span className="text-white font-medium">{paper.publishedDate}</span></span>
                </div>
              </div>
              
              {/* Abstract - Enhanced Typography */}
              <div className="mb-10">
                <p className="text-[#C0C0C0] text-base sm:text-lg leading-[1.8] font-light">
                  {paper.abstract}
                </p>
              </div>

              {/* Key Highlights */}
              {paper.highlights && (
                <div className="mb-10 p-6 bg-black/30 border border-white/5 rounded-2xl">
                  <h4 className="text-[#00ff66] text-xs font-tech uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Award size={14} />
                    Key Contributions
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {paper.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-3 text-[#A0A0A0] text-sm">
                        <div className="w-1.5 h-1.5 bg-[#00ff66]/60 rounded-full shrink-0"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags - Enhanced */}
              <div className="flex flex-wrap gap-2 mb-10">
                {paper.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[#909090] text-xs font-tech hover:border-[#00ff66]/30 hover:text-[#00ff66] transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Actions - Enhanced */}
              <div className="flex flex-wrap items-center gap-4 pt-10 border-t border-white/5">
                <a 
                  href={paper.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-[#00ff66] text-black font-tech text-sm font-bold uppercase tracking-wider rounded-2xl hover:shadow-[0_0_40px_rgba(0,255,102,0.5)] transition-all duration-300 hover:scale-[1.02]"
                >
                  <FileText size={18} />
                  Read Full Paper
                  <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
                
                {paper.relatedProject && (
                  <Link 
                    to="/projects"
                    className="inline-flex items-center gap-3 px-8 py-4 border border-[#00ff66]/30 text-[#00ff66] font-tech text-sm font-bold uppercase tracking-wider rounded-2xl hover:bg-[#00ff66]/10 hover:border-[#00ff66]/50 transition-all duration-300"
                  >
                    <Cpu size={18} />
                    View Project: {paper.relatedProject.name}
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Coming Soon Section - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 pt-20 border-t border-white/5"
        >
          <div className="text-center max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#808080] font-tech text-[10px] tracking-widest uppercase mb-6">
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></div>
              In Progress
            </div>
            <h3 className="text-3xl sm:text-4xl font-tech font-bold text-white mb-6 tracking-tight">
              More Research <span className="text-[#00ff66]">Coming Soon</span>
            </h3>
            <p className="text-[#808080] text-base leading-relaxed">
              Currently working on research exploring <span className="text-[#A0A0A0]">AI systems</span>, <span className="text-[#A0A0A0]">distributed computing</span>, and <span className="text-[#A0A0A0]">advanced web technologies</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Research;
