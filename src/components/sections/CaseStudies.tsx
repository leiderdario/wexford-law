"use client";

import React, { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { SITE_CONFIG } from "@/config/site";
import { Briefcase, ArrowUpRight, ShieldCheck, ChevronDown } from "lucide-react";
import { tactileAudio } from "@/utils/audio";

export function CaseStudies() {
  const { isEs } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>("case-01");
  const cases = SITE_CONFIG.caseStudies;

  const toggleCase = (id: string) => {
    tactileAudio.playClick();
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="cases"
      className="relative w-full bg-[#141A26] py-28 px-6 sm:px-12 lg:px-20 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase mb-3">
              <Briefcase className="w-4 h-4 text-[#D4AF37]" />
              <span>06 // {isEs ? "RESOLUCIONES Y PRECEDENTES" : "STRATEGIC PRECEDENTS"}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FFFFFF] uppercase">
              {isEs ? "EXPERIENCIA QUE " : "STRATEGY BACKED BY "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#D4AF37] to-[#B38C2A]">
                {isEs ? "RESPALDA" : "RESULTS"}
              </span>
            </h2>
          </div>

          <div className="text-xs font-mono text-[#CBD5E1] max-w-sm">
            {isEs
              ? "Expedientes representativos ilustrativos. Los nombres y detalles sensibles han sido anonimizados por confidencialidad profesional."
              : "Selected representative matters. Sensitive client identifiers have been redacted under strict professional confidentiality covenants."}
          </div>
        </div>

        {/* Case Studies Interactive Accordion */}
        <div className="space-y-4">
          {cases.map((c) => {
            const isExpanded = expandedId === c.id;
            return (
              <div
                key={c.id}
                className={`glass-panel border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? "border-[#D4AF37] bg-[#1B2334] shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
                    : "border-white/10 hover:border-[#D4AF37]/50 bg-[#111622]"
                }`}
              >
                <button
                  onClick={() => toggleCase(c.id)}
                  data-cursor="VIEW"
                  className="w-full text-left p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 select-none cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-mono text-[#D4AF37] font-bold tracking-widest px-3 py-1.5 border border-[#D4AF37]/40 bg-[#D4AF37]/10">
                      {c.code}
                    </span>
                    <div>
                      <div className="text-[10px] font-mono tracking-widest text-[#94A3B8] uppercase">
                        {isEs ? c.categoryEs : c.categoryEn}
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FFFFFF] mt-0.5 group-hover:text-[#D4AF37] transition-colors">
                        {isEs ? c.titleEs : c.titleEn}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 self-end md:self-auto">
                    <div className="text-right">
                      <div className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">
                        {c.metric}
                      </div>
                      <div className="text-[10px] font-mono text-[#CBD5E1] uppercase">
                        {isEs ? c.metricLabelEs : c.metricLabelEn}
                      </div>
                    </div>
                    <div
                      className={`w-9 h-9 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${
                        isExpanded ? "rotate-180 border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10" : "text-white/70"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-8 sm:px-8 pt-2 border-t border-white/10 animate-in fade-in duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                      <div className="space-y-2 p-5 bg-[#111622] border-l-4 border-l-rose-500">
                        <div className="text-[10px] font-mono tracking-widest text-rose-400 uppercase font-semibold">
                          {isEs ? "EL DESAFÍO // ANÁLISIS DE RIESGO" : "THE CHALLENGE // RISK MATRIX"}
                        </div>
                        <p className="text-sm text-[#CBD5E1] leading-relaxed">
                          {isEs ? c.challengeEs : c.challengeEn}
                        </p>
                      </div>

                      <div className="space-y-2 p-5 bg-[#111622] border-l-4 border-l-[#D4AF37]">
                        <div className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase flex items-center gap-1.5 font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>{isEs ? "RESOLUCIÓN // EJECUCIÓN WEXFORD" : "THE RESOLUTION // WEXFORD EXECUTION"}</span>
                        </div>
                        <p className="text-sm text-[#F1F5F9] leading-relaxed">
                          {isEs ? c.outcomeEs : c.outcomeEn}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono text-[#CBD5E1]">
                      <span>VERIFIED ARBITRAL RECORD</span>
                      <button
                        onClick={() => {
                          const el = document.getElementById("contact");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="text-[#D4AF37] hover:underline flex items-center gap-1 uppercase tracking-wider font-semibold cursor-pointer"
                      >
                        <span>{isEs ? "Consultar sobre un caso similar" : "Inquire Regarding Similar Matters"}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
