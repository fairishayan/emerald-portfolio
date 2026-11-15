"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Brain, Compass, Target, Sparkles } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="Vision and Journey"
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
          <div className="max-w-4xl mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#5eead4]/10 border border-[#5eead4]/30 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-[#5eead4] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#5eead4]" />
              <span>Engineering Vision</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#e2f1ea] leading-tight mb-6">
              From Code Craft to Mathematical Solutions.
            </h2>
            <p className="text-lg sm:text-xl font-normal text-[#85b8a5] leading-relaxed tracking-tight">
              My work evolved from building typical web interfaces to tackling tough real-world constraints through mathematics and machine learning.
            </p>
          </div>

          {/* Emerald Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Card 1: Foundations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="md:col-span-7 bg-[#133c2e]/60 rounded-3xl p-8 border border-[#2d6a55]/50 hover:border-[#5eead4]/50 backdrop-blur-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5eead4] flex items-center gap-2">
                    <Code className="w-4 h-4 text-[#5eead4]" />
                    Phase 1: Foundations and Systems
                  </span>
                  <span className="text-xs font-mono text-[#85b8a5]">2021 to 2023</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#e2f1ea] mb-4">
                  Mastering Core Programming and Backend Architecture
                </h3>
                <p className="text-base sm:text-lg text-[#85b8a5] leading-relaxed mb-6">
                  I spent my early years deeply studying Python, Java, JavaScript, and relational databases. I built REST services, managed transactional data in PostgreSQL, and learned the discipline of writing maintainable, resilient code.
                </p>
              </div>
              <div className="pt-6 border-t border-[#2d6a55]/40 text-xs font-semibold text-[#5eead4]/80 uppercase tracking-wider">
                Focus: Clean system boundaries and dependable backends
              </div>
            </motion.div>

            {/* Card 2: Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="md:col-span-5 bg-[#0d2a20]/80 text-[#e2f1ea] rounded-3xl p-8 border border-[#2d6a55]/60 hover:border-[#5eead4]/50 backdrop-blur-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5eead4] block mb-6 flex items-center gap-2">
                  <Brain className="w-4 h-4 text-[#5eead4]" />
                  Engineering Creed
                </span>
                <blockquote className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#e2f1ea] leading-snug mb-6">
                  &ldquo;Writing code is just the final step. The real breakthrough begins with how clearly you define the problem.&rdquo;
                </blockquote>
              </div>
              <p className="text-sm text-[#85b8a5] leading-relaxed">
                I focus on constraint models, mathematical solvers, and creating software that enhances human capability rather than replacing it.
              </p>
            </motion.div>

            {/* Card 3: Real World Problem Solving */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="md:col-span-5 bg-[#133c2e]/60 rounded-3xl p-8 border border-[#2d6a55]/50 hover:border-[#5eead4]/50 backdrop-blur-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5eead4] flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#5eead4]" />
                    Phase 2: Real World Problems
                  </span>
                  <span className="text-xs font-mono text-[#85b8a5]">Discovery</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#e2f1ea] mb-4">
                  Constraint Satisfaction for Rural Schools
                </h3>
                <p className="text-base sm:text-lg text-[#85b8a5] leading-relaxed mb-6">
                  Learning that over 9,000 rural schools in India have only one teacher inspired me to study discrete constraint satisfaction. I used Google OR-Tools to solve teacher schedules mathematically so no classroom is neglected.
                </p>
              </div>
              <div className="pt-6 border-t border-[#2d6a55]/40 text-xs font-semibold text-[#5eead4]/80 uppercase tracking-wider">
                Applied OR-Tools CP-SAT solver to real societal logistics
              </div>
            </motion.div>

            {/* Card 4: Present Direction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="md:col-span-7 bg-[#133c2e]/60 rounded-3xl p-8 border border-[#2d6a55]/50 hover:border-[#5eead4]/50 backdrop-blur-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5eead4] flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#5eead4]" />
                    Phase 3: Current Research
                  </span>
                  <span className="text-xs font-mono text-[#85b8a5]">Present</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#e2f1ea] mb-4">
                  Embodied Intelligence and Human AI Alignment
                </h3>
                <p className="text-base sm:text-lg text-[#85b8a5] leading-relaxed mb-6">
                  Today, my research centers on how artificial intelligence can understand physical environments and act safely. I want to build systems with clear boundary constraints that people can trust and inspect.
                </p>
              </div>
              <div className="pt-6 border-t border-[#2d6a55]/40 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-semibold text-[#85b8a5] uppercase tracking-wider">
                  Open to research collaborations and internships
                </span>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#5eead4] hover:text-[#34d399] transition-colors"
                >
                  <span>Connect with me</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
