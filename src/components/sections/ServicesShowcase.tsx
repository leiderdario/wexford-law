"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import { SITE_CONFIG } from "@/config/site";
import { ArrowRight, ArrowLeft, CheckCircle2, Layers } from "lucide-react";
import { tactileAudio } from "@/utils/audio";

export function ServicesShowcase() {
  const { isEs } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const services = SITE_CONFIG.services;

  const scrollToIndex = (index: number) => {
    tactileAudio.playClick();
    setActiveIdx(index);
    if (trackRef.current) {
      const cardWidth = 460; // approximate card width + gap
      trackRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    const nextIdx = Math.max(0, activeIdx - 1);
    scrollToIndex(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = Math.min(services.length - 1, activeIdx + 1);
    scrollToIndex(nextIdx);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="relative w-full bg-[#141A26] py-28 px-6 sm:px-12 lg:px-20 overflow-hidden border-t border-white/10"
    >
      {/* Background ambient gold gradient */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-8 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase mb-3">
              <Layers className="w-4 h-4 text-[#D4AF37]" />
              <span>02 // {isEs ? "ÁREAS DE PRÁCTICA ESTRATÉGICA" : "STRATEGIC PRACTICE PILLARS"}</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#FFFFFF] uppercase">
              {isEs ? "SERVICIOS " : "LEGAL "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#D4AF37] to-[#B38C2A]">
                {isEs ? "JURÍDICOS" : "SERVICES"}
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <p className="max-w-md text-sm text-[#CBD5E1] font-light leading-relaxed">
              {isEs
                ? "Siete disciplinas jurídicas de alta intervención para proteger el valor patrimonial, neutralizar contingencias y litigar con contundencia."
                : "Seven specialized legal disciplines engineered to shield enterprise capital, dismantle hostile claims, and enforce decisive outcomes."}
            </p>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3 self-end sm:self-auto">
              <button
                onClick={handlePrev}
                disabled={activeIdx === 0}
                data-cursor="PREV"
                className="w-11 h-11 rounded-none border border-[#D4AF37]/40 hover:border-[#D4AF37] disabled:opacity-30 disabled:hover:border-[#D4AF37]/40 flex items-center justify-center text-[#F1F5F9] hover:text-[#D4AF37] transition-colors bg-[#111622]"
                title="Previous Service"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <span className="text-xs font-mono text-[#D4AF37] tracking-widest px-2">
                0{activeIdx + 1} / 0{services.length}
              </span>

              <button
                onClick={handleNext}
                disabled={activeIdx === services.length - 1}
                data-cursor="NEXT"
                className="w-11 h-11 rounded-none border border-[#D4AF37]/40 hover:border-[#D4AF37] disabled:opacity-30 disabled:hover:border-[#D4AF37]/40 flex items-center justify-center text-[#F1F5F9] hover:text-[#D4AF37] transition-colors bg-[#111622]"
                title="Next Service"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Quick Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {services.map((service, idx) => (
            <button
              key={service.id}
              onClick={() => scrollToIndex(idx)}
              className={`px-4 py-2 text-xs font-mono tracking-wider uppercase whitespace-nowrap transition-all border ${
                activeIdx === idx
                  ? "bg-[#D4AF37] text-[#0B0F19] font-bold border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                  : "bg-[#111622]/80 text-[#94A3B8] border-white/10 hover:border-[#D4AF37]/50 hover:text-[#F1F5F9]"
              }`}
            >
              {service.number} // {isEs ? service.titleEs : service.titleEn}
            </button>
          ))}
        </div>

        {/* Fluid Horizontal Rail */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollBehavior: "smooth" }}
        >
          {services.map((service, index) => {
            const isSelected = activeIdx === index;
            return (
              <div
                key={service.id}
                onMouseEnter={() => {
                  setActiveIdx(index);
                  tactileAudio.playHover();
                }}
                data-cursor="EXPLORE"
                className={`w-[85vw] sm:w-[440px] lg:w-[480px] flex-shrink-0 snap-center glass-panel rounded-none p-8 sm:p-10 transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? "border-[#D4AF37] shadow-[0_20px_45px_rgba(212,175,55,0.15)] bg-[#182030]"
                    : "border-white/10 hover:border-[#D4AF37]/40 bg-[#141A26]"
                }`}
              >
                <div>
                  {/* Top Number & Tag */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-5">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#D4AF37]">
                      {service.number}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#CBD5E1] px-3 py-1 bg-[#111622] border border-white/10">
                      {isEs ? "Pilar Jurídico" : "Legal Pillar"}
                    </span>
                  </div>

                  {/* Service Image */}
                  <div className="relative w-full h-52 sm:h-56 mb-6 overflow-hidden border border-white/10 group">
                    <Image
                      src={service.image}
                      alt={isEs ? service.titleEs : service.titleEn}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141A26] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-4 text-[10px] font-mono text-[#D4AF37] tracking-widest uppercase bg-[#111622]/80 px-2.5 py-1 border border-[#D4AF37]/40">
                      WEXFORD COUNSEL
                    </div>
                  </div>

                  {/* Titles */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFFFFF] mb-2 leading-tight">
                    {isEs ? service.titleEs : service.titleEn}
                  </h3>
                  <p className="text-xs font-mono text-[#D4AF37] tracking-wider uppercase mb-4">
                    {isEs ? service.taglineEs : service.taglineEn}
                  </p>
                  <p className="text-sm text-[#CBD5E1] font-light leading-relaxed mb-6">
                    {isEs ? service.descriptionEs : service.descriptionEn}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5 pt-4 border-t border-white/10 mb-6">
                    {(isEs ? service.highlightsEs : service.highlightsEn).map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2.5 text-xs text-[#E2E8F0]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                  <button
                    onClick={scrollToContact}
                    className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#FFFFFF] hover:text-[#D4AF37] transition-colors uppercase font-semibold"
                  >
                    <span>{isEs ? "Evaluar Este Asunto" : "Brief This Matter"}</span>
                    <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                  </button>
                  <span className="text-[11px] font-mono text-[#64748B]">
                    0{index + 1} / 0{services.length}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
