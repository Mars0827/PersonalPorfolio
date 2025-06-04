import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero/Hero';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Project';
import Contact from './sections/Contact/Contact';
import { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Intersection Observer to track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-100px 0px -100px 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen min-w-screen">
      <Navigation activeSection={activeSection} />
      <Hero />
      <Skills/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;