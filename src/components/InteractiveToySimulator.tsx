import { useState, useEffect } from "react";
import { Volume2, Play, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CardItem {
  id: string;
  word: string;
  translation: string;
  color: string;
  bgLight: string;
  borderColor: string;
  emoji: string;
  soundCue?: string;
}

const PREMIUM_CARDS: CardItem[] = [
  {
    id: "card-1",
    word: "Dog",
    translation: "Cachorro",
    color: "bg-amber-400 text-amber-950",
    bgLight: "bg-amber-50",
    borderColor: "border-amber-200",
    emoji: "🐶",
    soundCue: "Woof woof!"
  },
  {
    id: "card-2",
    word: "Panda",
    translation: "Panda",
    color: "bg-purple-400 text-purple-950",
    bgLight: "bg-purple-50",
    borderColor: "border-purple-200",
    emoji: "🐼",
    soundCue: "Hello panda!"
  },
  {
    id: "card-3",
    word: "Cat",
    translation: "Gato",
    color: "bg-orange-400 text-orange-950",
    bgLight: "bg-orange-50",
    borderColor: "border-orange-200",
    emoji: "🐱",
    soundCue: "Meow meow!"
  },
  {
    id: "card-4",
    word: "Apple",
    translation: "Maçã",
    color: "bg-rose-400 text-rose-950",
    bgLight: "bg-rose-50",
    borderColor: "border-rose-200",
    emoji: "🍎",
    soundCue: "Yummy!"
  },
  {
    id: "card-5",
    word: "Car",
    translation: "Carro",
    color: "bg-sky-400 text-sky-950",
    bgLight: "bg-sky-50",
    borderColor: "border-sky-200",
    emoji: "🚗",
    soundCue: "Beep beep!"
  }
];

export default function InteractiveToySimulator({ heroImage }: { heroImage: string }) {
  const [selectedCard, setSelectedCard] = useState<CardItem>(PREMIUM_CARDS[0]);
  const [isInserting, setIsInserting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasSpeechSupport, setHasSpeechSupport] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      setHasSpeechSupport(true);
    }
  }, []);

  const handlePlaySound = (card: CardItem) => {
    if (isInserting) return;
    
    setSelectedCard(card);
    setIsInserting(true);
    setIsPlaying(true);

    // Simulate insertion delay
    setTimeout(() => {
      setIsInserting(false);
      
      // Real Speech Synthesis for genuine premium functionality!
      if (typeof window !== "undefined" && window.speechSynthesis) {
        // Cancel first
        window.speechSynthesis.cancel();
        
        // 1. Pronounce Portuguese word first
        const utterancePt = new SpeechSynthesisUtterance(card.translation);
        utterancePt.lang = "pt-BR";
        utterancePt.rate = 0.95;
        
        // 2. Pronounce English word second
        const utteranceEn = new SpeechSynthesisUtterance(card.word);
        utteranceEn.lang = "en-US";
        utteranceEn.rate = 0.82; // slightly slower for educational clear speaking
        
        // Chain them!
        utterancePt.onend = () => {
          // Play English voice right after
          window.speechSynthesis.speak(utteranceEn);
        };
        
        utteranceEn.onend = () => {
          setIsPlaying(false);
        };
        
        window.speechSynthesis.speak(utterancePt);
      } else {
        // Fallback delay
        setTimeout(() => setIsPlaying(false), 2000);
      }
    }, 600);
  };

  return (
    <div className="relative w-full flex flex-col items-center" id="interactive-simulator-root">
      {/* Visual Header */}
      <div className="text-center mb-6 max-w-sm px-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-blue-light text-brand-blue animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          Demonstração Interativa
        </span>
        <p className="text-sm text-gray-500 mt-1">
          Toque no cartão para ouvir: repete <span className="font-extrabold text-[#0B132B]">Português</span> e em seguida em <span className="font-extrabold text-brand-blue">Inglês</span>!
        </p>
      </div>

      {/* Interactive Frame Box */}
      <div className="relative w-full max-w-[480px] bg-white rounded-3xl p-4 md:p-6 border border-gray-100 shadow-xl" id="simulator-interactive-box">
        
        {/* Main Display: Shows the child and toy combined, overlaid with a dynamic cards interaction zone */}
        <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50/50 to-amber-50/20 border border-gray-50 flex items-center justify-center">
          
          {/* Hero Child Image BackDrop */}
          <img 
            src={heroImage} 
            alt="Garotinho brincando com FalaCards" 
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            referrerPolicy="no-referrer"
            id="hero-toy-base-image"
          />

          {/* Mask / Overlay to integrate simulated card */}
          <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>

          {/* Overlay Dialogue Bubble 1: Pronúncia clara e real (As in image references) */}
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute left-4 top-[15%] max-w-[130px] md:max-w-[150px] bg-brand-blue text-white px-3 py-2 rounded-2xl rounded-bl-none shadow-md text-xs font-semibold flex items-center gap-1.5"
            id="bubble-pronunciation"
          >
            <div className="p-1 bg-white/20 rounded-full shrink-0">
              <Volume2 className="w-3.5 h-3.5 text-white" />
            </div>
            <p className="leading-tight text-[10px] md:text-xs">Pronúncia clara e real</p>
          </motion.div>

          {/* Overlay Dialogue Bubble 2: Hello! Dynamic active card name (Playful call out bubble) */}
          <AnimatePresence mode="wait">
            {isPlaying && (
              <motion.div
                initial={{ scale: 0.6, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.6, opacity: 0, y: 10 }}
                className="absolute right-4 top-[25%] bg-brand-green text-white px-3.5 py-2 rounded-2xl rounded-br-none shadow-lg text-xs font-bold flex flex-col items-center"
                id="bubble-speech-alert"
              >
                <span className="text-[10px] font-medium opacity-90">Bilingue: PT ➔ EN</span>
                <span className="text-xs md:text-sm tracking-wide uppercase">{selectedCard.translation} ➔ {selectedCard.word}!</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Electronic Screen Glowing Wave Widget in front */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-xs px-4 py-2 rounded-2xl border border-gray-100 shadow-md flex items-center gap-3">
            <span className="text-2xl">{selectedCard.emoji}</span>
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Cartão Lido</span>
              <span className="text-sm font-bold text-gray-900 leading-none">{selectedCard.word} <span className="text-xs font-medium text-gray-500">({selectedCard.translation})</span></span>
            </div>
            <button 
              onClick={() => handlePlaySound(selectedCard)}
              className="p-1.5 bg-brand-blue hover:bg-brand-blue-dark text-white rounded-lg transition-colors cursor-pointer"
              title="Escutar fala novamente"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
            </button>
          </div>

          {/* Simulated Card Insertion Sliding Animation Overlay */}
          <AnimatePresence>
            {isInserting && (
              <motion.div
                initial={{ y: -100, opacity: 0, scale: 0.8 }}
                animate={{ y: -10, opacity: 1, scale: 1 }}
                exit={{ y: 20, opacity: 0 }}
                className={`absolute top-[40%] text-center p-3 rounded-xl border ${selectedCard.color} ${selectedCard.borderColor} shadow-lg w-28`}
                id="inserted-card-animation"
              >
                <div className="text-3xl mb-1">{selectedCard.emoji}</div>
                <div className="font-bold text-sm tracking-wide">{selectedCard.word}</div>
                <div className="text-[9px] opacity-80 uppercase font-semibold">Aprendendo</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Card Deck Selector Grid */}
        <div className="mt-5">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-3">
            Selecione um cartão de idiomas
          </p>
          <div className="grid grid-cols-5 gap-2" id="deck-cards-selector">
            {PREMIUM_CARDS.map((card) => {
              const works = card.id === selectedCard.id;
              return (
                <button
                  key={card.id}
                  onClick={() => handlePlaySound(card)}
                  className={`relative group flex flex-col items-center justify-center py-2.5 rounded-xl border-2 transition-all cursor-pointer ${
                    works 
                      ? "border-brand-blue bg-blue-50/50 scale-105 shadow-sm" 
                      : "border-gray-100 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                  id={`btn-${card.id}`}
                >
                  <span className="text-xl md:text-2xl transition-transform group-hover:scale-110 duration-200">
                    {card.emoji}
                  </span>
                  <span className="text-[10px] md:text-xs font-bold text-gray-700 mt-1">
                    {card.word}
                  </span>
                  
                  {works && (
                    <motion.span 
                      layoutId="active-indicator" 
                      className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-blue rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Como Funciona Steps */}
        <div className="mt-6 pt-5 border-t border-gray-100" id="simulator-how-it-works-steps">
          <h4 className="text-xs font-black text-brand-blue uppercase tracking-widest text-center mb-4">
            Como Funciona o FalaCards
          </h4>
          <div className="grid grid-cols-2 gap-2 text-left" id="steps-2x2-grid">
            {/* Step 1 */}
            <div className="bg-[#FCFCFA] p-2.5 rounded-xl border border-gray-100 flex items-start gap-2">
              <span className="w-5 h-5 rounded-md bg-[#EBF3FF] font-black text-[10px] text-brand-blue flex items-center justify-center shrink-0 mt-0.5">1</span>
              <div>
                <h5 className="font-extrabold text-[11px] text-gray-900 leading-tight">Escolha e Insira</h5>
                <p className="text-[9px] text-gray-400 font-bold leading-tight mt-0.5">A criança insere o cartão no brinquedo.</p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="bg-[#FCFCFA] p-2.5 rounded-xl border border-gray-100 flex items-start gap-2">
              <span className="w-5 h-5 rounded-md bg-[#EBF3FF] font-black text-[10px] text-brand-blue flex items-center justify-center shrink-0 mt-0.5">2</span>
              <div>
                <h5 className="font-extrabold text-[11px] text-gray-900 leading-tight">Português Primeiro</h5>
                <p className="text-[9px] text-gray-400 font-bold leading-tight mt-0.5">O FalaCards fala a palavra em português.</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="bg-[#FCFCFA] p-2.5 rounded-xl border border-gray-100 flex items-start gap-2">
              <span className="w-5 h-5 rounded-md bg-[#EBF3FF] font-black text-[10px] text-brand-blue flex items-center justify-center shrink-0 mt-0.5">3</span>
              <div>
                <h5 className="font-extrabold text-[11px] text-gray-900 leading-tight">Depois em Inglês</h5>
                <p className="text-[9px] text-gray-400 font-bold leading-tight mt-0.5">Em seguida, reproduz o som em inglês.</p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="bg-[#FCFCFA] p-2.5 rounded-xl border border-gray-100 flex items-start gap-2">
              <span className="w-5 h-5 rounded-md bg-[#EBF3FF] font-black text-[10px] text-brand-blue flex items-center justify-center shrink-0 mt-0.5">4</span>
              <div>
                <h5 className="font-extrabold text-[11px] text-gray-900 leading-tight">Associação Bilingue</h5>
                <p className="text-[9px] text-gray-400 font-bold leading-tight mt-0.5">A criança associa e aprende de forma natural.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
