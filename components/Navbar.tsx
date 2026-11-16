"use client";

import React, { useState, useEffect } from "react";
import { Github, Menu, X, ArrowUpRight, FileDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E8E4DC] py-3.5 shadow-sm"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Editorial Wordmark */}
        <a
          href="#"
          className="group flex items-baseline gap-2 text-[#242424] hover:opacity-80 transition-opacity"
        >
          <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight">
            Amogh Deodhar
          </span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#77736C] hidden sm:inline">
            · Portfolio
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-[#FFFFFF] border border-[#E8E4DC] rounded-full px-4 py-1.5 shadow-editorial">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-[#77736C] hover:text-[#242424] px-3 py-1 rounded-full transition-colors hover:bg-[#F2EFE8]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Amogh-Resume.pdf"
            download="Amogh-Deodhar-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-[#242424] bg-[#FFFFFF] hover:bg-[#F2EFE8] border border-[#E8E4DC] px-3.5 py-1.5 rounded-full transition-all duration-200 shadow-editorial"
          >
            <FileDown className="w-3.5 h-3.5 text-[#77736C]" />
            <span>Resume</span>
          </a>

          <a
            href="https://github.com/cyber-nerd21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-[#242424] bg-[#242424] text-[#FAF9F6] hover:bg-[#383632] px-3.5 py-1.5 rounded-full transition-all duration-200 shadow-editorial"
            aria-label="GitHub Profile"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#242424] p-1.5 rounded-lg border border-[#E8E4DC] bg-[#FFFFFF] shadow-editorial"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#FAF9F6] border-b border-[#E8E4DC] px-6 py-6 shadow-card"
          >
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-serif text-[#242424] hover:text-[#77736C] py-1 transition-colors border-b border-[#E8E4DC]/50"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-2.5 pt-4">
                <a
                  href="/Amogh-Resume.pdf"
                  download="Amogh-Deodhar-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-medium text-[#242424] bg-[#FFFFFF] border border-[#E8E4DC] py-2 rounded-xl shadow-editorial"
                >
                  <FileDown className="w-4 h-4 text-[#77736C]" />
                  Download Resume
                </a>
                <a
                  href="https://github.com/cyber-nerd21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-mono text-[#FAF9F6] bg-[#242424] py-2 rounded-xl shadow-editorial"
                >
                  <Github className="w-4 h-4" />
                  GitHub Profile
                  <ArrowUpRight className="w-4 h-4 opacity-70" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
