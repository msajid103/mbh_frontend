import TaskHeader from '../components/taskManagement/TaskHeader';
import TaskCard from '../components/taskManagement/TaskCard';
import TaskTable from '../components/taskManagement/TaskTable';
import TaskFilter from '../components/taskManagement/TaskFilter';

export default function TaskManagementPage() {   

    return (
        <>
            <TaskHeader />
            <TaskCard />
            <TaskFilter />
            <TaskTable />
        </>
    );
}