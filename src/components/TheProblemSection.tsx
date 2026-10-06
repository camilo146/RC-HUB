import React from 'react';
import { HelpCircle, ArrowRight, Layers } from 'lucide-react';

const QUESTIONS = [
  {
    question: '“¿Dónde encuentro ese repuesto?”',
    context: 'Se te rompió un brazo o necesitas un engranaje y tienes que preguntar en diez chats distintos a ver quién lo tiene disponible en el país.',
    category: 'Repuestos & Partes',
  },
  {
    question: '“¿Ese componente será compatible con mi RC?”',
    context: 'Dudas sobre si una batería cabe en la bandeja, si el piñón tiene el pitch correcto o si el combo brushless es adecuado para tu chasis.',
    category: 'Mecánica & Compatibilidad',
  },
  {
    question: '“¿Dónde puedo vender mi vehículo con confianza?”',
    context: 'Publicar en plataformas genéricas se llena de regateos, desinformación o desconfianza sobre el estado real del carro y su electrónica.',
    category: 'Compra & Venta',
  },
  {
    question: '“¿Dónde hay una pista o un encuentro?”',
    context: 'Quieres salir a rodar el fin de semana pero enterarte de circuitos activos, rutas de crawler o carreras depende únicamente del boca a boca.',
    category: 'Pistas & Eventos',
  },
  {
    question: '“¿Cómo llevo el historial de mis vehículos?”',
    context: 'Qué silicona pusiste en los amortiguadores, qué modificaciones hiciste o cuándo lubricaste diferenciales se queda en la memoria.',
    category: 'Garage & Mantenimiento',
  },
  {
    question: '“¿Dónde encuentro gente que comparta este hobby?”',
    context: 'El radio control se disfruta mucho más en compañía, pero a veces ruedas solo porque no conoces a otros pilotos en tu misma ciudad.',
    category: 'Comunidad & Amigos',
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
    <section id="el-problema" className="py-20 lg:py-28 bg-[#101214] text-[#F4F2ED] border-b border-[#26292E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="max-w-3xl mb-14 reveal-on-scroll">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-tech text-[#C65D2E] uppercase tracking-widest font-semibold">
              Lo que vivimos los aficionados
            </span>
            <span className="font-handwritten text-xl text-[#C65D2E] -rotate-1 select-none">
              — ¿te ha pasado esto?
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#F4F2ED] leading-[1.15] tracking-tight">
            Disfrutar del radio control no debería ser tan difícil.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8D949C] leading-relaxed">
            El radio control es una pasión increíble, pero hoy la información, los repuestos y los pilotos estamos dispersos. Cada aficionado en Colombia se ha hecho estas mismas preguntas:
          </p>
        </div>

        {/* 6 Everyday Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {QUESTIONS.map((item, idx) => {
            const delays = ['delay-75', 'delay-150', 'delay-225', 'delay-300', 'delay-375', 'delay-450'];
            return (
              <div
                key={idx}
                className={`reveal-on-scroll ${delays[idx % delays.length]} hover-lift p-6 rounded-lg bg-[#17191C] border border-[#26292E] hover:border-[#C65D2E]/60 transition-all duration-200 flex flex-col justify-between space-y-4 group`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-tech">
                    <span className="text-[#C65D2E] uppercase font-bold tracking-wider">
                      {item.category}
                    </span>
                    <HelpCircle className="w-4 h-4 text-[#8D949C] group-hover:text-[#C65D2E] transition-colors" />
                  </div>
                  <h3 className="font-editorial font-bold text-lg sm:text-xl text-[#F4F2ED] leading-snug group-hover:text-white transition-colors">
                    {item.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8D949C] leading-relaxed">
                    {item.context}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#26292E] flex items-center justify-between text-[11px] font-tech text-[#8D949C]">
                  <span>Situación recurrente</span>
                  <span className="text-[#C65D2E] font-medium">#{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Scattered Reality Banner */}
        <div className="reveal-scale delay-150 rounded-xl bg-[#17191C]/70 border border-[#26292E] p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-tech text-[#8D949C] uppercase tracking-wider font-semibold">
              <Layers className="w-4 h-4 text-[#C65D2E]" />
              <span>La realidad actual del hobby</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-[#F4F2ED] leading-snug">
              Hoy, toda esta información está repartida entre:
            </h3>

            {/* Channels Chips */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {SCATTERED_CHANNELS.map((channel, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-full text-xs font-tech bg-[#101214] border border-[#26292E] text-[#8D949C] hover:text-[#F4F2ED] hover:border-[#8D949C]/60 transition-colors"
                >
                  {channel}
                </span>
              ))}
            </div>

            {/* Connecting Bridge */}
            <div className="pt-6 border-t border-[#26292E] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-editorial text-xl sm:text-2xl font-bold text-[#F4F2ED]">
                  ZONA RC nace para conectar todo esto.
                </p>
                <p className="text-xs sm:text-sm text-[#8D949C] mt-1">
                  Un solo espacio pensado exclusivamente para el radio control en Colombia.
                </p>
              </div>

              <a
                href="#que-construimos"
                className="inline-flex items-center gap-2 text-xs font-tech text-[#C65D2E] hover:text-white uppercase tracking-wider font-bold transition-colors shrink-0"
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
