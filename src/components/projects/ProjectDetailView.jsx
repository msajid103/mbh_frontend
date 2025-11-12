import React, { useState } from 'react';
import { MapPin, DollarSign, Calendar, Users, TrendingUp, CheckCircle, Clock, MessageSquare, FileText, Activity } from 'lucide-react';

export default function ProjectDetailView() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-gray-50">
      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Main Content */}
        <div className="col-span-2 space-y-6">
          {/* Project Header with Image */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="h-48 bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=400&fit=crop"
                alt="Project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">123 Maple Street, Springfield</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Springfield, IL</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Jan 2024 - Dec 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  <span>$1,250,000</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-gray-600 text-sm mb-1">Budget Snapshot</div>
                  <div className="text-2xl font-bold text-gray-900">$1,125,000</div>
                  <div className="text-xs text-green-600">▲ +2.5% from last month</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-gray-600 text-sm mb-1">Total Project Cost</div>
                  <div className="text-2xl font-bold text-gray-900">$1,250,000</div>
                  <div className="text-xs text-gray-500">Including contingency</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-gray-600 text-sm mb-1">Days until</div>
                  <div className="text-2xl font-bold text-gray-900">245</div>
                  <div className="text-xs text-gray-500">Project completion</div>
                </div>
              </div>

              {/* Project Summary Tabs */}
              <div className="border-b border-gray-200 mb-4">
                <div className="flex gap-6">
                  <button className="pb-3 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
                    Overview
                  </button>
                  <button className="pb-3 text-sm font-medium text-gray-600 hover:text-gray-900">
                    Timeline
                  </button>
                  <button className="pb-3 text-sm font-medium text-gray-600 hover:text-gray-900">
                    Documents
                  </button>
                  <button className="pb-3 text-sm font-medium text-gray-600 hover:text-gray-900">
                    Financial
                  </button>
                </div>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">5</div>
                  <div className="text-sm text-gray-600">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">12</div>
                  <div className="text-sm text-gray-600">In Progress</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">8</div>
                  <div className="text-sm text-gray-600">Pending</div>
                </div>
              </div>
            </div>
          </div>

          {/* Urgent Tasks */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Urgent Tasks</h2>
              <button className="btn-primary text-sm py-2 px-4">View All</button>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">Install plumbing fixtures</h3>
                  <p className="text-sm text-gray-600 mt-1">Approve electrical plan</p>
                  <div className="text-xs text-red-600 mt-1">Due in 2 days</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">Confirm paint colors</h3>
                  <p className="text-sm text-gray-600 mt-1">Need selection for master bedroom</p>
                  <div className="text-xs text-yellow-600 mt-1">Due in 5 days</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">Review roofing materials</h3>
                  <p className="text-sm text-gray-600 mt-1">Shingles samples ready for review</p>
                  <div className="text-xs text-orange-600 mt-1">Due in 7 days</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">Cabinet paint</h3>
                  <p className="text-sm text-gray-600 mt-1">Finalize cabinet color selection</p>
                  <div className="text-xs text-blue-600 mt-1">Due in 10 days</div>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Messages */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Latest Messages</h2>
              <button className="text-sm text-blue-600 hover:text-blue-700">View All</button>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                    JD
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">John Doe</div>
                    <div className="text-xs text-gray-500">2 hours ago</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700">The plumbing inspection is scheduled for next week.</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                    SM
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Sarah Miller</div>
                    <div className="text-xs text-gray-500">5 hours ago</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700">Paint samples have arrived at the site.</p>
              </div>
            </div>
          </div>

          {/* Key Contacts */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Key Contacts</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                  JH
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">John Holt</div>
                  <div className="text-xs text-gray-600">Project Manager</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-medium">
                  JS
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Jane Smith</div>
                  <div className="text-xs text-gray-600">Architect</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-medium">
                  MJ
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Mike Johnson</div>
                  <div className="text-xs text-gray-600">Lead Contractor</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-medium">
                  MW
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Mary Wilson</div>
                  <div className="text-xs text-gray-600">Interior Designer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Timeline</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-0.5 h-full bg-gray-200"></div>
                </div>
                <div className="flex-1 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <div className="text-sm font-medium text-gray-900">Foundation poured successfully</div>
                    <div className="text-xs text-gray-500">12/14/24</div>
                  </div>
                  <div className="text-xs text-gray-600">Concrete foundation completed on schedule</div>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full">Foundation</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="w-0.5 h-full bg-gray-200"></div>
                </div>
                <div className="flex-1 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <div className="text-sm font-medium text-gray-900">Framing work</div>
                    <div className="text-xs text-gray-500">12/20/24</div>
                  </div>
                  <div className="text-xs text-gray-600">Structural framing in progress</div>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">In Progress</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <div className="text-sm font-medium text-gray-900">Electrical rough-in</div>
                    <div className="text-xs text-gray-500">01/05/25</div>
                  </div>
                  <div className="text-xs text-gray-600">Scheduled for next phase</div>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">Upcoming</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Map */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="h-48 bg-gray-200 relative">
              <img
                src="https://tse4.mm.bing.net/th/id/OIP.h60O4bVJ-kjTGV-ydMsXHgHaE8?pid=Api&P=0&h=220"
                alt="Map"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-gray-600 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">123 Maple Street, Springfield</div>
                  <div className="text-sm text-gray-600 mt-1">Springfield, IL 62701</div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900 mb-4">Progress</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Planning</span>
                  <span className="font-medium text-gray-900">100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Design</span>
                  <span className="font-medium text-gray-900">100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Construction</span>
                  <span className="font-medium text-gray-900">45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Finishing</span>
                  <span className="font-medium text-gray-900">0%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gray-300 h-2 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Handover</span>
                  <span className="font-medium text-gray-900">0%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gray-300 h-2 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Complete Your Profile */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Complete Your Profile</h3>
              <span className="text-sm text-blue-600">80%</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-700">Add a profile picture</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-700">Setup account</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                <span className="text-sm text-gray-700">Create payment subscription</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-700">Invite Your Team</span>
              </div>
            </div>
            <button className="w-full mt-4 btn-primary">
              Help
            </button>
          </div>

          {/* Complete Profile Card */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Complete Profile</h3>
            <div className="space-y-2 mb-4">
              <div className="text-sm text-gray-700">Contact Information</div>
              <div className="text-sm text-gray-700">Preferences</div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
              Complete Now
            </button>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-gray-600" />
              <h3 className="font-semibold text-gray-900">Recent Activity</h3>
            </div>
            <div className="space-y-4">
              <div className="text-sm">
                <div className="text-gray-900 font-medium">Milestone completed (Foundation)</div>
                <div className="text-gray-500 text-xs mt-1">12/14/24</div>
                <div className="text-gray-600 text-xs mt-1">Foundation work completed on schedule</div>
              </div>
              <div className="border-t border-gray-200 pt-4 text-sm">
                <div className="text-gray-900 font-medium">Document Uploaded (Permit Approval)</div>
                <div className="text-gray-500 text-xs mt-1">12/10/24</div>
                <div className="text-gray-600 text-xs mt-1">Building permits approved by city</div>
              </div>
              <div className="border-t border-gray-200 pt-4 text-sm">
                <div className="text-gray-900 font-medium">New Assignee for Plumbing task</div>
                <div className="text-gray-500 text-xs mt-1">12/08/24</div>
                <div className="text-gray-600 text-xs mt-1">Mike Johnson assigned to plumbing installation</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}