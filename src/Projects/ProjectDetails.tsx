
import React from "react";
import { Button } from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { useState } from "react";


interface ProjectDetailsProps {
    project: {
        id: number;
        Title: string;
        description: string;
        image: string;
        story: string;
        fechers: string[];
        skills: string[];
        gitFrontend:string;
        gitBackend: string;
        liveLink:string;
    };
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
      };
    
      const getTruncatedDescription = (text: string) => {
        const words = text.split(" ");
        return words.slice(0, 20).join(" ") + (words.length > 20 ? "..." : "");
      };

    return (
        <div className="flex flex-col lg:flex-row justify-center pt-20 p-5 text-white">
            <div className="m-3 lg:m-20 max-w-[420px]">
                <h2 className="text-2xl font-bold">{project.Title}</h2>
                <img
                    src={project.image}
                    alt={project.Title}
                    className="w-full h-auto  mt-4 rounded-md"
                />
                 <p className="mt-4 font-inters">
        {isExpanded ? project.description : getTruncatedDescription(project.description)}
      </p>
      {project.description.split(" ").length > 20 && (
        <button
          onClick={toggleDescription}
          className="text-blue-500 hover:underline mt-2"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
                <div className="mt-5 space-x-4">
                    {project.liveLink &&
                     <a 
                     href={project.liveLink}
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="ml-4 inline-flex items-center"
                   >
                    
                    <Button
                        radius="full"
                        variant="ghost"
                        className="px-2 py-2 text-white border border-gray-300 hover:bg-gray-100"
                        >
                        <CiGlobe size={20} color="white" />
                        <span className="text-white text-md font-semibold tracking-wide">Live Link</span>
                    </Button>
                </a>
                }
               {project.gitFrontend && 
                <a 
                href={project.gitFrontend}
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-4 inline-flex items-center"
              >
               
                    <Button
                        radius="full"
                        variant="ghost"
                        className="px-2 py-2 text-white border border-gray-300 hover:bg-gray-100"
                        >
                        <FaGithub size={20} color="white" />
                        <span className="text-white text-md  font-semibold tracking-wide">Frontend</span>
                    </Button> 
                        </a>
                        }

                    {project.gitBackend &&
                     <a 
                     href={project.gitBackend}
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="ml-4 inline-flex items-center"
                   >
                    
                    <Button
                        radius="full"
                        variant="ghost"
                        className="px-2 py-2 text-white border border-gray-300 hover:bg-gray-100"
                        >
                        <FaGithub size={20} color="white" />
                        <span className="text-white text-md  font-semibold tracking-wide">Backend</span>
                    </Button>
                        </a>
                    }
                </div>
            </div>

            <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
                <h3 className="text-2xl font-bold mb-4 font-inters">Features</h3>
                <div className="grid gap-2 w-full">
                    {project.fechers.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center p-2 bg-slate-800 rounded-xl dark:bg-indigo-700"
                        >
                            <span className="me-2 bg-slate-600 rounded-full w-[30px] h-[30px] flex items-center justify-center">
                                {index + 1}
                            </span>
                            <p className="ml-3">{feature}</p>
                        </div>
                    ))}
                    <h3 className="mt-6 font-semibold">Skills Used:</h3>


                    <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, indx) => (
                            <div key={indx} className="p-2">
                                <p className="bg-indigo-500 text-white rounded-full px-4 py-2">
                                    {skill}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
