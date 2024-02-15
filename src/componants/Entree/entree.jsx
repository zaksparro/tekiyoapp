// Entree.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './entree.css';

const Entree = () => {
  let navigate = useNavigate();

  const handleEnterClick = () => {
    navigate('/boxparent2'); // Ceci redirigera l'utilisateur vers BoxParent2
  };

  return (
    <div className="entree-container">
      <button className="button-entree" onClick={handleEnterClick}>
        ENTRER
      </button>
    </div>
  );
};

export default Entree;
