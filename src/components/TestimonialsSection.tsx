import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import toddlerBusImg from "../assets/images/falacards_toddler_bus_1779756456086.png";
import heroToyImg from "../assets/images/falacards_hero_toy_1779754025168.png";
import { 
  Star, Check, Users, ShieldCheck, Sparkles, ChevronLeft, ChevronRight, Play, Pause, Volume2 
} from "lucide-react";

interface Testimonial {
  id: string;
  parentName: string;
  location: string;
  childProfile: string;
  rating: number;
  highlight: string;
  text: string;
  avatarSeed: string;
  tags: string[];
  date: string;
  videoThumbnail: string;
  videoSource: string;
  aspectClass?: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "testimonial-1",
    parentName: "Bruna Alencar",
    location: "Curitiba - PR",
    childProfile: "Mãe da Clara (4 anos)",
    rating: 5,
    highlight: "“O melhor presente educativo”",
    text: "Minha filha Clara aprendeu mais de 30 palavras novas nas duas primeiras semanas. O mais legal é que o brinquedo não precisa de internet ou pilhas descartáveis, o tátil de encaixar os cartões dá uma sensação de autonomia total. Recomendo muito!",
    avatarSeed: "female-bruna",
    tags: ["Sem telas", "Autonomia", "Inglês"],
    date: "Há 4 dias",
    videoThumbnail: toddlerBusImg,
    videoSource: "https://play.tynk.ai/p/de8b505c-1bb5-47b8-8316-be97ce95bfda",
    aspectClass: "aspect-[9/16]"
  },
  {
    id: "testimonial-2",
    parentName: "Dra. Patrícia Lima",
    location: "Vitória - ES",
    childProfile: "Mãe da Laura (3 anos) e Pediatra",
    rating: 5,
    highlight: "“Indico em meu consultório”",
    text: "Como mãe e pediatra, vejo de perto o atraso de fala causado por telas. O FalaCards estimula a via auditivo-motora de forma perfeita. Minha filha Laura adora brincar e o bilinguismo acontece naturalmente. Design seguro e primoroso.",
    avatarSeed: "female-patricia",
    tags: ["Diversão", "Inglês"],
    date: "Há 1 semana",
    videoThumbnail: heroToyImg,
    videoSource: "https://play.tynk.ai/p/9193fc24-df91-4d3e-9aa7-ff9cfb4877d3",
    aspectClass: "aspect-[9/16]"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSectionInViewport, setIsSectionInViewport] = useState(false);
  const [hasWatchedFirst, setHasWatchedFirst] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionInViewport(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Auto unlock slide 2 after being in the viewport watching the first testimonial for 6 seconds
  useEffect(() => {
    if (currentIndex === 0 && isSectionInViewport) {
      const timer = setTimeout(() => {
        setHasWatchedFirst(true);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isSectionInViewport]);

  const handleNext = () => {
    if (currentIndex === 0 && !hasWatchedFirst) {
      setHasWatchedFirst(true);
      setCurrentIndex(1);
    } else {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const testimonial = TESTIMONIALS_DATA[currentIndex];
  const isVideoActive = isSectionInViewport;

  return (
    <section ref={sectionRef} className="relative w-full bg-slate-50/50 py-16 md:py-24 px-4 md:px-8 border-t border-gray-100" id="testimonials-section">
      
      {/* Visual decorative star background element */}
      <div className="absolute top-[10%] right-[10%] text-brand-yellow/20 select-none animate-pulse">
        <Sparkles className="w-14 h-14" />
      </div>

      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER & SCORE OVERVIEW */}
        <div className="text-center mb-10 md:mb-14 max-w-2xl mx-auto" id="testimonials-header">
          
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-2 leading-tight">
            Quem experimenta, se apaixona.
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2.5 max-w-lg mx-auto leading-relaxed">
            Mais de <span className="font-extrabold text-brand-blue">+2.500 famílias</span> brasileiras transformaram o aprendizado e reduziram telas em casa.
          </p>

          {/* Total score panel widgets */}
          <div className="mt-7 bg-white border border-gray-105 rounded-2xl p-4 md:p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 max-w-lg mx-auto" id="total-score-widget">
            <div className="flex items-center gap-3">
              <div className="flex flex-col text-left">
                <span className="text-3xl font-black text-gray-900 leading-none">4.9/5</span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">Média Excelente</span>
              </div>
              <div className="flex flex-col">
                <div className="flex text-brand-yellow">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current animate-pulse" />
                  ))}
                </div>
                <span className="text-[10px] text-gray-500 font-bold mt-1 text-left">Baseado em avaliações reais</span>
              </div>
            </div>

            <div className="w-px h-10 bg-gray-100 hidden sm:block font-sans"></div>

            <div className="flex items-center gap-2">
              <span className="p-2 bg-[#EBF3FF] text-brand-blue rounded-xl">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <div className="flex flex-col text-left leading-tight">
                <span className="font-bold text-xs text-gray-900">100% Verificado</span>
                <span className="text-[10px] text-gray-400 font-medium">Feedbacks reais auditados</span>
              </div>
            </div>
          </div>
        </div>

        {/* FEEDBACK CAROUSEL WRAPPER */}
        <div className="relative" id="testimonials-carousel-wrapper">
          
          <div className="max-w-4xl mx-auto" id="testimonial-single-display-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl border border-gray-150 shadow-[0_16px_40px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col md:flex-row min-h-[460px] relative"
                id={`card-${testimonial.id}`}
              >
                
                {/* VIDEO SIDE */}
                <div className="w-full md:w-[42%] bg-slate-950 flex flex-col justify-center items-center p-6 relative min-h-[400px] md:min-h-[auto]" id={`video-side-${testimonial.id}`}>
                  
                  {/* Decorative Video Tag */}
                  <span className="absolute top-4 left-4 z-10 bg-brand-blue/90 backdrop-blur-xs text-white font-black text-[9px] uppercase tracking-wider py-1 px-3 rounded-full shadow-xs">
                    Depoimento em Vídeo 🎥
                  </span>

                  <div className={`relative w-full max-w-[210px] rounded-2xl overflow-hidden bg-slate-900 shadow-2xl ${testimonial.aspectClass || 'aspect-[9/16]'}`} id={`video-block-${testimonial.id}`}>
                    {isVideoActive ? (
                      <div className="w-full h-full relative animate-fadeIn">
                        <iframe 
                          src={`${testimonial.videoSource}?autoplay=1&muted=1&mute=1&playsinline=1&loop=1&autoplay=true&muted=true&playsinline=true&loop=true`}
                          allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write"
                          allowFullScreen
                          className="w-full h-full border-0 absolute inset-0 rounded-2xl"
                          id={`video-player-${testimonial.id}`}
                        ></iframe>
                      </div>
                    ) : (
                      <div className="w-full h-full relative overflow-hidden">
                        <img 
                          src={testimonial.videoThumbnail} 
                          alt={`Carregando depoimento de ${testimonial.parentName}`} 
                          className="w-full h-full object-cover opacity-90"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* DETAILS AND TEXT CONTENT SIDE */}
                <div className="w-full md:w-[58%] p-6 sm:p-8 flex flex-col justify-between" id={`text-side-${testimonial.id}`}>
                  <div>
                    <div className="flex items-center justify-between mb-4 gap-2">
                      {/* Star rating */}
                      <div className="flex text-brand-yellow">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      
                      {/* Verification Badge */}
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-black text-brand-green uppercase tracking-wider bg-[#E8F5E9] border border-emerald-100 py-1 px-3 rounded-full">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        Verificado
                      </span>
                    </div>

                    {/* highlight title phrase */}
                    <h3 className="font-extrabold text-gray-950 text-xl sm:text-2xl mb-3.5 leading-snug font-sans">
                      {testimonial.highlight}
                    </h3>

                    {/* text body quotes */}
                    <div className="relative">
                      <span className="absolute -top-3.5 -left-3 text-4xl text-gray-100 select-none font-serif font-black">“</span>
                      <p className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed relative z-10 pl-3.5 font-medium">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      
                      {/* Author credentials */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand-blue-light border border-brand-blue/10 flex items-center justify-center font-extrabold text-brand-blue shrink-0 shadow-3xs">
                          <span className="text-xs select-none">
                            {testimonial.parentName.split(" ").map(n => n[0]).join("")}
                          </span>
                        </div>
                        
                        <div className="flex flex-col text-left leading-tight">
                          <span className="font-black text-sm text-gray-950">{testimonial.parentName}</span>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-1.5 text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">
                            <span>{testimonial.location}</span>
                            <span className="text-gray-300 hidden sm:inline">•</span>
                            <span className="text-brand-blue">{testimonial.childProfile}</span>
                          </div>
                        </div>
                      </div>

                      {/* LOCK / UNLOCK CONTROLS */}
                      {currentIndex === 0 && !hasWatchedFirst && (
                        <div className="shrink-0 flex flex-col items-start sm:items-end">
                          <button 
                            onClick={() => setHasWatchedFirst(true)}
                            className="bg-amber-100/90 hover:bg-amber-100 text-amber-900 border border-amber-200 hover:border-amber-300 transition-all text-[11px] font-black uppercase tracking-wider py-2 px-3.5 rounded-full flex items-center gap-1.5 shadow-3xs cursor-pointer active:scale-95 animate-pulse"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>
                            Liberar Depoimento 2 🔓
                          </button>
                        </div>
                      )}

                    </div>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Pagination Bottom Bar controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-4 border-t border-gray-150/50" id="carousel-action-bar">
            {/* Index summary or helpful guide */}
            <span className="text-xs text-gray-400 font-bold tracking-wider"></span>

            {/* Pagination Bullet Indicators */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => {
                const isLocked = idx === 1 && !hasWatchedFirst;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      if (isLocked) {
                        setHasWatchedFirst(true);
                        setCurrentIndex(idx);
                      } else {
                        setCurrentIndex(idx);
                      }
                    }}
                    className={`h-2.5 rounded-full transition-all cursor-pointer relative ${
                      currentIndex === idx 
                        ? "w-8 bg-brand-blue" 
                        : isLocked 
                          ? "w-2.5 bg-gray-200 border border-amber-200 text-amber-500"
                          : "w-2.5 bg-gray-200 hover:bg-gray-300"
                    }`}
                    aria-label={`Página do depoimento ${idx + 1}`}
                  >
                    {isLocked && (
                      <span className="absolute -top-1 -right-1 text-[8px]">🔒</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-2.5">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-gray-150 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-600 hover:text-gray-950 transition-colors shadow-xs cursor-pointer"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>
              <button 
                onClick={handleNext}
                className={`h-10 px-4 rounded-full border flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer font-black text-xs uppercase tracking-wider ${
                  currentIndex === 0 && !hasWatchedFirst 
                    ? "bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-200 shrink-0" 
                    : "bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-950 border-gray-150"
                }`}
                aria-label="Próximo"
              >
                {currentIndex === 0 && !hasWatchedFirst ? (
                  <>
                    <span>Liberar & Avançar</span>
                    <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                  </>
                ) : (
                  <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                )}
              </button>
            </div>
          </div>

        </div>

        {/* Real life social mentions and guarantees callout */}
        <div className="mt-11 max-w-3xl mx-auto bg-white border border-gray-150 rounded-2xl p-4 md:p-5.5 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col md:flex-row items-center justify-between gap-5" id="social-guarantees-banner">
          <div className="flex items-center gap-3.5 text-left w-full md:w-auto">
            <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl shrink-0 border border-emerald-100 flex items-center justify-center">
              <ShieldCheck className="w-7 h-7 stroke-[2.5]" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm md:text-base text-gray-900 leading-tight">Garantimos a total satisfação do seu pequeno</h4>
              <p className="text-[11px] sm:text-xs text-gray-500 mt-1 max-w-md leading-relaxed font-semibold">
                <strong>Garantia Incondicional de 7 dias</strong>. Se seu filho não se adaptar, devolvemos 100% do seu dinheiro sem qualquer complicação.
              </p>
            </div>
          </div>
          <div className="flex w-full md:w-auto shrink-0 justify-center">
            <a 
              href="#pricing-offer-section"
              className="bg-brand-blue hover:bg-brand-blue-dark active:scale-95 text-white font-extrabold text-[11px] px-5 py-3.5 rounded-xl shadow-xs transition-all text-center w-full md:w-auto tracking-widest uppercase"
            >
              GARANTIR FALA CARDS COM DESCONTO
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
