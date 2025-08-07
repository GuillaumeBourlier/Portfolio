import React from "react";
import {
  experiences,
  diplomes,
} from "../CompetenciesPage/data/competenciesData";
import ExperienceSection from "../CompetenciesPage/ExperienceSection";
import EducationSection from "../CompetenciesPage/EducationSection";

const Competencies = () => {
  return (
    <main className="competencies-page">
      <ExperienceSection experiences={experiences} />
      <EducationSection diplomes={diplomes} />
    </main>
  );
};

export default Competencies;
