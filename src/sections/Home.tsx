import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText } from 'lucide-react';
import { Link } from 'react-scroll';
import { userData } from '../data/portfolioData';

const Home: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 animate-gradient-slow" />
        <div className="absolute inset-0 opacity-40 dark:opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-0 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-teal-300 dark:bg-teal-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-52 h-52 rounded-full border-4 border-white dark:border-gray-800 shadow-xl mb-8 overflow-hidden"
          >
            <img 
              src={userData.image} 
              alt={userData.name} 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Name & Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            {userData.name}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-8"
          >
            {userData.bio}
          </motion.div>
          
          {/* Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <a
              href={userData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium flex items-center transition-colors"
            >
              <FileText size={18} className="mr-2" />
              Download Resume
            </a>
          </motion.div>
          
          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              delay: 1,
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="absolute bottom-10"
          >
            <Link
              to="internships"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex flex-col items-center cursor-pointer text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ArrowDown size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;