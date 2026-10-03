import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const whatsappUrl =
    'https://wa.me/573132233304?text=Hola%2C%20vi%20el%20proyecto%20RC%20HUB%20y%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20y%20compartir%20algunas%20ideas.';

  return (
    <footer className="bg-[#101214] border-t border-[#26292E] py-14 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-[#26292E]">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-sm bg-[#17191C] border border-[#26292E] flex items-center justify-center font-tech font-bold text-xs text-[#F4F2ED]">
                RC
              </div>
              <span className="font-editorial font-bold text-lg text-[#F4F2ED]">
                RC HUB
              </span>
            </div>

            <p className="text-sm text-[#8D949C] max-w-md leading-relaxed font-normal">
              RC HUB — Un proyecto para conectar a la comunidad del radio control.
            </p>

            <p className="text-xs text-[#8D949C] max-w-md leading-relaxed">
              Iniciativa independiente en fase de validación y desarrollo conceptual para aficionados en Colombia.
            </p>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-tech uppercase font-bold text-[#F4F2ED] tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs font-tech text-[#8D949C]">
              <li>
                <button
                  onClick={() => onNavigate('que-construimos')}
                  className="hover:text-[#F4F2ED] transition-colors cursor-pointer text-left"
                >
                  Qué estamos construyendo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('vista-previa')}
                  className="hover:text-[#F4F2ED] transition-colors cursor-pointer text-left"
                >
                  Vistas conceptuales
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('hoja-de-ruta')}
                  className="hover:text-[#F4F2ED] transition-colors cursor-pointer text-left"
                >
                  Hoja de ruta
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('detras-de-rchub')}
                  className="hover:text-[#F4F2ED] transition-colors cursor-pointer text-left"
                >
                  El creador
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="hover:text-[#F4F2ED] transition-colors cursor-pointer text-left"
                >
                  Participar en el proyecto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-tech uppercase font-bold text-[#F4F2ED] tracking-wider">
              Contacto Directo
            </h4>
            <div className="space-y-2 text-xs text-[#8D949C]">
              <p>WhatsApp Creador:</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-tech text-[#F4F2ED] hover:text-[#C65D2E] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#C65D2E]" />
                <span>+57 313 223 3304</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <p className="text-[11px] text-[#8D949C] pt-1">
                Bucaramanga · Cobertura Colombia
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-tech text-[#8D949C]">
          <p>© {new Date().getFullYear()} RC HUB Colombia. Proyecto en desarrollo.</p>
          <div className="flex items-center gap-2">
            <span>Construido junto a la comunidad de radio control</span>
            <span>🇨🇴</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
