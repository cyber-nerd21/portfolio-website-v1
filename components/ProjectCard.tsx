"use client";

import React, { useState } from "react";
import { Github, ArrowUpRight, CheckCircle2, AlertCircle, Clock, Cpu, FileText, BarChart2, Workflow } from "lucide-react";

export interface ProjectData {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  status: "Built" | "In Development" | "Concept / Exploring" | "Working Prototype";
  githubUrl?: string;
  features?: string[];
  isAutomationHighlight?: boolean;
}

export default function ProjectCard({ project }: { project: ProjectData }) {
  const [isHovered, setIsHovered] = useState(false);

  // Status configuration
  const getStatusBadge = () => {
    switch (project.status) {
      case "Built":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Built
          </span>
        );
      case "In Development":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            In Development
          </span>
        );
      case "Concept / Exploring":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Concept / Exploring
          </span>
        );
      case "Working Prototype":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-sky-500/10 text-sky-300 border border-sky-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Working Prototype
          </span>
        );
    }
  };

  // Pure CSS visual mockups for each project
  const renderVisual = () => {
    if (project.title === "InsightBot") {
      return (
        <div className="w-full h-36 rounded-xl bg-[#0a0c10] border border-white/[0.06] p-4 flex flex-col justify-between overflow-hidden relative font-mono text-[11px]">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-grid-subtle opacity-30" />
          
          <div className="relative z-10 flex items-center justify-between text-[#71717a] border-b border-white/[0.06] pb-2">
            <span className="flex items-center gap-1.5 text-[#e4e4e7]">
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              rag_pipeline.py
            </span>
            <span className="text-[10px] text-emerald-400/90 bg-emerald-500/10 px-2 py-0.5 rounded">
              3072-dim pgvector
            </span>
          </div>

          <div className="relative z-10 space-y-1 text-[#8f929d] py-1">
            <div className="flex items-center gap-2">
              <span className="text-[#555865]">&gt;</span>
              <span>retriever = pgvector.as_retriever(k=4)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#555865]">&gt;</span>
              <span className="text-emerald-300/90">llm = ChatGoogleGenAI(model=&quot;gemini-flash&quot;)</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[10px] text-[#71717a] pt-2 border-t border-white/[0.04]">
            <span className="text-[#a1a1aa]">Latency: ~340ms</span>
            <span className="text-emerald-400">Stream: Active</span>
          </div>
        </div>
      );
    }

    if (project.title === "Ameya Dresswell & Boutique") {
      return (
        <div className="w-full h-36 rounded-xl bg-[#0a0c10] border border-white/[0.06] p-4 flex flex-col justify-between overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] to-transparent pointer-events-none" />

          <div className="flex items-center justify-between text-xs border-b border-white/[0.06] pb-2">
            <span className="font-mono text-[11px] text-[#f4f4f6] tracking-wide">
              COLLECTION / CATALOG
            </span>
            <span className="font-mono text-[10px] text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded">
              Rental Flow Engine
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 py-2">
            <div className="bg-[#14161c] border border-white/[0.05] rounded-lg p-2 flex flex-col justify-between">
              <span className="text-[10px] text-[#71717a] font-mono">ITEM 01</span>
              <div className="h-1.5 w-12 bg-white/20 rounded mt-1" />
              <span className="text-[10px] text-emerald-400 font-mono mt-1">Available</span>
            </div>
            <div className="bg-[#14161c] border border-white/[0.05] rounded-lg p-2 flex flex-col justify-between">
              <span className="text-[10px] text-[#71717a] font-mono">ITEM 02</span>
              <div className="h-1.5 w-10 bg-white/20 rounded mt-1" />
              <span className="text-[10px] text-amber-400 font-mono mt-1">Reserved</span>
            </div>
            <div className="bg-[#14161c] border border-white/[0.05] rounded-lg p-2 flex flex-col justify-between">
              <span className="text-[10px] text-[#71717a] font-mono">ITEM 03</span>
              <div className="h-1.5 w-14 bg-white/20 rounded mt-1" />
              <span className="text-[10px] text-emerald-400 font-mono mt-1">Available</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-[#71717a] pt-1">
            <span>Customer Discovery</span>
            <span>Cart &amp; Booking State</span>
          </div>
        </div>
      );
    }

    if (project.title === "DataSense") {
      return (
        <div className="w-full h-36 rounded-xl bg-[#0a0c10] border border-white/[0.06] p-4 flex flex-col justify-between overflow-hidden relative">
          <div className="flex items-center justify-between text-xs border-b border-white/[0.06] pb-2">
            <div className="flex items-center gap-1.5">
              <BarChart2 className="w-3.5 h-3.5 text-purple-400" />
              <span className="font-mono text-[11px] text-[#f4f4f6]">Analytics Pipeline</span>
            </div>
            <span className="font-mono text-[10px] text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded">
              No-Code Engine
            </span>
          </div>

          {/* Minimalist SVG Bar Chart Mock */}
          <div className="flex items-end gap-2 h-14 pt-2 px-1">
            <div className="w-full bg-[#181a22] rounded-t flex items-end justify-center p-0.5 h-full">
              <div className="w-full bg-white/20 rounded-t h-[45%]" />
            </div>
            <div className="w-full bg-[#181a22] rounded-t flex items-end justify-center p-0.5 h-full">
              <div className="w-full bg-white/40 rounded-t h-[75%]" />
            </div>
            <div className="w-full bg-[#181a22] rounded-t flex items-end justify-center p-0.5 h-full">
              <div className="w-full bg-purple-400/80 rounded-t h-[95%]" />
            </div>
            <div className="w-full bg-[#181a22] rounded-t flex items-end justify-center p-0.5 h-full">
              <div className="w-full bg-white/30 rounded-t h-[60%]" />
            </div>
            <div className="w-full bg-[#181a22] rounded-t flex items-end justify-center p-0.5 h-full">
              <div className="w-full bg-white/50 rounded-t h-[80%]" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-[#71717a] pt-1">
            <span>Automated KPI Mapping</span>
            <span>Interactive Insights</span>
          </div>
        </div>
      );
    }

    if (project.title === "Allo Innoware Automation") {
      return (
        <div className="w-full h-36 rounded-xl bg-[#090b10] border border-sky-500/20 p-4 flex flex-col justify-between overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/[0.04] via-transparent to-transparent pointer-events-none" />

          <div className="flex items-center justify-between text-xs border-b border-white/[0.06] pb-2">
            <div className="flex items-center gap-1.5">
              <Workflow className="w-3.5 h-3.5 text-sky-400" />
              <span className="font-mono text-[11px] text-[#f4f4f6]">Operations Orchestration</span>
            </div>
            <span className="font-mono text-[10px] text-sky-300 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
              Operational Automation
            </span>
          </div>

          {/* Workflow step progression */}
          <div className="flex items-center justify-between gap-1 text-[10px] font-mono py-2">
            <div className="px-2 py-1 rounded bg-[#131722] border border-sky-500/30 text-sky-200">
              Task Cycle
            </div>
            <span className="text-[#555865]">→</span>
            <div className="px-2 py-1 rounded bg-[#131722] border border-sky-500/30 text-sky-200">
              Proof Proof
            </div>
            <span className="text-[#555865]">→</span>
            <div className="px-2 py-1 rounded bg-[#131722] border border-sky-500/30 text-sky-200">
              Overdue Detect
            </div>
            <span className="text-[#555865]">→</span>
            <div className="px-2 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-200">
              Escalate
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-[#71717a] pt-1">
            <span>Google Apps Script Trigger</span>
            <span className="text-sky-400">Zero Duplicates</span>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group rounded-2xl bg-[#0f1115] border transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 ${
        project.isAutomationHighlight
          ? "border-sky-500/25 hover:border-sky-500/40 shadow-[0_4px_24px_-4px_rgba(56,189,248,0.06)]"
          : "border-white/[0.08] hover:border-white/[0.18] shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
      }`}
    >
      <div>
        {/* Top Header: Number and Status */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-xs font-mono font-bold tracking-widest text-[#71717a] group-hover:text-white transition-colors">
            {project.number}
          </span>
          {getStatusBadge()}
        </div>

        {/* Visual CSS-crafted component */}
        <div className="mb-6">{renderVisual()}</div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f4f4f6] group-hover:text-white transition-colors mb-3">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-[#8f929d] leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Project 04 Features list */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6 p-4 rounded-xl bg-[#0a0c10] border border-white/[0.05]">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#a1a1aa] block mb-2.5">
              Key Automation Capabilities:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-1.5 text-xs text-[#a1a1aa]">
                  <span className="text-sky-400 mt-0.5">•</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Footer: Tech tags and external action if allowed */}
      <div className="pt-5 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#16181f] text-[#a1a1aa] border border-white/[0.05]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* External GitHub Button ONLY for InsightBot */}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-white hover:text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] hover:border-white/20 px-3.5 py-1.5 rounded-lg transition-all duration-200 self-start sm:self-auto shrink-0"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
        )}
      </div>
    </div>
  );
}
