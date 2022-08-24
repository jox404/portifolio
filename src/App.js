import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home/index";
import { DrawerProvider } from "./providers/drawerProvider";

class App extends Component {
  render() {
    return (
      <DrawerProvider>
        <Home />
      </DrawerProvider>
    );
  }
}

export default App;
