import React from "react";
import "./style/intro.css";
import perfil from "../../assets/images/perfil.jpeg";
import { CgWebsite } from "react-icons/cg";
import { FiSmartphone } from "react-icons/fi";

const Intro = (props) => {
  const redirectTo = (link) => {
    window.open(`${link}`);
  };
  return (
    <div className="containerIntro">
      <div className="intro">
        <div className="myDescription">
          <h1>Olá, Eu sou o João.</h1>
          <p>
            Front End Developer Junior,
            <br />
            Desenvolvo websites{" "}
            <CgWebsite color="8be9fd" style={{ marginBottom: -3 }} /> e
            aplicativos{" "}
            <FiSmartphone color="#ff79c6" style={{ marginBottom: -3 }} />
            <br />
            usando React e React Native.
          </p>
          <button
            className="btnProjects"
            onClick={() => redirectTo("https://github.com/jox404")}
          >
            Projetos
          </button>
        </div>
        <div className="profileImage">
          <img src={perfil} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
