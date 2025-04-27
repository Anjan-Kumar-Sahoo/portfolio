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
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-8"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20 
              }}
              className="flex justify-center mb-4"
            >
              <CheckCircle size={64} className="text-green-500" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Message Sent Successfully!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Thank you for reaching out. I'll get back to you soon.
            </p>
            <button
              onClick={resetForm}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
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
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can I help you?"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="phone" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your contact number"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
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
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Your message..."
              />
            </div>
            
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg flex items-center"
              >
                <AlertCircle size={18} className="mr-2" />
                {error}
              </motion.div>
            )}
            
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium flex items-center justify-center transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 size={18} className="animate-spin mr-2" />
              ) : (
                <Send size={18} className="mr-2" />
              )}
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;