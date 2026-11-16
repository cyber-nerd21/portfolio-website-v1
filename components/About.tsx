"use client";

import React from "react";
import { GraduationCap, Sparkles, Cpu, Layers, Workflow, Database, Terminal, Code2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const INTERESTS = [
  {
    title: "Generative AI",
    description: "Architecting contextual AI systems with LLMs, prompt engineering and semantic orchestration.",
    icon: <Sparkles className="w-4 h-4 text-[#8C6A43]" />,
  },
  {
    title: "Retrieval-Augmented Generation",
    description: "Designing end-to-end RAG pipelines with vector databases, hybrid retrieval and dynamic re-ranking.",
    icon: <Database className="w-4 h-4 text-[#4A5D4E]" />,
  },
  {
    title: "LLM Applications & Agents",
    description: "Building autonomous tool-calling agents, intent parsing, and natural language query systems.",
    icon: <Cpu className="w-4 h-4 text-[#A35C4A]" />,
  },
  {
    title: "Backend Engineering",
    description: "Engineering asynchronous, high-throughput REST APIs and scalable backend architectures using FastAPI & Node.js.",
    icon: <Terminal className="w-4 h-4 text-[#242424]" />,
  },
  {
    title: "Automation",
    description: "Automating operational workflows, scheduled cron cycles, escalation gates, and task orchestration.",
    icon: <Workflow className="w-4 h-4 text-[#8C6A43]" />,
  },
  {
    title: "Full-Stack Development",
    description: "Crafting end-to-end applications with modern Next.js App Router, React, TypeScript and relational databases.",
    icon: <Code2 className="w-4 h-4 text-[#4A5D4E]" />,
  },
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto border-t border-[#E8E4DC]">
      {/* Section Header */}
      <div className="mb-10 sm:mb-14">
        <span className="text-xs font-mono text-[#77736C] uppercase tracking-wider block mb-2">
          01 / About
        </span>
        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#242424]">
          A little about me.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-[#77736C] text-sm sm:text-base md:text-lg leading-relaxed font-normal">
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#242424] leading-snug font-normal">
            I&apos;m an Information Technology engineering student with practical experience in GenAI development, data visualization, and full-stack engineering.
          </p>

          <p>
            Currently pursuing my Bachelor of Engineering in Information Technology at Bharati Vidyapeeth College of Engineering (expected graduation May 2028), I enjoy exploring how software and intelligent systems behave under the hood.
          </p>

          <p>
            My work focuses on bridging theoretical AI concepts into robust, production-ready backend applications. Whether architecting vector retrieval pipelines or automating complex operational workflows, I believe software should be reliable, purposeful, and intuitive.
          </p>

          {/* Education Snapshot Card */}
          <div className="mt-6 sm:mt-8 p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-[#E8E4DC] shadow-card">
            <div className="flex items-center gap-2 text-xs font-mono text-[#77736C] mb-4">
              <GraduationCap className="w-4 h-4 text-[#242424]" />
              <span>ACADEMIC FOUNDATION</span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h4 className="font-serif text-base sm:text-lg font-medium text-[#242424]">
                    Bharati Vidyapeeth College of Engineering
                  </h4>
                  <span className="text-xs font-mono text-[#77736C]">Expected May 2028</span>
                </div>
                <p className="text-xs sm:text-sm text-[#77736C] mt-0.5">
                  Bachelor of Engineering · Information Technology · Navi Mumbai
                </p>
              </div>

              <div className="pt-3 border-t border-[#E8E4DC]">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h4 className="font-serif text-base sm:text-lg font-medium text-[#242424]">
                    Daksh Gurukul, IIT Guwahati
                  </h4>
                  <span className="text-xs font-mono text-[#4A5D4E] bg-[#EBF2EC] px-2 py-0.5 rounded self-start sm:self-auto">
                    Completed
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#77736C] mt-0.5">
                  Data Science and Machine Learning · Capstone Projects in ML, Deep Learning &amp; Analytics
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Key Areas of Interest */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-mono text-[#77736C] uppercase tracking-wider mb-2">
            AREAS OF SPECIALIZATION &amp; INTEREST
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {INTERESTS.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : idx * 0.05 }}
                className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E8E4DC] hover:border-[#D3CEC4] hover:shadow-card transition-all duration-200"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="p-1 rounded-md bg-[#F2EFE8] border border-[#E8E4DC]">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-[#242424]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-[#77736C] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
