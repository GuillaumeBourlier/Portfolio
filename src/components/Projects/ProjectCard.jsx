import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ title, description, link, liveUrl, image }) => {
  return (
    <div className="project-card" role="article">
      <img
        className="project-image"
        src={image}
        alt={`Aperçu du projet ${title}`}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Voir le code source de ${title} sur GitHub`}>
          <FontAwesomeIcon icon={faGithub} />
          <span>Code Source</span>
        </a>
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Voir la démo live de ${title}`}>
            <FontAwesomeIcon icon={faEye} />
            <span>Voir le site</span>
          </a>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  liveUrl: PropTypes.string,
  image: PropTypes.string.isRequired,
};

export default ProjectCard;
