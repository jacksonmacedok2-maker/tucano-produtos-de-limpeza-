import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Products from './components/Products';
import Differentials from './components/Differentials';
import About from './components/About';
import Distribution from './components/Distribution';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import SoapBubbles from './components/SoapBubbles';
import FadeInSection from './components/FadeInSection';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Adicionada classe 'light' e estilos de fundo explícitos para reforçar o bloqueio do modo escuro
    <div className="relative min-h-screen bg-slate-50 text-slate-900 light" style={{ colorScheme: 'light' }}>
      <SoapBubbles />
      <Header scrolled={scrolled} />
      <main>
        <FadeInSection>
          <Hero />
        </FadeInSection>
        
        <FadeInSection>
          <Benefits />
        </FadeInSection>
        
        <FadeInSection>
          <Products />
        </FadeInSection>
        
        <FadeInSection>
          <Differentials />
        </FadeInSection>
        
        <FadeInSection>
          <About />
        </FadeInSection>
        
        <FadeInSection>
          <Distribution />
        </FadeInSection>
        
        <FadeInSection>
          <Testimonials />
        </FadeInSection>
        
        <FadeInSection>
          <FAQ />
        </FadeInSection>
        
        <FadeInSection>
          <Contact />
        </FadeInSection>
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default App;