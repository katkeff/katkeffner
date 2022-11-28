import React from 'react'
import projects from './assets/projects';
import './styles/projects.css'


const Projects = () => {
  return (
    <section className="Projects">
      <h2>Projects</h2>
      <div>
        {projects.map((project) => (
          <div className={projects} key={project.id}>
            <h1>
              <a href={project.link}>{project.title}</a>
            </h1>
            <p>{project.tech}</p>
            <p>{project.description}</p>
            <img className="images" alt='img' src={project.image}></img>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
