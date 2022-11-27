import React from 'react'
import projects from './assets/projects';
import './styles/projects.css'


const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <div>
        {projects.map((project) => (
          <div className={projects} key={project.id}>
            <h1>{project.title}</h1>
            <h1>{project.tech}</h1>
            <h1>{project.description}</h1>
            <h1>{project.image}</h1>
            <h1>{project.link}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
