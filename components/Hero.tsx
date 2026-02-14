
import React, { useEffect, useRef } from 'react';
import { ShoppingBag, MapPin } from 'lucide-react';

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
        this.size = Math.random() * 2 + 1;
        this.speedY = -(Math.random() * 0.5 + 0.2);
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.pulse = Math.random() * 0.02;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.opacity += this.pulse;

        if (this.opacity > 0.6 || this.opacity < 0.1) {
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
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'white';
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      const count = window.innerWidth < 768 ? 40 : 80;
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

  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1920&auto=format&fit=crop" 
          alt="Família feliz Tucano" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Premium Particles Layer */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-1 pointer-events-none opacity-60"
      />

      {/* Floating Bubbles - Sensação de limpeza (sabão) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block z-2">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="bubble" 
            style={{ 
              left: `${Math.random() * 100}%`, 
              width: `${Math.random() * 30 + 10}px`, 
              height: `${Math.random() * 30 + 10}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 8 + 10}s`
            }} 
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <span className="inline-block bg-tucano-yellow text-tucano-blue px-6 py-2 rounded-full font-bold text-sm mb-8 shadow-lg animate-bounce uppercase tracking-wider">
            Qualidade que você confia
          </span>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-8 drop-shadow-md">
            Sua casa <span className="text-tucano-yellow">brilhando</span>, <br className="hidden lg:block" />
            sua família cuidada.
          </h1>
          
          <p className="text-xl lg:text-2xl text-blue-50 mb-12 max-w-2xl mx-auto leading-relaxed">
            Limpeza profunda, perfume que dura e a economia que seu bolso merece. 
            <span className="font-bold"> TUCANO</span> é a escolha inteligente de milhões de brasileiros.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group flex items-center justify-center space-x-2 bg-tucano-yellow text-tucano-blue px-10 py-5 rounded-2xl font-bold text-xl shadow-[0_10px_30px_rgba(255,215,0,0.3)] hover:scale-105 transition-all active:scale-95">
              <ShoppingBag size={24} />
              <span>Comprar agora</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all">
              <MapPin size={24} />
              <span>Onde encontrar</span>
            </button>
          </div>
        </div>
      </div>

      {/* Clean Gradient Transition */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
