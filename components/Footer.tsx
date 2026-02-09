
import React from 'react';
import { Github, Linkedin, Mail, Phone, FileText, Terminal, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8 mt-20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#00ff66]/3 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg group-hover:border-[#00ff66]/40 transition-all">
                <Terminal size={20} className="text-[#00ff66]" />
              </div>
              <span className="font-tech text-xl font-bold tracking-tighter uppercase">
                Sumit<span className="text-[#00ff66]">.Dev</span>
              </span>
            </Link>
            <p className="text-[#707070] text-sm leading-relaxed max-w-xs">
              Full-Stack Architect & Systems Programmer. Building innovative solutions with Rust, WebAssembly, and modern web technologies.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-tech text-sm font-bold uppercase tracking-widest">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Projects', path: '/projects' },
                { name: 'Research', path: '/research' },
                { name: 'Skills', path: '/skills' },
                { name: 'About', path: '/about' },
              ].map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  className="text-[#808080] text-sm hover:text-[#00ff66] transition-colors flex items-center gap-1 group"
                >
                  {link.name}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
          
          {/* Research Highlight */}
          <div className="space-y-6">
            <h4 className="text-white font-tech text-sm font-bold uppercase tracking-widest">Latest Research</h4>
            <a 
              href="https://osf.io/m3gv8/files/vu5eq"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-neutral-950 border border-white/10 rounded-2xl hover:border-[#00ff66]/30 transition-all group"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#00ff66]/10 rounded-lg shrink-0">
                  <FileText size={16} className="text-[#00ff66]" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium group-hover:text-[#00ff66] transition-colors">BrowserOS</p>
                  <p className="text-[#606060] text-xs mt-1">Virtual OS in WebAssembly</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 py-8 border-t border-white/5">
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/halloffame12" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub Profile"
              className="p-3 bg-neutral-950 border border-white/10 rounded-xl text-[#808080] hover:text-[#00ff66] hover:border-[#00ff66]/30 transition-all"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/sumit-chauhan-a4ba98325/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn Profile"
              className="p-3 bg-neutral-950 border border-white/10 rounded-xl text-[#808080] hover:text-[#00ff66] hover:border-[#00ff66]/30 transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="tel:+917678331501" 
              aria-label="Phone Number"
              className="p-3 bg-neutral-950 border border-white/10 rounded-xl text-[#808080] hover:text-[#00ff66] hover:border-[#00ff66]/30 transition-all"
            >
              <Phone size={18} />
            </a>
            <a 
              href="mailto:sumitchauhan10062004@gmail.com" 
              aria-label="Email Address"
              className="p-3 bg-neutral-950 border border-white/10 rounded-xl text-[#808080] hover:text-[#00ff66] hover:border-[#00ff66]/30 transition-all"
            >
              <Mail size={18} />
            </a>
          </div>
          
          <p className="text-[10px] text-[#505050] uppercase tracking-[0.3em] font-tech">
            &copy; {currentYear} Sumit Chauhan • Systems & Full-Stack Dev • v3.0
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
