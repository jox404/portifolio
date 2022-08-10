import React from "react";
import "./style/cardAbilities.css";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { TbBrandReactNative } from "react-icons/tb";
import { TbBrandFirebase } from "react-icons/tb";
import { ImHtmlFive2 } from "react-icons/im";
import { ImCss3 } from "react-icons/im";
import { SiMongodb } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const CardAbilities = (props) => {
  const handleAbility = (ability) => {
    switch (ability) {
      case "Java Script":
        return (
          <IoLogoJavascript
            color="#f1fa8c	"
            size={"40%"}
            style={{ marginTop: "auto", marginBottom: "auto", padding: 0 }}
          />
        );
        break;
      case "React":
        return (
          <GrReactjs
            color="#8be9fd"
            size={"40%"}
            style={{ marginTop: "auto", marginBottom: "auto", padding: 0 }}
          />
        );
        break;
      case "React Native":
        return (
          <TbBrandReactNative
            color="#6272a4"
            size={"40%"}
            style={{ marginTop: "auto", marginBottom: "auto", padding: 0 }}
          />
        );
        break;
      case "Firebase":
        return (
          <TbBrandFirebase
            color="#ffb86c"
            size={"40%"}
            style={{ marginTop: "auto", marginBottom: "auto", padding: 0 }}
          />
        );
        break;
      case "Html":
        return (
          <ImHtmlFive2
            color="#ff5555"
            size={"40%"}
            style={{ marginTop: "auto", marginBottom: "auto", padding: 0 }}
          />
        );
        break;
      case "Css":
        return (
          <ImCss3
            color="#ff79c6"
            size={"40%"}
            style={{ marginTop: "auto", marginBottom: "auto", padding: 0 }}
          />
        );
        break;
      case "MongoDb":
        return (
          <SiMongodb
            color="#50fa7b"
            size={"40%"}
            style={{ marginTop: "auto", marginBottom: "auto", padding: 0 }}
          />
        );
        break;
      case "GitHub":
        return (
          <AiFillGithub
            color="#f8f8f2"
            size={"40%"}
            style={{ marginTop: "auto", marginBottom: "auto", padding: 0 }}
          />
        );
        break;
    }
  };
  return (
    <div className="cardAbilitiesContainer">
      <div className="card">
        {handleAbility(props.ability)}
        <p>{props.ability}</p>
      </div>
    </div>
  );
};
export default CardAbilities;
