import React, { useEffect, useRef, useState } from "react";
import CardProject from "../CardProject";
import "./style/projects.css";
import projectsData from "../../data/projects.json";
import Gallery from "../Gallery";

const Projects = (props) => {
  const [galleryModal, setGalleryModal] = useState(false);
  const modalRef = useRef(null);
  const ContainerRef = useRef(null);
  const [indexGallery, setIndexGallery] = useState(0);

  const handleCloseModal = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setGalleryModal(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  handleCloseModal(modalRef);

  return (
    <div className="containerProjects">
      <div
        className="galerryContainer"
        ref={ContainerRef}
        style={{ display: `${galleryModal ? "flex" : "none"}` }}
        ou
      >
        <div ref={modalRef}>
          <Gallery
            onClick={setGalleryModal}
            images={projectsData[indexGallery].images}
          />
        </div>
      </div>
      <h1>Projetos</h1>
      <div className="projectsToCenter">
        <div className="projects">
          <div className="cardsList">
            {projectsData.map((project, index) => {
              return (
                <CardProject
                  key={index}
                  index={index}
                  name={project.name}
                  description={project.description}
                  link={project.link}
                  technologies={project.technologies}
                  images={project.images}
                  setIndexGallery={setIndexGallery}
                  setGalleryModal={setGalleryModal}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
