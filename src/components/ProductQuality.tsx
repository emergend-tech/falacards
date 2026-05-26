import { motion } from "motion/react";
import { Shield, ShieldCheck, Heart } from "lucide-react";

// Cute Custom SVGs to perfectly match the reference photo styles!
const ChildFaceIcon = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Ears */}
    <path d="M22 52c-4 0-7-4-7-8s3-8 7-8" />
    <path d="M78 52c4 0 7-4 7-8s-3-8-7-8" />
    {/* Head Outline */}
    <path d="M26 44c0-13.25 10.75-24 24-24s24 10.75 24 24c0 14 0 14-24 26-24-12-24-12-24-26z" />
    {/* Tuft of hair on top */}
    <path d="M50 20c-1.5-4-5-6-8-6 0 0 2 6 5 6" />
    <path d="M50 20c1.5-4 5-6 8-6 0 0-2 6-5 6" />
    {/* Cheek circles / curves */}
    <path d="M30 52c1 0 2.5 1 2.5 2.5" />
    <path d="M70 52c-1 0-2.5 1-2.5 2.5" />
    {/* Eyes */}
    <circle cx="41" cy="45" r="2.5" fill="currentColor" />
    <circle cx="59" cy="45" r="2.5" fill="currentColor" />
    {/* Big Cheeky Smile */}
    <path d="M41 53c2.5 4 15.5 4 18 0" strokeWidth="3" />
  </svg>
);

const WaterDropsIcon = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Big center droplet */}
    <path d="M50 24c13.25 15.2 16 23.3 16 29.5a16 16 0 1 1-32 0C34 47.3 36.75 39.2 50 24z" strokeWidth="2.8" />
    {/* Small left drop */}
    <path d="M30 55c3.3 3.8 4 5.8 4 7.3a4 4 0 0 1-8 0c0-1.5 0.7-3.5 4-7.3z" strokeWidth="2" />
    {/* Small right drop */}
    <path d="M70 45c3.3 3.8 4 5.8 4 7.3a4 4 0 0 1-8 0c0-1.5 0.7-3.5 4-7.3z" strokeWidth="2" />
  </svg>
);

const WipeCleaningIcon = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Shining sparkles */}
    <path d="M26 26l3 3m-3 0l3-3M74 24l3 3m-3 0l3-3" strokeWidth="2" />
    <path d="M72 32h5M74.5 29.5v5" strokeWidth="2" />
    {/* Swipe cloth behind */}
    <path d="M38 32h28c4 0 7 3 7 7v22c0 4-3 7-7 7H38c-4 0-7-3-7-7V39c0-4 3-7 7-7z" fill="none" strokeDasharray="3 3" />
    {/* Hand cleaning */}
    <path d="M43 45c.5-2.5 2.5-4 5-4s4.5 1.5 5 4" />
    <path d="M48 45c.5-2.5 2.5-4 5-4s4.5 1.5 5 4" />
    <path d="M53 45c.5-2.5 2.5-4 5-4s4.5 1.5 5 4" strokeWidth="3" />
    {/* Palm and fingers outline dragging */}
    <path d="M35 55c3-1 6-2 9-2h20c4.5 0 6 3.5 4 6L54 71c-3 3-7 4-11 4H33c-3 0-5.5-2-5.5-5s2.5-7 5.5-7c1 0 1.5-.5 2-8z" />
  </svg>
);

const ResistantMaterialIcon = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Shield */}
    <path d="M50 18c14-2.5 22 2.5 22 17 0 17-6 29-22 37-16-8-22-20-22-37 0-14.5 8-19.5 22-17z" strokeWidth="2.8" />
    {/* Checkmark inside */}
    <path d="M38 48l8 8 16-16" strokeWidth="3.5" />
  </svg>
);

