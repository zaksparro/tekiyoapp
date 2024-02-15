import React from 'react';
import './svg.css'; // Assurez-vous que le chemin vers le fichier CSS est correct
import ImageToMask from './3d.png'; // L'image que vous souhaitez masquer

const MaskedImage = ({ onClick, isExpanded, isHidden }) => {
  const containerClasses = `image-container ${isExpanded ? 'selected' : ''} ${isHidden ? 'hidden' : ''}`;

  return (
    <div className={containerClasses} onClick={onClick}>
      <img src={ImageToMask} alt="3D" className="masked-image" />
      <div className="service-info">
        <p className="service-title">3D</p>
        <p className="service-number">05</p>
      </div>
    </div>
  );
};

export default MaskedImage;
