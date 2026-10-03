import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheProblemSection } from './components/TheProblemSection';
import { WhatWeAreBuilding } from './components/WhatWeAreBuilding';
import { ConceptualPreview } from './components/ConceptualPreview';
import { RoadmapSection } from './components/RoadmapSection';
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
    // Handle initial hash on load
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
        {/* 1. Hero — Above the fold, project vision */}
        <Hero onDiscoverVision={() => scrollToSection('el-problema')} />

        {/* 2. The Problem — Why this hobby needs better tools */}
        <TheProblemSection />

        {/* 3. What We're Building — Module overview */}
        <WhatWeAreBuilding />

        {/* 4. Conceptual Preview — UI mockups / interactive tabs */}
        <ConceptualPreview />

        {/* 5. Roadmap — Timeline & progress */}
        <RoadmapSection />

        {/* 6. Build Together / Contact — Community involvement form */}
        <BuildTogetherSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}

export default App;
