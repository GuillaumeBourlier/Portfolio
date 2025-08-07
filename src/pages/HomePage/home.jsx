import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import profile from "@/assets/photo.webp";
import cv from "@/assets/CV-Guillaume-Bourlier.pdf";
import reduxLogo from "@/assets/redux.webp";
import nextjsLogo from "@/assets/nextjs-logo.webp";

const Home = () => {
  const softSkills = [
    "Communication & esprit d'équipe",
    "Rigueur & souci du détail",
    "Orientation client & UX",
  ];

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
    {
      label: "Redux",
      icon: reduxLogo,
      type: "webp",
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
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="En savoir plus sur Next.js"
                >
                  <img
                    src={nextjsLogo}
                    alt="Logo Next.js"
                    className="webp-icon"
                  />
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Home;
