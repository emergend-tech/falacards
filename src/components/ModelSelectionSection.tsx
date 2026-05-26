import { motion } from "motion/react";
import { Sparkles, ShieldCheck } from "lucide-react";

// Beautiful interactive custom vector drawing of the Kitty model
const KittyToySvg = ({ bodyColor, eyeButtonsColor, cardColor }: { bodyColor: string, eyeButtonsColor: string, cardColor: string }) => (
  <svg viewBox="0 0 160 160" className="w-full h-auto max-w-[130px] mx-auto filter drop-shadow-md select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left and Right Ears of the Kitty */}
    <path d="M26 44C24 30 36 24 44 32L54 41" stroke={bodyColor} strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M134 44C136 30 124 24 116 32L106 41" stroke={bodyColor} strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Inner Pink/Light parts of the ears */}
    <path d="M28 42C26.5 34 33 30 38 35" stroke="#FFA6C9" strokeWidth="6" strokeLinecap="round" />
    <path d="M132 42C133.5 34 127 30 122 35" stroke="#FFA6C9" strokeWidth="6" strokeLinecap="round" />

    {/* Whiskers style ridges on the side of the kitty body */}
    <path d="M14 68C11 68 8 72 8 76C8 80 11 84 14 84" fill={bodyColor} />
    <path d="M14 88C11 88 8 92 8 96C8 100 11 104 14 104" fill={bodyColor} />
    <path d="M14 108C11 108 8 112 8 116C8 120 11 124 14 124" fill={bodyColor} />
    
    <path d="M146 68C149 68 152 72 152 76C152 80 149 84 146 84" fill={bodyColor} />
    <path d="M146 88C149 88 152 92 152 96C152 100 149 104 146 104" fill={bodyColor} />
    <path d="M146 108C149 108 152 112 152 116C152 120 149 124 146 124" fill={bodyColor} />

    {/* Main rounded body */}
    <rect x="15" y="44" width="130" height="106" rx="36" fill={bodyColor} />
    
    {/* Highlight reflection effects to give high-quality 3D render feel */}
    <rect x="23" y="52" width="114" height="90" rx="28" fill="white" fillOpacity="0.08" />

    {/* Circular cute eye buttons at the top of the kitty face */}
    <circle cx="56" cy="62" r="10" fill={eyeButtonsColor} />
    <circle cx="56" cy="62" r="4" fill="white" fillOpacity="0.3" />
    {/* Inner arrow in the buttons */}
    <path d="M53 62H59M56 59L59 62L56 65" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />

    <circle cx="104" cy="62" r="10" fill={eyeButtonsColor} />
    <circle cx="104" cy="62" r="4" fill="white" fillOpacity="0.3" />
    <path d="M101 62H107M104 59L107 62L104 65" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />

    {/* Small center led / mic hole */}
    <circle cx="80" cy="62" r="2" fill="#334155" />

    {/* Inner Screen Card frame container */}
    <rect x="36" y="80" width="88" height="54" rx="14" fill="#F1F5F9" stroke={eyeButtonsColor} strokeWidth="3" />
    
    {/* Simulated inserted clear card with light background */}
    <rect x="42" y="86" width="76" height="42" rx="8" fill={cardColor} />
    
    {/* Decorative details on the card screen */}
    <rect x="52" y="100" width="56" height="14" rx="3" fill="white" fillOpacity="0.4" />
    <circle cx="60" cy="94" r="3" fill="white" fillOpacity="0.5" />

    {/* Bottom Speaker grill line */}
    <rect x="55" y="142" width="50" height="4" rx="2" fill="#3B4252" fillOpacity="0.2" />
  </svg>
);

