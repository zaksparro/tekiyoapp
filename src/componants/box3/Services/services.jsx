import React, { useState } from 'react';
import './services.css'; // Assurez-vous que le chemin est correct
import SiteWebImage from './images/siteweb.png';
import LogoImage from './images/logo.png';
import VisuelImage from './images/visuel.png';
import SaasImage from './images/saas.png';
import ServiceItem from './ServiceItem/Items';
import MaskedImage from './images/SVGComponent';

const Services = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (itemName) => {
    setExpandedItem(expandedItem === itemName ? null : itemName);
  };

  const services = [
    { itemName: "SiteWeb", imageSrc: SiteWebImage, title: "Site web", number: "01", description: "Description du service de création de site Web." },
    { itemName: "Logo", imageSrc: LogoImage, title: "Logo", number: "02", description: "Description du service de conception de logo." },
    { itemName: "Visuel", imageSrc: VisuelImage, title: "Visuel", number: "03", description: "Description du service de design visuel." },
    // Assurez-vous d'inclure le service SAAS dans ce tableau si c'est nécessaire
  ];

  // Ajoutez des conditions pour appliquer la classe 'expanded' sur le conteneur 'SAAS' si celui-ci est l'élément étendu
  const saasContainerClass = expandedItem === "Saas" ? "saas-container expanded" : "saas-container";

  return (
    <>
      <div className="services-container">
        {services.map((service) => (
          <ServiceItem
            key={service.itemName}
            itemName={service.itemName}
            imageSrc={service.imageSrc}
            title={service.title}
            number={service.number}
            description={service.description}
            onClick={() => handleItemClick(service.itemName)}
            isExpanded={expandedItem === service.itemName}
            expandedItem={expandedItem !== null && expandedItem !== service.itemName}
          />
        ))}
      </div>
      <div className={`additional-services-container ${expandedItem && expandedItem !== "Saas" && expandedItem !== "3D" ? "hidden" : ""}`}>
        <div className={saasContainerClass}>
          <ServiceItem
            key="Saas"
            itemName="Saas"
            imageSrc={SaasImage}
            title="SAAS"
            number="04"
            description="Description du service SAAS."
            onClick={() => handleItemClick("Saas")}
            isExpanded={expandedItem === "Saas"}
            className="saas-item"
          />
        </div>
        <div className={`masked-image-container ${expandedItem && expandedItem !== "3D" ? "hidden" : ""}`}>
          <MaskedImage />
        </div>
      </div>
    </>
  );
};

export default Services;
