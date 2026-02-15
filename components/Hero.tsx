import React, { useEffect, useRef } from 'react';
import { ShoppingBag, ChevronRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speedY: number = 0;
      speedX: number = 0;
      opacity: number = 0;
      maxOpacity: number = 0;
      pulse: number = 0;

      constructor() {
        this.reset();
      }

      reset() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.0 + 0.8;
        this.speedY = -(Math.random() * 0.25 + 0.1);
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.maxOpacity = Math.random() * 0.6 + 0.2;
        this.opacity = Math.random() * this.maxOpacity;
        this.pulse = Math.random() * 0.015 + 0.005;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        
        this.opacity += this.pulse;
        if (this.opacity > this.maxOpacity || this.opacity < 0.1) {
          this.pulse = -this.pulse;
        }

        if (this.y < -30) {
          this.y = canvas.height + 30;
          this.x = Math.random() * canvas.width;
        }
        if (this.x < -30) this.x = canvas.width + 30;
        if (this.x > canvas.width + 30) this.x = -30;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 1.5);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      const count = window.innerWidth < 768 ? 120 : 350;
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScrollToProducts = () => {
    const element = document.getElementById('produtos');
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-[100vh] flex items-center pt-32 sm:pt-40 lg:pt-48 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/d/1M9srRbvo6e3uQmW7jmBZGBB1lkxQRoQC" 
          alt="Ambiente Tucano" 
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-[15s] ease-out hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#001D3D]/65 backdrop-blur-[0.5px]"></div>
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 z-1 pointer-events-none opacity-80"
        />
        <div 
          className="absolute inset-0 opacity-25 pointer-events-none animate-breathing-light" 
          style={{ 
            background: 'radial-gradient(circle at 75% 25%, rgba(255, 255, 255, 0.4) 0%, transparent 60%)',
            mixBlendMode: 'screen'
          }}
        ></div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-transparent to-black/30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-3xl border border-white/10 px-6 py-2 rounded-full mb-10 animate-fade-in shadow-2xl">
            <span className="w-1.5 h-1.5 bg-tucano-yellow rounded-full shadow-[0_0_10px_#FFD700]"></span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-blue-50/80">Pureza em cada detalhe</span>
          </div>
          
          <h1 className="text-[2.8rem] sm:text-7xl lg:text-8xl font-black leading-[1.05] sm:leading-[1.05] mb-8 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] tracking-tight">
            O sabão que o <br />
            <span className="text-tucano-yellow">Brasil confia.</span>
          </h1>
          
          <p className="text-lg sm:text-2xl text-blue-50/90 mb-8 max-w-3xl mx-auto leading-relaxed px-4 font-medium drop-shadow-sm">
            Perfume duradouro, limpeza profunda e economia de verdade para sua casa.
          </p>

          <div className="flex items-center justify-center gap-2 mb-14 text-white/50 font-semibold sm:text-lg">
            <CheckCircle2 size={20} className="text-tucano-yellow/60" />
            <span className="tracking-tight text-sm sm:text-base">Escolha de milhões de famílias brasileiras.</span>
          </div>
          
          <div className="flex flex-col items-center gap-8">
            <button 
              onClick={handleScrollToProducts}
              className="group relative flex items-center justify-center gap-4 bg-tucano-yellow text-tucano-blue px-14 py-5 sm:px-20 sm:py-7 rounded-[2rem] font-black text-xl sm:text-2xl shadow-[0_25px_50px_-12px_rgba(255,215,0,0.4)] hover:shadow-[0_40px_70px_-10px_rgba(255,215,0,0.5)] transition-all active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
              <ShoppingBag size={28} className="group-hover:scale-110 transition-transform" />
              <span>Conhecer produtos</span>
            </button>
            
            <button 
              onClick={() => {
                const el = document.getElementById('distribuidores');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group flex items-center gap-1.5 text-white/40 hover:text-white/80 font-bold text-lg transition-all tracking-wide"
            >
              <span>Onde encontrar</span>
              <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 sm:h-56 bg-gradient-to-t from-slate-50 via-slate-50/10 to-transparent z-20 pointer-events-none"></div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes breathing-light {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.08); }
        }
        .animate-fade-in {
          animation: fade-in 1.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        .animate-breathing-light {
          animation: breathing-light 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;