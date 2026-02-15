import React from 'react';
import { Heart } from 'lucide-react';
import { CONTACT_INFO, LOGO_URL, WA_ICON_URL, INSTA_ICON_URL } from '../constants';

const Footer: React.FC = () => {
  // Classe de hover para links de texto no rodapé
  const footerLinkClass = "transition-colors duration-300 text-slate-400 hover:text-blue-400 cursor-pointer";

  // Função para lidar com cliques em links internos e evitar erros de navegação no ambiente de preview
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    
    // Se for um link interno (começa com #)
    if (href && href.startsWith('#')) {
      e.preventDefault();
      
      // Se for apenas #, não faz nada
      if (href === '#') return;

      const id = href.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        // Compensação para o cabeçalho fixo
        const offset = 100; 
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-20 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Socials */}
          <div className="space-y-8">
             <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden p-2 shadow-2xl">
                   <img src={LOGO_URL} alt="TUCANO Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-3xl font-black tracking-tighter text-white">TUCANO</span>
             </div>
             
             <p className="text-slate-400 leading-relaxed text-base font-medium">
               Limpando lares brasileiros com qualidade superior, cuidado e o melhor custo-benefício do mercado.
             </p>

             {/* Redes Sociais Ampliadas */}
             <div className="flex space-x-5">
               {/* Instagram Button */}
               <a 
                href={CONTACT_INFO.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-800 flex items-center justify-center hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all group overflow-hidden outline-none focus:ring-2 focus:ring-pink-500/50"
                aria-label="Instagram Tucano"
               >
                 <div className="w-full h-full flex items-center justify-center relative">
                    <img 
                      src={INSTA_ICON_URL} 
                      alt="Instagram" 
                      className="w-full h-full object-contain scale-[1.3] md:scale-[1.4] group-hover:scale-[1.55] transition-transform duration-300" 
                    />
                 </div>
               </a>

               {/* WhatsApp Button */}
               <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(CONTACT_INFO.waMessage)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-800 flex items-center justify-center hover:bg-white/10 hover:shadow-[0_0_20px_rgba(37,211,102,0.2)] transition-all group overflow-hidden outline-none focus:ring-2 focus:ring-green-500/50"
                aria-label="WhatsApp Tucano"
               >
                 <div className="w-full h-full flex items-center justify-center relative">
                    <img 
                      src={WA_ICON_URL} 
                      alt="WhatsApp" 
                      className="w-full h-full object-contain scale-[1.9] md:scale-[2.1] group-hover:scale-[2.3] transition-transform duration-300" 
                    />
                 </div>
               </a>
             </div>
          </div>

          {/* Links: Institucional */}
          <div>
            <h4 className="text-white font-black mb-8 text-lg uppercase tracking-wider">Institucional</h4>
            <ul className="space-y-4 text-base font-bold">
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
            <h4 className="text-white font-black mb-8 text-lg uppercase tracking-wider">Suporte</h4>
            <ul className="space-y-4 text-base font-bold">
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
                  {CONTACT_INFO.whatsappDisplay}
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
            <h4 className="text-white font-black mb-8 text-lg uppercase tracking-wider">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed font-medium">Receba lançamentos e ofertas exclusivas no seu e-mail.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-slate-800 border-none rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-tucano-blue text-sm text-white placeholder-slate-500 transition-all" 
              />
              <button className="bg-tucano-blue text-white px-5 py-3 rounded-xl font-black text-sm hover:bg-blue-600 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-900/20">OK</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs font-black text-slate-500 gap-6">
           <p className="tracking-widest">© {new Date().getFullYear()} TUCANO PRODUTOS DE LIMPEZA. CNPJ 00.000.000/0000-00</p>
           <p className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
             Feito com <Heart size={14} className="text-red-500" fill="currentColor" /> para lares brasileiros.
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;