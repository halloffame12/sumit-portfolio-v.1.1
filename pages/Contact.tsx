import React from 'react';
import { Mail, Linkedin, Github, Send, MessageSquare, Globe, Shield, Activity, Terminal, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [state, handleSubmit] = useForm("maqyoojq");
  if (state.succeeded) {
    return (
      <div className="min-h-screen pt-32 pb-24 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-[0.03] pointer-events-none -z-10"></div>
        <div className="absolute -right-20 top-1/4 w-96 h-96 bg-[#00ff66]/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
            
            {/* Left Side: Communication Details */}
            <div className="lg:col-span-5 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00ff66] font-tech text-[10px] tracking-widest uppercase mb-4">
                  <Globe size={12} /> Global Access
                </div>
                <h2 className="text-5xl sm:text-7xl font-tech font-bold tracking-tighter uppercase leading-[0.85]">
                  Open <br /> <span className="text-[#00ff66] neon-glow">Channels</span>
                </h2>
                <p className="text-[#E6E6E6] text-lg leading-relaxed max-w-md">
                  Initiate contact for high-fidelity projects, specialized AI consultations, or architectural audits.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                <motion.a
                  whileHover={{ x: 10 }}
                  href="mailto:sumitchauhan10062004@gmail.com"
                  className="flex items-center gap-6 p-6 bg-neutral-950 border border-white/5 rounded-3xl group hover:border-[#00ff66]/30 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-[#A1A1A1] group-hover:text-[#00ff66] group-hover:border-[#00ff66]/40 transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#A1A1A1] font-tech uppercase tracking-widest mb-1">Secure Email</p>
                    <p className="text-white font-tech font-bold text-sm truncate">sumitchauhan10062004@gmail.com</p>
                  </div>
                </motion.a>
                <motion.a
                  whileHover={{ x: 10 }}
                  href="tel:+917678331501"
                  className="flex items-center gap-6 p-6 bg-neutral-950 border border-white/5 rounded-3xl group hover:border-[#00ff66]/30 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-[#A1A1A1] group-hover:text-[#00ff66] group-hover:border-[#00ff66]/40 transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#A1A1A1] font-tech uppercase tracking-widest mb-1">Voice Channel</p>
                    <p className="text-white font-tech font-bold text-sm">+91 7678331501</p>
                  </div>
                </motion.a>
                <div className="grid grid-cols-2 gap-6">
                  <a href="https://www.linkedin.com/in/sumit-chauhan-a4ba98325/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-4 p-8 bg-neutral-950 border border-white/5 rounded-3xl hover:border-[#00ff66]/30 transition-all group">
                     <Linkedin className="text-[#A1A1A1] group-hover:text-[#00ff66] transition-colors" size={24} />
                     <span className="text-[10px] font-tech text-[#A1A1A1] uppercase tracking-widest">LinkedIn</span>
                  </a>
                  <a href="https://github.com/halloffame12" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-4 p-8 bg-neutral-950 border border-white/5 rounded-3xl hover:border-[#00ff66]/30 transition-all group">
                     <Github className="text-[#A1A1A1] group-hover:text-[#00ff66] transition-colors" size={24} />
                     <span className="text-[10px] font-tech text-[#A1A1A1] uppercase tracking-widest">GitHub</span>
                  </a>
                </div>
              </div>
              {/* System Status Display */}
              <div className="bg-black/70 border border-[#00ff66]/10 p-8 rounded-[2.5rem] relative overflow-hidden">
                 <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />
                 <div className="relative z-10 space-y-6">
                    <div className="flex justify-between items-center">
                       <h4 className="font-tech text-white uppercase text-xs font-bold flex items-center gap-2">
                          <Terminal size={14} className="text-[#00ff66]" /> System_Status
                       </h4>
                       <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#00ff66]" />
                          <span className="text-[9px] font-tech text-[#00ff66] uppercase">Online</span>
                       </div>
                    </div>
                   
                    <div className="space-y-4">
                     <div className="flex justify-between text-[10px] font-tech text-[#A1A1A1] uppercase tracking-widest">
                         <span>Response Time</span>
                         <span className="text-white">&lt; 12 Hours</span>
                      </div>
                     <div className="flex justify-between text-[10px] font-tech text-[#A1A1A1] uppercase tracking-widest">
                         <span>Current Load</span>
                         <span className="text-white">Medium</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-white/5">
                      <p className="text-[9px] text-[#A1A1A1] font-tech leading-relaxed uppercase tracking-widest">
                          EST_AVAILABILITY: NEW_DELHI_IN <br />
                          LOCAL_TIME: {new Date().toLocaleTimeString()}
                       </p>
                    </div>
                 </div>
              </div>
            </div>
            {/* Right Side: Success Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-7 flex items-center justify-center"
            >
              <div className="bg-neutral-950 p-8 sm:p-12 rounded-[3.5rem] border border-white/5 relative shadow-2xl text-center">
                <p className="text-white text-lg font-tech">Encrypted message sent successfully. Sumit will respond to your transmission shortly via sumitchauhan10062004@gmail.com.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-[0.03] pointer-events-none -z-10"></div>
      <div className="absolute -right-20 top-1/4 w-96 h-96 bg-[#00ff66]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
         
          {/* Left Side: Communication Details */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00ff66] font-tech text-[10px] tracking-widest uppercase mb-4">
                <Globe size={12} /> Global Access
              </div>
              <h2 className="text-5xl sm:text-7xl font-tech font-bold tracking-tighter uppercase leading-[0.85]">
                Open <br /> <span className="text-[#00ff66] neon-glow">Channels</span>
              </h2>
              <p className="text-[#E6E6E6] text-lg leading-relaxed max-w-md">
                Initiate contact for high-fidelity projects, specialized AI consultations, or architectural audits.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <motion.a
                whileHover={{ x: 10 }}
                href="mailto:sumitchauhan10062004@gmail.com"
                className="flex items-center gap-6 p-6 bg-neutral-950 border border-white/5 rounded-3xl group hover:border-[#00ff66]/30 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-[#A1A1A1] group-hover:text-[#00ff66] group-hover:border-[#00ff66]/40 transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-[#A1A1A1] font-tech uppercase tracking-widest mb-1">Secure Email</p>
                  <p className="text-white font-tech font-bold text-sm truncate">sumitchauhan10062004@gmail.com</p>
                </div>
              </motion.a>
              <motion.a
                whileHover={{ x: 10 }}
                href="tel:+917678331501"
                className="flex items-center gap-6 p-6 bg-neutral-950 border border-white/5 rounded-3xl group hover:border-[#00ff66]/30 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-[#A1A1A1] group-hover:text-[#00ff66] group-hover:border-[#00ff66]/40 transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-[#A1A1A1] font-tech uppercase tracking-widest mb-1">Voice Channel</p>
                  <p className="text-white font-tech font-bold text-sm">+91 7678331501</p>
                </div>
              </motion.a>
              <div className="grid grid-cols-2 gap-6">
                <a href="https://www.linkedin.com/in/sumit-chauhan-a4ba98325/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-4 p-8 bg-neutral-950 border border-white/5 rounded-3xl hover:border-[#00ff66]/30 transition-all group">
                   <Linkedin className="text-[#A1A1A1] group-hover:text-[#00ff66] transition-colors" size={24} />
                   <span className="text-[10px] font-tech text-[#A1A1A1] uppercase tracking-widest">LinkedIn</span>
                </a>
                <a href="https://github.com/halloffame12" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-4 p-8 bg-neutral-950 border border-white/5 rounded-3xl hover:border-[#00ff66]/30 transition-all group">
                   <Github className="text-[#A1A1A1] group-hover:text-[#00ff66] transition-colors" size={24} />
                   <span className="text-[10px] font-tech text-[#A1A1A1] uppercase tracking-widest">GitHub</span>
                </a>
              </div>
            </div>
            {/* System Status Display */}
            <div className="bg-black/70 border border-[#00ff66]/10 p-8 rounded-[2.5rem] relative overflow-hidden">
               <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />
               <div className="relative z-10 space-y-6">
                  <div className="flex justify-between items-center">
                     <h4 className="font-tech text-white uppercase text-xs font-bold flex items-center gap-2">
                        <Terminal size={14} className="text-[#00ff66]" /> System_Status
                     </h4>
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#00ff66]" />
                        <span className="text-[9px] font-tech text-[#00ff66] uppercase">Online</span>
                     </div>
                  </div>
                 
                  <div className="space-y-4">
                    <div className="flex justify-between text-[10px] font-tech text-[#A1A1A1] uppercase tracking-widest">
                       <span>Response Time</span>
                       <span className="text-white">&lt; 12 Hours</span>
                    </div>
                    <div className="flex justify-between text-[10px] font-tech text-[#A1A1A1] uppercase tracking-widest">
                       <span>Current Load</span>
                       <span className="text-white">Medium</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-[9px] text-[#A1A1A1] font-tech leading-relaxed uppercase tracking-widest">
                        EST_AVAILABILITY: NEW_DELHI_IN <br />
                        LOCAL_TIME: {new Date().toLocaleTimeString()}
                     </p>
                  </div>
               </div>
            </div>
          </div>
          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7"
          >
            <div className="bg-neutral-950 p-8 sm:p-12 rounded-[3.5rem] border border-white/5 relative shadow-2xl">
              <div className="mb-12">
                 <h3 className="text-3xl font-tech font-bold uppercase tracking-tighter mb-4">Initialize <span className="text-[#00ff66]">Request</span></h3>
                 <p className="text-[#A1A1A1] text-sm font-tech uppercase tracking-widest">Enter data parameters below</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-[10px] font-tech uppercase tracking-[0.3em] text-[#A1A1A1] ml-1">Identity.Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      required
                      placeholder="Your Name"
                      className="w-full bg-black border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#00ff66]/50 transition-all text-white placeholder:text-[#6B6B6B] text-sm font-tech"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-[10px] font-tech uppercase tracking-[0.3em] text-[#A1A1A1] ml-1">Identity.Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-black border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#00ff66]/50 transition-all text-white placeholder:text-[#6B6B6B] text-sm font-tech"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>
                <div className="space-y-3">
                  <label htmlFor="message" className="text-[10px] font-tech uppercase tracking-[0.3em] text-[#A1A1A1] ml-1">Transmission.Payload</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    required
                    placeholder="Describe your architectural requirements..."
                    className="w-full bg-black border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#00ff66]/50 transition-all text-white placeholder:text-[#6B6B6B] resize-none text-sm font-tech"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full group bg-[#00ff66] text-black font-tech font-bold py-6 rounded-2xl flex items-center justify-center gap-4 hover:scale-[1.01] transition-all transform active:scale-95 shadow-[0_15px_40px_-10px_rgba(0,255,102,0.4)] relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 text-sm uppercase tracking-[0.3em]">Transmit Signal</span>
                  <Send size={18} className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                 
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>
              </form>
                <div className="mt-12 pt-10 border-t border-white/5 flex items-center justify-center gap-6 text-[9px] font-tech text-[#A1A1A1] uppercase tracking-[0.2em]">
                 <div className="flex items-center gap-2"><Shield size={10} /> Encrypted</div>
                 <div className="flex items-center gap-2"><Activity size={10} /> Optimized</div>
                 <div className="flex items-center gap-2"><Globe size={10} /> Multi-Region</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Contact;