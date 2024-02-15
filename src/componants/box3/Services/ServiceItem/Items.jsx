import React from "react";
import "./Items.css";

const ServiceItem = ({  
  itemName,
  imageSrc,
  title,
  number,
  description,  
  onClick,
  isExpanded,
  expandedItem
}) => {

  const handleClick = () => {
    onClick(itemName);
  };

  const containerClass = `service-item__container ${
    isExpanded ? 'selected' : expandedItem ? 'hidden' : ''
  }`;

  return (
    <div
      className={containerClass}
      onClick={handleClick}
    >
      <img src={imageSrc} alt={title} className="service-item__image" />

      <div className="service-item__info">
        <h2 className="service-item__title">{title}</h2>
        <p className="service-item__number">{number}</p>
        {isExpanded && <p className="service-item__description">{description}</p>}
      </div>
    </div>
  );
}

export default ServiceItem;
