import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  HiAcademicCap,
  HiCodeBracket,
  HiCloud,
  HiPaintBrush,
  HiArrowTopRightOnSquare,
} from 'react-icons/hi2';
import { trainings } from '../data/portfolioData';

const ICONS = [HiCloud, HiCodeBracket, HiAcademicCap, HiPaintBrush];
const COLORS = ['#00d4ff', '#a855f7', '#22d3ee', '#ec4899'];

const InternshipTraining: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="trainings" className="section-padding relative overflow-hidden dark:bg-gray-900 bg-gray-50 py-24" ref={ref}>
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span
          className="text-sm font-medium tracking-[0.3em] uppercase mb-4 block"
          style={{ color: 'var(--neon-cyan)' }}
        >
          My Journey
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          Training <span className="neon-text">Timeline</span>
        </h2>
        <p className="max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Milestones that shaped my path with hands-on experience
        </p>
      </motion.div>

      {/* Horizontal timeline */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Line */}
        <motion.div
          className="absolute top-[60px] left-0 right-0 h-[2px] hidden lg:block"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), rgba(168,85,247,0.3), transparent)',
          }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 lg:pt-4">
          {trainings.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            const color = COLORS[i % COLORS.length];
            const hasLink = !!item.certificate;

            const yearMatch = item.duration.match(/\d{4}/);
            const year = yearMatch ? yearMatch[0] : item.duration;

            const cardContent = (
              <>
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: color }}
                >
                  {year} • {item.organization}
                </span>
                <h3
                  className="font-heading text-lg font-semibold mt-2 mb-2 dark:text-white text-gray-800"
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-3 text-gray-600 dark:text-gray-400"
                >
                  {item.points.join(' ')}
                </p>

                {hasLink && (
                  <div
                    className="flex items-center justify-center gap-1.5 text-xs font-semibold mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: color }}
                  >
                    <HiArrowTopRightOnSquare className="w-4 h-4" />
                    View Certificate
                  </div>
                )}
              </>
            );

            return (
              <motion.div
                key={item.title}
                className="relative pt-12 lg:pt-20"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.2, duration: 0.6 }}
              >
                {/* Node */}
                <motion.div
                  className="absolute top-2 lg:top-[44px] left-1/2 -translate-x-1/2 z-10 hidden lg:block"
                  whileHover={{ scale: 1.3 }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 shadow-md"
                    style={{
                      border: `2px solid ${color}`,
                      boxShadow: `0 0 15px ${color}40`,
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: color }} />
                  </div>
                </motion.div>

                {/* Card */}
                {hasLink ? (
                  <motion.a
                    href={item.certificate as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group glass rounded-xl p-6 text-center flex flex-col h-full cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-offset-2 block bg-white/50 dark:bg-gray-800/50"
                    style={{ textDecoration: 'none' }}
                    whileHover={{
                      scale: 1.04,
                      boxShadow: `0 0 30px ${color}20, 0 8px 25px rgba(0,0,0,0.1)`,
                      borderColor: `${color}40`,
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  >
                    {cardContent}
                  </motion.a>
                ) : (
                  <motion.div
                    className="glass rounded-xl p-6 text-center flex flex-col h-full cursor-default bg-white/50 dark:bg-gray-800/50"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: `0 0 30px ${color}15`,
                      borderColor: `${color}40`,
                    }}
                  >
                    {cardContent}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default InternshipTraining;