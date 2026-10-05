import React from 'react';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/573132233304?text=Hola%2C%20Camilo.%20Me%20gustar%C3%ADa%20hablar%20contigo%20sobre%20el%20proyecto%20BOX%20HUB.';

export const BehindRCHUB: React.FC = () => {
  return (
    <section
      id="detras-de-rchub"
      className="py-20 lg:py-28 bg-[#101214] text-[#F4F2ED] border-b border-[#26292E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="reveal-on-scroll inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#17191C] border border-[#26292E] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C65D2E]" />
          <span className="text-[11px] font-tech text-[#C65D2E] uppercase tracking-widest font-semibold">
            Detrás de BOX HUB
          </span>
        </div>

        {/* 3-Column Editorial Grid matching mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column (5 cols): Cinematic Photo with Handwritten Slogan */}
          <div className="reveal-scale delay-75 lg:col-span-5 flex flex-col">
            <div className="relative rounded-lg overflow-hidden border border-[#26292E] bg-[#17191C] flex-1 flex flex-col justify-end group min-h-[380px] sm:min-h-[460px]">
              {/* Background Photo */}
              <img
                src="/images/camilo-workshop.jpg"
                alt="Camilo López Romero en su taller de radiocontrol con su Toyota Land Cruiser 70 Crawler Pro y buzo BOX HUB"
                className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.04] transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Scrim for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101214] via-[#101214]/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#101214]/50 via-transparent to-transparent" />

              {/* Handwritten Slogan Overlay: "RC Es más que un hobby..." */}
              <div className="relative z-10 p-6 sm:p-8 select-none">
                <div className="inline-block transform -rotate-1">
                  <p className="font-handwritten text-3xl sm:text-4xl text-[#F4F2ED] leading-[1.15] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    RC<br />
                    Es más que<br />
                    un hobby...
                  </p>
                  {/* Organic hand-drawn orange underline */}
                  <svg
                    className="w-36 sm:w-44 h-4 text-[#C65D2E] mt-1 -ml-1 drop-shadow-sm"
                    viewBox="0 0 160 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 11C45 4 110 3 157 12"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Discreet badge indicating AI conceptual image */}
              <div className="relative z-10 px-4 py-2.5 bg-[#101214]/90 backdrop-blur-sm border-t border-[#26292E] flex items-center justify-between text-xs font-tech text-[#8D949C]">
                <span className="truncate">Camilo & Toyota LC79 Crawler</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#17191C] border border-[#26292E] text-[10px] text-[#C65D2E] font-semibold uppercase tracking-wider shrink-0 ml-2">
                  <Sparkles className="w-3 h-3 text-[#C65D2E]" />
                  <span>Retrato conceptual en taller</span>
                </span>
              </div>
            </div>
          </div>

          {/* Middle Column (4 cols): Human & Authentic Presentation Copy */}
          <div className="reveal-on-scroll delay-150 lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial font-bold text-[#F4F2ED] leading-tight tracking-tight">
                Hola, soy Camilo.
              </h2>

              <p className="text-xs sm:text-sm font-tech text-[#C65D2E] uppercase tracking-wider font-semibold">
                Aficionado al radio control y creador independiente de BOX HUB.
              </p>

              <div className="space-y-3.5 text-xs sm:text-sm text-[#8D949C] leading-relaxed">
                <p>
                  Y estoy construyendo <strong className="text-[#F4F2ED] font-semibold">BOX HUB</strong> porque creo que el mundo RC en Colombia puede estar mucho más conectado.
                </p>
                <p>
                  La comunidad ya existe. Hay personas, vehículos, tiendas, clubes, pistas, eventos y muchísimo conocimiento.
                </p>
                <p>
                  Lo que falta es un lugar que conecte todo eso. Eso es lo que quiero construir con BOX HUB, y quiero hacerlo escuchando a quienes realmente viven este hobby.
                </p>

                <div className="pt-2 border-t border-[#26292E] space-y-2 text-[#C8C4BC]">
                  <p className="font-semibold text-xs text-[#F4F2ED]">
                    ¿Tienes un RC? ¿Vendes repuestos? ¿Tienes una tienda? ¿Organizas encuentros? ¿O simplemente te apasiona este mundo?
                  </p>
                  <p className="font-editorial text-base text-[#C65D2E] italic">
                    Quiero escucharte.
                  </p>
                </div>
              </div>
            </div>

            {/* Micro specs */}
            <div className="pt-4 border-t border-[#26292E] flex items-center gap-4 text-[11px] font-tech text-[#8D949C]">
              <span>Iniciativa independiente</span>
              <span>·</span>
              <span>Bucaramanga, Colombia</span>
            </div>
          </div>

          {/* Right Column (3 cols): Contact Card & Handwritten "¡Hablemos!" */}
          <div className="reveal-on-scroll delay-225 hover-lift lg:col-span-3 flex flex-col justify-between p-6 rounded-lg bg-[#17191C] border border-[#26292E] space-y-6">
            {/* Top WhatsApp Box */}
            <div className="space-y-3">
              <span className="text-[11px] font-tech text-[#8D949C] uppercase tracking-wider block">
                Conversación directa
              </span>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-whatsapp-behind"
                className="animate-attention-wiggle w-full flex items-center justify-between p-3.5 rounded-md bg-[#101214] border border-[#26292E] hover:border-[#C65D2E] group transition-all cursor-pointer shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-full bg-[#C65D2E]/20 border border-[#C65D2E]/40 flex items-center justify-center text-[#C65D2E] group-hover:bg-[#C65D2E] group-hover:text-white transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-semibold text-[#F4F2ED] group-hover:text-white">
                      Hablemos
                    </span>
                    <span className="block text-[10px] font-tech text-[#8D949C]">
                      por WhatsApp
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8D949C] group-hover:text-[#C65D2E] group-hover:translate-x-0.5 transition-all" />
              </a>

              <div className="text-center pt-1 space-y-1">
                <p className="text-xs font-tech text-[#F4F2ED] font-semibold">
                  +57 313 223 3304
                </p>
                <p className="text-[11px] font-handwritten text-[#C65D2E] text-base">
                  «Respondo personalmente todos los mensajes»
                </p>
              </div>
            </div>

            {/* Center: Handwritten "¡Hablemos!" element matching the mockup */}
            <div className="py-4 text-center select-none">
              <span className="font-handwritten text-4xl sm:text-5xl text-[#F4F2ED] tracking-wide inline-block transform -rotate-2">
                ¡Hablemos!
              </span>
              <svg
                className="w-28 h-3 text-[#C65D2E] mx-auto mt-0.5"
                viewBox="0 0 110 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8C35 3 75 3 107 9"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Bottom: Signature info */}
            <div className="pt-4 border-t border-[#26292E] text-center sm:text-left space-y-1">
              <strong className="block text-sm font-editorial font-bold text-[#F4F2ED]">
                Camilo López Romero
              </strong>
              <span className="block text-xs font-tech text-[#8D949C]">
                Creador de BOX HUB
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
