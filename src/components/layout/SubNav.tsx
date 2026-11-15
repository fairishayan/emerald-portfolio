"use client";

import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export const SubNav: React.FC = () => {
  return (
    <nav
      className="sticky top-0 z-50 w-full h-[60px] bg-[#0a1f18]/85 backdrop-blur-xl border-b border-[#2d6a55]/40 select-none transition-all"
      aria-label="Portfolio Navigation"
    >
      <div className="mx-auto flex h-[60px] max-w-[1240px] items-center justify-between px-6">
        {/* Left: Brand Identity */}
        <Link
          href="#hero"
          className="flex items-center gap-2 text-lg font-black tracking-tight text-[#e2f1ea] hover:opacity-80 transition-opacity"
        >
          <span className="w-6 h-6 rounded-full bg-[#5eead4]/20 border border-[#5eead4]/40 text-[#5eead4] text-xs font-bold flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-[#5eead4]" />
          </span>
          <span className="font-extrabold tracking-tight">Fairish Ayan</span>
        </Link>

        {/* Right: Section Links + Mint CTA */}
        <div className="flex items-center space-x-6 sm:space-x-8">
          <div className="hidden md:flex items-center space-x-7 text-sm font-medium text-[#85b8a5]">
            <Link href="#about" className="hover:text-[#5eead4] transition-colors">
              Vision
            </Link>
            <Link href="#projects" className="hover:text-[#5eead4] transition-colors">
              Flagship Work
            </Link>
            <Link href="#skills" className="hover:text-[#5eead4] transition-colors">
              Specs &amp; Skills
            </Link>
            <Link href="#research" className="hover:text-[#5eead4] transition-colors">
              Research
            </Link>
            <Link href="#education" className="hover:text-[#5eead4] transition-colors">
              Education
            </Link>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#5eead4] px-5 py-2 text-xs sm:text-sm font-bold text-[#0a1f18] hover:bg-[#34d399] hover:shadow-[0_0_20px_rgba(94,234,212,0.5)] active:scale-95 transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
};
