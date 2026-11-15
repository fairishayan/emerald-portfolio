import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { socials, socialLinksList } from "@/data/socials";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a1f18]/90 text-[#85b8a5] py-16 text-xs border-t border-[#2d6a55]/40 select-none">
      <div className="mx-auto max-w-[1240px] px-6">
        {/* Multi-column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-[#2d6a55]/40">
          {/* Column 1: Navigation */}
          <div>
            <h3 className="text-sm font-bold text-[#e2f1ea] mb-4 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#hero" className="hover:text-[#5eead4] transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#5eead4] transition-colors">
                  Engineering Vision
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-[#5eead4] transition-colors">
                  Flagship Work
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-[#5eead4] transition-colors">
                  Specifications &amp; Skills
                </Link>
              </li>
              <li>
                <Link href="#research" className="hover:text-[#5eead4] transition-colors">
                  Research Inquiry
                </Link>
              </li>
              <li>
                <Link href="#education" className="hover:text-[#5eead4] transition-colors">
                  Academic Milestones
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Selected Projects */}
          <div>
            <h3 className="text-sm font-bold text-[#e2f1ea] mb-4 uppercase tracking-wider">
              Selected Projects
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#chestxr" className="hover:text-[#5eead4] transition-colors">
                  ChestXR (Vision)
                </a>
              </li>
              <li>
                <a href="#studyplay" className="hover:text-[#5eead4] transition-colors">
                  StudyPlay EdTech
                </a>
              </li>
              <li>
                <a href="#smart-classroom-scheduler" className="hover:text-[#5eead4] transition-colors">
                  Classroom Scheduler
                </a>
              </li>
              <li>
                <a href="#elms" className="hover:text-[#5eead4] transition-colors">
                  Behavioral ELMS
                </a>
              </li>
              <li>
                <a href="#documind" className="hover:text-[#5eead4] transition-colors">
                  DocuMind RAG
                </a>
              </li>
              <li>
                <a href="#visionguard" className="hover:text-[#5eead4] transition-colors">
                  VisionGuard Pipeline
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect & Social */}
          <div>
            <h3 className="text-sm font-bold text-[#e2f1ea] mb-4 uppercase tracking-wider">
              Connect
            </h3>
            <ul className="space-y-2.5 text-sm">
              {socialLinksList.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#5eead4] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${socials.email}`} className="hover:text-[#5eead4] transition-colors">
                  Direct Email
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Focus & Status */}
          <div>
            <h3 className="text-sm font-bold text-[#e2f1ea] mb-4 uppercase tracking-wider">
              Identity &amp; Status
            </h3>
            <p className="text-sm text-[#85b8a5] leading-relaxed mb-3">
              <strong className="text-[#e2f1ea]">Fairish Ayan</strong>
              <br />
              Independent Researcher &amp; Builder
              <br />
              Lucknow, Uttar Pradesh, India
            </p>
            <p className="text-xs text-[#85b8a5]/80 leading-relaxed">
              BCA graduate from Integral University (2023 to 2026) with Semesters 4 to 6 SGPA 9.50. M.Sc. Computer Science (AI) at Sacred Heart College, Thevara (Discontinued).
            </p>
          </div>
        </div>

        {/* Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#85b8a5] gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#5eead4]" />
            <span>&copy; {currentYear} Fairish Ayan. Emerald Glass Design.</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#hero" className="hover:text-[#5eead4] transition-colors">
              Back to top ↑
            </a>
            <a href={`mailto:${socials.email}`} className="hover:text-[#5eead4] transition-colors">
              {socials.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
