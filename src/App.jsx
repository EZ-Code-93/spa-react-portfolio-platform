import { useState } from 'react'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import ProjectList from './components/ProjectList/ProjectList'
import projects from './projects_data'

function App() {
  const [projectList, setProjectList] = useState(projects);

  // Function to add a new project to the list
  const addProject = (newProject) => {
    setProjectList([...projectList, newProject]);
  };
 
  return (
    <div className="App">
      <Header />
      <Form onAddProject={addProject} />
      <ProjectList projects={projectList} />
    </div>
  );
}

export default App
