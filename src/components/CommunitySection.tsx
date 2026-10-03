import React from 'react';
import { Flag, Calendar, Users, ArrowRight, MapPin, ChevronRight } from 'lucide-react';

interface CommunitySectionProps {
  onExploreCommunity: () => void;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({ onExploreCommunity }) => {
  return (
    <section id="comunidad" className="py-16 lg:py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono-tech text-emerald-400 font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            Ecosistema & Pilotos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Más que un Marketplace.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Descubre pistas, clubes y eventos RC cerca de ti.
          </p>
        </div>

        {/* Three Community Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: 🏁 Pistas */}
          <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 hover:shadow-xl group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400">
                <Flag className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono-tech uppercase font-bold text-orange-400 tracking-wider">
                  01 · Circuitos
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-1 group-hover:text-orange-400 transition-colors">
                  🏁 Pistas
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Encuentra lugares donde practicar. Circuitos de arcilla, asfalto on-road y pistas de crawler técnico en toda Colombia.
              </p>

              {/* Sample spot preview */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs space-y-1">
                <div className="flex items-center justify-between text-slate-200 font-semibold">
                  <span>Pista Off-Road Tocancipá</span>
                  <span className="text-[10px] font-mono-tech text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Activa
                  </span>
                </div>
                <p className="text-slate-400 text-[11px] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-orange-400 shrink-0" />
                  Bogotá / Cundinamarca
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80">
              <button
                onClick={onExploreCommunity}
                className="text-xs font-bold text-slate-300 group-hover:text-orange-400 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Ver mapa de pistas</span>
                <ChevronRight className="w-3.5 h-3.5 text-orange-400" />
              </button>
            </div>
          </div>

          {/* Card 2: 📅 Eventos */}
          <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 hover:shadow-xl group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Calendar className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono-tech uppercase font-bold text-amber-400 tracking-wider">
                  02 · Competencia
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-1 group-hover:text-amber-400 transition-colors">
                  📅 Eventos
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Descubre próximas carreras y encuentros. Campeonatos nacionales, válidas locales y jornadas de bashing de fin de semana.
              </p>

              {/* Sample spot preview */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs space-y-1">
                <div className="flex items-center justify-between text-slate-200 font-semibold">
                  <span>Copa Colombia RC 2026</span>
                  <span className="text-[10px] font-mono-tech text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                    18-19 Oct
                  </span>
                </div>
                <p className="text-slate-400 text-[11px] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-orange-400 shrink-0" />
                  Medellín, Antioquia
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80">
              <button
                onClick={onExploreCommunity}
                className="text-xs font-bold text-slate-300 group-hover:text-amber-400 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Ver calendario de carreras</span>
                <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>

          {/* Card 3: 👥 Clubes */}
          <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 hover:shadow-xl group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Users className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono-tech uppercase font-bold text-emerald-400 tracking-wider">
                  03 · Comunidad
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-1 group-hover:text-emerald-400 transition-colors">
                  👥 Clubes
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Conecta con otros pilotos. Comparte configuraciones, resuelve dudas de electrónica y rueda en grupo con entusiastas de tu ciudad.
              </p>

              {/* Sample spot preview */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs space-y-1">
                <div className="flex items-center justify-between text-slate-200 font-semibold">
                  <span>RC Scale & Bashing COL</span>
                  <span className="text-[10px] font-mono-tech text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    +1.4K Pilotos
                  </span>
                </div>
                <p className="text-slate-400 text-[11px] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-orange-400 shrink-0" />
                  Red Nacional Colombia
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80">
              <button
                onClick={onExploreCommunity}
                className="text-xs font-bold text-slate-300 group-hover:text-emerald-400 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Conocer clubes locales</span>
                <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Section CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onExploreCommunity}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-slate-900 hover:bg-slate-850 border border-slate-700 hover:border-emerald-500/60 shadow-lg transition-all duration-200 cursor-pointer"
          >
            <span>Explorar comunidad</span>
            <ArrowRight className="w-5 h-5 text-emerald-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
