import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-soft-text mb-6">
            Hello, I'm
            <span className="text-primary block mt-2">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-soft-text/80">
            I create beautiful digital experiences
          </p>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-soft-bg to-soft-bg/50" />
    </section>
  );
};