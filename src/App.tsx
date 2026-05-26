/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import ComparisonSection from "./components/ComparisonSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CategoriesAndBenefits from "./components/CategoriesAndBenefits";
import ProductQuality from "./components/ProductQuality";
import PricingSection from "./components/PricingSection";
import ModelSelectionSection from "./components/ModelSelectionSection";
import FaqSection from "./components/FaqSection";
import { Sparkles } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFDF9] font-sans text-gray-900 selection:bg-brand-yellow selection:text-gray-950 flex flex-col" id="landing-page-container">
      {/* Dynamic Urgent Promo Bar */}
      <div className="w-full bg-brand-blue text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest py-2.5 px-4 text-center flex items-center justify-center gap-2 relative z-50 shadow-xs" id="top-promo-bar">
        <Sparkles className="w-3.5 h-3.5 text-brand-yellow animate-pulse shrink-0" />
        <span>PROMOÇÃO RELÂMPAGO, SOMENTE HOJE R$ 129,90 + FRETE GRÁTIS</span>
      </div>

      {/* Main Brand Header Navigation */}
      <Header />

      {/* Sections Container */}
      <main className="flex-grow" id="main-content-area">
        <Hero />
        <ComparisonSection />
        <TestimonialsSection />
        <CategoriesAndBenefits />
        <ProductQuality />
        <PricingSection />
        <ModelSelectionSection />
        <FaqSection />
      </main>

      {/* Mini Interactive Footer/Hint for section development completion */}
      <footer className="w-full bg-brand-blue py-6 px-4 text-center relative z-20" id="section-one-footer">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-white/85 text-xs font-medium">
          <p id="footer-logo-text">
            © {new Date().getFullYear()} FalaCards. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 items-center" id="footer-links">
            <span className="text-[11px] text-white/50 font-bold flex items-center gap-1">
              🔐 Compra 100% Segura e Garantida
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

