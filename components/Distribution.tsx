
import React from 'react';
import { Store, Truck, Phone } from 'lucide-react';

const Distribution: React.FC = () => {
  return (
    <section className="py-24 bg-tucano-blue text-white overflow-hidden relative">
      {/* Decorative SVG Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">Encontre Tucano perto de você</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Estamos presentes nos melhores supermercados, mercearias e atacados de todo o Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 text-center hover:bg-white/20 transition-all">
            <div className="w-16 h-16 bg-tucano-yellow text-tucano-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Store size={32} />
            </div>
            <h4 className="text-2xl font-bold mb-4">Supermercados</h4>
            <p className="text-blue-100">Nas prateleiras dos principais varejistas da sua região.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 text-center hover:bg-white/20 transition-all">
            <div className="w-16 h-16 bg-tucano-yellow text-tucano-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Truck size={32} />
            </div>
            <h4 className="text-2xl font-bold mb-4">Distribuidores</h4>
            <p className="text-blue-100">Ampla rede logística para garantir que nunca falte estoque.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 text-center hover:bg-white/20 transition-all">
            <div className="w-16 h-16 bg-tucano-yellow text-tucano-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone size={32} />
            </div>
            <h4 className="text-2xl font-bold mb-4">Seja um Lojista</h4>
            <p className="text-blue-100">Fale com nosso time comercial e tenha Tucano na sua loja.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distribution;
