"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { DollarSign, ArrowRight, ShieldAlert, Sparkles, Check } from "lucide-react";
import { tactileAudio } from "@/utils/audio";

export function CapitalRecovery() {
  const { isEs } = useLanguage();
  const [selectedMatter, setSelectedMatter] = useState<number>(0);

  const matters = [
    {
      titleEn: "Defaulted Commercial Obligation",
      titleEs: "Títulos y Obligaciones en Mora",
      actionEn: "Immediate asset freezing & pre-judgment injunctions.",
      actionEs: "Embargos preventivos y medidas cautelares inmediatas.",
      timelineEn: "30 - 90 Days",
      timelineEs: "30 - 90 Días",
    },
    {
      titleEn: "Diverted or Concealed Corporate Capital",
      titleEs: "Capital Corporativo Desviado u Oculto",
      actionEn: "Forensic tracing through multi-tier jurisdictions.",
      actionEs: "Rastreo contable y societario transfronterizo.",
      timelineEn: "60 - 180 Days",
      timelineEs: "60 - 180 Días",
    },
    {
      titleEn: "Unpaid Arbitration Award or Judgment",
      titleEs: "Laudos Arbitrales o Sentencias sin Ejecutar",
      actionEn: "Sovereign/foreign enforcement under New York Convention.",
      actionEs: "Ejecución forzosa bajo Convención de Nueva York.",
      timelineEn: "90 - 120 Days",
      timelineEs: "90 - 120 Días",
    },
    {
      titleEn: "Breach of High-Value Procurement Contract",
      titleEs: "Incumplimiento de Contratos de Suministro de Alto Valor",
      actionEn: "Specific enforcement coupled with full statutory damages.",
      actionEs: "Exigibilidad forzosa tasando lucro cesante y daño emergente.",
      timelineEn: "45 - 90 Days",
      timelineEs: "45 - 90 Días",
    },
  ];

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="recovery"
      className="relative w-full bg-[#111622] py-28 px-6 sm:px-12 lg:px-20 overflow-hidden border-t border-white/10"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-[650px] h-[650px] bg-[#D4AF37]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Category Header */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase mb-4">
          <DollarSign className="w-4 h-4 text-[#D4AF37]" />
          <span>03 // {isEs ? "ENFOQUE ESPECIAL" : "SPECIAL FOCUS"}</span>
        </div>

        {/* Narrative Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FFFFFF] uppercase leading-[1.05]">
              {isEs ? "¿TIENE DINERO" : "HAVE CAPITAL"}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#D4AF37] to-[#B38C2A]">
                {isEs ? "POR RECUPERAR?" : "TO RECOVER?"}
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-xl text-[#E2E8F0] font-light leading-relaxed max-w-2xl">
              {isEs
                ? "Analizamos su situación y las alternativas jurídicas disponibles para reclamar recursos, obligaciones pendientes o valores que legalmente puedan corresponderle."
                : "We conduct exhaustive forensic assessments of your legal standing and deploy aggressive mechanisms to seize withheld assets, uncollected receivables, and breach damages."}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <MagneticButton
                variant="primary"
                size="lg"
                cursorLabel="CONTACT"
                onClick={scrollToContact}
              >
                <span>{isEs ? "REVISAR MI CASO" : "EVALUATE MY CASE"}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </MagneticButton>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-none overflow-hidden border-2 border-[#D4AF37]/50 shadow-[0_25px_60px_rgba(0,0,0,0.8)] group">
              <Image
                src="/images/asset-recovery.jpg"
                alt="Capital and Asset Recovery Strategy"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111622] via-transparent to-transparent opacity-80" />
              <div className="absolute top-4 right-4 bg-[#111622]/95 px-3.5 py-1.5 border border-[#D4AF37] text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold">
                CONFIDENTIAL PROTOCOL
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#F1F5F9] border-t border-white/15 pt-2">
                <span>FORENSIC MAPPING // UNIT 01</span>
                <span className="text-[#D4AF37] font-semibold">ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Tactical Evaluation Matrix */}
        <div className="mt-20 glass-panel p-8 sm:p-12 rounded-none border border-white/15 bg-[#161C2B]/90">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
            <div>
              <div className="text-[10px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase flex items-center gap-1.5 font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isEs ? "MATRIZ DE ACCIÓN TÁCTICA" : "TACTICAL RECOVERY MATRIX"}</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FFFFFF] mt-1">
                {isEs ? "Seleccione la naturaleza de su acreencia" : "Select the nature of your impaired capital"}
              </h3>
            </div>
            <div className="text-xs font-mono text-[#CBD5E1]">
              {isEs ? "Análisis confidencial previo sin costo" : "Confidential preliminary review"}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {matters.map((item, idx) => {
              const isSelected = selectedMatter === idx;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    tactileAudio.playClick();
                    setSelectedMatter(idx);
                  }}
                  data-cursor="SELECT"
                  className={`text-left p-6 transition-all duration-300 border flex flex-col justify-between min-h-[140px] cursor-pointer ${
                    isSelected
                      ? "bg-[#1E2638] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.25)]"
                      : "bg-[#111622] border-white/10 hover:border-[#D4AF37]/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#D4AF37] font-bold">0{idx + 1}</span>
                    {isSelected && <Check className="w-4 h-4 text-[#D4AF37]" />}
                  </div>
                  <div className="font-serif text-sm sm:text-base font-bold text-[#FFFFFF] mt-3">
                    {isEs ? item.titleEs : item.titleEn}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Matrix Strategy Reveal */}
          <div className="bg-[#111622] p-6 sm:p-8 border-l-4 border-l-[#D4AF37] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase flex items-center gap-2 font-bold">
                <ShieldAlert className="w-4 h-4 text-[#D4AF37]" />
                <span>{isEs ? "ESTRATEGIA RECOMENDADA" : "RECOMMENDED LEGAL PROTOCOL"}</span>
              </div>
              <div className="text-sm sm:text-base font-medium text-[#F1F5F9]">
                {isEs ? matters[selectedMatter].actionEs : matters[selectedMatter].actionEn}
              </div>
              <div className="text-xs font-mono text-[#CBD5E1]">
                {isEs ? "Ventana Táctica Estimada: " : "Estimated Procedural Window: "}
                <span className="text-[#D4AF37] font-semibold">
                  {isEs ? matters[selectedMatter].timelineEs : matters[selectedMatter].timelineEn}
                </span>
              </div>
            </div>

            <button
              onClick={scrollToContact}
              className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#FDE047] text-[#0B0F19] text-xs font-mono tracking-widest uppercase font-bold transition-all flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              <span>{isEs ? "INICIAR RECLAMO" : "INITIATE CLAIM"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
