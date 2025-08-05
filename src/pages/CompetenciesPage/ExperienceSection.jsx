import React from "react";
import ExperienceCard from "../../components/cards/ExperienceCard";

const ExperienceSection = ({ experiences }) => {
  return (
    <section className="experience-section">
      <h2>Expériences professionnelles</h2>
      <div className="experience-list">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
