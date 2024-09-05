import React, { useState } from "react";
import ProjectCard from "../Projects/ProjectCard";
import ProjectDetails from "./ProjectDetails";
import projects from "../projects.json";

interface Project {
  id: number;
  Title: string;
  description: string;
  image: string;
  thumbnail: string;
  story: string;
  fechers: string[];
  skills: string[];
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number>(0);

  return (
    <>
      <div className="sticky -top-16 z-30 font-bold text-xl mt-8 w-full backdrop-filter backdrop-blur-lg bg-opacity-30 ">
      <h2 className="text-3xl font-bold text-white ml-10 mb-4">Projects</h2>
      <div className="flex overflow-x-scroll sm:scrollbar-hide">
          {projects.map((project: Project, index) => (
            <div
              key={project.id}
              className="flex-none"
              onClick={() => setSelectedProject(index)}
              role="button"
              tabIndex={0}
              aria-label={`Select project ${project.Title}`}
            >
              <ProjectCard
                title={project.Title}
                description={project.description}
                thumbnail={project.thumbnail}
              />
            </div>
          ))}
        </div>
      </div>

      <ProjectDetails project={projects[selectedProject]} />
    </>
  );
};

export default Projects;
