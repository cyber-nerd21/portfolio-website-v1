"use client";

import React from "react";
import { FileDown, ExternalLink, CheckCircle, FileText } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function ResumeSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="resume" className="py-14 sm:py-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto border-t border-[#E8E4DC]">
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative rounded-2xl sm:rounded-3xl bg-[#FFFFFF] border border-[#E8E4DC] p-6 sm:p-8 md:p-12 shadow-card hover:shadow-card-hover transition-all duration-300"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2EFE8] border border-[#E8E4DC] mb-3 sm:mb-4">
              <FileText className="w-3.5 h-3.5 text-[#77736C]" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#77736C]">
                CURRICULUM VITAE
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#242424] mb-2.5 sm:mb-3">
              Looking for full credentials?
            </h3>
            <p className="text-sm sm:text-base text-[#77736C] leading-relaxed mb-4">
              Download my official one-page resume detailing academic coursework, production GenAI internship deliverables, RAG architectures, and verified skills.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#77736C]">
              <span className="flex items-center gap-1.5 text-[#4A5D4E]">
                <CheckCircle className="w-3.5 h-3.5" />
                Updated 2026 Edition
              </span>
              <span className="text-[#D3CEC4]">•</span>
              <span>PDF Format</span>
            </div>
          </div>

          {/* Action buttons: easily tappable on mobile */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full lg:w-auto">
            <a
              href="/Amogh-Resume.pdf"
              download="Amogh-Deodhar-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#242424] text-[#FAF9F6] font-medium text-sm hover:bg-[#383632] transition-all duration-200 shadow-editorial active:scale-[0.98] w-full sm:w-auto"
            >
              <FileDown className="w-4 h-4 text-[#FAF9F6]" />
              <span>Download Resume</span>
            </a>

            <a
              href="/Amogh-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F2EFE8] text-[#242424] hover:bg-[#E8E4DC] border border-[#E8E4DC] font-medium text-sm transition-all duration-200 active:scale-[0.98] w-full sm:w-auto"
            >
              <span>View in Browser</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#77736C]" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
