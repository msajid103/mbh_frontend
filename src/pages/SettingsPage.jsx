import React, { useState } from 'react';
import { User,Bell, Shield, Upload, Save, X, Globe } from 'lucide-react';
import DashboardLayout from '../layouts/DashboardLayout';
import PersonalInfo from '../components/settings/PersonalInfo';
import General from '../components/settings/General';
import Notifications from '../components/settings/Notifications';
import Security from '../components/settings/Security';
const tabs = [
  { id: 'personal', label: 'Personal Info', icon: User },
  { id: 'general', label: 'General', icon: Globe },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Security', icon: Shield },
];

const breadcrumbs = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Settings', path: '/settings' },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState({
    firstName: 'Martyn',
    lastName: 'Doe',
    email: 'john.doe@mybuildhub.com',
    phone: '+1 (555) 123-4567',
    occupation: 'Project manager',
    gender: 'Male',
    ageRange: '30-39',
    address: '',
    bio: '',
    theme: 'System',
    country: 'Australia',
    language: 'English',
    timeFormat: 'Europe/Warsaw',
    dateFormat: 'DD-MM-YYYY',
    activityUpdates: true,
    mentions: true,
    dailyDigest: false,
    tipsAndTricks: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = () => {
    console.log('Saved:', formData);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'personal':
        return <PersonalInfo formData={formData} handleChange={handleChange} />;
      case 'general':
        return <General formData={formData} handleChange={handleChange} />;
      case 'notifications':
        return <Notifications formData={formData} handleChange={handleChange} />;
      case 'security':
        return <Security />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <div className="max-w-5xl">
        {/* Page Title */}
        <div className="mb-6">
          <p className="text-gray-600">Manage your account settings and preferences</p>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="flex gap-2 p-2 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap ${activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          {renderTabContent()}

          {/* Action Buttons */}
          {activeTab !== 'project' && activeTab !== 'security' && (
            <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200">
               <button onClick={handleSave} className="btn-primary">
                <Save className="w-4 h-4" />
                Save Changes
              </button>
              <button className="btn-secondary">
                <X className="w-4 h-4" />
                Cancel
              </button>             
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}