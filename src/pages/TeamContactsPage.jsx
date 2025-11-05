import React, { useState } from 'react';
import { 
  Search, Plus, Grid, List, Mail, Phone, MapPin, 
  MoreVertical, Users, Building2, User, Calendar
} from 'lucide-react';

// Redux Slice Data (teamContactsSlice.js)
const initialState = {
  contacts: [
    {
      id: 1,
      name: 'Sarah Wilson',
      role: 'Project Manager',
      company: 'BuildCorp',
      avatar: 'SW',
      color: 'bg-red-400',
      category: 'Core Member',
      email: 'sarah.wilson@buildcorp.com',
      phone: '+1 (555) 234-5678',
      address: '123 Construction Ave, Sydney NSW 2000',
      status: 'Verified',
      projects: 5,
      lastSeen: 'Active now'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Structural Engineer',
      company: 'EngineerPro',
      avatar: 'MC',
      color: 'bg-gray-400',
      category: 'Consulting Engineer',
      email: 'michael.chen@engineerpro.com',
      phone: '+1 (555) 345-6789',
      address: '456 Engineering Rd, Sydney NSW 2001',
      status: 'Verified',
      projects: 3,
      lastSeen: '2 hours ago'
    },
    {
      id: 3,
      name: 'BuildRight Construction Co',
      role: 'Main Contractor',
      company: 'BuildRight Group',
      avatar: 'BR',
      color: 'bg-blue-500',
      category: 'Main Contractor',
      email: 'info@buildright.com.au',
      phone: '+1 (800) 123-4567',
      address: '789 Builder Street, Brisbane QLD 4000',
      status: 'Verified',
      projects: 8,
      lastSeen: '1 day ago'
    },
    {
      id: 4,
      name: 'Emma Davis',
      role: 'Safety Officer',
      company: 'SafetyFirst Solutions',
      avatar: 'ED',
      color: 'bg-purple-400',
      category: 'Core Member',
      email: 'emma.davis@safetyfirst.com',
      phone: '+1 (555) 456-7890',
      address: '321 Safety Lane, Melbourne VIC 3000',
      status: 'Verified',
      projects: 4,
      lastSeen: 'Online'
    },
    {
      id: 5,
      name: 'Precision Plumbing Services',
      role: 'Plumbing Contractor',
      company: 'Precision Group',
      avatar: 'PP',
      color: 'bg-blue-600',
      category: 'Working Drawing Revision 1',
      email: 'contact@precisionplumbing.com.au',
      phone: '+1 (555) 567-8901',
      address: '654 Pipe Rd, Perth WA 6000',
      status: 'Pending Verification',
      projects: 2,
      lastSeen: '3 days ago'
    },
    {
      id: 6,
      name: 'Elite Electrical Contractors',
      role: 'Electrical Contractor',
      company: 'Elite Services',
      avatar: 'EE',
      color: 'bg-cyan-500',
      category: 'Construction Documents',
      email: 'info@eliteelectrical.com.au',
      phone: '+61 (02) 9876-5432',
      address: '987 Voltage St, Adelaide SA 5000',
      status: 'Verified',
      projects: 6,
      lastSeen: '5 hours ago'
    }
  ],
  filterCategories: [
    'All Contacts',
    'Core Member',
    'Consultants',
    'Main Contractor',
    'Subcontractors',
    'Suppliers'
  ],
  fundingSources: [
    'Funding Source 1',
    'Funding Source 2', 
    'Funding Source 3'
  ],
  statistics: {
    allContacts: 45,
    coreMembers: 12,
    consultants: 8,
    contractors: 15,
    subcontractors: 10
  }
};

// Status Badge Component
const StatusBadge = ({ status }) => {
  const styles = status === 'Verified' 
    ? 'bg-green-100 text-green-700'
    : 'bg-yellow-100 text-yellow-700';

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${styles}`}>
      <div className="w-1.5 h-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
};

// Category Badge Component
const CategoryBadge = ({ category }) => {
  const colors = {
    'Core Member': 'bg-blue-100 text-blue-700',
    'Consulting Engineer': 'bg-purple-100 text-purple-700',
    'Main Contractor': 'bg-cyan-100 text-cyan-700',
    'Construction Documents': 'bg-green-100 text-green-700',
    'Working Drawing Revision 1': 'bg-orange-100 text-orange-700'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors[category] || 'bg-gray-100 text-gray-700'}`}>
      {category}
    </span>
  );
};

