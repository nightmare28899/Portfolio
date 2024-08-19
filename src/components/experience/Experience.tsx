import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import useTranslation from "../../hooks/useTranslation";
import {useSelector} from "react-redux";
import {useEffect} from "react";

export default function Experience() {
  const { translate, setLanguage } = useTranslation();
  const translateState = useSelector((state: any) => state.changeLanguage);

    useEffect(() => {
        setLanguage(translateState ? 'es' : 'en');
    }, [setLanguage, translateState]);

  const experiencesFronted = [
    {
      title: "HTML",
      level: translate('experienced'),
    },
    {
      title: "CSS",
      level: translate('intermediate'),
    },
    {
      title: "JavaScript",
      level: translate('intermediate'),
    },
    {
      title: "React",
      level: translate('intermediate'),
    },
    {
      title: "Angular",
      level: translate('intermediate'),
    },
    {
      title: "TailwindCSS",
      level: translate('intermediate'),
    },
    {
      title: "Bootstrap",
      level: translate('experienced'),
    },
    {
      title: "SASS",
      level: translate('intermediate'),
    }
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
      level: translate('basic'),
    },
    {
      title: "ExpressJS",
      level: translate('basic'),
    },
    {
      title: "MySQL",
      level: translate('intermediate'),
    },
    {
      title: "PostgreSQL",
      level: translate('intermediate'),
    },
    {
      title: "Laravel",
      level: translate('intermediate'),
    },
    {
      title: "PHP",
      level: translate('intermediate'),
    },
    {
      title: "Spring Boot",
      level: translate('basic'),
    },
    {
      title: "Docker",
      level: translate('basic'),
    }
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
      <h5>{translate('whatSkills')}</h5>
      <h2>{translate('myExperience')}</h2>

      <div className="container experience_container">
        <div className="experience_frontend animate__animated animate__backInLeft">
          <h3>{translate('frontendDevelopment')}</h3>
          <div className="experience_content">{listItemsFronted}</div>
        </div>
        <div className="experience_backend animate__animated animate__backInRight">
          <h3>{translate('backendDevelopment')}</h3>
          <div className="experience_content">{listItemsBackend}</div>
        </div>
      </div>
    </section>
  );
}
