import React from "react";
import projects from "../assets/projects";
import "../styles/projects.css";

const Projects = () => {
  return (
    <section className="Projects">
      <h2>Here are some cool projects I've done:</h2>
      <div>
        {projects.map((project) => (
          <div className={projects} key={project.id}>
            <div className="projects">
              <h1>
                <a href={project.link}>{project.title}</a>
              </h1>
              <p>{project.tech}</p>
              <p>{project.description}</p>
              <a href={project.link}>
                <img
                  className="images"
                  alt="img"
                  src={project.image}
                  href={project.link}></img>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
