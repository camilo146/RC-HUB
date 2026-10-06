import React from 'react';
import { ArrowDown, MessageCircle, Sparkles } from 'lucide-react';
import { ZonaRcLogo } from './ZonaRcLogo';

const JOIN_WHATSAPP_URL =
  'https://wa.me/573132233304?text=Hola%2C%20Camilo.%20Quiero%20ser%20parte%20de%20ZONA%20RC%20desde%20el%20comienzo%20y%20estar%20cuando%20salga.';
const CHAT_WHATSAPP_URL =
  'https://wa.me/573132233304?text=Hola%2C%20Camilo.%20Me%20gustar%C3%ADa%20hablar%20contigo%20sobre%20el%20proyecto%20ZONA%20RC.';

interface HeroProps {
  onDiscoverVision: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscoverVision }) => {
  return (
    <section className="relative pt-8 pb-12 lg:pt-14 lg:pb-18 overflow-hidden border-b border-[#26292E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Actions with entrance animation */}
          <div className="lg:col-span-6 space-y-6 animate-hero-fade">
            {/* Motorsport Brand Header */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <ZonaRcLogo size="lg" showSlogan={false} showTricolor={true} />
                <span className="font-handwritten text-2xl text-[#C65D2E] inline-block -rotate-2 select-none self-end pb-1">
                  «RC es más que un hobby»
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <img
                  src="/images/colombia-brush-flag.png"
                  alt="Colombia"
                  className="h-4 w-7 object-contain -rotate-2"
                />
                <span className="text-[10px] font-tech uppercase tracking-widest text-[#8D949C]">
                  Comunidad Oficial · Colombia
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-[#F4F2ED] leading-[1.1] tracking-tight">
              El mundo RC merece su propio espacio.
            </h1>

            {/* Description */}
            <div className="space-y-3 text-base sm:text-lg text-[#8D949C] leading-relaxed max-w-xl font-normal">
              <p>
                Un lugar para encontrar vehículos, repuestos, personas, clubes, eventos y todo lo que hace parte del mundo del radio control.
              </p>
              <p className="text-[#F4F2ED] font-medium text-sm sm:text-base">
                Estamos construyendo ZONA RC junto a la comunidad RC colombiana.
              </p>
            </div>

            {/* Author attribution — brief discrete line */}
            <p className="text-xs font-tech text-[#8D949C]">
              Un proyecto independiente, creado por{' '}
              <button
                onClick={() => {
                  const el = document.getElementById('detras-de-rchub');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-[#F4F2ED] hover:text-[#C65D2E] transition-colors underline underline-offset-2 decoration-[#26292E] hover:decoration-[#C65D2E] cursor-pointer"
              >
                Camilo López Romero
              </button>
              .
            </p>

            {/* Action Buttons: Primary 'Quiero ser parte' & Secondary 'Hablar con Camilo' */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              {/* Primary CTA with subtle attention wiggle */}
              <a
                href={JOIN_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-hero-join"
                className="animate-attention-wiggle inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md text-sm font-semibold text-white bg-[#C65D2E] hover:bg-[#B34F24] transition-all duration-150 cursor-pointer shadow-lg hover:shadow-[#C65D2E]/25 text-center group"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Quiero ser parte de ZONA RC</span>
              </a>

              {/* Secondary CTA */}
              <a
                href={CHAT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-hero-chat"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md text-sm font-medium text-[#F4F2ED] bg-[#101214] border border-[#26292E] hover:border-[#8D949C] transition-colors cursor-pointer text-center"
              >
                <MessageCircle className="w-4 h-4 text-[#C65D2E]" />
                <span>Hablar con Camilo</span>
              </a>
            </div>

            {/* Encouraging micro note + quick jump to vision */}
            <div className="flex items-center justify-between text-[11px] font-tech text-[#8D949C] pt-1">
              <span>💬 Contacto directo sin bots</span>
              <button
                onClick={onDiscoverVision}
                className="hover:text-[#F4F2ED] transition-colors inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Ver de qué se trata</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#C65D2E]" />
              </button>
            </div>

            {/* Micro metadata footer note */}
            <div className="pt-4 border-t border-[#26292E]/60 flex flex-wrap items-center gap-3 sm:gap-5 text-xs text-[#8D949C] font-tech">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C65D2E]" />
                <span>Etapa: Validación comunitaria</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <img
                  src="/images/colombia-brush-flag.png"
                  alt="Colombia"
                  className="h-3.5 w-6 object-contain -rotate-2"
                />
                <span>Pilotos de toda Colombia</span>
              </span>
            </div>
          </div>

          {/* Right Column: Hero Real Photography with scale entrance */}
          <div className="lg:col-span-6 animate-hero-scale">
            <div className="relative rounded-lg overflow-hidden border border-[#26292E] bg-[#101214] shadow-2xl">
              <img
                src="/images/hero-rc.jpg"
                alt="Toyota Land Cruiser RC Crawler 4x4 a escala 1/10 en terreno de montaña"
                className="w-full h-auto object-cover aspect-[16/10] sm:aspect-[16/11] contrast-[1.03] hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="p-3 bg-[#101214] border-t border-[#26292E] flex items-center justify-between text-xs text-[#8D949C] font-tech">
                <span className="truncate">Toyota Land Cruiser RC Crawler · Escala 1/10</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#17191C] border border-[#26292E] text-[10px] text-[#C65D2E] font-semibold uppercase tracking-wider shrink-0 ml-2">
                  <Sparkles className="w-3 h-3 text-[#C65D2E]" />
                  <span>Imagen generada con IA</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
