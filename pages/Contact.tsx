import React from 'react';
import { Mail, Linkedin, Github, Send, MessageSquare, Globe, Shield, Activity, Terminal, Phone, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const Contact: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [state, handleSubmit] = useForm("maqyoojq");
  
  if (state.succeeded) {
    return (
      <div className="min-h-screen pt-32 pb-24 relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none -z-10"></div>
        <div className="absolute -right-20 top-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#00ff66]/8 blur-[150px] md:blur-[180px] rounded-full pointer-events-none -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[400px] bg-emerald-500/5 blur-[100px] rounded-full -z-10"></div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
            
            {/* Left Side: Communication Details */}
            <motion.div variants={itemVariants} className="lg:col-span-5 space-y-12">
              <div className="space-y-7">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-neutral-900/95 via-neutral-800/80 to-neutral-900/60 border border-[#00ff66]/25 text-[#00ff66] font-tech text-[10px] sm:text-xs tracking-[0.2em] uppercase backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,102,0.1)]">
                  <Globe size={14} /> Global Access
                </div>
                <h2 className="text-5xl sm:text-7xl font-tech font-bold tracking-[-0.03em] uppercase leading-[0.9]">
                  Open <br /> <span className="text-[#00ff66] relative">
                    Channels
                    <svg className="absolute -bottom-2 left-0 w-full h-3 opacity-40" viewBox="0 0 180 12">
                      <path d="M0 6 Q45 0, 90 6 T180 6" stroke="#00ff66" strokeWidth="2" fill="none"/>
                    </svg>
                  </span>
                </h2>
                <p className="text-[#B0B0B0] text-lg leading-[1.85] max-w-md">
                  Initiate contact for high-fidelity projects, specialized AI consultations, or architectural audits.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                <motion.a
                  whileHover={{ x: 8 }}
                  href="mailto:sumitchauhan10062004@gmail.com"
                  className="flex items-center gap-6 p-6 bg-gradient-to-br from-neutral-950 to-neutral-900/50 border border-white/8 rounded-2xl group hover:border-[#00ff66]/30 transition-all duration-500 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
                >
                  <div className="w-14 h-14 rounded-xl bg-black border border-white/10 flex items-center justify-center text-[#808080] group-hover:text-[#00ff66] group-hover:border-[#00ff66]/40 transition-all duration-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[9px] text-[#707070] font-tech uppercase tracking-[0.2em] mb-2">Secure Email</p>
                    <p className="text-white font-tech font-bold text-sm truncate">sumitchauhan10062004@gmail.com</p>
                  </div>
                </motion.a>
                <motion.a
                  whileHover={{ x: 8 }}
                  href="tel:+917678331501"
                  className="flex items-center gap-6 p-6 bg-gradient-to-br from-neutral-950 to-neutral-900/50 border border-white/8 rounded-2xl group hover:border-[#00ff66]/30 transition-all duration-500 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
                >
                  <div className="w-14 h-14 rounded-xl bg-black border border-white/10 flex items-center justify-center text-[#808080] group-hover:text-[#00ff66] group-hover:border-[#00ff66]/40 transition-all duration-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[9px] text-[#707070] font-tech uppercase tracking-[0.2em] mb-2">Voice Channel</p>
                    <p className="text-white font-tech font-bold text-sm">+91 7678331501</p>
                  </div>
                </motion.a>
                <div className="grid grid-cols-2 gap-6">
                  <a href="https://www.linkedin.com/in/sumit-chauhan-a4ba98325/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-5 p-8 bg-gradient-to-br from-neutral-950 to-neutral-900/50 border border-white/8 rounded-2xl hover:border-[#00ff66]/30 transition-all duration-500 group shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                     <Linkedin className="text-[#808080] group-hover:text-[#00ff66] transition-colors duration-500" size={26} />
                     <span className="text-[9px] font-tech text-[#707070] uppercase tracking-[0.2em]">LinkedIn</span>
                  </a>
                  <a href="https://github.com/halloffame12" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-5 p-8 bg-gradient-to-br from-neutral-950 to-neutral-900/50 border border-white/8 rounded-2xl hover:border-[#00ff66]/30 transition-all duration-500 group shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                     <Github className="text-[#808080] group-hover:text-[#00ff66] transition-colors duration-500" size={26} />
                     <span className="text-[9px] font-tech text-[#707070] uppercase tracking-[0.2em]">GitHub</span>
                  </a>
                </div>
              </div>
              
              {/* System Status Display */}
              <div className="bg-gradient-to-br from-black via-neutral-950 to-black border border-[#00ff66]/15 p-8 rounded-[2rem] relative overflow-hidden shadow-[0_25px_50px_-15px_rgba(0,0,0,0.5),0_0_50px_-25px_rgba(0,255,102,0.15)]">
                 <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />
                 <div className="relative z-10 space-y-6">
                    <div className="flex justify-between items-center">
                       <h4 className="font-tech text-white uppercase text-xs font-bold flex items-center gap-3">
                          <Terminal size={16} className="text-[#00ff66]" /> System_Status
                       </h4>
                       <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#00ff66] animate-pulse shadow-[0_0_10px_#00ff66]" />
                          </div>
                          <span className="text-[9px] font-tech text-[#00ff66] uppercase tracking-[0.15em]">Online</span>
                       </div>
                    </div>
                   
                    <div className="space-y-4">
                     <div className="flex justify-between text-[9px] font-tech text-[#808080] uppercase tracking-[0.15em] p-3 bg-white/3 rounded-lg">
                         <span>Response Time</span>
                         <span className="text-white">&lt; 12 Hours</span>
                      </div>
                     <div className="flex justify-between text-[9px] font-tech text-[#808080] uppercase tracking-[0.15em] p-3 bg-white/3 rounded-lg">
                         <span>Current Load</span>
                         <span className="text-white">Medium</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-white/8">
                      <p className="text-[8px] text-[#606060] font-tech leading-relaxed uppercase tracking-[0.2em]">
                          EST_AVAILABILITY: NEW_DELHI_IN <br />
                          LOCAL_TIME: {new Date().toLocaleTimeString()}
                       </p>
                    </div>
                 </div>
              </div>
            </motion.div>
            
            {/* Right Side: Success Message */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 flex items-center justify-center"
            >
              <div className="bg-gradient-to-br from-neutral-950 via-neutral-900/50 to-neutral-950 p-12 sm:p-16 rounded-[2.5rem] border border-[#00ff66]/25 relative shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6),0_0_60px_-30px_rgba(0,255,102,0.2)] text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ff66]/5 via-transparent to-transparent rounded-[2.5rem]"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/30 flex items-center justify-center mx-auto mb-8">
                    <Sparkles size={36} className="text-[#00ff66]" />
                  </div>
                  <h3 className="text-3xl font-tech font-bold uppercase text-white mb-6">Transmission <span className="text-[#00ff66]">Successful</span></h3>
                  <p className="text-[#B0B0B0] text-lg font-tech leading-relaxed">Encrypted message sent successfully. Sumit will respond to your transmission shortly via sumitchauhan10062004@gmail.com.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }
  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none -z-10"></div>
      <div className="absolute -right-20 top-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#00ff66]/8 blur-[150px] md:blur-[180px] rounded-full pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[400px] bg-emerald-500/5 blur-[100px] rounded-full -z-10"></div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
         
          {/* Left Side: Communication Details */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-12">
            <div className="space-y-7">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-neutral-900/95 via-neutral-800/80 to-neutral-900/60 border border-[#00ff66]/25 text-[#00ff66] font-tech text-[10px] sm:text-xs tracking-[0.2em] uppercase backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,102,0.1)]">
                <Globe size={14} /> Global Access
              </div>
              <h2 className="text-5xl sm:text-7xl font-tech font-bold tracking-[-0.03em] uppercase leading-[0.9]">
                Open <br /> <span className="text-[#00ff66] relative">
                  Channels
                  <svg className="absolute -bottom-2 left-0 w-full h-3 opacity-40" viewBox="0 0 180 12">
                    <path d="M0 6 Q45 0, 90 6 T180 6" stroke="#00ff66" strokeWidth="2" fill="none"/>
                  </svg>
                </span>
              </h2>
              <p className="text-[#B0B0B0] text-lg leading-[1.85] max-w-md">
                Initiate contact for high-fidelity projects, specialized AI consultations, or architectural audits.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <motion.a
                whileHover={{ x: 8 }}
                href="mailto:sumitchauhan10062004@gmail.com"
                className="flex items-center gap-6 p-6 bg-gradient-to-br from-neutral-950 to-neutral-900/50 border border-white/8 rounded-2xl group hover:border-[#00ff66]/30 transition-all duration-500 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
              >
                <div className="w-14 h-14 rounded-xl bg-black border border-white/10 flex items-center justify-center text-[#808080] group-hover:text-[#00ff66] group-hover:border-[#00ff66]/40 transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[9px] text-[#707070] font-tech uppercase tracking-[0.2em] mb-2">Secure Email</p>
                  <p className="text-white font-tech font-bold text-sm truncate">sumitchauhan10062004@gmail.com</p>
                </div>
              </motion.a>
              <motion.a
                whileHover={{ x: 8 }}
                href="tel:+917678331501"
                className="flex items-center gap-6 p-6 bg-gradient-to-br from-neutral-950 to-neutral-900/50 border border-white/8 rounded-2xl group hover:border-[#00ff66]/30 transition-all duration-500 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
              >
                <div className="w-14 h-14 rounded-xl bg-black border border-white/10 flex items-center justify-center text-[#808080] group-hover:text-[#00ff66] group-hover:border-[#00ff66]/40 transition-all duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[9px] text-[#707070] font-tech uppercase tracking-[0.2em] mb-2">Voice Channel</p>
                  <p className="text-white font-tech font-bold text-sm">+91 7678331501</p>
                </div>
              </motion.a>
              <div className="grid grid-cols-2 gap-6">
                <a href="https://www.linkedin.com/in/sumit-chauhan-a4ba98325/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-5 p-8 bg-gradient-to-br from-neutral-950 to-neutral-900/50 border border-white/8 rounded-2xl hover:border-[#00ff66]/30 transition-all duration-500 group shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                   <Linkedin className="text-[#808080] group-hover:text-[#00ff66] transition-colors duration-500" size={26} />
                   <span className="text-[9px] font-tech text-[#707070] uppercase tracking-[0.2em]">LinkedIn</span>
                </a>
                <a href="https://github.com/halloffame12" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-5 p-8 bg-gradient-to-br from-neutral-950 to-neutral-900/50 border border-white/8 rounded-2xl hover:border-[#00ff66]/30 transition-all duration-500 group shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                   <Github className="text-[#808080] group-hover:text-[#00ff66] transition-colors duration-500" size={26} />
                   <span className="text-[9px] font-tech text-[#707070] uppercase tracking-[0.2em]">GitHub</span>
                </a>
              </div>
            </div>
            
            {/* System Status Display */}
            <div className="bg-gradient-to-br from-black via-neutral-950 to-black border border-[#00ff66]/15 p-8 rounded-[2rem] relative overflow-hidden shadow-[0_25px_50px_-15px_rgba(0,0,0,0.5),0_0_50px_-25px_rgba(0,255,102,0.15)]">
               <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />
               <div className="relative z-10 space-y-6">
                  <div className="flex justify-between items-center">
                     <h4 className="font-tech text-white uppercase text-xs font-bold flex items-center gap-3">
                        <Terminal size={16} className="text-[#00ff66]" /> System_Status
                     </h4>
                     <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#00ff66] animate-pulse shadow-[0_0_10px_#00ff66]" />
                        </div>
                        <span className="text-[9px] font-tech text-[#00ff66] uppercase tracking-[0.15em]">Online</span>
                     </div>
                  </div>
                 
                  <div className="space-y-4">
                    <div className="flex justify-between text-[9px] font-tech text-[#808080] uppercase tracking-[0.15em] p-3 bg-white/3 rounded-lg">
                       <span>Response Time</span>
                       <span className="text-white">&lt; 12 Hours</span>
                    </div>
                    <div className="flex justify-between text-[9px] font-tech text-[#808080] uppercase tracking-[0.15em] p-3 bg-white/3 rounded-lg">
                       <span>Current Load</span>
                       <span className="text-white">Medium</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/8">
                    <p className="text-[8px] text-[#606060] font-tech leading-relaxed uppercase tracking-[0.2em]">
                        EST_AVAILABILITY: NEW_DELHI_IN <br />
                        LOCAL_TIME: {new Date().toLocaleTimeString()}
                     </p>
                  </div>
               </div>
            </div>
          </motion.div>
          
          {/* Right Side: Form */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7"
          >
            <div className="bg-gradient-to-br from-neutral-950 via-neutral-900/50 to-neutral-950 p-8 sm:p-12 rounded-[2.5rem] border border-white/10 relative shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] hover:border-[#00ff66]/15 transition-all duration-700 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff66]/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="mb-14 relative z-10">
                 <h3 className="text-3xl font-tech font-bold uppercase tracking-[-0.02em] mb-5">Initialize <span className="text-[#00ff66]">Request</span></h3>
                 <p className="text-[#707070] text-xs font-tech uppercase tracking-[0.2em]">Enter data parameters below</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label htmlFor="name" className="text-[9px] font-tech uppercase tracking-[0.25em] text-[#707070] ml-1">Identity.Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      required
                      placeholder="Your Name"
                      className="w-full bg-black border border-white/10 rounded-xl px-6 py-5 focus:outline-none focus:border-[#00ff66]/50 focus:shadow-[0_0_30px_-10px_rgba(0,255,102,0.3)] transition-all duration-500 text-white placeholder:text-[#505050] text-sm font-tech"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  <div className="space-y-4">
                    <label htmlFor="email" className="text-[9px] font-tech uppercase tracking-[0.25em] text-[#707070] ml-1">Identity.Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-black border border-white/10 rounded-xl px-6 py-5 focus:outline-none focus:border-[#00ff66]/50 focus:shadow-[0_0_30px_-10px_rgba(0,255,102,0.3)] transition-all duration-500 text-white placeholder:text-[#505050] text-sm font-tech"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>
                <div className="space-y-4">
                  <label htmlFor="message" className="text-[9px] font-tech uppercase tracking-[0.25em] text-[#707070] ml-1">Transmission.Payload</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    required
                    placeholder="Describe your architectural requirements..."
                    className="w-full bg-black border border-white/10 rounded-xl px-6 py-5 focus:outline-none focus:border-[#00ff66]/50 focus:shadow-[0_0_30px_-10px_rgba(0,255,102,0.3)] transition-all duration-500 text-white placeholder:text-[#505050] resize-none text-sm font-tech"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full group/btn bg-[#00ff66] text-black font-tech font-bold py-6 rounded-xl flex items-center justify-center gap-4 hover:scale-[1.01] transition-all transform active:scale-[0.98] shadow-[0_20px_50px_-15px_rgba(0,255,102,0.4)] relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 text-sm uppercase tracking-[0.25em]">Transmit Signal</span>
                  <Send size={18} className="relative z-10 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform duration-300" />
                 
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                </button>
              </form>
              <div className="mt-12 pt-10 border-t border-white/8 flex items-center justify-center gap-8 text-[9px] font-tech text-[#606060] uppercase tracking-[0.2em] relative z-10">
                 <div className="flex items-center gap-2 hover:text-[#808080] transition-colors"><Shield size={12} /> Encrypted</div>
                 <div className="flex items-center gap-2 hover:text-[#808080] transition-colors"><Activity size={12} /> Optimized</div>
                 <div className="flex items-center gap-2 hover:text-[#808080] transition-colors"><Globe size={12} /> Multi-Region</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;