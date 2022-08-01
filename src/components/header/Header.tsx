import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'

export default function Header() {

  const ME = require('../../assets/kev.png')  

  return (
    <header>
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

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}
