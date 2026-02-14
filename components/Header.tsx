
import React, { useState } from 'react';
import { Menu, X, Instagram, MessageCircle } from 'lucide-react';
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
      const offset = 80;
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

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(CONTACT_INFO.waMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo minimalista (apenas o símbolo) */}
        <a 
          href="#inicio" 
          onClick={(e) => handleNavClick(e, 'inicio')}
          className="flex items-center group py-1"
          aria-label="Tucano - Ir para o início"
        >
          <div className="flex items-center justify-center">
            <img 
              id="header-logo-icon"
              src={LOGO_URL} 
              alt="TUCANO Logo" 
              className="h-10 md:h-14 w-auto object-contain transition-all duration-300 group-hover:scale-110" 
              onError={(e) => {
                // Fallback discreto caso o link do Drive falhe
                (e.target as HTMLImageElement).src = "https://img.icons8.com/color/96/toucan.png";
              }}
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`header-nav-link font-semibold transition-all ${scrolled ? 'text-slate-700' : 'text-white'}`}
            >
              {item.label}
            </a>
          ))}
          
          <div className="flex items-center space-x-4 ml-4">
            <a 
              href={CONTACT_INFO.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${scrolled ? 'text-slate-700 hover:text-pink-600' : 'text-white hover:text-tucano-yellow'}`}
            >
              <Instagram size={24} />
            </a>
            <button 
              onClick={handleWhatsAppClick}
              className="bg-tucano-yellow text-tucano-blue flex items-center gap-2 px-6 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
           <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-tucano-blue' : 'text-white'}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden flex flex-col p-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-300">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="header-nav-link w-full text-lg font-semibold text-slate-700"
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-4">
            <button 
              onClick={handleWhatsAppClick}
              className="bg-tucano-blue text-white flex items-center justify-center gap-2 w-full py-3 rounded-lg font-bold"
            >
              <MessageCircle size={20} />
              <span>Falar no WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
