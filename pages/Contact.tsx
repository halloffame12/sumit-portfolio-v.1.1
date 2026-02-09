import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, ArrowUpRight } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("maqyoojq");

  // Success State
  if (state.succeeded) {
    return (
      <div className="min-h-screen pt-28 pb-24 flex items-center justify-center relative overflow-hidden">
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-[#00ff66]/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-6"
        >
          <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center bg-[#00ff66]/10 rounded-full">
            <CheckCircle size={40} className="text-[#00ff66]" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Message Sent!</h2>
          <p className="text-white/50 mb-8">
            Thank you for reaching out. I'll get back to you as soon as possible.
          </p>
          <a 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
          >
            Back to Home
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-24 relative overflow-hidden">
      
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#00ff66]/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#00ff66] text-sm font-medium tracking-wider uppercase mb-4">Contact</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Let's work<br />
            <span className="text-white/40">together.</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              <a 
                href="mailto:sumitchauhan10062004@gmail.com"
                className="flex items-center gap-4 p-5 bg-white/[0.02] rounded-xl border border-white/5 hover:border-[#00ff66]/20 transition-all group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#00ff66]/10 rounded-xl text-[#00ff66]">
                  <Mail size={20} />
                </div>
                <div className="flex-grow min-w-0">
                  <p className="text-xs text-white/40 mb-1">Email</p>
                  <p className="text-white font-medium truncate">sumitchauhan10062004@gmail.com</p>
                </div>
                <ArrowUpRight size={16} className="text-white/20 group-hover:text-[#00ff66] transition-colors flex-shrink-0" />
              </a>
              
              <a 
                href="tel:+917678331501"
                className="flex items-center gap-4 p-5 bg-white/[0.02] rounded-xl border border-white/5 hover:border-[#00ff66]/20 transition-all group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#00ff66]/10 rounded-xl text-[#00ff66]">
                  <Phone size={20} />
                </div>
                <div className="flex-grow">
                  <p className="text-xs text-white/40 mb-1">Phone</p>
                  <p className="text-white font-medium">+91 767 833 1501</p>
                </div>
                <ArrowUpRight size={16} className="text-white/20 group-hover:text-[#00ff66] transition-colors flex-shrink-0" />
              </a>
              
              <div className="flex items-center gap-4 p-5 bg-white/[0.02] rounded-xl border border-white/5">
                <div className="w-12 h-12 flex items-center justify-center bg-[#00ff66]/10 rounded-xl text-[#00ff66]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-1">Location</p>
                  <p className="text-white font-medium">IIT Patna, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-sm text-white/40 mb-4">Connect on social</p>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/halloffame12"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-4 bg-white/[0.02] rounded-xl border border-white/5 text-white/50 hover:text-[#00ff66] hover:border-[#00ff66]/20 transition-all"
                >
                  <Github size={22} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sumit-chauhan-a4ba98325/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-4 bg-white/[0.02] rounded-xl border border-white/5 text-white/50 hover:text-[#00ff66] hover:border-[#00ff66]/20 transition-all"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 bg-[#00ff66]/5 rounded-xl border border-[#00ff66]/10">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff66] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00ff66]"></span>
                </span>
                <span className="text-[#00ff66] font-medium">Available for work</span>
              </div>
              <p className="text-white/50 text-sm">
                Currently accepting new projects and freelance opportunities.
              </p>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/60 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#00ff66]/50 focus:bg-white/[0.04] transition-all"
                    placeholder="Your name"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-white/60 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#00ff66]/50 focus:bg-white/[0.04] transition-all"
                    placeholder="your@email.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm text-white/60 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#00ff66]/50 focus:bg-white/[0.04] transition-all"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm text-white/60 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#00ff66]/50 focus:bg-white/[0.04] transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#00ff66] text-black font-semibold rounded-xl hover:bg-[#00ff66]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-[0_0_40px_rgba(0,255,102,0.3)]"
              >
                {state.submitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
