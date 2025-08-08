import ProjectCard from "../../components/Projects/ProjectCard";
import MoreProjectsCard from "../../components/Projects/MoreProjectsCard";
import kasaImage from "@/assets/kasa.webp";
import ohmyfoodImage from "@/assets/ohmyfood.webp";
import ninaCarducciImage from "@/assets/nina.webp";
import argentbankImage from "@/assets/argentbank.webp";

const projects = [
  {
    id: 1,
    title: "Projet Kasa",
    description:
      "Initiation au framework React avec la création d'une application de location immobilière. Utilisation de composants, de props et de React Router.",
    link: "https://github.com/GuillaumeBourlier/kasa",
    liveUrl: "https://guillaumebourlier.github.io/kasa/",
    image: kasaImage,
  },
  {
    id: 2,
    title: "Projet OhmyFood",
    description:
      "Intégration d'une maquette en mobile-first pour un site de commande de repas. Utilisation de Sass et d'animations CSS avancées.",
    link: "https://github.com/GuillaumeBourlier/Ohmyfood",
    liveUrl: "https://guillaumebourlier.github.io/Ohmyfood/",
    image: ohmyfoodImage,
  },
  {
    id: 3,
    title: "Projet Nina Carducci",
    description:
      "Optimisation du SEO, des performances et de l'accessibilité du site d'une photographe. Débogage avec les Chrome DevTools.",
    link: "https://github.com/GuillaumeBourlier/Nina-Carducci",
    liveUrl: "https://guillaumebourlier.github.io/Nina-Carducci/",
    image: ninaCarducciImage,
  },
  {
    id: 4,
    title: "Projet ArgentBank",
    description:
      "Implémentation du front-end d'une application bancaire avec React et Redux pour la gestion de l'état global de l'application.",
    link: "https://github.com/GuillaumeBourlier/ArgentBank-Frontend",
    liveUrl: "https://guillaumebourlier.github.io/ArgentBank-Frontend/",
    image: argentbankImage,
  },
];

const otherProjects = [
  {
    id: 5,
    title: "Print-it - Premier pas en Javascript",
    sourceLink: "https://github.com/GuillaumeBourlier/Print-It",
  },
  {
    id: 6,
    title: "Sophie Bluel - Créer une page web dynamique avec Javacript",
    sourceLink: "https://github.com/GuillaumeBourlier/Sophie-Bluel",
  },

  {
    id: 7,
    title: "724 Events - Débuggez le site d'une agence d'évenementiel",
    sourceLink: "https://github.com/GuillaumeBourlier/724Events",
  },
  {
    id: 8,
    title: "Mon Portfolio - Utilisation de React avec Vite, React Router,Scss",
    sourceLink: "https://github.com/GuillaumeBourlier/Portfolio",
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
      <MoreProjectsCard projects={otherProjects} />
    </section>
  );
};

export default Projects;
