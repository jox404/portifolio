import React from "react";
import "./style/cardProject.css";
import animeJox from "../../assets/images/anime-jox.png";
import { FiExternalLink } from "react-icons/fi";
import { BsImages } from "react-icons/bs";

const CardProject = (props) => {
  const redirectTo = (link) => {
    window.open(link);
  };
  return (
    <div className="cardContainer">
      <h2 className="cardTitle">{props.name}</h2>
      <div>
        <div className="CardDescription">
          <p>{props.description}</p>
        </div>

        <div>
          <h3>{"{ " + "Tecnologias" + " }"}</h3>
          <div className="tecList">
            {props.technologies.map((res, index) => {
              const handleComma = index + 1;
              return (
                <p>
                  {res}
                  {handleComma < props.technologies.length ? "," : false}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <span className="gallery">
        <h3>
          Geleria <BsImages />
        </h3>
      </span>
      <span className="visitPage">
        <p>
          Visitar
          <FiExternalLink style={{ paddingTop: 2, paddingLeft: 2 }} />
        </p>
      </span>
    </div>
  );
};

export default CardProject;
