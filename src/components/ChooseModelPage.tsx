import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowLeft, ShoppingCart, ShieldCheck, Check, 
  Lock, Clock, ExternalLink 
} from "lucide-react";

// Interactive custom vector drawing of the Kitty model
const KittyToySvg = ({ bodyColor, eyeButtonsColor, cardColor }: { bodyColor: string, eyeButtonsColor: string, cardColor: string }) => (
  <svg viewBox="0 0 160 160" className="w-full h-auto max-w-[110px] mx-auto filter drop-shadow-md select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26 44C24 30 36 24 44 32L54 41" stroke={bodyColor} strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M134 44C136 30 124 24 116 32L106 41" stroke={bodyColor} strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 42C26.5 34 33 30 38 35" stroke="#FFA6C9" strokeWidth="6" strokeLinecap="round" />
    <path d="M132 42C133.5 34 127 30 122 35" stroke="#FFA6C9" strokeWidth="6" strokeLinecap="round" />
    <path d="M14 68C11 68 8 72 8 76C8 80 11 84 14 84" fill={bodyColor} />
    <path d="M14 88C11 88 8 92 8 96C8 100 11 104 14 104" fill={bodyColor} />
    <path d="M14 108C11 108 8 112 8 116C8 120 11 124 14 124" fill={bodyColor} />
    <path d="M146 68C149 68 152 72 152 76C152 80 149 84 146 84" fill={bodyColor} />
    <path d="M146 88C149 88 152 92 152 96C152 100 149 104 146 104" fill={bodyColor} />
    <path d="M146 108C149 108 152 112 152 116C152 120 149 124 146 124" fill={bodyColor} />
    <rect x="15" y="44" width="130" height="106" rx="36" fill={bodyColor} />
    <rect x="23" y="52" width="114" height="90" rx="28" fill="white" fillOpacity="0.08" />
    <circle cx="56" cy="62" r="10" fill={eyeButtonsColor} />
    <circle cx="56" cy="62" r="4" fill="white" fillOpacity="0.3" />
    <path d="M53 62H59M56 59L59 62L56 65" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="104" cy="62" r="10" fill={eyeButtonsColor} />
    <circle cx="104" cy="62" r="4" fill="white" fillOpacity="0.3" />
    <path d="M101 62H107M104 59L107 62L104 65" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="80" cy="62" r="2" fill="#334155" />
    <rect x="36" y="80" width="88" height="54" rx="14" fill="#F1F5F9" stroke={eyeButtonsColor} strokeWidth="3" />
    <rect x="42" y="86" width="76" height="42" rx="8" fill={cardColor} />
    <rect x="52" y="100" width="56" height="14" rx="3" fill="white" fillOpacity="0.4" />
    <circle cx="60" cy="94" r="3" fill="white" fillOpacity="0.5" />
    <rect x="55" y="142" width="50" height="4" rx="2" fill="#3B4252" fillOpacity="0.2" />
  </svg>
);

