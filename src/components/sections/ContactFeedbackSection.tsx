"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Copy, Check, Send, MessageSquare, Sparkles } from "lucide-react";
import { socials, socialLinksList } from "@/data/socials";

export const ContactFeedbackSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "GENERAL" as "FEEDBACK" | "QUERY" | "COLLABORATION" | "GENERAL",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const submissionTypes: { label: string; value: "FEEDBACK" | "QUERY" | "COLLABORATION" | "GENERAL" }[] = [
    { label: "Collaboration or Mentorship", value: "COLLABORATION" },
    { label: "Research Inquiry", value: "QUERY" },
    { label: "General Feedback", value: "FEEDBACK" },
    { label: "Other Inquiries", value: "GENERAL" },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    setServerError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.issues && Array.isArray(data.issues)) {
          const fieldErrors: Record<string, string> = {};
          data.issues.forEach((issue: { field: string; message: string }) => {
            fieldErrors[issue.field] = issue.message;
          });
          setErrors(fieldErrors);
        } else {
          setServerError(data.error || "An error occurred while submitting your message.");
        }
      } else {
        setSuccessMessage(data.message || "Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          type: "GENERAL",
        });
      }
    } catch {
      setServerError("Network error: Could not connect to the submission server.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Feedback"
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
              <Sparkles className="w-3.5 h-3.5 text-[#5eead4]" />
              <span>Initiate Connection</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#e2f1ea] tracking-tight leading-tight mb-6">
              Let&apos;s Connect and Build Together.
            </h2>
            <p className="text-lg sm:text-xl text-[#85b8a5] max-w-3xl mx-auto font-normal leading-relaxed tracking-tight">
              Actively seeking research internships, academic mentorship, and engineering collaborations in artificial intelligence and constraint optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Direct Channels (Col span 5) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="rounded-3xl p-8 bg-[#133c2e]/60 border border-[#2d6a55]/50 backdrop-blur-md">
                <h3 className="text-2xl font-bold tracking-tight text-[#e2f1ea] mb-6 flex items-center gap-2.5">
                  <MessageSquare className="w-5 h-5 text-[#5eead4]" />
                  <span>Direct Contact</span>
                </h3>

                <div className="space-y-4">
                  {/* Email card */}
                  <div className="bg-[#0d2a20]/80 rounded-2xl p-5 border border-[#2d6a55]/40 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-wider text-[#85b8a5] mb-1 flex items-center gap-1.5 font-semibold">
                        <Mail className="w-3.5 h-3.5 text-[#5eead4]" />
                        <span>Direct Email</span>
                      </div>
                      <a
                        href={`mailto:${socials.email}`}
                        className="text-base font-semibold text-[#e2f1ea] hover:text-[#5eead4] transition-colors truncate block"
                      >
                        {socials.email}
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="shrink-0 rounded-full bg-[#2d6a55]/30 border border-[#5eead4]/30 px-3.5 py-1.5 text-xs font-semibold text-[#5eead4] hover:bg-[#2d6a55]/50 active:scale-95 transition-all flex items-center gap-1.5"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#34d399]" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Location card */}
                  <div className="bg-[#0d2a20]/80 rounded-2xl p-5 border border-[#2d6a55]/40">
                    <div className="text-xs uppercase tracking-wider text-[#85b8a5] mb-1 flex items-center gap-1.5 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-[#5eead4]" />
                      <span>Location</span>
                    </div>
                    <div className="text-base font-semibold text-[#e2f1ea]">{socials.location}</div>
                  </div>
                </div>

                {/* Profiles */}
                <div className="mt-8 pt-6 border-t border-[#2d6a55]/40">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#85b8a5] mb-4">
                    Online Profiles
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {socialLinksList.map((item) => (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-[#2d6a55]/30 border border-[#5eead4]/30 px-4 py-1.5 text-xs font-semibold text-[#5eead4] hover:bg-[#2d6a55]/50 hover:border-[#5eead4] transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form (Col span 7) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-7"
            >
              <div className="rounded-3xl p-8 md:p-10 bg-[#133c2e]/60 border border-[#2d6a55]/50 backdrop-blur-md">
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#e2f1ea] mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-sm text-[#85b8a5] mb-8 leading-relaxed">
                  Messages are stored directly into my portfolio database.
                </p>

                {successMessage ? (
                  <div className="bg-[#0d2a20]/90 border border-[#5eead4]/40 rounded-2xl p-8 text-center text-[#e2f1ea]">
                    <div className="w-12 h-12 rounded-full bg-[#5eead4]/20 text-[#5eead4] flex items-center justify-center mx-auto mb-4 border border-[#5eead4]/30">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Message Sent</h4>
                    <p className="text-sm text-[#85b8a5] mb-6">{successMessage}</p>
                    <button
                      type="button"
                      onClick={() => setSuccessMessage(null)}
                      className="rounded-full bg-[#5eead4] text-[#0a1f18] px-6 py-2.5 text-sm font-bold hover:bg-[#34d399] transition-colors shadow-md"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Purpose Selector */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#85b8a5] mb-2.5">
                        Inquiry Category
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {submissionTypes.map((type) => {
                          const isSelected = formData.type === type.value;
                          return (
                            <button
                              key={type.value}
                              type="button"
                              onClick={() => setFormData({ ...formData, type: type.value })}
                              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all border ${
                                isSelected
                                  ? "bg-[#5eead4] text-[#0a1f18] border-[#5eead4] font-bold shadow-[0_0_15px_rgba(94,234,212,0.4)]"
                                  : "bg-[#0d2a20]/80 text-[#85b8a5] border-[#2d6a55]/50 hover:border-[#5eead4]/40"
                              }`}
                            >
                              {type.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Name Input */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#85b8a5] mb-1.5">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Jane Doe or John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full h-11 rounded-xl bg-[#0d2a20]/80 border border-[#2d6a55]/60 px-4 text-sm text-[#e2f1ea] placeholder:text-[#85b8a5]/40 focus:outline-none focus:border-[#5eead4] focus:ring-1 focus:ring-[#5eead4] transition-colors"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-[#5eead4]">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#85b8a5] mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="name@organization.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full h-11 rounded-xl bg-[#0d2a20]/80 border border-[#2d6a55]/60 px-4 text-sm text-[#e2f1ea] placeholder:text-[#85b8a5]/40 focus:outline-none focus:border-[#5eead4] focus:ring-1 focus:ring-[#5eead4] transition-colors"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-[#5eead4]">{errors.email}</p>
                      )}
                    </div>

                    {/* Subject Input */}
                    <div>
                      <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[#85b8a5] mb-1.5">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        placeholder="Inquiry or collaboration topic"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="w-full h-11 rounded-xl bg-[#0d2a20]/80 border border-[#2d6a55]/60 px-4 text-sm text-[#e2f1ea] placeholder:text-[#85b8a5]/40 focus:outline-none focus:border-[#5eead4] focus:ring-1 focus:ring-[#5eead4] transition-colors"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-xs text-[#5eead4]">{errors.subject}</p>
                      )}
                    </div>

                    {/* Message Input */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#85b8a5] mb-1.5">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Share your thoughts, questions, or ideas..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="w-full rounded-xl bg-[#0d2a20]/80 border border-[#2d6a55]/60 p-4 text-sm text-[#e2f1ea] placeholder:text-[#85b8a5]/40 focus:outline-none focus:border-[#5eead4] focus:ring-1 focus:ring-[#5eead4] transition-colors min-h-[120px] resize-y"
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-[#5eead4]">{errors.message}</p>
                      )}
                    </div>

                    {serverError && (
                      <div className="bg-[#2A1515] border border-red-500/50 rounded-xl p-3 text-xs text-[#FF8888]">
                        {serverError}
                      </div>
                    )}

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full sm:w-auto min-w-[180px] rounded-full bg-[#5eead4] text-[#0a1f18] px-8 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-[#34d399] hover:shadow-[0_0_25px_rgba(94,234,212,0.6)] active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isLoading ? "Submitting..." : "Send Message"}</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
