
import React from "react";

const EducationCard = ({ title, institution, year, description }) => {
  return (
    <div className="education-card">
      <div className="card-header">
        <h3>{title}</h3>
        <span className="institution">{institution}</span>
        <span className="year">{year}</span>
      </div>
      <p className="description">{description}</p>
    </div>
  );
};

export default EducationCard;