
import React from 'react';
import { DIFFERENTIALS } from '../constants';

const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-30"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-100 rounded-full opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-tucano-blue mb-8 leading-tight">
              Por que a Tucano é a <br />
              <span className="text-tucano-yellow">favorita das famílias?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {DIFFERENTIALS.map((diff, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="mb-4">{diff.icon}</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{diff.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{diff.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/clean-home/800/800" 
                alt="Casa Limpa" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-tucano-blue text-white p-10 rounded-3xl hidden xl:block">
                <p className="text-4xl font-bold mb-1">98%</p>
                <p className="text-sm opacity-80">De aprovação dos nossos clientes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
