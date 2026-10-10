import { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './ProjectList.module.css';

function ProjectList({ projects }) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProjects = projects.filter((project) => {
        return project.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

  return (
    <div className={styles['App-project-list']}>
        <input 
            type="text" 
            placeholder="Search projects..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
      <h2>Project List</h2>
      {/* Render your project list here */}
        {filteredProjects.length > 0 ? (
      filteredProjects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))
    ) : (
        <p>No projects found.</p>
      )}
    </div>
  );
}

export default ProjectList;