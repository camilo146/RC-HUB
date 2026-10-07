import React from 'react';
import { ArrowRight } from 'lucide-react';

const QUESTIONS = [
  {
    question: '“¿Dónde están los demás?”',
    context: 'Quieres salir a rodar o conocer a otros aficionados en tu misma ciudad, pero no sabes quién más comparte tu pasión ni en qué canales se reúnen.',
    category: 'Personas & Aficionados',
  },
  {
    question: '“¿Dónde podemos practicar?”',
    context: 'Buscar rutas de crawler, pistas de drift, circuitos de tierra o espejos de agua depende casi siempre del boca a boca o coordenadas en chats privados.',
    category: 'Lugares & Pistas',
  },
  {
    question: '“¿Dónde encuentro ese repuesto?”',
    context: 'Se te rompe una pieza o necesitas un upgrade específico y tienes que preguntar en diez grupos distintos a ver quién lo tiene disponible en Colombia.',
    category: 'Repuestos & Upgrades',
  },
  {
    question: '“¿Quién tiene un RC como el mío?”',
    context: 'Quieres resolver dudas de compatibilidad, ajustes de suspensión o comparar configuraciones con alguien que arme y conozca el mismo chasis.',
    category: 'Chasis & Compatibilidad',
  },
  {
    question: '“¿Dónde puedo compartir mi proyecto?”',
    context: 'Semanas armando, pintando o mejorando tu vehículo y no hay un espacio dedicado donde documentar el proceso, modificaciones y evolución.',
    category: 'Proyectos & Garage',
  },
  {
    question: '“¿Dónde puedo encontrar o vender un vehículo?”',
    context: 'Publicar en plataformas genéricas se llena de regateos, desinformación o compradores que no entienden el verdadero valor del radio control.',
    category: 'Compra & Venta',
  },
];

const SCATTERED_CHANNELS = [
  'Grupos de WhatsApp',
  'Facebook Groups',
  'Instagram DMs',
  'Marketplace genérico',
  'Tiendas aisladas',
  'Contactos personales',
  'Recomendaciones del boca a boca',
];

export const TheProblemSection: React.FC = () => {
  return (
    <section id="el-problema" className="relative overflow-hidden py-20 lg:py-28 bg-[#0E1012] text-[#F4F2ED] border-b border-[#26292E]">
      {/* Cinematic background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src="/images/hero-rc-ecosystem.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-[0.16]" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1012] via-[#0E1012]/70 to-[#0E1012]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="max-w-3xl mb-14 reveal-on-scroll">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="/images/colombia-brush-flag.png"
              alt="Bandera Colombia pincelazo"
              className="h-4 w-7 object-contain -rotate-3"
            />
            <span className="text-xs font-tech text-[#FF5500] uppercase tracking-widest font-bold">
              Lo que vivimos los aficionados en Colombia
            </span>
            <span className="font-handwritten text-xl text-[#FF5500] -rotate-1 select-none">
              — la fragmentación actual
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display italic font-black uppercase text-[#F4F2ED] leading-[1.05] tracking-tight">
            La comunidad existe. <span className="text-[#FF5500]">Lo que está fragmentado</span> es la forma de encontrarla.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8D949C] leading-relaxed">
            El radio control es una afición apasionante, pero hoy los aficionados, los lugares, los repuestos y los proyectos estamos dispersos en decenas de canales aislados:
          </p>
        </div>

        {/* 6 Everyday Questions Grid - Editorial Motorsport Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {QUESTIONS.map((item, idx) => {
            const delays = ['delay-75', 'delay-150', 'delay-225', 'delay-300', 'delay-375', 'delay-450'];
            return (
              <div
                key={idx}
                className={`reveal-on-scroll ${delays[idx % delays.length]} p-6 sm:p-7 rounded-lg bg-[#141619] border border-[#26292E] hover:border-[#FF5500]/50 transition-all duration-200 flex flex-col justify-between space-y-5 group`}
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-tech text-[#FF5500] uppercase font-bold tracking-widest">
                      {item.category}
                    </span>
                    <span className="font-tech text-xl font-black text-[#26292E] group-hover:text-[#FF5500]/40 transition-colors select-none">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-editorial font-bold text-lg sm:text-xl text-[#F4F2ED] leading-snug group-hover:text-white transition-colors">
                    {item.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8D949C] leading-relaxed">
                    {item.context}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#26292E]/60 flex items-center justify-between text-[11px] font-tech text-[#8D949C]">
                  <span className="text-[10px] uppercase tracking-wider text-[#8D949C]/80">Fricción del hobby</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]/60 group-hover:bg-[#FF5500] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* The Scattered Reality Banner - Clean Editorial Roster */}
        <div className="reveal-scale delay-150 rounded-xl bg-[#141619] border border-[#26292E] p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-tech text-[#FF5500] uppercase tracking-widest font-bold block">
              La realidad actual del hobby en Colombia
            </span>

            <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-[#F4F2ED] leading-snug">
              Hoy, todo esto está repartido entre:
            </h3>

            {/* Channels Roster */}
            <div className="flex flex-wrap gap-2 pt-1">
              {SCATTERED_CHANNELS.map((channel, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded text-xs font-tech bg-[#0E1012] border border-[#26292E] text-[#C8C4BC]"
                >
                  {channel}
                </span>
              ))}
            </div>

            {/* Connecting Bridge */}
            <div className="pt-6 border-t border-[#26292E] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-editorial text-xl sm:text-2xl font-bold text-[#F4F2ED]">
                  ZONA RC nace para empezar a conectar todo eso.
                </p>
                <p className="text-xs sm:text-sm text-[#8D949C] mt-1">
                  Todo lo que hoy está repartido podría empezar a estar reunido en un mismo lugar.
                </p>
              </div>

              <a
                href="#que-construimos"
                className="inline-flex items-center gap-2 text-xs font-tech text-[#FF5500] hover:text-white uppercase tracking-wider font-bold transition-colors shrink-0"
              >
                <span>Conoce los 4 pilares</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
