import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import profile from "@/assets/photo.webp";
import cv from "@/assets/CV-Guillaume-Bourlier.pdf";
import ExperienceCard from "../../components/cards/ExperienceCard";
import EducationCard from "../../components/cards/EducationCard";

const Home = () => {
  const experiences = [
    {
      id: 1,
      title: "Formation Développeur Front-End",
      company: "Openclassrooms",
      period: "2025",
      description:
        "Développement d'interfaces utilisateur réactives et accessibles avec React. Collaboration avec les équipes back-end pour l'intégration d'APIs.",
      technologies: ["HTML", "CSS", "React", "Javascripts", "API", "Github"],
    },
    {
      id: 2,
      title: "Auditeur Qualité Hygiène et Environnemental",
      company: "Convergence",
      period: "2019 - 2024",
      description:
        "Assurance qualité avec focus sur l'expérience utilisateur. Mise en place de procédures de contrôle et d'amélioration continue.",
      technologies: ["Qualité", "Process", "Optimisation"],
    },
    {
      id: 3,
      title: "Chef De Cuisine",
      company: "Elior",
      period: "2017 - 2019",
      description:
        "Responsable de la production culinaire et du bon fonctionnement de la cuisine pour un établissement de 1200 couverts.",
      technologies: ["Qualité Culinaire", "Process", "Management"],
    },
  ];

  const diplomes = [
    {
      id: 1,
      title: "Développeur d'application - React.JS (Formation en cours)",
      institution: "OpenClassrooms",
      year: "2025",
      description:
        "Formation intensive en développement front-end avec spécialisation React.",
    },
    {
      id: 2,
      title: "BAC Professionnel - Hôtellerie Restauration",
      institution: "Santos Dumont",
      year: "2006",
      description:
        "Formation pratique en cuisine, gestion des stocks, hygiène alimentaire, organisation de service en restauration collective et commerciale.",
    },
    {
      id: 3,
      title: "Brevet d'Étude Profesionnel - Hôtellerie Restauration",
      institution: "Santos Dumont",
      year: "2004",
      description:
        "Formation pratique en cuisine, gestion des stocks, hygiène alimentaire, organisation de service en restauration collective et commerciale.",
    },
  ];

  const scrollToExperience = () => {
    document.querySelector(".bottom-section").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <section className="home-section">
        <div className="top-section">
          <div className="home-column">
            <div className="image-wrapper">
              <img src={profile} alt="Photo de profil de Guillaume Bourlier" />
            </div>
            <div className="content">
              <h1>Guillaume Bourlier</h1>
              <h2 className="subtitle">Développeur Front-End</h2>
              <div className="icons">
                <a
                  href="https://www.linkedin.com/in/guillaume-bourlier-683ab22b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil LinkedIn de Guillaume Bourlier"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a
                  href="https://github.com/GuillaumeBourlier"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil GitHub de Guillaume Bourlier"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </div>
              <a
                href={cv}
                download="CV_Guillaume_Bourlier.pdf"
                className="cv-button"
                aria-label="Télécharger mon CV au format PDF"
              >
                Télécharger mon CV (PDF)
              </a>
            </div>
          </div>

          {/* À propos */}
          <div className="about">
            <h2>À propos de moi</h2>
            <p>
              Avec plus de 15 ans d'expérience dans le domaine de la restauration
              et dans le contrôle qualité où l'excellence de l'expérience
              utilisateur était ma priorité, j'ai transposé cette passion dans le
              monde du développement web. Aujourd'hui, je conçois des interfaces
              intuitives et performantes. Ma rigueur, ma créativité et mon
              approche orientée solution me permettent de transformer des idées
              complexes en applications fluides et engageantes.
            </p>

            {/* Flèche animée */}
            <div className="scroll-indicator" onClick={scrollToExperience}>
              ⬇ Scroll pour voir plus
            </div>
          </div>
        </div> {/* ✅ fermeture correcte de .top-section */}

        {/* Expériences et Diplômes */}
        <div className="bottom-section">
          <div className="experience-section">
            <h2>Expérience Professionnelle</h2>
            <div className="experience-list">
              {experiences.map((exp) => (
                <ExperienceCard
                  key={exp.id}
                  title={exp.title}
                  company={exp.company}
                  period={exp.period}
                  description={exp.description}
                  technologies={exp.technologies}
                />
              ))}
            </div>
          </div>

          <div className="education-section">
            <h2>Formation & Diplômes</h2>
            <div className="education-list">
              {diplomes.map((diplome) => (
                <EducationCard
                  key={diplome.id}
                  title={diplome.title}
                  institution={diplome.institution}
                  year={diplome.year}
                  description={diplome.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
