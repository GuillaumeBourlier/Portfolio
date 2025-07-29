import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({ title, description, link, image }) => {
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
        <a href={link} target="_blank" rel="noopener noreferrer">
          Voir le projet
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProjectCard;