// Custom vector drawing of the Dinosaur model
const DinoToySvg = ({ bodyColor, spineColor, cardColor }: { bodyColor: string, spineColor: string, cardColor: string }) => (
  <svg viewBox="0 0 160 160" className="w-full h-auto max-w-[130px] mx-auto filter drop-shadow-md select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Dinosaur plates/spines on the back left */}
    <path d="M16 64L6 72L16 80" stroke={spineColor} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 84L8 92L17 100" stroke={spineColor} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 104L13 112L22 120" stroke={spineColor} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />

    {/* Dinosaur head scale spikes near the top of the body */}
    <path d="M125 43L135 37L131 49" stroke={spineColor} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />

    {/* Main playful asymmetry dinosaur shaped body */}
    <path d="M42 46C42 46 20 48 20 78C20 108 24 142 54 142C84 142 118 142 128 142C138 142 144 130 144 116C144 102 144 80 144 64C144 48 132 46 112 46C92 46 42 46 42 46Z" fill={bodyColor} />

    {/* Left cute tail shape hint on the bottom left corner */}
    <path d="M20 128C14 132 10 138 12 142C14 146 22 144 32 142" stroke={bodyColor} strokeWidth="8" strokeLinecap="round" />

    {/* Cute smiling dino eyes on the right body side */}
    <circle cx="132" cy="71" r="5" fill="#1E293B" />
    <circle cx="133.5" cy="69.5" r="1.5" fill="white" />
    
    {/* Small dinosaur snout smile */}
    <path d="M126 80C128 82 134 82 136 78" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />

    {/* Two circular buttons at the bottom of the device face */}
    <circle cx="56" cy="120" r="7.5" fill={spineColor} />
    <path d="M53.5 120H58.5" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" />

    <circle cx="114" cy="120" r="7.5" fill={spineColor} />
    {/* Power icon hint on the right button */}
    <path d="M114 117.5V120" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" />
    <circle cx="114" cy="120" r="3" stroke="#1E293B" strokeWidth="1" strokeDasharray="1.5 1.5" fill="none" strokeOpacity="0.6" />

    {/* Mid led hole indicator */}
    <circle cx="85" cy="120" r="1.8" fill="#1E293B" fillOpacity="0.3" />

    {/* Inner Screen Card read window */}
    <rect x="44" y="66" width="72" height="42" rx="10" fill="#F8FAFC" stroke={spineColor} strokeWidth="2.5" />

    {/* Dynamic inserted English study card "bus" sticking out from the top slot */}
    <g id="inserted-educational-card-bus">
      {/* The card paper body sticking out of the top slot of the dino */}
      <rect x="52" y="16" width="56" height="54" rx="4" fill="#E0F2FE" stroke="#BAE6FD" strokeWidth="1.5" />
      
      {/* Top category label "vehicles" and card number "1" */}
      <rect x="58" y="20" width="28" height="6" rx="3" fill="#38BDF8" />
      <text x="72" y="24" fontSize="4.5" fontWeight="bold" fill="white" textAnchor="middle">vehicles</text>
      <text x="102" y="24" fontSize="5.5" fontWeight="bold" fill="#0369A1" textAnchor="middle">1</text>
      
      {/* Clean "bus" English word written in bold */}
      <text x="80" y="38" fontSize="11" fontWeight="900" fill="#0F172A" textAnchor="middle">bus</text>
      
      {/* Cartoon Red & Yellow school bus drawing on the card screen */}
      <rect x="58" y="44" width="44" height="20" rx="4" fill="#EFF6FF" />
      
      {/* Small bus body SVG inside */}
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

export default function ModelSelectionSection() {
  return (
    <section className="relative w-full bg-[#FCFCFA] py-14 px-4 sm:px-6 md:px-8 border-t border-gray-150/50" id="model-selection-section">
      <div className="max-w-xl mx-auto md:max-w-2xl lg:max-w-4xl">
        
        {/* CENTERED CORRESPONDING HEADER */}
        <div className="text-center mb-10" id="model-heading-container">
          {/* Badge: 4 opções de cores */}
          <div className="inline-flex items-center gap-1.5 bg-[#EEF2FF] border border-blue-100/40 text-blue-600 px-4 py-2 rounded-full text-xs font-black tracking-wide mb-4 animate-fadeIn" id="model-top-badge">
            <span>🎨</span>
            <span>4 opções de cores</span>
          </div>

          {/* Heading with color highlight and emoji exactly matching reference */}
          <h2 className="text-[26px] sm:text-3xl md:text-3xl font-black text-gray-950 tracking-tight leading-tight" id="model-title">
            Escolha o modelo favorito <br />
            <span className="text-blue-600 underline decoration-blue-100 decoration-3">do seu pequeno.</span> 💛
          </h2>

          {/* Supporting fine subtitle description */}
          <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed max-w-lg mx-auto mt-4" id="model-subtitle">
            Duas versões divertidas com cores encantadoras para tornar o aprendizado ainda mais especial.
          </p>
        </div>

        {/* CONTAINER GRID INDIVIDUAL STYLED OPTIONS */}
        <div className="space-y-12" id="categories-wrapper-block">
          
          {/* 1. GATINHO CATEGORY BOX */}
          <div className="text-center space-y-5" id="gatinho-models">
            {/* Pink Gatinho Badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#FFF0F5] border border-rose-100 text-rose-500 font-extrabold tracking-widest text-[10px] sm:text-xs rounded-full px-5 py-2 uppercase shadow-3xs" id="gatinho-capsule">
              <span>🐱</span> Gatinho
            </div>

            {/* Side by side 2 Cards Grid for Kitty */}
            <div className="grid grid-cols-2 gap-4 max-w-lg md:max-w-2xl mx-auto" id="gatinho-grid">
              
              {/* Pink Kitty Option */}
              <div className="bg-white rounded-[24px] border border-gray-150/60 p-4 sm:p-5 flex flex-col items-center justify-between shadow-3xs hover:shadow-2xs transition-shadow duration-300" id="card-pink-kitty">
                <div className="w-full aspect-square flex items-center justify-center p-2">
                  <KittyToySvg bodyColor="#FF8DA1" eyeButtonsColor="#38BDF8" cardColor="#E0F2FE" />
                </div>
                {/* Colored option bullet point */}
                <div className="mt-4 flex items-center justify-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF8DA1] shrink-0"></span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#1E293B]">Rosa</span>
                </div>
              </div>

              {/* Blue Kitty Option */}
              <div className="bg-white rounded-[24px] border border-gray-150/60 p-4 sm:p-5 flex flex-col items-center justify-between shadow-3xs hover:shadow-2xs transition-shadow duration-300" id="card-blue-kitty">
                <div className="w-full aspect-square flex items-center justify-center p-2">
                  <KittyToySvg bodyColor="#38BDF8" eyeButtonsColor="#FF8DA1" cardColor="#FFF0F5" />
                </div>
                {/* Colored option bullet point */}
                <div className="mt-4 flex items-center justify-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#38BDF8] shrink-0"></span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#1E293B]">Azul</span>
                </div>
              </div>

            </div>
          </div>

          {/* 2. DINOSSAURO CATEGORY BOX */}
          <div className="text-center space-y-5" id="dinossauro-models">
            {/* Green Dinosaur Badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#ECFDF5] border border-emerald-100 text-[#047857] font-extrabold tracking-widest text-[10px] sm:text-xs rounded-full px-5 py-2 uppercase shadow-3xs" id="dino-capsule">
              <span>🦖</span> Dinossauro
            </div>

            {/* Side by side 2 Cards Grid for Dinosaur */}
            <div className="grid grid-cols-2 gap-4 max-w-lg md:max-w-2xl mx-auto relative" id="dinossauro-grid">
              
              {/* Green Dino Option (With absolute sticker exactly like custom paper reference badge) */}
              <div className="bg-white rounded-[24px] border border-gray-150/60 p-4 sm:p-5 flex flex-col items-center justify-between shadow-3xs hover:shadow-2xs transition-shadow duration-300 relative overflow-visible" id="card-green-dino">
                
                {/* "Mais escolhido pelos pequenos" yellow sticker matching visual reference exactly */}
                <div className="absolute -top-3.5 -left-3.5 angle-12 bg-[#FCD34D] text-[#78350F] rounded-full p-2.5 sm:p-3 shadow-md border-2 border-white flex flex-col items-center justify-center leading-none text-center z-10 animate-bounce scale-90 sm:scale-100 origin-top-left" id="best-choice-sticker">
                  <span className="text-[9px] font-black uppercase tracking-widest block mb-0.5">👑 Mais</span>
                  <span className="text-[10px] font-black tracking-tight block">escolhido</span>
                  <span className="text-[8px] font-medium block">pelos</span>
                  <span className="text-[9px] font-black tracking-tight block">pequenos</span>
                </div>

                <div className="w-full aspect-square flex items-center justify-center p-2">
                  <DinoToySvg bodyColor="#10B981" spineColor="#FCD34D" cardColor="#E0F2FE" />
                </div>
                {/* Colored option bullet point */}
                <div className="mt-4 flex items-center justify-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#10B981] shrink-0"></span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#1E293B]">Verde</span>
                </div>
              </div>

              {/* Blue Dino Option */}
              <div className="bg-white rounded-[24px] border border-gray-150/60 p-4 sm:p-5 flex flex-col items-center justify-between shadow-3xs hover:shadow-2xs transition-shadow duration-300" id="card-blue-dino">
                <div className="w-full aspect-square flex items-center justify-center p-2">
                  <DinoToySvg bodyColor="#38BDF8" spineColor="#FCD34D" cardColor="#E0F2FE" />
                </div>
                {/* Colored option bullet point */}
                <div className="mt-4 flex items-center justify-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#38BDF8] shrink-0"></span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#1E293B]">Azul</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM FULL-WIDTH NOTIFICATION BANNER MATCHING VISUAL ACCURATELY */}
        <div className="mt-10 bg-[#EDF3FF] border border-blue-100/70 p-4.5 rounded-[18px] flex items-center justify-center gap-3 text-left shadow-3xs max-w-lg md:max-w-2xl mx-auto" id="model-footer-banner">
          <div className="p-1 bg-blue-600 rounded-full text-white shrink-0 flex items-center justify-center shadow-3xs">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <p className="text-xs sm:text-[13px] text-blue-950 font-bold leading-tight">
            Todos os modelos acompanham o mesmo conteúdo educativo completo.
          </p>
        </div>

      </div>
    </section>
  );
}
