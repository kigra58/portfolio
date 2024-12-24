import React, { useReducer } from "react";
import { themeReducer } from "../utils/reducers/commonReducer";
import SVGFils from "./SVGFils";

const ThemeChanger: React.FC = () => {
  const [themeState, setThemeState] = useReducer(themeReducer, "light");

  const themeHandler = () => {
    setThemeState(themeState === "light" ? "dark" : "light");
    if (themeState === "dark") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  };
  return (
    <span className="cursor-pointer" onClick={themeHandler}>
      {themeState === "light" ? (
       <SVGFils name="light" />
      ) : (
        <SVGFils name="dark" />
      )}
    </span>
  );
};

export default ThemeChanger;
