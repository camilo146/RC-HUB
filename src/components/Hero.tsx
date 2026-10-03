import React from 'react';
import { ArrowDown, MessageCircle } from 'lucide-react';

interface HeroProps {
  onDiscoverVision: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscoverVision }) => {
  const whatsappUrl =
    'https://wa.me/573132233304?text=Hola%2C%20vi%20el%20proyecto%20RC%20HUB%20y%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20y%20compartir%20algunas%20ideas.';

  return (
    <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-[#26292E]">
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
              Estamos construyendo una plataforma para conectar a los aficionados al radio control: vehículos, repuestos, colecciones y comunidad, en un mismo lugar.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-sm font-semibold text-white bg-[#C65D2E] hover:bg-[#B34F24] transition-all duration-150 cursor-pointer shadow-sm text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Participar en el proyecto</span>
              </a>

              <button
                onClick={onDiscoverVision}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-sm font-medium text-[#F4F2ED] bg-[#101214] border border-[#26292E] hover:border-[#8D949C] transition-colors cursor-pointer text-center"
              >
                <span>Descubrir la visión</span>
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

          {/* Right Column: Hero Real Photography (Full bleed frame, clean presentation) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border border-[#26292E] bg-[#101214]">
              <img
                src="/images/hero-rc.jpg"
                alt="Vehículo de radiocontrol en pista de tierra"
                className="w-full h-auto object-cover aspect-[16/11] contrast-[1.03]"
                loading="eager"
              />
              <div className="p-3 bg-[#101214] border-t border-[#26292E] flex items-center justify-between text-xs text-[#8D949C] font-tech">
                <span>Fotografía: Estadio Off-Road · Escala 1/8</span>
                <span className="text-[#C65D2E]">Enfoque técnico</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
