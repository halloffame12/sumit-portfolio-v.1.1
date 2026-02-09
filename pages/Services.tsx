import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '../constants';
import { ArrowRight, CheckCircle, MessageSquare, Zap, Target, Rocket, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const process = [
    { 
      step: '01', 
      title: 'Discovery', 
      desc: 'Understanding your vision, goals, and requirements in detail.',
      icon: <Target size={24} /> 
    },
    { 
      step: '02', 
      title: 'Strategy', 
      desc: 'Architecture design, tech stack selection, and roadmap planning.',
      icon: <Zap size={24} /> 
    },
    { 
      step: '03', 
      title: 'Development', 
      desc: 'Agile development with regular updates and iterative improvements.',
      icon: <Rocket size={24} /> 
    },
    { 
      step: '04', 
      title: 'Launch', 
      desc: 'Thorough testing, deployment, and ongoing support.',
      icon: <Shield size={24} /> 
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-32 relative overflow-hidden bg-black">
      
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-gradient-radial from-[#00ff66]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gradient-radial from-blue-500/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#00ff66]/10 rounded-full border border-[#00ff66]/20 mb-6"
          >
            <svg viewBox="0 0 48 48" fill="none" className="w-4 h-4">
              <circle cx="24" cy="24" r="22" fill="#00ff66" />
              <path d="M30 16H21C18.79 16 17 17.79 17 20C17 22.21 18.79 24 21 24H27C29.21 24 31 25.79 31 28C31 30.21 29.21 32 27 32H18" stroke="black" strokeWidth="3" strokeLinecap="round" fill="none" />
              <circle cx="33" cy="15" r="3" fill="black" />
            </svg>
            <span className="text-sm text-[#00ff66] font-medium">Services</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            What I Build
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            From concept to deployment, I offer end-to-end development services tailored to your specific needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-32">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative p-7 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.06] hover:border-[#00ff66]/30 transition-all duration-500"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00ff66]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center bg-[#00ff66]/10 rounded-xl mb-6 group-hover:bg-[#00ff66]/20 group-hover:scale-110 transition-all duration-300">
                  <div className="text-[#00ff66]">{service.icon}</div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00ff66] transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2.5">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-white/40 group-hover:text-white/50 transition-colors">
                      <CheckCircle size={14} className="text-[#00ff66] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <p className="text-[#00ff66] text-sm font-medium tracking-wider uppercase mb-4">Process</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              How I Work
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="relative group"
              >
                {/* Connector Line */}
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px">
                    <div className="w-full h-full bg-gradient-to-r from-[#00ff66]/30 to-transparent" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#00ff66]/30" />
                  </div>
                )}
                
                <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] group-hover:border-[#00ff66]/20 transition-all h-full">
                  {/* Step Number */}
                  <span className="absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center bg-[#00ff66] text-black text-xs font-bold rounded-lg">
                    {item.step}
                  </span>
                  
                  {/* Icon */}
                  <div className="text-white/30 group-hover:text-[#00ff66] transition-colors mb-4">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-10 md:p-14 rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00ff66]/15 via-[#00ff66]/5 to-transparent" />
          <div className="absolute inset-0 border border-[#00ff66]/20 rounded-3xl" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00ff66]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to start your project?
              </h3>
              <p className="text-white/50 max-w-lg">
                Let's discuss your ideas and build something extraordinary together. I'm always excited to work on challenging projects.
              </p>
            </div>
            
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[#00ff66] text-black font-bold rounded-xl hover:shadow-[0_0_48px_rgba(0,255,102,0.5)] transition-all flex-shrink-0"
            >
              <MessageSquare size={20} />
              <span>Start a Conversation</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
