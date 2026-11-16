"use client";

import React, { useState } from "react";
import { Mail, Phone, Github, ArrowUpRight, Copy, Check, MessageSquare } from "lucide-react";

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
      <div className="max-w-3xl">
        <span className="text-xs font-mono text-[#71717a] uppercase tracking-wider block mb-2">
          04 / Contact
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f4f4f6] mb-4">
          Have something interesting in mind?
        </h2>
        <p className="text-base sm:text-lg text-[#8f929d] leading-relaxed mb-12">
          I&apos;m always interested in learning, building and connecting with people working on interesting problems.
        </p>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {/* Email */}
          <a
            href="mailto:amoghdeodhar886@gmail.com"
            className="group relative p-5 rounded-2xl bg-[#0f1115] border border-white/[0.08] hover:border-white/[0.2] transition-all duration-200 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-xl bg-white/[0.04] text-white/80 group-hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <button
                onClick={(e) => copyToClipboard("amoghdeodhar886@gmail.com", "email", e)}
                title="Copy email address"
                className="p-1.5 rounded-lg text-[#71717a] hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                {copiedField === "email" ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            <div>
              <span className="text-xs font-mono text-[#71717a] block mb-1">
                EMAIL DIRECT
              </span>
              <span className="text-sm font-medium text-[#f4f4f6] group-hover:text-white transition-colors break-all">
                amoghdeodhar886@gmail.com
              </span>
            </div>

            <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-[#71717a]">
              <span>Send Mail</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+919130677940"
            className="group relative p-5 rounded-2xl bg-[#0f1115] border border-white/[0.08] hover:border-white/[0.2] transition-all duration-200 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-xl bg-white/[0.04] text-white/80 group-hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <button
                onClick={(e) => copyToClipboard("+91 9130677940", "phone", e)}
                title="Copy phone number"
                className="p-1.5 rounded-lg text-[#71717a] hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                {copiedField === "phone" ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            <div>
              <span className="text-xs font-mono text-[#71717a] block mb-1">
                PHONE / WHATSAPP
              </span>
              <span className="text-sm font-medium text-[#f4f4f6] group-hover:text-white transition-colors">
                +91 9130677940
              </span>
            </div>

            <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-[#71717a]">
              <span>Place Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Gigacorebess"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-5 rounded-2xl bg-[#0f1115] border border-white/[0.08] hover:border-white/[0.2] transition-all duration-200 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-xl bg-white/[0.04] text-white/80 group-hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                Active
              </span>
            </div>

            <div>
              <span className="text-xs font-mono text-[#71717a] block mb-1">
                GITHUB PROFILE
              </span>
              <span className="text-sm font-medium text-[#f4f4f6] group-hover:text-white transition-colors">
                github.com/Gigacorebess
              </span>
            </div>

            <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-[#71717a]">
              <span>Visit Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
