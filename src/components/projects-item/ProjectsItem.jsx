import './ProjectsItem.css';


function ProjectsItem({ project }) {
  return (
          <div className="project">
            {/* <img src={project.image}  alt={project.title} /> */}
            <div className="overlay">
              <p>{project.title}</p>
              <div className="iconsContainer">
                <a href="" target="" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
                <a href="" target="" rel="noopener noreferrer"><i className="bi bi-laptop"></i></a>
              </div>
            </div>
          </div>
  )
}
export default ProjectsItem;