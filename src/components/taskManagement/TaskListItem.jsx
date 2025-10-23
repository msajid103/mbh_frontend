import { CheckCircle, Pencil, Search, Trash2 } from 'lucide-react'
import React from 'react'


const priorityColors = {
    'high': 'bg-red-100 text-red-700',
    'medium': 'bg-yellow-100 text-yellow-700',
    'low': 'bg-gray-100 text-gray-700'
};

const statusColors = {
    'Completed': 'bg-green-100 text-green-700',
    'In Progress': 'bg-blue-100 text-blue-700',
    'Pending': 'bg-gray-100 text-gray-700'
};

const TaskListItem = ({ task }) => {
    return (
        <tr
            key={task.id}
            className="hover:bg-gray-50 transition-colors"
        >
            {/* Checkbox */}
            <td className="px-4 py-4">
                <div className={`w-5 h-5 rounded-xl border-2 flex items-center justify-center ${task.status === 'Completed'
                    ? 'border-none'
                    : 'border-gray-300'
                    }`}>
                    {task.status === 'Completed' && (
                        <CheckCircle className="w-4 h-4 text-[#00C950]" />
                    )}
                </div>
            </td>

            {/* Task ID */}
            <td className="px-4 py-4">
                <span className="text-sm font-medium text-blue-600">{task.id}</span>
            </td>

            {/* Task */}
            <td className="px-4 py-4">
                <div>
                    <div className="text-sm font-medium text-gray-900 mb-2">{task.title}</div>
                    <div className="flex flex-wrap gap-1">
                        {task.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-md"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </td>

            {/* Responsible */}
            <td className="px-4 py-4">
                <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 ${task.assignee.color} rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0`}>
                        {task.assignee.avatar}
                    </div>
                    <span className="text-sm text-gray-900">{task.assignee.name}</span>
                </div>
            </td>

            {/* Start Date */}
            <td className="px-4 py-4">
                <span className="text-sm text-gray-700">{task.startDate}</span>
            </td>

            {/* End Date */}
            <td className="px-4 py-4">
                <span className="text-sm text-gray-700">{task.endDate}</span>
            </td>

            {/* Days Left */}
            <td className="px-4 py-4">
                <span className={`text-sm font-medium ${task.daysLeft === 0 ? 'text-gray-500' :
                    task.daysLeft <= 7 ? 'text-red-600' :
                        task.daysLeft <= 14 ? 'text-yellow-600' :
                            'text-gray-700'
                    }`}>
                    {task.daysLeft === 0 ? '-' : `${task.daysLeft} days`}
                </span>
            </td>

            {/* Priority */}
            <td className="px-4 py-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${priorityColors[task.priority]}`}>
                    {task.priority}
                </span>
            </td>

            {/* % Complete */}
            <td className="px-4 py-4">
                <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                            className={`h-full transition-all ${task.percentComplete === 100 ? 'bg-green-500' :
                                task.percentComplete >= 50 ? 'bg-blue-500' :
                                    'bg-yellow-500'
                                }`}
                            style={{ width: `${task.percentComplete}%` }}
                        ></div>
                    </div>
                    <span className="text-xs font-medium text-gray-700 min-w-[35px]">
                        {task.percentComplete}%
                    </span>
                </div>
            </td>

            {/* Status */}
            <td className="px-4 py-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${statusColors[task.status]}`}>
                    {task.status}
                </span>
            </td>

            {/* Created Date */}
            <td className="px-4 py-4">
                <span className="text-sm text-gray-600">{task.createdDate}</span>
            </td>

            {/* Actions */}
            <td className="px-4 py-4 flex gap-2">
                <button className="p-1 border-2 rounded-lg border-blue-300 flex items-center justify-center">
                    <Search className='text-blue-600' />
                </button>
                <button className="p-1 border-2 rounded-lg border-green-300 flex items-center justify-center">
                    <Pencil className='text-green-600' />
                </button>
                <button className="p-1 border-2 rounded-lg border-red-300 flex items-center justify-center">
                    <Trash2 className='text-red-600' />
                </button>

            </td>
        </tr>
    )
}

export default TaskListItem