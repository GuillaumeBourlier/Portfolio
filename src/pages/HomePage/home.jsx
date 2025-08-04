import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronDown,
  faChevronUp,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import profile from "@/assets/photo.webp";
import cv from "@/assets/CV-Guillaume-Bourlier.pdf";
import ExperienceCard from "../../components/cards/ExperienceCard";
import EducationCard from "../../components/cards/EducationCard";

const Home = () => {
  const bottomSectionRef = useRef(null);
  const experiences = [
    {
      id: 1,
      title: "Intégrateur Web Junior",
      company: "Openclassrooms",
      period: "2025",
      description: (
        <>
          <p>
            Dans le cadre de ma formation Intégrateur Web chez OpenClassrooms,
            j'ai réalisé un parcours complet de projets professionnalisants pour
            maîtriser les compétences du développement front-end :
          </p>
          <ul className="experience-details-list">
            <li>
              <strong>
                Création d’une application de location immobilière avec React :
              </strong>{" "}
              Développement de composants, gestion des états (useState,
              useEffect), et mise en place de la navigation avec React Router.
            </li>
            <li>
              <strong>
                Intégration front-end d’une application bancaire :
              </strong>{" "}
              Utilisation de Redux pour la gestion d'état globale, interaction
              avec une API pour les transactions, et création d'une interface
              sécurisée.
            </li>
            <li>
              <strong>Optimisation SEO et accessibilité :</strong> Audit et
              amélioration d'un site de photographe existant, en optimisant les
              performances (Lighthouse), le référencement naturel (SEO) et en
              assurant la conformité aux normes d'accessibilité (WCAG).
            </li>
            <li>
              <strong>Débogage et amélioration d'un site événementiel :</strong>{" "}
              Analyse d'une base de code existante, identification et résolution
              de bugs à l'aide des React Dev Tools, et refonte de l'expérience
              utilisateur.
            </li>
          </ul>
          <div className="experience-cta">
            <Link to="/projects" className="button-link">
              <FontAwesomeIcon icon={faFolderOpen} /> Voir les projets associés
            </Link>
          </div>
        </>
      ),
      technologies: ["HTML", "CSS", "React", "JavaScript", "API", "Github"],
    },
    {
      id: 2,
      title: "Auditeur qualité hygiène et environnemental",
      company: "Convergence",
      period: "2019 - 2024",
      description:
        "Réalisation d’audits hygiène, sécurité et conformité réglementaire pour des établissements de restauration. Rédaction de rapports détaillés et présentation des résultats en commissions clients. Mise en place et suivi des actions correctives (planification, reporting). Développement de compétences transposables en gestion de projet, rigueur et communication professionnelle.",
      technologies: [
        "Qualité",
        "Process",
        "Sécurité",
        "Rédaction",
        "Reporting",
      ],
    },
    {
      id: 3,
      title: "Chef de cuisine & Management en restauration",
      company: "Elior / Sodexo / Accord / Les Galopins",
      period: "2004 - 2019",
      description:
        "Durant plus de 10 ans, j'ai évolué de Cuisinier à Chef Gérant, gérant des productions pour des sites allant jusqu'à 4000 couverts. J'ai piloté l'élaboration des menus, la gestion des stocks, l'encadrement d'équipes et le respect des normes qualité (HACCP, INCO), développant ainsi mon leadership, ma rigueur organisationnelle et ma capacité à résoudre des problèmes complexes sous pression.",
      technologies: [
        "Gestion de production",
        "Organisation",
        "Normes qualité",
        "Planification",
        "Management",
      ],
    },
  ];

  const diplomes = [
    {
      id: 1,
      title: "Développeur d'application - React.JS (Formation en cours)",
      institution: "OpenClassrooms",
      year: "2025",
      description:
        "Parcours diplômant axé sur la maîtrise de l'écosystème React pour la construction d'applications web modernes. Le programme couvre la création de composants réutilisables, la gestion d'état avec Redux, l'interaction avec des API, ainsi que l'optimisation des performances (SEO, accessibilité) et le débogage d'applications complexes.",
    },
    {
      id: 2,
      title: "Brevet d'étude profesionnel - Hôtellerie Restauration",
      institution: "Santos Dumont",
      year: "2004",
      description:
        "Initiation aux techniques culinaires de base, aux procédures d'hygiène et à l'organisation du travail en cuisine. Première approche de la gestion des matières premières et du service en restauration.",
    },
  ];

  const softSkills = [
    "Communication & esprit d'équipe",
    "Rigueur & souci du détail",
    "Orientation client & UX",
  ];

  const scrollToExperience = () => {
    bottomSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <section className="home-section">
        <div className="top-section">
          <div className="home-column">
            <div className="image-wrapper">
              <img src={profile} alt="Photo de profil de Guillaume Bourlier" />
            </div>
            <h1>Guillaume Bourlier</h1>
            <h2 className="subtitle">Développeur Front-End</h2>
            <div className="content">
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
                Télécharger mon CV
              </a>
            </div>
          </div>

          <div className="about">
            <h2>À propos de moi</h2>
            <p>
              De l’art culinaire à l’art du pixel-perfect ! Depuis mon enfance,
              deux passions m’animent : la cuisine, pour le plaisir de créer et
              de partager, et l’informatique, pour son univers fascinant de
              technologie et de créativité. Après plus de 15 ans à créer des
              expériences marquantes dans la restauration, puis 5 ans en tant
              qu’auditeur qualité hygiène et environnementale à affiner mon sens
              du détail, j’ai trouvé ma voie dans le développement web, où
              l’expérience utilisateur est au centre de tout. Aujourd’hui, je
              conçois des interfaces fluides, esthétiques et performantes, en
              alliant rigueur, créativité et sens pratique. Mon objectif ?
              Transformer les idées en applications claires, efficaces et
              engageantes, toujours pensées pour l’utilisateur.
            </p>

            <div className="soft-skills">
              <h3>Soft Skills</h3>
              <div className="skills-list">
                {softSkills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="action-buttons-container">
              <button
                className="scroll-button"
                onClick={scrollToExperience}
                aria-label="Découvrir mon parcours"
              >
                Découvrir mon parcours
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
              <Link
                to="/projects"
                className="scroll-button"
                aria-label="Découvrir mes projets"
              >
                Découvrir mes projets
                <FontAwesomeIcon icon={faChevronUp} />
              </Link>
            </div>
          </div>
        </div>

        <div className="bottom-section" ref={bottomSectionRef}>
          <div className="experience-section">
            <h2>Expériences professionnelles</h2>
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
            <h2>Formations & diplômes</h2>
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
