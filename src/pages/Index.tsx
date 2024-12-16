import React from "react";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

const Index = () => {
  return (
    <main className="bg-soft-bg min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Index;