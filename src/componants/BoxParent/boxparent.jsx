// BoxParent.jsx
import React, { useState } from 'react';
import NavBar from '../NavBar/navbar';
import Entree from '../Entree/entree';
import Agence from '../Agence/agence';
import BoxParent2 from '../BoxParent2/boxparent2';

const BoxParent = ({ currentComponent, setCurrentComponent }) => {
  const [isBoxParent2Visible, setIsBoxParent2Visible] = useState(false);

  const toggleVisible = () => {
    setIsBoxParent2Visible(!isBoxParent2Visible);
  };

  const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
  };

  return (
    <div className="box" style={boxStyle}>
      <NavBar />
      {isBoxParent2Visible ? <BoxParent2 currentComponent={currentComponent} setCurrentComponent={setCurrentComponent} /> : <Entree toggle={toggleVisible} />}
      <div className="content">
        {isBoxParent2Visible ? null : <Agence />}
      </div>
    </div>
  );
}

export default BoxParent;
