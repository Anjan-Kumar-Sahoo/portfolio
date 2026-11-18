import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SkillCard from '../components/SkillCard';
import { softSkills } from '../data/portfolioData';

const SoftSkills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="soft-skills" className="py-24 bg-[#050816] relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="text-center mb-16 md:mb-20"
        >
          <span className="text-sm font-medium tracking-[0.4em] text-blue-400 uppercase mb-4 block">Core Competencies</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Soft <span className="neon-text">Attributes</span></h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Beyond the code, I focus on the interpersonal skills that bridge the gap between technical complexity and business success.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 xl:gap-8 w-full"
        >
          {softSkills.map((skill, index) => (
            <motion.div key={skill.name} variants={itemVariants}>
              <SkillCard
                skill={skill}
                index={index}
                variant="soft"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SoftSkills;