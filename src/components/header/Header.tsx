import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'
import { animateScroll as scroll } from 'react-scroll'

export default function Header() {

  const ME = 'https://firebasestorage.googleapis.com/v0/b/portfolio-15cc6.appspot.com/o/img%2Fkev.png?alt=media&token=224557e3-3c0c-43de-bd70-bc09faf01305'

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  return (
    <header id='/'>
      <div className="container header_container">
        <h5 className='animate__animated animate__fadeIn'>Hello I'm</h5>
        <h1 className='animate__animated animate__fadeIn'>Kevin López</h1>
        <h5 className="text-light animate__animated animate__fadeIn">I'm a Web Developer / Front-end developer</h5>
        <CTA />
        <HeaderSocial />
        <br />
        <div className="me animate__animated animate__fadeInUp">
          <img src={ME} alt="me" />
        </div>

        <div onClick={scrollToBottom} className='scroll_down'>Scroll Down</div>
      </div>
    </header>
  )
}
