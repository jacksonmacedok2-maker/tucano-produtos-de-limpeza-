import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden border-y border-slate-100">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block bg-white text-tucano-blue px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 shadow-sm border border-slate-100">
            Depoimentos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-3 sm:mb-4 tracking-tight">
            Quem usa, <span className="text-tucano-blue">aprova</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg font-medium">O que nossos clientes dizem sobre a Tucano.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm border border-slate-100 relative group hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="absolute -top-4 left-6 sm:left-10 bg-tucano-yellow text-tucano-blue p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                <Quote className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-slate-600 italic mb-6 sm:mb-8 pt-4 text-sm sm:text-lg leading-relaxed font-medium">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-tucano-blue shadow-sm" />
                <div>
                  <p className="font-black text-slate-900 text-sm sm:text-lg">{t.name}</p>
                  <p className="text-[10px] sm:text-[11px] text-tucano-blue font-black uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;