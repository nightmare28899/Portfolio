import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

export default function Services() {
  return (
    <section id='services' className='animate__animated animate__fadeInUp'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article>
        </article>
        {/* END OF UI/UX */}
        <article className='service'>
          <div className='service_head'>
            <h3>Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Software Development.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Applications Development.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Website Development.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Database Managment.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Improvements to Existing Sites or Bug Fixes.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}