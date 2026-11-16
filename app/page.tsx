import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ResumeSection from "@/components/ResumeSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-[#FAF9F6] text-[#242424]">
      <Navbar />
      <div className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <ResumeSection />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
