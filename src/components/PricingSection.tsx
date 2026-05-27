import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Check, ShieldCheck, Truck, Percent, CreditCard, Sparkles, 
  HelpCircle, Gift, Award, Info, Lock, Flame, AlertTriangle
} from "lucide-react";

interface BenefitLine {
  text: string;
  isBonus?: boolean;
}

const PRICING_BENEFITS: BenefitLine[] = [
  { text: "Leitor Interativo FalaCards Premium" },
  { text: "112 Cartões Dupla Face (+224 ilustrações e sons)" },
  { text: "Mais de 510 palavras essenciais em inglês" },
  { text: "12 categorias educativas completas" },
  { text: "Estímulo bilingue precoce e natural" },
  { text: "Desenvolvimento cognitivo longe de telas" },
  { text: "Bateria de longa duração recarregável (USB)" },
  { text: "Adaptador e cabo de carregamento inclusos" },
  { text: "BÔNUS: 3 E-books Didáticos para pais imprimirem", isBonus: true },
  { text: "BÔNUS: Guia prático de bilinguismo na primeira infância", isBonus: true }
];

export default function PricingSection({ onNavigateToChooseModel }: { onNavigateToChooseModel?: () => void }) {
  const [timeLeft, setTimeLeft] = useState(1140); // 19 minutes in seconds
  const [selectedPayment, setSelectedPayment] = useState<"card" | "pix">("card");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 1140));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className="relative w-full bg-[#FCFCFA] py-16 md:py-24 px-4 md:px-8 border-t border-gray-100/60 overflow-hidden" id="pricing-offer-section">
      
      {/* Dynamic ambient patterns */}
      <div className="absolute top-[10%] left-[-5%] w-72 h-72 bg-blue-100/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto" id="pricing-header">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-brand-yellow text-gray-950 uppercase tracking-widest animate-pulse">
            ⚡ OFERTA DE PRÉ-LANÇAMENTO LIMITADA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-4 leading-tight">
            Invista no futuro bilingue do seu filho hoje.
          </h2>
          <p className="text-sm sm:text-base text-gray-650 mt-3 font-medium">
            Reduza as telas e estimule o aprendizado ativo pelo menor preço do ano. Frete grátis garantido.
          </p>
          
          {/* Urgent Timer Alert */}
          <div className="mt-5 inline-flex items-center gap-2 bg-brand-blue/5 border border-brand-blue/10 px-4 py-2 rounded-2xl text-xs font-bold text-brand-blue animate-bounce">
            <Flame className="w-4 h-4 text-red-500 animate-pulse fill-red-500" />
            <span>Preço promocional expira em: <span className="font-mono text-sm tracking-wider text-red-650 font-black">{formatTime(timeLeft)}</span></span>
          </div>
        </div>

        {/* COMPARISON AND PRICE CARD HOLDER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto" id="pricing-core-grid">
          
          {/* LEFT PANEL: What is included (Cols 1-6) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-gray-100/90 shadow-sm flex flex-col justify-between" id="pricing-included-list">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-50">
                <h3 className="font-black text-gray-950 text-lg sm:text-xl">O que você vai receber:</h3>
                <span className="text-[10px] font-bold text-gray-400 bg-gray-50 uppercase tracking-wider px-2.5 py-1 rounded-full border border-gray-100">Kit Completo</span>
              </div>

              {/* Kit Image representation */}
              <div className="mb-6 rounded-2xl bg-[#F8FAFC]/60 border border-gray-100 p-3 flex justify-center items-center" id="kit-receive-image-container">
                <img 
                  src="https://i.ibb.co/KpCQdhBf/Chat-GPT-Image-26-de-mai-de-2026-15-59-42-removebg-preview.png" 
                  alt="FalaCards Kit Completo" 
                  className="max-h-60 w-auto object-contain hover:scale-102 transition-transform duration-300" 
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-3.5" id="benefits-check-lines">
                {PRICING_BENEFITS.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-left">
                    <div className={`p-1 rounded-full shrink-0 ${item.isBonus ? "bg-amber-100 text-amber-700" : "bg-green-50 text-brand-green"}`}>
                      {item.isBonus ? <Gift className="w-3.5 h-3.5" /> : <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <p className={`text-xs sm:text-sm leading-snug ${item.isBonus ? "font-extrabold text-[#d39e0d]" : "font-semibold text-gray-700"}`}>
                        {item.text}
                      </p>
                      {item.isBonus && (
                        <span className="inline-block text-[9px] font-black uppercase tracking-wider bg-amber-100 text-[#d39e0d] px-1.5 rounded-sm mt-0.5">Bônus Grátis</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated Live Stock alerts */}
            <div className="mt-8 pt-5 border-t border-gray-50 bg-[#FCFCFA]/80 p-4 rounded-2xl flex items-center gap-3 text-left">
              <div className="p-2.5 bg-brand-yellow/20 text-yellow-700 rounded-xl max-w-max animate-pulse">
                <AlertTriangle className="w-5 h-5 shrink-0" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-extrabold text-amber-900 leading-tight">Últimas 17 unidades disponíveis com este valor</span>
                <span className="text-[10px] text-gray-500 font-medium">Lote promocional de pré-lançamento quase esgotado.</span>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Official Checkout pricing block (Cols 7-12) */}
          <div className="lg:col-span-5 bg-white border-4 border-brand-blue rounded-3xl p-6 md:p-8 flex flex-col justify-between relative shadow-xl" id="pricing-core-card">
            
            {/* Best Deal Ribbon */}
            <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-brand-blue text-white font-extrabold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md select-none">
              🔥 Melor Oferta
            </div>

            <div className="text-center">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Valor Unitário</span>
              
              {/* Crossed previous high investment anchor */}
              <div className="flex items-center justify-center gap-2 text-stone-400 font-bold text-sm sm:text-base line-through">
                <span>R$ 229,00</span>
              </div>

              {/* Dynamic current promo price */}
              <div className="mt-2 flex flex-col items-center">
                <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest bg-green-50 border border-green-100 px-3 py-1 rounded-full animate-pulse">
                  Economize R$ 99,10 hoje
                </span>
                
                {/* Massive highlighted Price */}
                <h3 className="text-4xl sm:text-5xl font-black text-gray-950 mt-3 tracking-tight">
                  R$ 129,90
                </h3>
                
                <span className="text-xs text-gray-500 font-bold block mt-1">à vista ou no Pix/Cartão</span>
              </div>

              {/* Installment simulation */}
              <div className="mt-4 p-3 bg-blue-50/70 border border-blue-100 rounded-2xl" id="pricing-installment-call">
                <p className="text-xs font-bold text-gray-500">Ou em até 12 parcelas de:</p>
                <div className="flex items-baseline justify-center gap-1 mt-1">
                  <span className="text-xs font-bold text-brand-blue">12x</span>
                  <span className="text-2xl sm:text-3xl font-black text-brand-blue leading-none">R$ 12,99</span>
                </div>
                <span className="text-[10px] text-gray-400 font-bold block mt-1">Menos de R$ 0,43 por dia para bilingüizar seu filho</span>
              </div>

              {/* Copy Coupon interactive drawer */}
              <div className="mt-5 p-3.5 bg-amber-50/40 border-2 border-dashed border-amber-200 rounded-2xl flex flex-col gap-1 items-center">
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">Cupom de pré-lançamento ativo</span>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="font-mono text-xs font-black bg-brand-yellow text-gray-950 px-3.5 py-1.5 rounded-lg border border-amber-300">
                    SOMENTE HOJE: R$ 129,90
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Instant Action Button */}
            <div className="mt-6 space-y-3">
              <button 
                onClick={() => {
                  if (onNavigateToChooseModel) {
                    onNavigateToChooseModel();
                  } else {
                    alert("Compra simulada com sucesso! Você receberá os detalhes no WhatsApp e e-mail cadastrados.");
                  }
                }}
                className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-gray-950 font-black tracking-widest py-4.5 rounded-2xl shadow-[0_5px_0_0_#d39e0d] border border-amber-400 text-sm md:text-base flex items-center justify-center gap-2 cursor-pointer transition-all"
                id="pricing-cta-purchase"
              >
                COMPRAR FALACARDS COM DESCONTO
              </button>
              
              <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                <Lock className="w-3.5 h-3.5 text-brand-green" />
                <span>Ambiente totalmente criptografado</span>
              </div>
            </div>

            {/* Payment support card systems */}
            <div className="mt-6 pt-5 border-t border-gray-100 text-center" id="pricing-payment-methods">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Formas de pagamento aceitas</span>
              
              {/* Inline visual representation cards */}
              <div className="flex items-center justify-center gap-3 text-gray-400">
                <div className="p-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-100 flex items-center gap-1 text-[10px] font-bold text-gray-600">
                  <span className="text-xs">⚡</span> Pix imediato
                </div>
                <div className="p-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-100 flex items-center gap-1 text-[10px] font-bold text-gray-600">
                  <CreditCard className="w-3.5 h-3.5 text-brand-blue" /> Cartão de crédito
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM GUARANTEE CARDS ROW (INCONDITIONAL 7 DAYS GUARANTEE + SHIPPING) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto" id="pricing-bottom-policies">
          
          {/* Policy Card 1: 7-Days Guarantee */}
          <div className="bg-white border border-gray-100 rounded-3xl p-5 md:p-6 flex items-start gap-4 shadow-sm text-left" id="policy-guarantee">
            <div className="p-3.5 bg-amber-50 text-brand-yellow rounded-2xl shrink-0 mt-0.5 animate-pulse">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm md:text-base text-gray-900 leading-tight">Garantia Blindada de Satisfação</h4>
              <p className="text-xs text-stone-500 mt-1.5 leading-relaxed font-semibold">
                Temos tanta certeza que seu filho vai adorar o FalaCards que oferecemos **7 dias de garantia incondicional**. Se você não gostar, devolvemos 100% do seu dinheiro sem qualquer burocracia.
              </p>
            </div>
          </div>

          {/* Policy Card 2: Safe Fast Delivery */}
          <div className="bg-white border border-gray-100 rounded-3xl p-5 md:p-6 hidden md:flex items-start gap-4 shadow-sm text-left" id="policy-freedrop">
            <div className="p-3.5 bg-blue-50 text-brand-blue rounded-2xl shrink-0 mt-0.5">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm md:text-base text-gray-900 leading-tight">Frete Grátis com Código de Rastreamento</h4>
              <p className="text-xs text-stone-500 mt-1.5 leading-relaxed font-semibold">
                Enviamos o FalaCards embalado com carinho e proteção para todo o Brasil sem custos adicionais. Você receberá o código de rastreamento no e-mail e WhatsApp para acompanhar cada passo.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
