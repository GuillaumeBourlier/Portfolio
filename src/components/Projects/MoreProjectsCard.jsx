import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const MoreProjectsCard = ({ projects }) => {
  return (
    <div className="more-projects-card">
      <h3>Autres projets</h3>
      <div className="other-projects-list">
        {projects.map((project) => (
          <div key={project.id} className="other-project-item">
            <span className="other-project-title">{project.title}</span>
            <div className="other-project-links">
              <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" aria-label={`Code source de ${project.title}`}>
                <FontAwesomeIcon icon={faGithub} />
                <span>Code</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

MoreProjectsCard.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      sourceLink: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MoreProjectsCard;