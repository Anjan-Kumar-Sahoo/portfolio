import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { userData } from '../data/portfolioData';

const Contact: React.FC = () => {
  const contactLinks = [
    { 
      icon: <Mail size={24} />, 
      label: 'Email', 
      value: userData.email,
      url: `mailto:${userData.email}`,
      color: 'text-red-500 dark:text-red-400 bg-red-100 dark:bg-red-900/20'
    },
    { 
      icon: <Github size={24} />, 
      label: 'GitHub', 
      value: 'github.com/Anjan-Kumar-Sahoo',
      url: userData.github,
      color: 'text-gray-700 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/40'
    },
    { 
      icon: <Linkedin size={24} />, 
      label: 'LinkedIn', 
      value: 'linkedin.com/in/aks1097',
      url: userData.linkedin,
      color: 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#050816] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-[0.4em] text-cyan-400 uppercase mb-4 block">Let's Connect</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Get In <span className="neon-text">Touch</span></h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            I'm always open to new opportunities, collaborations, or just a friendly chat about technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-8">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group glass p-4 rounded-2xl border border-white/5 hover:border-white/20 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className={`p-4 rounded-xl mr-5 flex-shrink-0 bg-white/5 group-hover:bg-white/10 transition-colors ${link.color.split(' ').filter(c => c.includes('text')).join(' ')}`}>
                    {link.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                      {link.label}
                    </h4>
                    <p className="text-white text-lg font-medium group-hover:text-cyan-400 transition-colors">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass p-8 rounded-3xl border border-white/10">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;