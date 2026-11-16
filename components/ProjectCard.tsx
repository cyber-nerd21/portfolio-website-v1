"use client";

import React from "react";
import { Github, ArrowUpRight, AlertCircle, FileText, BarChart3, ShoppingBag, Workflow, Clock } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export interface ProjectItem {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  status: string;
  statusType: "built-warning" | "development" | "prototype";
  githubUrl?: string;
  deploymentNote?: string;
  features?: string[];
}

export default function ProjectCard({ project }: { project: ProjectItem }) {
  const shouldReduceMotion = useReducedMotion();

  // Status Badge Rendering
  const renderStatus = () => {
    switch (project.statusType) {
      case "built-warning":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-[#FFF8EB] text-[#8C6A43] border border-[#F3E3C7]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8C6A43]" />
            {project.status}
          </span>
        );
      case "development":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-[#F2EFE8] text-[#77736C] border border-[#E8E4DC]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#77736C]" />
            {project.status}
          </span>
        );
      case "prototype":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-[#EBF2EC] text-[#4A5D4E] border border-[#D1E0D3]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A5D4E] animate-pulse" />
            {project.status}
          </span>
        );
    }
  };

  // Pure CSS visual mockup per project
  const renderVisual = () => {
    if (project.title === "InsightBot") {
      return (
        <div className="w-full h-40 rounded-xl bg-[#FAF9F6] border border-[#E8E4DC] p-4 flex flex-col justify-between relative overflow-hidden font-mono text-[11px]">
          <div className="flex items-center justify-between text-[#77736C] border-b border-[#E8E4DC] pb-2">
            <span className="flex items-center gap-1.5 text-[#242424] font-medium">
              <FileText className="w-3.5 h-3.5 text-[#4A5D4E]" />
              rag_pipeline.py
            </span>
            <span className="text-[10px] text-[#4A5D4E] bg-[#EBF2EC] px-2 py-0.5 rounded border border-[#D1E0D3]">
              3072-dim pgvector
            </span>
          </div>

          <div className="space-y-1.5 py-1.5 text-[#77736C]">
            <div className="flex items-center gap-2">
              <span className="text-[#A8A49C]">&gt;</span>
              <span>retriever = db.as_retriever(k=4, metric=&quot;cosine&quot;)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#A8A49C]">&gt;</span>
              <span className="text-[#242424] font-medium">
                llm = ChatGoogleGenAI(model=&quot;gemini-flash&quot;)
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-[#77736C] pt-2 border-t border-[#E8E4DC]">
            <span>FastAPI Async Endpoint</span>
            <span className="text-[#8C6A43] font-medium">Backend: Suspended (Railway Free Tier Ended)</span>
          </div>
        </div>
      );
    }

    if (project.title === "DataSense") {
      return (
        <div className="w-full h-40 rounded-xl bg-[#FAF9F6] border border-[#E8E4DC] p-4 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between text-xs border-b border-[#E8E4DC] pb-2">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#242424] font-medium">
              <BarChart3 className="w-3.5 h-3.5 text-[#8C6A43]" />
              <span>Automated KPI Visualizer</span>
            </div>
            <span className="font-mono text-[10px] text-[#77736C] bg-[#F2EFE8] px-2 py-0.5 rounded border border-[#E8E4DC]">
              No-Code Engine
            </span>
          </div>

          {/* Minimalist Editorial Bar Chart Simulation */}
          <div className="flex items-end gap-2.5 h-16 pt-3 px-2">
            <div className="w-full bg-[#F2EFE8] rounded-t flex items-end justify-center p-0.5 h-full">
              <div className="w-full bg-[#D3CEC4] rounded-t h-[40%]" />
            </div>
            <div className="w-full bg-[#F2EFE8] rounded-t flex items-end justify-center p-0.5 h-full">
              <div className="w-full bg-[#8C6A43] rounded-t h-[75%]" />
            </div>
            <div className="w-full bg-[#F2EFE8] rounded-t flex items-end justify-center p-0.5 h-full">
              <div className="w-full bg-[#4A5D4E] rounded-t h-[95%]" />
            </div>
            <div className="w-full bg-[#F2EFE8] rounded-t flex items-end justify-center p-0.5 h-full">
              <div className="w-full bg-[#A35C4A] rounded-t h-[60%]" />
            </div>
            <div className="w-full bg-[#F2EFE8] rounded-t flex items-end justify-center p-0.5 h-full">
              <div className="w-full bg-[#242424] rounded-t h-[85%]" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-[#77736C] pt-2 border-t border-[#E8E4DC]">
            <span>Automated KPI Correlation</span>
            <span>Dynamic Chart Generator</span>
          </div>
        </div>
      );
    }

    if (project.title === "Ameya Dresswell & Boutique") {
      return (
        <div className="w-full h-40 rounded-xl bg-[#FAF9F6] border border-[#E8E4DC] p-4 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between text-xs border-b border-[#E8E4DC] pb-2">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#242424] font-medium">
              <ShoppingBag className="w-3.5 h-3.5 text-[#A35C4A]" />
              <span>Costume Rental Architecture</span>
            </div>
            <span className="font-mono text-[10px] text-[#A35C4A] bg-[#FDF2F0] px-2 py-0.5 rounded border border-[#FADAD5]">
              Catalog &amp; Booking
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 py-2">
            <div className="bg-[#FFFFFF] border border-[#E8E4DC] rounded-lg p-2.5 flex flex-col justify-between shadow-editorial">
              <span className="text-[10px] text-[#77736C] font-mono">DRESS 01</span>
              <div className="h-1.5 w-12 bg-[#E8E4DC] rounded mt-1.5" />
              <span className="text-[10px] text-[#4A5D4E] font-mono font-medium mt-1">Available</span>
            </div>
            <div className="bg-[#FFFFFF] border border-[#E8E4DC] rounded-lg p-2.5 flex flex-col justify-between shadow-editorial">
              <span className="text-[10px] text-[#77736C] font-mono">DRESS 02</span>
              <div className="h-1.5 w-10 bg-[#E8E4DC] rounded mt-1.5" />
              <span className="text-[10px] text-[#8C6A43] font-mono font-medium mt-1">Reserved</span>
            </div>
            <div className="bg-[#FFFFFF] border border-[#E8E4DC] rounded-lg p-2.5 flex flex-col justify-between shadow-editorial">
              <span className="text-[10px] text-[#77736C] font-mono">DRESS 03</span>
              <div className="h-1.5 w-14 bg-[#E8E4DC] rounded mt-1.5" />
              <span className="text-[10px] text-[#4A5D4E] font-mono font-medium mt-1">Available</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-[#77736C] pt-2 border-t border-[#E8E4DC]">
            <span>Product Discovery</span>
            <span>Simplified Order Flow</span>
          </div>
        </div>
      );
    }

    if (project.title === "Allo Innoware Automation") {
      return (
        <div className="w-full h-40 rounded-xl bg-[#FAF9F6] border border-[#E8E4DC] p-4 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between text-xs border-b border-[#E8E4DC] pb-2">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#242424] font-medium">
              <Workflow className="w-3.5 h-3.5 text-[#4A5D4E]" />
              <span>Operational Escalation Engine</span>
            </div>
            <span className="font-mono text-[10px] text-[#4A5D4E] bg-[#EBF2EC] px-2 py-0.5 rounded border border-[#D1E0D3]">
              Workflow Automation
            </span>
          </div>

          {/* Workflow Sequence */}
          <div className="flex items-center justify-between gap-1 text-[10px] font-mono py-2">
            <div className="px-2 py-1 rounded bg-[#FFFFFF] border border-[#E8E4DC] text-[#242424] shadow-editorial">
              Task Cycle
            </div>
            <span className="text-[#A8A49C]">→</span>
            <div className="px-2 py-1 rounded bg-[#FFFFFF] border border-[#E8E4DC] text-[#242424] shadow-editorial">
              Proof Upload
            </div>
            <span className="text-[#A8A49C]">→</span>
            <div className="px-2 py-1 rounded bg-[#FFFFFF] border border-[#E8E4DC] text-[#242424] shadow-editorial">
              Overdue Scan
            </div>
            <span className="text-[#A8A49C]">→</span>
            <div className="px-2 py-1 rounded bg-[#FDF2F0] border border-[#FADAD5] text-[#A35C4A]">
              Escalate
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-[#77736C] pt-2 border-t border-[#E8E4DC]">
            <span>Google Apps Script Trigger</span>
            <span className="text-[#4A5D4E] font-medium">Zero Duplicate Alerts</span>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
      className="group relative rounded-2xl bg-[#FFFFFF] border border-[#E8E4DC] p-6 sm:p-7 hover:border-[#D3CEC4] hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Header: Project Number and Status */}
        <div className="flex items-center justify-between mb-5">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#77736C]">
            PROJECT {project.number}
          </span>
          {renderStatus()}
        </div>

        {/* Visual Preview */}
        <div className="mb-6">{renderVisual()}</div>

        {/* Title */}
        <h3 className="font-serif text-2xl font-medium tracking-tight text-[#242424] group-hover:text-[#4A5D4E] transition-colors mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#77736C] leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Deployment note if present (e.g. InsightBot Railway status) */}
        {project.deploymentNote && (
          <div className="mb-5 p-3 rounded-xl bg-[#FFF8EB] border border-[#F3E3C7] flex items-start gap-2 text-xs text-[#8C6A43] leading-relaxed">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#8C6A43]" />
            <span>{project.deploymentNote}</span>
          </div>
        )}

        {/* Project 04 Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-5 p-4 rounded-xl bg-[#FAF9F6] border border-[#E8E4DC]">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#77736C] block mb-2.5">
              Features &amp; Automations:
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#45433F]">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-[#4A5D4E]">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer: Tech tags and GitHub link if allowed */}
      <div className="pt-5 border-t border-[#E8E4DC] flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F2EFE8] text-[#77736C] border border-[#E8E4DC]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub link ONLY for InsightBot and DataSense as specified */}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#242424] hover:text-[#FFFFFF] bg-[#FFFFFF] hover:bg-[#242424] border border-[#E8E4DC] hover:border-[#242424] px-3.5 py-1.5 rounded-lg transition-all duration-200 self-start sm:self-auto shrink-0 shadow-editorial"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
