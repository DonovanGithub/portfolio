import React from "react";
import { NavLink } from "react-router-dom";
import navigationsvg from "../assets/menu-svgrepo-com.svg";
const Header = () => {
  return (
    <div>
      <section className="header-container">
        <NavLink to="/portfolio">
          <img
            className="navigation-svg"
            src={navigationsvg}
            alt="navigation-svg"
          />
        </NavLink>
        <div className="header-text">
          <h1 className="fullname">Donovan D</h1>
          <h4>Mes projets FrontEnd</h4>
        </div>
      </section>
    </div>
  );
};

export default Header;
