import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactFormData } from '../types';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const initialFormState: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  phone: '',
  message: '',
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await emailjs.sendForm(
        'service_ntz9qj8',
        'template_qrfpnrq',
        formRef.current!,
        '3PfOPcDOI86OU-lBM'
      );

      setSubmitted(true);
      setLoading(false);
      setFormData(initialFormState);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Failed to send message. Please try again.');
      setLoading(false);
    }
  };
  
  const resetForm = () => {
    setFormData(initialFormState);
    setSubmitted(false);
    setError('');
  };

  return (
    <div className="bg-transparent">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-12"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20 
              }}
              className="flex justify-center mb-6"
            >
              <div className="p-4 rounded-full bg-green-500/10 border border-green-500/20">
                <CheckCircle size={64} className="text-green-500" />
              </div>
            </motion.div>
            <h3 className="text-3xl font-black text-white mb-4">
              Message Sent!
            </h3>
            <p className="text-gray-400 mb-8 max-w-sm mx-auto">
              Thank you for reaching out. I've received your message and will respond shortly.
            </p>
            <button
              onClick={resetForm}
              className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all active:scale-95"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label 
                  htmlFor="name" 
                  className="block text-xs font-bold text-gray-400 uppercase tracking-widest ml-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div className="space-y-2">
                <label 
                  htmlFor="email" 
                  className="block text-xs font-bold text-gray-400 uppercase tracking-widest ml-1"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label 
                  htmlFor="subject" 
                  className="block text-xs font-bold text-gray-400 uppercase tracking-widest ml-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
                  placeholder="How can I help?"
                />
              </div>
              
              <div className="space-y-2">
                <label 
                  htmlFor="phone" 
                  className="block text-xs font-bold text-gray-400 uppercase tracking-widest ml-1"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
                  placeholder="Your number"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label 
                htmlFor="message" 
                className="block text-xs font-bold text-gray-400 uppercase tracking-widest ml-1"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all resize-none"
                placeholder="What's on your mind?"
              />
            </div>
            
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-2xl flex items-center"
              >
                <AlertCircle size={18} className="mr-2 flex-shrink-0" />
                <span className="text-sm">{error}</span>
              </motion.div>
            )}
            
            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-2xl font-bold flex items-center justify-center transition-all disabled:opacity-70 disabled:scale-95 shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
            >
              {loading ? (
                <>
                  <Loader2 size={20} className="animate-spin mr-3" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} className="mr-3" />
                  Send Message
                </>
              )}
            </button>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;