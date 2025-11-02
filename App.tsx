import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import CaseStudies from './components/CaseStudies';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';
import AnimatedWrapper from './components/AnimatedWrapper';

const App: React.FC = () => {
  return (
    <div className="bg-[#F1F1EB] text-gray-800">
      <Header />
      <main className="container mx-auto px-4 md:px-8 py-12 overflow-x-hidden">
        <section id="top">
          <AnimatedWrapper>
            <Hero />
          </AnimatedWrapper>
        </section>
        <section id="services">
          <AnimatedWrapper>
            <Services />
          </AnimatedWrapper>
        </section>
        <section id="projects">
          <AnimatedWrapper>
            <Projects />
          </AnimatedWrapper>
        </section>
        <section id="case-studies">
          <AnimatedWrapper>
            <CaseStudies />
          </AnimatedWrapper>
        </section>
        <section id="skills">
          <AnimatedWrapper>
            <Skills />
          </AnimatedWrapper>
        </section>
        <section id="about">
          <AnimatedWrapper>
            <About />
          </AnimatedWrapper>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;