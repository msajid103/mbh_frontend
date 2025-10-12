import React from 'react'

function Notifications({ formData, handleChange }) {
  const notificationToggles = [
    {
      name: 'activityUpdates',
      title: 'Activity updates',
      description: "Get alerts triggered by you, direct messages, and @mention notifications for tasks you're a stakeholder or"
    },
    {
      name: 'mentions',
      title: 'Mentions',
      description: 'Get notifications when you, your direct messages, and @Mentions'
    },
  ];

  const emailToggles = [
    {
      name: 'dailyDigest',
      title: 'Daily digest',
      description: 'Personalized productivity advice once you start each day'
    },
    {
      name: 'tipsAndTricks',
      title: 'Tips and tricks',
      description: 'Monthly productivity advice at your inbox. Send once a month'
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-8">Notifications</h2>

        <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
          {/* Main Notification Toggles */}
          {notificationToggles.map((toggle, index) => (
            <div key={toggle.name}>
              <div className="flex items-start justify-between py-2">
                <div className="flex-1 pr-4">
                  <h3 className="font-medium text-gray-900 mb-1">{toggle.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{toggle.description}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                  <input
                    type="checkbox"
                    name={toggle.name}
                    checked={formData[toggle.name]}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              {index < notificationToggles.length - 1 && (
                <div className="border-b border-gray-200 mt-6"></div>
              )}
            </div>
          ))}

          {/* Email Section */}
          <div className="pt-4">
            <h3 className="font-semibold text-gray-900 mb-6">Emails</h3>
            
            {emailToggles.map((toggle, index) => (
              <div key={toggle.name}>
                <div className="flex items-start justify-between py-2">
                  <div className="flex-1 pr-4">
                    <h4 className="font-medium text-gray-900 mb-1">{toggle.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{toggle.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                    <input
                      type="checkbox"
                      name={toggle.name}
                      checked={formData[toggle.name]}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-300"></div>
                  </label>
                </div>
                {index < emailToggles.length - 1 && (
                  <div className="border-b border-gray-200 mt-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications