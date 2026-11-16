"use client";

import React from "react";
import { GraduationCap, Briefcase, Sparkles, Terminal, Code2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
      {/* Section Header */}
      <div className="mb-12">
        <span className="text-xs font-mono text-[#71717a] uppercase tracking-wider block mb-2">
          01 / About
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f4f4f6]">
          A little about me.
        </h2>
      </div>

      {/* Grid Layout: Main Narrative + Background Credentials */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Authentic narrative specified by user */}
        <div className="lg:col-span-7 space-y-6 text-[#a1a1aa] text-base sm:text-lg leading-relaxed font-normal">
          <p className="text-[#e4e4e7] font-medium leading-relaxed">
            I&apos;m a third-year engineering student interested in software
            engineering, AI and building useful products.
          </p>

          <p>
            I enjoy exploring how technology works, experimenting with new ideas
            and turning concepts into practical applications.
          </p>

          <p>
            My interests include AI applications, backend engineering,
            automation, full-stack development and problem solving.
          </p>

          {/* Core Philosophy Card */}
          <div className="mt-8 p-5 rounded-2xl bg-[#0f1115]/80 border border-white/[0.08] backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#a1a1aa]">
              <Sparkles className="w-3.5 h-3.5 text-white/70" />
              <span>APPROACH &amp; MINDSET</span>
            </div>
            <p className="text-sm text-[#8f929d] leading-relaxed">
              Prioritizing reliable backend architectures, clean API design, and practical RAG pipelines over superficial complexity. Focused on shipping code that solves real operational bottlenecks.
            </p>
          </div>
        </div>

        {/* Right Column: Authentic Education & Experience Context */}
        <div className="lg:col-span-5 space-y-4">
          {/* Education Card */}
          <div className="p-5 rounded-2xl bg-[#0f1115] border border-white/[0.08] hover:border-white/[0.14] transition-colors">
            <div className="flex items-center gap-2 text-xs font-mono text-[#71717a] mb-3">
              <GraduationCap className="w-4 h-4 text-white/80" />
              <span>EDUCATION</span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-baseline justify-between">
                  <h4 className="text-sm font-semibold text-[#f4f4f6]">
                    Bharati Vidyapeeth College of Engineering
                  </h4>
                  <span className="text-[11px] font-mono text-[#71717a]">2024 – 2028</span>
                </div>
                <p className="text-xs text-[#a1a1aa] mt-0.5">
                  B.E. in Information Technology · Navi Mumbai
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.05]">
                <div className="flex items-baseline justify-between">
                  <h4 className="text-sm font-semibold text-[#f4f4f6]">
                    Daksh Gurukul, IIT Guwahati
                  </h4>
                  <span className="text-[11px] font-mono text-emerald-400">Completed</span>
                </div>
                <p className="text-xs text-[#a1a1aa] mt-0.5">
                  Data Science and Machine Learning · ML &amp; Deep Learning Capstones
                </p>
              </div>
            </div>
          </div>

          {/* Experience Highlights */}
          <div className="p-5 rounded-2xl bg-[#0f1115] border border-white/[0.08] hover:border-white/[0.14] transition-colors">
            <div className="flex items-center gap-2 text-xs font-mono text-[#71717a] mb-3">
              <Briefcase className="w-4 h-4 text-white/80" />
              <span>EXPERIENCE SNAPSHOT</span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-baseline justify-between">
                  <h4 className="text-sm font-semibold text-[#f4f4f6]">
                    Full Stack GenAI Intern
                  </h4>
                  <span className="text-[11px] font-mono text-[#71717a]">May – Jul 2025</span>
                </div>
                <p className="text-xs text-[#a1a1aa] mt-0.5">
                  GenAIKit Software Solution · RAG, Voice AI Agents &amp; NL-to-SQL
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.05]">
                <div className="flex items-baseline justify-between">
                  <h4 className="text-sm font-semibold text-[#f4f4f6]">
                    Data Visualization Associate Intern
                  </h4>
                  <span className="text-[11px] font-mono text-[#71717a]">Jul – Aug 2025</span>
                </div>
                <p className="text-xs text-[#a1a1aa] mt-0.5">
                  Excelerate (Saint Louis Univ. Sponsored) · Dubai Remote · KPI Dashboards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
