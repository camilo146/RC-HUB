import React from 'react';


export const RoadmapSection: React.FC = () => {
  const steps = [
    {
      stage: 'Etapa 1',
      title: 'Validación de la idea',
      description:
        'Conversaciones directas con aficionados, identificación de los principales problemas en la compra/venta y priorización de funcionalidades.',
      status: 'Etapa actual',
      isCurrent: true,
    },
    {
      stage: 'Etapa 2',
      title: 'Marketplace inicial',
      description:
        'Herramienta para publicar vehículos y repuestos con filtros técnicos por escala, ciudad y chasis, además de contacto directo entre pilotos.',
      status: 'Planificado',
      isCurrent: false,
    },
    {
      stage: 'Etapa 3',
      title: 'Garage digital',
      description:
        'Módulo para registrar la flota personal, llevar notas de mantenimiento de diferencial/amortiguadores y organizar repuestos disponibles.',
      status: 'Planificado',
      isCurrent: false,
    },
    {
      stage: 'Etapa 4',
      title: 'Comunidad & Pistas',
      description:
        'Directorio colaborativo de pistas de asfalto, arcilla y crawler en Colombia, junto con el calendario de válidas y carreras locales.',
      status: 'Visión futura',
      isCurrent: false,
    },
  ];

  return (
    <section id="hoja-de-ruta" className="py-20 lg:py-28 bg-[#17191C] border-b border-[#26292E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-tech text-[#C65D2E] uppercase tracking-widest font-semibold block mb-3">
            Plan de Desarrollo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#F4F2ED] leading-[1.15] tracking-tight">
            Hoja de ruta.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8D949C] leading-relaxed">
            Un plan de trabajo estructurado y transparente para construir la plataforma paso a paso junto a los pilotos.
          </p>
        </div>

        {/* Roadmap Grid (Minimalist, engineering timeline) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-lg border flex flex-col justify-between space-y-6 ${
                step.isCurrent
                  ? 'bg-[#101214] border-[#C65D2E]'
                  : 'bg-[#101214] border-[#26292E]'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-tech font-bold uppercase text-[#8D949C] tracking-wider">
                    {step.stage}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-sm text-[10px] font-tech uppercase font-bold tracking-wider ${
                      step.isCurrent
                        ? 'bg-[#C65D2E]/20 text-[#C65D2E] border border-[#C65D2E]/40'
                        : 'bg-[#17191C] text-[#8D949C] border border-[#26292E]'
                    }`}
                  >
                    {step.status}
                  </span>
                </div>

                <h3 className="font-editorial font-bold text-xl text-[#F4F2ED]">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#8D949C] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#26292E] text-[11px] font-tech text-[#8D949C]">
                {step.isCurrent ? 'En progreso en Colombia' : 'Sujeto a retroalimentación'}
              </div>
            </div>
          ))}
        </div>

        {/* Honest Note */}
        <div className="mt-8 text-xs text-[#8D949C] font-tech max-w-2xl">
          * Nota: El orden y el alcance de las etapas pueden evolucionar a medida que validamos la idea con pilotos, preparadores y tiendas locales.
        </div>
      </div>
    </section>
  );
};
