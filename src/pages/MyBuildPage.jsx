
import ProjectCard from '../components/projects/ProjectCard';
import { useSelector } from 'react-redux';



export default function MyBuildPage() {
    const projects = useSelector(store => store.projects)

    return (

        <div className="flex gap-6 flex-wrap">

            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>

    );
}