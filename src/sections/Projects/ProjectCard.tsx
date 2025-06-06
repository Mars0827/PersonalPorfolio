import React from 'react';
import { Github } from 'lucide-react';
import type { Project } from '../../types/project';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-80 h-96 flex flex-col">
      <div className="relative flex-shrink-0">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        {project.featured && (
          <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">{project.title}</h3>
        <p className="text-gray-600 mb-4 flex-1 line-clamp-2 text-sm">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4 min-h-[2rem]">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex gap-4 mt-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-medium"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;