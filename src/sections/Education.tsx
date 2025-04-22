import React from 'react';
import SectionTitle from '../components/SectionTitle';
import EducationCard from '../components/EducationCard';
import { education } from '../data/portfolioData';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Education" 
          subtitle="My academic background and qualifications"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <EducationCard 
              key={index} 
              education={edu} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;