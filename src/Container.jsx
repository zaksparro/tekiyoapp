// Container.jsx

import React, { useState } from 'react';
import './Container.css';
import BoxParent from './componants/BoxParent/boxparent.jsx';
import BoutonMonCompte from './componants/MonCompte/moncompte';

const Container = () => {
  const [currentComponent, setCurrentComponent] = useState('Accueil');

  return (
    <div className="container">
      <BoxParent currentComponent={currentComponent} setCurrentComponent={setCurrentComponent} />
      <BoutonMonCompte />
    </div>  
  );
}

export default Container;
