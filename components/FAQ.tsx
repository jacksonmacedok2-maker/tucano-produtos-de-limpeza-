import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-50 text-tucano-blue px-5 py-2.5 rounded-full mb-6 shadow-sm border border-slate-100">
              <HelpCircle size={18} className="text-tucano-blue" />
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]">Dúvidas Comuns</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              Tudo o que você precisa <br />
              <span className="text-tucano-blue">saber sobre a Tucano</span>
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className={`border-2 rounded-[1.8rem] sm:rounded-[2.5rem] transition-all duration-300 shadow-sm ${
                  openIndex === idx ? 'border-tucano-blue bg-white' : 'border-slate-50 bg-slate-50/50 hover:border-slate-200 hover:bg-white'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 sm:p-10 text-left focus:outline-none"
                >
                  <span className={`text-lg sm:text-2xl font-black transition-colors leading-tight ${
                    openIndex === idx ? 'text-tucano-blue' : 'text-slate-800'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 ml-4 p-2 sm:p-3 rounded-full transition-all ${
                    openIndex === idx ? 'bg-tucano-blue text-white rotate-180 shadow-lg shadow-blue-200' : 'bg-slate-200 text-slate-400'
                  }`}>
                    {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-6 sm:p-10 pt-0 border-t border-slate-100">
                    <p className="text-slate-600 text-base sm:text-xl leading-relaxed font-bold">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;