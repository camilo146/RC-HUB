import React, { useState } from 'react';
import { MapPin, Info, Sparkles, Users, Wrench, ShoppingBag, Compass, Layout } from 'lucide-react';
import { CONCEPTUAL_PRODUCTS, CONCEPTUAL_GARAGE_VEHICLES } from '../data/conceptualData';

type ConceptualTab = 'inicio' | 'perfiles' | 'lugares' | 'garage' | 'marketplace';

export const ConceptualPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ConceptualTab>('perfiles');

  return (
    <section id="vista-previa" className="py-20 lg:py-28 bg-[#101214] border-b border-[#26292E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal-on-scroll flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/images/colombia-brush-flag.png"
                alt="Bandera Colombia pincelazo"
                className="h-4 w-7 object-contain -rotate-3"
              />
              <span className="text-xs font-tech text-[#FF5500] uppercase tracking-widest font-bold px-2.5 py-1 rounded bg-[#17191C] border border-[#26292E]">
                CONCEPTO — ASÍ PODRÍA VERSE ZONA RC
              </span>
              <span className="font-handwritten text-xl text-[#FF5500] rotate-1 select-none">
                «Exploración visual»
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display italic font-black uppercase text-[#F4F2ED] leading-[1.05] tracking-tight">
              Así podría verse <span className="text-[#FF5500]">ZONA RC.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#8D949C] leading-relaxed">
              Una exploración visual de cómo podrían convivir personas, lugares, proyectos y compra/venta dentro de un mismo espacio.
            </p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex flex-wrap gap-1.5 rounded-lg bg-[#17191C] border border-[#26292E] p-1.5 text-xs font-tech self-start md:self-auto">
            <button
              onClick={() => setActiveTab('inicio')}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-md font-semibold transition-colors cursor-pointer ${
                activeTab === 'inicio' ? 'bg-[#FF5500] text-white' : 'text-[#8D949C] hover:text-[#F4F2ED]'
              }`}
            >
              <Layout className="w-3.5 h-3.5" />
              <span>Inicio</span>
            </button>
            <button
              onClick={() => setActiveTab('perfiles')}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-md font-semibold transition-colors cursor-pointer ${
                activeTab === 'perfiles' ? 'bg-[#FF5500] text-white' : 'text-[#8D949C] hover:text-[#F4F2ED]'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Perfiles RC</span>
            </button>
            <button
              onClick={() => setActiveTab('lugares')}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-md font-semibold transition-colors cursor-pointer ${
                activeTab === 'lugares' ? 'bg-[#FF5500] text-white' : 'text-[#8D949C] hover:text-[#F4F2ED]'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Lugares RC</span>
            </button>
            <button
              onClick={() => setActiveTab('garage')}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-md font-semibold transition-colors cursor-pointer ${
                activeTab === 'garage' ? 'bg-[#FF5500] text-white' : 'text-[#8D949C] hover:text-[#F4F2ED]'
              }`}
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>Mi Garage</span>
            </button>
            <button
              onClick={() => setActiveTab('marketplace')}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-md font-semibold transition-colors cursor-pointer ${
                activeTab === 'marketplace' ? 'bg-[#FF5500] text-white' : 'text-[#8D949C] hover:text-[#F4F2ED]'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Compra y Venta</span>
            </button>
          </div>
        </div>

        {/* Conceptual Note Banner (Honest disclaimer) */}
        <div className="reveal-on-scroll delay-75 mb-10 p-4 rounded-md bg-[#17191C] border border-[#26292E] flex items-start sm:items-center gap-3 text-xs text-[#8D949C]">
          <Info className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5 sm:mt-0" />
          <span>
            <strong>VISTA CONCEPTUAL:</strong> Estas pantallas son exploraciones de diseño para ilustrar lo que queremos construir junto a la comunidad. <strong>No son funcionalidades actualmente operativas</strong> ni inventario real en venta.
          </span>
        </div>

        {/* Tab Content 1: Inicio / Ecosistema */}
        {activeTab === 'inicio' && (
          <div className="animate-in fade-in duration-200 rounded-xl bg-[#17191C] border border-[#26292E] overflow-hidden">
            <div className="relative aspect-[16/9] lg:aspect-[21/9] bg-[#101214] overflow-hidden">
              <img
                src="/images/hero-rc-ecosystem.jpg"
                alt="Exploración de la pantalla de inicio de ZONA RC"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101214] via-transparent to-transparent opacity-80" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded bg-[#101214]/90 border border-[#26292E] text-xs font-tech text-[#FF5500] font-bold uppercase tracking-wider">
                  CONCEPTO — PANTALLA PRINCIPAL
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:bottom-6 max-w-2xl">
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#F4F2ED]">
                  El punto de encuentro para toda la afición RC en Colombia
                </h3>
                <p className="text-xs sm:text-sm text-[#8D949C] mt-1.5">
                  Un solo lugar para explorar publicaciones de la comunidad, descubrir eventos del fin de semana, consultar novedades en los garages y revisar repuestos disponibles.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Perfiles RC */}
        {activeTab === 'perfiles' && (
          <div className="animate-in fade-in duration-200 rounded-xl bg-[#17191C] border border-[#26292E] p-6 sm:p-8 space-y-6">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-1/2 rounded-lg overflow-hidden border border-[#26292E] bg-[#101214] relative">
                <img
                  src="/images/pillar-personas-rc.jpg"
                  alt="Mockup conceptual de perfil de usuario ZONA RC"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 rounded bg-[#101214]/90 text-[10px] font-tech text-[#FF5500] border border-[#26292E] uppercase font-bold tracking-wider">
                    ASÍ PODRÍA VERSE
                  </span>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#101214] border border-[#26292E] text-xs font-tech text-[#FF5500] font-bold uppercase tracking-wider">
                  <Users className="w-3.5 h-3.5" />
                  <span>Módulo conceptual: Personas RC</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-[#F4F2ED]">
                  Descubre quién más comparte tu pasión.
                </h3>

                <p className="text-xs sm:text-sm text-[#8D949C] leading-relaxed">
                  Cada aficionado podrá tener su perfil con su ciudad, modalidades principales (crawler, drift, racing, camiones, drones), sus vehículos registrados y sus proyectos en desarrollo.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-tech">
                  <div className="p-3 rounded bg-[#101214] border border-[#26292E]">
                    <span className="text-[#8D949C] block text-[10px] uppercase">Identidad</span>
                    <strong className="text-[#F4F2ED] mt-0.5 block">@piloto · Ciudad</strong>
                  </div>
                  <div className="p-3 rounded bg-[#101214] border border-[#26292E]">
                    <span className="text-[#8D949C] block text-[10px] uppercase">Disciplinas</span>
                    <strong className="text-[#F4F2ED] mt-0.5 block">Modalidades activas</strong>
                  </div>
                </div>

                <p className="text-xs font-handwritten text-[#C8C4BC] text-lg pt-1">
                  «Para no volver a rodar solo por falta de saber quién más vive el hobby.»
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 3: Lugares RC */}
        {activeTab === 'lugares' && (
          <div className="animate-in fade-in duration-200 rounded-xl bg-[#17191C] border border-[#26292E] p-6 sm:p-8 space-y-6">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-1/2 rounded-lg overflow-hidden border border-[#26292E] bg-[#101214] relative">
                <img
                  src="/images/pillar-lugares-rc.jpg"
                  alt="Mockup conceptual de mapa y lugares RC"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 rounded bg-[#101214]/90 text-[10px] font-tech text-[#FF5500] border border-[#26292E] uppercase font-bold tracking-wider">
                    ASÍ PODRÍA VERSE
                  </span>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#101214] border border-[#26292E] text-xs font-tech text-[#FF5500] font-bold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Módulo conceptual: Lugares RC</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-[#F4F2ED]">
                  Descubre dónde practicar y comparte tus spots.
                </h3>

                <p className="text-xs sm:text-sm text-[#8D949C] leading-relaxed">
                  Porque el radio control no es solo pistas: incluye senderos naturales de crawler, parqueaderos para drift, circuitos de arcilla, spots para drones y lagos para náutica en toda Colombia.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-tech">
                  <div className="p-3 rounded bg-[#101214] border border-[#26292E]">
                    <span className="text-[#8D949C] block text-[10px] uppercase">Filtros</span>
                    <strong className="text-[#F4F2ED] mt-0.5 block">Por modalidad y suelo</strong>
                  </div>
                  <div className="p-3 rounded bg-[#101214] border border-[#26292E]">
                    <span className="text-[#8D949C] block text-[10px] uppercase">Comunidad</span>
                    <strong className="text-[#F4F2ED] mt-0.5 block">Lugares compartidos</strong>
                  </div>
                </div>

                <p className="text-xs font-handwritten text-[#C8C4BC] text-lg pt-1">
                  «Saber a dónde ir el fin de semana sin depender solo de rumores.»
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 4: Mi Garage */}
        {activeTab === 'garage' && (
          <div className="animate-in fade-in duration-200 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CONCEPTUAL_GARAGE_VEHICLES.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="hover-lift rounded-lg bg-[#17191C] border border-[#26292E] p-6 space-y-5 transition-all duration-200"
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
                    <span className="text-[10px] font-tech text-[#FF5500] uppercase font-bold tracking-wider">
                      CONCEPTO
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
                      <span className="text-[#8D949C] block text-[10px] uppercase">Modalidad</span>
                      <strong className="text-[#F4F2ED] mt-0.5 block">{vehicle.category}</strong>
                    </div>
                  </div>

                  <div className="p-3 rounded bg-[#101214] border border-[#26292E] text-xs text-[#8D949C]">
                    <strong className="text-[#F4F2ED] font-tech text-[11px] block mb-1">
                      Proyecto & Notas:
                    </strong>
                    {vehicle.maintenanceNote}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 5: Compra y Venta */}
        {activeTab === 'marketplace' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {CONCEPTUAL_PRODUCTS.map((item) => (
              <div
                key={item.id}
                className="hover-lift rounded-lg bg-[#17191C] border border-[#26292E] hover:border-[#8D949C]/40 transition-all duration-200 overflow-hidden flex flex-col justify-between"
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
                      <span className="px-2 py-0.5 rounded-sm bg-[#101214]/90 text-[10px] font-tech text-[#FF5500] border border-[#26292E] uppercase font-bold tracking-wider">
                        CONCEPTO
                      </span>
                    </div>
                    <div className="absolute top-2.5 right-2.5">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm bg-[#101214]/90 text-[9px] font-tech text-[#FF5500] border border-[#26292E] uppercase font-semibold tracking-wider">
                        <Sparkles className="w-2.5 h-2.5 text-[#FF5500]" />
                        <span>Referencia</span>
                      </span>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-tech text-[#8D949C]">
                      <span>{item.scale}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#FF5500]" />
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
                      Ejemplo COP
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
      </div>
    </section>
  );
};
