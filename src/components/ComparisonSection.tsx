import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function ComparisonSection() {
  return (
    <section 
      className="relative w-full bg-gradient-to-br from-[#EBF3FF] via-[#FFFDF9] to-[#FFF7D6] pt-16 pb-10 sm:pt-20 sm:pb-12 md:pt-28 md:pb-14 px-4 border-b border-blue-50/50 overflow-hidden" 
      id="comparison-section"
    >
      <div className="max-w-xl mx-auto">
        
        {/* ULTRA-COMPACT HEADER */}
        <div className="text-center mb-6 sm:mb-8" id="comparison-headings">
          <span className="inline-flex items-center gap-1 bg-[#0066FF]/10 text-[#0066FF] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mb-2" id="vs-badge">
            <Sparkles className="w-3 h-3 text-[#0066FF]" />
            Sem telas vs Telas
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight leading-none" id="vs-heading">
            Mais foco, zero telas.
          </h2>
        </div>

        {/* HIGH-CONTRAST DUAL COMPARATIVE COLORFUL CARDS (fits perfectly on mobile in one view!) */}
        <div className="grid grid-cols-2 gap-3.5 sm:gap-5" id="compact-vs-grid">
          
          {/* BAD SIDE: SCREENS */}
          <motion.div 
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-xs border-2 border-rose-100 rounded-2xl p-3.5 sm:p-5 flex flex-col justify-between shadow-xs relative overflow-hidden"
            id="bad-tablet-side"
          >
            {/* Rose accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-red-400"></div>
            
            <div>
              <div className="flex items-center gap-1.5 mb-3" id="bad-badge-row">
                <div className="w-6 h-6 rounded-lg bg-rose-50 flex items-center justify-center font-bold text-xs shrink-0">
                  📱
                </div>
                <span className="text-[10px] sm:text-xs font-black text-rose-600 uppercase tracking-wider leading-none">
                  Luz de Telas
                </span>
              </div>
              
              <ul className="space-y-2 text-left" id="bad-points-list">
                <li className="flex items-start gap-1 text-[10px] sm:text-xs text-slate-500 font-bold leading-tight">
                  <span className="text-rose-500 mt-0.5 font-bold shrink-0">✕</span>
                  <span>Estímulo passivo sem interatividade.</span>
                </li>
                <li className="flex items-start gap-1 text-[10px] sm:text-xs text-slate-500 font-bold leading-tight">
                  <span className="text-rose-500 mt-0.5 font-bold shrink-0">✕</span>
                  <span>Prejudica a visão e tira o sono.</span>
                </li>
                <li className="flex items-start gap-1 text-[10px] sm:text-xs text-slate-500 font-bold leading-tight">
                  <span className="text-rose-500 mt-0.5 font-bold shrink-0">✕</span>
                  <span>Gera dependência e irritabilidade.</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 pt-2.5 border-t border-rose-50 flex items-center justify-center" id="bad-status-bottom">
              <span className="text-[9px] font-extrabold text-rose-500 bg-rose-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Evitar hoje
              </span>
            </div>
          </motion.div>

          {/* GOOD SIDE: FALACARDS */}
          <motion.div 
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-xs border-2 border-emerald-100 rounded-2xl p-3.5 sm:p-5 flex flex-col justify-between shadow-sm relative overflow-hidden"
            id="good-falacards-side"
          >
            {/* Emerald neon green bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-400"></div>
            
            <div>
              <div className="flex items-center gap-1.5 mb-3" id="good-badge-row">
                <div className="w-6 h-6 rounded-lg bg-emerald-50 flex items-center justify-center font-bold text-xs shrink-0">
                  ⚡
                </div>
                <span className="text-[10px] sm:text-xs font-black text-emerald-600 uppercase tracking-wider leading-none">
                  FalaCards
                </span>
              </div>
              
              <ul className="space-y-2 text-left" id="good-points-list">
                <li className="flex items-start gap-1 text-[10px] sm:text-xs text-slate-900 font-extrabold leading-tight">
                  <span className="text-emerald-500 mt-0.5 font-bold shrink-0">✓</span>
                  <span>Estímulo ativo para falar de verdade!</span>
                </li>
                <li className="flex items-start gap-1 text-[10px] sm:text-xs text-slate-900 font-extrabold leading-tight">
                  <span className="text-emerald-500 mt-0.5 font-bold shrink-0">✓</span>
                  <span>100% seguro livre de luz azul.</span>
                </li>
                <li className="flex items-start gap-1 text-[10px] sm:text-xs text-slate-900 font-extrabold leading-tight">
                  <span className="text-emerald-500 mt-0.5 font-bold shrink-0">✓</span>
                  <span>Estimula o foco e acalma a mente.</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 pt-2.5 border-t border-emerald-50 flex items-center justify-center" id="good-status-bottom">
              <span className="text-[9px] font-extrabold text-white bg-emerald-500 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Aprovado
              </span>
            </div>
          </motion.div>

        </div>

        {/* MINI INSIGHT FOOTER PILL */}
        <div className="mt-5 text-center" id="compact-insight-bar">
          <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-[#735A00] bg-[#FFF2C2]/60 border border-amber-200/40 px-3.5 py-1 rounded-full shadow-2xs">
            🧠 Estimulação ativa foca a atenção e desenvolve a fala real.
          </span>
        </div>

      </div>
    </section>
  );
}
