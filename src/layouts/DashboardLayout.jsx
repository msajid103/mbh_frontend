import React from 'react';
import {
  LayoutDashboard, CheckSquare, DollarSign,
  FileText, MessageSquare, BarChart3, Briefcase,
  Settings, HelpCircle, MessageCircle, Users,
  Globe
} from 'lucide-react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import Breadcrumb from '../components/layout/Breadcrumb';
import { useLocation } from 'react-router-dom';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: CheckSquare, label: 'Tasks', path: '/tasks' },
  { icon: DollarSign, label: 'Finance', path: '/finance' },
  { icon: FileText, label: 'Documents', path: '/documents' },
  { icon: MessageSquare, label: 'Messages', path: '/messages' },
  { icon: BarChart3, label: 'Reports', path: '/reports' },
  { icon: Briefcase, label: 'Project management', path: '/projects' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const bottomItems = [
  { icon: HelpCircle, label: 'Help Centre', path: '/help' },
  { icon: Users, label: 'Team', path: '/team' },
  { icon: Briefcase, label: 'Consultant Hub', path: '/consultant' },
  { icon: Globe, label: 'Community Forum', path: '/community' },
];

export default function DashboardLayout({ children, breadcrumbs }) {
  const location = useLocation();
  const allItems = [...menuItems, ...bottomItems];
  const activeItem = allItems.find(item => location.pathname.startsWith(item.path));

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar - Fixed */}
      <Sidebar menuItems={menuItems} bottomItems={bottomItems} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header - Fixed */}
        <Header title={activeItem.label} />

        {/* Breadcrumb - Fixed (if provided) */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="bg-white p-2">
            <Breadcrumb items={breadcrumbs} />
          </div>
        )}

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="container mx-auto px-1 py-4">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}