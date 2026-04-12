import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ProjectType } from '../types';
import { HiSparkles, HiCpuChip, HiChartBar, HiCodeBracketSquare } from 'react-icons/hi2';

interface ProjectCardProps {
  project: ProjectType;
  index: number;
}

const PLACEHOLDER_IMAGES = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop"
];

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isEven = index % 2 === 0;

  const points = project.description
    ? project.description.split(/\.\s|\.\n/).filter(Boolean)
    : [];

  const mainPoint = points.length > 0 ? points[0] + '.' : 'Production-ready software component';
  const subPoints = points.slice(1);

  const icons = [<HiCpuChip className="w-5 h-5" />, <HiChartBar className="w-5 h-5" />, <HiCodeBracketSquare className="w-5 h-5" />];
  const colors = ['#00d4ff', '#a855f7', '#22c55e', '#ef4444'];

  const imageUrl = PLACEHOLDER_IMAGES[index % PLACEHOLDER_IMAGES.length];
  const domainText = project.live ? new URL(project.live).hostname : project.github ? new URL(project.github).pathname.substring(1) : 'project.local';

  return (
    <motion.div
      ref={ref}
      className={`relative mb-20 md:mb-32 w-full flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Info Section */}
      <motion.div
        className="w-full lg:w-5/12"
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.div
          className="flex items-center gap-2 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="relative flex h-3 w-3 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'var(--neon-blue)' }}></span>
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: 'var(--neon-blue)' }}></span>
          </div>
          <span
            className="text-sm font-semibold tracking-[0.2em] uppercase"
            style={{ color: 'var(--neon-blue)' }}
          >
            Featured Project
          </span>
        </motion.div>

        <h3 className="font-heading text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {project.title.split(' \u2013 ').map((part, i) => (
            <span key={i} className="block">
              {i === 0 ? <span className="neon-text">{part}</span> : part}
            </span>
          ))}
        </h3>

        <p className="text-sm font-medium mb-8 flex items-center gap-2 text-gray-800 dark:text-gray-200" style={{ color: 'var(--neon-purple)' }}>
          <HiSparkles className="w-4 h-4" />
          {mainPoint}
        </p>

        <div className="space-y-4 mb-8">
          {subPoints.slice(0, 3).map((item, i) => (
            <motion.div
              key={i}
              className="glass rounded-xl p-4 border-l-2"
              style={{ borderLeftColor: colors[i % colors.length] }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.15 }}
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5" style={{ color: colors[i % colors.length] }}>
                  {icons[i % icons.length]}
                </span>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {item.trim()}{item.endsWith('.') ? '' : '.'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-3 py-1 rounded-full glass"
              style={{ color: 'var(--neon-cyan)' }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-8">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full glass-strong text-sm font-semibold hover:border-blue-400 border border-transparent transition-colors"
              style={{ color: 'var(--text-primary)' }}
            >
              Source Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 text-white shadow-lg hover:shadow-cyan-500/25 transition-all"
              style={{ background: 'linear-gradient(to right, var(--neon-blue), var(--neon-purple))' }}
            >
              Live Demo
            </a>
          )}
        </div>
      </motion.div>

      {/* Mockup Section */}
      <motion.div
        className="relative w-full lg:w-7/12 group cursor-pointer mt-8 lg:mt-0"
        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.7 }}
        whileHover={{ scale: 1.015 }}
        onClick={() => project.live ? window.open(project.live, '_blank') : window.open(project.github, '_blank')}
      >
        <div 
          className="w-full glass-strong rounded-2xl overflow-hidden relative z-20 flex flex-col transition-all duration-300 dark:bg-[#0f172a] bg-gray-50"
          style={{
            border: '1px solid rgba(0, 212, 255, 0.2)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2), inset 0 0 20px rgba(168, 85, 247, 0.05)',
          }}
        >
          <div 
             className="flex items-center px-4 py-3 shrink-0 dark:bg-slate-900 bg-gray-200 border-b dark:border-white/5 border-black/5"
          >
            <div className="flex items-center gap-2 w-1/4">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_10px_rgba(255,95,86,0.3)]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_rgba(255,189,46,0.3)]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_10px_rgba(39,201,63,0.3)]" />
            </div>
            
            <div className="flex-1 flex justify-center">
              <div className="flex items-center justify-center gap-2 dark:bg-black/40 bg-white/60 px-4 py-1.5 rounded-md border dark:border-white/5 border-black/5 w-full max-w-sm">
                <svg className="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-300 tracking-wide truncate">
                  {domainText}
                </span>
              </div>
            </div>
            
            <div className="w-1/4 flex justify-end">
              <div className="p-1 rounded-md opacity-50 group-hover:opacity-100 transition-opacity dark:bg-white/5 bg-black/5">
                 <svg className="w-4 h-4 text-gray-600 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                 </svg>
              </div>
            </div>
          </div>
          
          <div className="relative w-full overflow-hidden aspect-[16/10] bg-black/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--neon-blue)]/10 to-[var(--neon-purple)]/10 z-0"/>
            
            {project.live ? (
              <div className="w-full h-full relative z-10">
                <iframe
                  src={project.live}
                  className="w-full h-full border-none pointer-events-none group-hover:pointer-events-auto transition-all duration-700"
                  title={`${project.title} Live Preview`}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'transparent',
                  }}
                />
                {/* Fallback/Overlay to keep click functionality if clicking outside the app area */}
                <div className="absolute inset-0 z-20 pointer-events-none group-hover:hidden" />
              </div>
            ) : (
              <img
                src={imageUrl}
                alt={`${project.title} Preview`}
                className="w-full h-full object-cover object-top relative z-10 opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            )}
            
            <div className="absolute inset-0 z-30 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px] pointer-events-none">
              <div className="px-6 py-3 rounded-full bg-black/60 border border-white/20 flex items-center gap-3 backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_30px_rgba(0,212,255,0.3)]">
                <span className="text-sm font-semibold text-white tracking-widest uppercase">
                  {project.live ? 'Interact with App' : 'View Source Code'}
                </span>
                <svg className="w-5 h-5 text-[#00d4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute -inset-4 -z-10 rounded-3xl opacity-30 blur-2xl group-hover:opacity-60 group-hover:blur-3xl transition-all duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0,212,255,0.4), rgba(168,85,247,0.4))',
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;