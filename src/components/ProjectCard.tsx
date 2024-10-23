import React from 'react';
import { Building2, Users, TreePine, ThumbsUp } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getTypeIcon = (type: Project['type']) => {
    switch (type) {
      case 'housing':
        return <Building2 className="h-5 w-5" />;
      case 'community':
        return <Users className="h-5 w-5" />;
      case 'green_space':
        return <TreePine className="h-5 w-5" />;
      default:
        return <Building2 className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'proposed':
        return 'bg-yellow-100 text-yellow-800';
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'in_progress':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            {getTypeIcon(project.type)}
            <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
            {project.status.replace('_', ' ')}
          </span>
        </div>
        
        <p className="mt-2 text-gray-600">{project.description}</p>
        
        <div className="mt-4 flex items-center gap-4">
          <div className="flex items-center gap-1">
            <ThumbsUp className="h-4 w-4 text-emerald-600" />
            <span className="text-sm text-gray-600">{project.votes} votes</span>
          </div>
          {project.impact.housingUnits && (
            <div className="text-sm text-gray-600">
              +{project.impact.housingUnits} housing units
            </div>
          )}
          {project.impact.greenSpace && (
            <div className="text-sm text-gray-600">
              +{project.impact.greenSpace}m² green space
            </div>
          )}
        </div>
      </div>
      
      <div className="px-6 py-4 bg-gray-50 flex justify-between items-center">
        <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
          View Details
        </button>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 transition-colors">
          Vote
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;