import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SubNav } from "@/components/layout/SubNav";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fairish Ayan: Independent Researcher and Builder",
  description:
    "Portfolio of Fairish Ayan: Independent Researcher and Builder exploring embodied artificial intelligence, human-AI interaction, constraint optimization, and machine learning systems.",
  keywords: [
    "Fairish Ayan",
    "Artificial Intelligence",
    "Embodied AI",
    "Constraint Optimization",
    "OR-Tools",
    "Machine Learning",
    "Human AI Interaction",
    "Portfolio",
  ],
  authors: [{ name: "Fairish Ayan" }],
  openGraph: {
    title: "Fairish Ayan: Independent Researcher and Builder",
    description:
      "Building intelligent systems with deep learning, mathematical optimization, and human-centered design.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-gradient-to-br from-[#0a1f18] via-[#11362a] to-[#0d2a20] text-[#e2f1ea] font-sans antialiased selection:bg-[#5eead4]/35 selection:text-white">
        <SubNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
