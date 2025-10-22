import React from 'react';
import { Bell, Menu, Settings } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header({ title, toggleSidebar }) {
  const { user } = useSelector(store => store.auth)

  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        <h1 className="heading-2 text-lg sm:text-xl md:text-2xl">{title}</h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 sm:gap-4">
        <Link to="/settings">
          <Settings />
        </Link>
        {/* Notification Bell */}
        <Link className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </Link>

        {/* User Profile */}
        <div className="flex items-center gap-2 sm:gap-3 pl-2 sm:pl-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#DBEAFE] rounded-full flex items-center justify-center text-blue-700 font-semibold text-sm sm:text-base">
            {user.personalInfo.firstName[0]}
          </div>
          <span className="hidden sm:block text-sm font-medium text-gray-900">{user.personalInfo.firstName}</span>
        </div>
      </div>
    </header>
  );
}