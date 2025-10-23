
import { Search } from 'lucide-react';
import { useSelector } from 'react-redux';
import TaskListItem from './TaskListitem';
import { selectFilteredTasks } from '../../store/slices/tasksSlice';


const TaskTable = () => {

    const filteredTasks = useSelector(selectFilteredTasks);
    return (
        <>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        {/* Table Header */}
                        <thead>
                            <tr className="bg-blue-600 text-white">
                                <th className="px-4 py-3 text-left w-12">
                                    {/* <input type="checkbox" className="w-4 h-4 rounded" /> */}
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Task ID</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold min-w-[250px]">Task</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Responsible</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold whitespace-nowrap">Start Date</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold whitespace-nowrap">End Date</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold whitespace-nowrap">Days Left</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Priority</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold min-w-[150px]">% Complete</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold whitespace-nowrap">Created Date</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Actions</th>

                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="divide-y divide-gray-200">
                            {filteredTasks.map((task) => (
                                <TaskListItem key={task.id} task={task} />
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Empty State */}
                {filteredTasks.length === 0 && (
                    <div className="p-12 text-center">
                        <div className="text-gray-400 mb-2">
                            <Search className="w-12 h-12 mx-auto" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">No tasks found</h3>
                        <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default TaskTable