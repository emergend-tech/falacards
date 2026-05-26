import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import mascotImg from "../assets/images/falacards_mascot_support_1779758476116.png";
import { 
  Volume2, WifiOff, BatteryCharging, Layers, ShieldCheck, 
  Droplets, MousePointer, Truck, Award, HelpCircle, ChevronDown, MessageSquare,
  X, Shield, CheckCircle
} from "lucide-react";

// Baby face icon for recommended age
const BabyFaceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14c1.5 2 6.5 2 8 0" />
    <circle cx="9" cy="10" r="1.5" fill="currentColor" />
    <circle cx="15" cy="10" r="1.5" fill="currentColor" />
    <path d="M12 2a4.3 4.3 0 0 1 0 4.5" />
  </svg>
);

interface FaqItem {
  id: string;
  icon: any;
  pergunta: string;
  resposta: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "audio",
    icon: Volume2,
    pergunta: "O áudio é em inglês?",
    resposta: "Sim! Todas as palavras são pronunciadas em inglês com áudio claro e interativo, ajudando a criança a aprender de forma natural e divertida."
  },
  {
    id: "idioma-bilingue",
    icon: Volume2,
    pergunta: "O brinquedo fala em português ou inglês?",
    resposta: "O FalaCards reproduz primeiro a palavra em português e depois em inglês, ajudando a criança a criar uma associação natural entre os dois idiomas."
  },
  {
    id: "idade",
    icon: BabyFaceIcon,
    pergunta: "A partir de qual idade é recomendado?",
    resposta: "O FalaCards é recomendado para crianças a partir de 2 anos."
  },
  {
    id: "internet",
    icon: WifiOff,
    pergunta: "Precisa de internet?",
    resposta: "Não. O brinquedo funciona totalmente offline."
  },
  {
    id: "recarregavel",
    icon: BatteryCharging,
    pergunta: "O brinquedo é recarregável?",
    resposta: "Sim! O FalaCards acompanha cabo USB para carregamento."
  },
  {
    id: "palavras",
    icon: Layers,
    pergunta: "Quantas palavras acompanham?",
    resposta: "O kit acompanha mais de 510 palavras divididas em mais de 12 categorias educativas."
  },
  {
    id: "resistente",
    icon: ShieldCheck,
    pergunta: "O material é resistente?",
    resposta: "Sim. Os cartões possuem material reforçado e acabamento resistente para acompanhar o dia a dia infantil."
  },
  {
    id: "impermeavel",
    icon: Droplets,
    pergunta: "Os cartões são impermeáveis?",
    resposta: "Sim! Os cartões possuem revestimento impermeável e são fáceis de limpar."
  },
  {
    id: "facil",
    icon: MousePointer,
    pergunta: "É fácil de usar?",
    resposta: "Sim. Basta inserir o cartão no leitor para ouvir a pronúncia da palavra."
  },
  {
    id: "entrega",
    icon: Truck,
    pergunta: "Quanto tempo demora a entrega?",
    resposta: "7 dias úteis aprox. mas que depende da regiao"
  },
  {
    id: "garantia",
    icon: Award,
    pergunta: "Possui garantia?",
    resposta: "Sim! Você possui 7 dias de garantia para testar o produto com tranquilidade."
  }
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("audio");
  const [isRefundModalOpen, setIsRefundModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refundForm, setRefundForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    motivo: ""
  });

  const toggleItem = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  const handleRefundSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsappRedirect = () => {
    window.open("https://wa.me/5543988491727?text=ol%C3%A1%2C%20vim%20pelo%20site%20e%20estou%20com%20duvidas", "_blank");
  };

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 border-t border-gray-150/40 overflow-hidden" id="faq-section">
      <div className="max-w-3xl mx-auto">
        
        {/* UPPER TITLE AREA */}
        <div className="text-center mb-12 sm:mb-16" id="faq-headline">
          {/* Badge */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-[#FFF0BD] text-[#543d04] px-4.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4 border border-amber-200/50"
          >
            <span className="text-sm">❓</span>
            Dúvidas frequentes
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-tight">
            Perguntas frequentes
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-3 font-semibold">
            Tire suas dúvidas e compre com <span className="text-brand-blue font-extrabold">total confiança.</span>
          </p>

          {/* Simple yellow underline with end circle mimicking official premium layout */}
          <div className="flex items-center justify-center gap-1.5 mt-5">
            <div className="w-16 h-1 bg-brand-yellow rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full"></div>
          </div>
        </div>

        {/* FAQ ACCORDION CONTAINER */}
        <div className="space-y-4" id="faq-accordion-container">
          {FAQ_ITEMS.map((item) => {
            const Icon = item.icon;
            const isOpen = openId === item.id;

            return (
              <div 
                key={item.id}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden select-none ${
                  isOpen 
                    ? "border-blue-100 bg-[#F4F8FF]" 
                    : "border-gray-150/70 bg-white hover:border-gray-250 hover:bg-[#FAFBFD]"
                }`}
                id={`faq-accordion-item-${item.id}`}
              >
                {/* Header Title clickable button */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-4.5 sm:p-5.5 text-left cursor-pointer transition-colors"
                  id={`faq-btn-${item.id}`}
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    {/* Rounded Icon background container */}
                    <div className={`p-2.5 rounded-xl shrink-0 ${isOpen ? "bg-white text-brand-blue shadow-xs" : "bg-[#F0F4FA] text-gray-505"}`}>
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className="font-extrabold text-sm sm:text-base text-gray-950 tracking-tight leading-tight">
                      {item.pergunta}
                    </span>
                  </div>

                  {/* Circle toggle arrow */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-brand-blue text-white" : "bg-[#F0F4FA] text-brand-blue"}`}>
                    <ChevronDown className={`w-4 h-4 stroke-[2.8] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                </button>

                {/* Animated content expansion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5.5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-gray-700 leading-relaxed font-semibold pr-10">
                        {item.resposta}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* SUPPORT AREA PANEL AT THE BOTTOM */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 sm:mt-16 bg-[#F4F8FF] border border-blue-100/50 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left shadow-xs"
          id="faq-support-bottom-box"
        >
          {/* Generated responsive Puppy Mascot image */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-md bg-white">
            <img 
              src={mascotImg} 
              alt="Mascote FalaCards para suporte técnico ao cliente" 
              className="w-full h-full object-cover scale-[1.05]"
              referrerPolicy="no-referrer"
              id="support-mascot-img"
            />
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <h4 className="text-lg sm:text-xl font-black text-gray-950 tracking-tight">
              Ainda ficou com dúvidas?
            </h4>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed font-semibold">
              Nossa equipe está de plantão, pronta para ajudar você com muito carinho.
            </p>

            {/* Link to Team directly styled through a nice pulse WhatsApp theme */}
            <div className="mt-4 flex flex-col sm:flex-row items-center gap-3.5">
              <button 
                onClick={handleWhatsappRedirect}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0066FF] hover:bg-[#0052cc] text-white font-black text-xs md:text-sm tracking-wider uppercase rounded-2xl shadow-md cursor-pointer transition-all active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 fill-white text-transparent shrink-0" />
                Falar com nossa equipe
              </button>
              
              <span className="text-[11px] font-bold text-gray-400 flex items-center gap-1">
                🛡️ Atendimento rápido e humanizado
              </span>
            </div>
          </div>
        </motion.div>

        {/* SOLICITAR REEMBOLSO BUTTON BELOW FAQ / SUPPORT BOX */}
        <div className="mt-8 flex flex-col items-center gap-2" id="refund-trigger-container">
          <button
            onClick={() => {
              setRefundForm({ nome: "", telefone: "", email: "", motivo: "" });
              setIsSubmitted(false);
              setIsRefundModalOpen(true);
            }}
            className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-black text-gray-400 hover:text-red-500 hover:bg-red-50/50 hover:border-red-200 transition-all uppercase tracking-wider py-3 px-6 rounded-2xl border border-gray-150 bg-[#FCFCFD]/50 cursor-pointer shadow-3xs hover:shadow-xs active:scale-[0.98]"
            id="refund-request-trigger-btn"
          >
            <Shield className="w-4 h-4 text-brand-blue" />
            Solicitar reembolso garantia de 7 dias
          </button>
          <span className="text-[10px] sm:text-xs text-gray-400 font-semibold tracking-wide">
            Sem burocracia ou complicações, seu investimento 100% seguro.
          </span>
        </div>

        {/* REFUND MODAL WINDOW */}
        <AnimatePresence>
          {isRefundModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs" id="refund-modal-overlay">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="bg-white rounded-3xl border border-gray-150 max-w-lg w-full overflow-hidden shadow-2xl relative"
                id="refund-modal-box"
              >
                {/* Header aspect */}
                <div className="bg-[#FAFBFD] border-b border-gray-100 p-5 sm:p-6 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-red-50 text-red-600 rounded-xl border border-red-100">
                      <Shield className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-gray-950 text-base sm:text-lg leading-tight">Garantia Incondicional FalaCards</h3>
                      <p className="text-[10px] sm:text-xs text-gray-400 font-bold mt-0.5 uppercase tracking-wider">Solicitação de Estorno Segura</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsRefundModalOpen(false)}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200/85 text-gray-500 hover:text-gray-900 transition-colors flex items-center justify-center cursor-pointer"
                  >
                    <X className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>

                {/* Body aspect */}
                <div className="p-6 sm:p-8">
                  {!isSubmitted ? (
                    <form onSubmit={handleRefundSubmit} className="space-y-4" id="refund-form-element">
                      <p className="text-xs sm:text-[13px] text-gray-500 font-medium leading-relaxed pb-2 border-b border-gray-50">
                        Preencha o formulário abaixo para solicitar o reembolso de 100% do seu valor. Sem letras miúdas ou complicações.
                      </p>

                      <div className="space-y-1">
                        <label className="block text-[11px] sm:text-xs font-black text-gray-700 uppercase tracking-wider">Nome Completo</label>
                        <input 
                          type="text" 
                          required
                          value={refundForm.nome}
                          onChange={(e) => setRefundForm({ ...refundForm, nome: e.target.value })}
                          placeholder="Digite seu nome completo" 
                          className="w-full h-11 border border-gray-200 hover:border-gray-300 focus:border-brand-blue rounded-xl px-3.5 text-xs sm:text-sm bg-[#FCFCFD] font-semibold text-gray-950 outline-none transition-all placeholder:text-gray-300 placeholder:font-normal"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="block text-[11px] sm:text-xs font-black text-gray-700 uppercase tracking-wider">Telefone / WhatsApp</label>
                          <input 
                            type="tel" 
                            required
                            value={refundForm.telefone}
                            onChange={(e) => setRefundForm({ ...refundForm, telefone: e.target.value })}
                            placeholder="(99) 99999-9999" 
                            className="w-full h-11 border border-gray-200 hover:border-gray-300 focus:border-brand-blue rounded-xl px-3.5 text-xs sm:text-sm bg-[#FCFCFD] font-semibold text-gray-950 outline-none transition-all placeholder:text-gray-300 placeholder:font-normal"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="block text-[11px] sm:text-xs font-black text-gray-700 uppercase tracking-wider">E-mail de compra</label>
                          <input 
                            type="email" 
                            required
                            value={refundForm.email}
                            onChange={(e) => setRefundForm({ ...refundForm, email: e.target.value })}
                            placeholder="seuemail@exemplo.com" 
                            className="w-full h-11 border border-gray-200 hover:border-gray-300 focus:border-brand-blue rounded-xl px-3.5 text-xs sm:text-sm bg-[#FCFCFD] font-semibold text-gray-950 outline-none transition-all placeholder:text-gray-300 placeholder:font-normal"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="block text-[11px] sm:text-xs font-black text-gray-700 uppercase tracking-wider">Motivo da Devolução</label>
                        <textarea 
                          required
                          rows={3}
                          value={refundForm.motivo}
                          onChange={(e) => setRefundForm({ ...refundForm, motivo: e.target.value })}
                          placeholder="Conte-nos o motivo (ex: Meu filho não se adaptou)" 
                          className="w-full border border-gray-200 hover:border-gray-300 focus:border-brand-blue rounded-xl p-3.5 text-xs sm:text-sm bg-[#FCFCFD] font-semibold text-gray-950 outline-none transition-all placeholder:text-gray-300 placeholder:font-normal text-gray-950"
                        ></textarea>
                      </div>

                      <div className="pt-4 flex flex-col sm:flex-row gap-3">
                        <button 
                          type="button"
                          onClick={() => setIsRefundModalOpen(false)}
                          className="w-full sm:w-[35%] h-12 border border-gray-200 hover:bg-gray-50 text-gray-600 font-extrabold text-xs tracking-wider uppercase rounded-xl cursor-pointer transition-colors"
                        >
                          Cancelar
                        </button>
                        <button 
                          type="submit"
                          className="w-full sm:w-[65%] h-12 bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white font-black text-xs tracking-wider uppercase rounded-xl cursor-pointer shadow-md transition-all flex items-center justify-center gap-2"
                        >
                          <Shield className="w-4 h-4" />
                          Enviar Solicitação
                        </button>
                      </div>
                    </form>
                  ) : (
                    <motion.div 
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-6 sm:py-8 space-y-4"
                      id="refund-success-container"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mx-auto shadow-sm">
                        <CheckCircle className="w-8 h-8 stroke-[2.5]" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-extrabold text-gray-950 text-lg sm:text-xl">Solicitação Recebida!</h4>
                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-md mx-auto font-semibold">
                          Olá <span className="text-gray-950 font-black">{refundForm.nome}</span>, recebemos o seu pedido. <strong className="text-emerald-600 font-extrabold">Entraremos em contato em até 24h para realização do estorno</strong> do seu pagamento.
                        </p>
                      </div>
                      <div className="pt-6">
                        <button 
                          onClick={() => setIsRefundModalOpen(false)}
                          className="h-11 px-8 bg-gray-950 hover:bg-gray-850 active:scale-95 text-white font-bold text-xs tracking-wider uppercase rounded-xl cursor-pointer transition-all shadow-md"
                        >
                          Fechar janela
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
