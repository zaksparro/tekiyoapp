import React from "react";
import PropTypes from "prop-types";
import Logo from "./tekiyo.svg"; // Assure-toi que le chemin est correct
import './navbar.css';

const NavBar = ({ className, logo = Logo, divClassName }) => {
  return (
    <div className={`nav-bar ${className}`}>
      <img className="logo" src={logo} alt="Logo" />
      <div className="text">
        <div className="menu">
          <div className={`text-wrapper ${divClassName}`}>SUNDAY</div>
        </div>
        <div className="rectangle" />
      </div>
    </div>
  );
};

NavBar.propTypes = {
  logo: PropTypes.string,
};

export default NavBar;
