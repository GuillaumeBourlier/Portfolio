import {
  FaHtml5,
  FaCss3Alt,
  FaSquareJs,
  FaReact,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";
import { SiRedux } from "react-icons/si";

import profile from "@/assets/photo.webp";
import cv from "@/assets/CV-Guillaume-Bourlier.pdf";

const Home = () => {
  const softSkills = [
    "Communication & esprit d'équipe",
    "Rigueur & souci du détail",
    "Orientation client & UX",
  ];

  const techs = [
    {
      label: "HTML",
      Icon: FaHtml5,
      color: "#E34F26",
      link: "https://developer.mozilla.org/fr/docs/Web/HTML",
    },
    {
      label: "CSS",
      Icon: FaCss3Alt,
      color: "#1572B6",
      link: "https://developer.mozilla.org/fr/docs/Web/CSS",
    },
    {
      label: "JavaScript",
      Icon: FaSquareJs,
      color: "#F7DF1E",
      link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
    },
    {
      label: "React",
      Icon: FaReact,
      color: "#61DAFB",
      link: "https://fr.react.dev/",
    },
    {
      label: "Redux",
      Icon: SiRedux,
      color: "#764ABC",
      link: "https://redux.js.org/",
    },
  ];

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
                  <FaLinkedin size="2em" className="social-icon" />
                </a>
                <a
                  href="https://github.com/GuillaumeBourlier"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil GitHub de Guillaume Bourlier"
                >
                  <FaGithub size="2em" className="social-icon" />
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
              technologie et de créativité. Pendant, 15 ans dans la
              restauration, j’ai développé un véritable sens de l’expérience
              utilisateur, en apprenant à anticiper les besoins des clients et à
              créer des moments marquants grâce à des services personnalisés et
              attentifs. Puis, en tant qu’auditeur qualité hygiène et
              environnementale pendant 5 ans, j’ai affiné mon œil pour le détail
              et ma capacité à analyser et optimiser des processus, toujours
              dans une logique d’amélioration continue centrée sur l’utilisateur
              final. Aujourd’hui, ces compétences se prolongent naturellement
              dans le développement web : je conçois des interfaces fluides,
              esthétiques et performantes, en alliant rigueur, créativité et
              sens pratique. Mon objectif ? Transformer les idées en
              applications claires, efficaces et engageantes, toujours pensées
              pour offrir la meilleure expérience utilisateur possible.
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
          </div>
        </div>

        <div className="bottom-section" style={{ maxWidth: "900px" }}>
          <section id="competencies" className="competencies-section">
            <h2>Stack Technique</h2>
            <p className="competencies-intro">
              Voici un aperçu des technologies que j’utilise dans mes projets :
            </p>

            <ul className="tech-list">
              {techs.map((tech) => (
                <li key={tech.label} className="tech-item">
                  <a
                    href={tech.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`En savoir plus sur ${tech.label}`}
                  >
                    <tech.Icon
                      size="2em"
                      style={{ color: tech.color }}
                      aria-hidden="true"
                      className="tech-icon"
                    />
                    <span>{tech.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Home;
