import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import { ExternalLink, ArrowUpRight, Folder, Star, GitFork } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="page-shell">
      
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#00ff66]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-purple-500/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="page-container">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
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
            <span className="text-sm text-[#00ff66] font-medium">Portfolio</span>
          </motion.div>
          
          <h1 className="fluid-title font-bold text-white mb-6 tracking-tight">
            Featured Projects
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            A curated collection of systems, applications, and experiments showcasing my technical expertise.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-6 mb-16 pb-12 border-b border-white/[0.05]"
        >
          <div className="flex items-center gap-3 px-5 py-3 bg-white/[0.03] rounded-xl border border-white/[0.05]">
            <Folder size={20} className="text-[#00ff66]" />
            <div>
              <p className="text-2xl font-bold text-white">{PROJECTS_DATA.length}+</p>
              <p className="text-xs text-white/60">Projects</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 bg-white/[0.03] rounded-xl border border-white/[0.05]">
            <Star size={20} className="text-amber-400" />
            <div>
              <p className="text-2xl font-bold text-white">50+</p>
              <p className="text-xs text-white/60">Stars</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 bg-white/[0.03] rounded-xl border border-white/[0.05]">
            <GitFork size={20} className="text-purple-400" />
            <div>
              <p className="text-2xl font-bold text-white">500+</p>
              <p className="text-xs text-white/60">Commits</p>
            </div>
          </div>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.06] p-6 lg:p-8"
        >
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#00ff66]/80 mb-3">Project Headline</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
              Blur: A Sanctuary for Anonymous Real-Time Connection
            </h2>
            <p className="text-white/70 leading-relaxed">
              Building the future of private communication with Flutter &amp; Node.js.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#00ff66]/80 mb-3">Project Overview (The Why)</p>
              <p className="text-white/70 leading-relaxed">
                In an era of relentless data tracking and social media fatigue, I built Blur to reclaim the core of human
                connection: its purity. Blur is a fully anonymous real-time chat platform where identity is secondary to
                the conversation.
              </p>
              <p className="text-white/70 leading-relaxed mt-4">
                I designed it with a Modern Soft Minimalism aesthetic to provide a calm, premium environment that fosters
                authentic interaction without the pressure of digital footprints.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#00ff66]/80 mb-3">Technical Deep Dive (The How)</p>
              <ul className="space-y-3 text-white/70 leading-relaxed">
                <li><span className="text-white font-medium">Frontend Architecture:</span> Built using Flutter for cross-platform excellence, with Riverpod for robust state management and Flutter Animate for a fluid, high-end UI.</li>
                <li><span className="text-white font-medium">Backend &amp; Real-Time Engine:</span> Developed a custom Node.js server with Socket.IO, optimizing event architecture for sub-100ms message latency.</li>
                <li><span className="text-white font-medium">Security &amp; Integrity:</span> Implemented JWT-based stateless sessions, custom XSS sanitization, automated moderation systems, and an Online Reset mechanism for user-count integrity.</li>
                <li><span className="text-white font-medium">Database Architecture:</span> Leveraged PostgreSQL for reliable data persistence and history management.</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#00ff66]/80 mb-3">Key Features</p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.02] text-white/75">✅ Zero-Identity Entry: No sign-ups, no tracking, total freedom.</div>
              <div className="px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.02] text-white/75">✅ Global Community Lobby: A low-latency real-time stream for instant interaction.</div>
              <div className="px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.02] text-white/75">✅ Intelligent Matchmaking: Custom logic for instantly connecting 1-on-1 with compatible users.</div>
              <div className="px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.02] text-white/75">✅ Soft Minimalist UI: High-fidelity design focused on usability and mental clarity.</div>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#00ff66]/80 mb-3">Experience the App</p>
            <p className="text-white font-medium mb-2">Announcement:</p>
            <p className="text-white/70 leading-relaxed mb-5">
              I&apos;m excited to share the initial release of Blur. It represents a significant milestone in my journey as
              a developer, balancing complex real-time infrastructure with refined, user-centric design.
            </p>
            <a
              href="https://drive.google.com/file/d/1T5QOgWl3h3hcPPq9t_Pn4aIOX-fTjehP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#00ff66] text-black font-semibold rounded-xl hover:brightness-95 transition-all"
            >
              <ExternalLink size={18} />
              <span>DOWNLOAD ANDROID APK</span>
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#00ff66]/80 mb-3">Visual Gallery</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-white/70">Logo: The abstract circular Blur logo.</div>
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-white/70">The Entry Screen: Showcasing the sleek, minimalist form.</div>
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-white/70">The Chat Flow: Displaying the clean message bubbles and typing indicators.</div>
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-white/70">The Dashboard: Highlighting the global online status and navigation.</div>
            </div>
          </div>
        </motion.section>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:gap-10">
          {PROJECTS_DATA.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
              className="group"
            >
              <a 
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.06] hover:border-[#00ff66]/30 transition-all duration-500"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  
                  {/* Image Section */}
                  <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                    <img 
                      src={project.imageUrl}
                      alt={`${project.title} - ${project.category} project screenshot`}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent lg:bg-gradient-to-t" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-full border border-white/10">
                      <span className="text-xs text-[#00ff66] font-medium">{project.category}</span>
                    </div>
                    
                    {/* Mobile Title */}
                    <div className="lg:hidden absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    
                    {/* Desktop Title */}
                    <div className="hidden lg:flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#00ff66] transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight 
                        size={22} 
                        className="text-white/30 group-hover:text-[#00ff66] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0 mt-1" 
                      />
                    </div>
                    
                    <p className="text-white/60 leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.slice(0, 5).map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1.5 text-xs bg-white/[0.05] text-white/60 rounded-lg border border-white/[0.05] group-hover:border-[#00ff66]/20 group-hover:text-white/80 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 5 && (
                        <span className="px-3 py-1.5 text-xs bg-white/[0.03] text-white/60 rounded-lg">
                          +{project.techStack.length - 5}
                        </span>
                      )}
                    </div>
                    
                    {/* Role */}
                    <div className="flex items-center gap-2 text-xs text-white/50">
                      <span className="w-1 h-1 rounded-full bg-[#00ff66]" />
                      <span>Role: <span className="text-white/70">{project.role}</span></span>
                    </div>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <p className="text-white/60 mb-8">Explore more on GitHub</p>
          <a 
            href="https://github.com/halloffame12"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:shadow-[0_0_32px_rgba(255,255,255,0.2)] transition-all"
          >
            <ExternalLink size={18} />
            <span>View All Repositories</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
