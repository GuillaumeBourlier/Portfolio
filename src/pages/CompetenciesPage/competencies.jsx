import React from "react";
import reduxLogo from "@/assets/redux.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const techs = [
  { label: "HTML", icon: faHtml5, type: "fontawesome", color: "#E34F26" },
  { label: "CSS", icon: faCss3Alt, type: "fontawesome", color: "#1572B6" },
  { label: "JavaScript", icon: faJsSquare, type: "fontawesome", color: "#F7DF1E" },
  { label: "React", icon: faReact, type: "fontawesome", color: "#61DAFB" },
  { label: "Redux", icon: reduxLogo, type: "webp" },
];

const upcomingSkills = ["Next.js"];

const Competencies = () => {
  return (
    <section id="competencies" className="competencies">
      <h2>Mes Compétences</h2>
      <p className="competencies-intro">
        Voici un aperçu des technologies que j’utilise dans mes projets :
      </p>

      {/* Liste des technologies */}
      <ul className="tech-list">
        {techs.map((tech) => (
          <li key={tech.label} className="tech-item" aria-label={tech.label}>
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
          </li>
        ))}
      </ul>

      {/* Technologies à venir */}
      <div className="coming-soon">
        <h3>À venir</h3>
        <p>Je vais prochainement apprendre ces nouvelles technologies :</p>
        <ul>
          {upcomingSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Competencies;
