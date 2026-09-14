"use client";

import React, { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { useMousePosition } from "@/hooks/useMousePosition";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowRight, Sparkles } from "lucide-react";

export function ClimaxCTA() {
  const { isEs } = useLanguage();
  const mouse = useMousePosition();
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToForm = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[85vh] flex flex-col items-center justify-center bg-[#141A26] py-28 px-6 sm:px-12 text-center overflow-hidden border-t border-white/10"
    >
      {/* Background Interactive Radial Gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50 transition-transform duration-300 ease-out"
        style={{
          background: `radial-gradient(circle at ${50 + mouse.normalizedX * 25}% ${
            50 + mouse.normalizedY * 25
          }%, rgba(212, 175, 55, 0.22) 0%, transparent 65%)`,
        }}
      />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#232c3f_1px,transparent_1px),linear-gradient(to_bottom,#232c3f_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase mb-8 font-semibold">
          <Sparkles className="w-4 h-4" />
          <span>{isEs ? "EL MOMENTO DE ACTUAR" : "THE DECISIVE MOMENT"}</span>
        </div>

        {/* Massive Typography Climax */}
        <h2 className="font-serif font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#FFFFFF] uppercase leading-[0.98] select-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          {isEs ? "¿NECESITA " : "REQUIRE "}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#D4AF37] to-[#B38C2A]">
            {isEs ? "ASESORÍA" : "STRATEGIC"}
          </span>
          <span className="block text-[#FFFFFF]">
            {isEs ? "JURÍDICA?" : "COUNSEL?"}
          </span>
        </h2>

        <p className="mt-8 text-base sm:text-xl text-[#CBD5E1] font-light max-w-2xl leading-relaxed">
          {isEs
            ? "Agende una sesión preliminar reservada con nuestros socios litigantes. Evaluamos la solidez de su posición y estructuramos una estrategia inmediata."
            : "Schedule an executive confidential consultation with our lead trial partners. We evaluate your evidentiary standing and deploy immediate legal leverage."}
        </p>

        {/* Magnetic Button Climax */}
        <div className="mt-12">
          <MagneticButton
            variant="primary"
            size="lg"
            cursorLabel="CONTACT"
            onClick={scrollToForm}
            className="text-sm tracking-[0.25em]"
          >
            <span>{isEs ? "HABLAR CON UN ABOGADO" : "ENGAGE SENIOR COUNSEL"}</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </MagneticButton>
        </div>

        <div className="mt-8 text-xs font-mono text-[#D4AF37] tracking-widest uppercase font-semibold">
          {isEs ? "RESPUESTA EN MENOS DE 12 HORAS // ESTRICTA RESERVA" : "EXECUTIVE RESPONSE WITHIN 12 HOURS // FULL PRIVILEGE"}
        </div>
      </div>
    </section>
  );
}
