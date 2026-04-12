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
  const isTech = variant === 'technical';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-xl shadow-lg border border-transparent ${
        isTech ? 'bg-white dark:bg-gray-800 hover:border-cyan-400 dark:hover:border-cyan-500' : ''
      }`}
      style={{
        aspectRatio: '16/9'
      }}
    >
      {/* Background/Logo */}
      <div 
        className={`absolute transition-all duration-500 ${
          isTech 
            ? 'inset-x-6 top-6 bottom-12 group-hover:scale-110 opacity-90 group-hover:opacity-100' 
            : 'inset-0 group-hover:scale-[1.4]'
        }`}
        style={{
          backgroundImage: `url(${skill.backgroundUrl})`,
          backgroundSize: isTech ? 'contain' : 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Overlay - Only for soft skills */}
      {!isTech && (
        <>
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
          
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-slow" style={{ padding: '2px' }}>
              <div className="h-full w-full bg-black" />
            </div>
          </div>
        </>
      )}
      
      {/* Content */}
      <div className={`absolute inset-x-0 bottom-0 flex flex-col justify-end p-3 ${!isTech ? 'inset-0 items-center justify-center p-6 bg-transparent' : 'bg-transparent z-10'}`}>
        <motion.h3
          className={`font-bold text-center transition-all duration-300 ${
            isTech 
              ? 'text-gray-700 dark:text-gray-300 text-sm md:text-base group-hover:text-cyan-500 group-hover:-translate-y-1' 
              : 'text-white text-2xl group-hover:scale-110'
          }`}
          initial={!isTech ? { y: 20, opacity: 0 } : {}}
          whileInView={!isTech ? { y: 0, opacity: 1 } : {}}
          viewport={{ once: true }}
        >
          {skill.name}
        </motion.h3>
      </div>
    </motion.div>
  );
};

export default SkillCard;