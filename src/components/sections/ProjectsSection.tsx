"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projects";

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      aria-label="Flagship Projects"
      className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="mx-auto max-w-[1240px] w-full">
        {/* Intro Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#5eead4]/10 border border-[#5eead4]/30 px-5 py-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#5eead4] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#5eead4]" />
            <span>Flagship Implementations</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#e2f1ea] leading-tight mb-6">
            Engineered Systems and Research.
          </h2>
          <p className="text-lg sm:text-xl text-[#85b8a5] max-w-3xl mx-auto font-normal leading-relaxed">
            Every project was built to solve a real practical problem, from clinical medical screening to automated school timetables.
          </p>
        </motion.div>

        {/* Alternating Emerald GlassCards */}
        <div className="space-y-10 md:space-y-14">
          {projectsData.map((project: ProjectItem, index: number) => {
            const tints = [
              "bg-gradient-to-b from-[#1a4a3a]/80 to-[#0f2e23]/80 border-[#2d6a55]/50",
              "bg-gradient-to-b from-[#1f5644]/85 to-[#12392c]/85 border-[#34d399]/40",
              "bg-gradient-to-b from-[#143e31]/80 to-[#0b271e]/85 border-[#2d6a55]/40",
            ];
            const currentTint = tints[index % 3];

            return (
              <motion.div
                key={project.id}
                id={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`group relative rounded-[2.5rem] ${currentTint} backdrop-blur-xl border p-8 sm:p-12 md:p-14 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_20px_50px_rgba(0,0,0,0.5)] transition-all overflow-hidden`}
              >
                {/* Subtle Top Inner Glow */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5eead4]/40 to-transparent pointer-events-none" />

                {/* Top Kicker & Action Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-block bg-[#0a1f18]/80 text-[#5eead4] border border-[#5eead4]/30 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#85b8a5]">
                      {project.role}
                    </span>
                  </div>

                  {/* Mint Pill CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-[#5eead4] text-[#0a1f18] px-5 py-2 text-xs sm:text-sm font-bold hover:bg-[#34d399] hover:shadow-[0_0_20px_rgba(94,234,212,0.6)] active:scale-95 transition-all flex items-center gap-2 shadow-md"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-[#5eead4]/40 bg-[#133c2e]/60 text-[#e2f1ea] px-5 py-2 text-xs sm:text-sm font-semibold hover:bg-[#133c2e] hover:border-[#5eead4] active:scale-95 transition-all flex items-center gap-2"
                      >
                        <Github className="w-3.5 h-3.5 text-[#5eead4]" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title & Tagline */}
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#e2f1ea] mb-2">
                  {project.title}
                </h3>
                <p className="text-lg sm:text-xl font-medium text-[#5eead4] mb-6">
                  {project.tagline}
                </p>

                {/* Human Story Abstract */}
                <p className="text-base sm:text-lg text-[#85b8a5] leading-relaxed max-w-4xl mb-8">
                  {project.abstract}
                </p>

                {/* Glass Spec / Metric Boxes */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-4 rounded-2xl bg-[#0d2a20]/60 border border-[#2d6a55]/40 backdrop-blur-md"
                      >
                        <div className="text-2xl sm:text-3xl font-black text-[#e2f1ea] mb-1">
                          {m.value}
                        </div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-[#85b8a5]">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Unique Implementation Points */}
                <div className="mb-8 space-y-2.5 p-6 rounded-2xl bg-[#0d2a20]/50 border border-[#2d6a55]/40">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#5eead4] mb-2">
                    Key Highlights
                  </div>
                  {project.details.map((detail, dIdx) => (
                    <div
                      key={dIdx}
                      className="text-sm sm:text-base text-[#85b8a5] flex items-start gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5eead4] shrink-0 mt-2" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Emerald Tech Stack Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#2d6a55]/40">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#85b8a5] mr-2">
                    Stack:
                  </span>
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[#2d6a55]/30 text-[#5eead4] border border-[#5eead4]/30 px-3.5 py-1 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
