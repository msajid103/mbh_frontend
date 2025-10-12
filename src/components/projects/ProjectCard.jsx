import React from 'react';
import { MapPin } from 'lucide-react';

const statusColors = {
  'In Design': 'bg-green-100 text-green-800',
  'Under Construction': 'bg-blue-100 text-blue-800',
  'Completed': 'bg-gray-100 text-gray-800',
  'On Hold': 'bg-yellow-100 text-yellow-800',
};

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow w-[20rem] h-[25rem]">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Info */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
            {project.status}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{project.location}</span>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gray-900 h-2 rounded-full transition-all"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">{project.progress}%</span>
            <span className="text-gray-600">{project.completionText}</span>
          </div>
        </div>
      </div>
    </div>
  );
}