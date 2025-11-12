// pages/TaskManagementPage.jsx
import { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskHeader from '../components/taskManagement/TaskHeader';
import TaskCard from '../components/taskManagement/TaskCard';
import TaskTable from '../components/taskManagement/TaskTable';
import TaskKanban from '../components/taskManagement/TaskKanban';
import TaskFilter from '../components/taskManagement/TaskFilter';
import { selectFilteredTasks } from '../store/slices/tasksSlice';

export default function TaskManagementPage() {
    const [viewMode, setViewMode] = useState('list');
    const filteredTasks = useSelector(selectFilteredTasks);

    return (
        <>
            <TaskHeader viewMode={viewMode} setViewMode={setViewMode} />
            <TaskCard />
            <TaskFilter />
            {viewMode === 'kanban' ? (
                <TaskKanban tasks={filteredTasks} />
            ) : (
                <TaskTable />
            )}
        </>
    );
}