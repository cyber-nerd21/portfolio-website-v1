"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#E8E4DC] bg-[#FAF9F6] py-10 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div>
          <h4 className="font-serif text-lg font-medium text-[#242424]">
            Amogh Deodhar
          </h4>
        </div>

        <div>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 text-xs font-mono text-[#242424] hover:text-[#77736C] transition-colors"
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
