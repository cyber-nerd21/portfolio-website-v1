"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Github, ArrowUpRight, Play, Image as ImageIcon, AlertCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const [activeMedia, setActiveMedia] = useState<"video" | "landing" | "chat" | "summary">("video");

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto border-t border-[#E8E4DC]">
      {/* Section Header */}
      <div className="mb-10 sm:mb-12">
        <span className="text-xs font-mono text-[#77736C] uppercase tracking-wider block mb-2">
          03 / Selected Projects
        </span>
        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#242424] mb-3">
          Featured &amp; Ongoing Work
        </h2>
        <p className="text-sm sm:text-base text-[#77736C] max-w-xl">
          Document intelligence with real demonstration media, alongside active concepts in development.
        </p>
      </div>

      {/* 1. FEATURED PROJECT: INSIGHTBOT */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl bg-[#FFFFFF] border border-[#E8E4DC] p-5 sm:p-7 md:p-8 shadow-card hover:border-[#D3CEC4] transition-all duration-300 mb-6 sm:mb-8"
      >
        {/* Top Meta Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#E8E4DC] mb-5 sm:mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#77736C]">
              PROJECT 01
            </span>
            <span className="text-[#D3CEC4]">·</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono bg-[#EBF2EC] text-[#4A5D4E] border border-[#D1E0D3] font-medium">
              Featured Project
            </span>
            <span className="text-[#D3CEC4]">·</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono bg-[#FFF8EB] text-[#8C6A43] border border-[#F3E3C7]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C6A43]" />
              Built — Backend unavailable
            </span>
          </div>

          <a
            href="https://github.com/cyber-nerd21/Insightbot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 text-xs font-mono font-medium text-[#242424] hover:text-[#FFFFFF] bg-[#FAF9F6] hover:bg-[#242424] border border-[#E8E4DC] hover:border-[#242424] px-4 py-2 sm:py-1.5 rounded-lg transition-all duration-200 w-full sm:w-auto shadow-editorial"
            aria-label="View InsightBot repository on GitHub"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub Repository</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </a>
        </div>

        {/* Two-Column Grid: Narrative on Left, Actual Media on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Details */}
          <div className="lg:col-span-5 flex flex-col justify-between order-2 lg:order-1">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#242424] mb-2.5">
                InsightBot
              </h3>
              <p className="text-sm text-[#77736C] leading-relaxed mb-4">
                An AI-powered document intelligence application that allows users to upload PDFs, ask natural-language questions, generate summaries and create quizzes using a high-accuracy RAG pipeline.
              </p>

              {/* Truthful Railway status context */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-[#FAF9F6] border border-[#E8E4DC] mb-5 text-xs text-[#77736C] leading-relaxed flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-[#8C6A43] shrink-0 mt-0.5" />
                <span>
                  The frontend was deployed on Vercel. The backend was previously hosted on Railway, but its free tier has concluded. The full application architecture is demonstrated in the actual recordings.
                </span>
              </div>

              {/* Media Switcher Tabs */}
              <div className="mb-5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#77736C] block mb-2">
                  Inspect Real Deliverables:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 rounded-xl bg-[#F2EFE8] border border-[#E8E4DC]">
                  <button
                    onClick={() => setActiveMedia("video")}
                    className={`flex items-center justify-center gap-1.5 px-2 py-2 rounded-lg text-[11px] sm:text-xs font-mono transition-all ${
                      activeMedia === "video"
                        ? "bg-[#FFFFFF] text-[#242424] font-medium shadow-editorial"
                        : "text-[#77736C] hover:text-[#242424]"
                    }`}
                  >
                    <Play className="w-3 h-3 text-[#4A5D4E] shrink-0" />
                    <span>Demo Video</span>
                  </button>

                  <button
                    onClick={() => setActiveMedia("landing")}
                    className={`flex items-center justify-center gap-1 px-2 py-2 rounded-lg text-[11px] sm:text-xs font-mono transition-all ${
                      activeMedia === "landing"
                        ? "bg-[#FFFFFF] text-[#242424] font-medium shadow-editorial"
                        : "text-[#77736C] hover:text-[#242424]"
                    }`}
                  >
                    <ImageIcon className="w-3 h-3 text-[#77736C] shrink-0" />
                    <span>Landing</span>
                  </button>

                  <button
                    onClick={() => setActiveMedia("chat")}
                    className={`flex items-center justify-center gap-1 px-2 py-2 rounded-lg text-[11px] sm:text-xs font-mono transition-all ${
                      activeMedia === "chat"
                        ? "bg-[#FFFFFF] text-[#242424] font-medium shadow-editorial"
                        : "text-[#77736C] hover:text-[#242424]"
                    }`}
                  >
                    <ImageIcon className="w-3 h-3 text-[#77736C] shrink-0" />
                    <span>Chat Q&amp;A</span>
                  </button>

                  <button
                    onClick={() => setActiveMedia("summary")}
                    className={`flex items-center justify-center gap-1 px-2 py-2 rounded-lg text-[11px] sm:text-xs font-mono transition-all ${
                      activeMedia === "summary"
                        ? "bg-[#FFFFFF] text-[#242424] font-medium shadow-editorial"
                        : "text-[#77736C] hover:text-[#242424]"
                    }`}
                  >
                    <ImageIcon className="w-3 h-3 text-[#77736C] shrink-0" />
                    <span>Summary</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Tech Tags */}
            <div className="pt-4 border-t border-[#E8E4DC]">
              <div className="flex flex-wrap gap-1.5">
                {[
                  "FastAPI",
                  "LangChain",
                  "Next.js",
                  "Supabase",
                  "PostgreSQL",
                  "pgvector",
                  "Gemini API",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F2EFE8] text-[#77736C] border border-[#E8E4DC]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Actual Real Media Viewer */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-xl overflow-hidden border border-[#E8E4DC] bg-[#1a1b1e] shadow-editorial aspect-[16/10] w-full flex items-center justify-center">
              {activeMedia === "video" ? (
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/images/insightbot/landing.jpg"
                  className="w-full h-full object-contain bg-black"
                >
                  <source src="/videos/insightbot-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={
                      activeMedia === "landing"
                        ? "/images/insightbot/landing.jpg"
                        : activeMedia === "chat"
                        ? "/images/insightbot/chat.jpg"
                        : "/images/insightbot/summary.jpg"
                    }
                    alt={`InsightBot ${activeMedia} view`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 650px"
                    className="object-contain object-center"
                  />
                </div>
              )}
            </div>

            {/* Subtle caption */}
            <div className="mt-2.5 px-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] font-mono text-[#77736C]">
              <span>
                {activeMedia === "video"
                  ? "Real application screen recording"
                  : activeMedia === "landing"
                  ? "Production landing page (insightbot-ai.vercel.app)"
                  : activeMedia === "chat"
                  ? "Working Q&A chat with retrieved vector chunks"
                  : "Working multi-style summary generation"}
              </span>
              <span className="text-[#4A5D4E]">100% Unaltered Capture</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2 & 3. COMPACT, EQUAL-SIZED CSS-ONLY CARDS: DATASENSE & AMEYA DRESSWELL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* PROJECT 02 — DATASENSE */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          whileHover={shouldReduceMotion ? {} : { y: -3 }}
          className="rounded-2xl bg-[#FFFFFF] border border-[#E8E4DC] p-5 sm:p-6 hover:border-[#D3CEC4] hover:shadow-card transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-semibold tracking-widest text-[#77736C]">
                PROJECT 02
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono bg-[#F2EFE8] text-[#77736C] border border-[#E8E4DC]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#77736C]" />
                In Development
              </span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-[#242424] mb-2.5">
              DataSense
            </h3>

            {/* Description */}
            <p className="text-sm text-[#77736C] leading-relaxed mb-6">
              An AI-powered no-code analytics dashboard concept designed to help users explore datasets and generate useful insights through interactive visualizations.
            </p>
          </div>

          <div>
            {/* Tech Tags */}
            <div className="pt-4 border-t border-[#E8E4DC] flex flex-wrap gap-1.5 mb-5">
              {["Next.js", "React", "Tailwind CSS", "FastAPI", "Supabase"].map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F2EFE8] text-[#77736C] border border-[#E8E4DC]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub button for DataSense */}
            <a
              href="https://github.com/cyber-nerd21/DataSense"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-mono font-medium text-[#242424] hover:text-[#FFFFFF] bg-[#FAF9F6] hover:bg-[#242424] border border-[#E8E4DC] hover:border-[#242424] px-4 py-2 sm:py-1.5 rounded-lg transition-all duration-200 w-full sm:w-auto shadow-editorial"
              aria-label="View DataSense repository on GitHub"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repository</span>
              <ArrowUpRight className="w-3 h-3 opacity-70" />
            </a>
          </div>
        </motion.div>

        {/* PROJECT 03 — AMEYA DRESSWELL & BOUTIQUE */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.08 }}
          whileHover={shouldReduceMotion ? {} : { y: -3 }}
          className="rounded-2xl bg-[#FFFFFF] border border-[#E8E4DC] p-5 sm:p-6 hover:border-[#D3CEC4] hover:shadow-card transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-semibold tracking-widest text-[#77736C]">
                PROJECT 03
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono bg-[#F2EFE8] text-[#77736C] border border-[#E8E4DC]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#77736C]" />
                In Development
              </span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-[#242424] mb-2.5">
              Ameya Dresswell &amp; Boutique
            </h3>

            {/* Description */}
            <p className="text-sm text-[#77736C] leading-relaxed mb-6">
              A web platform for a costume rental and boutique business, focused on product discovery and simplifying customer orders.
            </p>
          </div>

          <div>
            {/* Tech Tags */}
            <div className="pt-4 border-t border-[#E8E4DC] flex flex-wrap gap-1.5 mb-2">
              {["Next.js", "React", "Tailwind CSS", "Supabase", "PostgreSQL"].map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F2EFE8] text-[#77736C] border border-[#E8E4DC]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Zero external buttons as requested */}
            <div className="text-[11px] font-mono text-[#77736C] pt-2">
              Private Client Prototype · In Active Development
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
