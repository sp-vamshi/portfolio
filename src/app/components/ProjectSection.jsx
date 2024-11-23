"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Chatter Box",
    description: "A Real Time Chat Application",
    image: "/Images/projects/image2.png",
    tag: ["Web"],
    gitUrl: "https://github.com/sp-vamshi/ChatApp",
    previewUrl: "https://chatter-box-flame.vercel.app/",
  },
  {
    id: 2,
    title: "Get Fit",
    description: "A Fitness Landing Page",
    image: "/Images/projects/image1.png",
    tag: ["Web"],
    gitUrl: "https://github.com/sp-vamshi/fitness-app",
    previewUrl: "https://getfitbyabhi.vercel.app/",
  },
];

export default function ProjectSection() {
  const projectRef = useRef(null);
  const isInView = useInView(projectRef, { once: true });

  const cardVariants = {
    initial: { y: 50, opcatiy: 0 },
    animate: { y: 0, opcatiy: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        {" "}
        My Projects{" "}
      </h2>
      <ul ref={projectRef} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, idx) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial={"initial"}
            animate={isInView ? "animate" : "initial"}
            transition={{duration: 0.3, delay:idx*0.4}}
          >
            <ProjectCard
              imgUrl={project.image}
              title={project.title}
              description={project.description}
              previewUrl={project.previewUrl}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
