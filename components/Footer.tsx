"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#E8E4DC] bg-[#FAF9F6] py-12 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h4 className="font-serif text-lg font-medium text-[#242424] mb-1">
            Amogh Deodhar
          </h4>
          <p className="text-xs text-[#77736C] font-mono">
            Built with curiosity.
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs text-[#77736C] font-mono">
          <span>&copy; 2026</span>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 text-[#242424] hover:text-[#77736C] transition-colors"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
