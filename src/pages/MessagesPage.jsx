import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'

const MessagesPage = () => {
  return (
    <DashboardLayout>
       <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold mb-4">Coming Soon!</h1>
        <p className="text-lg text-gray-600">We're working hard to bring you this feature. Stay tuned!</p>
      </div>
    </DashboardLayout>  
  )
}

export default MessagesPage