// Contact Card Component
const ContactCard = ({ contact, onViewDetails }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`${contact.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg`}>
            {contact.avatar}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-base">{contact.name}</h3>
            <p className="text-sm text-gray-600">{contact.role}</p>
          </div>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <MoreVertical className="w-4 h-4 text-gray-600" />
          </button>
          {showMenu && (
            <>
              <div 
                className="fixed inset-0 z-10" 
                onClick={() => setShowMenu(false)}
              />
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-20 py-1">
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Edit Contact
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Send Message
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                  Remove
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Category Badge */}
      <div className="mb-4">
        <CategoryBadge category={contact.category} />
      </div>

      {/* Contact Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-start gap-2 text-sm text-gray-600">
          <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span className="break-all">{contact.email}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Phone className="w-4 h-4 flex-shrink-0" />
          <span>{contact.phone}</span>
        </div>
        <div className="flex items-start gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{contact.address}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center gap-4">
          <StatusBadge status={contact.status} />
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Building2 className="w-4 h-4" />
            <span>{contact.projects} projects</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sidebar Component
const Sidebar = ({ categories, statistics, activeCategory, onCategoryChange, fundingSources }) => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-4">
        {/* Add Contact Button */}
        <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors mb-6">
          <Plus className="w-4 h-4" />
          <span className="text-sm font-medium">Add Contact</span>
        </button>

        {/* Filter Section */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-600 uppercase mb-3">Categories</h3>
          <div className="space-y-1">
            <button
              onClick={() => onCategoryChange('All Contacts')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                activeCategory === 'All Contacts' 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>All Contacts</span>
              </div>
              <span className="text-xs">{statistics.allContacts}</span>
            </button>
            <button
              onClick={() => onCategoryChange('Core Member')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                activeCategory === 'Core Member' 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Core Members</span>
              </div>
              <span className="text-xs">{statistics.coreMembers}</span>
            </button>
            <button
              onClick={() => onCategoryChange('Consultants')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                activeCategory === 'Consultants' 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>Consultants</span>
              </div>
              <span className="text-xs">{statistics.consultants}</span>
            </button>
            <button
              onClick={() => onCategoryChange('Main Contractor')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                activeCategory === 'Main Contractor' 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>Contractors</span>
              </div>
              <span className="text-xs">{statistics.contractors}</span>
            </button>
            <button
              onClick={() => onCategoryChange('Subcontractors')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                activeCategory === 'Subcontractors' 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Subcontractors</span>
              </div>
              <span className="text-xs">{statistics.subcontractors}</span>
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-xs font-semibold text-gray-600 uppercase mb-3">Quick Stats</h3>
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-700">Active Projects</span>
              <span className="text-lg font-bold text-blue-600">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Total Contacts</span>
              <span className="text-lg font-bold text-blue-600">{statistics.allContacts}</span>
            </div>
          </div>
        </div>

        {/* Funding Sources */}
        <div className="border-t border-gray-200 pt-4 mt-4">
          <h3 className="text-xs font-semibold text-gray-600 uppercase mb-3">Funding Sources</h3>
          <div className="space-y-1">
            {fundingSources.map((source, idx) => (
              <button
                key={idx}
                className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{source}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main TeamContactsPage Component
const TeamContactsPage = () => {
  const [data] = useState(initialState);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Contacts');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const filteredContacts = activeCategory === 'All Contacts'
    ? data.contacts
    : data.contacts.filter(c => c.category.includes(activeCategory));

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        categories={data.filterCategories}
        statistics={data.statistics}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        fundingSources={data.fundingSources}
      />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Team & Contacts</h1>
            <p className="text-sm text-gray-600">
              Manage project team members, suppliers, and subcontractors
            </p>
          </div>

          {/* Search and View Toggle */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search contacts by name, company, or role..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Contacts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContacts.map(contact => (
              <ContactCard
                key={contact.id}
                contact={contact}
                onViewDetails={(id) => console.log('View details:', id)}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredContacts.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No contacts found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamContactsPage;