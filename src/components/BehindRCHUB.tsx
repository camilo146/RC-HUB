import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/573132233304?text=Hola%2C%20Camilo.%20Me%20gustar%C3%ADa%20hablar%20contigo%20sobre%20el%20proyecto%20ZONA%20RC.';

export const BehindRCHUB: React.FC = () => {
  return (
    <section
      id="detras-de-rchub"
      className="relative overflow-hidden py-20 lg:py-28 bg-[#0E1012] text-[#F4F2ED] border-b border-[#26292E]"
    >
      {/* Subtle workshop background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src="/images/camilo-mn82-workshop.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-[0.10]" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1012] via-[#0E1012]/80 to-[#0E1012]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="reveal-on-scroll inline-flex items-center gap-2.5 px-3 py-1 rounded bg-[#17191C] border border-[#26292E] mb-8">
          <img
            src="/images/colombia-brush-flag.png"
            alt="Bandera Colombia pincelazo"
            className="h-3.5 w-6 object-contain -rotate-3"
          />
          <span className="text-[11px] font-tech text-[#FF5500] uppercase tracking-widest font-bold">
            Detrás de ZONA RC <span className="text-[#8D949C] text-[10px]">COL</span>
          </span>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column (5 cols): Authentic Photo of Camilo & his upgraded MN82 crawler */}
          <div className="reveal-scale delay-75 lg:col-span-5 flex flex-col">
            <div className="relative rounded-lg overflow-hidden border border-[#26292E] bg-[#17191C] flex-1 flex flex-col justify-between group min-h-[460px] sm:min-h-[520px]">
              {/* Photo of Camilo with clean studio background */}
              <div className="relative w-full h-full min-h-[400px] bg-[#101214] overflow-hidden">
                <img
                  src="/images/camilo-portrait-clean.jpg"
                  alt="Camilo López Romero, creador de ZONA RC COL"
                  className="w-full h-full object-cover object-top filter contrast-[1.03]"
                />
                {/* Gradient Scrim for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101214] via-[#101214]/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#101214]/20 via-transparent to-transparent" />

                {/* Inset Photo Card: Camilo's actual upgraded Toyota Land Cruiser LC79 MN82 Crawler */}
                <div className="absolute bottom-16 right-4 sm:right-6 w-36 sm:w-44 rounded-lg overflow-hidden border border-[#26292E] bg-[#101214]/95 shadow-2xl backdrop-blur-md p-1.5 transition-transform duration-300 hover:scale-105 z-20">
                  <div className="relative aspect-[4/3] rounded overflow-hidden">
                    <img
                      src="/images/camilo-mn82-pro.jpg"
                      alt="MN82 Toyota Land Cruiser LC79 Crawler de Camilo López Romero con llantas trail y defensa off-road"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="pt-1.5 px-1 text-[9px] font-tech text-[#8D949C] leading-tight">
                    <span className="block font-bold text-[#F4F2ED] truncate">Toyota LC79 · MN82</span>
                    <span className="text-[#FF5500]">Mi crawler con llantas trail</span>
                  </div>
                </div>

                {/* Handwritten Slogan Overlay: "RC es más que un hobby." */}
                <div className="absolute bottom-5 left-5 sm:left-6 z-10 select-none">
                  <div className="inline-block transform -rotate-1">
                    <p className="font-handwritten text-3xl sm:text-4xl text-[#F4F2ED] leading-[1.1] drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                      <span className="text-[#FF5500]">RC</span><br />
                      es más que<br />
                      un hobby.
                    </p>
                    {/* Organic hand-drawn orange underline */}
                    <svg
                      className="w-36 sm:w-44 h-4 text-[#FF5500] mt-1 -ml-1 drop-shadow-sm"
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
              </div>

              {/* Discrete CREADOR badge with Colombian brush stroke */}
              <div className="relative z-10 px-4 py-2.5 bg-[#101214] border-t border-[#26292E] flex items-center justify-between text-xs font-tech text-[#8D949C]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="truncate text-[#F4F2ED] font-medium">Camilo López Romero</span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/images/colombia-brush-flag.png"
                    alt="Colombia"
                    className="h-3.5 w-6 object-contain -rotate-3"
                  />
                  <span className="text-[10px] font-tech text-[#FF5500] font-bold uppercase tracking-wider">
                    CREADOR DE ZONA RC COL
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column (4 cols): Human & Authentic Presentation Copy */}
          <div className="reveal-on-scroll delay-150 lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display italic font-black uppercase text-[#F4F2ED] leading-tight tracking-tight">
                Hola, soy <span className="text-[#FF5500]">Camilo López Romero.</span>
              </h2>

              <p className="text-xs sm:text-sm font-tech text-[#FF5500] uppercase tracking-wider font-semibold">
                Creador de ZONA RC COL.
              </p>

              <div className="space-y-3.5 text-xs sm:text-sm text-[#8D949C] leading-relaxed">
                <p>
                  No llevo décadas en el radio control ni pretendo presentarme como un veterano de toda la vida. Entré a este hobby con mi crawler <strong className="text-[#F4F2ED] font-semibold">MN82</strong>; me apasionó de inmediato, disfruto cada modificación y desde el primer día quise aprenderlo todo.
                </p>
                <p>
                  Al vivir el hobby en carne propia me encontré con lo mismo que muchos vivimos: una afición increíble pero <strong className="text-[#F4F2ED] font-semibold">muy fragmentada</strong> entre chats, grupos y publicaciones temporales.
                </p>
                <p>
                  <strong className="text-[#F4F2ED] font-semibold">ZONA RC nace de una idea sencilla:</strong> ¿qué pasaría si tuviéramos un espacio pensado específicamente para nuestra comunidad?
                </p>
                <p>
                  No tengo todas las respuestas. Por eso quiero construirlo escuchando a la comunidad: reuniendo personas, lugares, proyectos y oportunidades para que disfrutar del radio control sea mucho más fácil para todos.
                </p>

                <div className="pt-2 border-t border-[#26292E] space-y-2 text-[#C8C4BC]">
                  <p className="font-semibold text-xs text-[#F4F2ED]">
                    Ya sea que lleves años en esto o apenas estés empezando como yo:
                  </p>
                  <p className="font-editorial text-base text-[#FF5500] italic">
                    Conversemos directamente y construyamos ZONA RC juntos.
                  </p>
                </div>
              </div>
            </div>

            {/* Micro specs */}
            <div className="pt-4 border-t border-[#26292E] flex items-center gap-4 text-[11px] font-tech text-[#8D949C]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Construido junto a la comunidad</span>
              </span>
              <span>·</span>
              <span>Bucaramanga, Santander</span>
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
                className="w-full flex items-center justify-between p-3.5 rounded-md bg-[#101214] border border-[#26292E] hover:border-[#FF5500] group transition-all cursor-pointer shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500] group-hover:bg-[#FF5500] group-hover:text-white transition-colors">
                    <MessageCircle className="w-4 h-4" />
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
                <ArrowRight className="w-4 h-4 text-[#8D949C] group-hover:text-[#FF5500] group-hover:translate-x-0.5 transition-all" />
              </a>

              <div className="text-center pt-1 space-y-1">
                <p className="text-xs font-tech text-[#F4F2ED] font-semibold">
                  +57 313 223 3304
                </p>
                <p className="text-[11px] font-handwritten text-[#FF5500] text-base">
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
                className="w-28 h-3 text-[#FF5500] mx-auto mt-0.5"
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
                Creador de ZONA RC COL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
