import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  const theme = useContext(ThemeContext)[0];
const currectTheme = AppTheme[theme];


  return (
    <button
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
      style={{
          backgroundColor: "#26ae60",
          padding: "5px 100px",
          fontSize: "20px",
          color: "#FFF",
          border: `${currectTheme.border}`
        }}
    >
      {themeMode === "light" ? "Dark Theme" : "Light Theme"}
       
    </button>
    
   );
};

export default ThemeToggler;