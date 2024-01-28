import React from "react";
import './entree.css';  // Ajuste le chemin


const Entree = ({toggle}) => {
    return (
        <div className="entree" onClick={toggle}>
            <div className="div-wrapper">
                <div className="text-wrapper">ENTRER</div>
            </div>
        </div>
    );
};

export default Entree;