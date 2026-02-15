
import React from 'react';
import { Store, Truck, Phone } from 'lucide-react';

const Distribution: React.FC = () => {
  return (
    <section id="distribuidores" className="py-16 sm:py-24 bg-tucano-blue text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6">Encontre Tucano perto de você</h2>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
            Presentes nos melhores supermercados e atacados do Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          <div className="bg-white/10 backdrop-blur-md p-8 sm:p-10 rounded-2xl sm:rounded-3xl border border-white/20 text-center hover:bg-white/20 transition-all">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-tucano-yellow text-tucano-blue rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              {/* Fix: removed sm:size and used className for responsiveness */}
              <Store className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Supermercados</h4>
            <p className="text-blue-100 text-sm sm:text-base">Nas prateleiras dos principais varejistas regionais.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 sm:p-10 rounded-2xl sm:rounded-3xl border border-white/20 text-center hover:bg-white/20 transition-all">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-tucano-yellow text-tucano-blue rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              {/* Fix: removed sm:size and used className for responsiveness */}
              <Truck className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Distribuidores</h4>
            <p className="text-blue-100 text-sm sm:text-base">Rede logística eficiente para reposição rápida.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 sm:p-10 rounded-2xl sm:rounded-3xl border border-white/20 text-center hover:bg-white/20 transition-all">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-tucano-yellow text-tucano-blue rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              {/* Fix: removed sm:size and used className for responsiveness */}
              <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Seja Lojista</h4>
            <p className="text-blue-100 text-sm sm:text-base">Tenha Tucano na sua loja e aumente suas vendas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distribution;