
import React, { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { CONTACT_INFO, LOGO_URL } from '../constants';

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
      const offset = 100; // Aumentado devido ao header maior
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
    <header className={`fixed w-full z-50 transition-all duration-500 flex items-center ${scrolled ? 'bg-white shadow-md py-3 sm:py-3' : 'bg-transparent py-6 sm:py-8'}`}>
      <div className="container mx-auto px-5 sm:px-6 flex justify-between items-center">
        {/* Logo com presença de marca expandida */}
        <a 
          href="#inicio" 
          onClick={(e) => handleNavClick(e, 'inicio')}
          className="flex items-center group"
          aria-label="Tucano - Ir para o início"
        >
          <div className="flex items-center justify-center">
            <img 
              id="header-logo-icon"
              src={LOGO_URL} 
              alt="TUCANO Logo" 
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 
                ${scrolled ? 'h-12 sm:h-14 md:h-16 lg:h-20' : 'h-14 sm:h-16 md:h-20 lg:h-24'}`} 
              style={{ maxHeight: scrolled ? '80px' : '96px' }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://img.icons8.com/color/144/toucan.png";
              }}
            />
          </div>
        </a>

        {/* Desktop Nav - Alinhamento centralizado com a logo */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-6">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`header-nav-link font-extrabold text-sm lg:text-base transition-all ${scrolled ? 'text-slate-800' : 'text-white'}`}
            >
              {item.label}
            </a>
          ))}
          
          <div className="flex items-center space-x-4 ml-6 border-l border-white/20 pl-6">
            <a 
              href={CONTACT_INFO.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${scrolled ? 'text-slate-700 hover:text-pink-600' : 'text-white hover:text-tucano-yellow'}`}
            >
              <Instagram size={28} />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
           <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-tucano-blue' : 'text-white'} aria-label="Abrir menu">
            {isOpen ? <X size={36} /> : <Menu size={36} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-2xl md:hidden flex flex-col p-8 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="header-nav-link w-full text-xl font-black text-slate-800 py-4 border-b border-slate-50"
            >
              {item.label}
            </a>
          ))}
          <div className="flex justify-center gap-6 mt-6">
             <a 
              href={CONTACT_INFO.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-pink-600 transition-colors"
            >
              <Instagram size={32} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
