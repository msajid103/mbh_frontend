import React, { useState } from 'react';
import { Search, List, LayoutGrid, Plus, CheckCircle } from 'lucide-react';
import DashboardLayout from '../layouts/DashboardLayout';

// Dummy data
const dummyTasks = [
    {
        id: 1,
        title: 'Instruct us - Initial project briefing',
        subtasks: '3/5 subtasks completed',
        tags: ['planning', 'initial'],
        assignee: { name: 'John Doe', avatar: 'JD', color: 'bg-red-500' },
        date: 'Jan 12, 2024',
        priority: 'high',
        status: 'Completed'
    },
    {
        id: 2,
        title: 'Site survey and documentation',
        subtasks: '3/5 subtasks completed',
        tags: ['survey', 'planning'],
        assignee: { name: 'Sarah Smith', avatar: 'SS', color: 'bg-blue-500' },
        date: 'Feb 10, 2024',
        priority: 'high',
        status: 'Completed'
    },
    {
        id: 3,
        title: 'Obtain building permits and approvals',
        subtasks: '2/4 subtasks completed',
        tags: ['legal', 'permits'],
        assignee: { name: 'Mike Johnson', avatar: 'MJ', color: 'bg-green-500' },
        date: 'Feb 28, 2024',
        priority: 'high',
        status: 'Completed'
    },
    {
        id: 4,
        title: 'Design concept approval',
        subtasks: '1/3 subtasks completed',
        tags: ['design', 'approval'],
        assignee: { name: 'Emma Wilson', avatar: 'EW', color: 'bg-purple-500' },
        date: 'Mar 15, 2024',
        priority: 'medium',
        status: 'Completed'
    },
    {
        id: 5,
        title: 'Groundwork and foundation preparation',
        subtasks: '2/4 subtasks completed',
        tags: ['construction', 'foundation'],
        assignee: { name: 'David Brown', avatar: 'DB', color: 'bg-indigo-500' },
        date: 'Apr 20, 2024',
        priority: 'high',
        status: 'In Progress'
    },
    {
        id: 6,
        title: 'Structural steel installation',
        subtasks: '1/4 subtasks completed',
        tags: ['construction', 'structural'],
        assignee: { name: 'Lisa Garcia', avatar: 'LG', color: 'bg-pink-500' },
        date: 'May 10, 2024',
        priority: 'high',
        status: 'In Progress'
    },
    {
        id: 7,
        title: 'Brickwork and masonry',
        subtasks: '0/3 subtasks completed',
        tags: ['construction', 'masonry'],
        assignee: { name: 'Tom Anderson', avatar: 'TA', color: 'bg-yellow-600' },
        date: 'Jun 30, 2024',
        priority: 'medium',
        status: 'Pending'
    },
    {
        id: 8,
        title: 'Electrical rough-in installation',
        subtasks: '0/5 subtasks completed',
        tags: ['electrical', 'construction'],
        assignee: { name: 'Anna Martinez', avatar: 'AM', color: 'bg-teal-500' },
        date: 'Jul 15, 2024',
        priority: 'high',
        status: 'Pending'
    },
    {
        id: 9,
        title: 'Plumbing installation',
        subtasks: '0/4 subtasks completed',
        tags: ['plumbing', 'construction'],
        assignee: { name: 'Chris Lee', avatar: 'CL', color: 'bg-orange-500' },
        date: 'Jul 25, 2024',
        priority: 'high',
        status: 'Pending'
    },
    {
        id: 10,
        title: 'Roof installation and waterproofing',
        subtasks: '0/3 subtasks completed',
        tags: ['roofing', 'construction'],
        assignee: { name: 'Rachel Kim', avatar: 'RK', color: 'bg-cyan-500' },
        date: 'Aug 15, 2024',
        priority: 'high',
        status: 'Pending'
    }
];

const statusColors = {
    'Completed': 'bg-green-100 text-green-700',
    'In Progress': 'bg-blue-100 text-blue-700',
    'Pending': 'bg-gray-100 text-gray-700'
};

const priorityColors = {
    'high': 'bg-red-100 text-red-700',
    'medium': 'bg-yellow-100 text-yellow-700',
    'low': 'bg-gray-100 text-gray-700'
};

