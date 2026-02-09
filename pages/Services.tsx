import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '../constants';
import { ArrowRight, CheckCircle, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const process = [
    { step: '01', title: 'Discovery', desc: 'Understanding your vision and requirements' },
    { step: '02', title: 'Planning', desc: 'Architecture design and tech stack selection' },
    { step: '03', title: 'Development', desc: 'Agile development with regular updates' },
    { step: '04', title: 'Delivery', desc: 'Testing, deployment, and ongoing support' }
  ];

  return (
    <div className="min-h-screen pt-28 pb-24 relative overflow-hidden">
      
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-gradient-radial from-[#00ff66]/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#00ff66] text-sm font-medium tracking-wider uppercase mb-4">Services</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            What I<br />
            <span className="text-white/40">can build for you.</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl">
            From concept to deployment, I offer end-to-end development services tailored to your specific needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="group p-6 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-[#00ff66]/20 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-[#00ff66]/10 rounded-xl mb-6 group-hover:bg-[#00ff66]/20 transition-colors">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00ff66] transition-colors">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-white/40">
                    <CheckCircle size={14} className="text-[#00ff66]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <p className="text-[#00ff66] text-sm font-medium tracking-wider uppercase mb-4">How I Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              My Process
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="relative"
              >
                {/* Connector Line */}
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#00ff66]/30 to-transparent -translate-x-4"></div>
                )}
                
                <div className="p-6 bg-white/[0.02] rounded-2xl border border-white/5 h-full">
                  <span className="text-4xl font-bold text-[#00ff66]/20">{item.step}</span>
                  <h3 className="text-lg font-semibold text-white mt-4 mb-2">{item.title}</h3>
                  <p className="text-sm text-white/40">{item.desc}</p>
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
          className="relative p-8 md:p-12 bg-gradient-to-br from-[#00ff66]/10 via-[#00ff66]/5 to-transparent rounded-3xl border border-[#00ff66]/20 overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00ff66]/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Ready to start your project?
              </h3>
              <p className="text-white/50 max-w-lg">
                Let's discuss your ideas and build something amazing together. I'm always excited to work on challenging projects.
              </p>
            </div>
            
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#00ff66] text-black font-semibold rounded-xl hover:bg-[#00ff66]/90 transition-colors shadow-[0_0_40px_rgba(0,255,102,0.3)] flex-shrink-0"
            >
              <MessageSquare size={18} />
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
