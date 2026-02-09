import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    navigation: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Projects', path: '/projects' },
      { name: 'Contact', path: '/contact' },
    ],
    resources: [
      { name: 'Skills', path: '/skills' },
      { name: 'Services', path: '/services' },
      { name: 'Research', path: '/research' },
      { name: 'Achievements', path: '/achievements' },
    ]
  };

  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Brand */}
          <div className="md:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#00ff66] flex items-center justify-center">
                <span className="text-black font-bold text-sm">S</span>
              </div>
              <span className="font-semibold text-white">
                Sumit<span className="text-[#00ff66]">.</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Full-Stack Architect & Systems Programmer building high-performance applications with modern technologies.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://github.com/halloffame12"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 bg-white/5 rounded-lg text-white/50 hover:text-[#00ff66] hover:bg-white/10 transition-all"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/sumit-chauhan-a4ba98325/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 bg-white/5 rounded-lg text-white/50 hover:text-[#00ff66] hover:bg-white/10 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:sumitchauhan10062004@gmail.com"
                aria-label="Email"
                className="p-2.5 bg-white/5 rounded-lg text-white/50 hover:text-[#00ff66] hover:bg-white/10 transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2">
            <h4 className="text-white font-medium mb-4">Navigation</h4>
            <ul className="space-y-3">
              {links.navigation.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-white/60 text-sm hover:text-[#00ff66] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="md:col-span-2">
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-white/60 text-sm hover:text-[#00ff66] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="md:col-span-4">
            <h4 className="text-white font-medium mb-4">Start a Project</h4>
            <p className="text-white/40 text-sm mb-4">
              Interested in working together? Let's discuss your ideas.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00ff66] text-black text-sm font-semibold rounded-lg hover:bg-[#00ff66]/90 transition-colors"
            >
              Get in Touch
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {currentYear} Sumit Chauhan. All rights reserved.
          </p>
          <p className="text-white/30 text-sm">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
