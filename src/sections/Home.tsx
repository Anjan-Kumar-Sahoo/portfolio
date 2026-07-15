import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import { userData } from '../data/portfolioData';

const Home: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-[110vh] flex items-center justify-center overflow-hidden py-20"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050816] transition-colors duration-500" />
        <div className="absolute inset-0 opacity-30">
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
            className="absolute top-20 left-[10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" 
          />
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
            className="absolute bottom-20 right-[15%] w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-[120px]" 
          />
        </div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div 
          style={{ y, opacity: 1, scale: 1 }}
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          {/* Portrait with Glow */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-10"
          >
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 blur-2xl opacity-20 animate-pulse" />
            <div className="w-[160px] h-[160px] md:w-[250px] md:h-[250px] rounded-full border-2 border-white/20 p-2 glass relative z-10 overflow-hidden group flex-shrink-0">
              <motion.img 
                src={userData.image} 
                alt={userData.name} 
                className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </motion.div>
          
          {/* Main Content */}
          <div className="space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-xl font-medium tracking-[0.4em] text-cyan-400 uppercase"
            >
              Hi, I'm {userData.name}
            </motion.h2>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-8xl font-black tracking-tighter text-white"
            >
              Software <span className="neon-text">Engineer</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4"
            >
              Building robust, scalable backends and intelligent full-stack systems.
            </motion.p>
          </div>
          
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12 mb-10"
          >
            <a
              href={userData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2 group-hover:text-white transition-colors">
                <FileText size={20} />
                View Resume
              </span>
            </a>

            <div className="flex items-center gap-4">
               {[
                 { icon: <Github size={22} />, link: userData.github },
                 { icon: <Linkedin size={22} />, link: userData.linkedin },
                 { icon: <Mail size={22} />, link: `mailto:${userData.email}` }
               ].map((social, i) => (
                 <motion.a
                   key={i}
                   href={social.link}
                   target="_blank"
                   rel="noopener noreferrer"
                   whileHover={{ y: -5, scale: 1.1 }}
                   className="p-3 rounded-full glass border border-white/5 text-gray-400 hover:text-white transition-colors hover:border-white/20"
                 >
                   {social.icon}
                 </motion.a>
               ))}
            </div>
          </motion.div>
          
          {/* Scroll Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
            className="mt-8 md:mt-12"
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="group cursor-pointer flex flex-col items-center gap-3 text-gray-500 hover:text-cyan-400 transition-colors"
            >
              <span className="text-xs font-bold tracking-[0.2em] uppercase">Explore Projects</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent group-hover:from-cyan-400 transition-colors" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;