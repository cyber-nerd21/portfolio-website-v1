"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
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
          ? "bg-[#090a0c]/85 backdrop-blur-md border-b border-white/[0.08] py-4 shadow-sm"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#home"
          className="group flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-white hover:text-white/90 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-white/80 group-hover:bg-white transition-colors" />
          <span className="font-mono text-base font-bold tracking-tight">AMOGH</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-[#12141a]/60 border border-white/[0.06] rounded-full px-4 py-1.5 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-[#8f929d] hover:text-[#f4f4f6] px-3 py-1.5 rounded-full transition-colors hover:bg-white/[0.04]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/Gigacorebess"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-[#8f929d] hover:text-white border border-white/[0.08] hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] px-3.5 py-1.5 rounded-full transition-all duration-200"
            aria-label="GitHub Profile"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#8f929d] hover:text-white p-1.5 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0e12]/95 backdrop-blur-xl border-b border-white/[0.08] px-6 py-6 transition-all">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#8f929d] hover:text-white py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/[0.08] mt-2">
              <a
                href="https://github.com/Gigacorebess"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-sm text-[#f4f4f6] py-2"
              >
                <span className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub Profile
                </span>
                <ArrowUpRight className="w-4 h-4 text-white/50" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
