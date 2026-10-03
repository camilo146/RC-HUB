import React, { useState } from 'react';
import { MessageCircle, Send, ArrowUpRight } from 'lucide-react';

export const BuildTogetherSection: React.FC = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('Bucaramanga');
  const [role, setRole] = useState('Aficionado');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('Marketplace especializado');
  const [comments, setComments] = useState('');

  const directWhatsappUrl =
    'https://wa.me/573132233304?text=Hola%2C%20vi%20el%20proyecto%20RC%20HUB%20y%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20y%20compartir%20algunas%20ideas.';

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prepare formatted WhatsApp message with form answers
    const message = `Hola! Quiero participar en las pruebas tempranas de RC HUB:
- Nombre: ${name || 'Piloto'}
- Ciudad: ${city}
- Perfil: ${role}
${email ? `- Correo: ${email}\n` : ''}- Función de mayor interés: ${interest}
${comments ? `- Comentarios: ${comments}` : ''}`;

    const url = `https://wa.me/573132233304?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-[#F4F2ED] text-[#17191C] border-b border-[#D9D8D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Vision & Direct Creator Contact */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-tech text-[#C65D2E] uppercase tracking-widest font-semibold block">
              Participación y Feedback
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#17191C] leading-[1.15] tracking-tight">
              RC HUB empieza con la comunidad.
            </h2>

            <p className="text-base text-[#555A60] leading-relaxed">
              Queremos escuchar a las personas que viven este hobby. Si tienes un RC, compites, vendes repuestos, administras una pista o simplemente disfrutas del radio control, cuéntanos qué te gustaría encontrar en esta plataforma.
            </p>

            {/* Option 1: Direct Creator WhatsApp */}
            <div className="p-6 rounded-lg bg-white border border-[#D9D8D3] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-[#17191C] flex items-center justify-center text-white">
                  <MessageCircle className="w-5 h-5 text-[#C65D2E]" />
                </div>
                <div>
                  <h3 className="font-editorial font-bold text-base text-[#17191C]">
                    Hablar directamente con el creador
                  </h3>
                  <p className="text-xs text-[#8D949C] font-tech">
                    Conversación abierta en WhatsApp (+57 313 223 3304)
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#555A60] leading-relaxed">
                Si prefieres charlar de forma directa, sugerir ideas o contarnos tus necesidades como piloto o vendedor en Colombia:
              </p>

              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md text-xs font-semibold text-white bg-[#C65D2E] hover:bg-[#B34F24] transition-colors cursor-pointer"
              >
                <span>Enviar mensaje por WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="text-xs text-[#8D949C] font-tech">
              * Nota: Tu número o datos no serán usados para spam comercial. Es una iniciativa comunitaria para diseñar una mejor herramienta.
            </div>
          </div>

          {/* Right Column: Early Interest Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-lg bg-white border border-[#D9D8D3] shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-tech text-[#8D949C] uppercase tracking-wider block mb-1">
                  Registro de interés temprano
                </span>
                <h3 className="font-editorial font-bold text-2xl text-[#17191C]">
                  Quiero probar RC HUB
                </h3>
                <p className="text-xs sm:text-sm text-[#555A60] mt-1.5 leading-relaxed">
                  Apuntarse significa manifestar interés en participar en futuras pruebas y compartir comentarios; no representa acceso inmediato a una aplicación terminada.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                {/* Nombre & Ciudad */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-tech uppercase font-bold text-[#17191C] mb-1">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Tu nombre o alias de piloto"
                      className="w-full px-3.5 py-2.5 bg-[#F4F2ED] border border-[#D9D8D3] rounded-md text-[#17191C] focus:outline-none focus:border-[#C65D2E]"
                    />
                  </div>

                  <div>
                    <label className="block font-tech uppercase font-bold text-[#17191C] mb-1">
                      Ciudad (Colombia) *
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F4F2ED] border border-[#D9D8D3] rounded-md text-[#17191C] focus:outline-none focus:border-[#C65D2E]"
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

                {/* Perfil & Correo */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-tech uppercase font-bold text-[#17191C] mb-1">
                      Tu perfil en el hobby *
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F4F2ED] border border-[#D9D8D3] rounded-md text-[#17191C] focus:outline-none focus:border-[#C65D2E]"
                    >
                      <option value="Aficionado / Bashing">Aficionado (Bashing / Recreativo)</option>
                      <option value="Piloto de competición">Piloto de competición</option>
                      <option value="Vendedor independiente">Vendedor particular de repuestos</option>
                      <option value="Tienda o taller RC">Tienda o taller especializado</option>
                      <option value="Organizador de pista o eventos">Organizador de pista o club</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-tech uppercase font-bold text-[#17191C] mb-1">
                      Correo electrónico (opcional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="piloto@correo.com"
                      className="w-full px-3.5 py-2.5 bg-[#F4F2ED] border border-[#D9D8D3] rounded-md text-[#17191C] focus:outline-none focus:border-[#C65D2E]"
                    />
                  </div>
                </div>

                {/* Función de mayor interés */}
                <div>
                  <label className="block font-tech uppercase font-bold text-[#17191C] mb-1">
                    ¿Qué función te interesaría más encontrar? *
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#F4F2ED] border border-[#D9D8D3] rounded-md text-[#17191C] focus:outline-none focus:border-[#C65D2E]"
                  >
                    <option value="Marketplace especializado con filtros técnicos">
                      Marketplace especializado con filtros técnicos (escala, chasis, motor)
                    </option>
                    <option value="Mi Garage (historial de vehículos y mantenimiento)">
                      Mi Garage (historial de vehículos, configuraciones y mantenimiento)
                    </option>
                    <option value="Directorio de pistas y calendario de carreras">
                      Directorio de pistas y calendario de carreras en Colombia
                    </option>
                    <option value="Sistema de compatibilidad automática de repuestos">
                      Sistema de compatibilidad automática de repuestos
                    </option>
                  </select>
                </div>

                {/* Comentarios */}
                <div>
                  <label className="block font-tech uppercase font-bold text-[#17191C] mb-1">
                    Comentarios o ideas adicionales (opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="¿Qué problema sueles tener al buscar repuestos o salir a rodar?"
                    className="w-full px-3.5 py-2.5 bg-[#F4F2ED] border border-[#D9D8D3] rounded-md text-[#17191C] focus:outline-none focus:border-[#C65D2E] resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-md font-semibold text-white bg-[#17191C] hover:bg-[#101214] transition-colors cursor-pointer text-xs uppercase tracking-wider font-tech"
                  >
                    <Send className="w-3.5 h-3.5 text-[#C65D2E]" />
                    <span>Manifestar interés y conectar vía WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-[#8D949C] text-center mt-2 font-tech">
                    Al enviar, se abrirá WhatsApp con los datos que completaste listos para enviar al creador.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
