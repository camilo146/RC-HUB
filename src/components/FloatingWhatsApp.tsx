import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/573132233304?text=Hola%2C%20Camilo.%20Conoc%C3%AD%20BOX%20HUB%20y%20me%20gustar%C3%ADa%20conversar%20contigo%20sobre%20el%20proyecto.';

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2 group">
      {/* Friendly handwritten speech bubble note (visible on desktop and tablet) */}
      <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101214]/95 border border-[#26292E] shadow-xl backdrop-blur-md transition-all duration-300 transform group-hover:-translate-y-0.5">
        <span className="font-handwritten text-base text-[#F4F2ED]">
          ¿Dudas o ideas sobre el proyecto? ✍️
        </span>
      </div>

      {/* Main floating action button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear con Camilo por WhatsApp"
        id="floating-whatsapp-btn"
        className="flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#17191C] hover:bg-[#1f2227] text-[#F4F2ED] border border-[#26292E] hover:border-[#C65D2E] shadow-2xl transition-all duration-200 cursor-pointer transform hover:scale-105 active:scale-95"
      >
        {/* Pulsing online indicator */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>

        {/* WhatsApp Icon with accent color */}
        <div className="w-8 h-8 rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366]">
          <MessageCircle className="w-5 h-5 fill-current" />
        </div>

        {/* Text for desktop & mobile */}
        <div className="flex flex-col text-left">
          <span className="text-xs font-semibold text-[#F4F2ED] tracking-tight leading-tight">
            Charla con Camilo
          </span>
          <span className="text-[10px] font-tech text-emerald-400 leading-tight">
            En línea por WhatsApp
          </span>
        </div>
      </a>
    </div>
  );
};
