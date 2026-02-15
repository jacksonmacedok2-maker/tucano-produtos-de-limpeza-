import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre-nos" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-3 sm:gap-4">
               <img src="https://images.unsplash.com/photo-1581578731522-6562e1af3a31?auto=format&fit=crop&q=80&w=600" alt="Cuidado com a casa" className="rounded-2xl sm:rounded-[2.5rem] shadow-xl mt-6 sm:mt-12 object-cover h-64 sm:h-96 w-full" />
               <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=600" alt="Cozinha impecável" className="rounded-2xl sm:rounded-[2.5rem] shadow-xl object-cover h-64 sm:h-96 w-full" />
             </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <span className="text-tucano-blue font-black uppercase tracking-[0.3em] text-[10px] sm:text-sm mb-4 sm:mb-6 block bg-blue-50 w-fit px-4 py-2 rounded-full">Nossa História</span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-slate-900 mb-6 sm:mb-8 leading-tight tracking-tight">
              Qualidade brasileira com <br />
              <span className="text-tucano-blue relative">
                cuidado de família
                <span className="absolute bottom-1 left-0 w-full h-3 bg-tucano-yellow/30 -z-10"></span>
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-xl mb-4 sm:mb-6 leading-relaxed font-medium">
              A Tucano nasceu com um propósito simples: levar para cada lar brasileiro produtos de limpeza que realmente funcionam, unindo tecnologia e afeto.
            </p>
            <p className="text-slate-500 text-base sm:text-lg mb-6 sm:mb-10 leading-relaxed italic">
              "Somos uma marca 100% nacional, focada em inovação e no bem-estar de quem transforma a rotina da casa em um ato de carinho."
            </p>
            <div className="flex items-center gap-8 sm:gap-12">
               <div>
                  <p className="text-3xl sm:text-5xl font-black text-tucano-blue tracking-tighter">20+</p>
                  <p className="text-slate-500 text-xs sm:text-sm font-bold uppercase tracking-widest mt-1">Anos de estrada</p>
               </div>
               <div className="w-px h-12 sm:h-16 bg-slate-200"></div>
               <div>
                  <p className="text-3xl sm:text-5xl font-black text-tucano-blue tracking-tighter">1M+</p>
                  <p className="text-slate-500 text-xs sm:text-sm font-bold uppercase tracking-widest mt-1">Famílias atendidas</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;