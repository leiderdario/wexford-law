"use client";

import React from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { tactileAudio } from "@/utils/audio";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  cursorLabel?: string;
  className?: string;
}

export function MagneticButton({
  children,
  variant = "primary",
  size = "md",
  cursorLabel,
  className = "",
  onClick,
  ...props
}: MagneticButtonProps) {
  const { elementRef, textRef } = useMagnetic<HTMLButtonElement>({
    strength: 0.3,
    textStrength: 0.15,
    radius: 100,
  });

  const baseStyles =
    "relative inline-flex items-center justify-center font-medium uppercase tracking-[0.2em] transition-all duration-300 rounded-none overflow-hidden select-none group";

  const sizeStyles = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-8 py-4 text-xs md:text-sm",
    lg: "px-10 py-5 text-sm md:text-base",
  };

  const variantStyles = {
    primary:
      "bg-[#C5A880] text-[#0A0B0E] font-semibold hover:bg-[#D4AF37] border border-[#C5A880] shadow-[0_0_25px_rgba(197,168,128,0.25)] hover:shadow-[0_0_35px_rgba(197,168,128,0.5)]",
    secondary:
      "bg-[#151821] text-[#E2E8F0] border border-[#272A35] hover:border-[#C5A880]/60 hover:bg-[#1A1E29]",
    outline:
      "bg-transparent text-[#E2E8F0] border border-[#C5A880]/50 hover:border-[#C5A880] hover:text-[#C5A880] hover:bg-[#C5A880]/5",
    ghost:
      "bg-transparent text-[#94A3B8] hover:text-[#C5A880] border-transparent",
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    tactileAudio.playClick();
    if (onClick) onClick(e);
  };

  const handleMouseEnter = () => {
    tactileAudio.playHover();
  };

  return (
    <button
      ref={elementRef}
      data-cursor={cursorLabel}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {/* Subtle shine sweep effect on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
      
      <span ref={textRef} className="relative z-10 flex items-center gap-2 pointer-events-none">
        {children}
      </span>
    </button>
  );
}
