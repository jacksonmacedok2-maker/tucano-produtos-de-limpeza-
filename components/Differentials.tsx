import React from 'react';
import { DIFFERENTIALS } from '../constants';

const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-16 sm:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-yellow-100/50 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="lg:w-1/2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-8 sm:mb-12 leading-tight tracking-tight">
              Por que a Tucano é a <br />
              <span className="text-tucano-blue underline decoration-tucano-yellow/40 decoration-8 underline-offset-4">favorita das famílias?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {DIFFERENTIALS.map((diff, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 group">
                  {/* Container do Ícone: Removido o efeito de mudança de cor para azul no hover */}
                  <div className="mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <div className="scale-110">{diff.icon}</div>
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-3">{diff.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{diff.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative group">
              {/* Moldura Decorativa */}
              <div className="absolute inset-0 bg-tucano-blue/5 rounded-[3rem] -rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-700"></div>
              
              <div className="relative aspect-square overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800" 
                  alt="Limpeza profissional premium" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                />
              </div>

              <div className="absolute -bottom-8 -right-8 bg-tucano-blue text-white p-8 sm:p-12 rounded-[2.5rem] hidden md:block shadow-2xl border-4 border-white animate-float">
                <p className="text-4xl sm:text-6xl font-black mb-1 tracking-tighter">98%</p>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] opacity-80">Aprovação Total</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Differentials;