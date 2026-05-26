import { motion } from "motion/react";
import { 
  Sparkles, Star, Brain, Volume2, Mic, BookOpen, Globe, Lightbulb, 
  Smile, Heart, Eye, HelpCircle, ArrowRight, ShieldCheck, Check
} from "lucide-react";

interface CategoryCard {
  title: string;
  emoji: string;
  wordSample: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
}

const CATEGORIES_DATA: CategoryCard[] = [
  {
    title: "Animais",
    emoji: "🐶", // Dog
    wordSample: "Dog",
    bgColor: "bg-blue-50/70 hover:bg-blue-100/60",
    borderColor: "border-blue-100",
    textColor: "text-blue-700"
  },
  {
    title: "Frutas",
    emoji: "🍎", // Apple
    wordSample: "Apple",
    bgColor: "bg-rose-50/70 hover:bg-rose-100/60",
    borderColor: "border-rose-100",
    textColor: "text-rose-750"
  },
  {
    title: "Vegetais",
    emoji: "🥦", // Broccoli
    wordSample: "Broccoli",
    bgColor: "bg-green-50/70 hover:bg-green-100/60",
    borderColor: "border-green-100",
    textColor: "text-green-700"
  },
  {
    title: "Transportes",
    emoji: "🚗", // Car
    wordSample: "Car",
    bgColor: "bg-amber-50/70 hover:bg-amber-100/60",
    borderColor: "border-amber-100",
    textColor: "text-amber-700"
  },
  {
    title: "Cores",
    emoji: "🎨", // Paint Palette
    wordSample: "Yellow",
    bgColor: "bg-purple-50/70 hover:bg-purple-100/60",
    borderColor: "border-purple-100",
    textColor: "text-purple-700"
  },
  {
    title: "Formas",
    emoji: "⭐", // Star
    wordSample: "Star",
    bgColor: "bg-teal-50/70 hover:bg-teal-100/60",
    borderColor: "border-teal-100",
    textColor: "text-teal-700"
  },
  {
    title: "Profissões",
    emoji: "🧑‍🍳", // Chef
    wordSample: "Chef",
    bgColor: "bg-orange-50/70 hover:bg-orange-100/60",
    borderColor: "border-orange-100",
    textColor: "text-orange-700"
  },
  {
    title: "Natureza",
    emoji: "🌳", // Tree
    wordSample: "Tree",
    bgColor: "bg-emerald-50/70 hover:bg-emerald-100/60",
    borderColor: "border-emerald-100",
    textColor: "text-emerald-700"
  },
  {
    title: "Fantasias",
    emoji: "👸", // Princess
    wordSample: "Princess",
    bgColor: "bg-pink-50/70 hover:bg-pink-100/60",
    borderColor: "border-pink-100",
    textColor: "text-pink-700"
  },
  {
    title: "Alimentos",
    emoji: "🍔", // Burger
    wordSample: "Burger",
    bgColor: "bg-sky-50/70 hover:bg-sky-100/60",
    borderColor: "border-sky-100",
    textColor: "text-sky-700"
  },
  {
    title: "Dia a dia",
    emoji: "🪥", // Toothbrush
    wordSample: "Toothbrush",
    bgColor: "bg-lime-50/70 hover:bg-lime-100/60",
    borderColor: "border-lime-100",
    textColor: "text-lime-750"
  },
  {
    title: "Pessoas",
    emoji: "👪", // Family
    wordSample: "Family",
    bgColor: "bg-violet-50/70 hover:bg-violet-100/60",
    borderColor: "border-violet-100",
    textColor: "text-violet-750"
  }
];

const GROW_BENEFITS = [
  {
    icon: Brain,
    title: "Associação natural",
    desc: "Associação imediata entre a palavra em português e em inglês.",
    color: "bg-rose-50 text-rose-500"
  },
  {
    icon: Volume2,
    title: "Reconhecimento auditivo",
    desc: "A criança identifica a palavra no idioma nativo e de imediato a fonética em inglês.",
    color: "bg-amber-50 text-amber-500"
  },
  {
    icon: Mic,
    title: "Estimula a fala",
    desc: "Incentiva a pronúncia clara de ambos os idiomas consecutivamente.",
    color: "bg-blue-50 text-brand-blue"
  },
  {
    icon: BookOpen,
    title: "Vocabulário prático",
    desc: "Mais de 510 termos usuais associados de maneira bilingue.",
    color: "bg-green-50 text-brand-green"
  },
  {
    icon: Globe,
    title: "Inglês desde cedo",
    desc: "Introduz a segunda língua naturalmente sem esforço ou bloqueios.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: Lightbulb,
    title: "Bilinguismo intuitivo",
    desc: "Associação visual e sonora inspirada no método ativo de aprendizado.",
    color: "bg-yellow-50 text-amber-600"
  }
];

