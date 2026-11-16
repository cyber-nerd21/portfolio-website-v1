"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, FileDown, ArrowUpRight } from "lucide-react";
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
      className="relative pt-24 pb-14 sm:pt-36 sm:pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
      >
        {/* Left Column: Text & Editorial Narrative */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
          {/* Eyebrow & Status Row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 sm:mb-6"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-[#F2EFE8] border border-[#E8E4DC] max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#77736C] shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-mono font-medium tracking-wider text-[#77736C] uppercase truncate">
                GENAI BACKEND ENGINEER · IT
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2EC] border border-[#D1E0D3]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4A5D4E] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4A5D4E]" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono font-medium text-[#4A5D4E]">
                Open to Internships
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-3xl sm:text-5xl lg:text-7xl font-normal tracking-tight text-[#242424] leading-[1.12] mb-5 sm:mb-6"
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
            className="text-sm sm:text-base md:text-lg text-[#77736C] max-w-xl font-normal leading-relaxed mb-8"
          >
            I&apos;m Amogh, an engineering student and developer interested in AI,
            backend engineering and automation. I enjoy turning complex problems
            into useful software.
          </motion.p>

          {/* Action Buttons: Full width on mobile, inline on sm+ */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#242424] text-[#FAF9F6] font-medium text-sm hover:bg-[#383632] transition-all duration-200 shadow-editorial active:scale-[0.98]"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5 text-[#FAF9F6]" />
            </a>

            <a
              href="/Amogh-Resume.pdf"
              download="Amogh-Deodhar-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#FFFFFF] text-[#242424] border border-[#E8E4DC] hover:border-[#D3CEC4] hover:bg-[#F2EFE8] transition-all duration-200 text-sm font-medium shadow-editorial active:scale-[0.98]"
            >
              <FileDown className="w-4 h-4 text-[#77736C] group-hover:text-[#242424] transition-colors" />
              <span>Download Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#A8A49C] group-hover:text-[#242424] transition-colors" />
            </a>
          </motion.div>

          {/* Minimalist Micro Details */}
          <motion.div
            variants={itemVariants}
            className="pt-5 border-t border-[#E8E4DC] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs font-mono text-[#77736C]"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span>Bharati Vidyapeeth &apos;28</span>
              <span className="text-[#D3CEC4]">/</span>
              <span>FastAPI &amp; LangChain</span>
              <span className="text-[#D3CEC4]">/</span>
              <span>RAG</span>
            </div>
            <span>Mumbai, India · Remote Ready</span>
          </motion.div>
        </div>

        {/* Right Column: Portrait Frame */}
        <motion.div
          variants={imageVariants}
          className="lg:col-span-5 flex justify-center order-1 lg:order-2"
        >
          <div className="relative group max-w-[260px] sm:max-w-[320px] md:max-w-[360px] w-full mx-auto">
            {/* Background mat / paper shadow */}
            <div className="absolute inset-0 rounded-[24px] sm:rounded-[28px] bg-[#F2EFE8] transform rotate-1 transition-transform group-hover:rotate-2 duration-300 border border-[#E8E4DC]" />

            {/* Main Portrait Card */}
            <div className="relative rounded-[22px] sm:rounded-[26px] bg-[#FFFFFF] p-3 sm:p-4 border border-[#E8E4DC] shadow-card transition-all duration-300 group-hover:shadow-card-hover">
              <div className="relative aspect-[4/4.6] w-full overflow-hidden rounded-[18px] sm:rounded-[20px] bg-[#F2EFE8]">
                <Image
                  src="/images/amogh.jpg"
                  alt="Amogh Deodhar"
                  fill
                  priority
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 360px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Editorial Caption Under Portrait */}
              <div className="mt-3 px-1 sm:px-2 flex items-baseline justify-between text-xs">
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
