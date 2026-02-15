
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-tucano-blue mb-3 sm:mb-4">
            Quem usa, aprova.
          </h2>
          <p className="text-slate-500 text-sm sm:text-lg">O que nossos clientes dizem sobre a Tucano.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 sm:p-10 rounded-2xl sm:rounded-3xl shadow-sm border border-slate-100 relative group hover:shadow-xl transition-all">
              <div className="absolute -top-4 left-6 sm:left-10 bg-tucano-yellow text-tucano-blue p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg">
                {/* Fix: removed sm:size and used className for responsiveness */}
                <Quote className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-slate-600 italic mb-6 sm:mb-8 pt-4 text-sm sm:text-base leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-tucano-blue" />
                <div>
                  <p className="font-bold text-slate-900 text-sm sm:text-base">{t.name}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{t.role}</p>
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