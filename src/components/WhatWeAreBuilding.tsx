import React from 'react';


export const WhatWeAreBuilding: React.FC = () => {
  return (
    <section id="que-construimos" className="py-20 lg:py-28 bg-[#17191C] border-b border-[#26292E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-tech text-[#C65D2E] uppercase tracking-widest font-semibold block mb-3">
            Estructura del producto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#F4F2ED] leading-[1.15] tracking-tight">
            Qué estamos construyendo.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8D949C] leading-relaxed">
            Una plataforma modular pensada para abordar cada aspecto fundamental de la experiencia de un piloto o coleccionista de radiocontrol.
          </p>
        </div>

        {/* 3 Modules with Distinct Compositions */}
        <div className="space-y-12">
          {/* Module 1: Marketplace (Wide Asymmetrical Composition) */}
          <div className="rounded-lg bg-[#101214] border border-[#26292E] p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-tech font-bold uppercase text-[#F4F2ED] tracking-wider">
                    Módulo 01
                  </span>
                  <span className="px-2.5 py-0.5 rounded-sm bg-[#17191C] border border-[#26292E] text-[11px] font-tech text-[#C65D2E] uppercase tracking-wider font-semibold">
                    En planificación
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-[#F4F2ED]">
                  Marketplace Especializado
                </h3>

                <p className="text-base text-[#8D949C] leading-relaxed">
                  Un espacio especializado para descubrir y publicar vehículos RC, repuestos y accesorios.
                </p>

                <div className="pt-2 space-y-2.5 text-xs text-[#8D949C] font-tech">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C65D2E]" />
                    <span>Filtros técnicos por escala (1/10, 1/8, 1/7), tracción (4WD/2WD) y tipo de chasis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C65D2E]" />
                    <span>Especificaciones verificables: motores brushless, variadores ESC y packs LiPo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C65D2E]" />
                    <span>Contacto directo y transparente entre compradores y vendedores locales</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-md overflow-hidden border border-[#26292E] bg-[#17191C]">
                  <img
                    src="/images/slash-4x4.jpg"
                    alt="Vehículo Traxxas Slash en taller de pista"
                    className="w-full h-64 sm:h-72 object-cover"
                  />
                  <div className="p-3.5 bg-[#17191C] border-t border-[#26292E] flex items-center justify-between text-xs text-[#8D949C] font-tech">
                    <span>Prototipo visual: Ficha con datos mecánicos reales</span>
                    <span>1/10 Short Course</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Module 2: Mi Garage (Engineering Spec Sheet Layout) */}
          <div className="rounded-lg bg-[#101214] border border-[#26292E] p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="p-5 rounded-md bg-[#17191C] border border-[#26292E] space-y-4 font-tech text-xs">
                  <div className="flex items-center justify-between border-b border-[#26292E] pb-3 text-[#8D949C]">
                    <span>REGISTRO DE VEHÍCULO #001</span>
                    <span className="text-[#F4F2ED]">CONFIGURACIÓN DE PISTA</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-[#8D949C] block text-[10px] uppercase">Modelo</span>
                      <strong className="text-[#F4F2ED]">Arrma Kraton 6S BLX</strong>
                    </div>
                    <div>
                      <span className="text-[#8D949C] block text-[10px] uppercase">Escala / Chasis</span>
                      <strong className="text-[#F4F2ED]">1/8 Monster · Alum 3mm</strong>
                    </div>
                    <div>
                      <span className="text-[#8D949C] block text-[10px] uppercase">Motor / ESC</span>
                      <strong className="text-[#F4F2ED]">Firma 2050kV · 150A</strong>
                    </div>
                    <div>
                      <span className="text-[#8D949C] block text-[10px] uppercase">Batería Asignada</span>
                      <strong className="text-[#F4F2ED]">Dual 3S (6S 5000mAh)</strong>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#26292E] text-[11px] text-[#8D949C]">
                    Última bitácora: Revisión de piñonería de diferencial central (aceite 100k cSt).
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-tech font-bold uppercase text-[#F4F2ED] tracking-wider">
                    Módulo 02
                  </span>
                  <span className="px-2.5 py-0.5 rounded-sm bg-[#17191C] border border-[#26292E] text-[11px] font-tech text-[#8D949C] uppercase tracking-wider font-semibold">
                    Planificado
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-[#F4F2ED]">
                  Mi Garage Digital
                </h3>

                <p className="text-base text-[#8D949C] leading-relaxed">
                  Una herramienta para registrar tus vehículos, organizar sus componentes y documentar tu colección.
                </p>

                <p className="text-sm text-[#8D949C] leading-relaxed">
                  Permitirá llevar el control de cada pieza reemplazada, baterías compatibles y ajustes de amortiguación para cada pista o jornada de rodaje.
                </p>
              </div>
            </div>
          </div>

          {/* Module 3: Comunidad (Grid Layout) */}
          <div className="rounded-lg bg-[#101214] border border-[#26292E] p-6 sm:p-10">
            <div className="max-w-2xl space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-xs font-tech font-bold uppercase text-[#F4F2ED] tracking-wider">
                  Módulo 03
                </span>
                <span className="px-2.5 py-0.5 rounded-sm bg-[#17191C] border border-[#26292E] text-[11px] font-tech text-[#8D949C] uppercase tracking-wider font-semibold">
                  Visión futura
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-[#F4F2ED]">
                Comunidad, Pistas & Encuentros
              </h3>

              <p className="text-base text-[#8D949C] leading-relaxed">
                Una forma de descubrir pistas, clubes, encuentros y eventos RC.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-md bg-[#17191C] border border-[#26292E] space-y-2">
                <span className="text-xs font-tech text-[#C65D2E] uppercase font-semibold">
                  🏁 Pistas y Circuitos
                </span>
                <h4 className="font-editorial font-bold text-base text-[#F4F2ED]">
                  Directorio de lugares
                </h4>
                <p className="text-xs text-[#8D949C] leading-relaxed">
                  Información clara sobre circuitos off-road, on-road y zonas de crawler técnico: horarios, superficie y servicios en boxes.
                </p>
              </div>

              <div className="p-5 rounded-md bg-[#17191C] border border-[#26292E] space-y-2">
                <span className="text-xs font-tech text-[#C65D2E] uppercase font-semibold">
                  📅 Calendario de Eventos
                </span>
                <h4 className="font-editorial font-bold text-base text-[#F4F2ED]">
                  Próximas válidas y carreras
                </h4>
                <p className="text-xs text-[#8D949C] leading-relaxed">
                  Fechas de competencias oficiales y jornadas abiertas de prueba organizadas por clubes en las principales ciudades.
                </p>
              </div>

              <div className="p-5 rounded-md bg-[#17191C] border border-[#26292E] space-y-2">
                <span className="text-xs font-tech text-[#C65D2E] uppercase font-semibold">
                  👥 Clubes Locales
                </span>
                <h4 className="font-editorial font-bold text-base text-[#F4F2ED]">
                  Conexión entre pilotos
                </h4>
                <p className="text-xs text-[#8D949C] leading-relaxed">
                  Canales de contacto para unirse a grupos de salida de fin de semana y recibir asesoría técnica de pilotos experimentados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
