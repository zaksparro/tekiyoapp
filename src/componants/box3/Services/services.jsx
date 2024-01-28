import React from "react";

function Services(props) {
  console.log("Services component rendered");
  return (
    <>
      <div className="services">
        <div className="column">
          <div className="content">
            <div className="title">SITE WEB</div>
            <img src="chemin/vers/image1.jpg" alt="Site Web" className="section-image" />
          </div>
        </div>

        <div className="column">
          <div className="absolute">
            <div className="content">
              <div className="title">LOGO</div>
              <img src="chemin/vers/image2.jpg" alt="Logo" className="section-image" />
            </div>
          </div>
        </div>

        <div className="column">
          <div className="absolute">
            <div className="content">
              <div className="title">VISUEL</div>
              <img src="chemin/vers/image3.jpg" alt="Visuel" className="section-image" />
            </div>
          </div>
        </div>
      </div>

      {/* Section04 */}
      <div className="column absolute">
        <div className="content">
          {/* Votre contenu pour la Section04 */}
          <div className="title">SAAS</div>
          <img src="chemin/vers/image4.jpg" alt="SAAS" className="section-image" />
        </div>
      </div>

      {/* Section05 (SVG) */}
      <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        {/* Votre contenu SVG ici, par exemple, un cercle */}
        <circle cx="50" cy="50" r="50" fill="#4CAF50" />
        {/* Texte dans le SVG */}
        <text x="50%" y="50%" textAnchor="middle" alignmentBaseline="middle" fill="#FFFFFF">
          3D
        </text>
      </svg>
    </>
  );
}

export default Services;
