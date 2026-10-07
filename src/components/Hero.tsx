import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import {
  IconCrawler,
  IconBuggy,
  IconDrift,
  IconTouring,
  IconShortCourse,
  IconMonster,
  IconTrucks,
  IconAviation,
  IconMarine,
  IconDrones,
} from './icons/TechnicalRCIcons';

const JOIN_WHATSAPP_URL =
  'https://wa.me/573132233304?text=Hola%2C%20Camilo.%20Quiero%20ser%20parte%20de%20ZONA%20RC%20desde%20el%20comienzo%20y%20estar%20cuando%20salga.';

const MODALITIES_DOCK = [
  { id: 'crawler', code: '01', name: 'Crawler', sub: 'Escala técnica', icon: IconCrawler },
  { id: 'buggy', code: '02', name: 'Buggy / Truggy', sub: 'Competición', icon: IconBuggy },
  { id: 'drift', code: '03', name: 'Drift', sub: 'On-road', icon: IconDrift },
  { id: 'touring', code: '04', name: 'Touring', sub: 'Asfalto', icon: IconTouring },
  { id: 'short-course', code: '05', name: 'Short Course', sub: 'Off-road', icon: IconShortCourse },
  { id: 'monster', code: '06', name: 'Monster Truck', sub: 'Potencia', icon: IconMonster },
  { id: 'trucks', code: '07', name: 'Camiones', sub: 'Escala pesada', icon: IconTrucks },
  { id: 'aviation', code: '08', name: 'Aviones', sub: 'Aeromodelismo', icon: IconAviation },
  { id: 'marine', code: '09', name: 'Barcos', sub: 'Náutica RC', icon: IconMarine },
  { id: 'drones', code: '10', name: 'Drones / FPV', sub: 'Vuelo FPV', icon: IconDrones },
];

interface HeroProps {
  onDiscoverVision: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscoverVision }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#0E1012] border-b border-[#26292E]">
      {/* Full-bleed background photograph with all RC vehicles */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-cinematic-bg-final.jpg"
          alt="Ecosistema ZONA RC COL: crawler, drift, camiones, buggy, lancha, avión y drone en paisaje colombiano"
          className="w-full h-full object-cover object-center lg:object-[center_35%]"
          loading="eager"
        />
        {/* Left-to-right cinematic dark gradient overlay for crystal-clear text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1012] via-[#0E1012]/85 to-transparent w-full lg:w-[68%]" />
        {/* Top subtle vignette for navbar */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#0E1012]/80 via-[#0E1012]/40 to-transparent pointer-events-none" />
        {/* Bottom subtle vignette for modalities dock */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0E1012]/90 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content (Left-aligned) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 sm:pt-36 lg:pt-40 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-xl lg:max-w-2xl space-y-5 animate-hero-fade">
          {/* Main Title - Italic Bold Motorsport Typography */}
          <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-display italic font-black uppercase tracking-tight leading-[0.98] drop-shadow-lg">
            <span className="text-white block">El mundo RC</span>
            <span className="text-[#FF5500] block">merece su propio</span>
            <span className="text-[#FF5500] block">espacio.</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-[#D0D4DC] leading-relaxed max-w-xl font-normal drop-shadow">
            Hoy encontrar personas con tus mismos intereses, lugares donde practicar, proyectos RC y hasta ese repuesto que necesitas, puede ser un reto. ZONA RC nace para empezar a reunir todo eso en un solo lugar.
          </p>

          {/* Handwritten Slogan */}
          <div className="pt-1">
            <span className="font-handwritten text-2xl sm:text-3xl text-white/95 -rotate-1 inline-block select-none drop-shadow">
              RC es más que un hobby.
            </span>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 flex flex-wrap items-center gap-3.5">
            <a
              href={JOIN_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-hero-join"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-tech font-bold uppercase tracking-wider text-white bg-[#FF5500] hover:bg-[#E64A19] shadow-xl shadow-orange-900/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>QUIERO SER PARTE</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onDiscoverVision}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-tech font-bold uppercase tracking-wider text-white bg-black/60 hover:bg-black/85 border border-white/20 hover:border-white/40 backdrop-blur-md transition-all cursor-pointer group"
            >
              <span>CONOCER EL PROYECTO</span>
              <Play className="w-3.5 h-3.5 text-white/80 group-hover:text-[#FF5500] fill-current transition-colors" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Modalities Dock (Horizontal Strip) */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/70 backdrop-blur-md py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-6 sm:gap-7 shrink-0">
            {MODALITIES_DOCK.map((m) => {
              const Icon = m.icon;
              return (
                <button
                  key={m.id}
                  onClick={() => {
                    const el = document.getElementById('modalidades');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2.5 text-left group transition-colors cursor-pointer shrink-0 py-1"
                >
                  <div className="text-[#FF5500] group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="leading-tight">
                    <span className="block text-[11px] font-tech font-bold uppercase tracking-wider text-[#F4F2ED] group-hover:text-[#FF5500] transition-colors truncate">
                      {m.name}
                    </span>
                    <span className="block text-[9px] font-tech text-[#8D949C] truncate">
                      {m.sub}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Colombia badge in right corner */}
          <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-white/10 shrink-0 select-none">
            <span className="font-handwritten text-2xl text-white -rotate-2">
              Colombia
            </span>
            <img
              src="/images/colombia-brush-flag.png"
              alt="Colombia"
              className="h-3.5 w-6 object-contain -rotate-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
