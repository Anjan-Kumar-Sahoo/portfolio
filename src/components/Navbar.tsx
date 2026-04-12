import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { userData } from '../data/portfolioData';

const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'projects', title: 'Projects' },
  { id: 'trainings', title: 'Training Timeline' },
  { id: 'technical-skills', title: 'Technical Skills' },
  { id: 'soft-skills', title: 'Soft Skills' },
  { id: 'education', title: 'Education' },
  { id: 'contact', title: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${
      scrolled 
        ? 'bg-[#050816]/90 backdrop-blur-lg border-b border-white/10 py-3 shadow-2xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center">
          {/* Logo / Name */}
          <Link
            to="home"
            smooth={true}
            className="flex items-center cursor-pointer group"
          >
            <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              Mr. Aks<span className="text-white">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="text-cyan-400 !bg-white/5"
                className="text-gray-400 hover:text-white hover:bg-white/5 px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full bg-white/5 text-gray-300 hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050816] border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="px-6 pt-4 pb-8 space-y-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={closeMenu}
                    className="text-gray-400 hover:text-cyan-400 block px-4 py-3 rounded-xl text-lg font-bold hover:bg-white/5 transition-all"
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;