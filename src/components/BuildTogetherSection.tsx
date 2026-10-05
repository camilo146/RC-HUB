import React, { useState } from 'react';
import { MessageCircle, ArrowRight, ClipboardList, X, Send, Sparkles } from 'lucide-react';

export const BuildTogetherSection: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [city, setCity] = useState('Bucaramanga');
  const [role, setRole] = useState('Aficionado');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('Marketplace especializado');
  const [comments, setComments] = useState('');

  const directWhatsappUrl =
    'https://wa.me/573132233304?text=Hola%2C%20Camilo.%20Conoc%C3%AD%20BOX%20HUB%20y%20me%20gustar%C3%ADa%20compartir%20algunas%20ideas%20sobre%20el%20proyecto.';

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola, Camilo! Quiero participar en las pruebas tempranas de BOX HUB:
- Nombre: ${name || 'Piloto'}
- Ciudad: ${city}
- Perfil: ${role}
${email ? `- Correo: ${email}\n` : ''}- Función de mayor interés: ${interest}
${comments ? `- Comentarios: ${comments}` : ''}`;

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
          <Sparkles className="w-3 h-3 text-[#C65D2E]" />
          <span>Fondo ilustrativo generado con IA</span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center justify-between">
          {/* Left Column: Heading and Community Vision */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#17191C]/90 border border-[#26292E] backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C65D2E]" />
              <span className="text-[11px] font-tech text-[#C65D2E] uppercase tracking-widest font-semibold">
                Construyamos juntos
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#F4F2ED] leading-[1.15] tracking-tight">
              BOX HUB empieza con la comunidad.
            </h2>

            {/* Handwritten callout */}
            <p className="font-handwritten text-xl sm:text-2xl text-[#C65D2E] select-none -rotate-1">
              «Tu opinión y experiencia en la pista definen lo que programamos cada semana»
            </p>

            <p className="text-sm sm:text-base text-[#8D949C] leading-relaxed max-w-2xl">
              Queremos escuchar a las personas que viven este hobby. Si tienes un RC, compites, vendes repuestos, administras una pista o simplemente disfrutas del radio control, cuéntanos qué te gustaría encontrar en esta plataforma.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3">
              {/* Primary CTA button: Charla conmigo (WhatsApp) */}
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-build-whatsapp-cinematic"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md text-sm font-semibold text-white bg-[#C65D2E] hover:bg-[#B34F24] transition-all duration-150 cursor-pointer shadow-lg hover:shadow-[#C65D2E]/20"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <MessageCircle className="w-4 h-4" />
                <span>Charla conmigo por WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </a>

              {/* Secondary button: Open structured form */}
              <button
                onClick={() => setIsFormOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md text-xs font-tech font-semibold text-[#8D949C] hover:text-[#F4F2ED] bg-[#17191C]/80 hover:bg-[#17191C] border border-[#26292E] hover:border-[#8D949C] transition-colors cursor-pointer"
              >
                <ClipboardList className="w-4 h-4 text-[#C65D2E]" />
                <span>Completar ficha de interés</span>
              </button>
            </div>

            <p className="text-xs text-[#8D949C]/80 font-tech flex items-center gap-1.5 pt-1">
              <span className="font-handwritten text-lg text-[#C8C4BC]">✍️ Sin intermediarios ni bots: Camilo responde directamente.</span>
            </p>
          </div>

          {/* Right Column: Brand Mark with Tagline */}
          <div className="lg:col-span-5 flex lg:justify-end">
            <div className="text-left lg:text-right space-y-2 p-6 rounded-lg bg-[#17191C]/60 border border-[#26292E] backdrop-blur-sm">
              <div className="flex items-center lg:justify-end gap-3">
                <div className="w-9 h-9 rounded-md bg-[#101214] border border-[#C65D2E]/40 flex items-center justify-center font-tech font-bold text-sm text-[#F4F2ED] shadow-inner">
                  BH
                </div>
                <span className="font-editorial font-bold text-2xl sm:text-3xl text-[#F4F2ED] tracking-tight">
                  BOX HUB
                </span>
              </div>
              <p className="text-xs font-tech text-[#8D949C] uppercase tracking-widest font-medium">
                Radio Control Colombia
              </p>
              <p className="font-handwritten text-2xl sm:text-3xl text-[#F4F2ED] pt-1">
                «RC es más que un hobby»
              </p>
              <p className="text-[11px] font-tech text-[#8D949C] pt-2 border-t border-[#26292E]">
                Fase de validación comunitaria · 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Modal for early testing submission */}
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
                <span className="text-[10px] font-tech text-[#C65D2E] uppercase font-bold tracking-wider block">
                  Participación comunitaria
                </span>
                <h3 className="font-editorial font-bold text-xl text-[#F4F2ED]">
                  Registro de interés temprano
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
              Comparte tus datos y te avisaremos cuando estemos listos para las primeras pruebas de la plataforma. Al enviar, tus datos se preparan en WhatsApp para conversar directamente con Camilo.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs font-tech">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block uppercase font-bold text-[#F4F2ED] mb-1">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre o alias"
                    className="w-full px-3.5 py-2.5 bg-[#17191C] border border-[#26292E] rounded-md text-[#F4F2ED] focus:outline-none focus:border-[#C65D2E]"
                  />
                </div>

                <div>
                  <label className="block uppercase font-bold text-[#F4F2ED] mb-1">
                    Ciudad (Colombia) *
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#17191C] border border-[#26292E] rounded-md text-[#F4F2ED] focus:outline-none focus:border-[#C65D2E]"
                  >
                    <option value="Bucaramanga">Bucaramanga</option>
                    <option value="Bogotá">Bogotá</option>
                    <option value="Medellín">Medellín</option>
                    <option value="Cali">Cali</option>
                    <option value="Barranquilla">Barranquilla</option>
                    <option value="Otra ciudad">Otra ciudad de Colombia</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block uppercase font-bold text-[#F4F2ED] mb-1">
                    Tu perfil en el hobby *
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#17191C] border border-[#26292E] rounded-md text-[#F4F2ED] focus:outline-none focus:border-[#C65D2E]"
                  >
                    <option value="Aficionado / Bashing">Aficionado (Bashing / Recreativo)</option>
                    <option value="Piloto de competición">Piloto de competición</option>
                    <option value="Crawler & Escala">Crawler & Escala técnica</option>
                    <option value="Vendedor particular">Vendedor particular de repuestos</option>
                    <option value="Tienda o taller RC">Tienda o taller especializado</option>
                    <option value="Organizador de pista">Organizador de pista o club</option>
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
                    className="w-full px-3.5 py-2.5 bg-[#17191C] border border-[#26292E] rounded-md text-[#F4F2ED] focus:outline-none focus:border-[#C65D2E]"
                  />
                </div>
              </div>

              <div>
                <label className="block uppercase font-bold text-[#F4F2ED] mb-1">
                  Módulo de mayor interés *
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#17191C] border border-[#26292E] rounded-md text-[#F4F2ED] focus:outline-none focus:border-[#C65D2E]"
                >
                  <option value="Plataforma de compra y venta RC con filtros técnicos">
                    Plataforma de compra y venta RC con filtros técnicos
                  </option>
                  <option value="Mi Garage digital (control de flota y mantenimientos)">
                    Mi Garage digital (control de flota y mantenimientos)
                  </option>
                  <option value="Directorio de pistas y encuentros en Colombia">
                    Directorio de pistas y encuentros en Colombia
                  </option>
                </select>
              </div>

              <div>
                <label className="block uppercase font-bold text-[#F4F2ED] mb-1">
                  Comentarios o ideas adicionales (opcional)
                </label>
                <textarea
                  rows={3}
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="¿Qué problema sueles tener al buscar repuestos o salir a rodar?"
                  className="w-full px-3.5 py-2.5 bg-[#17191C] border border-[#26292E] rounded-md text-[#F4F2ED] focus:outline-none focus:border-[#C65D2E] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-md font-semibold text-white bg-[#C65D2E] hover:bg-[#B34F24] transition-colors cursor-pointer text-xs uppercase tracking-wider"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Enviar datos y abrir WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
