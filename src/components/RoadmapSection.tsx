import React from 'react';
import { Users, MessageSquare, TrendingUp, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface RoadmapStage {
  number: string;
  title: string;
  status: string;
  isCurrent: boolean;
  image: string;
  features: string[];
  objective: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STAGES: RoadmapStage[] = [
  {
    number: '01',
    title: 'CONECTAR',
    status: 'Fase inicial · En diseño',
    isCurrent: true,
    image: '/images/roadmap-stage-conectar.jpg',
    features: ['Perfiles RC', 'Lugares RC', 'Mi Garage', 'Compra y venta'],
    objective:
      'Empezar a reunir en un mismo espacio las personas, lugares, proyectos y oportunidades que hoy están repartidos.',
    icon: Users,
  },
  {
    number: '02',
    title: 'PARTICIPAR',
    status: 'Fase siguiente',
    isCurrent: false,
    image: '/images/roadmap-stage-participar.jpg',
    features: [
      'Publicaciones & bitácoras',
      'Comentarios & seguimiento',
      'Grupos y clubes locales',
      'Eventos y encuentros',
    ],
    objective:
      'Pasar de encontrar a la comunidad a participar activamente en ella.',
    icon: MessageSquare,
  },
  {
    number: '03',
    title: 'CRECER',
    status: 'Fase de ecosistema',
    isCurrent: false,
    image: '/images/roadmap-stage-crecer.jpg',
    features: [
      'Tiendas & distribuidores',
      'Organizadores de carreras',
      'Servicios técnicos especializados',
      'Herramientas avanzadas para el hobby',
    ],
    objective:
      'Construir un ecosistema RC cada vez más útil para aficionados, clubes, tiendas y organizadores.',
    icon: TrendingUp,
  },
];

export const RoadmapSection: React.FC = () => {
  return (
    <section id="hoja-de-ruta" className="relative overflow-hidden py-20 lg:py-28 bg-[#17191C] border-b border-[#26292E]">
      {/* Cinematic background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src="/images/roadmap-stage-crecer.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-[0.12]" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#17191C] via-[#17191C]/75 to-[#17191C]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 reveal-on-scroll">
          <div className="flex items-center gap-3 mb-3">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded bg-[#101214] border border-[#26292E]">
              <img
                src="/images/colombia-brush-flag.png"
                alt="Bandera Colombia pincelazo"
                className="h-3.5 w-6 object-contain -rotate-3"
              />
              <span className="text-[11px] font-tech text-[#FF5500] uppercase tracking-widest font-bold">
                Hoja de ruta comunitaria · Colombia
              </span>
            </div>
            <span className="font-handwritten text-xl text-[#FF5500] -rotate-1 select-none">
              «Evoluciona con la comunidad»
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display italic font-black uppercase text-[#F4F2ED] leading-[1.05] tracking-tight">
            El camino para hacer <span className="text-[#FF5500]">realidad ZONA RC.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#8D949C] leading-relaxed">
            Sin fechas inventadas ni porcentajes falsos. Esta es la visión en etapas que queremos construir paso a paso junto a los aficionados de Colombia:
          </p>
        </div>

        {/* 3-Stage Sequence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const delays = ['delay-75', 'delay-150', 'delay-225'];

            return (
              <div key={stage.number} className={`reveal-on-scroll ${delays[idx % delays.length]} hover-lift relative flex flex-col`}>
                {/* Stage Card Container */}
                <div
                  className={`flex-1 rounded-xl bg-[#101214] border transition-all duration-200 overflow-hidden flex flex-col justify-between ${
                    stage.isCurrent
                      ? 'border-[#FF5500] shadow-[0_0_24px_rgba(255,85,0,0.18)] ring-1 ring-[#FF5500]/30'
                      : 'border-[#26292E] hover:border-[#8D949C]/40'
                  }`}
                >
                  {/* Top: Panoramic Photo with badges */}
                  <div className="relative aspect-[16/10] bg-[#17191C] overflow-hidden border-b border-[#26292E]">
                    <img
                      src={stage.image}
                      alt={`Fase ${stage.number} — ${stage.title}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101214] via-transparent to-transparent opacity-60" />

                    {/* AI image badge */}
                    <div className="absolute top-2.5 right-2.5 z-10">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#101214]/85 backdrop-blur-sm border border-[#26292E] text-[9px] font-tech text-[#FF5500] font-semibold uppercase tracking-wider">
                        <Sparkles className="w-2.5 h-2.5 text-[#FF5500]" />
                        <span>Fase {stage.number}</span>
                      </span>
                    </div>

                    {/* Stage number on image */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="px-2.5 py-0.5 rounded bg-[#101214]/90 backdrop-blur-sm border border-[#26292E] font-tech font-bold text-xs text-[#F4F2ED]">
                        {stage.number} — {stage.title}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      {/* Status indicator */}
                      <div>
                        {stage.isCurrent ? (
                          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#FF5500]/15 border border-[#FF5500] text-xs font-tech font-bold text-[#FF5500] uppercase tracking-wider">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5500] opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5500]"></span>
                            </span>
                            <span>{stage.status}</span>
                          </div>
                        ) : (
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#17191C] border border-[#26292E] text-[11px] font-tech font-medium text-[#8D949C]">
                            <CheckCircle2 className="w-3 h-3 text-[#8D949C]" />
                            <span>{stage.status}</span>
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-editorial font-bold text-xl sm:text-2xl text-[#F4F2ED] leading-snug">
                        {stage.number} — {stage.title}
                      </h3>

                      {/* Objective */}
                      <div className="p-3 rounded-lg bg-[#17191C] border border-[#26292E]">
                        <span className="text-[10px] font-tech text-[#FF5500] uppercase tracking-wider block font-bold mb-1">
                          Objetivo:
                        </span>
                        <p className="text-xs sm:text-sm text-[#F4F2ED] leading-relaxed">
                          “{stage.objective}”
                        </p>
                      </div>

                      {/* Feature Bullets */}
                      <div className="pt-2 space-y-1.5">
                        <span className="text-[10px] font-tech text-[#8D949C] uppercase tracking-wider block font-semibold">
                          Incluye:
                        </span>
                        <div className="grid grid-cols-2 gap-1.5">
                          {stage.features.map((feat, fIdx) => (
                            <span
                              key={fIdx}
                              className="text-[11px] font-tech text-[#C8C4BC] bg-[#101214] px-2 py-1 rounded border border-[#26292E]/60 truncate"
                            >
                              • {feat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Micro Icon */}
                    <div className="pt-3.5 border-t border-[#26292E] flex items-center justify-between text-xs font-tech text-[#8D949C]">
                      <div className="flex items-center gap-2">
                        <Icon className={`w-3.5 h-3.5 ${stage.isCurrent ? 'text-[#FF5500]' : 'text-[#8D949C]'}`} />
                        <span>Fase {stage.number}</span>
                      </div>
                      <span className="text-[10px] text-[#FF5500] font-bold">ZONA RC</span>
                    </div>
                  </div>
                </div>

                {/* Connector Arrow (Desktop only, between cards) */}
                {idx < STAGES.length - 1 && (
                  <div className="hidden md:flex absolute -right-3.5 lg:-right-4.5 top-[28%] z-10 w-7 h-7 rounded-full bg-[#17191C] border border-[#26292E] items-center justify-center text-[#8D949C] pointer-events-none shadow-sm">
                    <ArrowRight className="w-3.5 h-3.5 text-[#8D949C]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Honest Note as requested */}
        <div className="mt-10 p-4 rounded-lg bg-[#101214] border border-[#26292E] text-xs text-[#8D949C] font-tech flex items-center gap-2.5">
          <span className="text-[#FF5500] font-bold text-sm">*</span>
          <span className="text-[#C8C4BC]">
            <strong>Nota importante:</strong> La hoja de ruta puede cambiar según lo que la comunidad realmente necesite.
          </span>
        </div>
      </div>
    </section>
  );
};
