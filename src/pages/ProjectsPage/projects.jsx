import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

// Import des images de projets
import kasaImage from "../../assets/kasa.webp";
import ohmyfoodImage from "../../assets/ohmyfood.webp";
import ninaImage from "../../assets/nina.webp";
import argentbankImage from "../../assets/argentbank.webp";

// Composant pour une carte de projet
const ProjectCard = ({
  title,
  description,
  link,
  liveUrl,
  image,
  technologies,
}) => (
  <div className="project-card" role="article">
    <img
      className="project-image"
      src={image}
      alt={`Aperçu du projet ${title}`}
    />
    <h3>{title}</h3>
    <p>{description}</p>
    {technologies && technologies.length > 0 && (
      <div className="technologies">
        {technologies.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    )}
    <div className="project-links">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Voir le code source de ${title} sur GitHub`}
      >
        <FontAwesomeIcon icon={faGithub} />
        <span>Code Source</span>
      </a>
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Voir la démo live de ${title}`}
        >
          <FontAwesomeIcon icon={faExternalLinkAlt} />
          <span>Voir le site</span>
        </a>
      )}
    </div>
  </div>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  liveUrl: PropTypes.string,
  image: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string),
};

// Composant pour la carte "Autres projets"
const MoreProjectsCard = ({ projects }) => (
  <div className="more-projects-card">
    <h3>Autres projets</h3>
    <div className="other-projects-list">
      {projects.map((project) => (
        <div key={project.id} className="other-project-item">
          <div className="other-project-info">
            <span className="other-project-title">{project.title}</span>
            {project.technologies && project.technologies.length > 0 && (
              <div className="technologies">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="other-project-links">
            <a
              href={project.sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Code source de ${project.title}`}
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>Code</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

MoreProjectsCard.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      sourceLink: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

// Données des projets principaux
const mainProjects = [
  {
    id: 1,
    title: "Projet OhmyFood",
    description:
      "Intégration d'une maquette en mobile-first pour un site de commande de repas. Utilisation de Sass et d'animations CSS avancées.",
    link: "https://github.com/GuillaumeBourlier/Ohmyfood",
    liveUrl: "https://guillaumebourlier.github.io/Ohmyfood/",
    image: ohmyfoodImage,
    technologies: ["HTML", "Sass", "Animations"],
  },
  {
    id: 2,
    title: "Projet Kasa",
    description:
      "Initiation au framework React avec la création d'une application de location immobilière. Utilisation de composants, de props et de React Router.",
    link: "https://github.com/GuillaumeBourlier/kasa",
    liveUrl: "https://guillaumebourlier.github.io/kasa/",
    image: kasaImage,
    technologies: ["React", "React Router", "Sass"],
  },
  {
    id: 3,
    title: "Projet Nina Carducci",
    description:
      "Optimisation du SEO, des performances et de l'accessibilité du site d'une photographe. Débogage avec les Chrome DevTools.",
    link: "https://github.com/GuillaumeBourlier/Nina-Carducci",
    liveUrl: "https://guillaumebourlier.github.io/Nina-Carducci/",
    image: ninaImage,
    technologies: ["SEO", "Lighthouse", "Accessibilité"],
  },
  {
    id: 4,
    title: "Projet ArgentBank",
    description:
      "Implémentation du front-end d'une application bancaire avec React et Redux pour la gestion de l'état global de l'application.",
    link: "https://github.com/GuillaumeBourlier/ArgentBank-Frontend",
    liveUrl: "https://guillaumebourlier.github.io/ArgentBank-Frontend/",
    image: argentbankImage,
    technologies: ["React", "Redux", "API REST", "Swagger"],
  },
];

// Données des autres projets
const otherProjects = [
  {
    id: 5,
    title: "Print-it - Premier pas en Javascript",
    sourceLink: "https://github.com/GuillaumeBourlier/Print-It",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 6,
    title: "Sophie Bluel - Créer une page web dynamique avec Javacript",
    sourceLink: "https://github.com/GuillaumeBourlier/Sophie-Bluel",
    technologies: ["JavaScript", "API", "HTML"],
  },
  {
    id: 7,
    title: "724 Events - Débuggez le site d'une agence d'évenementiel",
    sourceLink: "https://github.com/GuillaumeBourlier/724Events",
    technologies: ["React", "Debug", "React DevTools"],
  },
  {
    id: 8,
    title: "Mon Portfolio - Utilisation de React avec Vite, React Router,Scss",
    sourceLink: "https://github.com/GuillaumeBourlier/Portfolio",
    technologies: ["React", "Vite", "Sass", "React Router"],
  },
];

// Page des projets
const ProjectsPage = () => {
  return (
    <section className="projects-container" id="projects">
      <h2>Mes Projets</h2>
      <div className="projects-grid">
        {mainProjects.map(({ id, ...project }) => (
          <ProjectCard key={id} {...project} />
        ))}
      </div>
      <MoreProjectsCard projects={otherProjects} />
    </section>
  );
};

export default ProjectsPage;
