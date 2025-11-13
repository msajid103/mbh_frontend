import React from 'react';
import { Filter, ChevronDown } from 'lucide-react';

export default function Timeline() {
  const tasks = [
    { id: 1, title: 'Contact customers with hel...', color: 'bg-yellow-100', textColor: 'text-yellow-900', startCol: 1, span: 3, avatarBg: 'bg-red-400' },
    { id: 2, title: 'Dashboard: concept', color: 'bg-blue-100', textColor: 'text-blue-900', startCol: 3, span: 2, avatarBg: 'bg-gray-400' },
    { id: 3, title: 'Extension: show', color: 'bg-blue-100', textColor: 'text-blue-900', startCol: 6, span: 2, avatarBg: 'bg-orange-400' },
    { id: 4, title: 'Task detail modal', color: 'bg-pink-100', textColor: 'text-pink-900', startCol: 3, span: 3, avatarBg: 'bg-purple-400', row: 2 },
    { id: 5, title: 'Help Docs: updat', color: 'bg-pink-100', textColor: 'text-pink-900', startCol: 7, span: 2, avatarBg: 'bg-blue-500', row: 2 },
    { id: 6, title: 'Reporting: Desigi', color: 'bg-blue-100', textColor: 'text-blue-900', startCol: 3, span: 2, avatarBg: 'bg-orange-500', row: 3 }
  ];

  const timeSlots = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00'];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Timeline</h2>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">October, 2024</span>
          <button className="p-2 hover:bg-gray-100 rounded">
            <Filter className="w-4 h-4 text-gray-600" />
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 rounded">
            <span className="text-sm text-gray-700">Month</span>
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Time Slots */}
      <div className="grid grid-cols-7 gap-4 mb-4">
        {timeSlots.map((time, index) => (
          <div key={index} className="text-xs text-gray-500 text-center">
            {time}
          </div>
        ))}
      </div>

      {/* Timeline Grid */}
      <div className="relative" style={{ minHeight: '300px' }}>
        {/* Grid Lines */}
        <div className="absolute inset-0 grid grid-cols-7 gap-4">
          {timeSlots.map((_, index) => (
            <div key={index} className="border-r border-gray-100 last:border-r-0"></div>
          ))}
        </div>

        {/* Tasks */}
        <div className="relative grid grid-cols-7 gap-4" style={{ gridTemplateRows: 'repeat(3, 80px)' }}>
          {/* Row 1 */}
          <div className="col-start-1 col-span-3 flex items-center">
            <div className={`${tasks[0].color} ${tasks[0].textColor} rounded-lg px-4 py-3 flex items-center justify-between w-full`}>
              <span className="text-sm font-medium">{tasks[0].title}</span>
              <div className={`${tasks[0].avatarBg} w-6 h-6 rounded-full flex-shrink-0`}></div>
            </div>
          </div>
          
          <div className="col-start-3 col-span-2 flex items-center">
            <div className={`${tasks[1].color} ${tasks[1].textColor} rounded-lg px-4 py-3 flex items-center justify-between w-full`}>
              <span className="text-sm font-medium">{tasks[1].title}</span>
              <div className={`${tasks[1].avatarBg} w-6 h-6 rounded-full flex-shrink-0`}></div>
            </div>
          </div>
          
          <div className="col-start-6 col-span-2 flex items-center">
            <div className={`${tasks[2].color} ${tasks[2].textColor} rounded-lg px-4 py-3 flex items-center justify-between w-full`}>
              <span className="text-sm font-medium">{tasks[2].title}</span>
              <div className={`${tasks[2].avatarBg} w-6 h-6 rounded-full flex-shrink-0`}></div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="col-start-3 col-span-3 flex items-center">
            <div className={`${tasks[3].color} ${tasks[3].textColor} rounded-lg px-4 py-3 flex items-center justify-between w-full`}>
              <span className="text-sm font-medium">{tasks[3].title}</span>
              <div className={`${tasks[3].avatarBg} w-6 h-6 rounded-full flex-shrink-0`}></div>
            </div>
          </div>
          
          <div className="col-start-7 col-span-2 flex items-center">
            <div className={`${tasks[4].color} ${tasks[4].textColor} rounded-lg px-4 py-3 flex items-center justify-between w-full`}>
              <span className="text-sm font-medium">{tasks[4].title}</span>
              <div className={`${tasks[4].avatarBg} w-6 h-6 rounded-full flex-shrink-0`}></div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="col-start-3 col-span-2 flex items-center">
            <div className={`${tasks[5].color} ${tasks[5].textColor} rounded-lg px-4 py-3 flex items-center justify-between w-full`}>
              <span className="text-sm font-medium">{tasks[5].title}</span>
              <div className={`${tasks[5].avatarBg} w-6 h-6 rounded-full flex-shrink-0`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}