import React, { useState, useEffect } from 'react';
import {
  House, CheckSquare, DollarSign,
  FileText, MessageSquare, BarChart3, Briefcase,
  Settings, HelpCircle, MessageCircle, Users,
  Globe, Clock
} from 'lucide-react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import { useLocation } from 'react-router-dom';

const menuItems = [
  { icon: House, label: 'MyBuild', path: '/mybuild' },
  { icon: CheckSquare, label: 'Tasks', path: '/tasks' },
  {
    icon: DollarSign,
    label: 'Finance',
    path: '/finance',
    subItems: [
      { label: 'Dashboard', path: '/finance/dashboard' },
      { label: 'Cost Management', path: '/finance/cost-management' }
    ]
  },
  {
    icon: Clock,
    label: 'Timeline',
    path: '/timeline',
    subItems: [
      { label: 'Milestones', path: '/timeline/milestones' },
      { label: 'Scheduling', path: '/timeline/Scheduling' }
    ]
  },
  { icon: FileText, label: 'Documents', path: '/documents' },
  { icon: MessageSquare, label: 'Messages', path: '/messages' },
  { icon: BarChart3, label: 'Reports', path: '/reports' },
  { icon: Users, label: 'Team', path: '/team' },

];

const bottomItems = [
  { icon: HelpCircle, label: 'Help Centre', path: '/help' },
  { icon: Briefcase, label: 'Consultant Hub', path: '/consultant' },
  { icon: Globe, label: 'Community Forum', path: '/community' },
];

export default function DashboardLayout({ children }) {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Get all items including sub-items for matching
  const getAllItems = () => {
    const items = [];
    [...menuItems, ...bottomItems].forEach(item => {
      items.push(item);
      if (item.subItems) {
        items.push(...item.subItems);
      }
    });
    return items;
  };

  const allItems = getAllItems();
  const activeItem = allItems.find(item => location.pathname.startsWith(item.path)) || menuItems[0];

  // Close sidebar when route changes on mobile
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        menuItems={menuItems}
        bottomItems={bottomItems}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden w-full lg:w-auto">
        {/* Header */}
        <Header
          title={activeItem.label}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />


   
        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="max-w-[80vw] px-4 sm:px-6 py-4">
            {children}
          </div>

       
          <div className="fixed bottom-6 right-6 z-50">
            <button
              className="btn-primary rounded-full"
              onClick={() => {
                console.log('Help button clicked');          
              }}
            >
              Help
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}