import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, taskAction } from '../../store/slices/tasksSlice';
import { Search } from 'lucide-react';

const TaskFilter = () => {
    const dispatch = useDispatch();
    const filters = useSelector(selectFilters);
    return (
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
            <div className="flex items-center justify-between">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search tasks..."
                        // value={searchQuery}
                        onChange={(e) => dispatch(taskAction.updateSearchQuery(e.target.value))}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex gap-2">
                    {['All', 'Pending', 'In Progress', 'Completed'].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => dispatch(taskAction.updateStatusFilter(filter))}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filters.statusFilter === filter
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
    )
}

export default TaskFilter