export default function TaskManagementPage() {
    const [viewMode, setViewMode] = useState('list');
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const statusCounts = {
        'Total Tasks': dummyTasks.length,
        'In Progress': dummyTasks.filter(t => t.status === 'In Progress').length,
        'Pending': dummyTasks.filter(t => t.status === 'Pending').length,
        'Completed': dummyTasks.filter(t => t.status === 'Completed').length
    };

    const filteredTasks = dummyTasks.filter(task => {
        const matchesFilter = activeFilter === 'All' || task.status === activeFilter;
        const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesFilter && matchesSearch;
    });

    return (
        <DashboardLayout>
            <div className="min-h-screen bg-gray-50 p-6">
                <div className="">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-gray-600 text-sm">Manage and track all project tasks</p>
                        <div className="flex items-center  gap-3">
                            <div className='flex items-center  gap-3 bg-white border'>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-lg transition-colors ${viewMode === 'list'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    <List className="w-5 h-5" /> List
                                </button>
                                <button
                                    onClick={() => setViewMode('kanban')}
                                    className={`p-2 rounded-lg transition-colors ${viewMode === 'kanban'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    <LayoutGrid className="w-5 h-5" /> Kanban
                                </button>
                            </div>
                            <button className="btn-primary">
                                <Plus className="w-5 h-5" />
                                Add Task
                            </button>
                        </div>
                    </div>

                    {/* Status Cards */}
                    <div className="grid grid-cols-4 gap-4 mb-6">
                        <div className="bg-white rounded-xl p-5 border border-gray-200">
                            <div className="text-gray-600 text-sm mb-2">Total Tasks</div>
                            <div className="text-3xl font-bold text-gray-900">{statusCounts['Total Tasks']}</div>
                        </div>
                        <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                            <div className="text-blue-700 text-sm mb-2">In Progress</div>
                            <div className="text-3xl font-bold text-blue-700">{statusCounts['In Progress']}</div>
                        </div>
                        <div className="bg-yellow-50 rounded-xl p-5 border border-yellow-200">
                            <div className="text-yellow-700 text-sm mb-2">Pending</div>
                            <div className="text-3xl font-bold text-yellow-700">{statusCounts['Pending']}</div>
                        </div>
                        <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                            <div className="text-green-700 text-sm mb-2">Completed</div>
                            <div className="text-3xl font-bold text-green-700">{statusCounts['Completed']}</div>
                        </div>
                    </div>

                    {/* Search and Filters */}
                    <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
                        <div className="flex items-center justify-between">
                            <div className="relative flex-1 max-w-md">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search tasks..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex gap-2">
                                {['All', 'Pending', 'In Progress', 'Completed'].map((filter) => (
                                    <button
                                        key={filter}
                                        onClick={() => setActiveFilter(filter)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeFilter === filter
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        {filter}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Task List */}
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                        <div className="divide-y divide-gray-200">
                            {filteredTasks.map((task) => (
                                <div
                                    key={task.id}
                                    className="p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                                >
                                    <div className="flex items-center gap-4">
                                        {/* Checkbox */}
                                        <div className="flex-shrink-0">
                                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${task.status === 'Completed'
                                                ? 'bg-green-500 border-green-500'
                                                : 'border-gray-300'
                                                }`}>
                                                {task.status === 'Completed' && (
                                                    <CheckCircle className="w-4 h-4 text-white" />
                                                )}
                                            </div>
                                        </div>

                                        {/* Task Info */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start gap-3">
                                                <div className="flex-1">
                                                    <h3 className="text-gray-900 font-medium mb-1">{task.title}</h3>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="text-xs text-gray-500">{task.subtasks}</span>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2">
                                                        {task.tags.map((tag, index) => (
                                                            <span
                                                                key={index}
                                                                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Assignee */}
                                                <div className="flex-shrink-0">
                                                    <div className={`w-10 h-10 ${task.assignee.color} rounded-full flex items-center justify-center text-white text-sm font-medium`}>
                                                        {task.assignee.avatar}
                                                    </div>
                                                </div>

                                                {/* Date */}
                                                <div className="flex-shrink-0 text-sm text-gray-600 min-w-[100px]">
                                                    {task.date}
                                                </div>

                                                {/* Priority Badge */}
                                                <div className="flex-shrink-0">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${priorityColors[task.priority]}`}>
                                                        {task.priority}
                                                    </span>
                                                </div>

                                                {/* Status Badge */}
                                                <div className="flex-shrink-0 min-w-[100px]">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[task.status]}`}>
                                                        {task.status}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Empty State */}
                    {filteredTasks.length === 0 && (
                        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                            <div className="text-gray-400 mb-2">
                                <Search className="w-12 h-12 mx-auto" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-1">No tasks found</h3>
                            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                        </div>
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
}