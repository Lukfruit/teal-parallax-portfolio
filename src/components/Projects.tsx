import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description: "An innovative solution for modern problems",
    tags: ["Next.js", "Node.js", "MongoDB"],
    bgColor: "bg-[#F3E8E8]", // Soft rose
    tagColor: "bg-[#8B4513]", // Saddle brown
  },
  {
    title: "Project Two",
    description: "Creating intuitive interfaces",
    tags: ["Angular", "Python", "Docker"],
    bgColor: "bg-[#ECF3E8]", // Soft sage
    tagColor: "bg-[#4F7942]", // Fern green
  },
  {
    title: "Project Three",
    description: "Building with modern technologies",
    tags: ["React", "TypeScript", "AWS"],
    bgColor: "bg-[#E5DEFF]", // Soft purple
    tagColor: "bg-[#6B46C1]", // Deep purple
  },
  {
    title: "Project Four",
    description: "Crafting digital experiences",
    tags: ["Vue", "GraphQL", "Tailwind"],
    bgColor: "bg-[#D3E4FD]", // Soft blue
    tagColor: "bg-[#2563EB]", // Royal blue
  },
  {
    title: "Project Five",
    description: "Innovative web solutions",
    tags: ["React", "Node.js", "PostgreSQL"],
    bgColor: "bg-[#FFE4D6]", // Lighter peach
    tagColor: "bg-[#C2410C]", // Burnt orange
  },
  {
    title: "Project Six",
    description: "Modern application development",
    tags: ["Next.js", "tRPC", "Prisma"],
    bgColor: "bg-[#E0F2F1]", // Soft mint
    tagColor: "bg-[#0F766E]", // Dark teal
  },
  {
    title: "Project Seven",
    description: "Cloud-native solutions",
    tags: ["React", "AWS", "Docker"],
    bgColor: "bg-[#F0E7F3]", // Soft lilac
    tagColor: "bg-[#7E22CE]", // Rich purple
  },
  {
    title: "Project Eight",
    description: "Enterprise applications",
    tags: ["Angular", "Java", "Spring"],
    bgColor: "bg-[#EDE9FE]", // Soft violet
    tagColor: "bg-[#6D28D9]", // Violet
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
                    className={`px-3 py-1 ${project.tagColor} text-white text-sm rounded-full`}
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