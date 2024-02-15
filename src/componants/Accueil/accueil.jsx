import React from "react";
import Widget from "./widget1";
import "./accueil.css";
import Button from "../Button/button";
import { useNavigate } from 'react-router-dom';

const Accueil = () => {
  let navigate = useNavigate();

  const handleButtonClick = () => {
    console.log('Bouton "CRÉER UN SITE INTERNET" cliqué dans la section 1 !');
  };

  const handleBox3Click = () => {
    navigate('/boxparent3'); // Redirection vers Box3
  };

  // J'ai supprimé handleTestClick car il n'était pas utilisé dans ce code

  return (
    <div className="accueil">
      <div className="section1">
        <div className="CR-ATION-DE-SITE-WEB">
          CRÉATION <br /> DE SITE WEB PERFORMANTS
        </div>
        <p className="text-wrapper-3">
          Découvrez des solutions web avant-gardistes.
        </p>
        <div className="button-container">
          <Button text="CRÉER UN SITE INTERNET" onClick={handleButtonClick} />
          <Button text="NOS SERVICES" isTransparent textColor="#090505" arrowColor="#090505" onClick={handleBox3Click} />
        </div>
      </div>
      <div className="section2">
        <Widget />
      </div>
    </div>
  );
};

export default Accueil;
