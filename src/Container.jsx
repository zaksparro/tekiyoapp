// Container.jsx

import React from 'react';
import NavBar from './componants/NavBar/navbar'; // Assure-toi que le chemin est correct
import BoutonMonCompte from './componants/MonCompte/moncompte'; // Assure-toi que le chemin est correct
import './Container.css'; // Assure-toi que le chemin est correct

const Container = ({ children }) => {
  return (
    <div className="container">
      <NavBar />
      <BoutonMonCompte />
      {children} {/* Les composants enfants seront rendus ici */}
    </div>  
  );
};

export default Container;
