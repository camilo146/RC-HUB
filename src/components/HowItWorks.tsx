import React from 'react';
import { Search, MessageSquareCode, Trophy, ShieldCheck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-slate-900/30 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-mono-tech text-slate-300 font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
            Simple & Transparente
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            ¿Cómo funciona?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Diseñado especialmente para la dinámica técnica del hobby de radio control.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Step 01 */}
          <div className="relative bg-slate-950/70 rounded-2xl border border-slate-800 p-8 flex flex-col justify-between hover:border-orange-500/40 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-4xl font-extrabold text-orange-500/30 group-hover:text-orange-500/50 transition-colors">
                  01
                </span>
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                  <Search className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl text-white">Encuentra</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Busca vehículos, repuestos y accesorios con especificaciones precisas: escala, tipo de tracción, motorización y compatibilidad verificada.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/60">
              <span className="text-[11px] font-mono-tech text-slate-400 uppercase tracking-wider">
                Filtros por Escala y Ciudad
              </span>
            </div>
          </div>

          {/* Step 02 */}
          <div className="relative bg-slate-950/70 rounded-2xl border border-slate-800 p-8 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-4xl font-extrabold text-amber-500/30 group-hover:text-amber-500/50 transition-colors">
                  02
                </span>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <MessageSquareCode className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl text-white">Conecta</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Contacta directamente con otros aficionados y pilotos calificados. Resuelve dudas técnicas, valida estado de baterías y acuerda entregas seguras.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/60">
              <span className="text-[11px] font-mono-tech text-slate-400 uppercase tracking-wider">
                Trato Directo entre Pilotos
              </span>
            </div>
          </div>

          {/* Step 03 */}
          <div className="relative bg-slate-950/70 rounded-2xl border border-slate-800 p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-4xl font-extrabold text-emerald-500/30 group-hover:text-emerald-500/50 transition-colors">
                  03
                </span>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Trophy className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl text-white">Disfruta</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Compra, vende y forma parte de la comunidad RC. Lleva tu modelo a la pista, actualiza tus componentes y vive al máximo el hobby.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/60">
              <span className="text-[11px] font-mono-tech text-slate-400 uppercase tracking-wider">
                Garantía y Pasión por el RC
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
