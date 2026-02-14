
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
      pulse: number = 0;

      constructor() {
        this.reset();
      }

      reset() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedY = -(Math.random() * 0.4 + 0.1);
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.pulse = Math.random() * 0.01;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        
        // Oscilação suave da opacidade
        this.opacity += this.pulse;
        if (this.opacity > 0.5 || this.opacity < 0.1) {
          this.pulse = -this.pulse;
        }

        if (this.y < -10) {
          this.y = canvas.height + 10;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.shadowBlur = 4;
        ctx.shadowColor = 'white';
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      const count = window.innerWidth < 768 ? 30 : 60;
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
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/d/1M9srRbvo6e3uQmW7jmBZGBB1lkxQRoQC" 
          alt="Ambiente Tucano" 
          className="w-full h-full object-cover object-center scale-105"
        />
        
        {/* Overlay Azul Translúcido Profundo */}
        <div className="absolute inset-0 bg-[#002B5B]/65 backdrop-blur-[1px]"></div>
        
        {/* Partículas em Canvas */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 z-1 pointer-events-none opacity-50"
        />

        {/* Bolhas Flutuantes (CSS) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-2">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className="bubble" 
              style={{ 
                left: `${Math.random() * 100}%`, 
                width: `${Math.random() * 40 + 10}px`, 
                height: `${Math.random() * 40 + 10}px`,
                animationDelay: `${Math.random() * 8}s`,
                '--duration': `${Math.random() * 10 + 12}s`
              } as React.CSSProperties} 
            />
          ))}
        </div>

        {/* Camada 1: Luz Difusa Suave (Canto Superior Esquerdo) */}
        <div 
          className="absolute inset-0 opacity-25 pointer-events-none animate-breathing-light" 
          style={{ 
            background: 'radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.4) 0%, transparent 60%)',
            mixBlendMode: 'screen'
          }}
        ></div>

        {/* Vignette Suave */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.5)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-2xl border border-white/10 px-5 py-2.5 rounded-full mb-10 animate-fade-in shadow-2xl">
            <span className="w-2 h-2 bg-tucano-yellow rounded-full shadow-[0_0_12px_#FFD700]"></span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-blue-50">Sinta o frescor da limpeza</span>
          </div>
          
          <h1 className="text-[2.8rem] sm:text-7xl lg:text-8xl font-black leading-[1.05] sm:leading-[1.05] mb-8 drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)] tracking-tight">
            O sabão que o <br />
            <span className="text-tucano-yellow">Brasil confia.</span>
          </h1>
          
          <p className="text-lg sm:text-2xl text-blue-50/90 mb-8 max-w-3xl mx-auto leading-relaxed px-4 font-medium drop-shadow-md">
            Perfume duradouro, limpeza profunda e economia de verdade para sua casa.
          </p>

          <div className="flex items-center justify-center gap-2 mb-14 text-white/60 font-semibold sm:text-lg">
            <CheckCircle2 size={22} className="text-tucano-yellow/80" />
            <span className="tracking-tight">Milhares de lares já usam Tucano.</span>
          </div>
          
          <div className="flex flex-col items-center gap-8">
            <button 
              onClick={handleScrollToProducts}
              className="group relative flex items-center justify-center gap-4 bg-tucano-yellow text-tucano-blue px-14 py-5 sm:px-20 sm:py-7 rounded-[2rem] font-black text-xl sm:text-2xl shadow-[0_30px_60px_-15px_rgba(255,215,0,0.4)] hover:scale-105 hover:shadow-[0_45px_75px_-10px_rgba(255,215,0,0.5)] transition-all active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
              <ShoppingBag size={30} className="group-hover:scale-110 transition-transform" />
              <span>Quero experimentar Tucano</span>
            </button>
            
            <button 
              onClick={() => {
                const el = document.getElementById('distribuidores');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group flex items-center gap-1.5 text-white/50 hover:text-white font-bold text-lg transition-all tracking-wide"
            >
              <span>Onde encontrar</span>
              <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Modern Gradient Transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 sm:h-56 bg-gradient-to-t from-slate-50 via-slate-50/20 to-transparent z-20 pointer-events-none"></div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes breathing-light {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }
        .animate-fade-in {
          animation: fade-in 1.4s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        .animate-breathing-light {
          animation: breathing-light 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
