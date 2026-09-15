"use client";

import React, { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { SITE_CONFIG } from "@/config/site";
import { ConsultationForm } from "@/components/sections/ConsultationForm";
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation, Copy, Check, Layers } from "lucide-react";
import { tactileAudio } from "@/utils/audio";

export function ContactSection() {
  const { isEs } = useLanguage();
  const offices = SITE_CONFIG.offices;
  const [selectedCity, setSelectedCity] = useState<string>("Miami");
  const [copied, setCopied] = useState(false);
  const [mapMode, setMapMode] = useState<"m" | "k">("m"); // "m" = roadmap, "k" = satellite

  const activeOffice = offices.find((o) => o.city === selectedCity) || offices[0];

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(activeOffice.address);
    setCopied(true);
    tactileAudio.playClick();
    setTimeout(() => setCopied(false), 2200);
  };

  const embedMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    activeOffice.mapQuery || activeOffice.address
  )}&t=${mapMode}&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section
      id="contact"
      className="relative w-full bg-[#111622] py-24 sm:py-28 px-6 sm:px-12 lg:px-20 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase mb-3 font-semibold">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>08 // {isEs ? "SEDES Y CONTACTO DIRECTO" : "GLOBAL JURISDICTIONS & CONTACT"}</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#FFFFFF] uppercase">
              {isEs ? "INICIE SU " : "ENGAGE "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#D4AF37] to-[#B38C2A]">
                {isEs ? "DEFENSA" : "COUNSEL"}
              </span>
            </h2>
          </div>

          <div className="text-sm text-[#CBD5E1] max-w-sm font-light">
            {isEs
              ? "Atención ejecutiva internacional presencial y telemática en Miami, Londres y Bogotá."
              : "Executive private consultations across our principal chambers in Miami, London, and Bogotá."}
          </div>
        </div>

        {/* Top Feature: The High-Prominence Consultation Form */}
        <div className="mb-20">
          <ConsultationForm />
        </div>

        {/* Bottom Section: Location & Google Maps View */}
        <div className="mt-16 pt-16 border-t border-white/10">
          {/* Section Header styled as in reference screenshot */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#FFFFFF] tracking-tight">
                {isEs ? "Ubicación" : "Location"}
              </h3>
              <p className="text-sm text-[#94A3B8] mt-2 max-w-xl">
                {isEs
                  ? "Estamos en el corazón financiero de Brickell, listos para coordinar su representación jurídica y defensa patrimonial."
                  : "We are situated in the core of Brickell Financial District, prepared to orchestrate strategic counsel and capital recovery."}
              </p>
            </div>

            {/* City Selector Tabs */}
            <div className="flex items-center gap-2 bg-[#0E131E] p-1.5 rounded-lg border border-white/10 self-start md:self-auto">
              {offices.map((office) => {
                const isSelected = selectedCity === office.city;
                return (
                  <button
                    key={office.city}
                    onClick={() => {
                      tactileAudio.playClick();
                      setSelectedCity(office.city);
                    }}
                    data-cursor="SELECT"
                    className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase transition-all rounded cursor-pointer ${
                      isSelected
                        ? "bg-[#D4AF37] text-[#0A0B0E] font-bold shadow-md shadow-[#D4AF37]/20"
                        : "text-[#94A3B8] hover:text-[#FFFFFF] hover:bg-white/5"
                    }`}
                  >
                    {office.city}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2-Column Layout matching reference screenshot with dark luxury styling */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Office Details */}
            <div className="lg:col-span-4 bg-[#161C2B] border border-white/15 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div className="space-y-6">
                <div>
                  <div className="text-[11px] font-mono tracking-[0.2em] text-[#D4AF37] uppercase font-bold">
                    {isEs ? "Oficina" : "Chambers"}
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#FFFFFF] mt-1">
                    {activeOffice.city}, {activeOffice.country}
                  </h4>
                </div>

                {/* Exact formatted address */}
                <div className="bg-[#0E131E]/80 border border-white/10 p-4 rounded-md">
                  <div className="text-xs font-mono text-[#64748B] uppercase mb-1">
                    {isEs ? "Dirección física" : "Physical Address"}
                  </div>
                  <p className="text-sm text-[#F1F5F9] font-medium leading-relaxed">
                    {activeOffice.address}
                  </p>
                  
                  <button
                    onClick={handleCopyAddress}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-[#D4AF37] hover:text-[#FDE047] transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span className="text-green-400 font-semibold">
                          {isEs ? "¡Dirección copiada!" : "Address copied!"}
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{isEs ? "Copiar dirección" : "Copy address"}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Direct Communications */}
                <div className="space-y-3.5 text-xs font-mono text-[#CBD5E1]">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                    <div>
                      <span className="text-[#64748B] block text-[10px]">
                        {isEs ? "Línea Directa" : "Direct Phone"}
                      </span>
                      <a
                        href={`tel:${activeOffice.phone}`}
                        className="text-[#F1F5F9] hover:text-[#D4AF37] transition-colors text-sm font-semibold"
                      >
                        {activeOffice.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                    <div>
                      <span className="text-[#64748B] block text-[10px]">
                        {isEs ? "Expedientes & Consultas" : "Intake & Mail"}
                      </span>
                      <a
                        href={`mailto:${activeOffice.email}`}
                        className="text-[#CBD5E1] hover:text-[#D4AF37] transition-colors"
                      >
                        {activeOffice.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                    <div>
                      <span className="text-[#64748B] block text-[10px]">
                        {isEs ? "Zona Horaria & Operaciones" : "Timezone & Hours"}
                      </span>
                      <span className="text-[#CBD5E1]">{activeOffice.timezone}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/10 mt-6 space-y-2.5">
                <a
                  href={activeOffice.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#D4AF37] hover:bg-[#FDE047] text-[#0A0B0E] text-xs font-mono tracking-wider uppercase font-bold rounded transition-all shadow-md hover:shadow-lg hover:shadow-[#D4AF37]/25"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{isEs ? "Cómo llegar" : "Get Directions"}</span>
                </a>

                <a
                  href={activeOffice.gmapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white/5 hover:bg-white/10 text-[#CBD5E1] hover:text-[#FFFFFF] text-xs font-mono tracking-wider uppercase rounded border border-white/10 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{isEs ? "Abrir en Google Maps" : "Open in Google Maps"}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Google Maps Embed with Authentic Overlay Card */}
            <div className="lg:col-span-8 relative min-h-[420px] sm:min-h-[480px] bg-[#0E131E] border border-white/15 rounded-none overflow-hidden shadow-2xl flex flex-col">
              {/* Authentic Google Maps Floating Place Card (Matching user screenshot) */}
              <div className="absolute top-4 left-4 z-20 max-w-[280px] sm:max-w-[320px] bg-white text-gray-900 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.35)] p-3 sm:p-3.5 flex items-start justify-between gap-3 border border-gray-200">
                <div className="min-w-0 pr-1">
                  <h5 className="text-sm font-semibold text-gray-900 truncate">
                    {activeOffice.city === "Miami" ? "1100 Brickell Bay Dr" : activeOffice.address.split(",")[0]}
                  </h5>
                  <p className="text-[11px] text-gray-600 truncate mt-0.5">
                    {activeOffice.address}
                  </p>
                  <a
                    href={activeOffice.gmapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-blue-600 hover:text-blue-800 hover:underline mt-1 font-medium"
                  >
                    <span>{isEs ? "Ver mapa más grande" : "View larger map"}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Google Maps Blue Directions Button */}
                <a
                  href={activeOffice.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Cómo llegar"
                  title={isEs ? "Cómo llegar" : "Directions"}
                  className="flex-shrink-0 w-9 h-9 rounded-full bg-[#1A73E8] hover:bg-[#1557b0] text-white flex items-center justify-center shadow transition-all hover:scale-105"
                >
                  <Navigation className="w-4 h-4 fill-white rotate-45 -ml-0.5" />
                </a>
              </div>

              {/* Map Type Switcher overlay (Satellite / Default) */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-[#0E131E]/80 backdrop-blur-sm p-1 rounded-md border border-white/15 shadow">
                <button
                  type="button"
                  onClick={() => setMapMode("m")}
                  className={`px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase rounded transition-colors ${
                    mapMode === "m"
                      ? "bg-[#D4AF37] text-[#0A0B0E] font-bold"
                      : "text-[#94A3B8] hover:text-white"
                  }`}
                >
                  {isEs ? "Mapa" : "Map"}
                </button>
                <button
                  type="button"
                  onClick={() => setMapMode("k")}
                  className={`px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase rounded transition-colors ${
                    mapMode === "k"
                      ? "bg-[#D4AF37] text-[#0A0B0E] font-bold"
                      : "text-[#94A3B8] hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-1">
                    <Layers className="w-3 h-3" />
                    <span>{isEs ? "Satélite" : "Satellite"}</span>
                  </span>
                </button>
              </div>

              {/* The Live Interactive Google Maps Iframe */}
              <div className="w-full h-full min-h-[420px] sm:min-h-[480px] flex-1 relative bg-[#1a202c]">
                <iframe
                  title={`Google Maps - ${activeOffice.city}`}
                  src={embedMapUrl}
                  width="100%"
                  height="100%"
                  className="absolute inset-0 w-full h-full border-0 filter saturate-[1.1] contrast-[1.05]"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Subtle Bottom Bar Badge */}
              <div className="bg-[#0A0B0E] border-t border-white/10 px-4 py-2 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span>
                    {activeOffice.city.toUpperCase()} // 1100 BRICKELL BAY DR // ACTIVE CHAMBERS
                  </span>
                </div>
                <a
                  href={activeOffice.gmapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition-colors hidden sm:inline"
                >
                  GOOGLE MAPS VERIFIED LOCATION &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
