import React from 'react';
import { motion } from 'framer-motion';
import { ProjectType } from '../types';

interface ProjectCardProps {
  project: ProjectType;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  // Split description into bullet points by ". " or ".\n"
  const descriptionPoints = project.description
    ? project.description.split(/\.\s|\.\n/).filter(Boolean)
    : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col justify-between border-2 border-transparent hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300"
      whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            {project.title}
          </h3>
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 bg-gray-900 text-white text-xs rounded hover:bg-gray-700 transition"
              >
                GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition"
              >
                Live
              </a>
            )}
          </div>
        </div>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 mb-4">
          {descriptionPoints.map((point, idx) => (
            <li key={idx}>{point.trim()}{point.endsWith('.') ? '' : '.'}</li>
          ))}
        </ul>
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
            Technologies:
          </h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;