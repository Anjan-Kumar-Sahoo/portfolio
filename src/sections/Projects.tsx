import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolioData';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-24 bg-[#050816] relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 -ml-40 -mt-40 w-96 h-96 rounded-full bg-cyan-400/5 blur-3xl mix-blend-screen flex-none pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 -mr-40 -mb-40 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl mix-blend-screen flex-none pointer-events-none"></div>
      
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <motion.div
          className="text-center mb-16 md:mb-24"
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
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-white font-heading">
            Featured <span className="neon-text">Projects</span>
          </h2>
          <p className="max-w-2xl text-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Real-world applications showcasing AI, full-stack architectures, and robust engineering solutions.
          </p>
        </motion.div>
        
        <div className="w-full flex flex-col gap-24 md:gap-36 lg:gap-40">
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <ProjectCard 
                project={project} 
                index={index} 
              />
              {index < projects.length - 1 && (
                <div className="w-full flex items-center justify-center py-2">
                  <div className="w-24 sm:w-48 md:w-64 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;