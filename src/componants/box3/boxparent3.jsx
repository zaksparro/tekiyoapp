import React, { useState } from "react";
import Button from "../Button/button"; // Assurez-vous que le chemin vers Button est correct
import "./boxparent3.css"; // Assurez-vous que le chemin vers le fichier CSS est correct
import Services from "./Services/services"
const BoxParent3 = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
    // Autres actions lors du clic sur le bouton
  };

  return (
    <div className="ensemble">
    <div className="box3-button">
      {["SERVICES", "CRÉATIONS", "BLOG", "CONTACT"].map((buttonText, index) => (
        <Button
          key={index}
          text={buttonText}
          isTransparent={selectedButton !== index}
          textColor={selectedButton === index ? "#B0B0B0" : "#090505"}
          onClick={() => handleButtonClick(index)}
          className={`boxparent3-button ${selectedButton === index ? "selected" : ""}`}
        />
      ))}
    </div>
    <div className="box3-services">
      <Services />
    </div>
    </div>

  );
};

export default BoxParent3;
