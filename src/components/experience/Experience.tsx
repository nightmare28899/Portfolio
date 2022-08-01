import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

export default function experience() {
  const experiencesFronted = [
    {
      title: "HTML",
      level: "Experienced",
    },
    {
      title: "CSS",
      level: "Intermediate",
    },
    {
      title: "JavaScript",
      level: "Intermediate",
    },
    {
      title: "React",
      level: "Basic",
    },
    {
      title: "Angular",
      level: "Intermediate",
    },
    {
      title: "TailwindCSS",
      level: "Intermediate",
    },
  ];

  const listItemsFronted = experiencesFronted.map((experience, index) => (
    <article key={index} className="experience_details">
      <BsPatchCheckFill className="experience_details" />
      <div>
        <h4>{experience.title}</h4>
        <small className="text-light">{experience.level}</small>
      </div>
    </article>
  ));

  const experiencesBackend = [
    {
      title: "NodeJS",
      level: "Basic",
    },
    {
      title: "ExpressJS",
      level: "Basic",
    },
    {
      title: "MySQL",
      level: "Basic",
    },
    {
      title: "PostgreSQL",
      level: "Basic",
    },
    {
      title: "Laravel",
      level: "Intermediate",
    },
    {
      title: "PHP",
      level: "Intermediate",
    },
  ];

  const listItemsBackend = experiencesBackend.map((experience, index) => (
    <article key={index} className="experience_details">
      <BsPatchCheckFill className="experience_details" />
      <div>
        <h4>{experience.title}</h4>
        <small className="text-light">{experience.level}</small>
      </div>
    </article>
  ));

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">{listItemsFronted}</div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">{listItemsBackend}</div>
        </div>
      </div>
    </section>
  );
}
