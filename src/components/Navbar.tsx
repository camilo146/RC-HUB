import React, { useState, useEffect } from 'react';
import { Menu, X, Users, ArrowRight } from 'lucide-react';
import { ZonaRcLogo } from './ZonaRcLogo';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0E1012]/95 backdrop-blur-md border-b border-[#26292E] shadow-2xl shadow-black/60 py-2 sm:py-3'
          : 'bg-gradient-to-b from-black/90 via-black/45 to-transparent border-b border-white/5 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
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
          <nav className="hidden lg:flex items-center gap-7">
            <button
              onClick={() => handleLinkClick('el-problema')}
              className="text-xs uppercase font-tech tracking-wider text-[#A0A6B2] hover:text-white transition-colors cursor-pointer"
            >
              ¿Por qué ZONA RC?
            </button>
            <button
              onClick={() => handleLinkClick('que-construimos')}
              className="text-xs uppercase font-tech tracking-wider text-[#A0A6B2] hover:text-white transition-colors cursor-pointer"
            >
              Los 4 pilares
            </button>
            <button
              onClick={() => handleLinkClick('modalidades')}
              className="text-xs uppercase font-tech tracking-wider text-[#A0A6B2] hover:text-white transition-colors cursor-pointer"
            >
              Modalidades
            </button>
            <button
              onClick={() => handleLinkClick('vista-previa')}
              className="text-xs uppercase font-tech tracking-wider text-[#A0A6B2] hover:text-white transition-colors cursor-pointer"
            >
              Vista preliminar
            </button>
            <button
              onClick={() => handleLinkClick('hoja-de-ruta')}
              className="text-xs uppercase font-tech tracking-wider text-[#A0A6B2] hover:text-white transition-colors cursor-pointer"
            >
              Hoja de ruta
            </button>
            <button
              onClick={() => handleLinkClick('detras-de-rchub')}
              className="text-xs uppercase font-tech tracking-wider text-[#A0A6B2] hover:text-white transition-colors cursor-pointer"
            >
              El creador
            </button>
            <button
              onClick={() => handleLinkClick('contacto')}
              className="text-xs uppercase font-tech tracking-wider text-[#FF5500] hover:text-white font-bold transition-colors cursor-pointer"
            >
              Participa
            </button>
          </nav>

          {/* Desktop Right Action: Únete a la comunidad */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://wa.me/573132233304?text=Hola%2C%20Camilo.%20Quiero%20unirme%20a%20la%20comunidad%20ZONA%20RC."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-tech font-bold uppercase tracking-wider text-white bg-[#FF5500] hover:bg-[#E64A19] shadow-md shadow-black/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Users className="w-3.5 h-3.5" />
              <span>ÚNETE A LA COMUNIDAD</span>
            </a>
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
              className="px-3 py-2 text-left text-sm font-semibold text-[#FF5500] hover:text-white hover:bg-[#17191C] rounded-md transition-colors"
            >
              Participa
            </button>
          </nav>

          <div className="pt-3 border-t border-[#26292E]">
            <button
              onClick={() => handleLinkClick('contacto')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-tech font-bold uppercase tracking-wider text-white bg-[#FF5500] hover:bg-[#E64A19] transition-colors"
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
