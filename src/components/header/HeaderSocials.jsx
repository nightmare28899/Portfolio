/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

export default function HeaderSocials() {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/kevin-l%C3%B3pez-7b31341b8/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/nightmare28899" target="_blank"><FaGithub/></a>
        <a href="https://dribble.com" target="_blank"><FiDribbble/></a>
    </div>
  )
}

 