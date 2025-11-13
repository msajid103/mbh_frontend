import React from 'react';
import { Check } from 'lucide-react';

export default function Roadmap() {
  const stages = [
    { id: 1, name: 'Planning', completed: true },
    { id: 2, name: 'Design', completed: true },
    { id: 3, name: 'Construction', completed: true },
    { id: 4, name: 'Review', completed: false },
    { id: 5, name: 'Handover', completed: false }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-8">Roadmap</h2>
      
      {/* Progress Steps */}
      <div className="flex items-center justify-between">
        {stages.map((stage) => (
          <div key={stage.id} className="flex items-center">
            <div className="flex flex-col items-center">
              {/* Circle */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                stage.completed 
                  ? 'bg-blue-600' 
                  : 'bg-gray-300'
              }`}>
                {stage.completed && (
                  <Check className="w-6 h-6 text-white" />
                )}
              </div>
              
              {/* Label */}
              <span className="mt-3 text-sm text-gray-700">{stage.name}</span>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
}