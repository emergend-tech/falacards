import { Brain, Volume2, ShieldAlert, Truck } from "lucide-react";
import { motion } from "motion/react";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100 py-3 px-4 md:px-8" id="main-header">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2" id="header-logo-container">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="flex items-center"
          >
            <img 
              src="https://i.ibb.co/6JHQYWvm/Chat-GPT-Image-26-de-mai-de-2026-16-35-51.png" 
              alt="FalaCards Logo" 
              className="h-28 sm:h-36 md:h-44 w-auto object-contain max-w-full"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Benefits & Trust Badges - Hidden/Styled on Mobile */}
        <div className="hidden lg:flex items-center gap-8 text-sm text-gray-700" id="header-usp-desktop">
          <div className="flex items-center gap-2" id="usp-vocabulary">
            <div className="p-1.5 bg-purple-50 rounded-full text-purple-600">
              <Brain className="w-4 h-4" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-gray-900">Desenvolve o</span>
              <span className="text-xs text-gray-500">vocabulário</span>
            </div>
          </div>

          <div className="flex items-center gap-2" id="usp-interactive">
            <div className="p-1.5 bg-blue-50 rounded-full text-brand-blue">
              <Volume2 className="w-4 h-4 animate-pulse" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-gray-900">Aprendizado</span>
              <span className="text-xs text-gray-500">interativo</span>
            </div>
          </div>

          <div className="flex items-center gap-2" id="usp-notells">
            <div className="p-1.5 bg-green-50 rounded-full text-brand-green">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-gray-900">Sem telas e</span>
              <span className="text-xs text-gray-500">sem distrações</span>
            </div>
          </div>
        </div>

        {/* Free Shipping Highlight Badge */}
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:flex items-center gap-3 bg-brand-blue-light/70 border border-brand-blue-light rounded-2xl px-4 py-2 text-xs md:text-sm shadow-xs"
          id="header-shipping"
        >
          <div className="p-2 bg-brand-blue rounded-xl text-white">
            <Truck className="w-4 h-4" />
          </div>
          <div className="flex flex-col leading-tight">
            <p className="text-gray-700">
              <span className="font-bold text-brand-blue">Frete Grátis</span> para
            </p>
            <span className="font-semibold text-gray-500">todo o Brasil</span>
          </div>
        </motion.div>
      </div>

      {/* Mobile Benefits Bar - Hidden here as they are now under the hero video */}
      <div className="hidden mt-3 pt-2 border-t border-gray-50 overflow-x-auto scrollbar-none gap-5 justify-between px-1" id="header-usp-mobile">
        <div className="flex items-center gap-1.5 shrink-0 text-xs">
          <Brain className="w-4 h-4 text-purple-500" />
          <span className="font-medium text-gray-700">Foca no Vocabulário</span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0 text-xs">
          <Volume2 className="w-4 h-4 text-brand-blue animate-pulse" />
          <span className="font-medium text-gray-700">Som Interativo</span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0 text-xs">
          <ShieldAlert className="w-4 h-4 text-brand-green" />
          <span className="font-medium text-gray-700">Zero Telas</span>
        </div>
      </div>
    </header>
  );
}
