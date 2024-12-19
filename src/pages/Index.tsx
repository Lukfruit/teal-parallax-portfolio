import React, { useEffect } from "react";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { FloatingShapes } from "../components/FloatingShapes";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = Math.min(window.scrollY, 1450);
      document.documentElement.style.setProperty(
        "--scroll",
        `${scrollY}px`
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#F6EFE9] min-h-screen relative">
      <FloatingShapes />
      <Hero />
      <div className="relative">
        <div className="relative z-10 bg-[#FDE1D3] p-8 mb-8">
          <About />
        </div>
        <div className="relative z-10">
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Index;