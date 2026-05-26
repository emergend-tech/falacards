import { ShoppingCart, ShieldCheck, Award, Lock, Sparkles, Volume2, Brain, BookOpen, Heart, Globe, Play, Gift } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import InteractiveToySimulator from "./InteractiveToySimulator";

export default function Hero() {
  const [showOrderModal, setShowOrderModal] = useState(false);
  const heroImagePath = "/src/assets/images/falacards_hero_toy_1779754025168.png";

  const handleCTAClick = () => {
    setShowOrderModal(true);
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-white to-[#FAFAF4] pt-8 md:pt-14 pb-20 md:pb-32" id="hero-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Main 2-Column Hero Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="hero-grid">
          
          {/* LEFT COLUMN: Texts & Value Propositions (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left" id="hero-left-content">
            
            {/* Playful Badges Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6" id="hero-badges-wrapper">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-1.5 bg-[#FFF0BD] text-amber-950 font-extrabold text-xs px-3.5 py-1.5 rounded-full border border-amber-200 shadow-3xs"
                id="hero-badge"
              >
                <Sparkles className="w-3 h-3 text-amber-700 animate-pulse" />
                Associação bilíngue natural
              </motion.div>
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="inline-flex items-center gap-1 bg-blue-50 text-brand-blue font-extrabold text-xs px-3.5 py-1.5 rounded-full border border-blue-100 shadow-3xs"
                id="hero-badge-bilingual"
              >
                <span>🇧🇷 🇺🇸 Português + Inglês</span>
              </motion.div>

              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex items-center bg-emerald-50 text-emerald-800 font-extrabold text-xs px-3.5 py-1.5 rounded-full border border-emerald-100 shadow-3xs"
                id="hero-badge-sequence"
              >
                <span>Primeiro em Português, depois em Inglês</span>
              </motion.div>
            </div>

            {/* Main Rounded Title */}
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight md:leading-[1.15] text-center lg:text-left"
              id="hero-main-heading"
            >
              Aprender <span className="text-brand-blue">inglês</span> ficou <span className="text-brand-blue">divertido</span> <span className="block md:inline">(e sem telas).</span>
            </motion.h2>

            {/* Interactive Demo Simulator only on Mobile screen sizes */}
            <div className="block lg:hidden w-full mt-6 -mb-2" id="hero-mobile-demo-simulator">
              <InteractiveToySimulator heroImage={heroImagePath} />
            </div>

            {/* Paragraph Subtitle */}
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 mt-6 leading-relaxed max-w-2xl font-medium text-center lg:text-left"
              id="hero-subtext"
            >
              FalaCards é o leitor interativo que reproduz as palavras <span className="font-extrabold text-brand-blue">primeiro em português e depois em inglês</span>, facilitando a associação bilíngue natural para crianças de <span className="font-extrabold text-brand-blue">2 a 6 anos</span>.
            </motion.p>

            {/* Benefits Bullet Points */}
            <div className="mt-8 space-y-4 md:space-y-4.5 w-full max-w-xl" id="hero-bullet-points">
              {/* Bullet 1 */}
              <motion.div 
                initial={{ x: -25, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-center gap-3.5"
                id="bullet-interactive-1"
              >
                <div className="w-9 h-9 shrink-0 bg-brand-green text-white rounded-full flex items-center justify-center font-bold shadow-xs">
                  <Volume2 className="w-5 h-5 shadow-inner" />
                </div>
                <span className="text-gray-700 font-semibold text-sm sm:text-base">
                  Mais de 112 cartões que falam português primeiro e inglês depois
                </span>
              </motion.div>

              {/* Bullet 2 */}
              <motion.div 
                initial={{ x: -25, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-center gap-3.5"
                id="bullet-interactive-2"
              >
                <div className="w-9 h-9 shrink-0 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold shadow-xs">
                  <Brain className="w-5 h-5 shadow-inner" />
                </div>
                <span className="text-gray-700 font-semibold text-sm sm:text-base">
                  Estimula fala, memória e concentração
                </span>
              </motion.div>

              {/* Bullet 3 */}
              <motion.div 
                initial={{ x: -25, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex items-center gap-3.5"
                id="bullet-interactive-3"
              >
                <div className="w-9 h-9 shrink-0 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold shadow-xs">
                  <BookOpen className="w-5 h-5 shadow-inner" />
                </div>
                <span className="text-gray-700 font-semibold text-sm sm:text-base">
                  Aprendizado autodidata e interativo
                </span>
              </motion.div>

              {/* Bullet 4 */}
              <motion.div 
                initial={{ x: -25, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="flex items-center gap-3.5"
                id="bullet-interactive-4"
              >
                <div className="w-9 h-9 shrink-0 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold shadow-xs">
                  <Heart className="w-5 h-5 shadow-inner" />
                </div>
                <span className="text-gray-700 font-semibold text-sm sm:text-base">
                  Perfeito para o dia a dia e para presentear
                </span>
              </motion.div>
            </div>

            {/* Call To Action Buttons */}
            <div className="mt-8 sm:mt-10 w-full" id="hero-actions-container">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCTAClick}
                className="w-full sm:w-auto bg-brand-yellow hover:bg-brand-yellow-hover text-gray-950 font-black tracking-wider text-base md:text-lg px-8 py-4.5 rounded-2xl shadow-[0_6px_0_0_#d39e0d] border-2 border-amber-400/30 flex items-center justify-center gap-3 cursor-pointer transition-all"
                id="hero-cta-button"
              >
                <ShoppingCart className="w-5.5 h-5.5 text-gray-950 fill-current" />
                QUERO O MEU FALACARDS
              </motion.button>
              
              {/* Security trust bullet points directly under the button */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 mt-6 text-xs md:text-sm text-gray-500 font-medium" id="hero-trust-badges">
                <div className="flex items-center gap-1.5" id="badge-secured">
                  <ShieldCheck className="w-4.5 h-4.5 text-brand-green" />
                  <span>Compra 100% segura</span>
                </div>
                <div className="flex items-center gap-1.5" id="badge-satisfied">
                  <Award className="w-4.5 h-4.5 text-brand-green" />
                  <span>Satisfação garantida</span>
                </div>
                <div className="flex items-center gap-1.5" id="badge-privacy">
                  <Lock className="w-4.5 h-4.5 text-brand-green" />
                  <span>Privacidade protegida</span>
                </div>
              </div>

              {/* DEMO VIDEO CONTAINER - BEAUTIFULLY FRAMED & ALIGNED */}
              <div className="mt-8 flex flex-col items-center lg:items-start w-full" id="hero-demo-video-wrapper">
                <div className="w-full max-w-[320px] bg-white border-4 border-white rounded-[24px] p-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.08)] ring-1 ring-gray-150 relative overflow-hidden" id="video-card-frame">
                  
                  {/* Outer brand decoration bar representing the brand toy */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-blue opacity-85"></div>
                  
                  {/* Label Header inside card */}
                  <div className="pt-2 pb-1.5 px-1 text-center flex items-center justify-center gap-1.5" id="video-card-header">
                    <span className="w-2 h-2 rounded-full bg-brand-green animate-ping"></span>
                    <span className="text-[10px] sm:text-xs font-black text-gray-800 uppercase tracking-wider">
                      Assista ao FalaCards em Ação
                    </span>
                  </div>

                  {/* Video Player element with exactly aspect-[4/5] configuration as requested */}
                  <div className="relative rounded-xl overflow-hidden bg-slate-950 aspect-[4/5] shadow-inner" id="video-player-container">
                    <iframe 
                      src="https://play.tynk.ai/p/c38b95cf-a14c-4cb5-a11c-73f98cf48a5e"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0 absolute inset-0"
                      id="toy-demonstrat-video"
                    ></iframe>
                  </div>

                  {/* Caption underneath indicating real function shown in the video */}
                  <div className="mt-2.5 px-1 pb-1 text-center" id="video-card-caption">
                    <p className="text-[10px] sm:text-[11px] text-brand-blue font-extrabold leading-tight">
                      🔊 Associação Bilíngue Natural e Divertida:
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-gray-500 font-bold leading-normal mt-0.5">
                      Ensina as palavras primeiro em português e repete imediatamente em inglês!
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Toy Visual (Cols 8-12) */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center" id="hero-right-content">
            <InteractiveToySimulator heroImage={heroImagePath} />
          </div>

        </div>

        {/* Floating Pillars / Bottom Horizontal White Pill */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 bg-white border border-gray-100/90 rounded-3xl p-6 shadow-xl relative z-20"
          id="hero-floating-pillars"
        >
          {/* DESKTOP LAYOUT (Grid) */}
          <div className="hidden md:grid md:grid-cols-4 gap-6" id="desktop-pillars-grid">
            {/* Pillar 1 */}
            <div className="flex items-start md:items-center gap-3.5 border-r border-[#FFF7E8]/10 md:border-gray-50 pr-2 last:border-0" id="pillar-years">
              <div className="p-3 bg-blue-50 text-brand-blue rounded-2xl shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-sm md:text-base text-gray-900 leading-tight">Inglês desde</span>
                <span className="text-xs text-gray-500 font-medium font-sans">os primeiros anos</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-start md:items-center gap-3.5 border-r border-[#FFF7E8]/10 md:border-gray-50 pr-2 last:border-0" id="pillar-fun">
              <div className="p-3 bg-green-50 text-brand-green rounded-2xl shrink-0">
                <Play className="w-6 h-6 fill-current" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-sm md:text-base text-gray-900 leading-tight">Diversão que</span>
                <span className="text-xs text-gray-500 font-medium font-sans">prende a atenção</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-start md:items-center gap-3.5 border-r border-[#FFF7E8]/10 md:border-gray-50 pr-2 last:border-0" id="pillar-life">
              <div className="p-3 bg-amber-50 text-brand-yellow rounded-2xl shrink-0">
                <Brain className="w-6 h-6" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-sm md:text-base text-gray-900 leading-tight">Desenvolvimento</span>
                <span className="text-xs text-gray-500 font-medium font-sans">que fica para a vida</span>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex items-start md:items-center gap-3.5 text-left" id="pillar-gift">
              <div className="p-3 bg-pink-50 text-pink-500 rounded-2xl shrink-0">
                <Gift className="w-6 h-6" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-sm md:text-base text-gray-900 leading-tight">O presente</span>
                <span className="text-xs text-gray-500 font-medium font-sans">inteligente</span>
              </div>
            </div>
          </div>

          {/* MOBILE LAYOUT (Continuous automated sliding marquee track) */}
          <div className="block md:hidden overflow-hidden relative w-full -mx-4 px-4 py-1" id="mobile-pillars-marquee">
            <motion.div 
              className="flex gap-4 whitespace-nowrap min-w-max"
              animate={{ x: ["0%", "-50.15%"] }}
              transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            >
              {/* Pillar list rendering */}
              {[
                { icon: Globe, bg: "bg-blue-50 text-brand-blue", title: "Inglês desde", sub: "os primeiros anos" },
                { icon: Play, bg: "bg-green-50 text-brand-green", title: "Diversão que", sub: "prende a atenção", isFill: true },
                { icon: Brain, bg: "bg-amber-50 text-brand-yellow", title: "Desenvolvimento", sub: "que fica para a vida" },
                { icon: Gift, bg: "bg-pink-50 text-pink-500", title: "O presente", sub: "inteligente" }
              ].map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={`track-1-${idx}`} className="flex items-center gap-3 bg-[#FCFCFA]/80 border border-gray-100 p-2.5 rounded-2xl pr-4 shrink-0">
                    <div className={`p-2.5 rounded-xl ${p.bg} shrink-0`}>
                      <Icon className={`w-5 h-5 ${p.isFill ? "fill-current" : ""}`} />
                    </div>
                    <div className="flex flex-col text-left leading-tight">
                      <span className="font-extrabold text-xs  text-gray-900">{p.title}</span>
                      <span className="text-[10px] text-gray-400 font-bold font-sans">{p.sub}</span>
                    </div>
                  </div>
                );
              })}

              {/* Seamless clone track */}
              {[
                { icon: Globe, bg: "bg-blue-50 text-brand-blue", title: "Inglês desde", sub: "os primeiros anos" },
                { icon: Play, bg: "bg-green-50 text-brand-green", title: "Diversão que", sub: "prende a atenção", isFill: true },
                { icon: Brain, bg: "bg-amber-50 text-brand-yellow", title: "Desenvolvimento", sub: "que fica para a vida" },
                { icon: Gift, bg: "bg-pink-50 text-pink-500", title: "O presente", sub: "inteligente" }
              ].map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={`track-2-${idx}`} className="flex items-center gap-3 bg-[#FCFCFA]/80 border border-gray-100 p-2.5 rounded-2xl pr-4 shrink-0">
                    <div className={`p-2.5 rounded-xl ${p.bg} shrink-0`}>
                      <Icon className={`w-5 h-5 ${p.isFill ? "fill-current" : ""}`} />
                    </div>
                    <div className="flex flex-col text-left leading-tight">
                      <span className="font-extrabold text-xs text-gray-900">{p.title}</span>
                      <span className="text-[10px] text-gray-400 font-bold font-sans">{p.sub}</span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Decorative Wave Curvature Background elements at the bottom */}
      <div className="absolute bottom-0 translate-y-[99%] left-0 w-full overflow-hidden leading-none z-20" id="curve-wave-svg">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[50px] md:h-[90px]"
          style={{ transform: "rotate(180deg)" }}
        >
          <path 
            d="M0,0 C150,90 350,120 600,100 C850,80 1050,110 1200,90 L1200,120 L0,120 Z" 
            className="fill-brand-blue"
          ></path>
        </svg>
      </div>

      {/* Interactive CTA Modals - Checkout / Lead Capture Simulator */}
      {showOrderModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/65 backdrop-blur-xs" id="simulation-modal-parent">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl max-w-md w-full p-6 text-center border border-gray-100 shadow-2xl relative"
            id="simulation-modal-content"
          >
            <div className="w-16 h-16 bg-gradient-to-tr from-brand-yellow to-amber-300 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <Sparkles className="w-8 h-8 text-amber-950" />
            </div>
            <h3 className="text-2xl font-black text-gray-900">Garanta o seu FalaCards!</h3>
            <p className="text-sm text-gray-600 mt-2">
              Você está prestes a transformar o aprendizado do seu filho com diversão sem telas.
            </p>
            
            {/* Lead capture simulated checkout */}
            <div className="mt-5 space-y-3" id="simulated-fields-container">
              <div className="text-left">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Seu Nome</label>
                <input type="text" placeholder="Ex: Maria Carvalho" className="w-full mt-1 p-3 rounded-xl border border-gray-200 text-sm focus:outline-brand-blue" />
              </div>
              <div className="text-left">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Seu WhatsApp</label>
                <input type="tel" placeholder="Ex: (11) 99999-9999" className="w-full mt-1 p-3 rounded-xl border border-gray-200 text-sm focus:outline-brand-blue" />
              </div>
              <div className="bg-brand-blue-light/50 border border-brand-blue-light text-brand-blue p-3.5 rounded-2xl text-xs font-semibold flex items-center justify-between">
                <span>⚡ Preço especial de pré-lançamento</span>
                <span className="text-sm font-black text-brand-blue">R$ 189,90</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <button 
                onClick={() => {
                  alert("Código promocional de pré-lançamento ativado! Obrigado pela preferência!");
                  setShowOrderModal(false);
                }}
                className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-gray-950 font-black py-3.5 rounded-2xl shadow-md cursor-pointer text-sm"
              >
                CONFIRMAR E GERAR CUPOM DE DESCONTO
              </button>
              <button 
                onClick={() => setShowOrderModal(false)}
                className="w-full bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold py-3.5 rounded-2xl cursor-pointer text-sm"
              >
                Voltar ao site
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
