import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './Container';
import Accueil from './componants/Accueil/accueil'; 
import Box3 from './componants/box3/boxparent3';
import './App.css';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/box3" element={<Box3 />} /> {/* Mise à jour du chemin */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
