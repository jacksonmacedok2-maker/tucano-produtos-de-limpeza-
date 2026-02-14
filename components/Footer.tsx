
import React from 'react';
import { Instagram, Linkedin, Heart, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  // Pure CSS hover class for all footer links
  const footerLinkClass = "transition-colors duration-300 text-slate-400 hover:text-blue-400";

  const handleLinkClick = (e: React.MouseEvent) => {
    // If it's a dummy link, prevent default
    if ((e.currentTarget as HTMLAnchorElement).getAttribute('href') === '#') {
      e.preventDefault();
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-20 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
             <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden p-1">
                   <img src={LOGO_URL} alt="TUCANO Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-2xl font-bold tracking-tighter text-white">TUCANO</span>
             </div>
             <p className="text-slate-400 leading-relaxed">
               Limpando lares brasileiros com qualidade, cuidado e o melhor custo-benefício do mercado.
             </p>
             <div className="flex space-x-4">
               <a 
                href={CONTACT_INFO.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-tucano-blue transition-colors text-white"
               >
                 <Instagram size={20} />
               </a>
               <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(CONTACT_INFO.waMessage)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-tucano-blue transition-colors text-white"
               >
                 <MessageCircle size={20} />
               </a>
             </div>
          </div>

          {/* Links: Institucional */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Institucional</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a href="#sobre-nos" className={footerLinkClass} onClick={handleLinkClick}>
                  Sobre a Marca
                </a>
              </li>
              <li>
                <a href="#" onClick={handleLinkClick} className={footerLinkClass}>
                  Nossa Fábrica
                </a>
              </li>
              <li>
                <a href="#" onClick={handleLinkClick} className={footerLinkClass}>
                  Trabalhe Conosco
                </a>
              </li>
              <li>
                <a href="#" onClick={handleLinkClick} className={footerLinkClass}>
                  Sustentabilidade
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Suporte</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a href="#contato" className={footerLinkClass} onClick={handleLinkClick}>
                  Fale Conosco
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(CONTACT_INFO.waMessage)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={footerLinkClass}
                >
                  WhatsApp: {CONTACT_INFO.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href="#" onClick={handleLinkClick} className={footerLinkClass}>
                  Seja um Distribuidor
                </a>
              </li>
              <li>
                <a href="#" onClick={handleLinkClick} className={footerLinkClass}>
                  Termos e Condições
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Receba Novidades</h4>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">Fique por dentro de lançamentos e dicas de limpeza.</p>
            <div className="flex gap-2">
              <input type="text" placeholder="Seu e-mail" className="bg-slate-800 border-none rounded-lg px-4 py-2 w-full focus:ring-1 focus:ring-tucano-blue text-sm" />
              <button className="bg-tucano-blue text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-600 transition-all uppercase tracking-wider">OK</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-slate-500 gap-4">
           <p>© {new Date().getFullYear()} TUCANO PRODUTOS DE LIMPEZA. TODOS OS DIREITOS RESERVADOS.</p>
           <p className="flex items-center gap-1">Feito com <Heart size={12} className="text-red-500" fill="currentColor" /> para lares brasileiros.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
