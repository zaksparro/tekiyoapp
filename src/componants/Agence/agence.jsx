import React from "react";
import "./agence.css";

export const Agence = () => {
    const agenceStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '45px',
        justifyContent: 'flex-end',
        textAlign: 'left',
        width: '100%',  // Force le parent à prendre toute la largeur
        // Ajoute d'autres styles si nécessaire
    };

    const AGENCE_DE_dStyle = {
        alignSelf: 'flex-start',
        color: '#090505',
        fontFamily: 'SF Pro Display-Thin',
        fontSize: '6vw',
        fontWeight: 100,
        letterSpacing: 0,
        lineHeight: 'normal',
        marginTop: '-1px',
        position: 'relative',
        textAlign: 'left',
        // Ajoute d'autres styles si nécessaire
    };

    return (
        <div className="agence" style={agenceStyle}>
            <div className="AGENCE-DE-d" style={AGENCE_DE_dStyle}>
                AGENCE DE
                <br />
                DÉVELOPPEMENT WEB
            </div>
        </div>
    );
};

export default Agence;
