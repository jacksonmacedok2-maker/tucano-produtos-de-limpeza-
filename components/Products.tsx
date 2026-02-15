import React, { useState } from 'react';
import { PRODUCTS, CONTACT_INFO } from '../constants';
import { Package, Star, Sparkles as SparklesIcon } from 'lucide-react';

const categories = ["Todos", "Sabão em pó", "Detergentes", "Amaciantes", "Limpadores", "Sabão Líquido"];

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts = activeCategory === "Todos" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleBuyClick = (productName: string) => {
    const text = `Olá! Tenho interesse em comprar o ${productName}. Poderia me informar mais?`;
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="produtos" className="py-16 sm:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-tucano-blue font-black uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4 sm:mb-6 px-4 py-2 bg-blue-50 rounded-full">
            <SparklesIcon size={14} />
            Qualidade Tucano
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-slate-900 mb-4 sm:mb-8 tracking-tight leading-tight">
            Nossa Linha <span className="text-tucano-blue">Essencial</span>
          </h2>
          <p className="text-slate-500 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Fórmulas de alta performance desenhadas para o máximo rendimento em cada lavagem.
          </p>
        </div>

        <div className="mb-10 sm:mb-16 -mx-6 px-6 overflow-x-auto scrollbar-hide">
          <div className="flex justify-start md:justify-center gap-3 min-w-max pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`category-pill px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm border-2 transition-all duration-300 ${
                  activeCategory === cat 
                  ? 'bg-tucano-blue text-white border-tucano-blue shadow-lg scale-105' 
                  : 'bg-white text-slate-500 border-slate-100 hover:bg-tucano-blue hover:text-white hover:border-tucano-blue hover:scale-105 hover:shadow-md'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group flex flex-col bg-slate-50 rounded-[2rem] sm:rounded-[3rem] overflow-hidden hover:shadow-2xl transition-all duration-500 h-full border border-transparent hover:border-slate-100"
            >
              <div className="relative h-64 sm:h-80 bg-white overflow-hidden flex items-center justify-center p-8 sm:p-10">
                {product.image ? (
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                ) : (
                  <div className="flex flex-col items-center justify-center text-slate-200">
                    <Package className="w-20 h-20 sm:w-[100px] sm:h-[100px]" strokeWidth={1} />
                    <span className="text-[10px] font-black tracking-widest uppercase mt-4 opacity-40">Em breve</span>
                  </div>
                )}
                
                {product.isBestSeller && (
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 overflow-hidden bg-gradient-to-br from-[#FFEA00] via-[#FFFF00] to-[#FFB800] text-tucano-blue px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl text-[10px] sm:text-[11px] font-black flex items-center gap-2 shadow-[0_4px_12px_rgba(255,234,0,0.4)] z-20 border-2 border-white/60 animate-glow-pulse">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/70 to-transparent -translate-x-full animate-shine-badge pointer-events-none"></div>
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin-slow" fill="currentColor" />
                    <span className="relative z-10 tracking-[0.15em]">PREMIUM</span>
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <span className="text-tucano-blue text-[9px] sm:text-[10px] font-black tracking-widest uppercase">{product.category}</span>
                  <span className="text-slate-400 text-[10px] sm:text-xs font-bold">{product.volume}</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 sm:mb-4 leading-tight">
                  {product.name}
                </h3>
                
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-medium">
                  {product.description}
                </p>

                <div className="mt-auto pt-6 sm:pt-8 border-t border-slate-200">
                  <button 
                    onClick={() => handleBuyClick(product.name)}
                    className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 sm:py-5 rounded-xl sm:rounded-[1.5rem] font-black text-xs sm:text-sm hover:bg-[#1ebe5d] transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-green-500/20"
                  >
                    <span>Quero este produto</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shine-badge {
          0% { transform: translateX(-150%) skewX(-25deg); }
          20% { transform: translateX(250%) skewX(-25deg); }
          100% { transform: translateX(250%) skewX(-25deg); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 4px 10px rgba(255, 234, 0, 0.4); }
          50% { box-shadow: 0 4px 20px rgba(255, 234, 0, 0.6); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-shine-badge {
          animation: shine-badge 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .animate-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Products;