import './nav.css';

import {FaHome, FaUserGraduate, FaBook, FaGlobe} from 'react-icons/fa';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {MdHomeRepairService} from 'react-icons/md';
import {IoMdBookmarks} from 'react-icons/io';
import {Link} from 'react-scroll';
import {useDispatch, useSelector} from 'react-redux';

import useTranslation from '../../hooks/useTranslation';
import {useEffect} from "react";

export default function Nav() {
    const dispatch = useDispatch();
    const {translate, setLanguage} = useTranslation();
    const languageState = useSelector((state: any) => state.changeLanguage);

    const toggleLanguage = () => {
        dispatch({type: 'CHANGE_LANGUAGE', payload: !languageState});
    };

    useEffect(() => {
        setLanguage(languageState ? 'es' : 'en');
    }, [languageState, setLanguage]);

    return (
        <nav>
            <Link activeClass="active" to="/" spy={true} smooth={true} duration={100} offset={-50} delay={500}><FaHome/></Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} duration={100} offset={-50}
                  delay={500}><FaUserGraduate/></Link>
            <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-50} duration={100} delay={500}><FaBook/></Link>
            {/* <Link activeClass="active" to="services" spy={true} smooth={true} offset={-50} duration={100} delay={500}><IoMdBookmarks /></Link> */}
            {/*<Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={100} offset={-50} delay={500}><MdHomeRepairService /></Link>*/}
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={100}
                  delay={500}><BsFillChatDotsFill/></Link>
            <button
                className={languageState ? 'btn-active' : 'btn-inactive'}
                onClick={toggleLanguage}
                title={translate('changeLanguage')}
            >
                <FaGlobe/>
            </button>
        </nav>
    )
}
