"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface MagneticOptions {
  strength?: number; // 0 to 1
  textStrength?: number;
  radius?: number;
}

export function useMagnetic<T extends HTMLElement = HTMLButtonElement>(options: MagneticOptions = {}) {
  const { strength = 0.35, textStrength = 0.15, radius = 120 } = options;
  const elementRef = useRef<T | null>(null);
  const textRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Check touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" });
    let yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" });
    
    let textXTo = textRef.current ? gsap.quickTo(textRef.current, "x", { duration: 0.5, ease: "power3.out" }) : null;
    let textYTo = textRef.current ? gsap.quickTo(textRef.current, "y", { duration: 0.5, ease: "power3.out" }) : null;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.hypot(distanceX, distanceY);

      if (distance < radius) {
        // Magnetic pull within radius
        const pullFactor = 1 - distance / radius;
        const targetX = distanceX * strength * pullFactor;
        const targetY = distanceY * strength * pullFactor;

        xTo(targetX);
        yTo(targetY);

        if (textXTo && textYTo) {
          textXTo(distanceX * textStrength * pullFactor);
          textYTo(distanceY * textStrength * pullFactor);
        }
      } else {
        // Return to origin
        xTo(0);
        yTo(0);
        if (textXTo && textYTo) {
          textXTo(0);
          textYTo(0);
        }
      }
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
      if (textXTo && textYTo) {
        textXTo(0);
        textYTo(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength, textStrength, radius]);

  return { elementRef, textRef };
}
