/* eslint-disable jsx-a11y/anchor-is-valid */
import './portfolio.css'

export default function Portfolio() {

  const IMG1 = require('../../assets/game-paper.jpg')
  const IMG2 = require('../../assets/veterinary-v1.jpg')
  const IMG3 = require('../../assets/veterinary-v2.jpg')
  const IMG4 = require('../../assets/portfolio4.jpg')
  const IMG5 = require('../../assets/portfolio5.png')
  const IMG6 = require('../../assets/portfolio6.jpg')

  const portfolio = [
    {
      id: 1,
      img: IMG1,
      title: 'Paper, Rock, Scissors, Spock and Lizard',
      page: 'https://github.com/nightmare28899/paper-game',
      description: 'A simple game of paper, rock, scissors, spock and lizard, is made it with angular 14.',
      demo: 'https://voluble-puppy-a4b8ff.netlify.app/',
    },
    {
      id: 2,
      img: IMG2,
      title: 'It is a simple webSite to create, notes for clients and his pets like veterinary.',
      page: 'https://github.com/nightmare28899/citas-react-v1',
      description: 'It is a simple website using react to create dates like veterinary clinic, v1 .',
      demo: 'https://confident-shockley-89972e.netlify.app/',
    },
    { 
      id: 3,
      img: IMG3,
      title: 'Interactive webSite to create, notes for clients and his pets.',
      page: 'https://github.com/nightmare28899/React-date',
      description: 'This is a remake from the v1 with a better design, using vite and you can edit the note v2 .',
      demo: 'https://beautiful-kleicha-3bcc2a.netlify.app/',
    },
    {
      id: 4,
      img: IMG4,
      title: 'This is a portfolio item title',
      page: 'https://github.com',
      demo: 'https://dribbble.com/Alien_pixels',
    },
    {
      id: 5,
      img: IMG5,
      title: 'This is a portfolio item title',
      page: 'https://github.com',
      demo: 'https://dribbble.com/Alien_pixels',
    },
    {
      id: 6,
      img: IMG6,
      title: 'This is a portfolio item title',
      page: 'https://github.com',
      demo: 'https://dribbble.com/Alien_pixels',
    }
  ];

  const portfolioList = portfolio.map((item, index) => (
    <article key={index} className='portfolio_item'>
      <div className='portfolio_item-image'>
        <img src={item.img} alt="" />
      </div>
      <h3>{item.title}</h3>
      <p><b>Description:</b> {item.description} </p>
      <div className='portfolio_item-cta'>
        <a href={item.page} className='btn'>Github</a>
        <a href={item.demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
      </div>
    </article>
  ));

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {portfolioList}

      </div>
    </section>
  )
}
