// Widget.jsx

import React, { useState, useEffect } from "react";
import './widget1.css';  // Assurez-vous que le chemin du fichier CSS est correct
import imagewidget1 from "./imagewidget1.jpeg";
import imagewidget2 from "./imagewidget2.webp";
import imagewidget3 from "./imagewidget3.png";

const Widget = () => {
  const [currentHour, setCurrentHour] = useState(getCurrentHour());
  const [widgetVersion, setWidgetVersion] = useState(1);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentHour(getCurrentHour());
    }, 1000);

    const widgetIntervalId = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setWidgetVersion((prevVersion) => (prevVersion === 3 ? 1 : prevVersion + 1));
        setOpacity(1);
      }, 500);
    }, 4000);

    return () => {
      clearInterval(intervalId);
      clearInterval(widgetIntervalId);
    };
  }, []);

  function getCurrentHour() {
    const now = new Date();
    const options = {
      timeZone: 'Europe/Paris',
      hour: 'numeric',
      minute: 'numeric',
    };
    return now.toLocaleTimeString('fr-FR', options);
  }

  const getWidgetContent = () => {
    switch (widgetVersion) {
      case 1:
        return {
          image: imagewidget1,
          text: "UNE ÉQUIPE DÉDIÉE À VOS BESOINS.",
          textSize: "2vh",
        };
      case 2:
        return {
          image: imagewidget2,
          text: "Construisez vos applications avec une rapidité qui ferait douter Usain Bolt de ses capacités.",
          textSize: "2vh",
        };
      case 3:
        return {
          image: imagewidget3,
          text: "Décuplez votre taux de conversion. Utilisez nos outils pour acquérir plus de clients, plus de visibilité et une meilleure réputation en ligne.",
          textSize: "2vh",
        };
      default:
        return {
          image: imagewidget1,
          text: "UNE ÉQUIPE DÉDIÉE À VOS BESOINS.",
          textSize: "2vh",
        };
    }
  };

  const { image, text, textSize } = getWidgetContent();

  return (
    <div className={`widget-1 version-${widgetVersion}`}>
      <div className="widget-heure">
        <div className="heure">
          <div className="une-equipe-dedie">{currentHour}</div>
        </div>
      </div>
      <div className={`imagewidget${widgetVersion} ${opacity === 1 ? 'show' : ''}`}>
        <img
          className={`images-icon ${opacity === 1 ? 'show' : ''} image-widget`}
          loading="eager"
          alt=""
          src={image}
        />
      </div>
      <div className={`text-widget version-${widgetVersion} ${opacity === 1 ? 'show' : ''}`} style={{ fontSize: textSize }}>
        <h3 className="une-quipe-ddi">{text}</h3>
      </div>
    </div>
  );
};

export default Widget;
