// Button.jsx

import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import { ReactComponent as Icon } from "./fleche.svg";

const Button = ({ text, isTransparent, textColor, arrowColor, padding }) => {
  const buttonStyle = {
    display: "flex",
    flexDirection: "row",
    padding: padding,
    alignItems: "center",
    borderRadius: "32px",
    border: "1px solid #000",
    background: isTransparent ? "transparent" : "#090505",
    color: textColor,
    transition: "background-color 0.3s, color 0.3s",
    cursor: "pointer",
    fontSize: "2Vh",
    fontFamily: "SF Pro Display Medium",
    borderRadius: "24px",
  };

  const iconStyle = {
    marginLeft: "5px",
    order: 1, // Ajuste l'ordre pour placer l'icône à droite
    fill: arrowColor, // Couleur de la flèche
  };

  return (
    <div className="custom-button" style={buttonStyle}>
      <Icon style={iconStyle}
      arrowColor={arrowColor}  />
      {text}
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isTransparent: PropTypes.bool,
  textColor: PropTypes.string,
  padding: PropTypes.string,
};

Button.defaultProps = {
  isTransparent: false,
  textColor: "#B0B0B0",
  arrowColor: "#B0B0B0", // Valeur par défaut pour la couleur de la flèche
  padding: "5px 10px", // Valeur par défaut pour le padding
};

export default Button;
