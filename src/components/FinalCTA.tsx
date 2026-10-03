import React from 'react';
import { ArrowRight, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onExploreMarketplace: () => void;
  onCreateGarage: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onExploreMarketplace,
  onCreateGarage,
}) => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-orange-600/20 via-amber-600/15 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-12 lg:p-16 text-center shadow-2xl shadow-black relative overflow-hidden">
          {/* Subtle top border line accent */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-mono-tech text-orange-400 font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            La comunidad RC en Colombia
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
            Tu próximo RC <br />
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              empieza aquí.
            </span>
          </h2>

          {/* Subtext */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Únete a una comunidad creada para quienes realmente disfrutan el mundo del radio control.
          </p>

          {/* Dual Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onExploreMarketplace}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-400 hover:to-amber-500 shadow-xl shadow-orange-600/30 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              <span>Explorar Marketplace</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onCreateGarage}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-950/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 hover:text-white transition-all duration-200 cursor-pointer"
            >
              <Wrench className="w-4 h-4 text-orange-400" />
              <span>Crear mi Garage</span>
            </button>
          </div>

          {/* Trust bullets */}
          <div className="mt-10 pt-8 border-t border-slate-800/60 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono-tech">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Publicación sin comisiones ocultas
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Verificación de modelos auténticos
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Envíos coordinados a toda Colombia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
