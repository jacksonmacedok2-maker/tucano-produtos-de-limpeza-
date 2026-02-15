
import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { CONTACT_INFO, WA_ICON_URL } from '../constants';

const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const autoShowTriggered = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const hasShown = sessionStorage.getItem('tucano_wa_popup_shown');
      
      if (!hasShown && !autoShowTriggered.current && window.scrollY > 300) {
        autoShowTriggered.current = true;
        setShowTooltip(true);
        sessionStorage.setItem('tucano_wa_popup_shown', 'true');

        setTimeout(() => {
          setShowTooltip(false);
        }, 5000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(CONTACT_INFO.waMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[9999] flex items-end flex-col">
      {/* Tooltip / Popup - Agora com classes responsivas para ser menor no mobile */}
      {(showTooltip || isHovered) && (
        <div 
          className={`mb-4 mr-2 sm:mb-8 sm:mr-4 bg-white text-slate-800 p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-100 max-w-[220px] sm:max-w-[280px] relative animate-in fade-in slide-in-from-bottom-4 duration-500`}
        >
          {/* Seta do Balão */}
          <div className="absolute bottom-[-8px] sm:bottom-[-10px] right-8 sm:right-12 w-4 h-4 sm:w-5 sm:h-5 bg-white rotate-45 border-r border-b border-slate-100"></div>
          
          <div className="flex items-start gap-3 sm:gap-5">
            <div className="bg-green-50 p-1 rounded-full shrink-0 flex items-center justify-center overflow-hidden w-10 h-10 sm:w-14 sm:h-14">
              <img src={WA_ICON_URL} alt="" className="w-full h-full object-contain scale-[1.5]" />
            </div>
            <div className="pt-0.5 sm:pt-1">
              <p className="text-sm sm:text-lg font-black leading-tight mb-0.5 sm:mb-1 text-slate-900">Dúvidas?</p>
              <p className="text-[11px] sm:text-sm text-slate-500 leading-snug font-semibold">
                Estamos online. Chame agora! 👋
              </p>
            </div>
            <button 
              onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }}
              className="text-slate-300 hover:text-slate-900 transition-colors p-1 -mt-2 -mr-1 sm:-mt-1 sm:-mr-1"
            >
              <X size={16} className="sm:hidden" />
              <X size={20} className="hidden sm:block" />
            </button>
          </div>
        </div>
      )}

      {/* Botão Flutuante Extra Grande */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-20 h-20 sm:w-32 sm:h-32 flex items-center justify-center hover:scale-110 active:scale-90 transition-all duration-500 relative group"
        aria-label="Falar no WhatsApp"
      >
        <img 
          src={WA_ICON_URL} 
          alt="WhatsApp" 
          className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(37,211,102,0.45)] group-hover:rotate-12 transition-transform duration-500 scale-125" 
        />
        
        {/* Efeito de anel pulsante discreto ampliado */}
        <div className="absolute inset-0 rounded-full bg-green-500/15 animate-ping-large pointer-events-none scale-90 group-hover:hidden"></div>
      </button>

      <style>{`
        @keyframes ping-large {
          75%, 100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
        .animate-ping-large {
          animation: ping-large 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default WhatsAppFloatingButton;
