import React from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faFolderOpen } from "@fortawesome/free-solid-svg-icons";

export const experiences = [
  {
    id: 1,
    title: "Intégrateur Web Junior",
    company: "Openclassrooms",
    period: "2025",
    description: (
      <>
        <p>
          Dans le cadre de ma formation Intégrateur Web chez OpenClassrooms,
          j'ai réalisé des projets professionnalisants pour maîtriser le
          développement front-end :
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
            <strong>Intégration front-end d’une application bancaire :</strong>{" "}
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
          <HashLink to="/projects" className="button-link">
            <FontAwesomeIcon icon={faFolderOpen} /> Voir les projets associés
          </HashLink>
          <HashLink to="/#competencies" className="button-link tech-button">
            <FontAwesomeIcon icon={faLaptopCode} /> Mes technologies utilisées
          </HashLink>
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
    technologies: ["Qualité", "Process", "Sécurité", "Rédaction", "Reporting"],
  },
  {
    id: 3,
    title: "Chef de cuisine & Management en restauration",
    company: "Elior / Sodexo / Accor / Les Galopins",
    period: "2004 - 2019",
    description:
      "Durant 15 ans, j'ai évolué de Cuisinier à Chef, gérant des productions pour des sites allant jusqu'à 4000 couverts. J'ai piloté l'élaboration des menus, la gestion des stocks, l'encadrement d'équipes et le respect des normes qualité (HACCP, INCO), développant ainsi mon leadership, ma rigueur organisationnelle et ma capacité à résoudre des problèmes complexes sous pression.",
    technologies: [
      "Gestion de production",
      "Organisation",
      "Normes qualité",
      "Planification",
      "Management",
    ],
  },
];

export const diplomes = [
  {
    id: 1,
    title: "Intégrateur Web (Titre RNCP Niveau 5 – Bac +2)",
    institution: "OpenClassrooms",
    year: "2025",
    description:
      "Parcours diplômant axé sur la maîtrise de l'écosystème React pour la construction d'applications web modernes. Le programme couvre la création de composants réutilisables, la gestion d'état avec Redux, l'interaction avec des API, ainsi que l'optimisation des performances (SEO, accessibilité) et le débogage d'applications complexes.",
  },
  {
    id: 2,
    title: "Brevet d'étude professionnel - Hôtellerie Restauration",
    institution: "Santos Dumont",
    year: "2004",
    description:
      "Initiation aux techniques culinaires de base, aux procédures d'hygiène et à l'organisation du travail en cuisine. Première approche de la gestion des matières premières et du service en restauration.",
  },
];
