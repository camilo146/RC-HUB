import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/573132233304?text=Hola%2C%20Camilo.%20Me%20gustar%C3%ADa%20conversar%20sobre%20BOX%20HUB.';

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar con Camilo por WhatsApp"
        id="floating-whatsapp-btn"
        className="flex items-center gap-2.5 p-3 sm:px-3.5 sm:py-2.5 rounded-full bg-[#17191C]/95 hover:bg-[#101214] text-[#F4F2ED] border border-[#26292E] hover:border-[#25D366]/60 shadow-xl backdrop-blur-md transition-all duration-200 cursor-pointer group hover:scale-105 active:scale-95"
      >
        {/* Pulsing online indicator */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>

        {/* WhatsApp Icon */}
        <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />

        {/* Discreet label for desktop only */}
        <span className="hidden sm:inline text-xs font-tech text-[#8D949C] group-hover:text-[#F4F2ED] transition-colors font-medium">
          Hablar con Camilo
        </span>
      </a>
    </div>
  );
};
