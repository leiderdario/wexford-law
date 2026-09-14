"use client";

import React, { useState } from "react";
import { CustomCursor } from "@/components/cursor/CustomCursor";
import { CinematicPreloader } from "@/components/preloader/CinematicPreloader";
import { SmoothScroll } from "@/components/navigation/SmoothScroll";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";
import { CapitalRecovery } from "@/components/sections/CapitalRecovery";
import { AuthorityStats } from "@/components/sections/AuthorityStats";
import { AttorneyProfile } from "@/components/sections/AttorneyProfile";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { ClimaxCTA } from "@/components/sections/ClimaxCTA";
import { ContactSection } from "@/components/sections/InteractiveMap";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#0A0B0E] text-[#E2E8F0] selection:bg-[#C5A880] selection:text-[#0A0B0E] overflow-x-hidden">
        {/* Custom Lerping Cursor */}
        <CustomCursor />

        {/* Cinematic Preloader */}
        <CinematicPreloader onComplete={() => setIntroFinished(true)} />

        {/* Floating / Morphing Navbar */}
        <Navbar />

        {/* Main Experience Stream */}
        <main className={`relative z-10 transition-opacity duration-700 ${introFinished ? "opacity-100" : "opacity-90"}`}>
          {/* 01 // Hero */}
          <Hero />

          {/* 02 // Services Pinned & Horizontal Experience */}
          <ServicesShowcase />

          {/* 03 // Capital & Asset Recovery Spotlight */}
          <CapitalRecovery />

          {/* 04 // Authority & Counting Metrics */}
          <AuthorityStats />

          {/* 05 // Managing Partner Profile */}
          <AttorneyProfile />

          {/* 06 // Case Studies & Strategic Precedents */}
          <CaseStudies />

          {/* 07 // Reputation & Testimonials */}
          <Testimonials />

          {/* 08 // Climax Call-To-Action */}
          <ClimaxCTA />

          {/* 09 // Progressive Consultation Intake & Global Chambers */}
          <ContactSection />
        </main>

        {/* 10 // Footer & Easter Egg */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
