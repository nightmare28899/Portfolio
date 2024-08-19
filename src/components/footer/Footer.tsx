import "./footer.css";
import useTranslation from "../../hooks/useTranslation";

import {useSelector} from "react-redux";
import {useEffect} from "react";

import {Link} from 'react-scroll'

export default function Footer() {
    const {translate, setLanguage} = useTranslation();
    const translateState = useSelector((state: any) => state.changeLanguage);

    useEffect(() => {
        setLanguage(translateState ? 'es' : 'en');
    }, [setLanguage, translateState]);

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
                <small>&copy; {translate('allRightsReserved')} </small>
            </div>
        </footer>
    );
}
