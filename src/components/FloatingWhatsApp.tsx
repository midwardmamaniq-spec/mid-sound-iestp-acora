import React, { useState } from 'react';
import { WhatsAppIcon } from './SocialIcons';
import { X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl =
    'https://wa.me/51968752081?text=Hola,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20alquiler%20de%20equipos%20de%20sonido';

  return (
    <aside aria-label="Contacto directo por WhatsApp" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2 group print:hidden">
      
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="bg-[#0B1220]/95 backdrop-blur-md rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.8)] border border-cyan-500/30 p-3 max-w-[240px] text-xs text-slate-200 animate-in fade-in slide-in-from-bottom-2 duration-300 relative">
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Cerrar mensaje"
            className="absolute top-1.5 right-1.5 p-1 text-slate-400 hover:text-white rounded-md transition-colors cursor-pointer"
          >
            <X className="w-3 h-3" />
          </button>
          
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
            <span className="font-bold text-white text-[11px] tracking-wide">IESTP Ácora · MID SOUND</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-snug">
            ¿Deseas cotizar o consultar disponibilidad para tu evento? ¡Escríbenos directamente!
          </p>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir chat de WhatsApp para consulta de alquiler de sonido"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:shadow-[0_0_35px_rgba(37,211,102,0.8)] transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
      >
        {/* Subtle breathing ripple */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10 pointer-events-none"></span>

        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />

        {/* Hover label for desktop */}
        <span className="sr-only">Contactar por WhatsApp al IESTP Ácora</span>
      </a>

    </aside>
  );
};
