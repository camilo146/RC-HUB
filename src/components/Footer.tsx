import React from 'react';
import { ArrowUpRight, MessageCircle, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

const JOIN_WHATSAPP_URL =
  'https://wa.me/573132233304?text=Hola%2C%20Camilo.%20Quiero%20ser%20parte%20de%20ZONA%20RC%20desde%20el%20comienzo%20y%20estar%20cuando%20salga.';

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#101214] border-t border-[#26292E] text-slate-400">
      {/* Pre-footer Call to Action: Belonging */}
      <div className="border-b border-[#26292E] py-16 bg-[#17191C]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="font-handwritten text-2xl text-[#C65D2E] block -rotate-1">
            «Construyamos ZONA RC juntos»
          </span>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#F4F2ED] max-w-2xl mx-auto leading-tight">
            Sé parte desde el comienzo.
          </h3>
          <p className="text-sm sm:text-base text-[#8D949C] max-w-xl mx-auto leading-relaxed">
            El radio control en Colombia merece su propio espacio. Si quieres que esta plataforma exista y quieres estar en primera fila cuando salga:
          </p>
          <div className="pt-2">
            <a
              href={JOIN_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-footer-join"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-md text-sm font-tech font-bold uppercase tracking-wider text-white bg-[#C65D2E] hover:bg-[#B34F24] transition-all shadow-xl hover:shadow-[#C65D2E]/25 cursor-pointer"
            >
              <span>QUIERO SER PARTE</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-[#26292E]">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#17191C] border border-[#26292E] flex items-center justify-center font-tech font-bold text-xs text-[#F4F2ED]">
                ZRC
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-editorial font-bold text-xl text-[#F4F2ED] tracking-tight">
                  ZONA RC
                </span>
                <span className="text-[10px] font-tech font-bold text-[#C65D2E] uppercase tracking-wider">
                  COL
                </span>
              </div>
            </div>

            <p className="font-handwritten text-2xl text-[#F4F2ED] pt-1">
              «RC es más que un hobby»
            </p>

            <p className="text-xs text-[#8D949C] max-w-md leading-relaxed">
              Iniciativa independiente creada por Camilo López Romero para conectar a la comunidad del radio control en Colombia: vehículos, repuestos, colecciones, pistas y modalidades.
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
                  onClick={() => onNavigate('el-problema')}
                  className="hover:text-[#F4F2ED] transition-colors cursor-pointer text-left"
                >
                  ¿Por qué ZONA RC?
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('que-construimos')}
                  className="hover:text-[#F4F2ED] transition-colors cursor-pointer text-left"
                >
                  Los 4 pilares
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('modalidades')}
                  className="hover:text-[#F4F2ED] transition-colors cursor-pointer text-left"
                >
                  Modalidades RC
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
                  El creador (Camilo)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="text-[#C65D2E] hover:text-white font-semibold transition-colors cursor-pointer text-left"
                >
                  Participa
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
              <p>WhatsApp con Camilo:</p>
              <a
                href="https://wa.me/573132233304?text=Hola%2C%20Camilo.%20Me%20gustar%C3%ADa%20conversar%20sobre%20ZONA%20RC."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-tech text-[#F4F2ED] hover:text-[#C65D2E] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#C65D2E]" />
                <span>+57 313 223 3304</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <p className="text-[11px] font-tech text-[#8D949C] pt-1">
                Bucaramanga · Abierto a toda Colombia
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-tech text-[#8D949C]">
          <p>© {new Date().getFullYear()} ZONA RC COL — Radio Control Colombia. Proyecto independiente en construcción.</p>
          <div className="flex items-center gap-2">
            <span>Construido junto a la comunidad</span>
            <span>🇨🇴</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
