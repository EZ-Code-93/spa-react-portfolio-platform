import styles from './ProjectCard.module.css'

function ProjectCard({ project }) {
  return (
    <div className={styles['App-project-card']}>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      {/* Add more project details as needed */}
    </div>
  );
}

export default ProjectCard;