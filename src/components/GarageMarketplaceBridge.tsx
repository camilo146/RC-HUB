import React from 'react';
import { Cpu, Sparkles, ChevronRight } from 'lucide-react';

interface BridgeProps {
  onExploreCompatible: () => void;
}

export const GarageMarketplaceBridge: React.FC<BridgeProps> = ({ onExploreCompatible }) => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-xs font-mono-tech text-blue-400 font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Visión del Producto
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Encuentra lo que necesita tu vehículo.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            En el futuro podrás descubrir piezas y accesorios compatibles con tus modelos RC de forma automática.
          </p>
        </div>

        {/* Visual Architecture Flow: Mi vehículo -> Traxxas Slash -> Repuestos -> Marketplace */}
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop horizontal flow / Mobile vertical stack */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center relative">
            {/* Step 1: Mi Vehículo */}
            <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl text-center space-y-2 hover:border-orange-500/40 transition-colors shadow-lg">
              <div className="w-10 h-10 mx-auto rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 font-mono-tech text-xs font-bold">
                01
              </div>
              <span className="text-[11px] font-mono-tech uppercase tracking-wider text-orange-400 font-bold block">
                Garage Digital
              </span>
              <h4 className="font-display font-bold text-white text-base">Mi Vehículo</h4>
              <p className="text-xs text-slate-400">Modelo registrado en tu colección personal.</p>
            </div>

            {/* Step 2: Traxxas Slash 4x4 */}
            <div className="bg-slate-900/90 border-2 border-orange-500/50 p-5 rounded-2xl text-center space-y-2 shadow-xl shadow-orange-500/10 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-orange-500 text-white text-[10px] font-mono-tech font-bold uppercase tracking-wider">
                Ejemplo
              </span>
              <div className="w-10 h-10 mx-auto rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-mono-tech text-xs font-bold">
                02
              </div>
              <span className="text-[11px] font-mono-tech uppercase tracking-wider text-orange-400 font-bold block">
                Ficha Técnica
              </span>
              <h4 className="font-display font-bold text-white text-base">Traxxas Slash 4x4 VXL</h4>
              <p className="text-xs text-slate-300">1/10 · 4WD · Short Course</p>
            </div>

            {/* Step 3: Repuestos y Componentes */}
            <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl text-center space-y-2 hover:border-orange-500/40 transition-colors shadow-lg">
              <div className="w-10 h-10 mx-auto rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 font-mono-tech text-xs font-bold">
                03
              </div>
              <span className="text-[11px] font-mono-tech uppercase tracking-wider text-amber-400 font-bold block">
                Match Algorítmico
              </span>
              <h4 className="font-display font-bold text-white text-base">Repuestos & Partes</h4>
              <p className="text-xs text-slate-400">Filtrado automático por compatibilidad de chasis.</p>
            </div>

            {/* Step 4: Marketplace */}
            <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl text-center space-y-2 hover:border-emerald-500/40 transition-colors shadow-lg">
              <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono-tech text-xs font-bold">
                04
              </div>
              <span className="text-[11px] font-mono-tech uppercase tracking-wider text-emerald-400 font-bold block">
                Comunidad
              </span>
              <h4 className="font-display font-bold text-white text-base">Marketplace Activo</h4>
              <p className="text-xs text-slate-400">Ofertas reales de pilotos en Colombia.</p>
            </div>
          </div>

          {/* Visual Future Vision Roadmap banner */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-display font-bold text-white text-base">
                    Sistema Inteligente de Compatibilidad RC
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono-tech font-bold uppercase bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    Fase 2 Roadmap
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1 max-w-xl">
                  Se acabaron las dudas sobre si un piñón métrico, un combo brushless o unos brazos de suspensión le sirven a tu chasis. RC HUB verificará la compatibilidad antes de comprar.
                </p>
              </div>
            </div>

            <button
              onClick={onExploreCompatible}
              className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-orange-500 transition-colors cursor-pointer"
            >
              <span>Ver repuestos disponibles</span>
              <ChevronRight className="w-4 h-4 text-orange-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
