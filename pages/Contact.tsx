import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, ArrowUpRight, MessageSquare, Clock, Zap } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("maqyoojq");

  // Success State
  if (state.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black px-4">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-radial from-[#00ff66]/20 via-transparent to-transparent" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-md mx-auto"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8 flex items-center justify-center bg-[#00ff66] rounded-full shadow-[0_0_60px_rgba(0,255,102,0.5)]"
          >
            <CheckCircle size={40} className="text-black" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Message Sent!</h2>
          <p className="text-white/50 text-base sm:text-lg mb-8 sm:mb-10">
            Thank you for reaching out. I'll get back to you within 24 hours.
          </p>
          <a 
            href="/"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/5 text-white font-medium rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm sm:text-base"
          >
            Back to Home
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    );
  }

  const benefits = [
    { icon: <Zap size={18} />, title: 'Fast Response', desc: '24 hours' },
    { icon: <Clock size={18} />, title: 'Flexible', desc: 'Any timezone' },
    { icon: <MessageSquare size={18} />, title: 'Clear Comms', desc: 'Updates' },
  ];

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-24 relative overflow-hidden bg-black">
      
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[1000px] h-[400px] sm:h-[600px] bg-gradient-radial from-[#00ff66]/15 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-radial from-purple-500/10 to-transparent blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#00ff66]/10 rounded-full border border-[#00ff66]/20 mb-4 sm:mb-6"
          >
            <svg viewBox="0 0 48 48" fill="none" className="w-3 h-3 sm:w-4 sm:h-4">
              <circle cx="24" cy="24" r="22" fill="#00ff66" />
              <path d="M30 16H21C18.79 16 17 17.79 17 20C17 22.21 18.79 24 21 24H27C29.21 24 31 25.79 31 28C31 30.21 29.21 32 27 32H18" stroke="black" strokeWidth="3" strokeLinecap="round" fill="none" />
              <circle cx="33" cy="15" r="3" fill="black" />
            </svg>
            <span className="text-xs sm:text-sm text-[#00ff66] font-medium">Let's Connect</span>
          </motion.div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
            Start a Project
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-white/50 max-w-md sm:max-w-xl mx-auto px-2">
            Have an idea? Let's turn it into something amazing together.
          </p>
        </motion.div>

        {/* Benefits Bar - Hidden on mobile, shown on sm+ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hidden sm:flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6 mb-10 lg:mb-16"
        >
          {benefits.map((item, i) => (
            <div 
              key={i}
              className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-white/[0.03] rounded-full border border-white/[0.05]"
            >
              <div className="text-[#00ff66]">{item.icon}</div>
              <div>
                <p className="text-white text-xs sm:text-sm font-medium">{item.title}</p>
                <p className="text-white/40 text-[10px] sm:text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Main Grid - Form first on mobile */}
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-6 lg:gap-12">
          
          {/* Contact Form - Shown first on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 order-1 lg:order-2"
          >
            <div className="p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.08] relative overflow-hidden">
              {/* Decorative corner gradient */}
              <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-radial from-[#00ff66]/10 to-transparent blur-2xl" />
              
              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Send a Message</h3>
                <p className="text-white/40 text-xs sm:text-sm mb-5 sm:mb-8">Fill out the form and I'll get back to you soon.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Name & Email - Stack on mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm text-white/60 mb-1.5 sm:mb-2 font-medium">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-black/40 border border-white/10 rounded-lg sm:rounded-xl text-white text-sm sm:text-base placeholder-white/25 focus:outline-none focus:border-[#00ff66]/50 transition-all"
                        placeholder="John Doe"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm text-white/60 mb-1.5 sm:mb-2 font-medium">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-black/40 border border-white/10 rounded-lg sm:rounded-xl text-white text-sm sm:text-base placeholder-white/25 focus:outline-none focus:border-[#00ff66]/50 transition-all"
                        placeholder="john@example.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs sm:text-sm text-white/60 mb-1.5 sm:mb-2 font-medium">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-black/40 border border-white/10 rounded-lg sm:rounded-xl text-white text-sm sm:text-base placeholder-white/25 focus:outline-none focus:border-[#00ff66]/50 transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  {/* Budget - Hidden on mobile */}
                  <div className="hidden sm:block relative">
                    <label htmlFor="budget" className="block text-xs sm:text-sm text-white/60 mb-1.5 sm:mb-2 font-medium">Budget Range</label>
                    <div className="relative">
                      <select
                        id="budget"
                        name="budget"
                        className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-black/40 border border-white/10 rounded-lg sm:rounded-xl text-white text-sm sm:text-base focus:outline-none focus:border-[#00ff66]/50 transition-all appearance-none cursor-pointer pr-10"
                      >
                        <option value="">Select a range (optional)</option>
                        <option value="<5k">Less than $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k+">$25,000+</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm text-white/60 mb-1.5 sm:mb-2 font-medium">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-black/40 border border-white/10 rounded-lg sm:rounded-xl text-white text-sm sm:text-base placeholder-white/25 focus:outline-none focus:border-[#00ff66]/50 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 sm:py-5 bg-[#00ff66] text-black font-bold text-sm sm:text-base rounded-lg sm:rounded-xl hover:shadow-[0_0_40px_rgba(0,255,102,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {state.submitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Info - Shown second on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 order-2 lg:order-1 space-y-4 sm:space-y-6"
          >
            {/* Quick Contact Card */}
            <div className="p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08]">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Quick Contact</h3>
              
              <div className="space-y-3 sm:space-y-4">
                <a 
                  href="mailto:sumitchauhan10062004@gmail.com"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/[0.03] rounded-xl hover:bg-white/[0.06] transition-all group"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center bg-[#00ff66]/10 rounded-xl text-[#00ff66]">
                    <Mail size={16} />
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="text-[10px] sm:text-xs text-white/40 mb-0.5">Email</p>
                    <p className="text-white font-medium text-xs sm:text-sm truncate">sumitchauhan10062004@gmail.com</p>
                  </div>
                  <ArrowUpRight size={14} className="text-white/20 group-hover:text-[#00ff66] transition-colors flex-shrink-0 hidden sm:block" />
                </a>
                
                <a 
                  href="tel:+917678331501"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/[0.03] rounded-xl hover:bg-white/[0.06] transition-all group"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center bg-[#00ff66]/10 rounded-xl text-[#00ff66]">
                    <Phone size={16} />
                  </div>
                  <div className="flex-grow">
                    <p className="text-[10px] sm:text-xs text-white/40 mb-0.5">Phone</p>
                    <p className="text-white font-medium text-xs sm:text-sm">+91 767 833 1501</p>
                  </div>
                  <ArrowUpRight size={14} className="text-white/20 group-hover:text-[#00ff66] transition-colors flex-shrink-0 hidden sm:block" />
                </a>
                
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/[0.03] rounded-xl">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center bg-[#00ff66]/10 rounded-xl text-[#00ff66]">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-white/40 mb-0.5">Location</p>
                    <p className="text-white font-medium text-xs sm:text-sm">IIT Patna, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <p className="text-xs sm:text-sm text-white/40 mb-3 sm:mb-4">Find me online</p>
              <div className="flex gap-2 sm:gap-3">
                <a 
                  href="https://github.com/halloffame12"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex-1 flex items-center justify-center gap-2 p-3 sm:p-4 bg-white/[0.03] rounded-lg sm:rounded-xl text-white/50 hover:text-white hover:bg-white/[0.06] transition-all"
                >
                  <Github size={18} />
                  <span className="text-xs sm:text-sm font-medium">GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/sumit-chauhan-a4ba98325/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex-1 flex items-center justify-center gap-2 p-3 sm:p-4 bg-white/[0.03] rounded-lg sm:rounded-xl text-white/50 hover:text-white hover:bg-white/[0.06] transition-all"
                >
                  <Linkedin size={18} />
                  <span className="text-xs sm:text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#00ff66]/10 to-[#00ff66]/5 border border-[#00ff66]/20">
              <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <svg viewBox="0 0 48 48" fill="none" className="w-5 h-5 sm:w-6 sm:h-6">
                  <circle cx="24" cy="24" r="22" fill="#00ff66" />
                  <path d="M30 16H21C18.79 16 17 17.79 17 20C17 22.21 18.79 24 21 24H27C29.21 24 31 25.79 31 28C31 30.21 29.21 32 27 32H18" stroke="black" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <circle cx="33" cy="15" r="3" fill="black" />
                </svg>
                <span className="text-[#00ff66] font-semibold text-sm sm:text-base">Available Now</span>
              </div>
              <p className="text-white/50 text-xs sm:text-sm">
                Currently accepting new projects.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
