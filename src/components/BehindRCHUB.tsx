import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/573132233304?text=Hola%2C%20Camilo.%20Me%20gustar%C3%ADa%20hablar%20contigo%20sobre%20el%20proyecto%20ZONA%20RC.';

export const BehindRCHUB: React.FC = () => {
  return (
    <section
      id="detras-de-rchub"
      className="py-20 lg:py-28 bg-[#101214] text-[#F4F2ED] border-b border-[#26292E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="reveal-on-scroll inline-flex items-center gap-2.5 px-3 py-1 rounded bg-[#17191C] border border-[#26292E] mb-8">
          <span className="inline-flex h-2.5 w-4 rounded-2xs overflow-hidden opacity-90">
            <span className="w-1/2 bg-[#FCD116]" />
            <span className="w-1/4 bg-[#003893]" />
            <span className="w-1/4 bg-[#CE1126]" />
          </span>
          <span className="text-[11px] font-tech text-[#C65D2E] uppercase tracking-widest font-bold">
            Detrás de ZONA RC <span className="text-[#8D949C] text-[10px]">COL</span>
          </span>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column (5 cols): Authentic Photo of Camilo in workshop tuning his MN82 crawler */}
          <div className="reveal-scale delay-75 lg:col-span-5 flex flex-col">
            <div className="relative rounded-lg overflow-hidden border border-[#26292E] bg-[#17191C] flex-1 flex flex-col justify-between group min-h-[460px] sm:min-h-[520px]">
              {/* Photo of Camilo at his workbench */}
              <div className="relative w-full h-full min-h-[400px] bg-[#101214] overflow-hidden">
                <img
                  src="/images/camilo-mn82-workshop.jpg"
                  alt="Camilo López Romero en su taller ajustando su crawler MN82 Toyota Land Cruiser LC79"
                  className="w-full h-full object-cover object-center filter contrast-[1.02]"
                />
                {/* Gradient Scrim for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101214] via-[#101214]/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#101214]/20 via-transparent to-transparent" />

                {/* Technical MN82 Crawler Tag */}
                <div className="absolute top-4 right-4 z-10 rounded-md overflow-hidden border border-[#26292E] bg-[#101214]/90 backdrop-blur-md px-3 py-1.5 shadow-xl flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C65D2E] animate-pulse" />
                  <div className="text-[10px] font-tech text-[#8D949C] leading-tight">
                    <span className="block font-bold text-[#F4F2ED]">MN82 Crawler · LC79</span>
                    <span className="text-[#C65D2E]">En banco de trabajo</span>
                  </div>
                </div>

                {/* Handwritten Slogan Overlay: "RC es más que un hobby." */}
                <div className="absolute bottom-5 left-5 sm:left-6 z-10 select-none">
                  <div className="inline-block transform -rotate-1">
                    <p className="font-handwritten text-3xl sm:text-4xl text-[#F4F2ED] leading-[1.1] drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                      <span className="text-[#C65D2E]">RC</span><br />
                      es más que<br />
                      un hobby.
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
              </div>

              {/* Discrete CREADOR badge with Colombian micro-accent */}
              <div className="relative z-10 px-4 py-2.5 bg-[#101214] border-t border-[#26292E] flex items-center justify-between text-xs font-tech text-[#8D949C]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="truncate text-[#F4F2ED] font-medium">Camilo López Romero</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-2 w-3.5 rounded-xs overflow-hidden opacity-90">
                    <span className="w-1/2 bg-[#FCD116]" />
                    <span className="w-1/4 bg-[#003893]" />
                    <span className="w-1/4 bg-[#CE1126]" />
                  </span>
                  <span className="text-[10px] font-tech text-[#C65D2E] font-bold uppercase tracking-wider">
                    CREADOR
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column (4 cols): Human & Authentic Presentation Copy */}
          <div className="reveal-on-scroll delay-150 lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial font-bold text-[#F4F2ED] leading-tight tracking-tight">
                Hola, soy Camilo López Romero.
              </h2>

              <p className="text-xs sm:text-sm font-tech text-[#C65D2E] uppercase tracking-wider font-semibold">
                Aficionado al radio control y creador de ZONA RC COL.
              </p>

              <div className="space-y-3.5 text-xs sm:text-sm text-[#8D949C] leading-relaxed">
                <p>
                  Vivo este hobby desde adentro: desarmando diferenciales, probando mejoras en mi crawler <strong className="text-[#F4F2ED] font-semibold">MN82</strong>, buscando repuestos compatibles y compartiendo con otros pilotos en trochas y pistas.
                </p>
                <p>
                  Sé de primera mano lo que cuesta conseguir una pieza exacta en Colombia, organizar una rodada o comprar y vender un carro sin desconfianza. Por eso nace <strong className="text-[#F4F2ED] font-semibold">ZONA RC</strong>: uno de nosotros intentando construir algo que de verdad nos sirva a todos.
                </p>
                <p>
                  Esto no es una empresa lejana ni una startup corporativa. Es un punto de encuentro pensado por y para la comunidad del radio control en Colombia.
                </p>

                <div className="pt-2 border-t border-[#26292E] space-y-2 text-[#C8C4BC]">
                  <p className="font-semibold text-xs text-[#F4F2ED]">
                    Ya sea que ruedes crawler, buggy, drift, touring, vueles aviones o drones, o tengas una tienda de repuestos:
                  </p>
                  <p className="font-editorial text-base text-[#C65D2E] italic">
                    Quiero escucharte personalmente para que construyamos ZONA RC juntos.
                  </p>
                </div>
              </div>
            </div>

            {/* Micro specs */}
            <div className="pt-4 border-t border-[#26292E] flex items-center gap-4 text-[11px] font-tech text-[#8D949C]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Comunidad activa en Colombia</span>
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
                Creador de ZONA RC COL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
