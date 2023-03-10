/* eslint-disable jsx-a11y/anchor-is-valid */
import './nav.css'
import { FaHome } from 'react-icons/fa'
import { FaUserGraduate } from 'react-icons/fa'
import { FaBook } from 'react-icons/fa'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { MdHomeRepairService } from 'react-icons/md'
import { IoMdBookmarks } from 'react-icons/io'

import { Link } from 'react-scroll'

export default function Nav() {

  return (
    <nav>
      <Link activeClass="active" to="/" spy={true} smooth={true} duration={100} offset={-50} delay={500}><FaHome /></Link>
      <Link activeClass="active" to="about" spy={true} smooth={true} duration={100} offset={-50} delay={500}><FaUserGraduate /></Link>
      <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-50} duration={100} delay={500}><FaBook /></Link>
      {/* <Link activeClass="active" to="services" spy={true} smooth={true} offset={-50} duration={100} delay={500}><IoMdBookmarks /></Link> */}
      <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={100} offset={-50} delay={500}><MdHomeRepairService /></Link>
      <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={100} delay={500}><BsFillChatDotsFill /></Link>
    </nav>
  )
}
