import React from "react";
import { Sparkles, BookOpen, Volume2, Gamepad2, Compass } from "lucide-react";
import { motion } from "motion/react";

export default function InteractiveToySimulator({ heroImage }: { heroImage: string }) {
  const steps = [
    {
      id: "step-1",
      num: "1",
      title: "Escolha e Insira",
      description: "A criança escolhe um dos 112 cartões bilíngues frente e verso e o insere de forma totalmente autônoma no leitor FalaCards.",
      icon: BookOpen,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50/70"
    },
    {
      id: "step-2",
      num: "2",
      title: "Associação Familiar",
      description: "O leitor detecta instantaneamente o cartão e pronuncia a palavra primeiro em português com áudio profissional e super amigável.",
      icon: Compass,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50/70"
    },
    {
      id: "step-3",
      num: "3",
      title: "Pronúncia em Inglês",
      description: "Logo em seguida, o FalaCards repete o termo correspondente em inglês de forma limpa e clara, criando a conexão bilíngue ideal.",
      icon: Volume2,
      iconColor: "text-emerald-500",
      bgColor: "bg-emerald-50/70"
    },
    {
      id: "step-4",
      num: "4",
      title: "Aprendizado Lúdico",
      description: "A criança pode repetir o som apertando um só botão ou inserir novos cartões. Sem cabos de internet, pilhas complexas ou luzes de telas nocivas.",
      icon: Gamepad2,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-50/70"
    }
  ];

  return (
    <div className="w-full flex flex-col items-center" id="how-it-works-root">
      
      {/* Container Box */}
      <div className="w-full max-w-[480px] bg-white rounded-3xl p-6 md:p-8 border border-gray-150/60 shadow-lg hover:shadow-xl transition-shadow duration-350" id="how-it-works-box">
        
        {/* Playful Category Tag */}
        <div className="flex items-center gap-1.5 mb-5" id="how-it-works-badge-container">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-brand-blue-light text-brand-blue uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Método de Aprendizado
          </span>
        </div>

        {/* Dynamic Static Title */}
        <h3 className="text-2xl font-black text-gray-950 tracking-tight leading-tight mb-2" id="how-it-works-title">
          Como Funciona o <br />
          <span className="text-brand-blue">Leitor FalaCards?</span>
        </h3>
        
        <p className="text-xs text-gray-500 font-bold mb-6 leading-relaxed" id="how-it-works-sub">
          Desenvolvido por pedagogos para ser o companheiro perfeito de estudo e diversão bilíngue diária para crianças de 2 a 6 anos.
        </p>

        {/* Clean Static Hero Image to keep child visual reference */}
        <div className="relative rounded-2xl overflow-hidden mb-6 aspect-video border border-gray-100 shadow-3xs" id="how-it-works-visual-media">
          <img 
            src={heroImage} 
            alt="Desenvolvimento Bilíngue Infantil com FalaCards" 
            className="w-full h-full object-cover select-none pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-[10px] text-gray-900 font-black px-2.5 py-1 rounded-lg border border-gray-100 shadow-3xs flex items-center gap-1">
            🧒 100% Seguro e Livre de Telas
          </span>
        </div>

        {/* Step-by-Step Infographic Container */}
        <div className="space-y-5" id="how-it-works-steps-flow">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex gap-4 p-3 bg-gray-50/50 hover:bg-gray-50 rounded-2xl border border-gray-100/70 transition-colors"
                id={`how-step-${step.num}`}
              >
                {/* Visual Number Badge */}
                <div className={`w-10 h-10 shrink-0 ${step.bgColor} rounded-xl flex items-center justify-center relative shadow-3xs`} id={`how-step-icon-hold-${step.num}`}>
                  <IconComponent className={`w-5 h-5 ${step.iconColor}`} />
                  <span className="absolute -top-1.5 -right-1.5 bg-brand-blue text-white font-black text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center border border-white shadow-3xs">
                    {step.num}
                  </span>
                </div>

                {/* Step text detail */}
                <div className="text-left flex-grow">
                  <h4 className="font-extrabold text-[13px] sm:text-sm text-gray-950 flex items-center gap-1.5">
                    {step.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-500 font-medium leading-relaxed mt-1">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
