import React from "react";
import CardAbilities from "../CardAbilities";
import "./style/abilites.css";
import dataAbilities from "../../data/abilities.json";

const Abilities = (props) => {
  return (
    <div className="abilitesContainer">
      <div className="abilites">
        <h1>Habilidades</h1>
        <div className="abilitesList">
          {dataAbilities.map((ability, index) => {
            return <CardAbilities key={index} ability={ability.name} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Abilities;
