"use client";

import React from "react";
import { ArrowDown, Github, ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-36 pb-24 md:pt-44 md:pb-32 px-6 sm:px-8 max-w-6xl mx-auto flex flex-col justify-center min-h-[85vh]"
    >
      {/* Top Eyebrow & Status Badge */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
          <span className="text-[11px] font-mono font-medium tracking-widest text-[#a1a1aa] uppercase">
            ENGINEERING STUDENT / AI & FULL STACK DEVELOPER
          </span>
        </div>

        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/30 border border-emerald-500/20 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] font-mono font-medium text-emerald-300">
            Open to Internship Opportunities
          </span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="max-w-4xl">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#f4f4f6] leading-[1.08] mb-8">
          Building things.
          <br />
          <span className="text-[#a1a1aa] font-medium">Exploring ideas.</span>
          <br />
          Making them useful.
        </h1>

        {/* Supporting description */}
        <p className="text-base sm:text-lg md:text-xl text-[#8f929d] max-w-2xl font-normal leading-relaxed mb-10">
          I&apos;m an engineering student passionate about software engineering,
          artificial intelligence and automation. I enjoy understanding problems
          and building practical solutions through technology.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white text-[#090a0c] font-medium text-sm hover:bg-[#eaeaea] transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.12)] hover:shadow-[0_0_25px_rgba(255,255,255,0.22)] active:scale-[0.98]"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5 text-[#090a0c]" />
          </a>

          <a
            href="https://github.com/Gigacorebess"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#111317] text-[#f4f4f6] border border-white/[0.1] hover:border-white/20 hover:bg-[#171a20] transition-all duration-200 text-sm font-medium active:scale-[0.98]"
          >
            <Github className="w-4 h-4 text-[#8f929d] group-hover:text-white transition-colors" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#8f929d] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </div>
      </div>

      {/* Subtle Terminal / Tech indicator line at bottom */}
      <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#555865]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            FastAPI &amp; LangChain
          </span>
          <span className="text-white/10">•</span>
          <span>RAG Architectures</span>
          <span className="text-white/10">•</span>
          <span>LLM Agents</span>
        </div>
        <div className="text-[#555865]">
          Based in Mumbai, India · Remote Ready
        </div>
      </div>
    </section>
  );
}
