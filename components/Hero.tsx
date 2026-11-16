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
      >
        {/* Side-by-side grid on all screen sizes */}
        <div className="grid grid-cols-12 gap-3 sm:gap-6 lg:gap-14 items-center">
          {/* Left Column: Text & Editorial Narrative */}
          <div className="col-span-7 sm:col-span-7 lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow & Status Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-1.5 sm:gap-2.5 mb-2.5 sm:mb-5"
            >
              <div className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#F2EFE8] border border-[#E8E4DC] max-w-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#77736C] shrink-0" />
                <span className="text-[9px] sm:text-[11px] font-mono font-medium tracking-wider text-[#77736C] uppercase truncate">
                  GENAI BACKEND · IT
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#EBF2EC] border border-[#D1E0D3]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4A5D4E] opacity-60" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4A5D4E]" />
                </span>
                <span className="text-[9px] sm:text-[11px] font-mono font-medium text-[#4A5D4E]">
                  Open to Internships
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-normal tracking-tight text-[#242424] leading-[1.12] mb-2.5 sm:mb-6"
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
              className="text-xs sm:text-base md:text-lg text-[#77736C] max-w-xl font-normal leading-relaxed mb-4 sm:mb-8"
            >
              I&apos;m Amogh, an engineering student and developer interested in AI,
              backend engineering and automation. I enjoy turning complex problems
              into useful software.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl bg-[#242424] text-[#FAF9F6] font-medium text-xs sm:text-sm hover:bg-[#383632] transition-all duration-200 shadow-editorial active:scale-[0.98]"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-y-0.5 text-[#FAF9F6]" />
              </a>

              <a
                href="/Amogh-Resume.pdf"
                download="Amogh-Deodhar-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl bg-[#FFFFFF] text-[#242424] border border-[#E8E4DC] hover:border-[#D3CEC4] hover:bg-[#F2EFE8] transition-all duration-200 text-xs sm:text-sm font-medium shadow-editorial active:scale-[0.98]"
              >
                <FileDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#77736C] group-hover:text-[#242424] transition-colors" />
                <span>Resume</span>
                <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#A8A49C] group-hover:text-[#242424] transition-colors" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Portrait Frame (Compact & side-by-side on mobile) */}
          <motion.div
            variants={imageVariants}
            className="col-span-5 sm:col-span-5 lg:col-span-5 flex justify-end"
          >
            <div className="relative group max-w-[145px] sm:max-w-[260px] md:max-w-[340px] lg:max-w-[360px] w-full">
              {/* Background mat / paper shadow */}
              <div className="absolute inset-0 rounded-[16px] sm:rounded-[24px] lg:rounded-[28px] bg-[#F2EFE8] transform rotate-1 transition-transform group-hover:rotate-2 duration-300 border border-[#E8E4DC]" />

              {/* Main Portrait Card */}
              <div className="relative rounded-[14px] sm:rounded-[22px] lg:rounded-[26px] bg-[#FFFFFF] p-2 sm:p-3 md:p-4 border border-[#E8E4DC] shadow-card transition-all duration-300 group-hover:shadow-card-hover">
                <div className="relative aspect-[4/4.7] w-full overflow-hidden rounded-[10px] sm:rounded-[18px] lg:rounded-[20px] bg-[#F2EFE8]">
                  <Image
                    src="/images/amogh.jpg"
                    alt="Amogh Deodhar"
                    fill
                    priority
                    sizes="(max-width: 640px) 145px, (max-width: 1024px) 260px, 360px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Editorial Caption Under Portrait (Est. completely removed) */}
                <div className="mt-2 sm:mt-3 px-0.5 sm:px-1">
                  <p className="font-serif font-medium text-[#242424] text-xs sm:text-sm leading-tight">
                    Amogh Deodhar
                  </p>
                  <p className="font-mono text-[9px] sm:text-[11px] text-[#77736C] leading-tight mt-0.5">
                    B.E. IT
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Minimalist Micro Details spanning below */}
        <motion.div
          variants={itemVariants}
          className="mt-6 sm:mt-10 pt-4 sm:pt-5 border-t border-[#E8E4DC] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#77736C]"
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
      </motion.div>
    </section>
  );
}
