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
        <div className="reveal-on-scroll inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#17191C] border border-[#26292E] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C65D2E]" />
          <span className="text-[11px] font-tech text-[#C65D2E] uppercase tracking-widest font-semibold">
            Detrás de ZONA RC <span className="text-[#8D949C] text-[10px]">COL</span>
          </span>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column (5 cols): Authentic Real Photo of Camilo & his actual RC crawler */}
          <div className="reveal-scale delay-75 lg:col-span-5 flex flex-col">
            <div className="relative rounded-lg overflow-hidden border border-[#26292E] bg-[#17191C] flex-1 flex flex-col justify-between group min-h-[440px] sm:min-h-[500px]">
              {/* Authentic Photo of Camilo */}
              <div className="relative w-full h-full min-h-[380px] bg-[#101214] overflow-hidden">
                <img
                  src="/images/camilo-portrait.jpg"
                  alt="Camilo López Romero, aficionado al radio control y fundador de ZONA RC Colombia"
                  className="w-full h-full object-cover object-top filter contrast-[1.03]"
                />
                {/* Gradient Scrim for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101214] via-[#101214]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#101214]/30 via-transparent to-transparent" />

                {/* Inset Photo Card: Camilo's actual Toyota Land Cruiser LC70 RC Car */}
                <div className="absolute bottom-16 right-4 sm:right-6 w-32 sm:w-40 rounded-lg overflow-hidden border border-[#26292E] bg-[#101214]/95 shadow-2xl backdrop-blur-md p-1.5 transition-transform duration-300 hover:scale-105">
                  <div className="relative aspect-[4/3] rounded overflow-hidden">
                    <img
                      src="/images/camilo-rc-car-2.jpg"
                      alt="Toyota Land Cruiser LC70 RC Crawler de Camilo López Romero"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="pt-1.5 px-1 text-[9px] font-tech text-[#8D949C] leading-tight">
                    <span className="block font-bold text-[#F4F2ED] truncate">Toyota LC70 Crawler</span>
                    <span className="text-[#C65D2E]">Mi carro RC actual</span>
                  </div>
                </div>

                {/* Handwritten Slogan Overlay: "RC Es más que un hobby..." */}
                <div className="absolute bottom-5 left-5 sm:left-6 z-10 select-none">
                  <div className="inline-block transform -rotate-1">
                    <p className="font-handwritten text-3xl sm:text-4xl text-[#F4F2ED] leading-[1.1] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
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
              </div>

              {/* Verified authentic founder badge */}
              <div className="relative z-10 px-4 py-2.5 bg-[#101214] border-t border-[#26292E] flex items-center justify-between text-xs font-tech text-[#8D949C]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="truncate text-[#F4F2ED] font-medium">Camilo López Romero</span>
                </div>
                <span className="text-[10px] text-[#C65D2E] font-semibold uppercase tracking-wider">
                  Foto real del creador
                </span>
              </div>
            </div>
          </div>

          {/* Middle Column (4 cols): Human & Authentic Presentation Copy (Persona -> Hobby -> Comunidad -> Proyecto) */}
          <div className="reveal-on-scroll delay-150 lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial font-bold text-[#F4F2ED] leading-tight tracking-tight">
                Hola, soy Camilo López Romero.
              </h2>

              <p className="text-xs sm:text-sm font-tech text-[#C65D2E] uppercase tracking-wider font-semibold">
                Aficionado al radio control y creador independiente de ZONA RC.
              </p>

              <div className="space-y-3.5 text-xs sm:text-sm text-[#8D949C] leading-relaxed">
                <p>
                  Y estoy construyendo <strong className="text-[#F4F2ED] font-semibold">ZONA RC</strong> porque creo que el mundo del radio control en Colombia merece su propio espacio, creado por alguien que de verdad vive y rueda en este hobby.
                </p>
                <p>
                  Esto no nació en una oficina corporativa ni como una empresa lejana. Nació desarmando diferenciales en la mesa de la casa, buscando repuestos que no llegaban y conociendo a otros apasionados por las trochas, las pistas y los circuitos.
                </p>
                <p>
                  La pasión y el conocimiento ya están en Colombia. Lo que falta es un punto de encuentro que nos conecte a todos: repuestos compatibles, compra y venta segura, pistas activas y amigos con quienes compartir cada fin de semana.
                </p>

                <div className="pt-2 border-t border-[#26292E] space-y-2 text-[#C8C4BC]">
                  <p className="font-semibold text-xs text-[#F4F2ED]">
                    ¿Tienes un crawler, buggy, drift, avión o drone? ¿Vendes partes o tienes una tienda? ¿O apenas estás entrando al hobby?
                  </p>
                  <p className="font-editorial text-base text-[#C65D2E] italic">
                    Quiero escucharte personalmente para construir algo que de verdad nos sirva.
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
                Creador de ZONA RC COL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
