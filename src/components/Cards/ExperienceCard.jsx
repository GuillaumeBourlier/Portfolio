import React from "react";

const ExperienceCard = ({ title, company, period, description, technologies }) => {
  return (
    <div className="experience-card">
      <div className="card-header">
        <h3>{title}</h3>
        <span className="company">{company}</span>
        <span className="period">{period}</span>
      </div>
      <div className="description">{description}</div>
      {technologies && (
        <div className="technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;