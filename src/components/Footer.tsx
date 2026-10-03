import React from 'react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenLegal: (type: 'terminos' | 'privacidad') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenLegal }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-900">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-orange-500/20">
                RC
              </div>
              <span className="font-display font-black text-2xl tracking-tight text-white">
                RC<span className="text-orange-500">.</span>HUB
              </span>
            </div>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              El ecosistema digital para la comunidad RC.
            </p>

            <p className="text-xs text-slate-400 max-w-sm">
              Conectando pilotos, repuestos, pistas y eventos en Colombia desde Bucaramanga, Bogotá, Medellín, Cali y Barranquilla.
            </p>

            {/* Social Links (placeholders) */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-orange-400 hover:border-orange-500/50 transition-colors"
                title="Instagram RC HUB"
              >
                <span className="text-xs font-mono-tech font-bold">IG</span>
              </a>
              <a
                href="#facebook"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-orange-400 hover:border-orange-500/50 transition-colors"
                title="Facebook RC HUB"
              >
                <span className="text-xs font-mono-tech font-bold">FB</span>
              </a>
              <a
                href="#whatsapp"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                title="Comunidad WhatsApp"
              >
                <span className="text-xs font-mono-tech font-bold">WA</span>
              </a>
            </div>
          </div>

          {/* Links Column 1: Producto */}
          <div>
            <h4 className="text-xs font-mono-tech uppercase font-bold text-slate-200 tracking-wider mb-4">
              Producto
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigateSection('marketplace')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Marketplace
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('garage')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Garage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('comunidad')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Comunidad
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Comunidad */}
          <div>
            <h4 className="text-xs font-mono-tech uppercase font-bold text-slate-200 tracking-wider mb-4">
              Comunidad
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigateSection('comunidad')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Pistas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('comunidad')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Eventos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('comunidad')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Clubes
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Legal */}
          <div>
            <h4 className="text-xs font-mono-tech uppercase font-bold text-slate-200 tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onOpenLegal('terminos')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Términos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('privacidad')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Privacidad
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} RC HUB Colombia. Todos los derechos reservados.</p>

          <div className="flex items-center gap-2 font-mono-tech">
            <span>Hecho con pasión por pilotos RC en Colombia</span>
            <span>🇨🇴</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
