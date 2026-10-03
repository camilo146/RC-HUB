import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheProblemSection } from './components/TheProblemSection';
import { WhatWeAreBuilding } from './components/WhatWeAreBuilding';
import { ConceptualPreview } from './components/ConceptualPreview';
import { RoadmapSection } from './components/RoadmapSection';
import { BehindRCHUB } from './components/BehindRCHUB';
import { BuildTogetherSection } from './components/BuildTogetherSection';
import { Footer } from './components/Footer';

export function App() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      setTimeout(() => scrollToSection(id), 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#17191C] text-[#F4F2ED] flex flex-col selection:bg-[#C65D2E] selection:text-white">
      {/* Sticky Navbar */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero — Titular, propuesta de valor, autor, CTAs */}
        <Hero onDiscoverVision={() => scrollToSection('el-problema')} />

        {/* 2. The Problem — Por qué este hobby necesita mejores herramientas */}
        <TheProblemSection />

        {/* 3. What We're Building — Descripción de módulos */}
        <WhatWeAreBuilding />

        {/* 4. Conceptual Preview — Mockups interactivos */}
        <ConceptualPreview />

        {/* 5. Roadmap — Plan de desarrollo */}
        <RoadmapSection />

        {/* 6. Behind RC HUB — Camilo López Romero, historia y motivaciones */}
        <BehindRCHUB />

        {/* 7. Build Together / Contact — Formulario de interés temprano */}
        <BuildTogetherSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}

export default App;
