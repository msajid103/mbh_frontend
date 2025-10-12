import React, { useState } from 'react';
import { LogOut, Sparkles } from 'lucide-react';
import logo from "../../assets/logo.png"
import { Link, useLocation } from 'react-router-dom';



export default function Sidebar({ menuItems, bottomItems }) {
  const location = useLocation();
  const [showUpgrade, setShowUpgrade] = useState(true);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen">
      {/* Logo */}
      <div className="px-6 py-3 border-b border-gray-200">
         <img
          src={logo}
          alt="VAT Buddy Logo"
          className="w-[79.515625px] h-[44px] object-contain"
        />
      </div>

      {/* Main Navigation - Scrollable */}
      <nav className="flex-1 overflow-y-auto py-4 scrollbar-thin">
        {/* Top Menu Items */}
        <div className="space-y-1 px-3">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                isActive(item.path)
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="my-4 px-3">
          <div className="border-t border-gray-200"></div>
        </div>

        {/* Bottom Menu Items */}
        <div className="space-y-1 px-3">
          {bottomItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                isActive(item.path)
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Upgrade Plan Card */}
        {showUpgrade && (
          <div className="mx-3 mt-4 mb-2">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white relative overflow-hidden">
              <button
                onClick={() => setShowUpgrade(false)}
                className="absolute top-2 right-2 text-white/80 hover:text-white"
              >
                ×
              </button>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold text-sm">Upgrade Plan</span>
              </div>
              <p className="text-xs text-white/90 mb-3">
                Get access to all premium features
              </p>
              <button className="w-full bg-white text-blue-600 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors">
                Upgrade Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-100 w-full transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}