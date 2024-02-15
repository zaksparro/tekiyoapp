import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import { ReactComponent as Icon } from "./fleche.svg";

const Button = ({ text, isTransparent, textColor, onClick, padding }) => {
  const buttonStyle = {
    display: "flex",
    flexDirection: "row",
    padding: padding,
    alignItems: "center",
    border: isTransparent ? "1px solid #000" : "none",
    background: isTransparent ? "transparent" : "#090505",
    color: textColor,
    transition: "background-color 0.3s, color 0.3s",
    cursor: "pointer",
    fontSize: "2vh",
    fontFamily: "SF Pro Display Medium",
    borderRadius: "24px",
  };

  const iconStyle = {
    marginLeft: "5px",
    order: 1,
    fill: textColor, // Utilise textColor pour la couleur de la flèche
  };

  return (
    <div className="custom-button" style={buttonStyle} onClick={onClick}>
      {text}
      <Icon style={iconStyle} />
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isTransparent: PropTypes.bool,
  textColor: PropTypes.string,
  onClick: PropTypes.func,
  padding: PropTypes.string,
};

Button.defaultProps = {
  isTransparent: false,
  textColor: "#B0B0B0",
  padding: "5px 10px",
};

export default Button;
