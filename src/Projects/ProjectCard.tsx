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


  function truncateDescription(description: string) {
    if (description.length > 30) {
        return description.slice(0, 30) + '...';
    }
    return description;
}
  return (
    <div className="p-4 ml-10 shadow-lg rounded-md max-w-[320px]">
      <img
        src={thumbnail}
        alt={`${title} Thumbnail`}
        className="w-80 h-52 rounded-md"
      />
      <h3 className="mt-2 font-bold">{title}</h3>
      <p className="text-sm text-ellipsis overflow-hidden line-clamp-3">
        {truncateDescription(description)}
      </p>
    </div>
  );
};

export default ProjectCard;
