"use client";

import React, { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { SITE_CONFIG } from "@/config/site";
import { MessageSquare, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { tactileAudio } from "@/utils/audio";

export function Testimonials() {
  const { isEs } = useLanguage();
  const [currentIdx, setCurrentIdx] = useState(0);
  const testimonials = SITE_CONFIG.testimonials;
  const current = testimonials[currentIdx];

  const handlePrev = () => {
    tactileAudio.playClick();
    setCurrentIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    tactileAudio.playClick();
    setCurrentIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#111622] py-28 px-6 sm:px-12 lg:px-20 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase font-semibold">
            <MessageSquare className="w-4 h-4" />
            <span>07 // {isEs ? "RECONOCIMIENTO Y TESTIMONIOS" : "TESTIMONIALS & REPUTATION"}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              data-cursor="PREV"
              className="w-11 h-11 rounded-none border border-[#D4AF37]/40 hover:border-[#D4AF37] flex items-center justify-center text-[#F1F5F9] hover:text-[#D4AF37] transition-colors bg-[#182030] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              data-cursor="NEXT"
              className="w-11 h-11 rounded-none border border-[#D4AF37]/40 hover:border-[#D4AF37] flex items-center justify-center text-[#F1F5F9] hover:text-[#D4AF37] transition-colors bg-[#182030] cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Cinematic Quote Spotlight */}
        <div className="relative glass-panel p-8 sm:p-14 lg:p-16 rounded-none border-2 border-[#D4AF37]/30 bg-[#161C2B] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <Quote className="w-20 h-20 text-[#D4AF37]/15 absolute top-8 right-8 pointer-events-none" />

          <div className="min-h-[160px] flex items-center">
            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FFFFFF] font-medium leading-relaxed italic transition-all duration-500">
              &ldquo;{isEs ? current.quoteEs : current.quoteEn}&rdquo;
            </blockquote>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-12 pt-8 border-t border-white/10">
            <div>
              <div className="font-serif text-xl font-bold text-[#FFFFFF]">
                {isEs ? current.clientEs : current.clientEn}
              </div>
              <div className="text-xs font-mono text-[#D4AF37] tracking-wider uppercase mt-1 font-semibold">
                {isEs ? current.positionEs : current.positionEn}
              </div>
            </div>

            <div className="text-xs font-mono text-[#CBD5E1] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span>{isEs ? current.matterEs : current.matterEn}</span>
            </div>
          </div>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                tactileAudio.playClick();
                setCurrentIdx(i);
              }}
              className={`h-1.5 transition-all duration-300 cursor-pointer ${
                currentIdx === i ? "w-12 bg-[#D4AF37]" : "w-4 bg-white/20 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
