import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { CONTACT_INFO, WA_ICON_URL, INSTA_ICON_URL } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(CONTACT_INFO.waMessage)}`;
    window.open(url, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    // Simulando envio da API
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 5000);
    }, 2000);
  };

  return (
    <section id="contato" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Precisa de ajuda? <span className="text-tucano-blue">Fale com a Tucano</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 font-medium">
            Estamos prontos para atender consumidores e parceiros comerciais com agilidade.
          </p>
          
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-5 py-2 rounded-full border border-green-100 shadow-sm animate-bounce-slow">
            <CheckCircle2 className="w-[18px] h-[18px] text-green-500" />
            <span className="text-[10px] sm:text-sm font-bold uppercase tracking-wide">Atendimento prioritário via WhatsApp</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:bg-white transition-all duration-500 group cursor-pointer"
              onClick={handleWhatsAppClick}
            >
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform overflow-hidden relative">
                <img src={WA_ICON_URL} alt="WhatsApp" className="w-full h-full object-contain scale-[1.5] absolute inset-0 m-auto" />
              </div>
              <h4 className="text-lg font-black text-slate-800 mb-1">WhatsApp</h4>
              <p className="text-tucano-blue font-bold text-lg">{CONTACT_INFO.whatsappDisplay}</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:bg-white transition-all duration-500 group">
              <div className="w-20 h-20 bg-blue-100 text-tucano-blue rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <h4 className="text-lg font-black text-slate-800 mb-1">E-mail</h4>
              <p className="text-slate-500 font-bold text-sm sm:text-base">{CONTACT_INFO.email}</p>
            </div>

            <a 
              href={CONTACT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:bg-white transition-all duration-500 group"
            >
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform overflow-hidden relative">
                <img src={INSTA_ICON_URL} alt="Instagram" className="w-full h-full object-contain scale-[1.3] absolute inset-0 m-auto" />
              </div>
              <h4 className="text-lg font-black text-slate-800 mb-1">Instagram</h4>
              <p className="text-slate-500 font-bold text-sm sm:text-base">{CONTACT_INFO.instagramDisplay}</p>
            </a>
          </div>

          <div className="bg-slate-50/50 p-8 sm:p-16 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden">
            {formState === 'success' && (
              <div className="absolute inset-0 z-20 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center text-center animate-in fade-in duration-500 p-8">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 scale-110 animate-bounce">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Mensagem enviada!</h3>
                <p className="text-slate-500 text-lg max-w-md mx-auto font-medium">
                  Agradecemos o seu contato. Nossa equipe retornará em breve para o e-mail informado.
                </p>
              </div>
            )}

            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-black text-slate-800 mb-2">Envie uma mensagem</h3>
                <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">Retornaremos em até 24h úteis</p>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-600 ml-1 uppercase tracking-wider">Nome Completo</label>
                  <input required type="text" placeholder="Ex: Maria Souza" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-4 focus:ring-tucano-blue/10 focus:border-tucano-blue transition-all" />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-600 ml-1 uppercase tracking-wider">Seu Melhor E-mail</label>
                  <input required type="email" placeholder="email@exemplo.com" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-4 focus:ring-tucano-blue/10 focus:border-tucano-blue transition-all" />
                </div>

                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-[10px] font-black text-slate-600 ml-1 uppercase tracking-wider">Como podemos ajudar?</label>
                  <select className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-4 focus:ring-tucano-blue/10 focus:border-tucano-blue appearance-none transition-all cursor-pointer">
                     <option>Quero comprar para minha casa</option>
                     <option>Desejo ser um lojista parceiro</option>
                     <option>Informações sobre distribuição</option>
                     <option>Outros assuntos</option>
                  </select>
                </div>

                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-[10px] font-black text-slate-600 ml-1 uppercase tracking-wider">Mensagem</label>
                  <textarea required rows={4} placeholder="Escreva aqui sua mensagem..." className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-4 focus:ring-tucano-blue/10 focus:border-tucano-blue transition-all resize-none"></textarea>
                </div>

                <div className="md:col-span-2 pt-4">
                  <button 
                    disabled={formState === 'sending'}
                    className="w-full flex items-center justify-center gap-3 bg-tucano-blue text-white py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-blue-700 transition-all group active:scale-[0.98] disabled:opacity-70"
                  >
                    {formState === 'sending' ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span>Enviar Mensagem</span>
                        <Send className="w-[22px] h-[22px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;