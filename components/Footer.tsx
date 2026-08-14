import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUpRight, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { InkSpiral, InkStar } from './Ink';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--black)', borderTop: 'var(--bw) solid var(--border)', position: 'relative', overflow: 'hidden' }}>
      <div className="brutal-watermark" style={{ position: 'absolute', bottom: '-2rem', left: '-1rem', opacity: 0.03 }} aria-hidden="true">SUMIT.</div>
      <span aria-hidden="true" style={{ position: 'absolute', top: '1.25rem', right: '1.5rem', color: 'var(--bg)', opacity: 0.18 }}>
        <InkSpiral width={34} height={34} />
      </span>

      <div className="page-container" style={{ paddingTop: '3.5rem', paddingBottom: '2.5rem', position: 'relative', zIndex: 2 }}>
        <div className="flex items-center justify-between flex-wrap gap-2" style={{ marginBottom: '2.5rem', borderBottom: 'var(--bw-sm) solid rgba(247,243,236,0.15)', paddingBottom: '1.25rem' }}>
          <span className="font-mono" style={{ fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--bg)', opacity: 0.85 }}>
            BACK COVER — THE END
          </span>
          <span className="font-ink" style={{ fontSize: '1.25rem', color: 'var(--bg)', opacity: 0.7, transform: 'rotate(-2deg)' }}>
            thanks for reading to the end →
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 flex flex-col gap-3">
            <Link to="/" className="flex items-center gap-2">
              <div style={{
                width: '32px', height: '32px', background: 'var(--bg)',
                border: '2px solid var(--border)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontFamily: 'var(--font-display)',
                fontWeight: 900, fontSize: '0.875rem', color: 'var(--black)',
                boxShadow: '3px 3px 0px var(--border)',
              }}>S</div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--bg)' }}>
                SUMIT<span className="font-ink" style={{ fontSize: '1.3rem' }}>.</span>
              </span>
            </Link>
            <p style={{ color: '#B5B0A4', fontSize: '0.8125rem', lineHeight: 1.7, maxWidth: '20rem' }}>
              Full-stack developer shipping real-time platforms, AI-powered tools, and cross-platform apps from New Delhi.
            </p>
            <div className="flex gap-2">
              {[
                { icon: <Github size={15} />, href: 'https://github.com/halloffame12', label: 'GitHub' },
                { icon: <Linkedin size={15} />, href: 'https://www.linkedin.com/in/sumit-chauhan-a4ba98325/', label: 'LinkedIn' },
                { icon: <Mail size={15} />, href: 'mailto:sumitchauhan10062004@gmail.com', label: 'Email' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'var(--bw-sm) solid rgba(247,243,236,0.4)', color: 'var(--bg)', transition: 'background 0.15s, color 0.15s' }}
                  className="hover:bg-[var(--bg)] hover:text-[var(--black)]">{s.icon}</a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono" style={{ fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#77736A', marginBottom: '0.875rem' }}>
              Index
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[{ n: '00', name: 'Cover', p: '/' }, { n: '04', name: 'Work', p: '/projects' }, { n: '07', name: 'Journey', p: '/about' }, { n: '09', name: 'Contact', p: '/contact' }].map(l => (
                <li key={l.p}>
                  <Link to={l.p} className="ink-underline flex items-baseline gap-2" style={{ color: 'var(--bg)', fontSize: '0.8125rem', fontWeight: 600 }}>
                    <span className="font-mono" style={{ fontSize: '0.5625rem', color: '#77736A' }}>{l.n}</span> {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-mono" style={{ fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#77736A', marginBottom: '0.875rem' }}>
              Let's Build Together
            </h4>
            <p style={{ color: 'var(--bg)', fontSize: '0.8125rem', marginBottom: '1rem', lineHeight: 1.7, maxWidth: '18rem' }}>
              Open to freelance gigs, AI automation projects, and high-impact builds. Direct comms, no middlemen.
            </p>
            <Link to="/contact" className="brutal-btn brutal-btn-sm" style={{ background: 'var(--bg)', color: 'var(--black)', borderColor: 'var(--bg)' }}>
              Start a Project <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left"
          style={{ marginTop: '2.5rem', paddingTop: '1.25rem', borderTop: 'var(--bw-sm) solid rgba(247,243,236,0.15)' }}
        >
          <div className="flex items-center gap-2">
            <InkStar width={14} height={14} style={{ color: 'var(--bg)', opacity: 0.5 }} />
            <p className="font-mono" style={{ color: '#77736A', fontSize: '0.625rem' }}>
              &copy; {year} SUMIT CHAUHAN — HAND-DRAWN, ONE PIXEL AT A TIME.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-mono" style={{ color: '#77736A', fontSize: '0.5625rem' }}>
              SOURCE CODE ON GITHUB
            </p>
            <motion.a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(247,243,236,0.3)', color: 'var(--bg)' }}
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
