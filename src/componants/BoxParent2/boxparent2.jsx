import React from 'react';
import './boxparent2.css';
import Accueil from '../Accueil/accueil';
import Box3 from '../box3/boxparent3'; // Importez Box3

const BoxParent2 = ({ currentComponent, setCurrentComponent }) => {
  return (
    <div className="box-2">
      {currentComponent === 'Accueil' && <Accueil />}
      {currentComponent === 'Box3' && <Box3 />}
    </div>
  );
}

export default BoxParent2;
