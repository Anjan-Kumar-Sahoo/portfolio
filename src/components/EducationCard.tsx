import React from 'react';
import { motion } from 'framer-motion';
import { EducationType } from '../types';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationCardProps {
  education: EducationType;
  index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ education, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative h-80 overflow-hidden rounded-xl shadow-lg group"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${education.imageUrl})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        <div className="flex items-center mb-2">
          <GraduationCap className="mr-2" size={20} />
          <h3 className="text-xl font-bold">{education.institution}</h3>
        </div>
        
        <div className="mb-2">
          <p className="text-white/90">{education.degree}</p>
        </div>
        
        <div className="flex items-center mb-2 text-white/80">
          <Calendar className="mr-2" size={16} />
          <span>{education.duration}</span>
        </div>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 inline-block">
          <p className="text-white font-medium">{education.score}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationCard;