import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description: "A beautiful web application built with React and TypeScript",
    tags: ["React", "TypeScript", "Tailwind"],
    bgColor: "bg-[#F2FCE2]/90", // Original Soft Green
    tagColor: "bg-[#4CAF50]/10 text-[#4CAF50]"
  },
  {
    title: "Project Two",
    description: "An innovative solution for modern problems",
    tags: ["Next.js", "Node.js", "MongoDB"],
    bgColor: "bg-[#E8F5E9]/90", // Lighter Soft Green
    tagColor: "bg-[#2E7D32]/10 text-[#2E7D32]"
  },
  {
    title: "Project Three",
    description: "Transforming ideas into reality",
    tags: ["React", "Firebase", "Redux"],
    bgColor: "bg-[#DCEDC8]/90", // Pale Green
    tagColor: "bg-[#558B2F]/10 text-[#558B2F]"
  },
  {
    title: "Project Four",
    description: "Building seamless user experiences",
    tags: ["Vue.js", "GraphQL", "AWS"],
    bgColor: "bg-[#F1F8E9]/90", // Very Light Green
    tagColor: "bg-[#33691E]/10 text-[#33691E]"
  },
  {
    title: "Project Five",
    description: "Creating innovative digital solutions",
    tags: ["Angular", "Python", "Docker"],
    bgColor: "bg-[#E0F2F1]/90", // Mint Green
    tagColor: "bg-[#00796B]/10 text-[#00796B]"
  },
  {
    title: "Project Six",
    description: "Developing cutting-edge applications",
    tags: ["Svelte", "Go", "Kubernetes"],
    bgColor: "bg-[#F0F4C3]/90", // Light Lime
    tagColor: "bg-[#827717]/10 text-[#827717]"
  },
  {
    title: "Project Seven",
    description: "Optimizing performance at scale",
    tags: ["React", "Ruby", "Redis"],
    bgColor: "bg-[#E8F6E9]/90", // Fresh Green
    tagColor: "bg-[#1B5E20]/10 text-[#1B5E20]"
  },
  {
    title: "Project Eight",
    description: "Engineering reliable systems",
    tags: ["Java", "Spring", "PostgreSQL"],
    bgColor: "bg-[#CCE5CC]/90", // Sage Green
    tagColor: "bg-[#2E582E]/10 text-[#2E582E]"
  },
  {
    title: "Project Nine",
    description: "Crafting delightful interfaces",
    tags: ["Flutter", "Dart", "Firebase"],
    bgColor: "bg-[#E6EFE6]/90", // Misty Green
    tagColor: "bg-[#3E573E]/10 text-[#3E573E]"
  }
];

export const Projects = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-soft-text mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${project.bgColor} p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow`}
            >
              <h3 className="text-xl font-semibold text-soft-text mb-3">
                {project.title}
              </h3>
              <p className="text-soft-text/70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 ${project.tagColor} text-sm rounded-full`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};