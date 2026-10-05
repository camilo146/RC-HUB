import React from 'react';


export const TheProblemSection: React.FC = () => {
  return (
    <section id="el-problema" className="py-20 lg:py-28 bg-[#101214] text-[#F4F2ED] border-b border-[#26292E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-tech text-[#C65D2E] uppercase tracking-widest font-semibold">
              El contexto del hobby
            </span>
            <span className="font-handwritten text-xl text-[#C65D2E] -rotate-1 select-none">
              — ¿te ha pasado esto?
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#F4F2ED] leading-[1.15] tracking-tight">
            Un hobby especializado merece mejores herramientas.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#8D949C] leading-relaxed">
            Hoy en día, disfrutar del radio control suele implicar dispersar la experiencia entre publicaciones en redes sociales, chats informales y recomendaciones aisladas.
          </p>
        </div>

        {/* Editorial Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="p-6 rounded-md bg-[#17191C] border border-[#26292E] flex flex-col justify-between space-y-6 hover:border-[#8D949C]/40 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-tech text-[#C65D2E] uppercase tracking-wider font-semibold">
                  01 · Mercado
                </span>
                <span className="font-handwritten text-sm text-[#8D949C]">
                  Grupos dispersos
                </span>
              </div>
              <h3 className="font-editorial font-bold text-lg text-[#F4F2ED]">
                Búsqueda fragmentada
              </h3>
              <p className="text-sm text-[#8D949C] leading-relaxed">
                Comprar o vender un modelo o repuesto específico suele requerir revisar múltiples grupos y publicaciones efímeras que carecen de especificaciones técnicas claras.
              </p>
            </div>
            <div className="pt-4 border-t border-[#26292E] text-[11px] font-tech text-[#8D949C]">
              Filtros por escala y compatibilidad
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-md bg-[#17191C] border border-[#26292E] flex flex-col justify-between space-y-6 hover:border-[#8D949C]/40 transition-colors">
            <div className="space-y-3">
              <span className="text-xs font-tech text-[#C65D2E] uppercase tracking-wider block font-semibold">
                02 · Mecánica
              </span>
              <h3 className="font-editorial font-bold text-lg text-[#F4F2ED]">
                Compatibilidad técnica
              </h3>
              <p className="text-sm text-[#8D949C] leading-relaxed">
                Elegir el piñón adecuado, el combo de motor/ESC o las baterías compatibles con un chasis genera dudas recurrentes que no siempre tienen respuesta rápida.
              </p>
            </div>
            <div className="pt-4 border-t border-[#26292E] text-[11px] font-tech text-[#8D949C]">
              Información de chasis y electrónica
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-md bg-[#17191C] border border-[#26292E] flex flex-col justify-between space-y-6 hover:border-[#8D949C]/40 transition-colors">
            <div className="space-y-3">
              <span className="text-xs font-tech text-[#C65D2E] uppercase tracking-wider block font-semibold">
                03 · Colección
              </span>
              <h3 className="font-editorial font-bold text-lg text-[#F4F2ED]">
                Historial disperso
              </h3>
              <p className="text-sm text-[#8D949C] leading-relaxed">
                Muchos pilotos no cuentan con un lugar simple para registrar las configuraciones, mejoras instaladas y fechas de mantenimiento de sus vehículos.
              </p>
            </div>
            <div className="pt-4 border-t border-[#26292E] text-[11px] font-tech text-[#8D949C]">
              Registro individual de cada vehículo
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-md bg-[#17191C] border border-[#26292E] flex flex-col justify-between space-y-6 hover:border-[#8D949C]/40 transition-colors">
            <div className="space-y-3">
              <span className="text-xs font-tech text-[#C65D2E] uppercase tracking-wider block font-semibold">
                04 · Pistas
              </span>
              <h3 className="font-editorial font-bold text-lg text-[#F4F2ED]">
                Encuentros y lugares
              </h3>
              <p className="text-sm text-[#8D949C] leading-relaxed">
                Descubrir pistas activas, circuitos de crawler o carreras cercanas suele depender exclusivamente del boca a boca y contactos personales.
              </p>
            </div>
            <div className="pt-4 border-t border-[#26292E] text-[11px] font-tech text-[#8D949C]">
              Directorio de pistas y válidas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
