
import React from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO, WA_ICON_URL, INSTA_ICON_URL } from '../constants';

const Contact: React.FC = () => {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(CONTACT_INFO.waMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-white relative overflow-hidden">
      {/* Elementos decorativos de fundo para sensação de limpeza */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-yellow-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* TOPO DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Precisa de ajuda? <span className="text-tucano-blue">Fale com a Tucano</span>
          </h2>
          <p className="text-slate-500 text-lg lg:text-xl leading-relaxed mb-6">
            Atendimento rápido para consumidores, lojistas e parceiros comerciais. Queremos ouvir você!
          </p>
          
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-5 py-2 rounded-full border border-green-100 shadow-sm animate-bounce-slow">
            <CheckCircle2 size={18} className="text-green-500" />
            <span className="text-sm font-bold uppercase tracking-wide">Resposta rápida pelo WhatsApp</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* DESTAQUE PRINCIPAL — WHATSAPP */}
          <div className="bg-gradient-to-br from-[#25D366] to-[#1ebe5d] rounded-[2.5rem] p-8 lg:p-12 text-white shadow-[0_20px_50px_-15px_rgba(37,211,102,0.4)] flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden group">
            {/* Brilho decorativo no card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
            
            <div className="text-center lg:text-left relative z-10 max-w-xl">
              <h3 className="text-3xl lg:text-4xl font-black mb-4">Fale conosco pelo WhatsApp</h3>
              <p className="text-white/90 text-lg font-medium leading-relaxed">
                Dúvidas, informações sobre produtos ou onde comprar — nossa equipe está online para te atender agora.
              </p>
            </div>

            <button 
              onClick={handleWhatsAppClick}
              className="relative z-10 flex items-center justify-center gap-4 bg-white text-[#25D366] px-10 py-5 lg:px-14 lg:py-6 rounded-2xl font-black text-xl lg:text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all w-full lg:w-auto overflow-hidden"
            >
              <img src={WA_ICON_URL} alt="" className="w-14 h-14 lg:w-16 lg:h-16 object-contain scale-[1.3] transition-transform" />
              <span>Falar no WhatsApp agora</span>
            </button>
          </div>

          {/* OUTROS CANAIS (Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card WhatsApp - Retornado para escala original de 1.45 */}
            <div 
              className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:bg-white transition-all duration-300 group cursor-pointer"
              onClick={handleWhatsAppClick}
            >
              <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform overflow-hidden relative">
                <img 
                  src={WA_ICON_URL} 
                  alt="WhatsApp" 
                  className="w-full h-full object-contain scale-[1.45] absolute inset-0 m-auto" 
                />
              </div>
              <h4 className="text-xl font-black text-slate-800 mb-2">WhatsApp</h4>
              <p className="text-slate-500 font-bold">{CONTACT_INFO.whatsappDisplay}</p>
            </div>

            {/* Card Email - Consistência Visual */}
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:bg-white transition-all duration-300 group">
              <div className="w-24 h-24 bg-blue-100 text-tucano-blue rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail size={56} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-black text-slate-800 mb-2">E-mail</h4>
              <p className="text-slate-500 font-bold">{CONTACT_INFO.email}</p>
            </div>

            {/* Card Instagram - Mantido conforme o desejado anteriormente */}
            <a 
              href={CONTACT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:bg-white transition-all duration-300 group"
            >
              <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform overflow-hidden relative">
                <img 
                  src={INSTA_ICON_URL} 
                  alt="Instagram" 
                  className="w-full h-full object-contain scale-[1.3] absolute inset-0 m-auto" 
                />
              </div>
              <h4 className="text-xl font-black text-slate-800 mb-2">Instagram</h4>
              <p className="text-slate-500 font-bold">{CONTACT_INFO.instagramDisplay}</p>
            </a>
          </div>

          {/* FORMULÁRIO (Secundário) */}
          <div className="bg-slate-50/50 p-8 lg:p-16 rounded-[3rem] border border-slate-100 shadow-sm mt-16">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-black text-slate-800 mb-2">Prefere nos enviar uma mensagem?</h3>
                <p className="text-slate-500 font-medium">Preencha o formulário abaixo e retornaremos em breve.</p>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-700 ml-1 uppercase tracking-wider">Seu Nome</label>
                  <input 
                    type="text" 
                    placeholder="Como podemos te chamar?" 
                    className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-tucano-blue/10 focus:border-tucano-blue transition-all" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-700 ml-1 uppercase tracking-wider">Seu E-mail</label>
                  <input 
                    type="email" 
                    placeholder="email@exemplo.com" 
                    className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-tucano-blue/10 focus:border-tucano-blue transition-all" 
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-black text-slate-700 ml-1 uppercase tracking-wider">Sobre o que deseja falar?</label>
                  <select className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-tucano-blue/10 focus:border-tucano-blue appearance-none transition-all cursor-pointer">
                     <option>Quero comprar para minha casa</option>
                     <option>Sou lojista e quero revender Tucano</option>
                     <option>Dúvida sobre um produto específico</option>
                     <option>Elogio ou Sugestão</option>
                     <option>Outros assuntos</option>
                  </select>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-black text-slate-700 ml-1 uppercase tracking-wider">Sua Mensagem</label>
                  <textarea 
                    rows={4} 
                    placeholder="Escreva aqui sua mensagem com detalhes..." 
                    className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-tucano-blue/10 focus:border-tucano-blue transition-all resize-none"
                  ></textarea>
                </div>

                <div className="md:col-span-2 pt-6">
                  <button className="w-full flex items-center justify-center gap-3 bg-tucano-blue text-white py-5 rounded-2xl font-black text-lg shadow-[0_15px_30px_-5px_rgba(0,86,179,0.3)] hover:bg-blue-700 hover:shadow-[0_20px_40px_-5px_rgba(0,86,179,0.4)] transition-all group active:scale-[0.98]">
                    <span>Enviar minha mensagem</span>
                    <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
