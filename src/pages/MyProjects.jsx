import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import ProjectCard from '../components/projects/ProjectCard';

const projects = [
    {
        id: 1,
        name: 'Modern Family Home',
        image: 'https://images.unsplash.com/photo-1757106322111-fd92ecd4a0a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1970',
        location: 'Sunnyvale, CA',
        status: 'In Design',
        progress: 25,
        completionText: 'Complete'
    },
    {
        id: 2,
        name: 'Lakeside Villa',
        image: 'https://images.unsplash.com/photo-1496564203457-11bb12075d90?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1550',
        location: 'Lakeview, TX',
        status: 'Under Construction',
        progress: 60,
        completionText: 'Complete'
    },
    {
        id: 3,
        name: 'Downtown Reno',
        image: 'https://images.unsplash.com/photo-1496564203457-11bb12075d90?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1550',
        location: 'Metro City, NY',
        status: 'Completed',
        progress: 100,
        completionText: 'Complete'
    },
    {
        id: 4,
        name: 'Kitchen Remodel',
        image: 'https://images.unsplash.com/photo-1496564203457-11bb12075d90?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1550',
        location: 'Hillcrest, WA',
        status: 'Under Construction',
        progress: 65,
        completionText: 'Complete'
    },
    {
        id: 5,
        name: 'Commercial Office',
        image: 'https://images.unsplash.com/photo-1496564203457-11bb12075d90?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1550',
        location: 'Oakland, CA',
        status: 'On Hold',
        progress: 40,
        completionText: 'Complete'
    },
];

const breadcrumbs = [
  { label: 'My Projects', path: '/dashboard' },
];

export default function MyProjects() {
    return (
        <DashboardLayout breadcrumbs={breadcrumbs}>
            <div className="flex gap-6 flex-wrap">
          
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </DashboardLayout>
    );
}