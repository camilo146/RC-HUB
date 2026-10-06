import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { ZonaRcLogo } from './ZonaRcLogo';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#101214]/95 backdrop-blur-md border-b border-[#26292E] shadow-lg shadow-black/40'
          : 'bg-[#17191C]/80 backdrop-blur-sm border-b border-[#26292E]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center group focus:outline-none transition-transform hover:scale-[1.02]"
            aria-label="ZONA RC COL — Inicio"
          >
            <ZonaRcLogo size="md" showTricolor={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => handleLinkClick('el-problema')}
              className="text-xs uppercase font-tech tracking-wider text-[#8D949C] hover:text-[#F4F2ED] transition-colors cursor-pointer"
            >
              ¿Por qué ZONA RC?
            </button>
            <button
              onClick={() => handleLinkClick('que-construimos')}
              className="text-xs uppercase font-tech tracking-wider text-[#8D949C] hover:text-[#F4F2ED] transition-colors cursor-pointer"
            >
              Los 4 pilares
            </button>
            <button
              onClick={() => handleLinkClick('modalidades')}
              className="text-xs uppercase font-tech tracking-wider text-[#8D949C] hover:text-[#F4F2ED] transition-colors cursor-pointer"
            >
              Modalidades
            </button>
            <button
              onClick={() => handleLinkClick('vista-previa')}
              className="text-xs uppercase font-tech tracking-wider text-[#8D949C] hover:text-[#F4F2ED] transition-colors cursor-pointer"
            >
              Prototipo
            </button>
            <button
              onClick={() => handleLinkClick('hoja-de-ruta')}
              className="text-xs uppercase font-tech tracking-wider text-[#8D949C] hover:text-[#F4F2ED] transition-colors cursor-pointer"
            >
              Hoja de ruta
            </button>
            <button
              onClick={() => handleLinkClick('detras-de-rchub')}
              className="text-xs uppercase font-tech tracking-wider text-[#8D949C] hover:text-[#F4F2ED] transition-colors cursor-pointer"
            >
              El creador
            </button>
            <button
              onClick={() => handleLinkClick('contacto')}
              className="text-xs uppercase font-tech tracking-wider text-[#C65D2E] hover:text-white font-bold transition-colors cursor-pointer"
            >
              Participa
            </button>
          </nav>

          {/* Desktop Right Action: Participa */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => handleLinkClick('contacto')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-tech font-bold uppercase tracking-wider text-[#F4F2ED] bg-[#17191C] border border-[#26292E] hover:border-[#C65D2E] hover:text-white transition-all duration-150 cursor-pointer group"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Quiero ser parte</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C65D2E] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-[#8D949C] hover:text-[#F4F2ED] hover:bg-[#101214] transition-colors focus:outline-none"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#101214] border-b border-[#26292E] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1">
            <button
              onClick={() => handleLinkClick('el-problema')}
              className="px-3 py-2 text-left text-sm text-[#8D949C] hover:text-[#F4F2ED] hover:bg-[#17191C] rounded-md transition-colors"
            >
              ¿Por qué ZONA RC?
            </button>
            <button
              onClick={() => handleLinkClick('que-construimos')}
              className="px-3 py-2 text-left text-sm text-[#8D949C] hover:text-[#F4F2ED] hover:bg-[#17191C] rounded-md transition-colors"
            >
              Los 4 pilares
            </button>
            <button
              onClick={() => handleLinkClick('modalidades')}
              className="px-3 py-2 text-left text-sm text-[#8D949C] hover:text-[#F4F2ED] hover:bg-[#17191C] rounded-md transition-colors"
            >
              Modalidades RC
            </button>
            <button
              onClick={() => handleLinkClick('vista-previa')}
              className="px-3 py-2 text-left text-sm text-[#8D949C] hover:text-[#F4F2ED] hover:bg-[#17191C] rounded-md transition-colors"
            >
              Prototipo visual
            </button>
            <button
              onClick={() => handleLinkClick('hoja-de-ruta')}
              className="px-3 py-2 text-left text-sm text-[#8D949C] hover:text-[#F4F2ED] hover:bg-[#17191C] rounded-md transition-colors"
            >
              Hoja de ruta
            </button>
            <button
              onClick={() => handleLinkClick('detras-de-rchub')}
              className="px-3 py-2 text-left text-sm text-[#8D949C] hover:text-[#F4F2ED] hover:bg-[#17191C] rounded-md transition-colors"
            >
              El creador
            </button>
            <button
              onClick={() => handleLinkClick('contacto')}
              className="px-3 py-2 text-left text-sm font-semibold text-[#C65D2E] hover:text-white hover:bg-[#17191C] rounded-md transition-colors"
            >
              Participa
            </button>
          </nav>

          <div className="pt-3 border-t border-[#26292E]">
            <button
              onClick={() => handleLinkClick('contacto')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-md text-xs font-tech font-bold uppercase tracking-wider text-white bg-[#C65D2E] hover:bg-[#B34F24] transition-colors"
            >
              <span>Quiero ser parte</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
