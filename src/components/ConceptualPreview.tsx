import React, { useState } from 'react';
import { MapPin, Info } from 'lucide-react';
import { CONCEPTUAL_PRODUCTS, CONCEPTUAL_GARAGE_VEHICLES } from '../data/conceptualData';

export const ConceptualPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'marketplace' | 'garage'>('marketplace');

  return (
    <section id="vista-previa" className="py-20 lg:py-28 bg-[#101214] border-b border-[#26292E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-tech text-[#C65D2E] uppercase tracking-widest font-semibold">
                Diseño de Interfaz
              </span>
              <span className="font-handwritten text-xl text-[#C65D2E] rotate-1 select-none">
                ¡Vistas preliminares!
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#F4F2ED] leading-[1.15] tracking-tight">
              Así imaginamos BOX HUB.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#8D949C] leading-relaxed">
              Exploración de la futura experiencia de usuario para explorar el catálogo y gestionar vehículos.
            </p>
          </div>

          {/* Toggle between Marketplace view and Garage view */}
          <div className="inline-flex rounded-md bg-[#17191C] border border-[#26292E] p-1 text-xs font-tech self-start md:self-auto">
            <button
              onClick={() => setActiveTab('marketplace')}
              className={`px-4 py-2 rounded-sm font-semibold transition-colors cursor-pointer ${
                activeTab === 'marketplace'
                  ? 'bg-[#C65D2E] text-white'
                  : 'text-[#8D949C] hover:text-[#F4F2ED]'
              }`}
            >
              Vista: Marketplace
            </button>
            <button
              onClick={() => setActiveTab('garage')}
              className={`px-4 py-2 rounded-sm font-semibold transition-colors cursor-pointer ${
                activeTab === 'garage'
                  ? 'bg-[#C65D2E] text-white'
                  : 'text-[#8D949C] hover:text-[#F4F2ED]'
              }`}
            >
              Vista: Mi Garage
            </button>
          </div>
        </div>

        {/* Conceptual Note Banner (as required) */}
        <div className="mb-10 p-4 rounded-md bg-[#17191C] border border-[#26292E] flex items-start sm:items-center gap-3 text-xs text-[#8D949C]">
          <Info className="w-4 h-4 text-[#C65D2E] shrink-0 mt-0.5 sm:mt-0" />
          <span>
            <strong>Vistas conceptuales:</strong> Las funcionalidades y el diseño pueden evolucionar según los comentarios de la comunidad. Los modelos, precios y referencias son ejemplos ilustrativos.
          </span>
        </div>

        {/* Tab 1: Conceptual Marketplace Grid */}
        {activeTab === 'marketplace' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {CONCEPTUAL_PRODUCTS.map((item) => (
              <div
                key={item.id}
                className="rounded-lg bg-[#17191C] border border-[#26292E] hover:border-[#8D949C]/40 transition-colors overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-[4/3] bg-[#101214] border-b border-[#26292E] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 rounded-sm bg-[#101214]/90 text-[10px] font-tech text-[#C65D2E] border border-[#26292E] uppercase font-bold tracking-wider">
                        Ejemplo conceptual
                      </span>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-tech text-[#8D949C]">
                      <span>{item.scale}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#C65D2E]" />
                        {item.city}
                      </span>
                    </div>

                    <h4 className="font-editorial font-bold text-sm text-[#F4F2ED] leading-snug">
                      {item.name}
                    </h4>

                    <p className="text-xs text-[#8D949C] line-clamp-2 leading-relaxed">
                      {item.technicalHighlight}
                    </p>
                  </div>
                </div>

                {/* Price and status footer */}
                <div className="p-4 pt-3 border-t border-[#26292E] flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] font-tech text-[#8D949C] uppercase block">
                      Referencia estimada
                    </span>
                    <span className="font-tech font-bold text-[#F4F2ED]">
                      {item.priceCOP}
                    </span>
                  </div>

                  <span className="text-[11px] font-tech text-[#8D949C]">
                    {item.condition}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Conceptual Garage View */}
        {activeTab === 'garage' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {CONCEPTUAL_GARAGE_VEHICLES.map((vehicle) => (
              <div
                key={vehicle.id}
                className="rounded-lg bg-[#17191C] border border-[#26292E] p-6 space-y-5"
              >
                <div className="flex items-center justify-between border-b border-[#26292E] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-tech font-bold text-[#F4F2ED]">
                      {vehicle.name}
                    </span>
                    <span className="text-[10px] font-tech text-[#8D949C] px-2 py-0.5 rounded-sm bg-[#101214] border border-[#26292E]">
                      Escala {vehicle.scale}
                    </span>
                  </div>
                  <span className="text-[10px] font-tech text-[#C65D2E] uppercase font-bold tracking-wider">
                    Ficha Conceptual
                  </span>
                </div>

                <div className="aspect-[16/9] rounded-md overflow-hidden bg-[#101214] border border-[#26292E]">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-tech">
                  <div className="p-3 rounded bg-[#101214] border border-[#26292E]">
                    <span className="text-[#8D949C] block text-[10px] uppercase">Motorización</span>
                    <strong className="text-[#F4F2ED] mt-0.5 block">{vehicle.powertrain}</strong>
                  </div>
                  <div className="p-3 rounded bg-[#101214] border border-[#26292E]">
                    <span className="text-[#8D949C] block text-[10px] uppercase">Packs de Batería</span>
                    <strong className="text-[#F4F2ED] mt-0.5 block">{vehicle.batteryConfig}</strong>
                  </div>
                </div>

                <div className="p-3 rounded bg-[#101214] border border-[#26292E] text-xs text-[#8D949C]">
                  <strong className="text-[#F4F2ED] font-tech text-[11px] block mb-1">
                    Bitácora de Taller:
                  </strong>
                  {vehicle.maintenanceNote}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
