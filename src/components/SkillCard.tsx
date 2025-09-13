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
  // variant = 'technical'
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg shadow-lg"
      style={{
        aspectRatio: '16/9'
      }}
    >
      {/* Background Image with Scale Effect */}
      <div 
        className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.4]"
        style={{
          backgroundImage: `url(${skill.backgroundUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
      
      {/* Glowing border effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-slow" style={{ padding: '2px' }}>
          <div className="h-full w-full bg-black" />
        </div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex items-center justify-center">
        <motion.h3
          className="text-2xl font-bold text-white text-center transform group-hover:scale-110 transition-transform duration-500"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          {skill.name}
        </motion.h3>
      </div>
    </motion.div>
  );
};

export default SkillCard;