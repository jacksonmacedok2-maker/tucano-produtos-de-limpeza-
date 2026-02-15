
import React from 'react';
import { CONTACT_INFO, WA_ICON_URL } from '../constants';

const FinalCTA: React.FC = () => {
  const handleClick = () => {
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(CONTACT_INFO.waMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-tucano-blue to-blue-700 rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-tucano-yellow/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-extrabold mb-8 leading-tight">
              Experimente a qualidade <br />
              <span className="text-tucano-yellow">Tucano na sua casa</span>
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Não perca mais tempo com produtos que não entregam o que prometem. Escolha a eficiência, o perfume e a economia.
            </p>
            <button 
              onClick={handleClick}
              className="flex items-center justify-center space-x-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-xl transition-all hover:scale-105 active:scale-95 mx-auto overflow-hidden"
            >
              <img src={WA_ICON_URL} alt="" className="w-10 h-10 object-contain scale-[1.5] transition-transform" />
              <span>Fale conosco no WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
