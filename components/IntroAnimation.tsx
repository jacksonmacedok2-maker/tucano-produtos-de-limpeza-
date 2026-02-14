
import React, { useEffect, useState, useRef } from 'react';
import { LOGO_URL } from '../constants';

const IntroAnimation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toucanRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Verificar se já rodou nesta sessão ou se prefere movimento reduzido
    const hasPlayed = sessionStorage.getItem('tucano_intro_played');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasPlayed || prefersReducedMotion) {
      document.body.classList.remove('intro-animating');
      return;
    }

    setIsVisible(true);
    document.body.classList.add('intro-animating');

    // Pequeno delay para garantir que o Header já renderizou e o DOM está pronto
    setTimeout(() => {
      startFlight();
    }, 500);
  }, []);

  const startFlight = () => {
    const toucan = toucanRef.current;
    const targetLogo = document.getElementById('header-logo-icon');
    
    if (!toucan || !targetLogo) {
      finishAnimation();
      return;
    }

    // Pegar coordenadas exatas do alvo (Logo no Header)
    const targetRect = targetLogo.getBoundingClientRect();
    const targetX = targetRect.left + targetRect.width / 2;
    const targetY = targetRect.top + targetRect.height / 2;

    // Posição inicial (fora da tela inferior esquerdo)
    const startX = -200;
    const startY = window.innerHeight + 200;

    // Definir posição inicial sem transição
    toucan.style.transition = 'none';
    toucan.style.left = `${startX}px`;
    toucan.style.top = `${startY}px`;
    toucan.style.opacity = '1';

    // Forçar reflow
    toucan.offsetHeight;

    // Iniciar o voo com transição premium
    const moveX = targetX - startX - (toucan.offsetWidth / 2);
    const moveY = targetY - startY - (toucan.offsetHeight / 2);
    
    // Alinhando com os novos tamanhos ampliados:
    // Base da animação é 128px (w-32)
    // LG (144px): 144/128 = 1.125
    // MD (128px): 128/128 = 1.0
    // Mobile (96px): 96/128 = 0.75
    const finalScale = window.innerWidth >= 1024 ? 1.125 : (window.innerWidth >= 768 ? 1.0 : 0.75);

    toucan.style.transition = 'transform 2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease';
    toucan.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(${finalScale + 0.15}) rotate(-10deg)`;

    // Ao finalizar o voo
    setTimeout(() => {
      // Pequeno bounce final e encaixe
      toucan.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(${finalScale}) rotate(0deg)`;
      
      // Feedback visual na logo do header
      targetLogo.classList.add('logo-flash');
      
      setTimeout(() => {
        finishAnimation();
      }, 400);
    }, 2000);
  };

  const finishAnimation = () => {
    setIsVisible(false);
    sessionStorage.setItem('tucano_intro_played', 'true');
    document.body.classList.remove('intro-animating');
    
    // Disparar evento customizado para o Header saber que pode mostrar a logo
    window.dispatchEvent(new CustomEvent('tucano_intro_finished'));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[10000] pointer-events-none overflow-hidden">
      {/* Overlay inicial opaco que clareia ao iniciar */}
      <div className="absolute inset-0 bg-white animate-fadeOut" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}></div>
      
      <div 
        ref={toucanRef}
        className="absolute w-32 h-32 opacity-0"
        style={{ willChange: 'transform, top, left' }}
      >
        <img 
          src={LOGO_URL} 
          alt="Tucano Voador" 
          className="w-full h-full object-contain animate-wingFlap"
        />
      </div>

      <style>{`
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; pointer-events: none; }
        }
        @keyframes wingFlap {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.8) rotate(3deg); }
        }
        .logo-flash {
          animation: flash 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        @keyframes flash {
          0% { filter: brightness(1); transform: scale(1); }
          50% { filter: brightness(2.5) drop-shadow(0 0 30px #FFD700); transform: scale(1.15); }
          100% { filter: brightness(1); transform: scale(1); }
        }
        body.intro-animating {
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default IntroAnimation;
