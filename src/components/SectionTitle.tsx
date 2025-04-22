import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
    </motion.div>
  );
};

export default SectionTitle;