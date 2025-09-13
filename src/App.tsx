import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import InternshipTraining from './sections/InternshipTraining';
import Projects from './sections/Projects';
import TechnicalSkills from './sections/TechnicalSkills';
import SoftSkills from './sections/SoftSkills';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <main>
          <Home />
          <InternshipTraining />
          <Projects />
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