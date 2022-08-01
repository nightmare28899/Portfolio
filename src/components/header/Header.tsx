import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'
import { animateScroll as scroll } from 'react-scroll'

export default function Header() {

  const ME = require('../../assets/kev.png')  

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  return (
    <header id='/'>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Kevin López</h1>
        <h5 className="text-light">I'm a Web Developer / Front-end developer</h5>
        <CTA />
        <HeaderSocial />
        <br />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <div onClick={scrollToBottom} className='scroll_down'>Scroll Down</div>
      </div>
    </header>
  )
}
