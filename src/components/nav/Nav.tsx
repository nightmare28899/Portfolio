/* eslint-disable jsx-a11y/anchor-is-valid */
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { Link } from 'react-scroll'

export default function Nav() {

  return (
    <nav>
      <Link activeClass="active" to="/" spy={true} smooth={true} duration={100} offset={-50} delay={500}><AiOutlineHome /></Link>
      <Link activeClass="active" to="about" spy={true} smooth={true} duration={100} offset={-50} delay={500}><AiOutlineUser /></Link>
      <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-50} duration={100} delay={500}><BiBook /></Link>
      <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={100} offset={-50} delay={500}><RiServiceLine /></Link>
      <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={100} delay={500}><BiMessageSquareDetail /></Link>
    </nav>
  )
}
