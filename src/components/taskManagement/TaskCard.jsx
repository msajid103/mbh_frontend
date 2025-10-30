import { CheckCircle2, Clock, AlertCircle, Calendar, Flag } from 'lucide-react';
import { useSelector } from 'react-redux';

const TaskCard = () => {
    
    const tasks = useSelector(store => store.tasks.data)

    const statusCounts = {
        'Total Tasks': tasks.length,
        'In Progress': tasks.filter(t => t.status === 'In Progress').length,
        'Pending': tasks.filter(t => t.status === 'Pending').length,
        'Completed': tasks.filter(t => t.status === 'Completed').length
    };
    return (

        <div className="flex flex-wrap  mb-6  gap-4 ">
            <div className="flex-1 bg-white rounded-xl p-5 border border-gray-200">
                <div className="text-gray-600 text-sm mb-12">Total Tasks</div>
                <div className="text-3xl font-bold text-gray-900">{statusCounts['Total Tasks']}</div>
            </div>
            <div className="flex-1 bg-blue-50 rounded-xl p-5 border border-blue-200">
                <div className="text-blue-700 text-sm mb-12">In Progress</div>
                <div className="text-3xl font-bold text-blue-700">{statusCounts['In Progress']}</div>
            </div>
            <div className="flex-1 bg-yellow-50 rounded-xl p-5 border border-yellow-200">
                <div className="text-yellow-700 text-sm mb-12">Pending</div>
                <div className="text-3xl font-bold text-yellow-700">{statusCounts['Pending']}</div>
            </div>
            <div className="flex-1 bg-green-50 rounded-xl p-5 border border-green-200">
                <div className="text-green-700 text-sm mb-12">Completed</div>
                <div className="text-3xl font-bold text-green-700">{statusCounts['Completed']}</div>
            </div>
        </div>
    );
};

export default TaskCard;