import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, ArrowUpRight, Zap, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import { SPRING_SNAPPY } from '../types';
import SeoHelmet from '../components/SeoHelmet';
import PeepIllustration from '../components/PeepIllustration';
import ScrollReveal from '../components/ScrollReveal';
import MagneticButton from '../components/MagneticButton';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("maqyoojq");

  if (state.succeeded) {
    return (
      <article className="page-shell flex items-center" style={{ height: '100svh', paddingTop: 0 }}>
        <SeoHelmet path="/contact" title="Contact \u2014 Sumit Chauhan" description="Message sent successfully." />
        <div className="page-container">
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
            transition={SPRING_SNAPPY} className="text-center" style={{ maxWidth: '28rem', margin: '0 auto' }}>
            <div className="brutal-icon-box mx-auto" style={{ width: '56px', height: '56px', marginBottom: '1rem', background: '#00CC66' }}>
              <CheckCircle size={24} />
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: 'var(--black)', marginBottom: '0.5rem' }}>Message Sent</h1>
            <p style={{ color: '#555', fontSize: '0.8125rem', marginBottom: '1.5rem' }}>I'll respond within 24 hours.</p>
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
          <div style={{ marginBottom: '1rem' }}>
            <div className="flex items-end gap-4 flex-wrap">
              <div>
                <span className="brutal-kicker" style={{ marginBottom: '0.625rem', display: 'inline-flex' }}>Contact</span>
                <h1 className="brutal-section-title" style={{ marginTop: '0.5rem', marginBottom: '0.25rem' }}>Let's Talk</h1>
              </div>
              <div className="hidden lg:block" style={{ width: '80px' }}>
                <PeepIllustration pose="thinking" colors={{ outfit: 'var(--yellow)' }} size={80} />
              </div>
            </div>
            <p style={{ color: '#555', maxWidth: '26rem', fontSize: '0.875rem' }}>
              Got a hard problem? A project worth building? Drop a message.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="hidden sm:flex flex-wrap justify-center gap-2.5" style={{ marginBottom: '1rem' }}>
            {benefits.map((b, i) => (
              <div key={i} className="brutal-card-static flex items-center gap-2" style={{ padding: '0.5rem 0.875rem' }}>
                <div style={{ color: 'var(--blue)' }}>{b.icon}</div>
                <div>
                  <p style={{ fontWeight: 800, fontSize: '0.6875rem', color: 'var(--black)' }}>{b.title}</p>
                  <p style={{ fontSize: '0.5625rem', color: '#888' }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-5 lg:gap-6">
          <ScrollReveal variant="slideRight" delay={0.1} className="lg:col-span-3 order-1 lg:order-2">
            <div className="brutal-card" style={{ padding: '1.25rem' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1rem', color: 'var(--black)', marginBottom: '0.2rem' }}>
                Send a Message
              </h2>
              <p style={{ color: '#888', fontSize: '0.6875rem', marginBottom: '1rem' }}>All fields with * are required.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" style={{ display: 'block', fontSize: '0.625rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#555', marginBottom: '0.375rem' }}>Name *</label>
                    <input type="text" id="name" name="name" required className="brutal-input" placeholder="Your name" />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs mt-1" style={{ color: '#CC0000' }} />
                  </div>
                  <div>
                    <label htmlFor="email" style={{ display: 'block', fontSize: '0.625rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#555', marginBottom: '0.375rem' }}>Email *</label>
                    <input type="email" id="email" name="email" required className="brutal-input" placeholder="you@example.com" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs mt-1" style={{ color: '#CC0000' }} />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" style={{ display: 'block', fontSize: '0.625rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#555', marginBottom: '0.375rem' }}>Subject</label>
                  <input type="text" id="subject" name="subject" className="brutal-input" placeholder="Project Inquiry" />
                </div>
                <div>
                  <label htmlFor="message" style={{ display: 'block', fontSize: '0.625rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#555', marginBottom: '0.375rem' }}>Message *</label>
                  <textarea id="message" name="message" required rows={5} className="brutal-input" placeholder="Describe your project, timeline, and budget..." />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs mt-1" style={{ color: '#CC0000' }} />
                </div>
                <button type="submit" disabled={state.submitting} className="brutal-btn brutal-btn-block">
                  {state.submitting ? (
                    <><div className="animate-spin" style={{ width: '14px', height: '14px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#FFF', borderRadius: '50%' }} /><span>Sending...</span></>
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
                <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '0.875rem', color: 'var(--black)', marginBottom: '0.75rem' }}>Quick Contact</h2>
                <div className="flex flex-col gap-2.5">
                  {[
                    { icon: <Mail size={14} />, label: 'Email', val: 'sumitchauhan10062004@gmail.com', href: 'mailto:sumitchauhan10062004@gmail.com' },
                    { icon: <Phone size={14} />, label: 'Phone', val: 'Available on request' },
                    { icon: <MapPin size={14} />, label: 'Location', val: 'New Delhi, India' },
                  ].map((c, i) => (
                    <div key={i} className="brutal-sidebar-item">
                      <div className="brutal-icon-box" style={{ width: '32px', height: '32px' }}>{c.icon}</div>
                      <div className="min-w-0">
                        <p style={{ fontSize: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888' }}>{c.label}</p>
                        {c.href ? (
                          <a href={c.href} className="truncate block" aria-label={`${c.label}: ${c.val}`} style={{ fontWeight: 700, fontSize: '0.6875rem', color: 'var(--black)' }}>{c.val}</a>
                        ) : (
                          <p className="truncate" style={{ fontWeight: 700, fontSize: '0.6875rem', color: 'var(--black)' }}>{c.val}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="brutal-card" style={{ padding: '0.875rem' }}>
                <p style={{ fontSize: '0.625rem', color: '#888', marginBottom: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Find me online</p>
                <div className="flex flex-col gap-1.5">
                  {[
                    { icon: <Github size={16} />, label: 'GitHub', href: 'https://github.com/halloffame12' },
                    { icon: <Linkedin size={16} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sumit-chauhan-a4ba98325/' },
                  ].map(s => (
                    <MagneticButton key={s.label} strength={0.15}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                        className="flex items-center gap-2.5 brutal-hover-fill"
                        style={{ padding: '0.75rem 0.875rem' }}
                      >{s.icon} <span style={{ fontWeight: 800, fontSize: '0.75rem' }}>{s.label}</span></a>
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
