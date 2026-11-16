"use client";

import React from "react";
import { Code, Layers, Database, Wrench, Bot } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  accent: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI & Intelligent Systems",
    icon: <Bot className="w-4 h-4 text-[#8C6A43]" />,
    accent: "bg-[#FFF8EB] border-[#F3E3C7]",
    skills: [
      "RAG",
      "LLM applications",
      "Gemini API",
      "Semantic Search",
      "AI Agents",
      "Natural Language Processing",
    ],
  },
  {
    title: "Languages",
    icon: <Code className="w-4 h-4 text-[#4A5D4E]" />,
    accent: "bg-[#EBF2EC] border-[#D1E0D3]",
    skills: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frameworks & Runtime",
    icon: <Layers className="w-4 h-4 text-[#242424]" />,
    accent: "bg-[#F2EFE8] border-[#E8E4DC]",
    skills: [
      "FastAPI",
      "LangChain",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
    ],
  },
  {
    title: "Databases & Vector Stores",
    icon: <Database className="w-4 h-4 text-[#A35C4A]" />,
    accent: "bg-[#FDF2F0] border-[#FADAD5]",
    skills: ["PostgreSQL", "MongoDB", "pgvector", "Supabase"],
  },
  {
    title: "Developer Tooling & Cloud",
    icon: <Wrench className="w-4 h-4 text-[#77736C]" />,
    accent: "bg-[#F2EFE8] border-[#E8E4DC]",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Railway", "Render"],
  },
];

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="py-20 md:py-28 px-6 sm:px-8 max-w-6xl mx-auto border-t border-[#E8E4DC]">
      {/* Section Header */}
      <div className="mb-14">
        <span className="text-xs font-mono text-[#77736C] uppercase tracking-wider block mb-2">
          04 / Skills &amp; Stack
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#242424] mb-3">
          Technical Capabilities
        </h2>
        <p className="text-base text-[#77736C] max-w-xl">
          Core engineering stack, libraries, and infrastructure tools applied in building production systems.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : idx * 0.06 }}
            className={`p-6 rounded-2xl bg-[#FFFFFF] border border-[#E8E4DC] hover:border-[#D3CEC4] hover:shadow-card transition-all duration-300 flex flex-col justify-between ${
              idx === 0 ? "md:col-span-2 lg:col-span-2" : ""
            }`}
          >
            <div>
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-[#E8E4DC]">
                <div className={`p-1.5 rounded-lg border ${cat.accent}`}>
                  {cat.icon}
                </div>
                <h3 className="font-serif text-lg font-medium text-[#242424]">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#F2EFE8] text-[#242424] border border-[#E8E4DC] hover:bg-[#FFFFFF] hover:border-[#D3CEC4] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-[#E8E4DC]/60 flex items-center justify-between text-[11px] font-mono text-[#77736C]">
              <span>{cat.skills.length} competencies</span>
              <span>Hands-on Proficient</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
