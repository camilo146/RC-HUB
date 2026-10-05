import React, { useState } from 'react';
import { MessageCircle, ArrowRight, Eye, X } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/573132233304?text=Hola%2C%20Camilo.%20Conoc%C3%AD%20BOX%20HUB%20y%20me%20gustar%C3%ADa%20compartir%20algunas%20ideas%20sobre%20el%20proyecto.';

export const BehindRCHUB: React.FC = () => {
  const [showOriginalsModal, setShowOriginalsModal] = useState(false);

  return (
    <section
      id="detras-de-rchub"
      className="py-20 lg:py-28 bg-[#101214] text-[#F4F2ED] border-b border-[#26292E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#17191C] border border-[#26292E] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C65D2E]" />
          <span className="text-[11px] font-tech text-[#C65D2E] uppercase tracking-widest font-semibold">
            Detrás de BOX HUB
          </span>
        </div>

        {/* 3-Column Editorial Grid matching mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column (5 cols): Cinematic Photo with Handwritten Slogan */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-lg overflow-hidden border border-[#26292E] bg-[#17191C] flex-1 flex flex-col justify-end group min-h-[380px] sm:min-h-[460px]">
              {/* Background Photo */}
              <img
                src="/images/camilo-workshop.jpg"
                alt="Camilo López Romero en su taller de radiocontrol con su Toyota Land Cruiser 70 Crawler Pro y buzo BOX HUB"
                className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.04]"
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

              {/* Discreet badge with Camilo's actual vehicle */}
              <div className="relative z-10 px-5 py-2.5 bg-[#101214]/90 backdrop-blur-sm border-t border-[#26292E] flex items-center justify-between text-xs font-tech text-[#8D949C]">
                <span className="truncate">Camilo & Toyota LC79 Pro Crawler Escala 1/10</span>
                <button
                  onClick={() => setShowOriginalsModal(true)}
                  className="inline-flex items-center gap-1 text-[#C65D2E] hover:text-[#F4F2ED] transition-colors cursor-pointer shrink-0 ml-2"
                  title="Ver fotos reales de referencia"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span className="text-[10px] uppercase font-bold">Ver fotos reales</span>
                </button>
              </div>
            </div>
          </div>

          {/* Middle Column (4 cols): Presentation Copy */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial font-bold text-[#F4F2ED] leading-tight tracking-tight">
                Hola, soy Camilo López Romero.
              </h2>

              <p className="text-xs sm:text-sm font-tech text-[#C65D2E] uppercase tracking-wider font-semibold">
                Apasionado por el mundo RC y creador de BOX HUB.
              </p>

              <div className="space-y-3.5 text-xs sm:text-sm text-[#8D949C] leading-relaxed">
                <p>
                  Creo que el radio control es mucho más que tener un vehículo. Es aprender, experimentar, poner a prueba nuestras habilidades y compartir una pasión con otras personas.
                </p>
                <p>
                  Por eso estoy desarrollando <strong className="text-[#F4F2ED] font-semibold">BOX HUB</strong>: un proyecto que busca conectar a los aficionados RC en Colombia y facilitar la forma en que encontramos vehículos, repuestos, herramientas para organizar nuestras colecciones y espacios para descubrir la comunidad.
                </p>
                <p>
                  La idea apenas está tomando forma y quiero construirla escuchando a quienes realmente viven este hobby. No quiero decidir por mi cuenta qué necesita la comunidad; quiero conversar con ustedes, conocer sus experiencias y descubrir qué herramientas serían verdaderamente útiles.
                </p>
                <p>
                  Si te apasiona el mundo RC, tienes una tienda, participas en carreras o simplemente quieres compartir una idea, me encantaría escucharte.
                </p>
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
          <div className="lg:col-span-3 flex flex-col justify-between p-6 rounded-lg bg-[#17191C] border border-[#26292E] space-y-6">
            {/* Top WhatsApp Box */}
            <div className="space-y-3">
              <span className="text-[11px] font-tech text-[#8D949C] uppercase tracking-wider block">
                Contacto directo
              </span>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-whatsapp-behind"
                className="w-full flex items-center justify-between p-3.5 rounded-md bg-[#101214] border border-[#26292E] hover:border-[#C65D2E] group transition-all cursor-pointer shadow-sm"
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
                      Charla conmigo
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

      {/* Modal: View original user reference photos */}
      {showOriginalsModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowOriginalsModal(false)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#101214] border border-[#26292E] rounded-lg p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#26292E]">
              <div>
                <h3 className="font-editorial font-bold text-lg text-[#F4F2ED]">
                  Fotografías de Referencia Auténtica
                </h3>
                <p className="text-xs font-tech text-[#8D949C]">
                  Camilo López Romero y su Toyota Land Cruiser LC79 RC Crawler personal
                </p>
              </div>
              <button
                onClick={() => setShowOriginalsModal(false)}
                className="p-1.5 rounded-md hover:bg-[#17191C] text-[#8D949C] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="aspect-[3/4] rounded-md overflow-hidden border border-[#26292E] bg-[#17191C]">
                  <img
                    src="/images/camilo-portrait.jpg"
                    alt="Camilo López Romero retrato original"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[11px] font-tech text-[#8D949C] text-center">
                  Camilo López Romero (Fundador)
                </p>
              </div>

              <div className="space-y-2">
                <div className="aspect-[3/4] rounded-md overflow-hidden border border-[#26292E] bg-[#17191C]">
                  <img
                    src="/images/camilo-rc-car.png"
                    alt="Toyota Land Cruiser LC79 RC Crawler de Camilo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[11px] font-tech text-[#8D949C] text-center">
                  Toyota Land Cruiser 70 Series RC Crawler (Vehículo personal)
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
