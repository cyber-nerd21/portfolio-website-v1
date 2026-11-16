"use client";

import React, { useState } from "react";
import { Mail, Phone, Github, ArrowUpRight, Copy, Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const copyToClipboard = (text: string, field: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto border-t border-[#E8E4DC]">
      <div className="max-w-3xl">
        <span className="text-xs font-mono text-[#77736C] uppercase tracking-wider block mb-2">
          04 / Contact
        </span>
        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#242424] mb-3 sm:mb-4">
          Let&apos;s build something meaningful.
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#77736C] leading-relaxed mb-8 sm:mb-12 max-w-xl">
          I&apos;m always keen to discuss GenAI backend engineering, RAG pipelines, internship opportunities, or interesting software challenges.
        </p>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {/* Email */}
          <motion.a
            whileHover={shouldReduceMotion ? {} : { y: -3 }}
            href="mailto:amoghdeodhar886@gmail.com"
            className="group relative p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-[#E8E4DC] hover:border-[#D3CEC4] hover:shadow-card transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-xl bg-[#F2EFE8] text-[#242424]">
                <Mail className="w-4 h-4" />
              </div>
              <button
                onClick={(e) => copyToClipboard("amoghdeodhar886@gmail.com", "email", e)}
                title="Copy email address"
                className="w-8 h-8 flex items-center justify-center rounded-lg text-[#77736C] hover:text-[#242424] hover:bg-[#F2EFE8] transition-colors"
                aria-label="Copy email"
              >
                {copiedField === "email" ? (
                  <Check className="w-3.5 h-3.5 text-[#4A5D4E]" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            <div>
              <span className="text-[10px] sm:text-[11px] font-mono text-[#77736C] uppercase tracking-wider block mb-1">
                Direct Email
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#242424] group-hover:text-[#4A5D4E] transition-colors break-all">
                amoghdeodhar886@gmail.com
              </span>
            </div>

            <div className="mt-4 sm:mt-5 pt-3 border-t border-[#E8E4DC] flex items-center justify-between text-xs font-mono text-[#77736C]">
              <span>Send Message</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a
            whileHover={shouldReduceMotion ? {} : { y: -3 }}
            href="tel:+919130677940"
            className="group relative p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-[#E8E4DC] hover:border-[#D3CEC4] hover:shadow-card transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-xl bg-[#F2EFE8] text-[#242424]">
                <Phone className="w-4 h-4" />
              </div>
              <button
                onClick={(e) => copyToClipboard("+91 9130677940", "phone", e)}
                title="Copy phone number"
                className="w-8 h-8 flex items-center justify-center rounded-lg text-[#77736C] hover:text-[#242424] hover:bg-[#F2EFE8] transition-colors"
                aria-label="Copy phone number"
              >
                {copiedField === "phone" ? (
                  <Check className="w-3.5 h-3.5 text-[#4A5D4E]" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            <div>
              <span className="text-[10px] sm:text-[11px] font-mono text-[#77736C] uppercase tracking-wider block mb-1">
                Phone / WhatsApp
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#242424] group-hover:text-[#4A5D4E] transition-colors">
                +91 9130677940
              </span>
            </div>

            <div className="mt-4 sm:mt-5 pt-3 border-t border-[#E8E4DC] flex items-center justify-between text-xs font-mono text-[#77736C]">
              <span>Call Direct</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.a>

          {/* GitHub */}
          <motion.a
            whileHover={shouldReduceMotion ? {} : { y: -3 }}
            href="https://github.com/cyber-nerd21"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-[#E8E4DC] hover:border-[#D3CEC4] hover:shadow-card transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-xl bg-[#F2EFE8] text-[#242424]">
                <Github className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono text-[#4A5D4E] bg-[#EBF2EC] px-2 py-0.5 rounded border border-[#D1E0D3]">
                cyber-nerd21
              </span>
            </div>

            <div>
              <span className="text-[10px] sm:text-[11px] font-mono text-[#77736C] uppercase tracking-wider block mb-1">
                GitHub Profile
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#242424] group-hover:text-[#4A5D4E] transition-colors">
                github.com/cyber-nerd21
              </span>
            </div>

            <div className="mt-4 sm:mt-5 pt-3 border-t border-[#E8E4DC] flex items-center justify-between text-xs font-mono text-[#77736C]">
              <span>View Repositories</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
