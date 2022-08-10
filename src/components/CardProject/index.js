import React from "react";
import "./style/cardProject.css";
import animeJox from "../../assets/images/anime-jox.png";
import { FiExternalLink } from "react-icons/fi";

const CardProject = (props) => {
  const redirectTo = (link) => {
    window.open(link);
  };
  return (
    <div className="cardContainer">
      <h2 className="cardTitle">{props.name}</h2>
      <div className="imgCardContainer">
        <img className="imgCard" src={animeJox} />
        <div className="imgCardLink" onClick={() => redirectTo(props.link)}>
          <p>Visitar</p>
          <FiExternalLink style={{ paddingTop: 2, paddingLeft: 2 }} />
        </div>
        <div className="imgCardDescription">
          <p>{props.description}</p>
        </div>
      </div>
      <div>
        <div>
          <h3>Tecnologias:</h3>
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
    </div>
  );
};

export default CardProject;
