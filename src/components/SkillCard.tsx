import React from 'react';
import { motion } from 'framer-motion';
import { SkillType } from '../types';

interface SkillCardProps {
  skill: SkillType;
  index: number;
  variant?: 'technical' | 'soft';
}

const SkillCard: React.FC<SkillCardProps> = ({ 
  skill, 
  index,
  variant = 'technical'
}) => {
  const isTechnical = variant === 'technical';
  
  const colors = {
    technical: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      progress: 'bg-blue-600 dark:bg-blue-400',
      text: 'text-blue-800 dark:text-blue-300'
    },
    soft: {
      bg: 'bg-purple-50 dark:bg-purple-900/20',
      progress: 'bg-purple-600 dark:bg-purple-400',
      text: 'text-purple-800 dark:text-purple-300'
    }
  };
  
  const color = colors[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`${color.bg} rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow`}
    >
      <div className="text-center mb-3">
        <h3 className={`font-bold text-lg ${color.text}`}>{skill.name}</h3>
      </div>
      
      {/* Circular Progress */}
      <div className="relative h-24 w-24 mx-auto mb-4">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            className="text-gray-200 dark:text-gray-700"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
          />
          {/* Progress circle */}
          <motion.circle
            className={color.progress}
            strokeWidth="8"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
            initial={{ strokeDashoffset: 251.2 }}
            animate={{ 
              strokeDashoffset: 251.2 - (251.2 * skill.level / 100) 
            }}
            transition={{ duration: 1.5, delay: 0.2 }}
            style={{
              strokeDasharray: 251.2,
              transform: 'rotate(-90deg)',
              transformOrigin: 'center',
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`font-bold text-xl ${color.text}`}>{skill.level}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;