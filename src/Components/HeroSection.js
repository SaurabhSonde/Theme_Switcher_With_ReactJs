import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";
import ThemeToggler from "./ThemeToggler";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currectTheme = AppTheme[theme];

  return (
    <div
      style={{
        padding: "2rem",
        height: "1000px",
        backgroundColor: `${currectTheme.backgroundColor}`,
        color: `${currectTheme.textColor}`,
        textAlign: "center"
      }}
    >
    <h1 style={{
    	paddingBottom: "3rem"
    }}>Theme Toggler</h1>
      <h1>Context API theme toggler</h1>
      <h3>Click the below button to change the theme</h3>
     <ThemeToggler />
    </div>
  );
};

export default HeroSection;