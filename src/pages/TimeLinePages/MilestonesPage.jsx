import React from 'react';
import { Calendar, User, CheckSquare, ExternalLink, Trash2 } from 'lucide-react';

const milestones = [
    {
        id: 1,
        number: '01',
        title: 'Instruct us',
        status: 'Completed',
        description: 'Initial project scoping and requirement gathering. Client provides all necessary documentation and project specifications.',
        startDate: 'Jan 11, 2024',
        endDate: 'Jan 12, 2024',
        assignee: 'Sarah Wilson',
        tasks: 5,
        completedTasks: 5,
        phase: 'Planning',
        progress: 100,
        color: 'green'
    },
    {
        id: 2,
        number: '02',
        title: 'Getting your site constructed',
        status: 'Completed',
        description: 'Complete site survey and land documentation. Obtain all necessary permits and approvals from local authorities.',
        startDate: 'Jan 12, 2024',
        endDate: 'Feb 28, 2024',
        assignee: 'Michael Chen',
        tasks: 85,
        completedTasks: 85,
        phase: 'Design',
        progress: 100,
        color: 'green'
    },
    {
        id: 3,
        number: '03',
        title: 'Initial identity check: upload a copy of your identification',
        status: 'Completed',
        description: 'Security verification process. All stakeholders must submit valid identification documents for compliance.',
        startDate: 'Feb 12, 2024',
        endDate: 'Feb 18, 2024',
        assignee: 'Emma Davis',
        tasks: 57,
        completedTasks: 57,
        phase: 'Construction',
        progress: 100,
        color: 'green'
    },
    {
        id: 4,
        number: '04',
        title: 'Awaiting ID',
        status: 'Completed',
        description: 'Pending identification verification from all project stakeholders. Follow-up with outstanding team members.',
        startDate: 'Feb 19, 2024',
        endDate: 'Feb 23, 2024',
        assignee: 'John Smith',
        tasks: 30,
        completedTasks: 30,
        phase: 'Finishing',
        progress: 100,
        color: 'green'
    },
    {
        id: 5,
        number: '05',
        title: 'Starting on Site',
        status: 'In Progress',
        description: 'Construction commencement. Site mobilization and initial groundwork preparation begins.',
        startDate: 'Mar 1, 2024',
        endDate: 'May 15, 2024',
        assignee: 'Robert Martinez',
        tasks: 1015,
        completedTasks: 0,
        phase: 'Handover',
        progress: 0,
        color: 'blue'
    }
];

const phaseSummary = [
    { name: 'Planning', percentage: 100, tasks: 5 },
    { name: 'Design', percentage: 100, tasks: 85 },
    { name: 'Construction', percentage: 38, tasks: 57 },
    { name: 'Finishing', percentage: 0, tasks: 30 },
    { name: 'Handover', percentage: 0, tasks: 1015 }
];

export default function MilestonesPage() {
    const totalTasks = milestones.reduce((sum, m) => sum + m.tasks, 0);
    const completedTasks = milestones.reduce((sum, m) => sum + m.completedTasks, 0);
    const overallProgress = Math.round((completedTasks / totalTasks) * 100);

    return (
        <div className="bg-gray-50">
            {/* Header */}
            <div className="flex justify-end mb-6">
                <button className="btn-primary">
                    Add Milestone
                </button>
            </div>

            {/* Overall Progress */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
                <div className="flex items-center justify-between mb-3">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Overall Progress</h2>
                        <p className="text-sm text-gray-600">{completedTasks} of {totalTasks} milestones completed</p>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{overallProgress}%</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                        className="bg-gray-900 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${overallProgress}%` }}
                    ></div>
                </div>
            </div>

            {/* Phase Summary */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Phase Summary</h2>
                <div className="grid grid-cols-5 gap-4">
                    {phaseSummary.map((phase, index) => (
                        <div key={index} className="text-center">
                            <div className="relative w-20 h-20 mx-auto mb-3">
                                <svg className="w-20 h-20 transform -rotate-90">
                                    <circle
                                        cx="40"
                                        cy="40"
                                        r="32"
                                        stroke="#E5E7EB"
                                        strokeWidth="8"
                                        fill="none"
                                    />
                                    <circle
                                        cx="40"
                                        cy="40"
                                        r="32"
                                        stroke={phase.percentage === 100 ? '#10B981' : phase.percentage > 0 ? '#3B82F6' : '#E5E7EB'}
                                        strokeWidth="8"
                                        fill="none"
                                        strokeDasharray={`${2 * Math.PI * 32}`}
                                        strokeDashoffset={`${2 * Math.PI * 32 * (1 - phase.percentage / 100)}`}
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-lg font-bold text-gray-900">{phase.percentage}%</span>
                                </div>
                            </div>
                            <div className="font-medium text-gray-900 mb-1">{phase.name}</div>
                            <div className="text-xs text-gray-500">{phase.tasks} tasks</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Milestones List */}
            <div className="space-y-4">
                {milestones.map((milestone) => (
                    <div key={milestone.id} className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex items-start gap-4">
                            {/* Number Badge */}
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${milestone.status === 'Completed' ? 'bg-green-500' : 'bg-blue-500'
                                }`}>
                                <span className="text-white font-bold text-lg">{milestone.number}</span>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                                            <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${milestone.status === 'Completed'
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-blue-100 text-blue-700'
                                                }`}>
                                                {milestone.status}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed">{milestone.description}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </button>
                                        <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Meta Information */}
                                <div className="flex items-center gap-6 mb-4 text-sm text-gray-600">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4" />
                                        <span>{milestone.startDate} - {milestone.endDate}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <User className="w-4 h-4" />
                                        <span>{milestone.assignee}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <CheckSquare className="w-4 h-4" />
                                        <span>{milestone.tasks} tasks</span>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">Progress</span>
                                        <span className="font-semibold text-gray-900">{milestone.progress}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                        <div
                                            className={`h-2 rounded-full transition-all duration-500 ${milestone.progress === 100 ? 'bg-green-500' : 'bg-blue-500'
                                                }`}
                                            style={{ width: `${milestone.progress}%` }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Milestone Details (for completed) */}
                                {milestone.status === 'Completed' && milestone.id === 1 && (
                                    <div className="mt-4 pt-4 border-t border-gray-200">
                                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Milestone Details</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <div className="text-xs text-gray-600 mb-1">Phase</div>
                                                <div className="text-sm font-medium text-gray-900">{milestone.phase}</div>
                                            </div>
                                            <div>
                                                <div className="text-xs text-gray-600 mb-1">Status</div>
                                                <div className="text-sm font-medium text-gray-900">{milestone.status}</div>
                                            </div>
                                            <div>
                                                <div className="text-xs text-gray-600 mb-1">Tasks Completed</div>
                                                <div className="text-sm font-medium text-gray-900">{milestone.completedTasks} of {milestone.tasks}</div>
                                            </div>
                                            <div>
                                                <div className="text-xs text-gray-600 mb-1">Completion Rate</div>
                                                <div className="text-sm font-medium text-gray-900">100%</div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}