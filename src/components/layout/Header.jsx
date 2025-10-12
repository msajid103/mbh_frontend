import React from 'react';
import { Plus, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header({title}) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between gap-4">
      <div className="">
        <h1 className="heading-2 " >{title}</h1>
      </div>
      {/* Create New Project Button */}
      <div className="flex items-center gap-4">     

        {/* Notification Bell */}
        <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
            M
          </div>
          <span className="text-sm font-medium text-gray-900">Martyn</span>
        </div>
      </div>
    </header>
  );
}