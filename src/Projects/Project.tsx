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
  gitFrontend:string;
  gitBackend: string;
  liveLink:string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number>(0);

  return (
    <>
      <div className="relative w-full mt-8">
        <h2 className="text-5xl font-bold text-white text-center mb-8 font-inters">
          Projects
        </h2>
        <div className="flex overflow-x-scroll sm:scrollbar-hide pb-5 space-x-5">
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

      {/* Project Details section with top padding to avoid overlap */}
      <div className="pt-10">
        <ProjectDetails project={projects[selectedProject]} />
      </div>
    </>
  );
};

export default Projects;
