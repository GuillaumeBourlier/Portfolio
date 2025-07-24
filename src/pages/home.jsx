import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import profile from '../assets/photo.webp'; 
import cv from '../assets/CV-Guillaume-Bourlier.pdf'; 

const Home = () => {
  return (
    <main>
      <section className="home-section">
        <div className="home-column">
          <div className="image-wrapper">
            <img src={profile} alt="Photo de profil de Guillaume Bourlier" />
          </div>
          <div className="content">
            <h1>Guillaume Bourlier</h1>
            <h2 className="subtitle">Développeur Front-End</h2>
            <div className="icons">
              <a href="https://www.linkedin.com/in/guillaume-bourlier-683ab22b0" target="_blank" rel="noopener noreferrer" aria-label="Profil LinkedIn de Guillaume Bourlier">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://github.com/GuillaumeBourlier" target="_blank" rel="noopener noreferrer" aria-label="Profil GitHub de Guillaume Bourlier">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
            <a href={cv} download="CV_Guillaume_Bourlier.pdf" className="cv-button">
              Télécharger mon CV (PDF)
            </a>
          </div>
        </div>

        <div className="about">
          <h2>À propos de moi</h2>
          <p>
          Fort d'une expérience dans la restauration et dans le contrôle qualité où
          l'excellence de l'expérience utilisateur était ma priorité, j'ai transposé
          cette passion dans le monde du développement web. Aujourd'hui, je conçois
          des interfaces intuitives et performantes avec React.js. Ma rigueur, ma
          créativité et mon approche orientée solution me permettent de transformer
          des idées complexes en applications fluides et engageantes.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;