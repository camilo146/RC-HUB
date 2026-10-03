import React, { useState, useEffect } from 'react';
import { Menu, X, PlusCircle, User, Compass, Wrench, Users, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, sectionId?: string) => void;
  onOpenLogin: () => void;
  onOpenPublish: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenLogin,
  onOpenPublish,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (view: string, sectionId?: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(view, sectionId);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('landing')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 shadow-md shadow-orange-500/30 group-hover:scale-105 transition-transform duration-200">
              <div className="w-5 h-5 border-2 border-white/90 rounded-sm rotate-45 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-slate-950 border border-orange-500/50 rounded-full flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping"></span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-2xl tracking-tight text-white group-hover:text-orange-400 transition-colors">
                  RC<span className="text-orange-500">.</span>HUB
                </span>
                <span className="text-[9px] font-mono-tech tracking-wider uppercase bg-orange-500/10 text-orange-400 border border-orange-500/30 px-1.5 py-0.5 rounded">
                  COL
                </span>
              </div>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400">
                Radio Control Colombia
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleLinkClick('landing', 'marketplace')}
              className={`text-sm font-semibold transition-colors duration-150 hover:text-orange-400 ${
                currentView === 'marketplace' ? 'text-orange-400' : 'text-slate-300'
              }`}
            >
              Marketplace
            </button>
            <button
              onClick={() => handleLinkClick('landing', 'garage')}
              className={`text-sm font-semibold transition-colors duration-150 hover:text-orange-400 ${
                currentView === 'garage' ? 'text-orange-400' : 'text-slate-300'
              }`}
            >
              Garage
            </button>
            <button
              onClick={() => handleLinkClick('landing', 'comunidad')}
              className={`text-sm font-semibold transition-colors duration-150 hover:text-orange-400 ${
                currentView === 'comunidad' ? 'text-orange-400' : 'text-slate-300'
              }`}
            >
              Comunidad
            </button>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenLogin}
              className="text-sm font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
            >
              <User className="w-4 h-4 text-slate-400" />
              Ingresar
            </button>

            <button
              onClick={onOpenPublish}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-400 hover:to-amber-500 shadow-md shadow-orange-600/30 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Publicar</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-200"></span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenPublish}
              className="p-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors shadow-sm"
              title="Publicar"
            >
              <PlusCircle className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="px-5 pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => handleLinkClick('landing', 'marketplace')}
                className="flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-orange-400 transition-colors text-left"
              >
                <Compass className="w-5 h-5 text-orange-400" />
                Marketplace Especializado
              </button>
              <button
                onClick={() => handleLinkClick('landing', 'garage')}
                className="flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-orange-400 transition-colors text-left"
              >
                <Wrench className="w-5 h-5 text-orange-400" />
                Mi Garage
              </button>
              <button
                onClick={() => handleLinkClick('landing', 'comunidad')}
                className="flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-orange-400 transition-colors text-left"
              >
                <Users className="w-5 h-5 text-orange-400" />
                Pistas y Comunidad
              </button>
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenPublish();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-orange-500 to-amber-600 shadow-md shadow-orange-500/25"
              >
                <PlusCircle className="w-5 h-5" />
                Publicar un Vehículo o Repuesto
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-slate-300 bg-slate-900 border border-slate-800 hover:text-white"
              >
                <User className="w-4 h-4" />
                Ingresar a mi cuenta
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2 font-mono-tech">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Mercado seguro de Radio Control Colombia</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
