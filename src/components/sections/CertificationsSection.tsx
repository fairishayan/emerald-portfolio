"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certificationsData, CertificationItem } from "@/data/certifications";

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      aria-label="Certifications and Workshops"
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
              <Award className="w-4 h-4 text-[#5eead4]" />
              <span>Professional Development</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#e2f1ea] tracking-tight leading-tight mb-6">
              Certifications and Workshops.
            </h2>
            <p className="text-lg sm:text-xl text-[#85b8a5] max-w-3xl mx-auto font-normal leading-relaxed tracking-tight">
              Intensive hands-on technical workshops covering machine learning algorithms, neural network design, and practical software integration.
            </p>
          </div>

          {/* Bento Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certificationsData.map((item: CertificationItem, idx: number) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-[#133c2e]/60 rounded-3xl p-8 border border-[#2d6a55]/50 hover:border-[#5eead4]/50 backdrop-blur-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4">
                    <span className="inline-block rounded-full bg-[#5eead4]/10 text-[#5eead4] border border-[#5eead4]/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-[#e2f1ea] mb-2">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#5eead4] mb-4">
                    {item.issuer}
                  </div>
                  <p className="text-base text-[#85b8a5] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
