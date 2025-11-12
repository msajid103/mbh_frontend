// components/taskManagement/TaskKanban.jsx
import React from 'react';
import { MessageSquare, Paperclip, Calendar, CheckCircle } from 'lucide-react';

const TaskKanban = ({ tasks }) => {
  // Group tasks by status
  const columns = {
    action: {
      title: 'ACTION',
      count: tasks.filter(t => t.status === 'Todo').length,
      color: 'gray',
      tasks: tasks.filter(t => t.status === 'Todo')
    },
    inProgress: {
      title: 'IN PROGRESS',
      count: tasks.filter(t => t.status === 'In Progress').length,
      color: 'blue',
      tasks: tasks.filter(t => t.status === 'In Progress')
    },
    pending: {
      title: 'PENDING',
      count: tasks.filter(t => t.status === 'Pending').length,
      color: 'yellow',
      tasks: tasks.filter(t => t.status === 'Pending')
    },
    completed: {
      title: 'COMPLETED',
      count: tasks.filter(t => t.status === 'Completed').length,
      color: 'green',
      tasks: tasks.filter(t => t.status === 'Completed')
    }
  };

  const getPhaseColor = (phase) => {
    const colors = {
      'Pre-Construction': 'bg-purple-100 text-purple-700',
      'Procurement': 'bg-green-100 text-green-700',
      'Construction': 'bg-red-100 text-red-700',
      'Design': 'bg-blue-100 text-blue-700',
      'Planning': 'bg-yellow-100 text-yellow-700',
      'Post-Construction': 'bg-pink-100 text-pink-700'
    };
    return colors[phase] || 'bg-gray-100 text-gray-700';
  };

  const getColumnBorderColor = (color) => {
    const colors = {
      gray: 'border-t-gray-400',
      blue: 'border-t-blue-500',
      yellow: 'border-t-yellow-500',
      green: 'border-t-green-500'
    };
    return colors[color];
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {Object.entries(columns).map(([key, column]) => (
        <div key={key} className="flex flex-col">
          {/* Column Header */}
          <div className="bg-white rounded-t-xl border border-gray-200 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-600">{column.title}</span>
              <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-gray-700">
                {column.count}
              </span>
            </div>
          </div>

          {/* Column Content */}
          <div className={`bg-gray-50 rounded-b-xl border-x border-b border-gray-200 border-t-4 ${getColumnBorderColor(column.color)} p-3 space-y-3 min-h-[500px]`}>
            {column.tasks.map((task) => (
              <div
                key={task.id}
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
              >
                {/* Task Image (if available) */}
                {task.image && (
                  <div className="mb-3 rounded-lg overflow-hidden">
                    <img
                      src={task.image}
                      alt={task.title}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                )}

                {/* Task Title */}
                <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
                  {task.title}
                </h3>

                {/* Task Description */}
                {task.description && (
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    {task.description}
                  </p>
                )}

                {/* Phase Badge */}
                {task.phase && (
                  <div className="mb-3">
                    <span className={`px-2 py-1 rounded-md text-xs font-medium ${getPhaseColor(task.phase)}`}>
                      {task.phase}
                    </span>
                  </div>
                )}

                {/* Assignees */}
                {task.assignees && task.assignees.length > 0 && (
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex -space-x-2">
                      {task.assignees.slice(0, 3).map((assignee, index) => (
                        <div
                          key={index}
                          className={`w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium ${assignee.color || 'bg-gray-400'}`}
                          title={assignee.name}
                        >
                          {assignee.avatar || assignee.name?.charAt(0)}
                        </div>
                      ))}
                      {task.assignees.length > 3 && (
                        <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-gray-700 text-xs font-medium">
                          +{task.assignees.length - 3}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Footer Stats */}
                <div className="flex items-center justify-between text-xs text-gray-600 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    {task.comments !== undefined && (
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        <span>{task.comments}</span>
                      </div>
                    )}
                    {task.attachments !== undefined && (
                      <div className="flex items-center gap-1">
                        <Paperclip className="w-4 h-4" />
                        <span>{task.attachments}</span>
                      </div>
                    )}
                  </div>
                  {task.dueDate && (
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{task.dueDate}</span>
                    </div>
                  )}
                  {task.status === 'completed' && (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskKanban;