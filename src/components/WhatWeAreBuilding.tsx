import React from 'react';
import { Users, MapPin, Wrench, ShoppingBag } from 'lucide-react';

const FOUR_PILLARS = [
  {
    number: '01',
    title: 'PERSONAS RC',
    tagline: 'Descubre y conoce personas que comparten tu afición.',
    description:
      'Un perfil para cada aficionado donde ver sus modalidades favoritas, ciudad, proyectos y garage. Para que rodar acompañado o intercambiar ideas sea mucho más fácil.',
    benefits: [
      'Encuentra pilotos y entusiastas según la modalidad que practicas',
      'Conecta con aficionados en tu misma ciudad o región de Colombia',
      'Comparte experiencias, trucos y pasión por el radio control',
    ],
    highlight: 'Perfiles · Ciudad · Modalidades · Garage',
    icon: Users,
    image: '/images/pillar-personas-rc.jpg',
    imageAlt: 'Interfaz conceptual de perfil de usuario en ZONA RC',
  },
  {
    number: '02',
    title: 'LUGARES RC',
    tagline: 'Descubre dónde practicar y comparte lugares con la comunidad.',
    description:
      'Mucho más que pistas formales: senderos crawler, rectas para drift, circuitos de arcilla, espacios para camiones, spots de vuelo FPV y espejos de agua.',
    benefits: [
      'Filtros por modalidad: crawler, drift, off-road, camiones, aviones, barcos y drones',
      'Fichas con ubicación, tipo de suelo y recomendaciones prácticas',
      'Lugares descubiertos y compartidos por la misma comunidad',
    ],
    highlight: 'Directorio de spots · Senderos · Pistas · Encuentros',
    icon: MapPin,
    image: '/images/pillar-lugares-rc.jpg',
    imageAlt: 'Interfaz conceptual de mapa y directorio de lugares RC en Colombia',
  },
  {
    number: '03',
    title: 'MI GARAGE',
    tagline: 'Este es tu espacio para mostrar tus RC y proyectos.',
    description:
      'Un garage digital donde registrar tu flota, exhibir tus vehículos con fotos, escala y modalidad, y mostrar la evolución de tus armados y mejoras.',
    benefits: [
      'Exhibe todos tus modelos: crawlers, drift cars, buggies, trucks y más',
      'Ficha visual con escala, modalidad, motorización y componentes',
      'Muestra el progreso de tus armados, pintura y modificaciones',
    ],
    highlight: 'Flota digital · Proyectos · Escala · Especificaciones',
    icon: Wrench,
    image: '/images/pillar-mi-garage.jpg',
    imageAlt: 'Interfaz conceptual de Mi Garage digital con vehículos y proyectos',
  },
  {
    number: '04',
    title: 'COMPRA Y VENTA',
    tagline: 'Compra y vende dentro de la comunidad.',
    description:
      'Una funcionalidad dentro de la comunidad para encontrar vehículos, repuestos y accesorios directamente entre aficionados, con descripciones claras y trato directo.',
    benefits: [
      'Vehículos completos, repuestos específicos, chasis y accesorios',
      'Publicaciones con fotografía real, especificaciones, ubicación y precio en COP',
      'Contacto directo entre aficionados de toda Colombia, sin intermediarios',
    ],
    highlight: 'Vehículos · Repuestos · Accesorios · Contacto directo',
    icon: ShoppingBag,
    image: '/images/pillar-compra-venta.jpg',
    imageAlt: 'Interfaz conceptual de compra y venta entre aficionados RC',
  },
];

export const WhatWeAreBuilding: React.FC = () => {
  return (
    <section id="que-construimos" className="py-20 lg:py-28 bg-[#17191C] border-b border-[#26292E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="max-w-3xl mb-16 reveal-on-scroll">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="/images/colombia-brush-flag.png"
              alt="Bandera Colombia pincelazo"
              className="h-4 w-7 object-contain -rotate-3"
            />
            <span className="text-xs font-tech text-[#FF5500] uppercase tracking-widest font-bold">
              Los 4 pilares de ZONA RC COL
            </span>
            <span className="font-handwritten text-xl text-[#FF5500] -rotate-1 select-none">
              «Pensado para conectar la comunidad»
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display italic font-black uppercase text-[#F4F2ED] leading-[1.05] tracking-tight">
            Cuatro formas de <span className="text-[#FF5500]">conectar la comunidad</span> RC.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8D949C] leading-relaxed">
            Personas, lugares, proyectos y oportunidades para una comunidad RC que hoy está repartida entre muchos lugares.
          </p>
        </div>

        {/* 4 Pillars Grid (2x2 on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FOUR_PILLARS.map((pillar, idx) => {
            const delays = ['delay-75', 'delay-150', 'delay-225', 'delay-300'];
            return (
              <div
                key={pillar.number}
                className={`reveal-on-scroll ${delays[idx % delays.length]} rounded-xl bg-[#141619] border border-[#26292E] hover:border-[#8D949C]/40 transition-all duration-200 overflow-hidden flex flex-col justify-between`}
              >
                {/* Image preview with discreet editorial tag */}
                <div className="relative aspect-[16/9] bg-[#0E1012] overflow-hidden border-b border-[#26292E]">
                  <img
                    src={pillar.image}
                    alt={pillar.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141619] via-[#141619]/25 to-transparent" />

                  {/* Clean Technical Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded text-[11px] font-tech text-[#F4F2ED] bg-[#0E1012]/90 border border-[#26292E] font-bold tracking-wider">
                      {pillar.number} · {pillar.title}
                    </span>
                  </div>

                  {/* Concept Tag */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2 py-0.5 rounded text-[9px] font-tech text-[#8D949C] bg-[#0E1012]/90 border border-[#26292E] uppercase tracking-wider font-semibold">
                      CONCEPTO
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-editorial font-bold text-[#F4F2ED]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm font-tech text-[#FF5500] font-semibold">
                      {pillar.tagline}
                    </p>
                    <p className="text-sm text-[#8D949C] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Benefits bullet points with clean typography */}
                  <div className="pt-4 border-t border-[#26292E] space-y-2 text-xs text-[#C8C4BC]">
                    {pillar.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-[#FF5500] font-tech font-bold select-none leading-none mt-0.5">—</span>
                        <span className="leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlight meta */}
                  <div className="pt-3 border-t border-[#26292E]/60 text-[11px] font-tech text-[#8D949C]">
                    <span className="text-[#FF5500] font-bold uppercase tracking-wider text-[10px] mr-2">Ecosistema:</span>
                    <span className="text-[#A0A6B2]">{pillar.highlight}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
