"use client";

import React, { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { SITE_CONFIG } from "@/config/site";
import { Shield, ArrowUp, Terminal } from "lucide-react";
import { tactileAudio } from "@/utils/audio";

export function Footer() {
  const { isEs } = useLanguage();
  const [easterEggActive, setEasterEggActive] = useState(false);

  const scrollToTop = () => {
    tactileAudio.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const triggerEasterEgg = () => {
    tactileAudio.playTactileChime();
    setEasterEggActive(!easterEggActive);
  };

  return (
    <footer className="relative w-full bg-[#0A0E17] border-t border-white/10 pt-20 pb-12 px-6 sm:px-12 lg:px-20 text-[#94A3B8]">
      <div className="max-w-7xl mx-auto w-full">
        {/* Upper Footer: Brand & Quick Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Col 1 & 2: Brand Statement */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div
                onClick={triggerEasterEgg}
                data-cursor="SEAL"
                className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center bg-[#111622] cursor-pointer hover:rotate-180 transition-transform duration-700 select-none shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                title="Wexford Seal of Sovereignty"
              >
                <span className="font-serif text-base font-bold text-[#D4AF37]">W</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-[0.14em] text-[#FFFFFF]">
                  WEXFORD <span className="text-[#D4AF37]">LAW</span>
                </span>
                <span className="text-[9px] font-mono tracking-[0.25em] text-[#CBD5E1] uppercase">
                  Chambers of Strategic Litigation
                </span>
              </div>
            </div>

            <p className="text-xs font-light leading-relaxed max-w-sm text-[#CBD5E1]">
              {isEs
                ? "Práctica jurídica internacional de alto impacto. Representación implacable ante tribunales soberanos, cortes de arbitraje y salas comerciales transfronterizas."
                : "International high-impact strategic litigation practice. Uncompromising advocacy before sovereign tribunals, arbitral seats, and cross-border commercial benches."}
            </p>

            {easterEggActive && (
              <div className="p-4 bg-[#111622] border border-[#D4AF37] text-xs font-mono text-[#D4AF37] space-y-1 animate-in fade-in duration-300">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#FDE047]" />
                  <span className="font-bold text-[#FFFFFF]">WEXFORD VAULT PROTOCOL 0.9</span>
                </div>
                <p className="text-[11px] text-[#CBD5E1]">
                  {isEs
                    ? "Protocolo seguro verificado. Línea de atención de contingencia: +1 (212) 890-4420"
                    : "Encrypted transmission confirmed. Emergency contingency line: +1 (212) 890-4420"}
                </p>
              </div>
            )}
          </div>

          {/* Col 3: Practice Areas */}
          <div className="space-y-4 text-xs font-mono">
            <div className="text-[#D4AF37] uppercase tracking-widest text-[11px] font-bold">
              {isEs ? "PRÁCTICA" : "PRACTICE"}
            </div>
            <ul className="space-y-2.5">
              {SITE_CONFIG.services.slice(0, 4).map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-[#CBD5E1] hover:text-[#D4AF37] transition-colors"
                  >
                    {isEs ? s.titleEs : s.titleEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Principal Jurisdictions */}
          <div className="space-y-4 text-xs font-mono">
            <div className="text-[#D4AF37] uppercase tracking-widest text-[11px] font-bold">
              {isEs ? "JURISDICCIONES" : "JURISDICTIONS"}
            </div>
            <ul className="space-y-2.5">
              {SITE_CONFIG.offices.map((o) => (
                <li key={o.city}>
                  <a href="#contact" className="text-[#CBD5E1] hover:text-[#D4AF37] transition-colors">
                    {o.city} — {o.country}
                  </a>
                </li>
              ))}
              <li>
                <span className="text-[#64748B]">ICC Paris &amp; LCIA London</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Security & Inquiries */}
          <div className="space-y-4 text-xs font-mono">
            <div className="text-[#D4AF37] uppercase tracking-widest text-[11px] font-bold">
              {isEs ? "CONTACTO URGENTE" : "URGENT COUNSEL"}
            </div>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-[#64748B] block text-[10px]">MIAMI CHAMBERS</span>
                <a href="tel:+13058904420" className="text-[#CBD5E1] hover:text-[#D4AF37] transition-colors">
                  +1 (305) 890-4420
                </a>
              </div>
              <div>
                <span className="text-[#64748B] block text-[10px]">SECURE INTAKE</span>
                <a href="mailto:counsel@wexfordlaw.com" className="text-[#CBD5E1] hover:text-[#D4AF37] transition-colors">
                  counsel@wexfordlaw.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8 text-xs font-mono text-[#CBD5E1]">
          <div className="flex items-center gap-3">
            <Shield className="w-4 h-4 text-[#D4AF37]" />
            <span>&copy; {new Date().getFullYear()} Wexford Law. {isEs ? "Todos los derechos reservados." : "All rights reserved."}</span>
          </div>

          <div className="flex items-center gap-6">
            <span>ATTORNEY ADVERTISING // PRIOR RESULTS DO NOT GUARANTEE SIMILAR OUTCOME</span>
            
            <button
              onClick={scrollToTop}
              data-cursor="TOP"
              className="w-9 h-9 rounded-none border border-white/20 hover:border-[#D4AF37] flex items-center justify-center text-[#F1F5F9] hover:text-[#D4AF37] transition-colors bg-[#141A26] cursor-pointer"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
