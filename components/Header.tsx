
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CONTACT_INFO, LOGO_URL, INSTA_ICON_URL } from '../constants';

interface HeaderProps {
  scrolled: boolean;
}

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Sobre Nós', id: 'sobre-nos' },
  { label: 'Contato', id: 'contato' },
];

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Ajustado offset para a nova altura do header
      const offset = scrolled ? 100 : 160; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 flex items-center ${scrolled ? 'bg-white shadow-md py-4 sm:py-5' : 'bg-transparent py-10 sm:py-12'}`}>
      <div className="container mx-auto px-6 sm:px-10 flex justify-between items-center">
        {/* Container da Logo - Sem restrições de overflow para permitir expansão */}
        <a 
          href="#inicio" 
          onClick={(e) => handleNavClick(e, 'inicio')}
          className="flex items-center group relative z-10"
          aria-label="Tucano - Ir para o início"
        >
          <div className="flex items-center justify-center">
            <img 
              id="header-logo-icon"
              src={LOGO_URL} 
              alt="TUCANO Logo" 
              className={`w-auto object-contain transition-all duration-500 group-hover:scale-105 
                ${scrolled 
                  ? 'h-20 sm:h-24 md:h-28 lg:h-28' // Mobile: 80px | Desktop: 112px (scrolled)
                  : 'h-24 sm:h-28 md:h-32 lg:h-36' // Mobile: 96px | Desktop: 144px (default)
                }`} 
              style={{ 
                maxHeight: scrolled ? '120px' : '180px',
                filter: scrolled ? 'none' : 'drop-shadow(0 6px 12px rgba(0,0,0,0.15))'
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://img.icons8.com/color/144/toucan.png";
              }}
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`header-nav-link font-black text-sm lg:text-lg transition-all ${scrolled ? 'text-slate-800' : 'text-white'}`}
            >
              {item.label}
            </a>
          ))}
          
          <div className={`flex items-center space-x-4 ml-4 border-l pl-6 ${scrolled ? 'border-slate-200' : 'border-white/20'}`}>
            <a 
              href={CONTACT_INFO.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center transition-transform duration-300 hover:scale-110 overflow-hidden"
              aria-label="Instagram"
            >
              <img src={INSTA_ICON_URL} alt="Instagram" className="w-full h-full object-contain scale-[1.3]" />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle - Tamanho proporcional à nova logo */}
        <div className="md:hidden flex items-center relative z-10">
           <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-tucano-blue' : 'text-white'} aria-label="Abrir menu">
            {isOpen ? <X size={48} /> : <Menu size={48} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-2xl md:hidden flex flex-col p-10 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="header-nav-link w-full text-2xl font-black text-slate-800 py-6 border-b border-slate-50"
            >
              {item.label}
            </a>
          ))}
          <div className="flex justify-center gap-8 mt-10">
             <a 
              href={CONTACT_INFO.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-20 h-20 flex items-center justify-center overflow-hidden bg-slate-50 rounded-3xl"
            >
              <img src={INSTA_ICON_URL} alt="Instagram" className="w-full h-full object-contain scale-[1.3]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
