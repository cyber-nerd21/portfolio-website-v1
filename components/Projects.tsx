"use client";

import React from "react";
import ProjectCard, { ProjectItem } from "./ProjectCard";

const PROJECTS: ProjectItem[] = [
  {
    number: "01",
    title: "InsightBot",
    description:
      "An AI-powered document intelligence application that allows users to upload PDFs, ask natural-language questions, generate summaries and create quizzes.",
    technologies: [
      "FastAPI",
      "LangChain",
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "pgvector",
      "Gemini API",
    ],
    status: "Built · Backend unavailable",
    statusType: "built-warning",
    githubUrl: "https://github.com/cyber-nerd21/Insightbot",
    deploymentNote:
      "Frontend deployed on Vercel. Backend was hosted on Railway, but its free tier has concluded. The repository includes the complete full-stack codebase.",
  },
  {
    number: "02",
    title: "DataSense",
    description:
      "An AI-powered analytics dashboard concept for exploring datasets and generating useful insights through interactive visualizations.",
    technologies: ["Next.js", "React", "Tailwind CSS", "FastAPI", "Supabase"],
    status: "In Development",
    statusType: "development",
    githubUrl: "https://github.com/cyber-nerd21/DataSense",
  },
  {
    number: "03",
    title: "Ameya Dresswell & Boutique",
    description:
      "A web platform for a costume rental and boutique business, focused on product discovery and simplifying customer orders.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Supabase", "PostgreSQL"],
    status: "In Development",
    statusType: "development",
  },
  {
    number: "04",
    title: "Allo Innoware Automation",
    description:
      "A recurring task tracking and escalation automation prototype built using Google Sheets and Apps Script.",
    technologies: ["Google Sheets", "Google Apps Script", "JavaScript"],
    status: "Working Prototype",
    statusType: "prototype",
    features: [
      "Recurring task management",
      "Employee completion tracking",
      "Ticket ID and daily proof capture",
      "Overdue detection",
      "Manager notifications and acknowledgement",
      "Leadership escalation",
      "Duplicate notification prevention",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 px-6 sm:px-8 max-w-6xl mx-auto border-t border-[#E8E4DC]">
      {/* Section Header */}
      <div className="mb-14">
        <span className="text-xs font-mono text-[#77736C] uppercase tracking-wider block mb-2">
          03 / Selected Projects
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#242424] mb-3">
          Curated Works
        </h2>
        <p className="text-base text-[#77736C] max-w-xl">
          Practical applications spanning document intelligence, analytics dashboards, boutique e-commerce, and enterprise operational automation.
        </p>
      </div>

      {/* Two-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </section>
  );
}
