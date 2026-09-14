"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { SITE_CONFIG } from "@/config/site";
import { Award, CheckCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function AuthorityStats() {
  const { isEs } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const stats = SITE_CONFIG.statistics;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const targets = stats.map((s) => s.value);
    const animatedObj = { c0: 0, c1: 0, c2: 0, c3: 0 };

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(animatedObj, {
          c0: targets[0],
          c1: targets[1],
          c2: targets[2],
          c3: targets[3],
          duration: 2.2,
          ease: "power2.out",
          onUpdate: () => {
            setCounts([
              Math.floor(animatedObj.c0),
              Math.floor(animatedObj.c1),
              Math.floor(animatedObj.c2),
              Math.floor(animatedObj.c3),
            ]);
          },
        });
      },
    });

    return () => st.kill();
  }, [stats]);

  return (
    <section
      id="authority"
      ref={sectionRef}
      className="relative w-full bg-[#141A26] py-28 px-6 sm:px-12 lg:px-20 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase mb-3">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span>04 // {isEs ? "AUTORIDAD Y TRAYECTORIA" : "TRACK RECORD & AUTHORITY"}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FFFFFF] uppercase">
              {isEs ? "DECENIOS DE ESTRATEGIA " : "DECISIVE ADVOCACY "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#D4AF37] to-[#B38C2A]">
                {isEs ? "Y RESOLUCIÓN" : "& RESOLUTION"}
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-[#CBD5E1] px-4 py-2 border border-[#D4AF37]/30 bg-[#111622]">
            <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
            <span>{isEs ? "INDICADORES DE DESEMPEÑO DEMO" : "VALIDATED PERFORMANCE DATA"}</span>
          </div>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={stat.id}
              className="relative p-8 sm:p-10 glass-panel border border-white/10 hover:border-[#D4AF37] transition-all duration-300 group flex flex-col justify-between bg-[#182030]"
            >
              {/* Corner accent lines */}
              <div className="absolute top-0 right-0 w-8 h-[2px] bg-[#D4AF37]/50 group-hover:bg-[#D4AF37] transition-colors" />
              <div className="absolute top-0 right-0 w-[2px] h-8 bg-[#D4AF37]/50 group-hover:bg-[#D4AF37] transition-colors" />

              <div>
                <div className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase mb-4 font-semibold">
                  METRIC // 0{idx + 1}
                </div>

                <div className="font-serif text-5xl sm:text-6xl font-bold text-[#FFFFFF] group-hover:text-[#FDE047] transition-colors tracking-tight flex items-baseline">
                  <span>{stat.prefix || ""}</span>
                  <span>{counts[idx]}</span>
                  <span className="text-[#D4AF37] text-4xl ml-1">{stat.suffix}</span>
                </div>

                <div className="font-serif text-lg sm:text-xl font-semibold text-[#FFFFFF] mt-4 leading-snug">
                  {isEs ? stat.labelEs : stat.labelEn}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 text-xs text-[#CBD5E1] font-light">
                {isEs ? stat.subEs : stat.subEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
