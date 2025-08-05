import React from "react";
import EducationCard from "../../components/cards/EducationCard";

const EducationSection = ({ diplomes }) => {
  return (
    <section className="education-section">
      <h2>Formations & diplômes</h2>
      <div className="education-list">
        {diplomes.map((diplome) => (
          <EducationCard key={diplome.id} {...diplome} />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
