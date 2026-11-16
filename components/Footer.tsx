"use client";

import React from "react";
import { ArrowUp, Github } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#07080a] py-12 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Left: Wordmark & tagline */}
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-white/70" />
            <span className="font-mono text-sm font-bold tracking-widest text-[#f4f4f6]">
              AMOGH
            </span>
          </div>
          <p className="text-xs text-[#71717a] font-mono">
            &quot;Designed &amp; built with curiosity.&quot;
          </p>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-6 text-xs text-[#71717a] font-mono">
          <span>&copy; 2026 Amogh Deodhar.</span>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 text-[#8f929d] hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
