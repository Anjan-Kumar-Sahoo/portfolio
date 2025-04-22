import React from 'react';
import SectionTitle from '../components/SectionTitle';
import InternshipCard from '../components/InternshipCard';
import { internships } from '../data/portfolioData';

const InternshipTraining: React.FC = () => {
  return (
    <section id="internships" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Internship & Training" 
          subtitle="My professional journey and learning experiences"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((internship, index) => (
            <InternshipCard 
              key={index} 
              internship={internship} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipTraining;