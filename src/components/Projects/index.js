import React from "react";
import CardProject from "../CardProject";
import "./style/projects.css";
import projectsData from "../../data/projects.json";

const Projects = (props) => {
  return (
    <div className="containerProjects">
      <div className="projects">
        <h1>Projetos</h1>
        <div className="cardsList">
          {projectsData.map((project, index) => {
            return (
              <CardProject
                key={index}
                name={project.name}
                description={project.description}
                link={project.link}
                background={project.background}
                technologies={project.technologies}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