// Custom vector drawing of the Dinosaur model
const DinoToySvg = ({ bodyColor, spineColor, cardColor }: { bodyColor: string, spineColor: string, cardColor: string }) => (
  <svg viewBox="0 0 160 160" className="w-full h-auto max-w-[110px] mx-auto filter drop-shadow-md select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 64L6 72L16 80" stroke={spineColor} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 84L8 92L17 100" stroke={spineColor} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 104L13 112L22 120" stroke={spineColor} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M125 43L135 37L131 49" stroke={spineColor} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M42 46C42 46 20 48 20 78C20 108 24 142 54 142C84 142 118 142 128 142C138 142 144 130 144 116C144 102 144 80 144 64C144 48 132 46 112 46C92 46 42 46 42 46Z" fill={bodyColor} />
    <path d="M20 128C14 132 10 138 12 142C14 146 22 144 32 142" stroke={bodyColor} strokeWidth="8" strokeLinecap="round" />
    <circle cx="132" cy="71" r="5" fill="#1E293B" />
    <circle cx="133.5" cy="69.5" r="1.5" fill="white" />
    <path d="M126 80C128 82 134 82 136 78" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="56" cy="120" r="7.5" fill={spineColor} />
    <path d="M53.5 120H58.5" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    <circle cx="114" cy="120" r="7.5" fill={spineColor} />
    <path d="M114 117.5V120" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    <circle cx="114" cy="120" r="3" stroke="#1E293B" strokeWidth="1" strokeDasharray="1.5 1.5" fill="none" opacity="0.6" />
    <circle cx="85" cy="120" r="1.8" fill="#1E293B" opacity="0.3" />
    <rect x="44" y="66" width="72" height="42" rx="10" fill="#F8FAFC" stroke={spineColor} strokeWidth="2.5" />
    <g id="inserted-educational-card-bus">
      <rect x="52" y="16" width="56" height="54" rx="4" fill="#E0F2FE" stroke="#BAE6FD" strokeWidth="1.5" />
      <rect x="58" y="20" width="28" height="6" rx="3" fill="#38BDF8" />
      <text x="72" y="24" fontSize="4.5" fontWeight="bold" fill="white" textAnchor="middle">vehicles</text>
      <text x="102" y="24" fontSize="5.5" fontWeight="bold" fill="#0369A1" textAnchor="middle">1</text>
      <text x="80" y="38" fontSize="11" fontWeight="900" fill="#0F172A" textAnchor="middle">bus</text>
      <rect x="58" y="44" width="44" height="20" rx="4" fill="#EFF6FF" />
      <rect x="64" y="47" width="32" height="11" rx="2" fill="#F59E0B" />
      <rect x="64" y="52" width="32" height="2" fill="#EF4444" />
      <rect x="67" y="48" width="6" height="3" fill="#E2E8F0" />
      <rect x="75" y="48" width="6" height="3" fill="#E2E8F0" />
      <rect x="83" y="48" width="6" height="3" fill="#E2E8F0" />
      <circle cx="70" cy="58" r="2.5" fill="#1E293B" />
      <circle cx="90" cy="58" r="2.5" fill="#1E293B" />
    </g>
  </svg>
);

interface ChooseModelPageProps {
  onBack: () => void;
  defaultSelectedId?: string;
}

interface SelectedItem {
  id: string;
  name: string;
  colorName: string;
  type: "kitty" | "dino";
  bgHex: string;
  eyeHex: string;
  spineHex?: string;
  checkoutUrl: string;
}

const AVAILABLE_MODELS: SelectedItem[] = [
  { 
    id: "dino-green", 
    name: "Dinossauro", 
    colorName: "Verde Floresta", 
    type: "dino", 
    bgHex: "#10B981", 
    eyeHex: "", 
    spineHex: "#FCD34D",
    checkoutUrl: "https://falacards.mycartpanda.com/checkout/210596657:1" 
  },
  { 
    id: "dino-blue", 
    name: "Dinossauro", 
    colorName: "Azul Celeste", 
    type: "dino", 
    bgHex: "#38BDF8", 
    eyeHex: "", 
    spineHex: "#FCD34D",
    checkoutUrl: "https://falacards.mycartpanda.com/checkout/210596656:1" 
  },
  { 
    id: "kitty-pink", 
    name: "Gatinho", 
    colorName: "Rosa Mágico", 
    type: "kitty", 
    bgHex: "#FF8DA1", 
    eyeHex: "#38BDF8",
    checkoutUrl: "https://falacards.mycartpanda.com/checkout/210596658:1" 
  },
  { 
    id: "kitty-blue", 
    name: "Gatinho", 
    colorName: "Azul Brilhante", 
    type: "kitty", 
    bgHex: "#38BDF8", 
    eyeHex: "#FF8DA1",
    checkoutUrl: "https://falacards.mycartpanda.com/checkout/210596659:1" 
  }
];

