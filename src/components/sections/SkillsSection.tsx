"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, Sparkles } from "lucide-react";
import { skillsData, SkillCategory } from "@/data/skills";

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      aria-label="Skills and Technical Repertoire"
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
              <Cpu className="w-3.5 h-3.5 text-[#5eead4]" />
              <span>Technical Specifications</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#e2f1ea] leading-tight mb-6">
              Skills and Engineering Disciplines.
            </h2>
            <p className="text-lg sm:text-xl text-[#85b8a5] max-w-3xl mx-auto font-normal leading-relaxed tracking-tight">
              A comprehensive matrix of constraint solvers, machine learning frameworks, databases, and backend systems.
            </p>
          </div>

          {/* Spec Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((cat: SkillCategory, idx: number) => {
              const isFeatured = idx === 0;

              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`relative rounded-3xl p-8 border backdrop-blur-md transition-all flex flex-col justify-between ${
                    isFeatured
                      ? "md:col-span-2 bg-[#1f5644]/80 border-[#34d399]/50 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                      : "bg-[#133c2e]/60 border-[#2d6a55]/50 hover:border-[#5eead4]/50"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-[#85b8a5] uppercase tracking-wider">
                        Module 0{idx + 1}
                      </span>
                      {isFeatured && (
                        <span className="bg-[#5eead4] text-[#0a1f18] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                          <Sparkles className="w-3 h-3 text-[#0a1f18]" />
                          Core Focus
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight text-[#e2f1ea] mb-6">
                      {cat.title}
                    </h3>

                    {/* Emerald Spec Chips */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="inline-flex items-center gap-1.5 rounded-full bg-[#2d6a55]/30 border border-[#5eead4]/30 px-3.5 py-1.5 text-xs font-semibold text-[#5eead4] hover:bg-[#2d6a55]/50 transition-colors"
                        >
                          <span>{skill.name}</span>
                          <span className="text-[#85b8a5] font-normal text-[11px]">({skill.tag})</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#2d6a55]/40 text-xs font-semibold text-[#85b8a5] uppercase tracking-wider flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[#5eead4]" />
                    <span>Tested across production code and research experiments</span>
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
