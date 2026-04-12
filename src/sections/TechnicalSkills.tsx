import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SkillCard from '../components/SkillCard';
import { technicalSkills } from '../data/portfolioData';

const TechnicalSkills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Duplicate for seamless infinite scrolling
  const duplicatedSkills = [...technicalSkills, ...technicalSkills, ...technicalSkills];

  return (
    <section id="technical-skills" className="py-24 bg-[#050816] relative overflow-hidden" ref={ref}>
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="text-center mb-16 px-4"
        >
          <span className="text-sm font-medium tracking-[0.4em] text-cyan-400 uppercase mb-4 block">Engineered Expertise</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Technical <span className="neon-text">Arsenal</span></h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            An ever-evolving stack of technologies used to architect production-grade software solutions.
          </p>
        </motion.div>
      </div>

      {/* Infinite Sliding Container - FULL WIDTH */}
      <div className="relative overflow-hidden py-10 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-[#050816] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l after:from-[#050816] after:to-transparent">
        <motion.div
          className="flex gap-8 items-center"
          animate={{
            x: [0, -(300 * technicalSkills.length + 32 * technicalSkills.length)]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear"
            }
          }}
          style={{
            width: "fit-content"
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div key={`${skill.name}-${index}`} className="flex-shrink-0 w-[300px]">
              <SkillCard 
                skill={skill} 
                index={index}
                variant="technical" 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSkills;