
import React from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO, WA_ICON_URL, INSTA_ICON_URL } from '../constants';

const Contact: React.FC = () => {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(CONTACT_INFO.waMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-yellow-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight">
            Precisa de ajuda? <span className="text-tucano-blue">Fale com a Tucano</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6">
            Atendimento rápido para consumidores, lojistas e parceiros comerciais.
          </p>
          
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border border-green-100 shadow-sm animate-bounce-slow">
            {/* Fix: removed sm:size and used className for responsiveness */}
            <CheckCircle2 className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-green-500" />
            <span className="text-[10px] sm:text-sm font-bold uppercase tracking-wide">Resposta rápida pelo WhatsApp</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-12">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#22c35e] via-[#25D366] to-[#1ebe5d] rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-20 text-white shadow-xl flex flex-col items-center justify-center text-center group">
            <div className="absolute inset-0 pointer-events-none">
              <div className="shine-effect"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-4 sm:mb-8 p-3 sm:p-4 bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/20 animate-float-subtle">
                {/* Fix: removed sm:size and used className for responsiveness */}
                <CheckCircle2 className="w-8 h-8 sm:w-12 sm:h-12 text-white" strokeWidth={2.5} />
              </div>

              <h3 className="text-2xl sm:text-4xl lg:text-6xl font-black mb-4 sm:mb-8 tracking-tight">
                Atendimento Instantâneo
              </h3>
              
              <p className="text-white/95 text-base sm:text-xl lg:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
                Nossa equipe prioriza o <span className="font-black text-white underline decoration-white/30 underline-offset-4">WhatsApp</span> para garantir agilidade.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div 
              className="bg-slate-50 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:bg-white transition-all duration-300 group cursor-pointer"
              onClick={handleWhatsAppClick}
            >
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 shadow-md group-hover:scale-110 transition-transform overflow-hidden relative">
                <img src={WA_ICON_URL} alt="WhatsApp" className="w-full h-full object-contain scale-[1.5] absolute inset-0 m-auto" />
              </div>
              <h4 className="text-lg font-black text-slate-800 mb-1">WhatsApp</h4>
              <p className="text-tucano-blue font-bold text-base sm:text-lg">{CONTACT_INFO.whatsappDisplay}</p>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:bg-white transition-all duration-300 group">
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-blue-100 text-tucano-blue rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                {/* Fix: removed sm:size and used className for responsiveness */}
                <Mail className="w-8 h-8 sm:w-14 sm:h-14" strokeWidth={1.5} />
              </div>
              <h4 className="text-lg font-black text-slate-800 mb-1">E-mail</h4>
              <p className="text-slate-500 font-bold text-sm sm:text-base">{CONTACT_INFO.email}</p>
            </div>

            <a 
              href={CONTACT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:bg-white transition-all duration-300 group"
            >
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 shadow-md group-hover:scale-110 transition-transform overflow-hidden relative">
                <img src={INSTA_ICON_URL} alt="Instagram" className="w-full h-full object-contain scale-[1.3] absolute inset-0 m-auto" />
              </div>
              <h4 className="text-lg font-black text-slate-800 mb-1">Instagram</h4>
              <p className="text-slate-500 font-bold text-sm sm:text-base">{CONTACT_INFO.instagramDisplay}</p>
            </a>
          </div>

          <div className="bg-slate-50/50 p-6 sm:p-12 lg:p-16 rounded-[2rem] sm:rounded-[3rem] border border-slate-100 shadow-sm">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-xl sm:text-2xl font-black text-slate-800 mb-2">Mensagem rápida</h3>
                <p className="text-slate-500 font-medium text-sm sm:text-base">Retornaremos em breve.</p>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1">
                  <label className="text-[10px] sm:text-xs font-black text-slate-700 ml-1 uppercase tracking-wider">Nome</label>
                  <input type="text" placeholder="Seu nome" className="w-full bg-white border border-slate-200 rounded-xl sm:rounded-2xl px-5 py-3 sm:px-6 sm:py-4 text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-tucano-blue/10 focus:border-tucano-blue transition-all" />
                </div>
                
                <div className="space-y-1">
                  <label className="text-[10px] sm:text-xs font-black text-slate-700 ml-1 uppercase tracking-wider">E-mail</label>
                  <input type="email" placeholder="Seu e-mail" className="w-full bg-white border border-slate-200 rounded-xl sm:rounded-2xl px-5 py-3 sm:px-6 sm:py-4 text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-tucano-blue/10 focus:border-tucano-blue transition-all" />
                </div>

                <div className="md:col-span-2 space-y-1">
                  <label className="text-[10px] sm:text-xs font-black text-slate-700 ml-1 uppercase tracking-wider">Assunto</label>
                  <select className="w-full bg-white border border-slate-200 rounded-xl sm:rounded-2xl px-5 py-3 sm:px-6 sm:py-4 text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-tucano-blue/10 focus:border-tucano-blue appearance-none transition-all cursor-pointer">
                     <option>Comprar para minha casa</option>
                     <option>Sou lojista / Revenda</option>
                     <option>Dúvida sobre produto</option>
                     <option>Outros</option>
                  </select>
                </div>

                <div className="md:col-span-2 space-y-1">
                  <label className="text-[10px] sm:text-xs font-black text-slate-700 ml-1 uppercase tracking-wider">Mensagem</label>
                  <textarea rows={3} placeholder="Sua mensagem..." className="w-full bg-white border border-slate-200 rounded-xl sm:rounded-2xl px-5 py-3 sm:px-6 sm:py-4 text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-tucano-blue/10 focus:border-tucano-blue transition-all resize-none"></textarea>
                </div>

                <div className="md:col-span-2 pt-4">
                  <button className="w-full flex items-center justify-center gap-2 bg-tucano-blue text-white py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black text-sm sm:text-lg shadow-lg hover:bg-blue-700 transition-all group active:scale-[0.98]">
                    <span>Enviar</span>
                    {/* Fix: removed sm:size and used className for responsiveness */}
                    <Send className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes float-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-subtle {
          animation: float-subtle 4s ease-in-out infinite;
        }
        .shine-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent);
          transform: skewX(-25deg);
          animation: shine-sweep 6s infinite;
        }
        @keyframes shine-sweep {
          0% { left: -100%; }
          20% { left: 150%; }
          100% { left: 150%; }
        }
      `}</style>
    </section>
  );
};

export default Contact;