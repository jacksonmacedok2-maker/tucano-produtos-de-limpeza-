import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-tucano-blue px-4 py-2 rounded-full mb-6">
              <HelpCircle size={16} />
              <span className="text-xs font-black uppercase tracking-widest">Dúvidas Comuns</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Tudo o que você precisa <br />
              <span className="text-tucano-blue">saber sobre a Tucano</span>
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className={`border-2 rounded-2xl sm:rounded-3xl transition-all duration-300 ${
                  openIndex === idx ? 'border-tucano-blue bg-blue-50/30' : 'border-slate-100 bg-white hover:border-slate-200'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none"
                >
                  <span className={`text-lg sm:text-xl font-bold transition-colors ${
                    openIndex === idx ? 'text-tucano-blue' : 'text-slate-800'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 ml-4 p-2 rounded-full transition-all ${
                    openIndex === idx ? 'bg-tucano-blue text-white rotate-180' : 'bg-slate-100 text-slate-400'
                  }`}>
                    {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-6 sm:p-8 pt-0 border-t border-slate-100/50">
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
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