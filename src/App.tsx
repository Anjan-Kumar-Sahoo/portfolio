import { motion, useScroll, useSpring } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import Projects from './sections/Projects';
import InternshipTraining from './sections/InternshipTraining';
import TechnicalSkills from './sections/TechnicalSkills';
import SoftSkills from './sections/SoftSkills';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#050816] text-gray-900 dark:text-white transition-colors duration-300 selection:bg-cyan-500/30">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 z-[60] origin-left"
          style={{ scaleX }}
        />
        <CustomCursor />
        <Navbar />
        <main className="relative">
          {/* Global Background Decorations */}
          <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] animation-delay-2000" />
          </div>
          <Home />
          <Projects />
          <InternshipTraining />
          <TechnicalSkills />
          <SoftSkills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;