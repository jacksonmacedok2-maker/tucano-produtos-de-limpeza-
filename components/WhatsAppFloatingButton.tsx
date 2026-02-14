
import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { CONTACT_INFO, WA_ICON_URL } from '../constants';

const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const autoShowTriggered = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      // Verifica se já mostrou o popup nesta sessão para não ser invasivo
      const hasShown = sessionStorage.getItem('tucano_wa_popup_shown');
      
      if (!hasShown && !autoShowTriggered.current && window.scrollY > 300) {
        autoShowTriggered.current = true;
        setShowTooltip(true);
        sessionStorage.setItem('tucano_wa_popup_shown', 'true');

        // Esconde automaticamente após 5 segundos
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
    <div className="fixed bottom-6 right-6 z-[9999] flex items-end flex-col">
      {/* Tooltip / Popup */}
      {(showTooltip || isHovered) && (
        <div 
          className={`mb-4 mr-2 bg-white text-slate-800 p-4 rounded-2xl shadow-2xl border border-slate-100 max-w-[240px] relative animate-in fade-in slide-in-from-bottom-2 duration-300`}
        >
          {/* Seta do Balão */}
          <div className="absolute bottom-[-8px] right-6 w-4 h-4 bg-white rotate-45 border-r border-b border-slate-100"></div>
          
          <div className="flex items-start gap-3">
            <div className="bg-green-50 p-1.5 rounded-full shrink-0 flex items-center justify-center overflow-hidden">
              <img src={WA_ICON_URL} alt="" className="w-8 h-8 object-contain scale-[1.3]" />
            </div>
            <div>
              <p className="text-sm font-bold leading-tight mb-1">Dúvidas?</p>
              <p className="text-xs text-slate-500 leading-snug">
                Fale com a gente no WhatsApp 👋
              </p>
            </div>
            <button 
              onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }}
              className="text-slate-300 hover:text-slate-500 transition-colors"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Botão Flutuante */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 relative group overflow-hidden p-0"
        aria-label="Falar no WhatsApp"
      >
        {/* Efeito de brilho no hover */}
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
        <img src={WA_ICON_URL} alt="WhatsApp" className="w-14 h-14 object-contain scale-[1.4] group-hover:rotate-12 transition-transform duration-300" />
      </button>
    </div>
  );
};

export default WhatsAppFloatingButton;
