/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import 'animate.css';

export default function About() {

  const ME = require('../assets/img/me-about-kev.png')

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me animate__animated animate__backInLeft">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card animate__animated animate__fadeIn'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>8 months Working</small>
            </article>

            <article className='about_card animate__animated animate__fadeIn'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>2 Worldwide</small>
            </article>

            <article className='about_card animate__animated animate__fadeIn'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>4+ Completed</small>
            </article>
          </div>

          <p className='animate__animated animate__backInRight'>
            I am a junior web developer with a passion for creating beautiful, responsive websites. 
            I have passion for learning new technologies and practice doing projects.
            I am working hard to convert me as a full-stack web developer.
          </p>

          <a href="#contact" className='btn btn-primary animate__animated animate__fadeIn'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}