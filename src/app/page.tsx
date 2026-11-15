import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactFeedbackSection } from "@/components/sections/ContactFeedbackSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ResearchSection />
      <EducationSection />
      <CertificationsSection />
      <ContactFeedbackSection />
    </>
  );
}

