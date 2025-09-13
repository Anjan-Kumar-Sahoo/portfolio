import React from 'react';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { motion } from 'framer-motion';
import { technicalSkills } from '../data/portfolioData';

const TechnicalSkills: React.FC = () => {
  // Duplicate the skills array for seamless infinite scrolling
  const duplicatedSkills = [...technicalSkills, ...technicalSkills];

  return (
    <section id="technical-skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="Programming languages, frameworks, and technologies I work with"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I specialize in Java development with strong skills in Spring Boot and React, and I am experienced in building robust, scalable applications using a variety of tools and technologies.          </p>
        </motion.div>
        
        {/* Infinite Sliding Container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -(320 * technicalSkills.length)]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: technicalSkills.length * 1, // 0.5 seconds per skill (much faster)
                ease: "linear"
              }
            }}
            style={{
              width: `${duplicatedSkills.length * 320}px` // 320px per card (300px + 20px gap)
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div key={`${skill.name}-${index}`} className="flex-shrink-0 w-[300px]">
                <SkillCard 
                  skill={skill} 
                  index={index % technicalSkills.length}
                  variant="technical" 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;