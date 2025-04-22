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
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Contact Me" 
          subtitle="Let's connect and discuss how we can work together"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Get In Touch
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I'm always open to new opportunities, collaborations, or just a friendly chat about technology.
              Feel free to reach out through any of the channels below or send me a message using the form.
            </p>
            
            <div className="space-y-6">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className={`p-3 rounded-full mr-4 ${link.color}`}>
                    {link.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {link.label}
                    </h4>
                    <p className="text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;