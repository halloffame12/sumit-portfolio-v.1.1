
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm mb-6 font-tech uppercase tracking-widest">
          Designed & Built by <span className="text-[#00ff66] font-bold">Sumit Chauhan</span>
        </p>
        <div className="flex justify-center items-center space-x-8 mb-8">
          <a href="https://github.com/halloffame12" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00ff66] transition-all hover:scale-125">
            <Github size={22} />
          </a>
          <a href="https://www.linkedin.com/in/sumit-chauhan-a4ba98325/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00ff66] transition-all hover:scale-125">
            <Linkedin size={22} />
          </a>
          <a href="tel:+917678331501" className="text-gray-400 hover:text-[#00ff66] transition-all hover:scale-125">
            <Phone size={22} />
          </a>
          <a href="mailto:sumitchauhan10062004@gmail.com" className="text-gray-400 hover:text-[#00ff66] transition-all hover:scale-125">
            <Mail size={22} />
          </a>
        </div>
        <div className="pt-8 border-t border-white/5">
          <p className="text-[10px] text-gray-700 uppercase tracking-[0.4em] font-tech">
            &copy; {new Date().getFullYear()} SUMIT CHAUHAN • FREELANCE APP DEV • v2.5.0_STABLE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
