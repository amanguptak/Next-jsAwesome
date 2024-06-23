"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SingleProject from "@/components/SingleProject";

interface ProjectClientProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    gitUrl: string;
    previewUrl: string;
  } | null;
}

const ProjectClient: React.FC<ProjectClientProps> = ({ project }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div ref={ref}>
      {project ? (
        <motion.li
          variants={cardVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3 }}
        >
          <SingleProject
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        </motion.li>
      ) : (
        <p>Project not found</p>
      )}
    </div>
  );
};

export default ProjectClient;
