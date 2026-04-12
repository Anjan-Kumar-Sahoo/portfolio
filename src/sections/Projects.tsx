import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolioData';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-24 dark:bg-gray-900 bg-gray-50 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 -ml-40 -mt-40 w-96 h-96 rounded-full bg-cyan-400/5 blur-3xl mix-blend-multiply flex-none pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 -mr-40 -mb-40 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl mix-blend-multiply flex-none pointer-events-none"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full max-w-7xl">
        <motion.div
          className="text-center mb-20 md:mb-32"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-sm font-medium tracking-[0.3em] uppercase mb-4 block"
            style={{ color: 'var(--neon-purple)' }}
          >
            Selected Work
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-800 dark:text-white font-heading">
            Featured <span className="neon-text">Projects</span>
          </h2>
          <p className="max-w-xl text-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Real-world applications showcasing AI, full-stack architectures, and robust engineering solutions.
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto space-y-32">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;