import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--bg-dark)', borderTop: 'var(--border-w) solid var(--border)' }}>
      <div className="page-container" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div style={{
                width: '32px', height: '32px',
                background: 'var(--accent-orange)', border: '2px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '0.9rem',
                color: 'var(--border)',
              }}>S</div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.9rem', color: 'var(--text-on-dark)' }}>
                SUMIT<span style={{ color: 'var(--accent-orange)' }}>.</span>
              </span>
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '22rem' }}>
              Systems engineer shipping Rust kernels, production React apps, and real-time platforms.
            </p>
            <div className="flex gap-2">
              {[
                { icon: <Github size={16} />, href: 'https://github.com/halloffame12', label: 'GitHub' },
                { icon: <Linkedin size={16} />, href: 'https://www.linkedin.com/in/sumit-chauhan-a4ba98325/', label: 'LinkedIn' },
                { icon: <Mail size={16} />, href: 'mailto:sumitchauhan10062004@gmail.com', label: 'Email' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="brutal-icon-link"
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {[{ n: 'Home', p: '/' }, { n: 'Work', p: '/projects' }, { n: 'About', p: '/about' }, { n: 'Contact', p: '/contact' }].map(l => (
                <li key={l.n}>
                  <Link to={l.p} className="brutal-nav-link">{l.n}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="md:col-span-4">
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Let's Work Together
            </h4>
            <p style={{ color: 'var(--text-on-dark)', fontSize: '0.875rem', marginBottom: '1.25rem', lineHeight: 1.7, maxWidth: '18rem' }}>
              Open to freelance gigs, systems-level contracts, and high-impact infrastructure projects.
            </p>
            <Link to="/contact" className="brutal-btn brutal-btn-sm">
              Start a Project <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left"
          style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: 'var(--border-w-sm) solid var(--border)' }}
        >
          <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
            &copy; {year} Sumit Chauhan. Handcrafted with raw intention.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
