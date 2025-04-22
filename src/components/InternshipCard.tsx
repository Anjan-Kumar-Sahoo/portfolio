import React from 'react';
import { motion } from 'framer-motion';
import { InternshipType } from '../types';
import { Briefcase, CalendarDays } from 'lucide-react';

interface InternshipCardProps {
  internship: InternshipType;
  index: number;
}

const InternshipCard: React.FC<InternshipCardProps> = ({ internship, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
    >
      <div className="flex items-start mb-3">
        <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
          <Briefcase className="text-blue-600 dark:text-blue-400" size={20} />
        </div>
        <div>
          <h3 className="font-bold text-xl text-gray-800 dark:text-white">
            {internship.title}
          </h3>
          {internship.company && (
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              {internship.company}
            </p>
          )}
        </div>
      </div>
      
      <div className="flex items-center mb-4 text-gray-600 dark:text-gray-400">
        <CalendarDays size={16} className="mr-2" />
        <span className="text-sm">{internship.duration}</span>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300">
        {internship.description}
      </p>
    </motion.div>
  );
};

export default InternshipCard;