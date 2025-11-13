import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

export default function CompleteProfile() {
  const tasks = [
    { id: 1, label: 'Setup Account', completed: true },
    { id: 2, label: 'Upload Your Photo', completed: true },
    { id: 3, label: 'Enable Desktop Notifications', completed: true },
    { id: 4, label: 'Invite Team Members(0/1)', completed: false },
    { id: 5, label: 'Complete Profile', completed: false },
    { id: 6, label: 'Install Our Mobile App', completed: false }
  ];

  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;
  const progressPercentage = (completedCount / totalCount) * 100;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Complete Your Profile</h2>
        <span className="text-sm font-medium text-blue-600">{completedCount}/{totalCount}</span>
      </div>

      {/* Progress Bar */}
      <div className="mb-2">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gray-900 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-6">{Math.round(progressPercentage)}% Complete</p>

      {/* Task List */}
      <div className="space-y-4 mb-6">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center gap-3">
            {task.completed ? (
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-gray-300 flex-shrink-0" />
            )}
            <span className={`text-base ${task.completed ? 'text-green-500' : 'text-gray-700'}`}>
              {task.label}
            </span>
          </div>
        ))}
      </div>

      {/* Continue Button */}
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors">
        Continue Setup
      </button>
    </div>
  );
}