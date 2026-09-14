"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { tactileAudio } from "@/utils/audio";
import { Volume2, VolumeX, Menu, X, Globe, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Navbar() {
  const { lang, toggleLang, isEs } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 80);

      // Section tracker
      const sections = ["hero", "services", "recovery", "authority", "firm", "contact"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const isMuted = tactileAudio.toggleMute();
    setSoundEnabled(!isMuted);
  };

  const navLinks = [
    { id: "hero", labelEn: "Home", labelEs: "Inicio" },
    { id: "services", labelEn: "Services", labelEs: "Servicios" },
    { id: "recovery", labelEn: "Capital Recovery", labelEs: "Recuperación" },
    { id: "authority", labelEn: "Track Record", labelEs: "Experiencia" },
    { id: "firm", labelEn: "The Firm", labelEs: "La Firma" },
    { id: "contact", labelEn: "Contact", labelEs: "Contacto" },
  ];

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    tactileAudio.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${
        scrolled ? "py-3 px-4 sm:px-6" : "py-6 px-6 sm:px-12"
      }`}
    >
      <nav
        className={`w-full max-w-7xl flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "glass-pill px-6 py-3 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
            : "bg-transparent py-2"
        }`}
      >
        {/* Brand Logo */}
        <button
          onClick={() => scrollTo("hero")}
          data-cursor="WEXFORD"
          className="flex items-center gap-3 text-left group select-none"
        >
          <div className="w-8 h-8 rounded-full border border-[#C5A880]/60 flex items-center justify-center bg-[#12141A] group-hover:border-[#C5A880] transition-colors">
            <span className="font-serif text-sm font-bold text-[#C5A880]">W</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg font-bold tracking-[0.14em] text-[#F3F4F6] group-hover:text-[#C5A880] transition-colors leading-tight">
              WEXFORD <span className="text-[#C5A880]">LAW</span>
            </span>
            <span className="text-[8px] font-mono tracking-[0.25em] text-[#94A3B8] uppercase">
              International Counsel
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                data-cursor="VIEW"
                className={`relative px-4 py-1.5 text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 rounded-full ${
                  isActive
                    ? "text-[#C5A880] font-semibold"
                    : "text-[#94A3B8] hover:text-[#F3F4F6]"
                }`}
              >
                {isEs ? link.labelEs : link.labelEn}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#C5A880] rounded-full shadow-[0_0_8px_#C5A880]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Actions: Sound, Bilingual Switcher & CTA */}
        <div className="flex items-center gap-3">
          {/* Sound Ambiance Toggle */}
          <button
            onClick={handleSoundToggle}
            data-cursor="AUDIO"
            title={soundEnabled ? "Mute sound" : "Enable tactile sound"}
            className="w-9 h-9 rounded-full border border-[#272A35] hover:border-[#C5A880]/50 flex items-center justify-center text-[#94A3B8] hover:text-[#C5A880] transition-all bg-[#0F1117]/80"
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-[#C5A880]" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* Bilingual EN / ES Switcher */}
          <button
            onClick={() => {
              tactileAudio.playClick();
              toggleLang();
            }}
            data-cursor="LANG"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#272A35] hover:border-[#C5A880]/70 bg-[#0F1117]/80 text-[#E2E8F0] text-xs font-mono tracking-widest uppercase transition-all group"
          >
            <Globe className="w-3.5 h-3.5 text-[#C5A880] group-hover:rotate-45 transition-transform duration-300" />
            <span className={lang === "en" ? "text-[#C5A880] font-bold" : "text-[#64748B]"}>EN</span>
            <span className="text-[#334155]">/</span>
            <span className={lang === "es" ? "text-[#C5A880] font-bold" : "text-[#64748B]"}>ES</span>
          </button>

          {/* Consultation Magnetic CTA */}
          <div className="hidden sm:block">
            <MagneticButton
              variant="primary"
              size="sm"
              cursorLabel="CONTACT"
              onClick={() => scrollTo("contact")}
              className="text-[11px]"
            >
              <span>{isEs ? "Consulta Estratégica" : "Book Counsel"}</span>
              <ArrowUpRight className="w-3 h-3 ml-1" />
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              tactileAudio.playClick();
              setMobileOpen(!mobileOpen);
            }}
            className="lg:hidden w-9 h-9 rounded-full border border-[#272A35] flex items-center justify-center text-[#E2E8F0] hover:text-[#C5A880] hover:border-[#C5A880]/50 transition-all bg-[#0F1117]"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-[#0A0B0E]/95 backdrop-blur-2xl z-40 flex flex-col justify-between p-8 pt-24 animate-in fade-in zoom-in-95 duration-300">
          <div className="flex flex-col gap-6">
            <div className="text-[10px] font-mono tracking-[0.3em] text-[#C5A880] uppercase mb-2">
              Navigation
            </div>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left font-serif text-2xl font-bold tracking-wider text-[#F3F4F6] hover:text-[#C5A880] transition-colors py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{isEs ? link.labelEs : link.labelEn}</span>
                <ArrowUpRight className="w-5 h-5 text-[#C5A880]" />
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
            <MagneticButton
              variant="primary"
              size="md"
              onClick={() => scrollTo("contact")}
              className="w-full"
            >
              {isEs ? "Hablar con un Abogado" : "Consult Senior Counsel"}
            </MagneticButton>

            <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] pt-2">
              <span>EST. 2009 — NEW YORK / LONDON / BOGOTÁ</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
