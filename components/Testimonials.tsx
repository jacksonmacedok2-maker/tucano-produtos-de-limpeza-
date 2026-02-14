
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-tucano-blue mb-4">
            Quem usa, aprova.
          </h2>
          <p className="text-slate-500 text-lg">Confira o que nossos clientes dizem sobre os produtos Tucano.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 relative group hover:shadow-xl transition-all">
              <div className="absolute -top-5 left-10 bg-tucano-yellow text-tucano-blue p-4 rounded-2xl shadow-lg">
                <Quote size={24} />
              </div>
              <p className="text-slate-600 italic mb-8 pt-4 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-tucano-blue" />
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{t.role}</p>
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
