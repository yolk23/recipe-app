import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import { NavLink } from "react-router-dom";
import { FaToggleOn, FaToggleOff, FaBars } from "react-icons/fa";
import { useUser } from "./UserContext";

function Navbar() {
  const { toggleTheme, theme } = useTheme();
  const { isLoggedIn, logIn, logOut } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const setMode = () => (theme === "light" ? "black" : "white");
  const inverseSetMode = () => (theme === "light" ? "white" : "black");

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      style={{ backgroundColor: inverseSetMode(), color: setMode() }}
      className="p-4 flex justify-between items-center h-20"
    >
      <div className="flex items-center gap-6">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/Recipes">Recipes</NavLink>
      </div>
      <div className="flex items-center gap-6">
        <button className="md:hidden" onClick={handleMenuToggle}>
          <FaBars />
        </button>
        <button onClick={toggleTheme}>
          {theme === "light" ? <FaToggleOff /> : <FaToggleOn />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
