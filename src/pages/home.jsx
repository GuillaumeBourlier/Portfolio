import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import photo from "../assets/photo.webp";

function Home() {
  return (
    <section className="about-section" id="about">
      <div className="profile-column">
        <div className="image-wrapper">
          <img src={photo} alt="Portrait de Guillaume Bourlier" />
        </div>
        <div className="content">
          <div className="social-icons">
            <a
              href="*" // ajouter mon lien GitHub
              target="_blank"
              rel="noreferrer"
              aria-label="Profil GitHub"
            >
              <GitHubIcon fontSize="large" />
            </a>
            <a
              href="*" // ajouter mon lien LinkedIn
              target="_blank"
              rel="noreferrer"
              aria-label="Profil LinkedIn"
            >
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
          <h1>Guillaume Bourlier</h1>
          <p>Développeur Front-End</p>
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
