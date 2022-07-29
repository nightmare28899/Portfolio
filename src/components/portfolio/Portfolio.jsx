/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/game-paper.jpg'
import IMG2 from '../../assets/date-react.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

export default function Portfolio() {

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
      title: 'This is a portfolio item title',
      page: 'https://github.com/nightmare28899/React-date',
      description: 'It is a simple website using react to create dates like veterinary clinic.',
      demo: 'https://dribbble.com/Alien_pixels',
    },
    {
      id: 3,
      img: IMG3,
      title: 'This is a portfolio item title',
      page: 'https://github.com',
      demo: 'https://dribbble.com/Alien_pixels',
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
