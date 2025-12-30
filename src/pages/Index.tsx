import React, { useEffect } from "react";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

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
    <div className="bg-background min-h-screen relative">
      <Hero />
      <div className="relative">
        {/* Content background with parallax */}
        <div 
          className="absolute inset-x-0 -top-40 bottom-[20rem] bg-gradient-to-b from-accent to-secondary"
          style={{
            transform: "translateY(calc(var(--scroll) * 0.3))",
          }}
        />

        <div 
          className="relative z-10 bg-accent p-8 mb-8"
          style={{
            paddingTop: "5rem"
          }}
        >
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
