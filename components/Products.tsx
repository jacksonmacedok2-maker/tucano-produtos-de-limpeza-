
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { ShoppingCart, Star } from 'lucide-react';

const categories = ["Todos", "Sabão em pó", "Detergentes", "Amaciantes", "Limpadores multiuso"];

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts = activeCategory === "Todos" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-tucano-blue mb-4">
            Nossa Linha Completa
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Soluções completas para deixar sua casa impecável e sua rotina muito mais leve.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`category-pill px-6 py-2 rounded-full font-semibold border border-transparent transition-all ${
                activeCategory === cat 
                ? 'bg-tucano-blue text-white shadow-lg' 
                : 'bg-slate-100 text-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {product.isBestSeller && (
                  <div className="absolute top-4 left-4 bg-tucano-yellow text-tucano-blue px-3 py-1 rounded-full text-xs font-black flex items-center gap-1 shadow-lg">
                    <Star size={12} fill="currentColor" />
                    MAIS VENDIDO
                  </div>
                )}
                <div className="absolute inset-0 bg-tucano-blue/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <button className="bg-white text-tucano-blue p-4 rounded-full shadow-xl hover:bg-tucano-yellow hover:text-tucano-blue transition-colors">
                     <ShoppingCart size={24} />
                   </button>
                </div>
              </div>
              <div className="p-8">
                <span className="text-tucano-blue text-xs font-bold tracking-widest uppercase mb-2 block">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                   <span className="text-tucano-blue font-bold text-lg">Qualidade Tucano</span>
                   <button className="text-sm font-bold text-tucano-blue border-b-2 border-tucano-yellow hover:pb-1 transition-all">
                    Ver Detalhes
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
