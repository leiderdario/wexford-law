"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import { useMousePosition } from "@/hooks/useMousePosition";
import { SITE_CONFIG } from "@/config/site";
import { Scale, Quote, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function AttorneyProfile() {
  const { isEs } = useLanguage();
  const mouse = useMousePosition();
  const containerRef = useRef<HTMLElement>(null);
  const partner = SITE_CONFIG.managingPartner;

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="firm"
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#111622] py-28 px-6 sm:px-12 lg:px-20 border-t border-white/10 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Category Header */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase mb-4">
          <Scale className="w-4 h-4 text-[#D4AF37]" />
          <span>05 // {isEs ? "LIDERAZGO Y SOCIEDAD" : "LEADERSHIP & ARCHITECTURE"}</span>
        </div>

        {/* Big Giant Name Banner Crossing Over Section */}
        <div className="relative select-none pointer-events-none overflow-hidden py-2 -mb-8 sm:-mb-14 z-20">
          <div className="font-serif text-[10vw] sm:text-[9vw] font-black tracking-[-0.03em] uppercase text-white/10 leading-none whitespace-nowrap">
            ARTHUR VANCE WEXFORD
          </div>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative w-full aspect-[3/4] rounded-none overflow-hidden border-2 border-[#D4AF37]/60 shadow-[0_30px_70px_rgba(0,0,0,0.9)] group"
              style={{
                transform: `perspective(1000px) rotateY(${mouse.normalizedX * 4}deg) rotateX(${-mouse.normalizedY * 4}deg)`,
                transition: "transform 0.2s ease-out",
              }}
              data-cursor="VIEW"
            >
              <Image
                src={partner.portrait}
                alt={partner.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111622] via-transparent to-transparent opacity-75" />

              <div className="absolute top-4 left-4 glass-pill px-3 py-1 text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold">
                SENIOR PARTNER
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-[#F1F5F9] border-t border-white/20 pt-3 flex items-center justify-between">
                <span>{partner.credentials}</span>
                <span className="text-[#D4AF37] font-semibold">COLUMBIA / OXFORD</span>
              </div>
            </div>
          </div>

          {/* Narrative & Bio Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div>
              <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase block mb-2 font-semibold">
                {isEs ? partner.titleEs : partner.titleEn}
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#FFFFFF] leading-tight">
                {partner.name}
              </h2>
            </div>

            {/* Strategic Quote */}
            <div className="p-6 sm:p-8 bg-[#182030] border-l-4 border-l-[#D4AF37] relative">
              <Quote className="w-8 h-8 text-[#D4AF37]/30 absolute top-4 right-4" />
              <p className="font-serif italic text-lg sm:text-xl text-[#F1F5F9] leading-relaxed relative z-10">
                &ldquo;{isEs ? partner.quoteEs : partner.quoteEn}&rdquo;
              </p>
            </div>

            <p className="text-base text-[#CBD5E1] font-light leading-relaxed">
              {isEs ? partner.bioEs : partner.bioEn}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#D4AF37] tracking-widest uppercase font-semibold">
                  {isEs ? "JURISDICCIONES HABILITADAS" : "ADMITTED JURISDICTIONS"}
                </span>
                <p className="text-xs font-mono text-[#E2E8F0]">
                  New York Bar (US), London Commercial Court (UK), High Court of Justice
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#D4AF37] tracking-widest uppercase font-semibold">
                  {isEs ? "ESPECIALIDAD PRINCIPAL" : "PRIMARY PRACTICE"}
                </span>
                <p className="text-xs font-mono text-[#E2E8F0]">
                  {isEs ? "Arbitraje Comercial Internacional y Cobro Coactivo" : "International Commercial Arbitration & Cross-Border Seizures"}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <MagneticButton
                variant="outline"
                size="md"
                cursorLabel="CONTACT"
                onClick={scrollToContact}
              >
                <span>{isEs ? "Solicitar Audiencia Privada" : "Request Private Briefing"}</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
