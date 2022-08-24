import React, { useRef } from "react";
import Abilities from "../Abilities";
import About from "../About";
import Contact from "../Contact";
import Intro from "../Intro";
import { NavBar } from "../NavBar/index";
import NavigationDrawer from "../NavigationDrawer";
import Projects from "../Projects";

const Home = (props) => {
  const containerRef = useRef();
  return (
    <div ref={containerRef}>
      <NavigationDrawer />
      <NavBar containerRef={containerRef} />
      <Intro />
      <Projects />
      <Abilities />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
