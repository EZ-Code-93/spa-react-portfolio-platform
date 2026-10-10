import { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './ProjectList.module.css';

function ProjectList({ projects }) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProjects = projects.filter((project) => {
        return project.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const noProjectsFound = filteredProjects.length === 0;

  return (
    <div className={styles['App-project-list']}>
        <input 
            type="text" 
            placeholder="Search projects..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
      <h2>Project List</h2>

      {noProjectsFound && <p>No projects match your search.</p>}

      {filteredProjects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
