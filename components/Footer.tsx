import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUpRight, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--black)', borderTop: 'var(--bw) solid var(--border)', position: 'relative', overflow: 'hidden' }}>
      <div className="brutal-watermark" style={{ position: 'absolute', bottom: '-2rem', left: '-1rem', opacity: 0.03 }} aria-hidden="true">SUMIT.</div>

      <div className="page-container" style={{ paddingTop: '3.5rem', paddingBottom: '2.5rem', position: 'relative', zIndex: 2 }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 flex flex-col gap-3">
            <Link to="/" className="flex items-center gap-2">
              <div style={{
                width: '30px', height: '30px', background: 'var(--blue)',
                border: '2px solid var(--border)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontFamily: 'var(--font-heading)',
                fontWeight: 900, fontSize: '0.8rem', color: '#FFF',
              }}>S</div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.875rem', color: 'var(--bg)' }}>
                SUMIT<span style={{ color: 'var(--blue)' }}>.</span>
              </span>
            </Link>
            <p style={{ color: '#888', fontSize: '0.8125rem', lineHeight: 1.7, maxWidth: '20rem' }}>
              Full-stack developer shipping real-time platforms, AI-powered tools, and cross-platform apps from New Delhi.
            </p>
            <div className="flex gap-1.5">
              {[
                { icon: <Github size={15} />, href: 'https://github.com/halloffame12', label: 'GitHub' },
                { icon: <Linkedin size={15} />, href: 'https://www.linkedin.com/in/sumit-chauhan-a4ba98325/', label: 'LinkedIn' },
                { icon: <Mail size={15} />, href: 'mailto:sumitchauhan10062004@gmail.com', label: 'Email' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="brutal-icon-link">{s.icon}</a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#666', marginBottom: '0.75rem' }}>
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[{ n: 'Home', p: '/' }, { n: 'Builds', p: '/projects' }, { n: 'About', p: '/about' }, { n: 'Contact', p: '/contact' }].map(l => (
                <li key={l.n}><Link to={l.p} className="brutal-nav-link">{l.n}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#666', marginBottom: '0.75rem' }}>
              Let's Build Together
            </h4>
            <p style={{ color: 'var(--bg)', fontSize: '0.8125rem', marginBottom: '1rem', lineHeight: 1.7, maxWidth: '18rem' }}>
              Open to freelance gigs, AI automation projects, and high-impact builds. Direct comms, no middlemen.
            </p>
            <Link to="/contact" className="brutal-btn brutal-btn-sm">
              Start a Project <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left"
          style={{ marginTop: '2.5rem', paddingTop: '1.25rem', borderTop: 'var(--bw-sm) solid rgba(255,255,255,0.12)' }}
        >
          <p style={{ color: '#666', fontSize: '0.6875rem' }}>
            &copy; {year} Sumit Chauhan. Handcrafted with raw intention.
          </p>
          <div className="flex items-center gap-4">
            <p style={{ color: '#666', fontSize: '0.5625rem' }}>
              Illustrations by <a href="https://www.openpeeps.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)' }}>Open Peeps</a> (CC0 1.0)
            </p>
            <motion.a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.2)', color: '#666' }}
              aria-label="Back to top"
            >
              <ArrowUp size={12} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
