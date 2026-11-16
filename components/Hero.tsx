"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, FileDown, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion, Variants } from "framer-motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 sm:px-8 max-w-6xl mx-auto"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center"
      >
        {/* Left Column: Text & Editorial Narrative */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Eyebrow & Status Row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2EFE8] border border-[#E8E4DC]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#77736C]" />
              <span className="text-[11px] font-mono font-medium tracking-widest text-[#77736C] uppercase">
                GENAI BACKEND ENGINEER · INFORMATION TECHNOLOGY
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2EC] border border-[#D1E0D3]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4A5D4E] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4A5D4E]" />
              </span>
              <span className="text-[11px] font-mono font-medium text-[#4A5D4E]">
                Open to Internship Opportunities
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#242424] leading-[1.08] mb-6"
          >
            Curious mind.
            <br />
            <span className="italic text-[#77736C] font-light">
              Building intelligent
            </span>{" "}
            things.
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-[#77736C] max-w-xl font-normal leading-relaxed mb-9"
          >
            I&apos;m Amogh, an engineering student and developer interested in AI,
            backend engineering and automation. I enjoy turning complex problems
            into useful software.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#242424] text-[#FAF9F6] font-medium text-sm hover:bg-[#383632] transition-all duration-200 shadow-editorial active:scale-[0.98]"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5 text-[#FAF9F6]" />
            </a>

            <a
              href="/Amogh-Resume.pdf"
              download="Amogh-Deodhar-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#FFFFFF] text-[#242424] border border-[#E8E4DC] hover:border-[#D3CEC4] hover:bg-[#F2EFE8] transition-all duration-200 text-sm font-medium shadow-editorial active:scale-[0.98]"
            >
              <FileDown className="w-4 h-4 text-[#77736C] group-hover:text-[#242424] transition-colors" />
              <span>Download Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#A8A49C] group-hover:text-[#242424] transition-colors" />
            </a>
          </motion.div>

          {/* Minimalist Micro Details */}
          <motion.div
            variants={itemVariants}
            className="pt-6 border-t border-[#E8E4DC] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#77736C]"
          >
            <div className="flex items-center gap-3">
              <span>Bharati Vidyapeeth &apos;28</span>
              <span className="text-[#D3CEC4]">/</span>
              <span>FastAPI &amp; LangChain</span>
              <span className="text-[#D3CEC4]">/</span>
              <span>RAG Pipelines</span>
            </div>
            <span>Mumbai, India</span>
          </motion.div>
        </div>

        {/* Right Column: Beautiful Editorial Portrait Frame */}
        <motion.div
          variants={imageVariants}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative group max-w-[340px] sm:max-w-[380px] w-full">
            {/* Background mat / paper shadow */}
            <div className="absolute inset-0 rounded-[28px] bg-[#F2EFE8] transform rotate-1 transition-transform group-hover:rotate-2 duration-300 border border-[#E8E4DC]" />

            {/* Main Portrait Card */}
            <div className="relative rounded-[26px] bg-[#FFFFFF] p-3 sm:p-4 border border-[#E8E4DC] shadow-card transition-all duration-300 group-hover:shadow-card-hover">
              <div className="relative aspect-[4/4.6] w-full overflow-hidden rounded-[20px] bg-[#F2EFE8]">
                <Image
                  src="/images/amogh.jpg"
                  alt="Amogh Deodhar"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Editorial Caption Under Portrait */}
              <div className="mt-3.5 px-2 flex items-baseline justify-between text-xs">
                <div>
                  <p className="font-serif font-medium text-[#242424] text-sm">
                    Amogh Deodhar
                  </p>
                  <p className="font-mono text-[11px] text-[#77736C]">
                    B.E. Information Technology
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2 py-0.5 rounded font-mono text-[10px] bg-[#F2EFE8] text-[#77736C] border border-[#E8E4DC]">
                    Est. 2028
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
