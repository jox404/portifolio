import React, { useContext, useEffect, useRef, useState } from "react";
import "./style/navBar.css";
import logo from "../../assets/images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { DrawerContext } from "../../providers/drawerProvider";

const NavBar = (props) => {
  const { active, setActive, bgColor, setBgColor } =
    React.useContext(DrawerContext);
  const handleBgColor = () => {
    const scrollPosition = window.scrollY;
    switch (true) {
      case scrollPosition >= 0 && scrollPosition <= 429:
        return setBgColor("#282a36");
        break;
      case scrollPosition >= 430 && scrollPosition <= 1133:
        setBgColor("#44475a");
        break;
      case scrollPosition >= 1134 && scrollPosition <= 1489:
        setBgColor("#ffb86c");
        break;
      case scrollPosition >= 1490:
        setBgColor("#44475a");
        break;
    }
  };
  const scrollTo = (location) => {
    window.scrollTo({ top: location, behavior: "smooth" });
  };

  const refBtnMobile = useRef();
  const refClickEffect = useRef();

  const btnEffectTouch = () => {
    refClickEffect.current.classList.remove("clickEffectEnd");
    refClickEffect.current.classList.add("clickEffectStart");
    setTimeout(() => {
      refClickEffect.current.classList.remove("clickEffectStart");
      refClickEffect.current.classList.add("clickEffectEnd");
    }, 600);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleBgColor();
    });
    if (refBtnMobile && refBtnMobile.current) {
      refBtnMobile.current.addEventListener("click", () => {
        btnEffectTouch();
        setActive(true);
      });
    }
  });

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <div className="navBar">
        <div className="logo" onClick={() => scrollTo(0)}>
          <img src={logo} />
        </div>
        <div className="linksContainer">
          <div className="links" href="#projects" onClick={() => scrollTo(430)}>
            <a>Projetos</a>

            <span />
          </div>
          <div
            className="links"
            href="#abilities"
            onClick={() => scrollTo(1134)}
          >
            <a>Habilidades</a>
            <span />
          </div>
          <div className="links" onClick={() => scrollTo(1490)}>
            <a href="#about1">Sobre Min</a>
            <span />
          </div>
          <div className="links" onClick={() => scrollTo(2094)}>
            <a href="#contact">
              {/* mudar depois */}
              Contato
            </a>
            <span />
          </div>
        </div>
        <div className="btnMenuMobile" ref={refBtnMobile}>
          <GiHamburgerMenu />
          <span className="clickEffect" ref={refClickEffect} />
        </div>
      </div>
    </div>
  );
};

export { NavBar };
