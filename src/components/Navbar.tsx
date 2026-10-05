import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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

  const whatsappUrl =
    'https://wa.me/573132233304?text=Hola%2C%20vi%20el%20proyecto%20RC%20HUB%20y%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20y%20compartir%20algunas%20ideas.';

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#101214]/90 backdrop-blur-md border-b border-[#26292E]'
          : 'bg-transparent border-b border-transparent'
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
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-md bg-[#101214] border border-[#26292E] flex items-center justify-center font-tech font-bold text-xs text-[#F4F2ED] tracking-wider group-hover:border-[#C65D2E] transition-colors">
              RC
            </div>
            <div className="flex flex-col">
              <span className="font-editorial font-bold text-lg tracking-tight text-[#F4F2ED]">
                RC HUB
              </span>
              <span className="text-[10px] font-tech text-[#C65D2E] uppercase tracking-wider -mt-0.5 font-medium">
                Radio Control Colombia
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleLinkClick('que-construimos')}
              className="text-xs uppercase font-tech tracking-wider text-[#8D949C] hover:text-[#F4F2ED] transition-colors cursor-pointer"
            >
              Qué estamos construyendo
            </button>
            <button
              onClick={() => handleLinkClick('vista-previa')}
              className="text-xs uppercase font-tech tracking-wider text-[#8D949C] hover:text-[#F4F2ED] transition-colors cursor-pointer"
            >
              Vista previa
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
              className="text-xs uppercase font-tech tracking-wider text-[#8D949C] hover:text-[#F4F2ED] transition-colors cursor-pointer"
            >
              Contacto
            </button>
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-semibold text-[#F4F2ED] bg-[#101214] border border-[#26292E] hover:border-[#C65D2E] hover:text-white transition-all duration-150 cursor-pointer"
            >
              <span>Participar en el proyecto</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C65D2E]" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center">
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
        <div className="md:hidden bg-[#101214] border-b border-[#26292E] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1">
            <button
              onClick={() => handleLinkClick('que-construimos')}
              className="px-3 py-2 text-left text-sm text-[#8D949C] hover:text-[#F4F2ED] hover:bg-[#17191C] rounded-md transition-colors"
            >
              Qué estamos construyendo
            </button>
            <button
              onClick={() => handleLinkClick('vista-previa')}
              className="px-3 py-2 text-left text-sm text-[#8D949C] hover:text-[#F4F2ED] hover:bg-[#17191C] rounded-md transition-colors"
            >
              Vista previa
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
              className="px-3 py-2 text-left text-sm text-[#8D949C] hover:text-[#F4F2ED] hover:bg-[#17191C] rounded-md transition-colors"
            >
              Contacto
            </button>
          </nav>

          <div className="pt-3 border-t border-[#26292E]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md text-xs font-semibold text-[#F4F2ED] bg-[#C65D2E] hover:bg-[#B34F24] transition-colors"
            >
              <span>Participar en el proyecto (WhatsApp)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