export default function CategoriesAndBenefits() {
  const toddlerBusImg = "/src/assets/images/falacards_toddler_bus_1779756456086.png";

  return (
    <section className="relative w-full bg-white py-16 md:py-24 px-4 md:px-8 border-t border-gray-100 overflow-hidden" id="categories-benefits-section">
      
      {/* Absolute Decorative elements */}
      <div className="absolute top-[5%] left-[8%] text-brand-yellow/20 select-none animate-pulse">
        <Sparkles className="w-16 h-16" />
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* HEADER AREA */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto" id="categories-section-header">
          {/* Badge */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-[#FFF0BD] text-amber-950 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-5 border border-amber-200"
          >
            <Star className="w-3.5 h-3.5 fill-current text-amber-700" />
            Aprendizado que fica
          </motion.div>

          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Mais de <span className="text-brand-blue">510 palavras</span> para <span className="text-brand-blue">aprender brincando</span>.
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed max-w-xl mx-auto font-semibold">
            Com mais de 12 categorias educativas, o aprendizado acontece por meio da associação bilíngue natural. O brinquedo fala primeiro a palavra em português e depois a pronúncia correta em inglês de forma leve e divertida.
          </p>

          {/* Visual USP block highlight */}
          <div className="mt-8 bg-brand-blue-light/50 border border-brand-blue-light/80 rounded-3xl p-4 md:p-6 max-w-xl mx-auto flex items-center gap-4 text-left" id="categories-count-badge">
            <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-md p-1 shrink-0 relative">
              <span>12+</span>
              <span className="absolute -top-1 -right-1 text-xs">⭐</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm md:text-base text-gray-900 leading-tight">12+ categorias para explorar</span>
              <span className="text-xs text-gray-500 mt-0.5 leading-snug font-medium">Uma variedade incrível que mantém a criança curiosa e sempre aprendendo ativamente.</span>
            </div>
          </div>
        </div>

        {/* 12 CATEGORIES GRID CONTAINER */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5" id="categories-cards-grid">
          {CATEGORIES_DATA.map((cat, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`relative border border-gray-150 rounded-2xl p-4 flex flex-col items-center text-center transition-all shadow-xs cursor-pointer select-none group ${cat.bgColor}`}
                id={`category-item-${index}`}
              >
                {/* Floating Micro Tag */}
                <span className="text-3xl sm:text-4xl group-hover:scale-115 transition-transform duration-300">
                  {cat.emoji}
                </span>
                
                <h4 className="font-extrabold text-gray-900 text-sm mt-3 leading-tight font-sans">
                  {cat.title}
                </h4>
                
                {/* Visual sub hint simulating a cards text */}
                <div className="mt-1 px-2.5 py-0.5 bg-white/90 border border-gray-100 rounded-full text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                  {cat.wordSample}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Categories grid subtext hint */}
        <div className="mt-8 text-center max-w-md mx-auto" id="categories-footer-pill">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-gray-100 rounded-full text-xs font-semibold text-gray-600">
            <Star className="w-3.5 h-3.5 fill-current text-brand-yellow shrink-0" />
            <span>E muito mais! São mais de 510 palavras para tornar cada descoberta uma nova conquista.</span>
          </div>
        </div>


        {/* BOTTOM HIGHLIGHT BANNER */}
        <div className="mt-16 md:mt-24" id="growth-bottom-banners">
          {/* BANNER 1: Ideal para +2 anos */}
          <div className="bg-amber-50/50 border border-amber-200/40 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative" id="ideal-banner">
            <div className="flex items-start gap-4 text-left max-w-xl">
              <div className="p-3 bg-brand-yellow text-gray-950 rounded-2xl shrink-0 mt-1">
                <Check className="w-6 h-6 font-black" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 leading-snug">
                  Ideal para crianças a partir de 2 anos.
                </h3>
                <p className="text-xs sm:text-sm text-gray-650 mt-1.5 leading-relaxed font-semibold">
                  Uma experiência educativa interativa que prende a atenção sem excesso de estímulos. Perfeito para a janela de desenvolvimento de linguagem mais ativa.
                </p>
              </div>
            </div>

            {/* Simulated cute picture on the right side */}
            <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-2xl overflow-hidden border border-amber-100/85 shadow-md bg-white rotate-1 hover:rotate-0 transition-transform duration-300">
              <img 
                src={toddlerBusImg} 
                alt="Crianca feliz de 2 anos com FalaCards de transporte"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                id="toddler-bus-avatar"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Decorative Brand Bottom Banner text */}
      <div className="w-full bg-brand-blue text-white font-extrabold text-[10px] md:text-xs tracking-widest uppercase py-3.5 mt-16 md:mt-24 text-center flex items-center justify-center gap-3 relative z-10" id="bottom-education-banner">
        <span className="animate-pulse">✨</span>
        <span>Diversão que educa. Aprendizado que fica. Memórias que encantam.</span>
        <span className="animate-pulse">✨</span>
      </div>

    </section>
  );
}
