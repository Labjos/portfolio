import { useState } from 'react';
import './projectsList.css';
import projectsData from'../../data/projects.json';
import ProjectsItem from '../projects-item/ProjectsItem';



function ProjectsList() {
  const [projects, setProjects] = useState(projectsData);


  return (
    <div className="container text-center">
      <div className="row">
        
          {projects.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4"><ProjectsItem {...project} /></div>
          ))}
        
      </div>
    </div>
  )
}

export default ProjectsList;