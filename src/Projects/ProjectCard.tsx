import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  thumbnail: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  thumbnail,
}) => {
  return (
    <div className="p-4 ml-10 shadow-lg rounded-md">
      <img src={thumbnail} alt={`${title} Thumbnail`} className="w-full h-auto rounded-md" />
      <h3 className="mt-2 font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default ProjectCard;
