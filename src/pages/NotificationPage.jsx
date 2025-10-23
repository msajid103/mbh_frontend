import React, { useState } from 'react';
import {
    Search,
    Bell,
    Check,
    X,
    FileText,
    MessageSquare,
    AlertCircle,
    Calendar,
    DollarSign,
    Settings,
    Clock,
    Trash2,
    Funnel,
} from 'lucide-react';
import DashboardLayout from '../layouts/DashboardLayout';

// Dummy notifications data
const dummyNotifications = [
    {
        id: 1,
        title: "Invoice #123 approved",
        description: "Payment for materials invoice has been approved and will be processed within 24 hours.",
        category: "finance",
        timestamp: "2 hours ago",
        isRead: false,
        isNew: true
    },
    {
        id: 2,
        title: "New message from John Smith",
        description: "Can you please confirm the delivery date for the cabinets? We need to adjust the schedule.",
        category: "messages",
        timestamp: "3 hours ago",
        isRead: false,
        isNew: true
    },
    {
        id: 3,
        title: "Task deadline approaching",
        description: "Plumbing fixtures selection is due in 2 days. Please review and approve the final choices.",
        category: "tasks",
        timestamp: "5 hours ago",
        isRead: false,
        isNew: false
    },
    {
        id: 4,
        title: "Project status updated",
        description: "Kitchen Remodel project status has been changed from 'In Progress' to 'Under Review'.",
        category: "system",
        timestamp: "Yesterday",
        isRead: false,
        isNew: true
    },
    {
        id: 5,
        title: "Document shared with you",
        description: "Construction plans for Phase 2 have been shared with you. Please review and provide feedback.",
        category: "document",
        timestamp: "1 day ago",
        isRead: true,
        isNew: false
    },
    {
        id: 6,
        title: "Payment received",
        description: "Payment of $5,000 has been received for the bathroom renovation project.",
        category: "finance",
        timestamp: "2 days ago",
        isRead: true,
        isNew: false
    },
    {
        id: 7,
        title: "System maintenance scheduled",
        description: "Scheduled maintenance this weekend. System may be unavailable for 2 hours.",
        category: "system",
        timestamp: "3 days ago",
        isRead: true,
        isNew: false
    }
];

const categoryConfig = {
    all: { label: "All", count: 7, icon: Bell, color: "text-gray-600" },
    tasks: { label: "Tasks", count: 1, icon: Calendar, color: "text-blue-600" },
    document: { label: "Document", count: 1, icon: FileText, color: "text-green-600" },
    finance: { label: "Finance", count: 2, icon: DollarSign, color: "text-purple-600" },
    messages: { label: "Messages", count: 2, icon: MessageSquare, color: "text-orange-600" },
    system: { label: "System", count: 1, icon: Settings, color: "text-red-600" }
};

const NotificationPage = () => {
    const [notifications, setNotifications] = useState(dummyNotifications);
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProject, setSelectedProject] = useState("");

    const projects = ["Website Redesign", "E-commerce App", "Dashboard UI", "API Integration"];


    const getCategoryIcon = (category) => {
        const { icon: Icon, color } = categoryConfig[category] || categoryConfig.all;
        return <Icon className={`w-4 h-4 ${color}`} />;
    };

    const markAsRead = (id) => {
        setNotifications(notifications.map(notification =>
            notification.id === id ? { ...notification, isRead: true, isNew: false } : notification
        ));
    };

    const markAllAsRead = () => {
        setNotifications(notifications.map(notification => ({
            ...notification,
            isRead: true,
            isNew: false
        })));
    };

    const filteredNotifications = notifications.filter(notification => {
        const matchesCategory = activeCategory === 'all' || notification.category === activeCategory;
        const matchesSearch = searchQuery === '' ||
            notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            notification.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const unreadCount = notifications.filter(n => !n.isRead).length;

    return (
        <DashboardLayout>

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600 text-sm">You have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}</p>
                {unreadCount > 0 && (
                    <button
                        onClick={markAllAsRead}
                        className="btn-secondary "
                    >
                        <Trash2 />
                        Clear All
                    </button>
                )}
            </div>

            {/* Search */}
            <div className="border-2 flex items-center rounded-xl border-gray-200 border-gray-200">
                <div className="relative p-4 w-[80%]">
                    <Search className="absolute left-7 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search notifications..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full  bg-gray-200 pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                <div className="w-[18%] flex items-center gap-4">   
                    <Funnel className='text-gray-400'/>                
                    <select
                        id="project"
                        value={selectedProject}
                        onChange={(e) => setSelectedProject(e.target.value)}
                        className="block w-full p-4 bg-gray-200 rounded-md border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">All Projects</option>
                        {projects.map((project, index) => (
                            <option key={index} value={project}>
                                {project}
                            </option>
                        ))}
                    </select>                  
                </div>
            </div>

            {/* Category Tabs */}
            <div className="border-b mt-4 bg-gray-300 rounded-full border-gray-200">
                <div className="flex justify-between px-2">
                    {Object.entries(categoryConfig).map(([key, { label, count }]) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(key)}
                            className={`px-20 ${activeCategory === key
                                ? ' rounded-full btn-secondary '
                                : 'border-transparent text-gray-700'
                                }`}
                        >

                            <span>{label}({count})</span>


                        </button>
                    ))}
                </div>
            </div>

            {/* Notifications List */}
            <div className="">
                {filteredNotifications.map((notification) => (
                    <div
                        key={notification.id}
                        className={`p-6 my-6 flex border-2  rounded-xl bg-white items-start justify-between 
                            ${!notification.isRead ? 'border-l-5 border-blue-500' : 'border-gray-200 '
                            }`}
                    >

                        <div className="flex-col">
                            <div className="flex items-center space-x-3 mb-2">
                                {getCategoryIcon(notification.category)}
                                <h3 className={`font-medium ${!notification.isRead ? 'text-gray-900' : 'text-gray-700'
                                    }`}>
                                    {notification.title}
                                </h3>
                            </div>
                            <p className="text-gray-600 pl-7 text-sm mb-3">
                                {notification.description}
                            </p>
                            <div className="flex pl-7 items-center space-x-4 text-xs text-gray-500">
                                <div className="flex items-center space-x-1">
                                    <Clock className="w-3 h-3" />
                                    <span>{notification.timestamp}</span>
                                </div>
                                <span className="capitalize">{notification.category}</span>
                                {notification.isNew && (
                                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-lg">
                                        New
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center space-x-2 ml-4">
                            {!notification.isRead && (
                                <button
                                    onClick={() => markAsRead(notification.id)}
                                    className="p-2 whitespace-nowrap text-blue-500 cursor-pointer hover:text-blue-700 hover:bg-blue-100 rounded-lg transition-colors"
                                    title="Mark as read"
                                >
                                    Mark as Read
                                </button>
                            )}

                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredNotifications.length === 0 && (
                <div className="p-12 text-center">
                    <div className="text-gray-400 mb-4">
                        <Bell className="w-12 h-12 mx-auto" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications found</h3>
                    <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                </div>
            )}

        </DashboardLayout>
    );
};

export default NotificationPage;