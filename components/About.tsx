
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre-nos" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-3 sm:gap-4">
               <img src="https://picsum.photos/seed/tucano-history-1/400/500" alt="Nossa história" className="rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg mt-6 sm:mt-8" />
               <img src="https://picsum.photos/seed/tucano-history-2/400/500" alt="Produção" className="rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg" />
             </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <span className="text-tucano-blue font-black uppercase tracking-widest text-[10px] sm:text-sm mb-3 sm:mb-4 block">Nossa História</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 sm:mb-8 leading-tight">
              Qualidade brasileira com <br />
              <span className="text-tucano-blue underline decoration-tucano-yellow decoration-4 underline-offset-4 sm:underline-offset-8">cuidado de família</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
              A Tucano nasceu com um propósito simples: levar para cada lar brasileiro produtos de limpeza que realmente funcionam.
            </p>
            <p className="text-slate-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Somos uma marca 100% nacional, focada em inovação e no bem-estar de quem cuida do dia a dia da casa.
            </p>
            <div className="flex items-center gap-6 sm:gap-8">
               <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-tucano-blue">20+</p>
                  <p className="text-slate-500 text-[10px] sm:text-sm">Anos de estrada</p>
               </div>
               <div className="w-px h-10 sm:h-12 bg-slate-200"></div>
               <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-tucano-blue">1M+</p>
                  <p className="text-slate-500 text-[10px] sm:text-sm">Famílias</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
