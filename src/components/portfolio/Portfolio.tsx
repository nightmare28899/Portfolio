/* eslint-disable jsx-a11y/anchor-is-valid */
import "./portfolio.css";
import { SiJavascript } from "react-icons/si";
import { SiAngular, SiBootstrap, SiHtml5, SiTypescript, SiReact, SiVite, SiTailwindcss } from "react-icons/si";
import { GiSkeleton } from "react-icons/gi";
import { FaCss3Alt } from "react-icons/fa";
import 'animate.css';

export default function Portfolio() {
  const IMG1 = 'https://firebasestorage.googleapis.com/v0/b/portfolio-15cc6.appspot.com/o/img%2Fgame-paper.jpg?alt=media&token=84bf3307-487d-49ab-9684-29a6f6b74748';
  const IMG2 = 'https://firebasestorage.googleapis.com/v0/b/portfolio-15cc6.appspot.com/o/img%2Fveterinary-v1.jpg?alt=media&token=cdd680c8-fcba-4a55-90ae-7f67930a725d';
  const IMG3 = 'https://firebasestorage.googleapis.com/v0/b/portfolio-15cc6.appspot.com/o/img%2Fveterinary-v2.jpg?alt=media&token=733b3f39-059e-4ffc-8e7b-a9d5cfabb9bf';
  const IMG4 = 'https://firebasestorage.googleapis.com/v0/b/portfolio-15cc6.appspot.com/o/img%2Fpresupuestos.jpg?alt=media&token=45f184ec-9718-477d-bf1e-02cdf501a057';

  const portfolio = [
    {
      id: 1,
      img: IMG1,
      title: "Paper, Rock, Scissors, Spock and Lizard",
      page: "https://github.com/nightmare28899/paper-game",
      description:
        "A simple game of paper, rock, scissors, spock and lizard, is made it with angular 14.",
      demo: "https://extraordinary-churros-8866f3.netlify.app/",
      icon: <SiTypescript fontSize="2.6em" />,
      icon2: <SiAngular fontSize="2.6em" />,
      icon3: <SiBootstrap fontSize="2.6em" />,
      icon4: <SiHtml5 fontSize="2.6em" />,
      icon5: <FaCss3Alt fontSize="2.6em" />,
    },
    {
      id: 2,
      img: IMG2,
      title:
        "It is a simple webSite to create, notes for clients and his pets like veterinary.",
      page: "https://github.com/nightmare28899/citas-react-v1",
      description:
        "It is a simple website using react to create dates like veterinary clinic, v1 .",
      demo: "https://confident-shockley-89972e.netlify.app/",
      icon: <SiJavascript fontSize="2.6em" />,
      icon2: <SiReact fontSize="2.6em" />,
      icon3: <GiSkeleton fontSize="2.6em" />,
      icon4: <FaCss3Alt fontSize="2.6em" />,
    },
    {
      id: 3,
      img: IMG3,
      title: "Interactive webSite to create, notes for clients and his pets.",
      page: "https://github.com/nightmare28899/React-date",
      description:
        "This is a remake from the v1 with a better design, using vite and you can edit the note v2 .",
      demo: "https://beautiful-kleicha-3bcc2a.netlify.app/",
      icon: <SiTypescript fontSize="2.6em" />,
      icon2: <SiReact fontSize="2.6em" />,
      icon3: <SiVite fontSize="2.6em" />,
      icon4: <SiTailwindcss fontSize="2.6em" />, 
      icon5: <FaCss3Alt fontSize="2.6em" />,
    },
    {
      id: 4,
      img: IMG4,
      title:
        "It is a simple webSite to create, a budget to have a better life.",
      page: "https://github.com",
      demo: "https://hopeful-archimedes-9328ea.netlify.app/",
      icon: <SiJavascript fontSize="2.6em" />,
      icon2: <SiReact fontSize="2.6em" />,
      icon3: <GiSkeleton fontSize="2.6em" />,
      icon4: <FaCss3Alt fontSize="2.6em" />,
    },
    /* {
      id: 5,
      img: IMG5,
      title: "This is a portfolio item title",
      page: "https://github.com",
      demo: "https://dribbble.com/Alien_pixels",
    },
    {
      id: 6,
      img: IMG6,
      title: "This is a portfolio item title",
      page: "https://github.com",
      demo: "https://dribbble.com/Alien_pixels",
    }, */
  ];

  const portfolioList = portfolio.map((item, index) => (
    <article key={index} className="portfolio_item animate__animated animate__backInLeft">
      <div className="portfolio_item-image">
        <img src={item.img} alt="" />
      </div>
      <h3>{item.title}</h3>
      <p>
        <b>Description:</b> {item.description}{" "}
      </p>{" "}
      <br />

      <div className="flex space-x-4 text-center">
        <p>
          <b>Technologies:</b> <br /> 
          {item.icon} {item.icon2} {item.icon3} {item.icon4} {item.icon5}
        </p>
      </div>

      <div className="portfolio_item-cta">
        <a href={item.page} className="btn">
          Github
        </a>
        <a
          href={item.demo}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
    </article>
  ));

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">{portfolioList}</div>
    </section>
  );
}