export default function ProductQuality() {
  return (
    <section className="relative w-full bg-slate-50/40 py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-8 border-t border-gray-100" id="product-quality-section">
      <div className="max-w-6xl mx-auto">
        
        {/* CENTERED QUALITY BADGE AND TITLE */}
        <div className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto" id="quality-section-headings">
          
          {/* Badge */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#EBF3FF] border border-blue-100/50 text-[#0c1a40] px-4 py-2 rounded-full text-[10px] sm:text-xs font-black tracking-widest uppercase mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            Qualidade que você confia
          </motion.div>
 
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B132B] mt-1 mb-2 tracking-tight leading-tight">
            Feito para durar.
          </h2>
 
          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed max-w-md mx-auto">
            Cada detalhe foi pensado para garantir segurança, durabilidade e praticidade no dia a dia.
          </p>
        </div>
 
        {/* 4 CARDS GRID (EXACT LAYOUT TO PHOTO, COMPACT SQUARE 2x2 ON MOBILE, 4 ON lg) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 justify-center" id="quality-grid-cards">
          
          {/* CARD 1: Seguro para crianças */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col items-center justify-between hover:shadow-[0_8px_30px_rgba(13,27,42,0.04)] transition-all aspect-square"
            id="quality-card-1"
          >
            <div className="flex flex-col items-center justify-center flex-1">
              {/* Soft Blue Circle Background */}
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#EBF3FF] flex items-center justify-center mb-3 sm:mb-4">
                <ChildFaceIcon />
              </div>
              
              {/* Title */}
              <h4 className="font-extrabold text-[#0B132B] text-xs sm:text-sm md:text-base leading-tight">
                Seguro
              </h4>
              
              {/* Small blue separator line */}
              <div className="w-6 h-[2px] bg-blue-500 rounded-full my-2 sm:my-3"></div>
   
              {/* Description Paragraph */}
              <p className="text-[10px] sm:text-xs text-gray-500 leading-tight font-semibold">
                Cantos arredondados e confortáveis.
              </p>
            </div>
          </motion.div>
 
          {/* CARD 2: À prova d’água */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col items-center justify-between hover:shadow-[0_8px_30px_rgba(13,27,42,0.04)] transition-all aspect-square"
            id="quality-card-2"
          >
            <div className="flex flex-col items-center justify-center flex-1">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#EBF3FF] flex items-center justify-center mb-3 sm:mb-4">
                <WaterDropsIcon />
              </div>
              
              <h4 className="font-extrabold text-[#0B132B] text-xs sm:text-sm md:text-base leading-tight">
                Imperméavel
              </h4>
              
              <div className="w-6 h-[2px] bg-blue-500 rounded-full my-2 sm:my-3"></div>
   
              <p className="text-[10px] sm:text-xs text-gray-500 leading-tight font-semibold">
                Protege e aumenta a vida útil do cartão.
              </p>
            </div>
          </motion.div>
 
          {/* CARD 3: Fácil de limpar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col items-center justify-between hover:shadow-[0_8px_30px_rgba(13,27,42,0.04)] transition-all aspect-square"
            id="quality-card-3"
          >
            <div className="flex flex-col items-center justify-center flex-1">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#EBF3FF] flex items-center justify-center mb-3 sm:mb-4">
                <WipeCleaningIcon />
              </div>
              
              <h4 className="font-extrabold text-[#0B132B] text-xs sm:text-sm md:text-base leading-tight">
                Fácil de Limpar
              </h4>
              
              <div className="w-6 h-[2px] bg-blue-500 rounded-full my-2 sm:my-3"></div>
   
              <p className="text-[10px] sm:text-xs text-gray-500 leading-tight font-semibold">
                Basta um pano úmido para limpar o cartão.
              </p>
            </div>
          </motion.div>
 
          {/* CARD 4: Material resistente */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col items-center justify-between hover:shadow-[0_8px_30px_rgba(13,27,42,0.04)] transition-all aspect-square"
            id="quality-card-4"
          >
            <div className="flex flex-col items-center justify-center flex-1">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#EBF3FF] flex items-center justify-center mb-3 sm:mb-4">
                <ResistantMaterialIcon />
              </div>
              
              <h4 className="font-extrabold text-[#0B132B] text-xs sm:text-sm md:text-base leading-tight">
                Resistente
              </h4>
              
              <div className="w-6 h-[2px] bg-blue-500 rounded-full my-2 sm:my-3"></div>
   
              <p className="text-[10px] sm:text-xs text-gray-500 leading-tight font-semibold">
                Feito para acompanhar a rotina infantil.
              </p>
            </div>
          </motion.div>
 
        </div>
 
        {/* BOTTOM PILL BAR (EXACT PATTERN IN THE BLUE PILL BAR IN THE SUBMITTED PICTURE) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#EBF3FF] border border-blue-100/40 rounded-2xl py-3 px-5 mt-10 flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-4xl mx-auto"
          id="quality-bottom-status-pill"
        >
          <Heart className="w-4 h-4 text-blue-600 shrink-0 fill-current" />
          <span className="text-[11px] sm:text-xs text-[#0C1A42] font-extrabold tracking-tight text-center sm:text-left leading-tight">
            Mais segurança, mais qualidade, mais tranquilidade para você e mais aprendizado para seu filho.
          </span>
        </motion.div>
 
      </div>
    </section>
  );
}
