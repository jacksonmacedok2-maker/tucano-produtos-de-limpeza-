import React from 'react';
import { Store, Truck, Phone } from 'lucide-react';

const Distribution: React.FC = () => {
  return (
    <section id="distribuidores" className="py-20 sm:py-32 bg-white text-slate-900 overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/d/1vfgPmFJ6iTmwFDE4m83x2jcXv9z7Wk8C" 
          alt="Distribuição Tucano" 
          className="w-full h-full object-cover object-center opacity-100 scale-100"
        />
        {/* Adicionado um overlay branco bem sutil apenas para garantir que a textura da imagem não "suje" o design */}
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 bg-tucano-blue text-white px-5 py-2.5 rounded-full mb-6 font-black text-[10px] uppercase tracking-widest shadow-xl border-2 border-white">
            Presença Nacional
          </div>
          
          <div className="inline-block px-8 py-6 bg-white/60 backdrop-blur-md rounded-[2.5rem] border border-white/80 shadow-2xl">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 tracking-tight text-slate-900">
              Encontre Tucano <br />
              <span className="text-tucano-blue">perto de você</span>
            </h2>
            <p className="text-slate-700 text-lg sm:text-xl max-w-2xl mx-auto font-bold">
              Estamos presentes nos principais supermercados, atacados e pontos de venda regionais, levando qualidade para o seu dia a dia.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white/80 backdrop-blur-lg p-10 rounded-[2.5rem] border border-white text-center hover:bg-white transition-all duration-500 group hover:-translate-y-2 shadow-2xl">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-tucano-blue text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform">
              <Store className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h4 className="text-2xl font-black mb-4 text-slate-900">Supermercados</h4>
            <p className="text-slate-600 text-base leading-relaxed font-bold">Nas prateleiras dos principais varejistas e mercadinhos de bairro.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-lg p-10 rounded-[2.5rem] border border-white text-center hover:bg-white transition-all duration-500 group hover:-translate-y-2 shadow-2xl">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-tucano-blue text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform">
              <Truck className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h4 className="text-2xl font-black mb-4 text-slate-900">Distribuidores</h4>
            <p className="text-slate-600 text-base leading-relaxed font-bold">Rede logística inteligente que garante reposição rápida e eficiente.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-lg p-10 rounded-[2.5rem] border border-white text-center hover:bg-white transition-all duration-500 group hover:-translate-y-2 shadow-2xl">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-tucano-blue text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h4 className="text-2xl font-black mb-4 text-slate-900">Seja Lojista</h4>
            <p className="text-slate-600 text-base leading-relaxed font-bold">Leve o sucesso da Tucano para o seu comércio com condições especiais.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distribution;