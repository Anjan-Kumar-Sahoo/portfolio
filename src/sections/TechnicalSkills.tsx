import React from 'react';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { motion } from 'framer-motion';
import { technicalSkills } from '../data/portfolioData';

const TechnicalSkills: React.FC = () => {
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
            I specialize in Java development with a strong foundation in Spring Boot and Angular.
            My technical repertoire spans across various languages, frameworks, and tools that enable
            me to build robust, scalable applications.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {technicalSkills.map((skill, index) => (
            <SkillCard 
              key={index} 
              skill={skill} 
              index={index}
              variant="technical" 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;