export default function ChooseModelPage({ onBack, defaultSelectedId }: ChooseModelPageProps) {
  const [selectedId, setSelectedId] = useState<string>(defaultSelectedId || "dino-green");
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState(1140); // 19 minutes in seconds

  const selectedModel = AVAILABLE_MODELS.find(m => m.id === selectedId) || AVAILABLE_MODELS[0];

  useEffect(() => {
    if (defaultSelectedId) {
      setSelectedId(defaultSelectedId);
    }
  }, [defaultSelectedId]);

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

  const handleGoToCheckout = () => {
    const finalUrl = selectedModel.checkoutUrl;
    setIsRedirecting(true);
    
    // Simula uma tela linda de redirecionamento seguro por 1.8 segundos antes de abrir
    setTimeout(() => {
      setIsRedirecting(false);
      window.open(finalUrl, "_blank", "noopener,noreferrer");
      
      // Fallback: Redireciona na mesma aba caso popups estejam bloqueados
      window.location.href = finalUrl;
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] py-8 px-4 sm:px-6 md:px-8 text-gray-900" id="choose-model-page-container">
      <div className="max-w-6xl mx-auto">
        
        {/* COMPACT SECURE HEADER */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-gray-200/60 mb-8" id="step-nav-bar">
          <button 
            onClick={onBack} 
            className="inline-flex items-center gap-2 text-sm font-black text-brand-blue hover:text-blue-700 cursor-pointer transition-colors bg-white hover:bg-gray-50 border border-gray-100 px-4 py-2.5 rounded-2xl shadow-3xs"
            id="back-to-home-btn"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para a Página Principal
          </button>
          
          <div className="flex items-center gap-1.5" id="secure-badge">
            <ShieldCheck className="w-5 h-5 text-brand-green" />
            <span className="text-xs font-extrabold text-brand-green uppercase tracking-wider">Redirecionamento de Checkout 100% Seguro</span>
          </div>
        </div>

        {/* RESERVATION TIMER */}
        {!isRedirecting && (
          <div className="mb-8 w-full bg-red-50 border border-red-100 text-red-700 rounded-2xl py-3.5 px-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-3xs hover:border-red-200 transition-colors" id="checkout-reservation-timer">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-red-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-extrabold">
                O modelo escolhido e a oferta com frete grátis estão separados e guardados por:
              </span>
            </div>
            <span className="font-mono text-base font-black tracking-wider text-red-600 bg-white border border-red-200 px-3 py-1 rounded-xl shadow-3xs">
              {formatTime(timeLeft)}
            </span>
          </div>
        )}

        <AnimatePresence mode="wait">
          {isRedirecting ? (
            /* REDIRECTING ENCHANTING SCREEN */
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border-3 border-brand-blue rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto shadow-xl my-10"
              id="redirecting-screen"
            >
              <div className="w-20 h-20 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-100 relative">
                <ShieldCheck className="w-10 h-10 animate-pulse" />
                <div className="absolute inset-0 rounded-full border-3 border-brand-blue border-t-transparent animate-spin"></div>
              </div>

              <span className="inline-flex bg-[#EEF2FF] text-blue-600 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 border border-blue-100">
                Segurança Ativada 🔒
              </span>
              
              <h1 className="text-3xl font-black text-gray-950 tracking-tight leading-tight">
                Preparando conexão com o <br />
                <span className="text-brand-blue">Checkout Seguro do FalaCards...</span>
              </h1>

              <p className="text-sm text-gray-500 font-semibold leading-relaxed max-w-md mx-auto mt-4">
                Estamos direcionando você para a página de pagamento criptografada onde poderá preencher seus dados, escolher Pix ou Cartão e garantir o frete grátis.
              </p>

              <div className="mt-8 bg-gray-50 rounded-2xl p-4.5 border border-gray-100 text-left max-w-md mx-auto space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400 font-bold">Produto:</span>
                  <span className="font-extrabold text-[#1E293B]">FalaCards {selectedModel.name} - {selectedModel.colorName}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400 font-bold">Quantidade:</span>
                  <span className="font-extrabold text-[#1E293B]">1 Unidade</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400 font-bold">Total Estimado:</span>
                  <span className="font-extrabold text-brand-green">R$ 129,90</span>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href={selectedModel.checkoutUrl}
                  className="inline-flex items-center gap-1.5 text-xs text-brand-blue hover:text-blue-700 underline font-extrabold cursor-pointer"
                >
                  Não foi redirecionado? Clique aqui para o checkout manual <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ) : (
            /* DYNAMIC PICKER & VALUE BOX GRID */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="checkout-panel-grid">
              
              {/* LEFT: MODEL SELECTION AND BUNDLE BREAKDOWN */}
              <div className="lg:col-span-7 space-y-8" id="left-column-selection">
                
                {/* 1. SELECT MODEL */}
                <div className="bg-white rounded-3xl border border-gray-200/50 p-6 sm:p-8 shadow-3xs" id="model-card-selection-box">
                  <div className="flex items-center gap-2 mb-6" id="select-model-title-block">
                    <span className="w-7 h-7 rounded-full bg-brand-blue/15 text-brand-blue flex items-center justify-center font-black text-sm">1</span>
                    <h2 className="text-xl sm:text-2xl font-black text-gray-950">Escolha o seu Modelo</h2>
                  </div>

                  {/* Interactive customizable selection grid */}
                  <div className="grid grid-cols-2 gap-4" id="checkout-models-grid">
                    {AVAILABLE_MODELS.map((item) => {
                      const isSelected = selectedId === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setSelectedId(item.id)}
                          className={`relative rounded-3xl p-4 flex flex-col items-center justify-between transition-all duration-300 text-center cursor-pointer border-3 ${
                            isSelected 
                              ? "bg-blue-50/20 border-brand-blue shadow-md ring-2 ring-brand-blue/20" 
                              : "bg-white hover:bg-gray-50 border-gray-200/85 hover:border-gray-300 shadow-3xs"
                          }`}
                          id={`select-btn-${item.id}`}
                        >
                          {/* Selected tag */}
                          {isSelected && (
                            <span className="absolute -top-2.5 right-4 bg-brand-blue text-white font-black text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
                              <Check className="w-2.5 h-2.5" /> Selecionado
                            </span>
                          )}

                          {/* Highlight Star for green dinosaur */}
                          {item.id === "dino-green" && (
                            <span className="absolute -top-2.5 -left-2 rotate-[-5deg] bg-brand-yellow font-black text-[9px] text-amber-950 uppercase tracking-widest px-2.5 py-1 rounded-full shadow-xs border border-amber-300">
                              ⭐ Campeão de Vendas
                            </span>
                          )}

                          <div className="w-full aspect-square flex items-center justify-center p-1.5">
                            {item.type === "kitty" ? (
                              <KittyToySvg bodyColor={item.bgHex} eyeButtonsColor={item.eyeHex} cardColor="#E0F2FE" />
                            ) : (
                              <DinoToySvg bodyColor={item.bgHex} spineColor={item.spineHex || ""} cardColor="#E0F2FE" />
                            )}
                          </div>

                          <div className="mt-3 leading-tight">
                            <span className="block text-[10px] font-black uppercase tracking-wider text-gray-400">Modelo {item.name}</span>
                            <span className="text-xs sm:text-sm font-extrabold text-[#1E293B] block mt-0.5">{item.colorName}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-5 p-4 bg-emerald-50/60 border border-emerald-100/85 rounded-2xl flex items-center gap-3 text-left" id="selection-content-assure">
                    <span className="text-2xl shrink-0">🎁</span>
                    <p className="text-xs text-emerald-850 font-bold leading-snug">
                      Excelente escolha! O modelo <span className="font-extrabold text-brand-blue">{selectedModel.name} {selectedModel.colorName}</span> já está reservado com frete grátis. Clique em Garantir Minha Oferta para finalizar sua compra.
                    </p>
                  </div>
                </div>

                {/* INCLUDED BUNDLE HIGHLIGHT */}
                <div className="bg-white rounded-3xl border border-gray-200/50 p-6 sm:p-8 shadow-3xs" id="bundle-breakdown-box">
                  <h3 className="font-black text-gray-950 text-base mb-4 flex items-center gap-2">
                    <span className="text-xl">📦</span> Tudo o que você receberá em casa:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100/50">
                      <p className="font-extrabold text-blue-900 mb-1">🎮 O Leitor FalaCards</p>
                      <p className="text-xs text-gray-500 font-medium leading-relaxed">No modelo escolhido, leve, com bateria recarregável de longa duração e áudio limpo de alta fidelidade para garantir a pronúncia correta no aprendizado bilíngue.</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-emerald-50/40 border border-emerald-100/40">
                      <p className="font-extrabold text-emerald-900 mb-1">📇 112 Cartões Frente e Verso</p>
                      <p className="text-xs text-gray-500 font-medium leading-relaxed">Que somam 224 palavras bilíngues com ilustrações vivas e divididas em 12 tópicos pedagógicos fundamentais.</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-amber-50/40 border border-amber-100/40">
                      <p className="font-extrabold text-amber-900 mb-1">🔌 Acessórios Inclusos</p>
                      <p className="text-xs text-gray-500 font-medium leading-relaxed">Cabo de carregamento USB e caixa de cartões reforçada para as crianças levarem para onde quiserem.</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-purple-50/40 border border-purple-100/40">
                      <p className="font-extrabold text-purple-900 mb-1">📗 Super Bônus Digitais</p>
                      <p className="text-xs text-gray-500 font-medium leading-relaxed">Três e-books completos e didáticos orientando pais no desenvolvimento de bilinguismo eficaz para a primeira infância.</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* RIGHT: SECURE CART BREAKDOWN AND INTERFACE REDIRECT */}
              <div className="lg:col-span-5 sticky top-6 space-y-6" id="right-column-checkout">
                
                <div className="bg-white rounded-3xl border-3 border-brand-blue p-6 sm:p-8 shadow-xl flex flex-col justify-between" id="checkout-pricing-summary-card">
                  
                  <div className="flex items-center gap-2 pb-4 border-b border-gray-100 mb-5" id="checkout-payment-step-logo">
                    <div className="p-1.5 bg-brand-blue text-white rounded-lg">
                      <ShoppingCart className="w-4 h-4 fill-current" />
                    </div>
                    <h3 className="font-extrabold text-gray-950 text-base">Resumo do Pedido</h3>
                  </div>

                  {/* Selected product row preview */}
                  <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-2xl mb-4 text-left border border-gray-100" id="selected-model-checkout-row">
                    <div className="w-14 h-14 bg-white border border-gray-100 rounded-xl p-1 flex items-center justify-center shrink-0 shadow-3xs">
                      {selectedModel.type === "kitty" ? (
                        <KittyToySvg bodyColor={selectedModel.bgHex} eyeButtonsColor={selectedModel.eyeHex} cardColor="#E0F2FE" />
                      ) : (
                        <DinoToySvg bodyColor={selectedModel.bgHex} spineColor={selectedModel.spineHex || ""} cardColor="#E0F2FE" />
                      )}
                    </div>
                    <div className="flex-grow min-w-0">
                      <span className="inline-block text-[8px] sm:text-[9px] font-black uppercase tracking-wider bg-[#EFF6FF] text-brand-blue px-2 py-0.5 rounded-md">Modelo Reservado</span>
                      <h4 className="font-black text-[#1E293B] text-xs sm:text-sm truncate mt-0.5">FalaCards {selectedModel.name} - {selectedModel.colorName}</h4>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[10px] text-gray-500 font-semibold">Qtd: 1 Unidade</span>
                        <span className="text-gray-300">•</span>
                        <span className="text-[10px] text-brand-green font-extrabold">Frete Grátis Ativo</span>
                      </div>
                    </div>
                  </div>

                  {/* Price calculations */}
                  <div className="space-y-2.5 pt-4 border-t border-gray-100 text-left text-xs" id="value-pricing-breakdown">
                    <div className="flex items-center justify-between font-semibold text-gray-500">
                      <span>Subtotal Regular:</span>
                      <span className="font-bold">R$ 129,90</span>
                    </div>
                    <div className="flex items-center justify-between font-extrabold text-brand-blue">
                      <span>Envio Seguro e Entrega:</span>
                      <span className="uppercase tracking-wider font-black text-brand-green text-[10px] bg-green-50 px-2 py-0.5 border border-green-100 rounded-md">Grátis</span>
                    </div>

                    <div className="flex flex-col pt-3 border-t border-gray-100 mb-4 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-sm font-black text-gray-900">Total Garantido:</span>
                        <div className="text-right">
                          <span className="text-2xl sm:text-3xl font-black text-gray-950">R$ 129,90</span>
                        </div>
                      </div>
                      <span className="text-[10px] text-gray-400 font-bold block text-right">no checkout seguro externo do CartPanda</span>
                    </div>
                  </div>

                  {/* Payment instruction guarantee text */}
                  <div className="mt-3 bg-blue-50/40 border border-blue-100 rounded-2xl p-4 text-left text-xs text-blue-950/90 leading-relaxed font-semibold space-y-2" id="payment-external-instructions">
                    <p className="flex items-center gap-1.5 text-brand-blue font-black tracking-wide uppercase text-[10px] mb-1">
                      <Lock className="w-3.5 h-3.5 text-brand-blue fill-current" /> Checkout Externo Protegido
                    </p>
                    <p className="text-[11px] font-semibold">
                      Ao clicar no botão verde abaixo, você será conectado a um ambiente altamente seguro do CartPanda para preencher seu endereço e escolher sua forma de pagamento favorita:
                    </p>
                    <div className="grid grid-cols-3 gap-1.5 pt-1.5 text-center text-[10px] font-black uppercase text-gray-600">
                      <div className="bg-white border rounded-lg p-1">⚡ PIX</div>
                      <div className="bg-white border rounded-lg p-1">💳 CARTÃO</div>
                      <div className="bg-white border rounded-lg p-1">📃 BOLETO</div>
                    </div>
                  </div>

                  {/* PRIMARY REDIRECT CALL TO ACTION */}
                  <div className="mt-6 space-y-4">
                    <button
                      type="button"
                      onClick={handleGoToCheckout}
                      className="w-full bg-[#10B981] hover:bg-emerald-600 text-white font-black tracking-widest py-4.5 rounded-2xl shadow-[0_5px_0_0_#047857] border border-emerald-400 text-sm md:text-base flex items-center justify-center gap-2 cursor-pointer transition-all active:translate-y-1 active:shadow-none animate-pulse hover:animate-none"
                      id="checkout-secure-button"
                    >
                      <Lock className="w-5 h-5 text-white fill-current" />
                      GARANTIR MINHA OFERTA AGORA
                    </button>

                    <p className="text-[10px] text-gray-400 font-bold leading-normal text-center">
                      🔐 Você será redirecionado para a nossa plataforma de pagamentos criptografada.
                    </p>
                  </div>

                </div>

                {/* TRUST CARD SECTION */}
                <div className="bg-white border border-gray-200/50 rounded-2xl p-4 text-left flex gap-3 shadow-3xs" id="checkout-sidebar-policy">
                  <span className="text-xl shrink-0 mt-0.5">⭐</span>
                  <div>
                    <h4 className="font-extrabold text-xs text-gray-900 leading-tight">Garantia FalaCards de 7 Dias</h4>
                    <p className="text-[10px] text-gray-500 font-semibold leading-relaxed mt-1">
                      Experimente o FalaCards sem medo. Se você não gostar do design, das vozes ou dos materiais, garantimos o reembolso integral sem termos complicados. Seu risco é zero.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
