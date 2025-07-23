import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import photo from "../assets/photo.webp";
import myCV from "../assets/CV-Guillaume-Bourlier.pdf";

function Home() {
  return (
    <section className="about-section" id="home">
      <div className="profile-column">
        <div className="image-wrapper">
          <img src={photo} alt="Portrait de Guillaume Bourlier" />
        </div>
        <div className="content">
          <h1>Guillaume Bourlier</h1>
          <p>Développeur Front-End</p>

          <div className="social-icons">
            <a
              href="https://github.com/ton-profil" 
              target="_blank"
              rel="noreferrer"
              aria-label="Profil GitHub"
            >
              <GitHubIcon fontSize="large" />
            </a>
            <a
              href="https://linkedin.com/in/ton-profil" 
              target="_blank"
              rel="noreferrer"
              aria-label="Profil LinkedIn"
            >
              <LinkedInIcon fontSize="large" />
            </a>
          </div>

          <a
            href={myCV}
            download="CV-Guillaume-Bourlier.pdf"
            className="cv-button"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>

      <div className="about-text">
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
  );
}

export default Home;
