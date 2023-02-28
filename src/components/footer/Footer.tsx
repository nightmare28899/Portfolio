/* eslint-disable jsx-a11y/anchor-is-valid */
import "./footer.css";
import { Link } from 'react-scroll'

export default function Footer() {
  return (
    <footer>

      {/* <ul className="permalinks">
        <li>
        <Link to="/" spy={true} smooth={true} duration={100} offset={-50} delay={500}>Home</Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} duration={100} offset={-50} delay={500}>About</Link>
        </li>
        <li>
          <Link to="experience" spy={true} smooth={true} duration={100} offset={-50} delay={500}>Experience</Link>
        </li>
        <li>
          <Link to="portfolio" spy={true} smooth={true} duration={100} offset={-50} delay={500}>Portfolio</Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} duration={100} offset={-50} delay={500}>Contact</Link>
        </li>
      </ul> */}

      <div className="footer_copyright">
        <small>&copy; KLG. All rights reserved.</small>
      </div>
    </footer>
  );
}
