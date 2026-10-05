import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheProblemSection } from './components/TheProblemSection';
import { WhatWeAreBuilding } from './components/WhatWeAreBuilding';
import { RCModalitiesSection } from './components/RCModalitiesSection';
import { ConceptualPreview } from './components/ConceptualPreview';
import { RoadmapSection } from './components/RoadmapSection';
import { BehindRCHUB } from './components/BehindRCHUB';
import { BuildTogetherSection } from './components/BuildTogetherSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

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

        {/* 2. The Problem — Preguntas cotidianas que viven los aficionados */}
        <TheProblemSection />

        {/* 3. The 4 Pillars — Beneficios claros para el aficionado */}
        <WhatWeAreBuilding />

        {/* 4. Modalities — No importa qué tipo de RC tengas */}
        <RCModalitiesSection />

        {/* 5. Conceptual Preview — Prototipos de interfaz con disclaimers */}
        <ConceptualPreview />

        {/* 6. Roadmap — Hoja de ruta construida con la comunidad */}
        <RoadmapSection />

        {/* 7. Behind BOX HUB — Camilo López Romero, historia y motivaciones */}
        <BehindRCHUB />

        {/* 8. Build Together / Contact — Participación comunitaria */}
        <BuildTogetherSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating WhatsApp Action for quick direct chat */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
