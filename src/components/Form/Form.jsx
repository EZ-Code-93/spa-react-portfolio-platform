import { useState } from 'react';
import styles from './Form.module.css'

function Form({ onAddProject }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const newProject = {
            name: name,
            description: description
        };

        onAddProject(newProject);
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