import React from 'react';
import { Store, Truck, Phone } from 'lucide-react';

const Distribution: React.FC = () => {
  return (
    <section id="distribuidores" className="py-20 sm:py-32 bg-slate-900 text-white overflow-hidden relative">
      {/* Imagem de Fundo com Opacidade e Overlay idênticos à Hero para consistência visual */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/d/1vfgPmFJ6iTmwFDE4m83x2jcXv9z7Wk8C" 
          alt="Distribuição Tucano" 
          className="w-full h-full object-cover object-center opacity-90 scale-100"
        />
        {/* Gradientes espelhados da Hero: Horizontal e Vertical de baixo para cima */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-900/10 to-slate-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 bg-tucano-yellow text-tucano-blue px-4 py-2 rounded-full mb-6 font-black text-[10px] uppercase tracking-widest shadow-lg">
            Presença Nacional
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 tracking-tight drop-shadow-2xl">
            Encontre Tucano <br />
            <span className="text-tucano-yellow">perto de você</span>
          </h2>
          <p className="text-blue-50 text-lg sm:text-xl max-w-2xl mx-auto font-medium drop-shadow-md">
            Estamos presentes nos principais supermercados, atacados e pontos de venda regionais, levando qualidade para o seu dia a dia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-slate-900/40 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/20 text-center hover:bg-white/10 transition-all duration-500 group hover:-translate-y-2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-tucano-yellow text-tucano-blue rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-[0_15px_30px_-10px_rgba(255,215,0,0.5)] group-hover:scale-110 transition-transform">
              <Store className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h4 className="text-2xl font-black mb-4">Supermercados</h4>
            <p className="text-blue-50/90 text-base leading-relaxed">Nas prateleiras dos principais varejistas e mercadinhos de bairro.</p>
          </div>
          
          <div className="bg-slate-900/40 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/20 text-center hover:bg-white/10 transition-all duration-500 group hover:-translate-y-2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-tucano-yellow text-tucano-blue rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-[0_15px_30px_-10px_rgba(255,215,0,0.5)] group-hover:scale-110 transition-transform">
              <Truck className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h4 className="text-2xl font-black mb-4">Distribuidores</h4>
            <p className="text-blue-50/90 text-base leading-relaxed">Rede logística inteligente que garante reposição rápida e eficiente.</p>
          </div>
          
          <div className="bg-slate-900/40 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/20 text-center hover:bg-white/10 transition-all duration-500 group hover:-translate-y-2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-tucano-yellow text-tucano-blue rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-[0_15px_30px_-10px_rgba(255,215,0,0.5)] group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h4 className="text-2xl font-black mb-4">Seja Lojista</h4>
            <p className="text-blue-50/90 text-base leading-relaxed">Leve o sucesso da Tucano para o seu comércio com condições especiais.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distribution;