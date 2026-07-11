import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, ArrowUpRight, Zap, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import SeoHelmet from '../components/SeoHelmet';

const fadeUpSpring = {
  hidden: { y: 25, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 22 } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const clipReveal = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  show: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("maqyoojq");

  if (state.succeeded) {
    return (
      <article className="page-shell flex items-center" style={{ minHeight: '60vh' }}>
        <SeoHelmet
          path="/contact"
          title="Contact — Sumit Chauhan | Systems Engineer & Full-Stack Architect"
          description="Message sent successfully."
        />
        <div className="page-container">
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="text-center" style={{ maxWidth: '28rem', margin: '0 auto' }}>
            <div className="brutal-icon-box mx-auto" style={{ width: '64px', height: '64px', marginBottom: '1.5rem', background: 'var(--accent-green)', borderRadius: '0' }}>
              <CheckCircle size={28} />
            </div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              Message Sent
            </h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>I'll respond within 24 hours.</p>
            <Link to="/" className="brutal-btn-outline">Back to Home <ArrowUpRight size={14} /></Link>
          </motion.div>
        </div>
      </article>
    );
  }

  const benefits = [
    { icon: <Zap size={16} />, title: 'Fast Response', desc: '< 24 hours' },
    { icon: <Clock size={16} />, title: 'Any Timezone', desc: 'Flexible hours' },
    { icon: <MessageSquare size={16} />, title: 'Direct Comms', desc: 'No middlemen' },
  ];

  return (
    <article className="page-shell">
      <SeoHelmet
        path="/contact"
        title="Contact — Sumit Chauhan | Systems Engineer & Full-Stack Architect"
        description="Available for freelance contracts, systems-level work, and high-impact infrastructure projects. Fast response, direct communication."
      />

      <div className="page-container">
        {/* Header */}
        <section>
          <motion.div className="text-center" style={{ marginBottom: '2.5rem' }}
            variants={staggerContainer} initial="hidden" animate="show"
          >
            <span className="brutal-kicker" style={{ marginBottom: '0.75rem', display: 'inline-flex' }}>Contact</span>
            <motion.h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--text-primary)', letterSpacing: '-0.04em', marginTop: '0.75rem', marginBottom: '0.5rem' }} variants={clipReveal}>
              Let's Talk Scope
            </motion.h1>
            <motion.p style={{ color: 'var(--text-secondary)', maxWidth: '28rem', margin: '0 auto' }} variants={fadeUpSpring}>
              Got a hard problem? A contract worth doing? Drop a message.
            </motion.p>
          </motion.div>
        </section>

        {/* Benefits */}
        <section aria-labelledby="benefits-h">
          <h2 id="benefits-h" className="sr-only">Contact Benefits</h2>
          <motion.div className="hidden sm:flex flex-wrap justify-center gap-3" style={{ marginBottom: '2.5rem' }}
            variants={staggerContainer} initial="hidden" animate="show"
          >
            {benefits.map((b, i) => (
              <motion.div key={i} className="brutal-card-static flex items-center gap-2.5" style={{ padding: '0.6rem 1rem' }} variants={fadeUpSpring}>
                <div style={{ color: 'var(--accent-orange)' }}>{b.icon}</div>
                <div>
                  <p style={{ fontWeight: 800, fontSize: '0.75rem', color: 'var(--text-primary)' }}>{b.title}</p>
                  <p style={{ fontSize: '0.625rem', color: 'var(--text-muted)' }}>{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Main Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Form */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 0.1 }}
            className="lg:col-span-3 order-1 lg:order-2"
          >
            <div className="brutal-card" style={{ padding: 'clamp(1.25rem, 3vw, 2rem)' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1.125rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                Send a Message
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '1.5rem' }}>All fields with * are required.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Name *</label>
                    <input type="text" id="name" name="name" required className="brutal-input" placeholder="John Doe" />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs mt-1" style={{ color: 'var(--accent-orange)' }} />
                  </div>
                  <div>
                    <label htmlFor="email" style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Email *</label>
                    <input type="email" id="email" name="email" required className="brutal-input" placeholder="john@example.com" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs mt-1" style={{ color: 'var(--accent-orange)' }} />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Subject</label>
                  <input type="text" id="subject" name="subject" className="brutal-input" placeholder="Project Inquiry" />
                </div>
                <div>
                  <label htmlFor="message" style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Message *</label>
                  <textarea id="message" name="message" required rows={5} className="brutal-input" placeholder="Describe your project, timeline, and budget..." />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs mt-1" style={{ color: 'var(--accent-orange)' }} />
                </div>
                <button type="submit" disabled={state.submitting} className="brutal-btn brutal-btn-block">
                  {state.submitting ? (
                    <><div className="animate-spin" style={{ width: '16px', height: '16px', border: '2px solid rgba(0,0,0,0.3)', borderTopColor: '#000', borderRadius: '50%' }} /><span>Sending...</span></>
                  ) : (
                    <><Send size={16} /><span>Send Message</span></>
                  )}
                </button>
              </form>
            </div>
          </motion.section>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 0.2 }}
            className="lg:col-span-2 order-2 lg:order-1 flex flex-col gap-4"
          >
            <div className="brutal-card" style={{ padding: '1.25rem' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Quick Contact</h2>
              <motion.div className="flex flex-col gap-3"
                variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
              >
                {[
                  { icon: <Mail size={16} />, label: 'Email', val: 'sumitchauhan10062004@gmail.com', href: 'mailto:sumitchauhan10062004@gmail.com' },
                  { icon: <Phone size={16} />, label: 'Phone', val: 'Available on request' },
                  { icon: <MapPin size={16} />, label: 'Location', val: 'India' },
                ].map((c, i) => (
                  <motion.div key={i} className="brutal-sidebar-item" variants={fadeUpSpring}>
                    <div className="brutal-icon-box" style={{ width: '36px', height: '36px' }}>{c.icon}</div>
                    <div className="min-w-0">
                      <p style={{ fontSize: '0.5625rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="truncate block" style={{ fontWeight: 700, fontSize: '0.75rem', color: 'var(--text-primary)' }}>{c.val}</a>
                      ) : (
                        <p className="truncate" style={{ fontWeight: 700, fontSize: '0.75rem', color: 'var(--text-primary)' }}>{c.val}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div className="brutal-card" style={{ padding: '1rem' }}
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 0.35 }}
            >
              <p style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', marginBottom: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Find me online</p>
              <div className="flex gap-2">
                {[
                  { icon: <Github size={16} />, label: 'GitHub', href: 'https://github.com/halloffame12' },
                  { icon: <Linkedin size={16} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sumit-chauhan-a4ba98325/' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="flex-1 flex items-center justify-center gap-2 brutal-hover-fill"
                  >{s.icon} {s.label}</a>
                ))}
              </div>
            </motion.div>
          </motion.aside>
        </div>
      </div>
    </article>
  );
};

export default Contact;
