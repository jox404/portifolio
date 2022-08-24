import React, { useState, createContext } from "react";

export const DrawerContext = createContext(null);
export const DrawerProvider = (props) => {
  const [active, setActive] = useState(false);
  const [bgColor, setBgColor] = useState("#282a36");
  return (
    <DrawerContext.Provider
      value={{
        active,
        setActive,
        bgColor,
        setBgColor,
      }}
    >
      {props.children}
    </DrawerContext.Provider>
  );
};
