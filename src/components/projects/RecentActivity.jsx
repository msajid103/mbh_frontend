import React from 'react';
import { Clock, CheckCircle, FileText } from 'lucide-react';

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      date: '13 Feb 2024',
      description: 'Milestone completed: Construct Commences.',
      type: 'milestone',
      icon: CheckCircle
    },
    {
      id: 2,
      date: '22 Aug 2024',
      description: 'Milestone completed: Prestart Meeting.',
      type: 'milestone',
      icon: CheckCircle
    },
    {
      id: 3,
      date: '5 Mar 2024',
      description: 'New document stripe.png was added.',
      type: 'document',
      icon: FileText
    },
    {
      id: 4,
      date: '28 Feb 2024',
      description: 'New document modgic-2001.ent was added.',
      type: 'document',
      icon: FileText
    },
    {
      id: 5,
      date: '14 Apr 2024',
      description: 'Milestone completed: Prestart Meeting',
      type: 'milestone',
      icon: CheckCircle
    },
    {
      id: 6,
      date: '12 Mar 2024',
      description: 'New document BLANK document.pdf was added.',
      type: 'document',
      icon: FileText
    },
    {
      id: 7,
      date: '8 Apr 2024',
      description: 'New document Gainsborough - Matt Black.pdf was added.',
      type: 'document',
      icon: FileText
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 ">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gray-900 rounded-full p-2">
          <Clock className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
      </div>

      {/* Activity List */}
      <div className="space-y-6">
        {activities.map((activity, index) => (
          <div key={activity.id} className="flex gap-3">
            {/* Icon with vertical line */}
            <div className="flex flex-col items-center">
              <div className={`rounded-full p-1 ${
                activity.type === 'milestone' ? 'bg-orange-100' : 'bg-gray-100'
              }`}>
                {activity.type === 'milestone' ? (
                  <CheckCircle className="w-4 h-4 text-orange-500" />
                ) : (
                  <FileText className="w-4 h-4 text-gray-400" />
                )}
              </div>
              {/* Vertical line */}
              {index < activities.length - 1 && (
                <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-4">
              <p className="text-sm text-gray-500 mb-1">{activity.date}</p>
              <p className="text-sm text-gray-900">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}