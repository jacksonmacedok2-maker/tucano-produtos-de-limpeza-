
import React, { useState } from 'react';
import { PRODUCTS, CONTACT_INFO, WA_ICON_URL } from '../constants';
import { MessageCircle, Star, Droplets, Package } from 'lucide-react';

const categories = ["Todos", "Sabão em pó", "Detergentes", "Amaciantes", "Limpadores", "Sabão Líquido"];

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts = activeCategory === "Todos" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleBuyClick = (productName: string) => {
    const text = `Olá! Tenho interesse em comprar o ${productName}. Poderia me informar mais?`;
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-tucano-blue font-black uppercase tracking-[0.2em] text-xs mb-4 block">Portfólio Tucano</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
            Nossa Linha Completa
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Produtos desenvolvidos para entregar máxima eficiência com a economia que sua família merece.
          </p>
        </div>

        {/* Categories Container with Horizontal Scroll on Mobile */}
        <div className="mb-14 -mx-6 px-6 overflow-x-auto scrollbar-hide">
          <div className="flex justify-start md:justify-center gap-3 min-w-max pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`category-pill px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 border-2 ${
                  activeCategory === cat 
                  ? 'bg-tucano-blue text-white border-tucano-blue shadow-lg shadow-blue-100' 
                  : 'bg-white text-slate-600 border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,86,179,0.15)] hover:-translate-y-2 transition-all duration-500 h-full"
            >
              {/* Product Image Area */}
              <div className="relative h-64 bg-slate-50 overflow-hidden flex items-center justify-center">
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-slate-300">
                    <div className="relative">
                      <Package size={80} strokeWidth={1} />
                      <span className="absolute -bottom-2 -right-2 text-blue-200"><Droplets size={32} /></span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest mt-4 opacity-50">Imagem em breve</span>
                  </div>
                )}
                
                {/* Best Seller Badge */}
                {product.isBestSeller && (
                  <div className="absolute top-6 left-6 bg-tucano-yellow text-tucano-blue px-3 py-1.5 rounded-xl text-[10px] font-black flex items-center gap-1.5 shadow-xl animate-pulse">
                    < Star size={12} fill="currentColor" />
                    PREMIUM
                  </div>
                )}

                {/* Volume Tag */}
                {product.volume && (
                  <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-md text-slate-700 px-3 py-1 rounded-lg text-xs font-bold border border-white shadow-sm">
                    {product.volume}
                  </div>
                )}
              </div>

              {/* Product Content */}
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-tucano-blue text-[10px] font-black tracking-widest uppercase mb-2">
                  {product.category}
                </span>
                
                <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-tucano-blue transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Attributes Tags */}
                {product.attributes && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.attributes.map((attr, i) => (
                      <span key={i} className="bg-blue-50 text-tucano-blue text-[10px] font-bold px-2 py-1 rounded-md">
                        • {attr}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer and CTA */}
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between gap-4">
                  <button 
                    onClick={() => handleBuyClick(product.name)}
                    className="flex-grow flex items-center justify-center bg-[#25D366] text-white py-4 rounded-2xl font-black text-sm shadow-[0_8px_20px_rgba(37,211,102,0.2)] hover:bg-[#1ebe5d] hover:shadow-[0_8px_25px_rgba(37,211,102,0.3)] transition-all active:scale-95 overflow-hidden"
                  >
                    <span>Comprar agora</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Products;
