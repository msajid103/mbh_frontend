import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import ProjectCard from '../components/projects/ProjectCard';
import { useSelector } from 'react-redux';



export default function MyProjects() {
    const projects = useSelector(store => store.projects)

    return (
        <DashboardLayout>
            <div className="flex gap-6 flex-wrap">

                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </DashboardLayout>
    );
}