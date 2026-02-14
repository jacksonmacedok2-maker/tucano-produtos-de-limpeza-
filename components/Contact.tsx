
import React from 'react';
import { Mail, Phone, Instagram, Send, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-extrabold text-tucano-blue mb-6">Vamos conversar?</h2>
            <p className="text-slate-500 mb-10">Tire suas dúvidas, envie sugestões ou saiba como ser um parceiro comercial.</p>
            
            <div className="space-y-6">
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(CONTACT_INFO.waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">WhatsApp</p>
                  <p className="font-bold text-slate-800">{CONTACT_INFO.whatsappDisplay}</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-tucano-blue group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">E-mail</p>
                  <p className="font-bold text-slate-800">{CONTACT_INFO.email}</p>
                </div>
              </div>
              
              <a 
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 group-hover:text-white transition-colors">
                  <Instagram size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Instagram</p>
                  <p className="font-bold text-slate-800">{CONTACT_INFO.instagramDisplay}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:w-2/3 bg-white p-10 lg:p-16 rounded-[2.5rem] shadow-xl border border-slate-100">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Nome Completo</label>
                <input type="text" placeholder="Seu nome" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tucano-blue/20 focus:border-tucano-blue" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">E-mail</label>
                <input type="email" placeholder="seu@email.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tucano-blue/20 focus:border-tucano-blue" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700">Assunto</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tucano-blue/20 focus:border-tucano-blue">
                   <option>Quero comprar para minha casa</option>
                   <option>Quero ser um revendedor</option>
                   <option>Dúvida sobre produto</option>
                   <option>Outros</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700">Mensagem</label>
                <textarea rows={4} placeholder="Como podemos te ajudar?" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tucano-blue/20 focus:border-tucano-blue"></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <button className="w-full flex items-center justify-center gap-2 bg-tucano-blue text-white py-4 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-colors group">
                  <span>Enviar Mensagem</span>
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
