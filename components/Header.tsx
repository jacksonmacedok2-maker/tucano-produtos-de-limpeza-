import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
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

const Header: React.FC = HeaderProps => {
  const { scrolled } = HeaderProps;
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = scrolled ? 80 : 100; 
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
    <header className={`fixed w-full z-50 transition-all duration-300 flex items-center ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent pt-4 pb-8 md:py-10'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#inicio" 
          onClick={(e) => handleNavClick(e, 'inicio')}
          className="flex items-center group relative z-10"
        >
          <img 
            id="header-logo-icon"
            src={LOGO_URL} 
            alt="TUCANO Logo" 
            className={`w-auto transition-all duration-500 transform group-hover:scale-110 ${scrolled ? 'h-16 sm:h-20' : 'h-24 sm:h-44'}`} 
            style={{ filter: scrolled ? 'none' : 'drop-shadow(0 12px 25px rgba(0,0,0,0.3))' }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://img.icons8.com/color/96/toucan.png";
            }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`header-nav-link px-5 py-2.5 rounded-full font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-300 
                ${scrolled 
                  ? 'text-tucano-blue hover:bg-tucano-blue hover:text-white hover:shadow-lg' 
                  : 'text-tucano-yellow hover:bg-tucano-blue hover:text-white hover:shadow-xl hover:scale-105'
                }`}
              style={!scrolled ? { textShadow: '0 2px 4px rgba(0,0,0,0.5)' } : {}}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
           <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-tucano-blue' : 'text-tucano-yellow'} style={!scrolled ? { filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' } : {}}>
            {isOpen ? <X size={42} /> : <Menu size={42} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-2xl md:hidden flex flex-col p-8 space-y-6 animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="text-2xl font-black text-tucano-blue py-3 border-b border-slate-50 uppercase tracking-tighter hover:bg-slate-50 transition-colors px-4 rounded-xl"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;