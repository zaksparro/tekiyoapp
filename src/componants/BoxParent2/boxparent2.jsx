import React from 'react';
import './boxparent2.css';
import Accueil from '../Accueil/accueil';

const BoxParent2 = () => {
  return (
    <div className="box-2">
      {/* Affiche simplement les composants Accueil et Box3 */}
      <Accueil />
    </div>
  );
}

export default BoxParent2;
