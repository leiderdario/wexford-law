"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export function CinematicPreloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const titleLeftRef = useRef<HTMLSpanElement>(null);
  const titleRightRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const monogramRef = useRef<HTMLDivElement>(null);
  const curtainTopRef = useRef<HTMLDivElement>(null);
  const curtainBottomRef = useRef<HTMLDivElement>(null);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Check if user already saw preloader in this session
    const seen = sessionStorage.getItem("wexford_intro_seen");
    if (seen) {
      onComplete();
      setRemoved(true);
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem("wexford_intro_seen", "true");
          onComplete();
          setTimeout(() => setRemoved(true), 600);
        },
      });

      // 01 Initial states
      gsap.set([titleLeftRef.current, titleRightRef.current], { yPercent: 120, opacity: 0 });
      gsap.set(subtitleRef.current, { opacity: 0, y: 15 });
      gsap.set(monogramRef.current, { scale: 0.8, opacity: 0 });
      gsap.set(lineRef.current, { scaleX: 0 });

      // 02 Monogram & subtle horizontal line expand
      tl.to(monogramRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      })
      .to(lineRef.current, {
        scaleX: 1,
        duration: 0.9,
        ease: "power4.inOut",
      }, "-=0.4")

      // 03 Split typography reveal: "WEXFORD" + "INTERNATIONAL"
      .to([titleLeftRef.current, titleRightRef.current], {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      }, "-=0.5")

      // 04 Subtitle: "EST. 2009 — INTERNATIONAL LITIGATION"
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      }, "-=0.4")

      // Brief hold for dramatic gravitas
      .to({}, { duration: 0.5 })

      // 05 Typography splits outward horizontally
      .to(titleLeftRef.current, {
        x: -40,
        opacity: 0,
        duration: 0.6,
        ease: "power3.in",
      })
      .to(titleRightRef.current, {
        x: 40,
        opacity: 0,
        duration: 0.6,
        ease: "power3.in",
      }, "<")
      .to([monogramRef.current, subtitleRef.current, lineRef.current], {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      }, "<")

      // 06 Cinematic curtains split open (curtainTop up, curtainBottom down)
      .to(curtainTopRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: "power4.inOut",
      })
      .to(curtainBottomRef.current, {
        yPercent: 100,
        duration: 0.9,
        ease: "power4.inOut",
      }, "<");
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (removed) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] flex items-center justify-center pointer-events-none select-none overflow-hidden"
    >
      {/* Top curtain */}
      <div
        ref={curtainTopRef}
        className="absolute top-0 left-0 w-full h-1/2 bg-[#08090C] border-b border-[#C5A880]/15 pointer-events-auto"
      />

      {/* Bottom curtain */}
      <div
        ref={curtainBottomRef}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#08090C] border-t border-[#C5A880]/15 pointer-events-auto"
      />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-xl">
        {/* Monogram */}
        <div
          ref={monogramRef}
          className="w-16 h-16 mb-6 rounded-full border border-[#C5A880]/40 flex items-center justify-center bg-[#0D0F14]/90 shadow-[0_0_30px_rgba(197,168,128,0.2)]"
        >
          <span className="font-serif text-lg tracking-widest text-[#C5A880] font-bold">W</span>
        </div>

        {/* Split brand title */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-[0.14em] sm:tracking-[0.18em] text-[#F3F4F6] overflow-hidden py-2 text-center">
          <span ref={titleLeftRef} className="inline-block transform">
            WEXFORD
          </span>
          <span ref={titleRightRef} className="inline-block text-[#C5A880] transform">
            INTERNATIONAL
          </span>
        </div>

        {/* Dynamic expanding line */}
        <div
          ref={lineRef}
          className="w-48 sm:w-64 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880] to-transparent my-5 origin-center"
        />

        {/* Subtitle */}
        <div
          ref={subtitleRef}
          className="text-[10px] sm:text-xs tracking-[0.35em] text-[#94A3B8] uppercase font-mono"
        >
          Counsel &amp; Strategic Litigation
        </div>
      </div>
    </div>
  );
}
