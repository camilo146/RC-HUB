import React, { useState } from 'react';
import { MessageCircle, ArrowRight, ClipboardList, X, Send, Sparkles } from 'lucide-react';
import { ZonaRcLogo } from './ZonaRcLogo';

const WAITLIST_WHATSAPP_URL =
  'https://wa.me/573132233304?text=Hola%2C%20Camilo.%20Quiero%20ser%20parte%20de%20ZONA%20RC%20desde%20el%20comienzo%20y%20enterarme%20antes%20que%20nadie.';
const TALK_WHATSAPP_URL =
  'https://wa.me/573132233304?text=Hola%2C%20Camilo.%20Me%20gustar%C3%ADa%20hablar%20contigo%20y%20compartir%20ideas%20sobre%20ZONA%20RC.';

export const BuildTogetherSection: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [city, setCity] = useState('Bucaramanga');
  const [role, setRole] = useState('Aficionado');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('Compra y venta especializada');
  const [comments, setComments] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola, Camilo! Quiero ser parte de ZONA RC desde el comienzo:
- Nombre: ${name || 'Piloto'}
- Ciudad: ${city}
- Modalidad / Perfil: ${role}
${email ? `- Correo: ${email}\n` : ''}- Lo que más me interesa: ${interest}
${comments ? `- Mi opinión / necesidad: ${comments}` : ''}`;

    const url = `https://wa.me/573132233304?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="relative py-20 lg:py-28 overflow-hidden border-b border-[#26292E] bg-[#101214]">
      {/* Background Cinematic Photo with deep dark gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/community-crawler-bg.jpg"
          alt="RC Crawler 4x4 sobre roca y barro"
          className="w-full h-full object-cover object-center filter contrast-[1.1] brightness-[0.7]"
        />
        {/* Dark film overlay matching design system */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101214] via-[#101214]/90 to-[#101214]/95" />
        <div className="absolute inset-0 bg-[#101214]/50" />
        {/* Subtle AI background note */}
        <div className="absolute bottom-3 left-4 z-10 hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#101214]/80 backdrop-blur-sm border border-[#26292E]/60 text-[10px] font-tech text-[#8D949C]">
          <Sparkles className="w-3 h-3 text-[#FF5500]" />
          <span>Fondo ilustrativo generado con IA</span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center justify-between">
          {/* Left Column: Heading and Community Vision */}
          <div className="reveal-on-scroll lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded bg-[#17191C]/90 border border-[#26292E] backdrop-blur-sm">
              <img
                src="/images/colombia-brush-flag.png"
                alt="Bandera Colombia pincelazo"
                className="h-3.5 w-6 object-contain -rotate-3"
              />
              <span className="text-[11px] font-tech text-[#FF5500] uppercase tracking-widest font-bold">
                Construyamos juntos · Colombia
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display italic font-black uppercase text-[#F4F2ED] leading-[1.05] tracking-tight">
              ZONA RC empieza <span className="text-[#FF5500]">con la comunidad.</span>
            </h2>

            <div className="space-y-3 text-sm sm:text-base text-[#8D949C] leading-relaxed max-w-2xl font-normal">
              <p>
                Esto todavía no es una aplicación terminada. Estamos construyendo el proyecto y queremos hacerlo junto a la comunidad RC colombiana.
              </p>
              <p className="text-[#F4F2ED] font-medium font-editorial text-lg">
                Tu opinión puede cambiar lo que construimos.
              </p>
            </div>

            {/* CTAs: Principal + Secundario */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              {/* Primary CTA button: QUIERO SER PARTE */}
              <a
                href={WAITLIST_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-build-waitlist"
                className="animate-attention-wiggle inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-tech font-bold uppercase tracking-wider text-white bg-[#FF5500] hover:bg-[#E64A19] transition-all duration-150 cursor-pointer shadow-xl shadow-orange-900/40 hover:scale-105 active:scale-95 text-center"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>QUIERO SER PARTE</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </a>

              {/* Secondary CTA button: HABLAR CON CAMILO */}
              <a
                href={TALK_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-build-talk"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-tech font-bold uppercase tracking-wider text-white bg-black/60 hover:bg-black/85 border border-white/20 hover:border-white/40 backdrop-blur-md transition-all cursor-pointer text-center"
              >
                <MessageCircle className="w-4 h-4 text-[#FF5500]" />
                <span>HABLAR CON CAMILO</span>
              </a>

              {/* Tertiary button: Déjanos saber qué debería tener ZONA RC */}
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-md text-xs font-tech text-[#8D949C] hover:text-[#F4F2ED] border border-dashed border-[#26292E] hover:border-[#8D949C] transition-colors cursor-pointer text-center"
              >
                <ClipboardList className="w-4 h-4 text-[#FF5500]" />
                <span>Déjanos saber qué debería tener ZONA RC</span>
              </button>
            </div>

            <p className="text-xs text-[#8D949C]/80 font-tech flex items-center gap-1.5 pt-1">
              <span className="font-handwritten text-lg text-[#C8C4BC]">✍️ Sin registros complicados: conversemos directamente por WhatsApp.</span>
            </p>
          </div>

          {/* Right Column: Belonging Card "Sé parte desde el comienzo" */}
          <div className="reveal-scale delay-150 lg:col-span-5 flex lg:justify-end">
            <div className="hover-lift w-full max-w-md p-6 sm:p-8 rounded-xl bg-[#17191C]/80 border border-[#26292E] backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between">
                <ZonaRcLogo size="md" showTricolor={true} />

                <span className="px-2 py-0.5 rounded text-[10px] font-tech uppercase font-bold text-[#FF5500] bg-[#FF5500]/10 border border-[#FF5500]/30">
                  En desarrollo
                </span>
              </div>

              <div className="pt-2 space-y-2">
                <h3 className="font-editorial font-bold text-2xl text-[#F4F2ED] leading-tight">
                  Sé parte desde el comienzo.
                </h3>
                <p className="text-xs text-[#8D949C] leading-relaxed">
                  Construyamos ZONA RC juntos. Los primeros pilotos y entusiastas que participen tendrán acceso prioritario a las pruebas y ayudarán a definir cada detalle.
                </p>
              </div>

              <div className="pt-3">
                <a
                  href={WAITLIST_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md font-tech font-bold text-xs uppercase tracking-wider text-white bg-[#FF5500] hover:bg-[#E64A19] transition-colors"
                >
                  <span>QUIERO SER PARTE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="font-handwritten text-xl text-center text-[#C8C4BC] pt-1">
                «RC es más que un hobby»
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Modal for structured interest submission via WhatsApp */}
      {isFormOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsFormOpen(false)}
        >
          <div
            className="relative max-w-xl w-full bg-[#101214] border border-[#26292E] rounded-lg p-6 sm:p-8 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#26292E]">
              <div>
                <span className="text-[10px] font-tech text-[#FF5500] uppercase font-bold tracking-wider block">
                  Participación comunitaria
                </span>
                <h3 className="font-editorial font-bold text-xl text-[#F4F2ED]">
                  Sé parte de ZONA RC
                </h3>
              </div>
              <button
                onClick={() => setIsFormOpen(false)}
                className="p-1.5 rounded-md hover:bg-[#17191C] text-[#8D949C] hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-[#8D949C] leading-relaxed">
              Al presionar enviar, tus datos se preparan en un mensaje ordenado de WhatsApp para conversar directamente con Camilo. No almacenamos datos en bases secretas ni enviamos publicidad.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs font-tech">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block uppercase font-bold text-[#F4F2ED] mb-1">
                    Nombre o Alias *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej: Camilo"
                    className="w-full px-3.5 py-2.5 bg-[#17191C] border border-[#26292E] rounded-md text-[#F4F2ED] focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                <div>
                  <label className="block uppercase font-bold text-[#F4F2ED] mb-1">
                    Ciudad (Colombia) *
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Bucaramanga, Bogotá, Medellín..."
                    className="w-full px-3.5 py-2.5 bg-[#17191C] border border-[#26292E] rounded-md text-[#F4F2ED] focus:outline-none focus:border-[#FF5500]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block uppercase font-bold text-[#F4F2ED] mb-1">
                    ¿Qué modalidad corres? *
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#17191C] border border-[#26292E] rounded-md text-[#F4F2ED] focus:outline-none focus:border-[#FF5500]"
                  >
                    <option value="Crawler & Escala">Crawler & Escala técnica</option>
                    <option value="Buggy & Truggy">Buggy & Truggy</option>
                    <option value="Short Course / Bashing">Short Course / Bashing recreativo</option>
                    <option value="Drift / Touring On-road">Drift / Touring On-road</option>
                    <option value="Monster Truck">Monster Truck</option>
                    <option value="Aeromodelismo / Náutica">Aeromodelismo / Náutica RC</option>
                    <option value="Drones & FPV">Drones & Vuelo FPV</option>
                    <option value="Tienda o Taller">Tienda o taller especializado</option>
                  </select>
                </div>

                <div>
                  <label className="block uppercase font-bold text-[#F4F2ED] mb-1">
                    Correo electrónico (opcional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="piloto@correo.com"
                    className="w-full px-3.5 py-2.5 bg-[#17191C] border border-[#26292E] rounded-md text-[#F4F2ED] focus:outline-none focus:border-[#FF5500]"
                  />
                </div>
              </div>

              <div>
                <label className="block uppercase font-bold text-[#F4F2ED] mb-1">
                  ¿Qué herramienta te hace más falta en el hobby? *
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#17191C] border border-[#26292E] rounded-md text-[#F4F2ED] focus:outline-none focus:border-[#FF5500]"
                >
                  <option value="Compra y venta especializada">
                    Compra y venta especializada (repuestos y carros verificables)
                  </option>
                  <option value="Mi Garage digital">
                    Mi Garage digital (control de mantenimiento y compatibilidad)
                  </option>
                  <option value="Directorio de pistas y eventos">
                    Directorio de pistas, eventos y carreras en Colombia
                  </option>
                  <option value="Comunidad y clubes">
                    Comunidad para conectar con pilotos en mi ciudad
                  </option>
                </select>
              </div>

              <div>
                <label className="block uppercase font-bold text-[#F4F2ED] mb-1">
                  ¿Alguna idea o problema que quieras compartir? (opcional)
                </label>
                <textarea
                  rows={3}
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="Cuéntanos qué te gustaría que tuviera ZONA RC..."
                  className="w-full px-3.5 py-2.5 bg-[#17191C] border border-[#26292E] rounded-md text-[#F4F2ED] focus:outline-none focus:border-[#FF5500] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-md font-semibold text-white bg-[#FF5500] hover:bg-[#E64A19] transition-colors cursor-pointer text-xs uppercase tracking-wider"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Enviar y hablar con Camilo por WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
