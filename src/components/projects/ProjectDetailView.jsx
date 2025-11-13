import React, { useState } from 'react';
import { MapPin, DollarSign, Calendar, CheckCircle, Activity, DotIcon, Plus } from 'lucide-react';
import Timeline from './Timeline';
import Roadmap from './Roadmap';
import CompleteProfile from './CompleteProfile';
import RecentActivity from './RecentActivity';

export default function ProjectDetailView() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-gray-50">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Column - Main Content */}
        <div className="col-span-2 space-y-6">
          {/* Project Header with Image */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="h-96 bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=400&fit=crop"
                alt="Project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h1 className="text-2xl text-gray-900 mb-2">123 Maple Street, Springfield</h1>
              <div className="mb-6 flex flex-wrap items-center justify-between text-sm text-gray-600">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 font-medium">Project Type</p>
                    <p className="text-gray-800 mt-1">New Build</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-medium">Timeline</p>
                    <p className="text-gray-800 mt-1">Jan 2024 - Dec 2024</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-medium">Status</p>
                    <p className="text-gray-800 bg-green-100 rounded-xl px-2 py-1 mt-1 inline-block">⏺ On Track</p>
                  </div>
                </div>
                <div className='border p-2 rounded-lg'>
                  <h3 className="text-md font-semibold text-gray-700 mb-4">Budget Snapshot</h3>
                  <div className="space-y-1 w-66">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Budget</span>
                      <span className="font-semibold text-gray-800">$1,455,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Forecasted End Cost (FEC)</span>
                      <span className="font-semibold text-gray-800">$455,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Cost Paid to Date</span>
                      <span className="font-semibold text-gray-800">$292,500</span>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {/* Task Status Cards */}
            <div className="col-span-2 flex bg-white rounded-lg shadow-sm p-6 justify-around">
              <div className="text-center">
                <p className="text-4xl font-semibold text-gray-900 mb-2">3</p>
                <p className="text-sm text-gray-600">Completed tasks</p>
              </div>

              <div className="text-center">
                <p className="text-4xl font-semibold text-gray-900 mb-2">4</p>
                <p className="text-sm text-gray-600">Incomplete tasks</p>
              </div>

              <div className="text-center">
                <p className="text-4xl font-semibold text-gray-900 mb-2">2</p>
                <p className="text-sm text-gray-600">Overdue tasks</p>
              </div>
            </div>

            {/* Variations Summary Card */}
            <div className="col-span-1 bg-white rounded-lg shadow-sm p-6">
              <p className="text-sm font-medium text-gray-600 mb-4">Variations Summary</p>
              <div className="flex gap-2 justify-around">
                <div className="text-center">
                  <p className="text-4xl font-semibold text-gray-900 mb-2">5</p>
                  <p className="text-sm text-gray-600">Pending</p>
                </div>

                <div className="text-center">
                  <p className="text-4xl font-semibold text-gray-900 mb-2">12</p>
                  <p className="text-sm text-gray-600">Approved</p>
                </div>
              </div>
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-6'>

            {/* Urgent Tasks */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Urgent Tasks</h2>
                <button className="btn-primary text-sm py-2 px-4"><Plus className="w-5 h-5" />Add Task</button>
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
          <Timeline />
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Map */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="h-96 bg-gray-200 relative">
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
                </div>
              </div>
            </div>
          </div>
          <Roadmap />
          <CompleteProfile />
          <RecentActivity />
        </div>
      </div>

    </div>
  );
}