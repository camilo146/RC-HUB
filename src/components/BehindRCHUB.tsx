import React from 'react';
import { MessageCircle, ArrowUpRight, Wrench, Users, Compass } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/573132233304?text=Hola%2C%20Camilo.%20Conoc%C3%AD%20RC%20HUB%20y%20me%20gustar%C3%ADa%20conversar%20contigo%20sobre%20el%20proyecto%20y%20compartir%20algunas%20ideas.';

const motivations = [
  {
    icon: Wrench,
    label: 'El problema técnico',
    text: 'Buscar repuestos compatibles con un chasis específico en Colombia es frustrante. Quiero que esa información sea accesible, clara y confiable.',
  },
  {
    icon: Users,
    label: 'La comunidad dispersa',
    text: 'Los pilotos, preparadores y organizadores merecen un lugar común. Las conversaciones aisladas en grupos de chat no son suficientes.',
  },
  {
    icon: Compass,
    label: 'El hobby que me apasiona',
    text: 'Llevo años disfrutando el radio control. Quiero construir la plataforma que me hubiera gustado tener desde el principio.',
  },
];

export const BehindRCHUB: React.FC = () => {
  return (
    <section
      id="detras-de-rchub"
      className="py-20 lg:py-28 bg-[#F4F2ED] text-[#17191C] border-b border-[#D9D8D3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <span className="text-xs font-tech text-[#C65D2E] uppercase tracking-widest font-semibold block mb-3">
          El creador del proyecto
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: identity card */}
          <div className="lg:col-span-4">
            {/* Identity block — no invented photo */}
            <div className="p-6 rounded-lg bg-white border border-[#D9D8D3] space-y-5">
              {/* Avatar placeholder with initials */}
              <div className="w-16 h-16 rounded-md bg-[#17191C] flex items-center justify-center">
                <span className="font-editorial font-bold text-xl text-[#F4F2ED] tracking-tight select-none">
                  CL
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-editorial font-bold text-xl text-[#17191C] leading-tight">
                  Camilo López Romero
                </h3>
                <p className="text-xs font-tech text-[#C65D2E] uppercase tracking-wider font-semibold">
                  Fundador · RC HUB
                </p>
              </div>

              <p className="text-sm text-[#555A60] leading-relaxed">
                Aficionado al radio control, desarrollador independiente y persona convencida de que este hobby merece herramientas mucho mejores que las que existen hoy en Colombia.
              </p>

              <div className="pt-2 border-t border-[#F0EFEA] space-y-2 text-xs font-tech text-[#8D949C]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C65D2E]" />
                  <span>Bucaramanga, Colombia</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C65D2E]" />
                  <span>Iniciativa independiente · sin inversión externa</span>
                </div>
              </div>

              {/* Primary contact CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-whatsapp-behind"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md text-sm font-semibold text-white bg-[#17191C] hover:bg-[#101214] border border-[#17191C] transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#C65D2E]" />
                <span>Charla conmigo por WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8D949C]" />
              </a>

              <p className="text-[11px] text-[#8D949C] font-tech text-center">
                +57 313 223 3304 · respondo personalmente
              </p>
            </div>
          </div>

          {/* Right: narrative */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#17191C] leading-[1.15] tracking-tight">
                Detrás de RC HUB.
              </h2>
              <p className="text-base sm:text-lg text-[#555A60] leading-relaxed max-w-2xl">
                RC HUB no surge de un laboratorio de startups ni de un fondo de capital riesgo. Surge de la experiencia directa de alguien que vive el hobby y ha sentido la ausencia de una plataforma especializada.
              </p>
              <p className="text-base text-[#555A60] leading-relaxed max-w-2xl">
                Hoy estoy en la fase más honesta de un proyecto: la validación. Eso significa hablar con las personas que van a usar la plataforma antes de construirla. No quiero decidir por la comunidad qué necesita; quiero escucharla.
              </p>
            </div>

            {/* Motivations grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {motivations.map(({ icon: Icon, label, text }) => (
                <div
                  key={label}
                  className="p-5 rounded-md bg-white border border-[#D9D8D3] space-y-3"
                >
                  <div className="w-8 h-8 rounded-sm bg-[#17191C] flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#C65D2E]" />
                  </div>
                  <h4 className="font-editorial font-bold text-sm text-[#17191C]">{label}</h4>
                  <p className="text-xs text-[#555A60] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            {/* Closing statement + call to people */}
            <div className="p-6 rounded-lg bg-[#17191C] space-y-4">
              <p className="text-sm text-[#C8C4BC] leading-relaxed">
                Si eres aficionado, piloto de competición, vendedor de repuestos, tienda especializada u organizador de una pista en Colombia —y tienes cinco minutos para contarme qué te falta hoy en el mundo RC— me encantaría escucharte.
              </p>
              <p className="text-xs text-[#8D949C] font-tech">
                Cada conversación ayuda a definir qué se construye primero.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-semibold text-[#F4F2ED] bg-[#C65D2E] hover:bg-[#B34F24] transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Charla conmigo por WhatsApp</span>
              </a>
            </div>

            <p className="text-xs text-[#8D949C] font-tech">
              * Tu número no será usado con fines comerciales. Esta es una conversación entre personas interesadas en el mismo hobby.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
