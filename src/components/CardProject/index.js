import React from "react";
import "./style/cardProject.css";
import animeJox from "../../assets/images/anime-jox.png";
import { FiExternalLink } from "react-icons/fi";
import { BsImages } from "react-icons/bs";

const CardProject = (props) => {
  const redirectTo = (link) => {
    window.open(link);
  };
  const colorTechnology = (technology) => {
    switch (technology) {
      case "JS":
        return "#f1fa8c";
        break;
      case "React Native":
        return "#8be9fd";
        break;

      case "mySql":
        return "#6272a4";
        break;

      case "Node.Js":
        return "#50fa7b";
        break;

      case "Expo":
        return "#f8f8f2";
        break;
      case "React":
        return "#8be9fd";
        break;

      case "Fire Base":
        return "#ffb86c";
        break;

      case "Material UI":
        return "#bd93f9";
        break;
      case "CSS":
        return "#6272a4";
        break;
    }
  };
  return (
    <div className="cardContainer">
      <h2 className="cardTitle">{`<${props.name} />`}</h2>
      <div>
        <div className="CardDescription">
          <p>{props.description}</p>
        </div>

        <div>
          <h3>{"{ " + "Tecnologias" + " }"}</h3>
          <div className="tecList">
            {props.technologies.map((technology, index) => {
              const color = colorTechnology(technology);

              return (
                <p style={{ backgroundColor: "#282a36", color: color }}>
                  {technology}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bottonCard">
        <span className="gallery">
          <h3
            onClick={async () => {
              props.setIndexGallery(props.index);
              props.setGalleryModal(true);
            }}
          >
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
    </div>
  );
};

export default CardProject;
