import DashboardLayout from '../layouts/DashboardLayout';
import TaskHeader from '../components/taskManagement/TaskHeader';
import TaskCard from '../components/taskManagement/TaskCard';
import TaskTable from '../components/taskManagement/TaskTable';
import TaskFilter from '../components/taskManagement/TaskFilter';

export default function TaskManagementPage() {   

    return (
        <DashboardLayout>
            <TaskHeader />
            <TaskCard />
            <TaskFilter />
            <TaskTable />
        </DashboardLayout>
    );
}