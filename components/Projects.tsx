"use client";

import React from "react";
import ProjectCard, { ProjectData } from "./ProjectCard";

const PROJECTS: ProjectData[] = [
  {
    number: "01",
    title: "InsightBot",
    description:
      "An AI-powered document question-answering application that allows users to upload PDFs and ask questions using a Retrieval-Augmented Generation (RAG) pipeline.",
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "FAISS",
      "Gemini API",
      "React",
    ],
    status: "Built",
    githubUrl: "https://github.com/Gigacorebess",
  },
  {
    number: "02",
    title: "Ameya Dresswell & Boutique",
    description:
      "A web platform concept for a costume rental and boutique business, focused on product discovery and simplifying the customer ordering experience.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Supabase", "PostgreSQL"],
    status: "In Development",
  },
  {
    number: "03",
    title: "DataSense",
    description:
      "An AI-powered no-code analytics dashboard concept designed to help users explore datasets and generate useful insights through interactive visualizations.",
    technologies: ["Next.js", "React", "Tailwind CSS", "FastAPI", "Supabase"],
    status: "Concept / Exploring",
  },
  {
    number: "04",
    title: "Allo Innoware Automation",
    description:
      "A Google Sheets and Google Apps Script-based recurring task tracking and escalation automation prototype.",
    technologies: ["Google Sheets", "Google Apps Script", "JavaScript"],
    status: "Working Prototype",
    isAutomationHighlight: true,
    features: [
      "Recurring task cycle management",
      "Employee completion tracking",
      "Ticket ID and daily proof capture",
      "Automated overdue detection",
      "Manager notifications",
      "Manager acknowledgement",
      "Leadership escalation",
      "Duplicate alert prevention",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
      {/* Section Header */}
      <div className="mb-14">
        <span className="text-xs font-mono text-[#71717a] uppercase tracking-wider block mb-2">
          02 / Projects
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f4f4f6] mb-3">
          Selected Projects
        </h2>
        <p className="text-base text-[#8f929d] max-w-xl">
          Some things I&apos;ve been building and exploring.
        </p>
      </div>

      {/* Responsive Two-Column Grid on Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </section>
  );
}
