import React from 'react';
import { Compass, Zap, Flame, Gauge, Shield, Truck, Plane, Ship, Radio, Sparkles } from 'lucide-react';

interface Modality {
  id: string;
  name: string;
  category: string;
  description: string;
  scales: string;
  focus: string;
  icon: React.ComponentType<{ className?: string }>;
}

const MODALITIES: Modality[] = [
  {
    id: 'crawler',
    name: 'Crawler & Escala Técnica',
    category: 'Off-Road · Trail',
    description: 'Bloqueos de diferencial, desmultiplicación, rutas en piedra, barro y fidelidad visual a escala real.',
    scales: '1/10 · 1/24 · 1/18 · 1/6',
    focus: 'Rutas técnicas y accesorios de escala',
    icon: Compass,
  },
  {
    id: 'buggy',
    name: 'Buggy & Truggy',
    category: 'Competición · Off-Road',
    description: 'Circuitos de arcilla compactada, saltos gigantes, amortiguadores big bore y velocidad pura en pista.',
    scales: '1/8 Nitro/Eléctrico · 1/10',
    focus: 'Setups de carrera y repuestos de competición',
    icon: Zap,
  },
  {
    id: 'drift',
    name: 'Drift RC (RWD / AWD)',
    category: 'On-Road · Estilo',
    description: 'Chasis balanceados para derrape controlado en pista pulida, giroscopios, carrocerías detalladas y luces LED.',
    scales: '1/10',
    focus: 'Pistas indoor y piezas de alta precisión',
    icon: Flame,
  },
  {
    id: 'touring',
    name: 'Touring & GT On-Road',
    category: 'Asfalto · Velocidad',
    description: 'Chasis de fibra de carbono, neumáticos de espuma o goma con aditivo, paso por curva y aceleración instantánea.',
    scales: '1/10 · 1/8 · 1/7',
    focus: 'Competición en asfalto y telemetría',
    icon: Gauge,
  },
  {
    id: 'short-course',
    name: 'Short Course (SCT)',
    category: 'Off-Road · Contacto',
    description: 'Carrocerías cerradas inspiradas en trofeos Baja, carreras rueda a rueda en tierra y resistencia ante impactos.',
    scales: '1/10 · 1/7 4WD/2WD',
    focus: 'Bashing y válidas de contacto',
    icon: Shield,
  },
  {
    id: 'monster',
    name: 'Monster Truck & Bashing',
    category: 'Potencia Extrema',
    description: 'Electrónica 4S/6S/8S capaz de superar los 100 km/h, llantas sobredimensionadas y chasis reforzados.',
    scales: '1/8 · 1/5 · 1/10',
    focus: 'Combos brushless, baterías LiPo y piñonería',
    icon: Zap,
  },
  {
    id: 'trucks',
    name: 'Camiones & Maquinaria Pesada',
    category: 'Escala Pesada',
    description: 'Tractocamiones 6x4, volquetas hidráulicas, excavadoras funcionales y sonido real con módulos de luces.',
    scales: '1/14 · 1/16',
    focus: 'Sistemas hidráulicos y cajas de cambio',
    icon: Truck,
  },
  {
    id: 'aviation',
    name: 'Aviones & Aeromodelismo',
    category: 'Vuelo Radiocontrolado',
    description: 'Entrenadores de ala alta, cazas a reacción EDF, aviones 3D acrobáticos y planeadores térmicos.',
    scales: 'Foam · Balsa · Turbina',
    focus: 'Servos, receptores y pistas de despegue',
    icon: Plane,
  },
  {
    id: 'marine',
    name: 'Barcos & Náutica RC',
    category: 'Agua · Náutica',
    description: 'Lanchas deep-V refrigeradas por agua, catamaranes de alta velocidad y veleros teledirigidos.',
    scales: 'Mono · Cat · Veleros',
    focus: 'Sellado estanco y lagos autorizados',
    icon: Ship,
  },
  {
    id: 'drones',
    name: 'Drones & Vuelo FPV',
    category: 'Aire · Carreras & Freestyle',
    description: 'Quads de carreras 5", drones de freestyle, micro-whoops indoor y sistemas de video digital HD.',
    scales: '5" · 3.5" · Tiny Whoop',
    focus: 'Electrónica, VTX, hélices y spots de vuelo',
    icon: Radio,
  },
];

