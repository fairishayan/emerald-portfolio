"use client";

import React, { useState } from "react";
import Link from "next/link";
import { socials } from "@/data/socials";

export const GlobalNav: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Overview", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Research", href: "#research" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white select-none">
      <div className="mx-auto flex h-11 max-w-[1024px] items-center justify-between px-6 text-fine-print">
        {/* Brand identity */}
        <Link
          href="#hero"
          className="font-semibold text-white hover:opacity-80 transition-opacity"
          aria-label="Fairish Ayan"
        >
          Fairish Ayan
        </Link>

        {/* Desktop Links */}
        <nav className="hidden items-center space-x-7 md:flex" aria-label="Global navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white hover:opacity-80 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Plain text utility links */}
        <div className="hidden items-center space-x-5 md:flex">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition-opacity"
          >
            GitHub
          </a>
          <a
            href={`mailto:${socials.email}`}
            className="text-white hover:opacity-80 transition-opacity"
          >
            Email
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white hover:opacity-80 md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-4 md:hidden">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-caption text-white hover:opacity-80"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-3 border-t border-white/10 text-fine-print">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-80"
              >
                GitHub
              </a>
              <a href={`mailto:${socials.email}`} className="text-white hover:opacity-80">
                Email
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
