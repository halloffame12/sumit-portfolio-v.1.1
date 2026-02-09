import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Calendar, Users, BookOpen, Cpu, Layers, ArrowUpRight } from 'lucide-react';

const Research: React.FC = () => {
  const paper = {
    title: 'BrowserOS: A Virtual Operating System in WebAssembly',
    authors: ['Sumit Chauhan'],
    institution: 'Indian Institute of Technology, Patna',
    abstract: `This paper presents BrowserOS, an educational operating system kernel implemented entirely in Rust and compiled to WebAssembly (WASM), running within modern web browsers. By leveraging browser APIs as hardware abstractions, BrowserOS demonstrates fundamental OS concepts including process management with cooperative multitasking, an inode-based virtual file system, system call dispatching, and I/O handling—all without requiring native hardware or emulators. The architecture treats the browser environment as a minimal hardware layer, with JavaScript "drivers" managing display output, keyboard input, persistent storage, and timer scheduling.`,
    keywords: ['Operating Systems', 'WebAssembly', 'Rust', 'Browser', 'Virtual Machine', 'Process Management', 'File Systems'],
    date: '2024',
    doi: 'osf.io/m3gv8',
    pdfUrl: 'https://osf.io/m3gv8/files/vu5eq'
  };

  const contributions = [
    {
      icon: <Cpu size={20} />,
      title: 'Browser as Hardware',
      desc: 'Novel approach treating web browsers as a hardware abstraction layer for OS research.'
    },
    {
      icon: <Layers size={20} />,
      title: 'Full OS Subsystems',
      desc: 'Complete implementation of process management, virtual filesystem, and syscall dispatcher.'
    },
    {
      icon: <BookOpen size={20} />,
      title: 'Educational Platform',
      desc: 'Accessible environment for learning OS internals without complex setup requirements.'
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-24 relative overflow-hidden">
      
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-gradient-radial from-[#00ff66]/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-indigo-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#00ff66] text-sm font-medium tracking-wider uppercase mb-4">Research</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Academic<br />
            <span className="text-white/40">publications.</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl">
            Exploring the intersection of systems programming, WebAssembly, and operating system design.
          </p>
        </motion.div>

        {/* Featured Paper */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          {/* Paper Card */}
          <div className="p-8 md:p-10 bg-white/[0.02] rounded-3xl border border-white/5">
            
            {/* Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-3 py-1 bg-[#00ff66]/10 rounded-full">
                <FileText size={14} className="text-[#00ff66]" />
                <span className="text-xs text-[#00ff66] font-medium">Research Paper</span>
              </div>
              <span className="text-xs text-white/30">{paper.date}</span>
            </div>
            
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
              {paper.title}
            </h2>
            
            {/* Authors & Institution */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <Users size={14} />
                <span>{paper.authors.join(', ')}</span>
              </div>
              <span className="text-white/20">•</span>
              <span>{paper.institution}</span>
            </div>
            
            {/* Abstract */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-3">Abstract</h3>
              <p className="text-white/50 leading-relaxed">
                {paper.abstract}
              </p>
            </div>
            
            {/* Keywords */}
            <div className="mb-8">
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {paper.keywords.map((keyword, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 text-xs bg-white/5 text-white/60 rounded-full border border-white/5"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
              <a
                href={paper.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00ff66] text-black font-semibold rounded-xl hover:bg-[#00ff66]/90 transition-colors"
              >
                <FileText size={16} />
                Download PDF
                <ArrowUpRight size={16} />
              </a>
              <a
                href="https://browser-os-black.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white font-medium rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            </div>
          </div>
        </motion.article>

        {/* Key Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-white mb-8">Key Contributions</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {contributions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="p-6 bg-white/[0.02] rounded-2xl border border-white/5"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#00ff66]/10 rounded-xl text-[#00ff66] mb-4">
                  {item.icon}
                </div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-white/40">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Citation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 bg-white/[0.02] rounded-2xl border border-white/5"
        >
          <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">Citation</h3>
          <div className="p-4 bg-black/30 rounded-xl font-mono text-sm text-white/50 overflow-x-auto">
            <code>
              Chauhan, S. ({paper.date}). {paper.title}. DOI: {paper.doi}
            </code>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Research;
