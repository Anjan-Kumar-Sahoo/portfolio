import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import EducationCard from '../components/EducationCard';
import { education } from '../data/portfolioData';

const Education: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="education" className="py-24 bg-[#050816] relative overflow-hidden" ref={ref}>
      {/* Decorative Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="text-center mb-16 md:mb-20"
        >
          <span className="text-sm font-medium tracking-[0.4em] text-purple-400 uppercase mb-4 block">Academic Foundation</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Educational <span className="neon-text">Journey</span></h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Documenting the academic milestones and technical certifications that provided the groundwork for my career in software engineering.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12 w-full max-w-6xl mx-auto"
        >
          {education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants} className="w-full">
              <EducationCard 
                education={edu} 
                index={index} 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;