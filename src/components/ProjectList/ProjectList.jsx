import { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './ProjectList.module.css';
// ProjectList component to display a list of projects with search functionality
function ProjectList({ projects }) {
    // State to manage the search query
    const [searchQuery, setSearchQuery] = useState('');
    // Filter projects based on the search query
    const filteredProjects = projects.filter((project) => {
        return project.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    // Check if there are no projects matching the search query
    const noProjectsFound = filteredProjects.length === 0;

  return (
    <div className={styles['App-project-list']}>

    <h2 className={styles['App-project-list-title']}>Project List</h2>

        <input 
            type="text" 
            placeholder="Search projects..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
      

      {noProjectsFound && <p className={styles['App-no-projects']}>No projects match your search.</p>}

      {filteredProjects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
