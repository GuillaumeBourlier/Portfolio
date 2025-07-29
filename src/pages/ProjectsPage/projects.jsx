import ProjectCard from "../../components/Projects/ProjectCard";
import kasaImage from "../../assets/kasa.webp";
import ohmyfoodImage from "../../assets/ohmyfood.webp";
import ninaCarducciImage from "../../assets/nina.webp";
import argentbankImage from "../../assets/argentbank.webp";

const projects = [
  {
    id: 1,
    title: "Projet Kasa",
    description:
      "Initiation au framework React avec la création d'une application de location immobilière. Utilisation de composants, de props et de React Router.",
    link: "https://github.com/GuillaumeBourlier/kasa",
    image: kasaImage,
  },
  {
    id: 2,
    title: "Projet OhmyFood",
    description:
      "Intégration d'une maquette en mobile-first pour un site de commande de repas. Utilisation de Sass et d'animations CSS avancées.",
    link: "https://github.com/GuillaumeBourlier/Ohmyfood",
    image: ohmyfoodImage,
  },
  {
    id: 3,
    title: "Projet Nina Carducci",
    description:
      "Optimisation du SEO, des performances et de l'accessibilité du site d'une photographe. Débogage avec les Chrome DevTools.",
    link: "https://github.com/GuillaumeBourlier/Nina-Carducci",
    image: ninaCarducciImage,
  },
  {
    id: 4,
    title: "Projet ArgentBank",
    description:
      "Implémentation du front-end d'une application bancaire avec React et Redux pour la gestion de l'état global de l'application.",
    link: "https://github.com/GuillaumeBourlier/ArgentBank-Backend",
    image: argentbankImage,
  },
];

const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      <h2>Mes Projets</h2>
      <div className="projects-grid">
        {projects.map(({ id, ...rest }) => (
          <ProjectCard key={id} {...rest} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
