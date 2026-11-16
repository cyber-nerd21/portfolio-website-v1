"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Full Stack GenAI Intern",
    company: "GenAIKit Software Solution Pvt. Ltd.",
    period: "May 2025 – July 2025",
    location: "Remote · Mumbai",
    tag: "GenAI & LLM Systems",
    highlights: [
      "Built LLM-powered applications using Python and LangChain.",
      "Developed RAG Q&A systems and semantic search pipelines.",
      "Built voice-enabled AI agents using STT and TTS.",
      "Developed natural-language-to-SQL applications.",
      "Created ChatGPT-style interfaces.",
    ],
  },
  {
    role: "Data Visualization Associate Intern",
    company: "Excelerate (Sponsored by Saint Louis University)",
    period: "July 2025 – August 2025",
    location: "Remote · Dubai, UAE",
    tag: "Analytics & KPI Storytelling",
    highlights: [
      "Worked with real-world learner and marketing datasets.",
      "Used NumPy, Pandas, Matplotlib and PostgreSQL.",
      "Designed interactive Looker Studio dashboards.",
      "Presented business insights and findings.",
    ],
  },
];

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto border-t border-[#E8E4DC]">
      {/* Section Header */}
      <div className="mb-10 sm:mb-14">
        <span className="text-xs font-mono text-[#77736C] uppercase tracking-wider block mb-2">
          02 / Experience
        </span>
        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#242424] mb-3">
          Work &amp; Internships
        </h2>
        <p className="text-sm sm:text-base text-[#77736C] max-w-xl">
          Practical hands-on engineering experience in enterprise GenAI applications and international data analytics.
        </p>
      </div>

      {/* Editorial Timeline */}
      <div className="space-y-6 sm:space-y-8">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : idx * 0.1 }}
            className="group relative rounded-2xl bg-[#FFFFFF] border border-[#E8E4DC] p-5 sm:p-7 md:p-8 hover:border-[#D3CEC4] hover:shadow-card transition-all duration-300"
          >
            {/* Top row: Role, Company, and Metadata */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-[#E8E4DC]">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono text-[#77736C]">
                    EXP 0{idx + 1}
                  </span>
                  <span className="text-[#D3CEC4]">·</span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#F2EFE8] text-[#77736C] border border-[#E8E4DC]">
                    {exp.tag}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-medium text-[#242424] group-hover:text-[#4A5D4E] transition-colors">
                  {exp.role}
                </h3>
                <p className="text-sm sm:text-base font-medium text-[#77736C] mt-1">
                  {exp.company}
                </p>
              </div>

              {/* Time and Location Pills */}
              <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2 text-xs font-mono text-[#77736C] shrink-0 mt-1 lg:mt-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2EFE8] border border-[#E8E4DC]">
                  <Calendar className="w-3.5 h-3.5 text-[#77736C]" />
                  {exp.period}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#E8E4DC]">
                  <MapPin className="w-3.5 h-3.5 text-[#77736C]" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-5 sm:mt-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#77736C] block mb-3">
                Key Contributions &amp; Deliverables
              </span>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
                {exp.highlights.map((highlight, hIdx) => (
                  <li
                    key={hIdx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-[#45433F] leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4A5D4E] mt-1.5 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
