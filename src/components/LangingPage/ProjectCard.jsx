import React from 'react';

export default function ProjectCard({ item }) {
  const Icon = item.icon
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow duration-200 max-w-sm">
      {/* Icon */}
      <div className={`w-14 h-14 ${item.iconBgColor} rounded-xl flex items-center justify-center mx-auto mb-6`}>
        <Icon className={`w-7 h-7 ${item.iconColor}`} />
      </div>

      {/* Title */}
      <h3 className="text-xl text-center mb-4 text-gray-900">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-center text-gray-600 leading-relaxed">
        {item.content}
      </p>
    </div>
  );
}