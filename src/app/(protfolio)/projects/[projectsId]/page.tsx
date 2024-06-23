import React from "react";
import { projectsData } from "@/lib/resume";
import ProjectClient from "@/components/ProjectClient";
import { Metadata } from "next";

interface ProjectPageProps {
  params: {
    projectsId: string;
  };
}

export async function generateStaticParams() {
  const projectIds = projectsData.map((project) => ({
    projectsId: project.id.toString(),
  }));

  return projectIds;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const projectId = parseInt(params.projectsId, 10);
  const project = projectsData.find((project) => project.id === projectId);

  return {
    title: project ? project.title : "Project Not Found",
  };
}

const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {
  const projectId = parseInt(params.projectsId, 10);
  const project = projectsData.find((project) => project.id === projectId) || null;

  return <ProjectClient project={project} />;
};

export default ProjectPage;
