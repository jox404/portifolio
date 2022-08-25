import React, { useContext, useEffect, useRef, useState } from "react";
import "./style/navigationDrawer.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { DrawerContext } from "../../providers/drawerProvider";

const NavigationDrawer = () => {
  const { active, setActive, bgColor } = React.useContext(DrawerContext);
  const navigation = useRef();
  const handleActiveDrawer = () => {
    if (active) {
      navigation.current.classList.remove("disable");
      navigation.current.classList.add("active");
    } else {
      navigation.current.classList.remove("active");
      navigation.current.classList.add("disable");
    }
  };
  const scrollTo = (location) => {
    window.scrollTo({ top: location, behavior: "smooth" });
  };
  const clickAnimation = async (e) => {
    const element = e.currentTarget.classList;
    await element.remove("unClick");
    await element.add("onClick");
    setTimeout(async () => {
      await element.remove("onClick");
      await element.add("unClick");
      setActive(false);
    }, 300);
  };
  useEffect(() => {
    handleActiveDrawer();
    document.addEventListener("mousedown", (e) => {
      if (navigation.current && !navigation.current.contains(e.target)) {
        setActive(false);
      }
    });
  }, [active]);
  return (
    <div className="navigationContainer">
      <div
        className="navigationDrawer"
        ref={navigation}
        style={{ backgroundColor: `${bgColor}` }}
      >
        <div
          className="btnClose"
          onClick={() => {
            setActive(false);
          }}
        >
          <AiOutlineCloseCircle />
        </div>
        <div
          className="linkDrawer"
          onClick={(e) => {
            scrollTo(0);
            clickAnimation(e);
          }}
        >
          <a>Home</a>
        </div>
        <div
          className="linkDrawer"
          onClick={(e) => {
            scrollTo(430);
            clickAnimation(e);
          }}
        >
          <a>Projetos</a>
        </div>
        <div
          className="linkDrawer"
          onClick={(e) => {
            scrollTo(1134);
            clickAnimation(e);
          }}
        >
          <a>Habilidades</a>
        </div>
        <div
          className="linkDrawer"
          onClick={(e) => {
            scrollTo(1490);
            clickAnimation(e);
          }}
        >
          <a>Sobre Min</a>
        </div>
        <div
          className="linkDrawer"
          onClick={(e) => {
            scrollTo(3000);
            clickAnimation(e);
          }}
        >
          <a>Contatos</a>
        </div>
      </div>
    </div>
  );
};

export default NavigationDrawer;
