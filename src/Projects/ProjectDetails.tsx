import { div } from "framer-motion/client";
import React from "react";

interface ProjectDetailsProps {
    project: {
        id: number;
        Title: string;
        description: string;
        image: string;
        story: string;
        fechers: string[];
        skills: string[];
    };
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
    return (
        <div className="flex justify-center p-5 text-white">
            <div className="m-20">
                <h2 className="text-2xl font-bold">{project.Title}</h2>
                <img
                    src={project.image}
                    alt={project.Title}
                    className="w-64 h-auto mt-4 rounded-md"
                />
            </div>

            <div className="w-full mt-12">
                <h3 className="text-2xl font-bold mb-4">Features</h3>
                <div className="grid gap-2 w-full">
                    {project.fechers.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center p-2 bg-slate-800 rounded-xl dark:bg-indigo-700 w-[70%] mb-2"
                        >
                            <span className="me-1 bg-slate-600 rounded-full w-[30px] h-[30px] flex items-center justify-center">
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
