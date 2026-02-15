
import React from 'react';
import { DIFFERENTIALS } from '../constants';

const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(0,86,179,0.03),transparent_50%)] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(255,215,0,0.03),transparent_50%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-tucano-blue mb-6 sm:mb-8 leading-tight">
              Por que a Tucano é a <br />
              <span className="text-tucano-yellow">favorita das famílias?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              {DIFFERENTIALS.map((diff, idx) => (
                <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-100">
                  <div className="mb-3 sm:mb-4 scale-90 sm:scale-100 origin-left">{diff.icon}</div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{diff.title}</h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{diff.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative group">
              <div className="absolute inset-0 bg-tucano-blue/10 rounded-2xl sm:rounded-3xl blur-2xl group-hover:bg-tucano-blue/15 transition-all"></div>
              <img 
                src="https://picsum.photos/seed/clean-home-premium/800/800" 
                alt="Casa Limpa" 
                className="relative rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]"
              />
              <div className="absolute -bottom-6 -right-6 bg-tucano-blue text-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl hidden sm:block shadow-2xl border border-white/10">
                <p className="text-2xl sm:text-4xl font-bold mb-1">98%</p>
                <p className="text-[10px] sm:text-sm opacity-80">Aprovação total</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
