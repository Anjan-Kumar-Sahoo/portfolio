import React from 'react';
import SectionTitle from '../components/SectionTitle';
import TrainingCard from '../components/TrainingCard';
import { trainings } from '../data/portfolioData';

const InternshipTraining: React.FC = () => {
  return (
    <section id="trainings" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Training & Hands-on Experience" 
          subtitle="My professional journey and learning experiences"
        />
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainings.map((training, index) => (
            <TrainingCard 
              key={index} 
              training={training} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipTraining;