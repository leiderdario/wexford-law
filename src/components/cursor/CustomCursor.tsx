"use client";

import React, { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [cursorText, setCursorText] = useState("");
  const [isStriking, setIsStriking] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      const isInteractive = target.closest("a, button, [role='button'], input, textarea, select");

      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute("data-cursor") || "");
        setIsHovered(true);
      } else if (isInteractive) {
        setCursorText("");
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => {
      setIsStriking(true);
      setTimeout(() => setIsStriking(false), 250);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  if (!pos) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999999] overflow-hidden select-none">
      {/* Dynamic Golden Companion Ring following mouse */}
      <div
        className="fixed top-0 left-0 transition-transform duration-75 ease-out pointer-events-none"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
        }}
      >
        {/* Soft Golden Ambient Halo */}
        <div
          className={`-ml-5 -mt-5 rounded-full border transition-all duration-200 pointer-events-none ${
            isHovered
              ? "w-10 h-10 border-[#FDE047] bg-[#D4AF37]/15 shadow-[0_0_20px_rgba(253,224,71,0.5)] scale-110"
              : "w-8 h-8 border-[#D4AF37]/40 bg-transparent"
          }`}
        />

        {/* Click Strike Shockwave */}
        {isStriking && (
          <div className="absolute -ml-8 -mt-8 w-16 h-16 rounded-full border-2 border-[#FDE047] animate-ping pointer-events-none" />
        )}

        {/* Floating Contextual Pill Label if active */}
        {cursorText && (
          <div className="absolute top-6 left-6 px-3 py-1 bg-[#111622]/95 border border-[#D4AF37] shadow-[0_4px_20px_rgba(0,0,0,0.8)] whitespace-nowrap">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#FDE047] font-bold uppercase">
              {cursorText}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
