"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { educationData, EducationItem } from "@/data/education";

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      aria-label="Education and Academic Background"
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
              <GraduationCap className="w-4 h-4 text-[#5eead4]" />
              <span>Academic Record</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#e2f1ea] tracking-tight leading-tight mb-6">
              Education and Academic Milestones.
            </h2>
            <p className="text-lg sm:text-xl text-[#85b8a5] max-w-3xl mx-auto font-normal leading-relaxed tracking-tight">
              A demonstrated discipline of habit restructuring, academic rigor, and consistent problem solving.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {educationData.map((item: EducationItem, idx: number) => {
              const isFeatured = idx === 1; // BCA is the degree

              return (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`rounded-3xl p-8 border backdrop-blur-md transition-all ${
                    isFeatured
                      ? "bg-[#1f5644]/80 border-[#34d399]/50 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                      : "bg-[#133c2e]/60 border-[#2d6a55]/50 hover:border-[#5eead4]/50"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <span className="text-xs font-bold text-[#5eead4] uppercase tracking-wider block mb-1">
                        {item.period}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#e2f1ea]">
                        {item.degree}
                      </h3>
                    </div>

                    <div className="inline-block rounded-full bg-[#5eead4]/10 border border-[#5eead4]/30 px-4 py-1.5 text-xs font-bold text-[#5eead4] self-start sm:self-auto uppercase tracking-wider">
                      {item.grade}
                    </div>
                  </div>

                  <div className="text-sm font-medium text-[#85b8a5] mb-6">
                    {item.institution}, {item.location}
                  </div>

                  <p className="text-base text-[#85b8a5] leading-relaxed font-normal mb-6">
                    {item.summary}
                  </p>

                  {item.highlights && item.highlights.length > 0 && (
                    <div className="space-y-2.5 pt-6 border-t border-[#2d6a55]/40">
                      {item.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="text-sm text-[#85b8a5] flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5eead4] shrink-0 mt-2" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
