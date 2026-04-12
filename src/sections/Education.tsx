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
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="text-center mb-20"
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
          className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto"
        >
          {education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants} className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)]">
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