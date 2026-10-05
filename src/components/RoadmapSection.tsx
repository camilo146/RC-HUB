import React from 'react';
import { MessageSquare, ShoppingCart, Wrench, Users, ArrowRight } from 'lucide-react';

interface RoadmapStep {
  number: string;
  title: string;
  status: string;
  statusType: 'current' | 'planned' | 'future';
  image: string;
  description: string;
  bottomPhrase: string;
  icon: React.ComponentType<{ className?: string }>;
}

const steps: RoadmapStep[] = [
  {
    number: '01',
    title: 'Validación de la idea',
    status: 'Etapa actual',
    statusType: 'current',
    image: '/images/roadmap-stage-1.jpg',
    description:
      'Conversaciones con la comunidad, identificación de necesidades y priorización de funcionalidades.',
    bottomPhrase: 'Escuchando a la comunidad',
    icon: MessageSquare,
  },
  {
    number: '02',
    title: 'Plataforma de compra y venta RC',
    status: 'Planificado',
    statusType: 'planned',
    image: '/images/roadmap-stage-2.jpg',
    description:
      'Un espacio para descubrir y publicar vehículos RC, repuestos y accesorios, con búsqueda, filtros y contacto directo entre compradores y vendedores.',
    bottomPhrase: 'Comprar y vender RC',
    icon: ShoppingCart,
  },
  {
    number: '03',
    title: 'Mi Garage',
    status: 'Planificado',
    statusType: 'planned',
    image: '/images/roadmap-stage-3.jpg',
    description:
      'Un espacio personal para registrar tus vehículos, organizar componentes, llevar notas de mantenimiento y mantener tu colección bajo control.',
    bottomPhrase: 'Tu colección, en un solo lugar',
    icon: Wrench,
  },
  {
    number: '04',
    title: 'Comunidad',
    status: 'Visión futura',
    statusType: 'future',
    image: '/images/roadmap-stage-4.jpg',
    description:
      'Pistas, clubes, eventos y espacios para conectar con otros aficionados al radio control.',
    bottomPhrase: 'Juntos por el hobby',
    icon: Users,
  },
];

export const RoadmapSection: React.FC = () => {
  return (
    <section id="hoja-de-ruta" className="py-20 lg:py-28 bg-[#17191C] border-b border-[#26292E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#101214] border border-[#26292E] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C65D2E]" />
            <span className="text-[11px] font-tech text-[#C65D2E] uppercase tracking-widest font-semibold">
              Hoja de ruta
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#F4F2ED] leading-[1.15] tracking-tight">
            El camino para hacerlo realidad.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#8D949C] leading-relaxed">
            Estas son las etapas que queremos seguir para construir RC HUB, escuchando a la comunidad y priorizando las herramientas que realmente necesita.
          </p>
        </div>

        {/* Visual Roadmap Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = step.statusType === 'current';

            return (
              <div key={step.number} className="relative flex flex-col">
                {/* Step Card Container */}
                <div
                  className={`flex-1 rounded-lg bg-[#101214] border transition-all duration-200 overflow-hidden flex flex-col justify-between ${
                    isCurrent
                      ? 'border-[#C65D2E]/80 shadow-[0_0_20px_rgba(198,93,46,0.12)]'
                      : 'border-[#26292E] hover:border-[#8D949C]/40'
                  }`}
                >
                  {/* Top: Panoramic Photo */}
                  <div className="relative aspect-[16/10] bg-[#17191C] overflow-hidden border-b border-[#26292E]">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101214] via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      {/* Step Number & Status Badge */}
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-tech text-lg font-bold tracking-tight ${
                            isCurrent ? 'text-[#C65D2E]' : 'text-[#8D949C]'
                          }`}
                        >
                          {step.number}
                        </span>

                        <span
                          className={`px-2.5 py-0.5 rounded-sm text-[10px] font-tech uppercase font-bold tracking-wider ${
                            isCurrent
                              ? 'bg-[#C65D2E]/15 text-[#C65D2E] border border-[#C65D2E]/60'
                              : 'bg-[#17191C] text-[#8D949C] border border-[#26292E]'
                          }`}
                        >
                          {step.status}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-editorial font-bold text-lg text-[#F4F2ED] leading-snug">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#8D949C] leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom Micro Phrase */}
                    <div className="pt-3.5 border-t border-[#26292E] flex items-center gap-2 text-xs font-tech text-[#8D949C]">
                      <Icon className={`w-3.5 h-3.5 ${isCurrent ? 'text-[#C65D2E]' : 'text-[#8D949C]'}`} />
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
            Las etiquetas «Planificado» y «Visión futura» señalan módulos en fase de diseño; su orden y alcance se adaptan con la retroalimentación de la comunidad.
          </span>
        </div>
      </div>
    </section>
  );
};