export const RCModalitiesSection: React.FC = () => {
  return (
    <section id="modalidades" className="py-20 lg:py-28 bg-[#101214] text-[#F4F2ED] border-b border-[#26292E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 reveal-on-scroll">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="/images/colombia-brush-flag.png"
              alt="Bandera Colombia pincelazo"
              className="h-4 w-7 object-contain -rotate-3"
            />
            <span className="text-xs font-tech text-[#C65D2E] uppercase tracking-widest font-bold">
              El mundo RC completo · ZONA RC COL
            </span>
            <span className="font-handwritten text-xl text-[#C65D2E] -rotate-1 select-none">
              «Todas las disciplinas en un solo lugar»
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#F4F2ED] leading-[1.15] tracking-tight">
            No importa qué tipo de RC tengas.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8D949C] leading-relaxed">
            Si te apasiona el radio control, <strong className="text-[#F4F2ED] font-semibold">ZONA RC también es para ti</strong>. No somos un espacio cerrado para una sola categoría; estamos diseñando la plataforma para que cada disciplina encuentre su espacio, sus repuestos y su comunidad en Colombia.
          </p>
        </div>

        {/* Modalities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODALITIES.map((mod, idx) => {
            const Icon = mod.icon;
            const delays = ['delay-75', 'delay-150', 'delay-225', 'delay-300', 'delay-375', 'delay-450'];
            return (
              <div
                key={mod.id}
                className={`reveal-on-scroll ${delays[idx % delays.length]} hover-lift p-6 rounded-xl bg-[#17191C] border border-[#26292E] hover:border-[#C65D2E]/60 transition-all duration-200 flex flex-col justify-between space-y-4 group relative overflow-hidden`}
              >
                {/* Subtle top indicator line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C65D2E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-tech font-bold text-[11px] text-[#C65D2E] tracking-widest">
                        #{String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-tech text-[#8D949C] uppercase tracking-wider font-semibold">
                        {mod.category}
                      </span>
                    </div>
                    <span className="text-[10px] font-tech text-[#8D949C] bg-[#101214] px-2 py-0.5 rounded border border-[#26292E]">
                      {mod.scales}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#101214] border border-[#26292E] flex items-center justify-center text-[#C65D2E] group-hover:border-[#C65D2E] group-hover:bg-[#C65D2E]/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-editorial font-bold text-lg text-[#F4F2ED] group-hover:text-white transition-colors">
                      {mod.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#8D949C] leading-relaxed">
                    {mod.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#26292E] flex items-center justify-between text-[11px] font-tech">
                  <span className="text-[#8D949C]">Enfoque en ZONA RC:</span>
                  <span className="text-[#F4F2ED] truncate ml-2 font-medium">{mod.focus}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Inclusive Callout */}
        <div className="reveal-scale delay-150 mt-10 p-5 rounded-lg bg-[#17191C]/50 border border-[#26292E] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-tech text-[#8D949C]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C65D2E] shrink-0" />
            <span>
              ¿Practicas otra modalidad como tanques de combate, motos RC o proyectos artesanales? Tu voz también cuenta para incluirlos.
            </span>
          </div>
          <a
            href="https://wa.me/573132233304?text=Hola%2C%20Camilo.%20Me%20gustar%C3%ADa%20que%20ZONA%20RC%20incluya%20mi%20modalidad%20RC:"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C65D2E] hover:text-[#F4F2ED] font-semibold underline underline-offset-4 decoration-[#C65D2E]/40 shrink-0"
          >
            Cuéntanos qué corres →
          </a>
        </div>
      </div>
    </section>
  );
};
