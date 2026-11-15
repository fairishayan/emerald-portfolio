"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Overview"
      className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Ambient Emerald Lighting Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#34d399]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Stacked GlassCard for Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-[1240px] w-full rounded-[2.5rem] bg-gradient-to-b from-[#1a4a3a]/80 to-[#0f2e23]/80 backdrop-blur-xl border border-[#2d6a55]/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 sm:p-12 md:p-16 relative overflow-hidden"
      >
        {/* Subtle Inner Glow Highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5eead4]/40 to-transparent pointer-events-none" />

        {/* Emerald Status Pill */}
        <div className="inline-flex items-center gap-2 rounded-full bg-[#5eead4]/10 border border-[#5eead4]/30 px-5 py-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#5eead4] mb-8 shadow-[0_0_15px_rgba(94,234,212,0.15)]">
          <Sparkles className="w-3.5 h-3.5 text-[#5eead4]" />
          <span>Independent Researcher &amp; Builder</span>
        </div>

        {/* Massive Headline */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[#e2f1ea] leading-[0.92] mb-6">
          Fairish Ayan
        </h1>

        {/* Clear, Human Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl font-normal text-[#85b8a5] max-w-3xl mx-auto leading-relaxed tracking-tight mb-10">
          I build intelligent systems with machine learning, mathematical optimization, and clean engineering.
        </p>

        {/* Glowing Mint Pill Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <Link
            href="#projects"
            className="rounded-full bg-[#5eead4] text-[#0a1f18] px-8 py-3.5 text-base font-bold hover:bg-[#34d399] hover:shadow-[0_0_30px_rgba(94,234,212,0.6)] active:scale-95 transition-all flex items-center gap-2 shadow-lg"
          >
            <span>Explore Flagship Work</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#contact"
            className="rounded-full border border-[#5eead4]/40 bg-[#1a4a3a]/60 text-[#e2f1ea] px-8 py-3.5 text-base font-semibold hover:bg-[#1a4a3a] hover:border-[#5eead4] active:scale-95 transition-all flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-[#5eead4]" />
            <span>Get in Touch</span>
          </Link>
        </div>

        {/* CRITICAL FIX 1: Full-Body Portrait container: h-[80vh] min-h-[600px] w-full max-w-lg mx-auto */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="relative mx-auto mt-4 mb-12 max-w-lg w-full h-[80vh] min-h-[600px] rounded-[2.5rem] overflow-hidden border border-[#2d6a55]/60 shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-[#0d2a20]/80"
        >
          <Image
            src="/images/profile.jpg"
            alt="Fairish Ayan"
            fill
            sizes="(max-width: 768px) 100vw, 512px"
            unoptimized={true}
            priority
            className="object-cover object-top hover:scale-[1.02] transition-transform duration-700 ease-out"
          />

          {/* Bottom subtle gradient overlay on the image */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a1f18]/90 via-[#0a1f18]/40 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 inset-x-0 text-center text-xs font-semibold uppercase tracking-wider text-[#5eead4]">
            Embodied AI · Discrete Optimization · Human-Centered Systems
          </div>
        </motion.div>

        {/* Clean Emerald Glass Spec Ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-8 border-t border-[#2d6a55]/40 text-left">
          <div className="p-5 rounded-2xl bg-[#133c2e]/60 border border-[#2d6a55]/40 backdrop-blur-md">
            <div className="text-xs uppercase tracking-wider text-[#85b8a5] font-semibold mb-1">
              Academic Milestone
            </div>
            <div className="text-xl font-bold text-[#e2f1ea]">
              9.50 SGPA
            </div>
            <div className="text-xs text-[#85b8a5]/80">
              Semesters 4, 5, and 6 in BCA
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#133c2e]/60 border border-[#2d6a55]/40 backdrop-blur-md">
            <div className="text-xs uppercase tracking-wider text-[#85b8a5] font-semibold mb-1">
              Undergraduate Degree
            </div>
            <div className="text-xl font-bold text-[#e2f1ea]">
              BCA Graduate
            </div>
            <div className="text-xs text-[#85b8a5]/80">
              Integral University (2023 to 2026)
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#133c2e]/60 border border-[#2d6a55]/40 backdrop-blur-md">
            <div className="text-xs uppercase tracking-wider text-[#85b8a5] font-semibold mb-1">
              Research Focus
            </div>
            <div className="text-xl font-bold text-[#e2f1ea]">
              Optimization &amp; AI
            </div>
            <div className="text-xs text-[#85b8a5]/80">
              OR-Tools CP-SAT &amp; PyTorch
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
