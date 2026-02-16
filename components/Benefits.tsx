import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section className="py-12 sm:py-24 bg-slate-50 relative border-b border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-10">
          {BENEFITS.map((benefit) => (
            <div 
              key={benefit.id} 
              className="benefit-card group bg-white flex flex-col items-center text-center p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-sm border border-slate-200 transition-all duration-300 hover:bg-tucano-blue hover:border-tucano-blue hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Container do Ícone: Muda para fundo transparente/branco suave e ícone branco no hover */}
              <div className="benefit-icon-container w-14 h-14 sm:w-20 h-20 bg-slate-50 text-tucano-blue rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 group-hover:bg-white/20 group-hover:text-white group-hover:scale-110">
                <div className="scale-75 sm:scale-100">
                  {benefit.icon}
                </div>
              </div>
              
              {/* Título: Muda para branco no hover */}
              <h3 className="font-bold text-slate-800 text-sm sm:text-lg leading-tight transition-colors duration-300 group-hover:text-white">
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;