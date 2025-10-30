import React, { useEffect, useState } from "react";
import { LogOut, Sparkles, ChevronDown, ChevronRight, X } from "lucide-react";
import logo from "../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Sidebar({ menuItems, bottomItems, isOpen, setIsOpen }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showUpgrade, setShowUpgrade] = useState(true);
  const [expandedItems, setExpandedItems] = useState({});

  // Highlight active path
  const isActive = (path) => location.pathname === path;

  // Toggle expand/collapse
  const toggleExpand = (label) => {
    setExpandedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  // Auto-expand Finance (or any parent) when inside its sub-routes
  useEffect(() => {
    menuItems.forEach((item) => {
      if (item.subItems) {
        const isChildActive = item.subItems.some((sub) =>
          location.pathname.startsWith(sub.path)
        );
        if (isChildActive) {
          setExpandedItems((prev) => ({ ...prev, [item.label]: true }));
        }
      }
    });
  }, [location.pathname]);

  // Close sidebar when on mobile
  const closeMobileSidebar = () => {
    if (window.innerWidth < 1024) setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col h-screen transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="px-6 py-3 flex items-center justify-between">
          <img
            src={logo}
            alt="Logo"
            className="w-[79.5px] h-[44px] object-contain"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto py-4 scrollbar-thin">
          <div className="space-y-1 px-3">
            {menuItems.map((item) => {
              const expanded = expandedItems[item.label];
              // highlight parent when inside any of its sub-routes
const activeParent =
  item.subItems &&
  item.subItems.some((sub) =>
    location.pathname.startsWith(sub.path)
  );


              return (
                <div key={item.label}>
                  {/* Main Parent Row */}
                  <button
                    onClick={() => {
                      if (item.subItems) toggleExpand(item.label);
                      else {
                        navigate(item.path);
                        closeMobileSidebar();
                      }
                    }}
                    className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                      activeParent || isActive(item.path)
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    {item.subItems && (
                      expanded ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )
                    )}
                  </button>

                  {/* Sub Items */}
                  {item.subItems && expanded && (
                    <div className="ml-8 mt-1 space-y-1">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          onClick={closeMobileSidebar}
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${
                            isActive(sub.path)
                              ? "bg-blue-100 text-blue-600"
                              : "text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Divider */}
          <div className="my-4 px-3 border-t border-gray-200" />

          {/* Bottom Items */}
          <div className="space-y-1 px-3">
            {bottomItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMobileSidebar}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Upgrade Card */}
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

        {/* Logout */}
        <Link
          to="/landing"
          onClick={closeMobileSidebar}
          className="btn-secondary m-4"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Logout</span>
        </Link>
      </div>
    </>
  );
}
