import React from 'react';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { motion } from 'framer-motion';
import { softSkills } from '../data/portfolioData';

const SoftSkills: React.FC = () => {
  return (
    <section id="soft-skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Soft Skills" 
          subtitle="Professional attributes that enable effective collaboration"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Beyond technical proficiency, I value the interpersonal skills that facilitate effective teamwork
            and project success. These soft skills complement my technical abilities and contribute to a
            positive work environment.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {softSkills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill}
              index={index}
              variant="soft"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;