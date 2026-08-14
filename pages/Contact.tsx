import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, ArrowUpRight, Zap, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import { SOCIALS } from '../data/profile';
import { SPRING_SNAPPY } from '../types';
import SeoHelmet from '../components/SeoHelmet';
import ScrollReveal from '../components/ScrollReveal';
import MagneticButton from '../components/MagneticButton';
import CopyEmail from '../components/CopyEmail';
import { InkArrowBig, InkStar } from '../components/Ink';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("maqyoojq");

  if (state.succeeded) {
    return (
      <article className="page-shell flex items-center" style={{ height: '100svh', paddingTop: 0 }}>
        <SeoHelmet path="/contact" title="Contact \u2014 Sumit Chauhan" description="Message sent successfully." />
        <div className="page-container">
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
            transition={SPRING_SNAPPY} className="text-center" style={{ maxWidth: '28rem', margin: '0 auto' }}>
            <div className="brutal-icon-box mx-auto" style={{ width: '60px', height: '60px', marginBottom: '1rem' }}>
              <CheckCircle size={26} />
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--black)', marginBottom: '0.5rem' }}>Ink sent.</h1>
            <p style={{ color: 'var(--ink-soft)', fontSize: '0.8125rem', marginBottom: '1.5rem' }}>I'll write back within 24 hours.</p>
            <Link to="/" className="brutal-btn-outline">Back to Home <ArrowUpRight size={14} /></Link>
          </motion.div>
        </div>
      </article>
    );
  }

  const benefits = [
    { icon: <Zap size={14} />, title: 'Fast Response', desc: '< 24 hours' },
    { icon: <Clock size={14} />, title: 'Any Timezone', desc: 'Flexible hours' },
    { icon: <MessageSquare size={14} />, title: 'Direct Comms', desc: 'No middlemen' },
  ];

  return (
    <article className="page-shell">
      <SeoHelmet path="/contact" title="Contact \u2014 Sumit Chauhan" description="Available for freelance contracts, AI automation projects, and full-stack builds." />

      <div className="page-container">
        <ScrollReveal variant="clipReveal">
          <div className="flex items-center gap-3 flex-wrap" style={{ marginBottom: '0.75rem' }}>
            <span className="brutal-sticker" style={{ display: 'inline-flex' }}>Chapter 09 — Let's Build</span>
            <span className="ink-page-chip">PAGE 09 / 09 · THE LAST ONE</span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2.25rem, 8vw, 5.75rem)',
            lineHeight: 0.92, letterSpacing: '-0.03em', color: 'var(--black)', marginBottom: '0.625rem',
          }}>
            Let's write<br />
            <span className="ink-underline">the last chapter.</span>
          </h1>
          <div className="flex items-center gap-2" style={{ marginBottom: '1.5rem' }}>
            <InkArrowBig width={120} height={56} strokeWidth={3} style={{ color: 'var(--black)', transform: 'rotate(4deg)' }} />
            <span className="font-ink" style={{ fontSize: '1.4rem', color: 'var(--ink-faint)', transform: 'rotate(-2deg)' }}>
              got a hard problem? → hit me up
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="hidden sm:flex flex-wrap justify-center gap-2.5" style={{ marginBottom: '1.5rem' }}>
            {benefits.map((b, i) => (
              <div key={i} className="brutal-card-static flex items-center gap-2" style={{ padding: '0.5rem 0.875rem', transform: i === 1 ? 'rotate(0.3deg)' : 'rotate(-0.3deg)' }}>
                <div className="brutal-icon-box" style={{ width: '28px', height: '28px' }}>{b.icon}</div>
                <div>
                  <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.6875rem', color: 'var(--black)' }}>{b.title}</p>
                  <p className="font-mono" style={{ fontSize: '0.5625rem', color: 'var(--ink-faint)' }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-5 lg:gap-6">
          <ScrollReveal variant="slideRight" delay={0.1} className="lg:col-span-3 order-1 lg:order-2">
            <div className="sheet-lined relative" data-cursor="view" style={{ padding: '1.25rem', border: 'var(--bw) solid var(--border)', boxShadow: 'var(--sh)', background: 'var(--bg-card)' }}>
              <div className="flex items-center justify-between flex-wrap gap-2" style={{ marginBottom: '1rem', borderBottom: 'var(--bw) solid var(--border)', paddingBottom: '0.875rem' }}>
                <div>
                  <h2 className="font-mono" style={{ fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--black)' }}>
                    Send a Letter
                  </h2>
                  <p className="font-ink" style={{ fontSize: '1.1rem', color: 'var(--ink-faint)' }}>every field gets read, I promise</p>
                </div>
                <InkStar width={20} height={20} style={{ color: 'var(--ink-faint)', opacity: 0.5 }} />
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="font-mono" style={{ display: 'block', fontSize: '0.5625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-faint)', marginBottom: '0.375rem' }}>Name *</label>
                    <input type="text" id="name" name="name" required className="brutal-input" placeholder="Your name" />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs mt-1" style={{ color: '#CC0000' }} />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-mono" style={{ display: 'block', fontSize: '0.5625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-faint)', marginBottom: '0.375rem' }}>Email *</label>
                    <input type="email" id="email" name="email" required className="brutal-input" placeholder="you@example.com" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs mt-1" style={{ color: '#CC0000' }} />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="font-mono" style={{ display: 'block', fontSize: '0.5625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-faint)', marginBottom: '0.375rem' }}>Subject</label>
                  <input type="text" id="subject" name="subject" className="brutal-input" placeholder="Project Inquiry" />
                </div>
                <div>
                  <label htmlFor="message" className="font-mono" style={{ display: 'block', fontSize: '0.5625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-faint)', marginBottom: '0.375rem' }}>Message *</label>
                  <textarea id="message" name="message" required rows={5} className="brutal-input" placeholder="Describe your project, timeline, and budget..." />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs mt-1" style={{ color: '#CC0000' }} />
                </div>
                <button type="submit" disabled={state.submitting} className="brutal-btn brutal-btn-block">
                  {state.submitting ? (
                    <><div className="animate-spin" style={{ width: '14px', height: '14px', border: '2px solid rgba(247,243,236,0.3)', borderTopColor: 'var(--bg)', borderRadius: '50%' }} /><span>Sending...</span></>
                  ) : (
                    <><Send size={14} /><span>Send Message</span></>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slideLeft" delay={0.2} className="lg:col-span-2 order-2 lg:order-1">
            <div className="flex flex-col gap-3">
              <div className="brutal-card" style={{ padding: '1rem' }}>
                <h2 className="font-mono" style={{ fontWeight: 700, fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--black)', marginBottom: '0.75rem' }}>
                  Quick Contact
                </h2>
                <div className="flex flex-col gap-2.5">
                  <CopyEmail />
                  {[
                    { icon: <Phone size={14} />, label: 'Phone', val: 'Available on request' },
                    { icon: <MapPin size={14} />, label: 'Location', val: 'New Delhi, India' },
                  ].map((c, i) => (
                    <div key={i} className="brutal-sidebar-item">
                      <div className="brutal-icon-box" style={{ width: '34px', height: '34px' }}>{c.icon}</div>
                      <div className="min-w-0">
                        <p className="font-mono" style={{ fontSize: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-faint)' }}>{c.label}</p>
                        <p className="truncate" style={{ fontWeight: 700, fontSize: '0.6875rem', color: 'var(--black)' }}>{c.val}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="brutal-card" style={{ padding: '0.875rem' }}>
                <p className="font-mono" style={{ fontSize: '0.5625rem', color: 'var(--ink-faint)', marginBottom: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Find me online</p>
                <div className="flex flex-col gap-1.5">
                  {[
                    { icon: <Github size={16} />, label: SOCIALS.github.label, handle: SOCIALS.github.handle, href: SOCIALS.github.url },
                    { icon: <Linkedin size={16} />, label: SOCIALS.linkedin.label, handle: SOCIALS.linkedin.handle, href: SOCIALS.linkedin.url },
                    { icon: <Mail size={16} />, label: SOCIALS.email.label, handle: SOCIALS.email.handle, href: SOCIALS.email.url },
                  ].map(s => (
                    <MagneticButton key={s.label} strength={0.15}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                        className="flex items-center gap-2.5 brutal-hover-fill"
                        style={{ padding: '0.75rem 0.875rem' }}
                      >{s.icon} <span style={{ fontWeight: 800, fontSize: '0.75rem' }}>{s.label}</span> <span className="font-mono" style={{ marginLeft: 'auto', fontSize: '0.5625rem', color: 'var(--ink-faint)' }}>{s.handle}</span></a>
                    </MagneticButton>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </article>
  );
};

export default Contact;
