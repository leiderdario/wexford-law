"use client";

import React, { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { SITE_CONFIG } from "@/config/site";
import { ConsultationForm } from "@/components/sections/ConsultationForm";
import { MapPin, Phone, Mail, Clock, Globe2 } from "lucide-react";
import { tactileAudio } from "@/utils/audio";

export function ContactSection() {
  const { isEs } = useLanguage();
  const offices = SITE_CONFIG.offices;
  const [selectedCity, setSelectedCity] = useState<string>("New York");

  const activeOffice = offices.find((o) => o.city === selectedCity) || offices[0];

  return (
    <section
      id="contact"
      className="relative w-full bg-[#111622] py-28 px-6 sm:px-12 lg:px-20 border-t border-white/10 overflow-hidden"
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
              ? "Atención ejecutiva internacional presencial y telemática en Nueva York, Londres y Bogotá."
              : "Executive private consultations across our principal chambers in New York, London, and Bogotá."}
          </div>
        </div>

        {/* Top Feature: The High-Prominence Consultation Form */}
        <div className="mb-20">
          <ConsultationForm />
        </div>

        {/* Bottom Section: Global Chambers & Cartographic Map */}
        <div className="mt-16 pt-16 border-t border-white/10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFFFFF]">
              {isEs ? "Cámaras Globales de Litigio" : "Global Chambers & Seats"}
            </h3>
            {/* City Selector Tabs */}
            <div className="flex items-center gap-2">
              {offices.map((office) => (
                <button
                  key={office.city}
                  onClick={() => {
                    tactileAudio.playClick();
                    setSelectedCity(office.city);
                  }}
                  data-cursor="SELECT"
                  className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all cursor-pointer ${
                    selectedCity === office.city
                      ? "text-[#D4AF37] border-b-2 border-[#D4AF37] font-bold"
                      : "text-[#94A3B8] hover:text-[#FFFFFF]"
                  }`}
                >
                  {office.city}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Active Chamber Details */}
            <div className="lg:col-span-5 glass-panel p-8 rounded-none border border-white/15 bg-[#161C2B] flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
                    {activeOffice.country}
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#FFFFFF] mt-1">
                    Wexford Chambers {activeOffice.city}
                  </h4>
                </div>

                <div className="space-y-4 text-xs font-mono text-[#E2E8F0]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>{activeOffice.address}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                    <a
                      href={`tel:${activeOffice.phone}`}
                      className="hover:text-[#D4AF37] transition-colors font-medium text-sm"
                    >
                      {activeOffice.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                    <a
                      href={`mailto:${activeOffice.email}`}
                      className="hover:text-[#D4AF37] transition-colors"
                    >
                      {activeOffice.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-white/10 mt-6 text-xs font-mono">
                <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span className="text-[#CBD5E1]">{activeOffice.timezone}</span>
              </div>
            </div>

            {/* Stylized Map View */}
            <div className="lg:col-span-7 relative min-h-[260px] bg-[#0E131E] border border-white/15 overflow-hidden flex items-center justify-center p-6">
              <div className="absolute inset-0 opacity-25 bg-[linear-gradient(to_right,#2a364d_1px,transparent_1px),linear-gradient(to_bottom,#2a364d_1px,transparent_1px)] bg-[size:1.8rem_1.8rem]" />
              
              <Globe2 className="w-48 h-48 text-white/5 absolute pointer-events-none" />

              {/* Pins on coordinate map */}
              {offices.map((office) => {
                const isActive = office.city === selectedCity;
                return (
                  <div
                    key={office.city}
                    onClick={() => setSelectedCity(office.city)}
                    className="absolute cursor-pointer group"
                    style={{
                      left: `${office.coordinates.x}%`,
                      top: `${office.coordinates.y}%`,
                    }}
                  >
                    <div
                      className={`relative -ml-2 -mt-2 w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-[#D4AF37] shadow-[0_0_20px_#FDE047] scale-125"
                          : "bg-[#273349] hover:bg-[#D4AF37]/70"
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full bg-[#0E131E]" />
                    </div>
                    <span
                      className={`absolute left-6 -top-1 text-[10px] font-mono tracking-wider whitespace-nowrap uppercase font-semibold ${
                        isActive ? "text-[#FDE047] font-bold" : "text-[#94A3B8]"
                      }`}
                    >
                      {office.city}
                    </span>
                  </div>
                );
              })}

              <div className="absolute bottom-3 right-4 text-[10px] font-mono text-[#CBD5E1] uppercase">
                WEXFORD CARTOGRAPHIC NETWORK // ACTIVE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
