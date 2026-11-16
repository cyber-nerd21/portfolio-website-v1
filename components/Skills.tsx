"use client";

import React from "react";
import { Layout, Server, Database, Bot, Wrench } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI & Automation",
    icon: <Bot className="w-4 h-4 text-purple-400" />,
    skills: [
      "LLMs",
      "RAG",
      "LangChain",
      "Gemini API",
      "Google Apps Script",
      "Workflow Automation",
    ],
  },
  {
    title: "Backend",
    icon: <Server className="w-4 h-4 text-emerald-400" />,
    skills: ["Node.js", "Express.js", "Python", "FastAPI"],
  },
  {
    title: "Frontend",
    icon: <Layout className="w-4 h-4 text-sky-400" />,
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Database",
    icon: <Database className="w-4 h-4 text-amber-400" />,
    skills: ["MongoDB", "PostgreSQL", "Supabase"],
  },
  {
    title: "Tools",
    icon: <Wrench className="w-4 h-4 text-[#a1a1aa]" />,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Docker"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
      {/* Section Header */}
      <div className="mb-14">
        <span className="text-xs font-mono text-[#71717a] uppercase tracking-wider block mb-2">
          03 / Skills &amp; Stack
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f4f4f6] mb-3">
          Technical Arsenal
        </h2>
        <p className="text-base text-[#8f929d] max-w-xl">
          Core technologies, frameworks, and tooling I use to architect and ship software.
        </p>
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={cat.title}
            className={`p-6 rounded-2xl bg-[#0f1115] border border-white/[0.08] hover:border-white/[0.16] transition-all duration-200 flex flex-col justify-between ${
              idx === 0 ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#12141c] to-[#0f1115]" : ""
            }`}
          >
            <div>
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/[0.05]">
                <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                  {cat.icon}
                </div>
                <h3 className="text-sm font-semibold tracking-wide text-[#f4f4f6]">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#14171f] text-[#d4d4d8] border border-white/[0.06] hover:border-white/[0.18] hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-white/[0.03] flex items-center justify-between text-[11px] font-mono text-[#555865]">
              <span>{cat.skills.length} competencies</span>
              <span>Production Tested</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
