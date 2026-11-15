"use client";

import React from "react";
import { motion } from "framer-motion";
import { Network } from "lucide-react";
import { researchInterests, ResearchInterest } from "@/data/research";

export const ResearchSection: React.FC = () => {
  return (
    <section
      id="research"
      aria-label="Research Interests"
      className="relative w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="mx-auto max-w-[1240px] w-full">
        {/* Main Stacked Glass Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.5rem] bg-gradient-to-b from-[#1a4a3a]/80 to-[#0f2e23]/80 backdrop-blur-xl border border-[#2d6a55]/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 sm:p-12 md:p-16 relative overflow-hidden"
        >
          {/* Subtle Top Inner Glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5eead4]/40 to-transparent pointer-events-none" />

          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#5eead4]/10 border border-[#5eead4]/30 px-5 py-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#5eead4] mb-6">
              <Network className="w-3.5 h-3.5 text-[#5eead4]" />
              <span>Research Inquiry</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#e2f1ea] tracking-tight leading-tight mb-6">
              Research Interests and Theory.
            </h2>
            <p className="text-lg sm:text-xl text-[#85b8a5] max-w-3xl mx-auto font-normal leading-relaxed tracking-tight">
              Investigating how computational models perceive, reason, and act inside dynamic physical spaces while preserving human agency.
            </p>
          </div>

          {/* Emerald Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {researchInterests.map((item: ResearchInterest, idx: number) => {
              const colSpan = idx < 2 ? "md:col-span-6" : "md:col-span-4";

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`${colSpan} bg-[#133c2e]/60 rounded-3xl p-8 border border-[#2d6a55]/50 hover:border-[#5eead4]/50 backdrop-blur-md transition-all flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#5eead4]">
                        {item.subtitle}
                      </span>
                      <span className="text-xs font-mono text-[#85b8a5]">Node 0{idx + 1}</span>
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight text-[#e2f1ea] mb-4">
                      {item.title}
                    </h3>

                    <p className="text-base text-[#85b8a5] leading-relaxed font-normal mb-8">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#2d6a55]/40 text-xs font-semibold text-[#e2f1ea]">
                    <span className="text-[#5eead4] uppercase tracking-wider mr-1.5">Core Question:</span>
                    <span className="text-[#85b8a5]">{item.inquiryFocus}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
