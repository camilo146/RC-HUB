import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/573132233304?text=Hola%2C%20Camilo.%20Me%20gustar%C3%ADa%20conversar%20sobre%20ZONA%20RC.';

  return (
    <div className="fixed bottom-24 right-5 sm:bottom-28 sm:right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar con Camilo por WhatsApp"
        id="floating-whatsapp-btn"
        className="animate-attention-wiggle flex items-center gap-2.5 p-3 sm:px-4 sm:py-2.5 rounded-full bg-[#17191C]/95 hover:bg-[#101214] text-[#F4F2ED] border border-[#26292E] hover:border-[#25D366] shadow-2xl backdrop-blur-md transition-all duration-200 cursor-pointer group hover:scale-105 active:scale-95"
      >
        {/* Pulsing online indicator */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>

        {/* WhatsApp Icon */}
        <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />

        {/* Discreet label for desktop and tablet */}
        <span className="hidden sm:inline text-xs font-tech text-[#C8C4BC] group-hover:text-white transition-colors font-medium">
          Hablar con Camilo
        </span>
      </a>
    </div>
  );
};
