import React from 'react';
import { MessageSquare, ShoppingCart, Wrench, Users, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface RoadmapStep {
  number: string;
  title: string;
  status: string;
  isCurrent: boolean;
  image: string;
  description: string;
  bottomPhrase: string;
  icon: React.ComponentType<{ className?: string }>;
}

const steps: RoadmapStep[] = [
  {
    number: '01',
    title: 'ESCUCHAR A LA COMUNIDAD',
    status: 'Estamos aquí',
    isCurrent: true,
    image: '/images/roadmap-stage-1.jpg',
    description:
      'Conversaciones con pilotos, mecánicos, tiendas y organizadores en Colombia para entender los dolores reales y priorizar lo que de verdad hace falta.',
    bottomPhrase: 'Fase de validación comunitaria',
    icon: MessageSquare,
  },
  {
    number: '02',
    title: 'COMPRA Y VENTA RC',
    status: 'Esto es lo que queremos construir',
    isCurrent: false,
    image: '/images/roadmap-stage-2.jpg',
    description:
      'Un espacio ordenado para descubrir y publicar vehículos RC, repuestos y accesorios, con filtros por escala, chasis y contacto directo.',
    bottomPhrase: 'Mercado especializado sin intermediarios',
    icon: ShoppingCart,
  },
  {
    number: '03',
    title: 'MI GARAGE',
    status: 'Esto es lo que queremos construir',
    isCurrent: false,
    image: '/images/roadmap-stage-3.jpg',
    description:
      'Ficha técnica de tus vehículos, control de modificaciones, estado de baterías LiPo, notas de mantenimiento y compatibilidad.',
    bottomPhrase: 'Tu flota organizada en un solo lugar',
    icon: Wrench,
  },
  {
    number: '04',
    title: 'COMUNIDAD, PISTAS Y EVENTOS',
    status: 'Esto es lo que queremos construir',
    isCurrent: false,
    image: '/images/roadmap-stage-4.jpg',
    description:
      'Directorio de pistas y circuitos activos, clubes por modalidad, rutas de escala, carreras regionales y quedadas en toda Colombia.',
    bottomPhrase: 'El punto de encuentro del hobby',
    icon: Users,
  },
];

export const RoadmapSection: React.FC = () => {
  return (
    <section id="hoja-de-ruta" className="py-20 lg:py-28 bg-[#17191C] border-b border-[#26292E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 reveal-on-scroll">
          <div className="flex items-center gap-3 mb-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#101214] border border-[#26292E]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C65D2E]" />
              <span className="text-[11px] font-tech text-[#C65D2E] uppercase tracking-widest font-semibold">
                Hoja de ruta comunitaria
              </span>
            </div>
            <span className="font-handwritten text-xl text-[#C65D2E] -rotate-1 select-none">
              «Un camino que construimos juntos»
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#F4F2ED] leading-[1.15] tracking-tight">
            El camino para hacer realidad BOX HUB.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#8D949C] leading-relaxed">
            Sin fechas inventadas ni porcentajes falsos. Esta es la secuencia real en la que estamos trabajando junto a los aficionados de Colombia:
          </p>
        </div>

        {/* Visual Roadmap Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const delays = ['delay-75', 'delay-150', 'delay-225', 'delay-300'];

            return (
              <div key={step.number} className={`reveal-on-scroll ${delays[idx % delays.length]} hover-lift relative flex flex-col`}>
                {/* Step Card Container */}
                <div
                  className={`flex-1 rounded-xl bg-[#101214] border transition-all duration-200 overflow-hidden flex flex-col justify-between ${
                    step.isCurrent
                      ? 'border-[#C65D2E] shadow-[0_0_24px_rgba(198,93,46,0.18)] ring-1 ring-[#C65D2E]/30'
                      : 'border-[#26292E] hover:border-[#8D949C]/40'
                  }`}
                >
                  {/* Top: Panoramic Photo with badges */}
                  <div className="relative aspect-[16/10] bg-[#17191C] overflow-hidden border-b border-[#26292E]">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101214] via-transparent to-transparent opacity-60" />

                    {/* AI image badge */}
                    <div className="absolute top-2.5 right-2.5 z-10">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#101214]/85 backdrop-blur-sm border border-[#26292E] text-[9px] font-tech text-[#C65D2E] font-semibold uppercase tracking-wider">
                        <Sparkles className="w-2.5 h-2.5 text-[#C65D2E]" />
                        <span>Imagen IA</span>
                      </span>
                    </div>

                    {/* Step number on image */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="px-2.5 py-0.5 rounded bg-[#101214]/90 backdrop-blur-sm border border-[#26292E] font-tech font-bold text-xs text-[#F4F2ED]">
                        Paso {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      {/* Status indicator */}
                      <div>
                        {step.isCurrent ? (
                          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#C65D2E]/15 border border-[#C65D2E] text-xs font-tech font-bold text-[#C65D2E] uppercase tracking-wider">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C65D2E] opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C65D2E]"></span>
                            </span>
                            <span>{step.status}</span>
                          </div>
                        ) : (
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#17191C] border border-[#26292E] text-[11px] font-tech font-medium text-[#8D949C]">
                            <CheckCircle2 className="w-3 h-3 text-[#8D949C]" />
                            <span>{step.status}</span>
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-editorial font-bold text-base sm:text-lg text-[#F4F2ED] leading-snug">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#8D949C] leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom Micro Phrase */}
                    <div className="pt-3.5 border-t border-[#26292E] flex items-center gap-2 text-xs font-tech text-[#8D949C]">
                      <Icon className={`w-3.5 h-3.5 ${step.isCurrent ? 'text-[#C65D2E]' : 'text-[#8D949C]'}`} />
                      <span className="truncate">{step.bottomPhrase}</span>
                    </div>
                  </div>
                </div>

                {/* Connector Arrow (Desktop only, between cards) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3.5 top-[28%] z-10 w-7 h-7 rounded-full bg-[#17191C] border border-[#26292E] items-center justify-center text-[#8D949C] pointer-events-none shadow-sm">
                    <ArrowRight className="w-3.5 h-3.5 text-[#8D949C]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Honest Note */}
        <div className="mt-8 text-xs text-[#8D949C] font-tech flex items-center gap-2">
          <span className="text-[#C65D2E] font-bold">*</span>
          <span>
            Cada fase se ajusta de acuerdo con las prioridades manifestadas por los aficionados en nuestras conversaciones directas.
          </span>
        </div>
      </div>
    </section>
  );
};
