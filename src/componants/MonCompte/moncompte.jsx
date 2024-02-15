// moncompte.jsx
import React from "react";
import './moncompte.css';  // Ajuste le chemin


export const BoutonMonCompte = () => {
    return (
        <div className="bouton-mon-compte">
            <div className="frame">
                <div className="contact">
                    <div className="text-wrapper">MON COMPTE</div>
                </div>
            </div>
        </div>
    );
};

BoutonMonCompte.propTypes = {
    // property1: PropTypes.oneOf(["default"]), // Si non utilisée, vous pouvez la retirer
};
export default BoutonMonCompte; // Exportez le composant BoutonMonCompte