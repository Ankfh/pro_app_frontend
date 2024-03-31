import React from "react";
import Navbar from "../UI/Navbar";
import { UseDArkTheme } from "../../DarkTheme/Context/ThemeContext";
import { oNlogoutClick } from "../services/NavbarServices";
import { useNavigate } from "react-router-dom";

const NavbarContainer = () => {
  const { darkMode, toggleTheme } = UseDArkTheme();
  const navigate = useNavigate();
  const logoutClick = () => {
    oNlogoutClick(navigate);
  };
  const capital =
    localStorage.getItem("user_name")?.trim()?.charAt(0)?.toUpperCase() ?? null;

  return (
    <Navbar
      toggleTheme={toggleTheme}
      darkMode={darkMode}
      capital={capital}
      logoutClick={logoutClick}
    />
  );
};

export default NavbarContainer;
