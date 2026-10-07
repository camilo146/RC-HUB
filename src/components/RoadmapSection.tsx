import React from 'react';

interface RoadmapStage {
  number: string;
  title: string;
  status: string;
  isCurrent: boolean;
  image: string;
  features: string[];
  objective: string;
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

        {/* Project Route / Trayectoria del Proyecto */}
        <div className="relative">
          {/* Horizontal Track Guide (Desktop only) */}
          <div className="hidden md:block absolute top-7 left-12 right-12 h-[2px] bg-[#26292E] z-0">
            {/* Active progress segment */}
            <div className="h-full w-1/3 bg-gradient-to-r from-[#FF5500] to-[#FF5500]/40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative z-10">
            {STAGES.map((stage, idx) => {
              const delays = ['delay-75', 'delay-150', 'delay-225'];

              return (
                <div
                  key={stage.number}
                  className={`reveal-on-scroll ${delays[idx % delays.length]} flex flex-col justify-between space-y-6 pt-2`}
                >
                  {/* Waypoint indicator & Oversized Stage Numeral */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#26292E]">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-tech font-black text-sm select-none border transition-colors ${
                          stage.isCurrent
                            ? 'bg-[#FF5500] text-white border-[#FF5500] shadow-[0_0_16px_rgba(255,85,0,0.4)]'
                            : 'bg-[#141619] text-[#8D949C] border-[#26292E]'
                        }`}
                      >
                        {stage.number}
                      </div>
                      <div>
                        <span
                          className={`block text-[11px] font-tech font-bold uppercase tracking-widest ${
                            stage.isCurrent ? 'text-[#FF5500]' : 'text-[#8D949C]'
                          }`}
                        >
                          {stage.status}
                        </span>
                      </div>
                    </div>

                    <span className="text-3xl font-tech font-black text-[#26292E] select-none">
                      #{idx + 1}
                    </span>
                  </div>

                  {/* Stage Visual Thumbnail (Clean Editorial Crop) */}
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-[#0E1012] border border-[#26292E]">
                    <img
                      src={stage.image}
                      alt={`Fase ${stage.number} — ${stage.title}`}
                      className="w-full h-full object-cover filter contrast-[1.05]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101214] via-transparent to-transparent opacity-75" />
                    <div className="absolute bottom-2.5 left-3">
                      <span className="text-[10px] font-tech text-[#F4F2ED] uppercase tracking-wider font-bold">
                        Fase {stage.number} · {stage.title}
                      </span>
                    </div>
                  </div>

                  {/* Title & Objective */}
                  <div className="space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="font-editorial font-bold text-2xl text-[#F4F2ED] leading-snug">
                        {stage.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#8D949C] leading-relaxed">
                        {stage.objective}
                      </p>
                    </div>

                    {/* Features Deliverables List */}
                    <div className="pt-4 border-t border-[#26292E]/60 space-y-1.5">
                      <span className="text-[10px] font-tech text-[#8D949C] uppercase tracking-wider block font-semibold mb-1">
                        Alcance de la etapa:
                      </span>
                      <div className="space-y-1">
                        {stage.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs font-tech text-[#C8C4BC]">
                            <span className="text-[#FF5500] font-bold select-none leading-none mt-0.5">—</span>
                            <span className="leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Honest Note as requested */}
        <div className="mt-14 p-4 rounded-lg bg-[#141619] border border-[#26292E] text-xs text-[#8D949C] font-tech flex items-center gap-2.5">
          <span className="text-[#FF5500] font-bold text-sm">*</span>
          <span className="text-[#C8C4BC]">
            <strong>Nota de desarrollo:</strong> Esta hoja de ruta evoluciona con las necesidades reales de los pilotos, talleres y organizadores de Colombia.
          </span>
        </div>
      </div>
    </section>
  );
};
