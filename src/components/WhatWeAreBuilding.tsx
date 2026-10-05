import React from 'react';
import { ShoppingCart, Wrench, Users, Flag, Sparkles, CheckCircle2 } from 'lucide-react';

const FOUR_PILLARS = [
  {
    number: '01',
    title: 'COMPRA Y VENDE',
    tagline: 'Encuentra vehículos, repuestos y accesorios.',
    description:
      'Un espacio ordenado para buscar y ofrecer artículos de radio control sin perderte entre publicaciones efímeras o spam en redes.',
    benefits: [
      'Filtros por escala (1/10, 1/8, 1/7, 1/24), tracción y tipo de chasis',
      'Detalles mecánicos claros: motorización, ESC, piñonería y baterías LiPo',
      'Contacto directo entre compradores y vendedores de toda Colombia',
    ],
    highlight: 'RTR, Kits, Repuestos, Rines, Combos Brushless',
    icon: ShoppingCart,
    image: '/images/slash-4x4.jpg',
    imageAlt: 'Vehículo RC Short Course en taller',
  },
  {
    number: '02',
    title: 'MI GARAGE',
    tagline: 'Organiza tus vehículos, componentes, modificaciones y mantenimiento.',
    description:
      'Tu espacio personal para registrar tu flota, anotar qué cambios le hiciste a cada carro y saber siempre qué repuesto le sirve.',
    benefits: [
      'Ficha técnica de cada vehículo: relación de transmisión, siliconas y mejoras',
      'Registro de mantenimientos, cambio de rodamientos y ciclos de baterías',
      'Verificación de compatibilidad de repuestos antes de comprar',
    ],
    highlight: 'Control de flota, Registro de mejoras, Alertas de servicio',
    icon: Wrench,
    image: '/images/kraton-6s.jpg',
    imageAlt: 'Chasis Monster Truck RC con componentes en revisión',
  },
  {
    number: '03',
    title: 'COMUNIDAD',
    tagline: 'Conecta con otros aficionados, clubes y grupos.',
    description:
      'El radio control se vive mejor acompañado. Un punto de encuentro para conocer quién más comparte tu pasión en tu misma ciudad o región.',
    benefits: [
      'Encuentra pilotos aficionados y veteranos cerca de ti',
      'Conecta con clubes y grupos según la modalidad que corres',
      'Comparte puestas a punto, trucos mecánicos y experiencias en pista',
    ],
    highlight: 'Clubes locales, Grupos por modalidad, Conocimiento compartido',
    icon: Users,
    image: '/images/roadmap-stage-1.jpg',
    imageAlt: 'Aficionados conversando y preparando vehículos RC',
  },
  {
    number: '04',
    title: 'PISTAS Y EVENTOS',
    tagline: 'Descubre lugares, encuentros, competencias y actividades.',
    description:
      'Se acabaron las dudas sobre a dónde ir a rodar el fin de semana. Un directorio vivo de pistas y eventos en Colombia.',
    benefits: [
      'Mapa y directorio de pistas de asfalto, arcilla, senderos crawler y off-road',
      'Calendario de válidas regionales, carreras amistosas y quedadas de fin de semana',
      'Información práctica: horarios, costos, tipo de suelo y servicios disponibles',
    ],
    highlight: 'Pistas activas, Circuitos de escala, Calendario de carreras',
    icon: Flag,
    image: '/images/roadmap-stage-4.jpg',
    imageAlt: 'Pista de carreras y circuito de radio control',
  },
];

export const WhatWeAreBuilding: React.FC = () => {
  return (
    <section id="que-construimos" className="py-20 lg:py-28 bg-[#17191C] border-b border-[#26292E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-tech text-[#C65D2E] uppercase tracking-widest font-semibold">
              El beneficio para el aficionado
            </span>
            <span className="font-handwritten text-xl text-[#C65D2E] -rotate-1 select-none">
              «Pensado para resolver lo que falta»
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#F4F2ED] leading-[1.15] tracking-tight">
            Cuatro pilares para vivir el radio control al máximo.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8D949C] leading-relaxed">
            BOX HUB reúne las herramientas esenciales del hobby en una sola experiencia fluida, pensada por y para aficionados al radio control en Colombia.
          </p>
        </div>

        {/* 4 Pillars Grid (2x2 on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FOUR_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="rounded-xl bg-[#101214] border border-[#26292E] hover:border-[#8D949C]/40 transition-all duration-200 overflow-hidden flex flex-col justify-between"
              >
                {/* Image header with AI badge */}
                <div className="relative aspect-[16/9] bg-[#17191C] overflow-hidden border-b border-[#26292E]">
                  <img
                    src={pillar.image}
                    alt={pillar.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101214] via-[#101214]/40 to-transparent" />

                  {/* Pillar number badge */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                    <div className="px-2.5 py-1 rounded bg-[#101214]/90 backdrop-blur-sm border border-[#26292E] flex items-center gap-2">
                      <Icon className="w-3.5 h-3.5 text-[#C65D2E]" />
                      <span className="text-[11px] font-tech text-[#F4F2ED] font-bold">
                        Pilar {pillar.number}
                      </span>
                    </div>
                  </div>

                  {/* AI badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#101214]/85 backdrop-blur-sm border border-[#26292E] text-[9px] font-tech text-[#C65D2E] font-semibold uppercase tracking-wider">
                      <Sparkles className="w-2.5 h-2.5 text-[#C65D2E]" />
                      <span>Imagen conceptual</span>
                    </span>
                  </div>

                  {/* Highlight tag over image */}
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <span className="text-[11px] font-tech text-[#C8C4BC] bg-[#101214]/80 backdrop-blur-sm px-2.5 py-1 rounded border border-[#26292E]/60 inline-block truncate max-w-full">
                      {pillar.highlight}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-editorial font-bold text-[#F4F2ED]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm font-tech text-[#C65D2E] font-semibold">
                      {pillar.tagline}
                    </p>
                    <p className="text-sm text-[#8D949C] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Benefits bullet points */}
                  <div className="pt-4 border-t border-[#26292E] space-y-2.5 text-xs text-[#8D949C]">
                    {pillar.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#C65D2E] shrink-0 mt-0.5" />
                        <span className="leading-snug text-[#C8C4BC]">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
