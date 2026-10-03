import React from 'react';
import { ArrowRight, Sparkles, Shield, Wrench, Compass, Users } from 'lucide-react';

interface HeroProps {
  onExploreMarketplace: () => void;
  onWantToSell: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreMarketplace,
  onWantToSell,
  onNavigateSection,
}) => {
  return (
    <section className="relative pt-6 pb-16 lg:pt-12 lg:pb-28 overflow-hidden">
      {/* Background motorsport grid glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-orange-600/15 via-amber-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-orange-400 font-semibold tracking-wide">RC HUB COLOMBIA</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">Plataforma Especializada</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.08]">
              El mundo RC, <br />
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                en un solo lugar.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Compra, vende y descubre vehículos, repuestos y experiencias dentro de la comunidad RC.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreMarketplace}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-400 hover:to-amber-500 shadow-xl shadow-orange-600/30 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Explorar Marketplace</span>
                <ArrowRight className="w-5 h-5 text-white/90" />
              </button>

              <button
                onClick={onWantToSell}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 hover:text-white transition-all duration-200 cursor-pointer"
              >
                <span>Quiero vender</span>
                <Sparkles className="w-4 h-4 text-orange-400" />
              </button>
            </div>

            {/* Ecosystem Pills */}
            <div className="pt-6 border-t border-slate-800/60 flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <button
                onClick={() => onNavigateSection('marketplace')}
                className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-850 border border-slate-800 text-xs text-slate-300 hover:text-orange-400 hover:border-orange-500/40 transition-colors"
              >
                <Compass className="w-3.5 h-3.5 text-orange-400" />
                <span className="font-semibold">Marketplace</span>
              </button>

              <button
                onClick={() => onNavigateSection('garage')}
                className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-850 border border-slate-800 text-xs text-slate-300 hover:text-orange-400 hover:border-orange-500/40 transition-colors"
              >
                <Wrench className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-semibold">Garage</span>
              </button>

              <button
                onClick={() => onNavigateSection('comunidad')}
                className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-850 border border-slate-800 text-xs text-slate-300 hover:text-orange-400 hover:border-orange-500/40 transition-colors"
              >
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-semibold">Comunidad</span>
              </button>

              <div className="flex items-center gap-1.5 pl-2 text-xs text-slate-400 font-mono-tech">
                <Shield className="w-3.5 h-3.5 text-orange-400" />
                <span>+1,200 pilotos en Colombia</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero RC Car Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer frame styling */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900/40 shadow-2xl shadow-black/60 group">
                <img
                  src="/images/hero-rc.jpg"
                  alt="Vehículo RC deportivo en pista todoterreno"
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Subtle dark gradient overlay for telemetry readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Bottom telemetry overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80 text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <div>
                      <p className="font-bold text-white font-mono-tech tracking-wide">
                        1/8 STADIUM TRUCK · 4S LIPO
                      </p>
                      <p className="text-[11px] text-slate-400">Pista Off-Road Tocancipá</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="inline-block px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30 text-[10px] font-mono-tech font-bold uppercase">
                      Potencia Brushless
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating tech badge 1: Top Right */}
              <div className="hidden sm:flex absolute -top-4 -right-4 items-center gap-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 shadow-xl shadow-black/40 animate-in fade-in zoom-in duration-300">
                <div className="w-9 h-9 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-mono-tech uppercase tracking-wider text-slate-400 font-semibold">
                    Mi Garage
                  </p>
                  <p className="text-xs font-bold text-white">Telemetría y Repuestos</p>
                </div>
              </div>

              {/* Floating tech badge 2: Bottom Left */}
              <div className="hidden sm:flex absolute -bottom-5 -left-4 items-center gap-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 shadow-xl shadow-black/40">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-mono-tech uppercase tracking-wider text-slate-400 font-semibold">
                    Mercado Seguro
                  </p>
                  <p className="text-xs font-bold text-white">Pilotos Verificados COL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
