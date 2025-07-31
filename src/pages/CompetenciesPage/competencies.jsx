import React from "react";
import reduxLogo from "@/assets/redux.webp";
import nextjsLogo from "@/assets/nextjs-logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const techs = [
  {
    label: "HTML",
    icon: faHtml5,
    type: "fontawesome",
    color: "#E34F26",
    link: "https://developer.mozilla.org/fr/docs/Web/HTML",
  },
  {
    label: "CSS",
    icon: faCss3Alt,
    type: "fontawesome",
    color: "#1572B6",
    link: "https://developer.mozilla.org/fr/docs/Web/CSS",
  },
  {
    label: "JavaScript",
    icon: faJsSquare,
    type: "fontawesome",
    color: "#F7DF1E",
    link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
  },
  {
    label: "React",
    icon: faReact,
    type: "fontawesome",
    color: "#61DAFB",
    link: "https://fr.react.dev/",
  },
  { label: "Redux", icon: reduxLogo, type: "webp", link: "https://redux.js.org/" },
];

const Competencies = () => {
  return (
    <section id="competencies" className="competencies">
      <h2>Mes Compétences</h2>
      <p className="competencies-intro">
        Voici un aperçu des technologies que j’utilise dans mes projets :
      </p>

      <ul className="tech-list">
        {techs.map((tech) => (
          <li key={tech.label} className="tech-item">
            <a href={tech.link} target="_blank" rel="noopener noreferrer" aria-label={`En savoir plus sur ${tech.label}`}>
              {tech.type === "fontawesome" ? (
                <FontAwesomeIcon
                  icon={tech.icon}
                  size="2x"
                  style={{ color: tech.color }}
                  aria-hidden="true"
                />
              ) : (
                <img
                  src={tech.icon}
                  alt={tech.label}
                  className="svg-icon"
                  loading="lazy"
                />
              )}
              <span>{tech.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="coming-soon">
        <h3>In progress</h3>
        <div className="upcoming-skill-item">
          <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" aria-label="En savoir plus sur Next.js">
            <img src={nextjsLogo} alt="Logo Next.js" className="webp-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Competencies;
