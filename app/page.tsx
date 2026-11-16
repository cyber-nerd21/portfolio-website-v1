import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between selection:bg-white/20 selection:text-white">
      <Navbar />
      <div className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
