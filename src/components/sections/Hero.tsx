"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import { useMousePosition } from "@/hooks/useMousePosition";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowDown, Shield, Scale, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Hero() {
  const { isEs } = useLanguage();
  const mouse = useMousePosition();
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // 1. Initial entrance animation
      const entranceTl = gsap.timeline({ delay: 0.1 });

      entranceTl.fromTo(
        ".hero-char-word",
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.1,
          ease: "power4.out",
        }
      )
      .fromTo(
        ".hero-sub-element",
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        imageContainerRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=0.8"
      );

      // 2. Smooth parallax without lock-pinning (eliminating the black space gap bug)
      gsap.to(bgImageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(imageContainerRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col justify-between pt-32 pb-14 px-6 sm:px-12 lg:px-20 overflow-hidden bg-[#111622]"
    >
      {/* 1. Monumental Grand Background Image Requested by User */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      >
        <Image
          src="/images/hero-monumental.jpg"
          alt="Wexford Law Global Headquarters"
          fill
          priority
          className="object-cover object-center brightness-[0.42] contrast-[1.12] scale-105"
        />
        {/* Architectural Vignette Gradients for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111622] via-[#111622]/60 to-[#111622]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111622]/90 via-[#111622]/50 to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#D4AF37]/15 rounded-full blur-[150px] pointer-events-none" />
      </div>

      {/* Top Banner Tagline */}
      <div className="hero-sub-element relative z-10 flex flex-wrap items-center justify-between gap-4 max-w-7xl mx-auto w-full pt-2 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase">
          <Shield className="w-4 h-4 text-[#D4AF37]" />
          <span>Wexford International Chambers</span>
        </div>
        <div className="flex items-center gap-6 text-[11px] font-mono tracking-[0.2em] text-[#E2E8F0] uppercase">
          <span className="text-[#F1F5F9] font-medium">NEW YORK / LONDON / BOGOTÁ</span>
          <span className="hidden sm:inline text-[#D4AF37]">|</span>
          <span className="hidden sm:inline text-[#94A3B8]">High-Stakes Strategic Litigation</span>
        </div>
      </div>

      {/* Main Kinetic Typography Headline */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8">
        <h1
          ref={headlineRef}
          className="font-serif font-extrabold text-[12vw] sm:text-[10vw] lg:text-[8.5vw] leading-[0.92] tracking-[-0.03em] uppercase select-none drop-shadow-[0_8px_30px_rgba(0,0,0,0.8)]"
        >
          <span className="hero-title-top block overflow-hidden py-1">
            <span className="hero-char-word inline-block text-[#FFFFFF]">
              {isEs ? "DEFENDEMOS" : "WE DEFEND"}
            </span>
          </span>
          <span className="hero-title-bottom flex flex-wrap items-baseline gap-4 sm:gap-8 overflow-hidden py-1">
            <span className="hero-char-word inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#D4AF37] to-[#B38C2A]">
              {isEs ? "LO QUE" : "WHAT"}
            </span>
            <span className="hero-char-word inline-block text-[#FFFFFF]">
              {isEs ? "IMPORTA." : "MATTERS."}
            </span>
          </span>
        </h1>

        {/* Narrative Subtitle & CTAs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-8">
          <div className="hero-sub-element lg:col-span-5 flex flex-col gap-6">
            <p className="text-base sm:text-lg text-[#E2E8F0] font-light leading-relaxed border-l-2 border-[#D4AF37] pl-5 bg-[#111622]/40 backdrop-blur-sm py-2">
              {isEs
                ? "Una firma jurídica de alta intervención. Desarticulamos controversias complejas, recuperamos activos bloqueados y aseguramos resoluciones definitivas para corporaciones y patrimonios soberanos."
                : "A high-intervention litigation house. We dismantle complex corporate resistance, reclaim impaired capital, and execute definitive legal outcomes for enterprises and sovereign estates."}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton
                variant="primary"
                size="md"
                cursorLabel="CONTACT"
                onClick={() => scrollToSection("contact")}
              >
                <span>{isEs ? "Hablar con un Abogado" : "Consult Senior Counsel"}</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </MagneticButton>

              <MagneticButton
                variant="outline"
                size="md"
                cursorLabel="EXPLORE"
                onClick={() => scrollToSection("services")}
              >
                <span>{isEs ? "Explorar Servicios" : "Explore Practice"}</span>
              </MagneticButton>
            </div>
          </div>

          {/* Central Editorial Photograph with Mouse Reaction */}
          <div className="lg:col-span-4 relative flex justify-center">
            <div
              ref={imageContainerRef}
              className="relative w-full max-w-sm aspect-[4/5] rounded-none overflow-hidden border-2 border-[#D4AF37]/50 shadow-[0_25px_60px_rgba(0,0,0,0.9)] group"
              style={{
                transform: `perspective(1000px) rotateY(${mouse.normalizedX * 6}deg) rotateX(${-mouse.normalizedY * 6}deg)`,
                transition: "transform 0.15s ease-out",
              }}
              data-cursor="VIEW"
            >
              <Image
                src="/images/hero-editorial.jpg"
                alt="Wexford Law Strategic Counsel"
                fill
                priority
                className="object-cover brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111622] via-transparent to-transparent opacity-85" />
              <div className="absolute bottom-4 left-4 right-4 text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase flex items-center justify-between border-t border-white/15 pt-2">
                <span>CHAMBERS // EXECUTIVE</span>
                <span>SEC. 01</span>
              </div>
            </div>
          </div>

          {/* Right Floating Badge */}
          <div className="hero-sub-element lg:col-span-3 flex flex-col gap-4">
            <div className="glass-panel p-6 rounded-none border-l-4 border-l-[#D4AF37] relative overflow-hidden bg-[#161C2B]/90">
              <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#D4AF37] uppercase mb-1">
                <Scale className="w-4 h-4 text-[#D4AF37]" />
                <span>{isEs ? "Estatuto Estratégico" : "Strategic Charter"}</span>
              </div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#FFFFFF]">
                $140M+
              </div>
              <p className="text-xs text-[#CBD5E1] mt-1 font-light">
                {isEs
                  ? "Capital y activos comprometidos asegurados para nuestros clientes."
                  : "Secured capital & impaired enterprise assets recovered."}
              </p>
            </div>

            <div className="text-[11px] font-mono text-[#CBD5E1] flex items-center gap-2 bg-[#161C2B]/80 p-2.5 border border-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[#F1F5F9]">{isEs ? "Atendiendo casos de alta prioridad" : "Accepting select high-stakes briefs"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div
        onClick={() => scrollToSection("services")}
        data-cursor="SCROLL"
        className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between pt-4 border-t border-white/10 cursor-pointer text-[#E2E8F0] hover:text-[#D4AF37] transition-colors"
      >
        <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#CBD5E1]">
          01 // {isEs ? "DESPLÁCESE PARA EXPLORAR" : "SCROLL TO DISCOVER"}
        </div>
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase animate-bounce text-[#D4AF37]">
          <span>{isEs ? "EXPLORAR SERVICIOS" : "EXPLORE SERVICES"}</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>
      </div>
    </section>
  );
}
