// BoxParent.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Entree from '../Entree/entree';
import Agence from '../Agence/agence';
import '../../animations/ScaleIn.css'; // Assure-toi que les chemins sont corrects
import '../../animations/ScaleOut.css';

const BoxParent = () => {
  return (
    <div className="box">
      {/* Utilise Routes et Route pour définir les chemins */}
      <Routes>
        <Route path="/" element={<div className="entrance-section"><Entree /></div>} />
        {/* Ajoute d'autres chemins si nécessaire */}
      </Routes>
      <div className="agence-section">
        <Agence />
      </div>
    </div>
  );
}

export default BoxParent;