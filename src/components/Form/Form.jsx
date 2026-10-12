import { useState } from 'react';
import styles from './Form.module.css'

// Form component to handle adding new projects
function Form({ onAddProject }) {
    // State to manage form inputs
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    // Function to handle form submission
    function handleSubmit(e) {
        e.preventDefault();
        // Create a new project object
        const newProject = {
            name: name,
            description: description
        };
        // Call the onAddProject function passed as a prop to add the new project
        onAddProject(newProject);
        // Reset form inputs
        setName('');
        setDescription('');
    }

    return (
    <form  className={styles['App-form']} onSubmit={handleSubmit}>
        <h4>Add New Project</h4>

      <label htmlFor="title">Title</label>
        <input placeholder="Project Title" id="title" type="text" name="title" value={name} 
        onChange={(e) => setName(e.target.value)} required />
      
      <label htmlFor="description">Description</label>
        <textarea placeholder="Project Description" id="description" name="description" value={description} 
        onChange={(e) => setDescription(e.target.value)} required></textarea>
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;