import React from 'react';
import { ArrowDown, MessageCircle } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/573132233304?text=Hola%2C%20Camilo.%20Conoc%C3%AD%20RC%20HUB%20y%20me%20gustar%C3%ADa%20compartir%20algunas%20ideas%20sobre%20el%20proyecto.';

interface HeroProps {
  onDiscoverVision: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscoverVision }) => {
  return (
    <section className="relative pt-8 pb-12 lg:pt-12 lg:pb-16 overflow-hidden border-b border-[#26292E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 space-y-6">
            {/* Project Status Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#101214] border border-[#26292E]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C65D2E]" />
              <span className="text-[11px] font-tech text-[#8D949C] uppercase tracking-widest font-medium">
                Proyecto en desarrollo · Colombia
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-[#F4F2ED] leading-[1.1] tracking-tight">
              El mundo RC merece su propio espacio.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#8D949C] leading-relaxed max-w-xl font-normal">
              Estamos construyendo una plataforma para conectar a los aficionados al radio control en Colombia: vehículos, repuestos, colecciones y comunidad, en un mismo lugar especializado.
            </p>

            {/* Author attribution — discrete, below value prop */}
            <p className="text-xs font-tech text-[#555A60]">
              Un proyecto independiente creado por{' '}
              <button
                onClick={() => {
                  const el = document.getElementById('detras-de-rchub');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-[#8D949C] hover:text-[#F4F2ED] transition-colors underline underline-offset-2 decoration-[#26292E] hover:decoration-[#8D949C] cursor-pointer"
              >
                Camilo López Romero
              </button>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              {/* Primary: WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-hero-whatsapp"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-sm font-semibold text-white bg-[#C65D2E] hover:bg-[#B34F24] transition-all duration-150 cursor-pointer shadow-sm text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Charla conmigo</span>
              </a>

              {/* Secondary: Discover vision */}
              <button
                onClick={onDiscoverVision}
                id="cta-hero-discover"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-sm font-medium text-[#F4F2ED] bg-[#101214] border border-[#26292E] hover:border-[#8D949C] transition-colors cursor-pointer text-center"
              >
                <span>Conocer el proyecto</span>
                <ArrowDown className="w-4 h-4 text-[#8D949C]" />
              </button>
            </div>

            {/* Micro metadata footer note */}
            <div className="pt-6 border-t border-[#26292E]/60 flex items-center gap-6 text-xs text-[#8D949C] font-tech">
              <span>Etapa: Validación con la comunidad</span>
              <span>·</span>
              <span>Iniciativa independiente</span>
            </div>
          </div>

          {/* Right Column: Hero Real Photography */}
          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border border-[#26292E] bg-[#101214]">
              <img
                src="/images/hero-rc.jpg"
                alt="Toyota Land Cruiser RC Crawler 4x4 a escala 1/10 en terreno de montaña"
                className="w-full h-auto object-cover aspect-[16/10] sm:aspect-[16/11] contrast-[1.03]"
                loading="eager"
              />
              <div className="p-3 bg-[#101214] border-t border-[#26292E] flex items-center justify-between text-xs text-[#8D949C] font-tech">
                <span>Fotografía: Toyota Land Cruiser RC Crawler · Escala 1/10</span>
                <span className="text-[#C65D2E]">Enfoque técnico</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
