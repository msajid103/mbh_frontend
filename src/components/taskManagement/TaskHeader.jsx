// components/taskManagement/TaskHeader.jsx
import { LayoutGrid, List, Plus } from 'lucide-react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { taskAction } from '../../store/slices/tasksSlice';

const TaskHeader = ({ viewMode, setViewMode }) => {
    const dispatch = useDispatch();
    
    const handleAddTask = () => {
        dispatch(taskAction.addTAsk());
    };

    return (
        <div className="flex gap-4 items-center justify-between mb-6 flex-wrap">
            <p className="text-gray-600 text-sm">Manage and track all project tasks</p>
            <div className="flex items-center flex-wrap gap-3">
                <div className='flex items-center rounded-lg gap-3 bg-white border border-gray-200'>
                    <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 flex gap-2 rounded-lg transition-colors ${
                            viewMode === 'list'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                        <List className="w-5 h-5" /> List
                    </button>
                    <button
                        onClick={() => setViewMode('kanban')}
                        className={`p-2 flex gap-2 rounded-lg transition-colors ${
                            viewMode === 'kanban'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                        <LayoutGrid className="w-5 h-5" /> Kanban
                    </button>
                </div>
                <button onClick={handleAddTask} className="btn-primary">
                    <Plus className="w-5 h-5" />
                    Add Task
                </button>
            </div>
        </div>
    );
};

export default TaskHeader;