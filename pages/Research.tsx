import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Download, Calendar, Users, Tag } from 'lucide-react';

const RESEARCH_PAPER = {
  title: 'BrowserOS: A Web-Based Operating System Simulation',
  authors: ['Sumit Kumar'],
  abstract: 'This paper presents BrowserOS, an innovative web-based operating system simulation that runs entirely in the browser. The system demonstrates how modern web technologies can be leveraged to create complex, interactive desktop environments without requiring traditional operating system installation or native applications.',
  keywords: ['Web Development', 'Operating Systems', 'Browser Technology', 'JavaScript', 'React'],
  date: '2026',
  journal: 'OSF Preprints',
  doi: 'osf.io/m3gv8',
  pdfLink: 'https://osf.io/m3gv8/files/vu5eq',
  contributions: [
    {
      title: 'Novel Architecture',
      description: 'Designed a modular architecture that mimics traditional OS components using web technologies.',
    },
    {
      title: 'Interactive UI',
      description: 'Created a fully interactive desktop environment with windows, taskbar, and applications.',
    },
    {
      title: 'Browser Optimization',
      description: 'Optimized performance for smooth operation within browser constraints and limitations.',
    },
  ],
};

const Research: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#00ff66] text-sm font-medium tracking-widest uppercase mb-4">
            Research & Publications
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Academic Work
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Exploring the intersection of web technologies and system design through research and development.
          </p>
        </motion.div>

        {/* Featured Paper */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 md:p-10 mb-12"
        >
          {/* Paper Badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#00ff66]/10 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-[#00ff66]" />
            </div>
            <span className="text-[#00ff66] text-sm font-medium">Featured Paper</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {RESEARCH_PAPER.title}
          </h2>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 mb-6 text-white/50 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>{RESEARCH_PAPER.authors.join(', ')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{RESEARCH_PAPER.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>{RESEARCH_PAPER.journal}</span>
            </div>
          </div>

          {/* Abstract */}
          <div className="mb-8">
            <h3 className="text-white/80 font-medium mb-3">Abstract</h3>
            <p className="text-white/60 leading-relaxed">
              {RESEARCH_PAPER.abstract}
            </p>
          </div>

          {/* Keywords */}
          <div className="mb-8">
            <h3 className="text-white/80 font-medium mb-3">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {RESEARCH_PAPER.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <a
              href={RESEARCH_PAPER.pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00ff66] text-black font-medium rounded-lg hover:bg-[#00ff66]/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View Project
            </a>
            <a
              href={RESEARCH_PAPER.pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-white/80 font-medium rounded-lg hover:bg-white/5 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
          </div>
        </motion.article>

        {/* Key Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-white mb-6">Key Contributions</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {RESEARCH_PAPER.contributions.map((contribution, index) => (
              <motion.div
                key={contribution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="bg-white/[0.02] border border-white/5 rounded-xl p-6"
              >
                <div className="w-8 h-8 bg-[#00ff66]/10 rounded-lg flex items-center justify-center mb-4 text-[#00ff66] font-bold text-sm">
                  {index + 1}
                </div>
                <h4 className="text-white font-medium mb-2">{contribution.title}</h4>
                <p className="text-white/50 text-sm">{contribution.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Citation Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 bg-white/[0.02] border border-white/5 rounded-xl p-6"
        >
          <h3 className="text-white/80 font-medium mb-3">Citation</h3>
          <code className="block text-white/50 text-sm font-mono bg-black/50 p-4 rounded-lg overflow-x-auto">
            Kumar, S. ({RESEARCH_PAPER.date}). {RESEARCH_PAPER.title}. {RESEARCH_PAPER.journal}.
          </code>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
