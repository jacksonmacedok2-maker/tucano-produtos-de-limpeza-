import React from 'react';
import { ShoppingBag, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollToProducts = () => {
    const element = document.getElementById('produtos');
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/d/1FnhW96CnNIpsCz2Jtiu5FXBEu4uGQK_6" 
          alt="Interior de luxo limpo" 
          className="hero-bg-image w-full h-full object-cover opacity-90 scale-100 animate-subtle-zoom"
        />
        {/* Gradiente suavizado para menos escuridão e maior clareza da imagem */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-900/10 to-slate-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 text-white tracking-tight drop-shadow-2xl">
            Sua casa merece <br />
            <span className="text-tucano-yellow">brilho e cuidado.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
            Produtos de alta performance com fragrâncias que transformam o ambiente. Limpeza profunda com o rendimento que sua família precisa.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg text-white text-sm font-semibold border border-white/20">
              <CheckCircle2 size={16} className="text-tucano-yellow" />
              <span>Perfume de longa duração</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg text-white text-sm font-semibold border border-white/20">
              <CheckCircle2 size={16} className="text-tucano-yellow" />
              <span>Máxima economia</span>
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <button 
              onClick={handleScrollToProducts}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-tucano-yellow text-tucano-blue px-12 py-5 rounded-2xl font-black text-xl hover:bg-yellow-400 transition-all shadow-[0_20px_40px_-12px_rgba(255,215,0,0.5)] hover:-translate-y-1 active:scale-95"
            >
              <ShoppingBag size={24} />
              <span>Ver Produtos</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .hero-bg-image {
          object-position: 68% center; /* Centraliza a mulher em telas pequenas */
        }
        
        @media (min-width: 1024px) {
          .hero-bg-image {
            object-position: center center; /* Centralização padrão em desktops */
          }
        }

        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.06); }
        }
        @media (min-width: 640px) {
          @keyframes subtle-zoom {
            from { transform: scale(1.02); }
            to { transform: scale(1.1); }
          }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 30s linear infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default Hero;