import React, { useEffect, useState } from "react";
import "./style/navBar.css";
import logo from "../../assets/images/logo.svg";

const NavBar = (props) => {
  const [bgColor, setBgColor] = useState("#282a36");
  const handleBgColor = () => {
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
    switch (true) {
      case scrollPosition >= 0 && scrollPosition <= 423:
        return setBgColor("#282a36");
        break;
      case scrollPosition >= 424 && scrollPosition <= 1009:
        setBgColor("#ff5555");
        break;
      case scrollPosition >= 1010 && scrollPosition <= 1367:
        setBgColor("#ffb86c");
        break;
      case scrollPosition >= 1368:
        setBgColor("#44475a");
        break;
    }
  };

  const scrollTo = (location) => {
    window.scrollTo({ top: location, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleBgColor();
    });
  });

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <div className="navBar">
        <div className="logo" onClick={() => scrollTo(0)}>
          <img src={logo} />
        </div>
        <div className="linksContainer">
          <div className="links">
            <a href="#projects" onClick={() => scrollTo(424)}>
              Projetos
            </a>
            <span />
          </div>
          <div className="links">
            <a href="#abilities" onClick={() => scrollTo(1010)}>
              Habilidades
            </a>
            <span />
          </div>
          <div className="links">
            <a href="#about1" onClick={() => scrollTo(1368)}>
              Sobre Min
            </a>
            <span />
          </div>
          <div className="links">
            <a href="#contact" onClick={() => scrollTo(2000)}>
              {/* mudar depois */}
              Contato
            </a>
            <span />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
