import React, {useEffect} from 'react';
import 'animate.css';
import {Link} from 'react-scroll';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

import useTranslation from '../../hooks/useTranslation';

import './about.css';
import {useSelector} from "react-redux";

export default function About() {
    const ME =
        "https://firebasestorage.googleapis.com/v0/b/portfolio-15cc6.appspot.com/o/img%2Fme-about-kev.png?alt=media&token=e2737b63-853b-44ea-9c43-52b173bffd23";
    const {translate, setLanguage} = useTranslation();
    const translateState = useSelector((state: any) => state.changeLanguage);

    useEffect(() => {
        setLanguage(translateState ? 'es' : 'en');
    }, [setLanguage, translateState]);

    return (
        <section id="about">
            <h5>{translate('getToKnow')}</h5>
            <h2>{translate('aboutMe')}</h2>

            <div className="container about_container">
                <div className="about_me animate__animated animate__backInLeft">
                    <div className="about_me-image">
                        <img src={ME} alt="About Image"/>
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <Link
                            to="experience"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-50}
                            delay={500}
                        >
                            <article className="about_card animate__animated animate__fadeIn">
                                <FaAward className="about_icon"/>
                                <h5>{translate('experience')}</h5>
                                <small>{translate('howLong')}</small>
                            </article>
                        </Link>

                        <article className="about_card animate__animated animate__fadeIn">
                            <FiUsers className="about_icon"/>
                            <h5>{translate('companies')}</h5>
                            <small>{translate('numberCompanies')}</small>
                        </article>

                        <Link
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-50}
                            delay={500}
                        >
                            <article className="about_card animate__animated animate__fadeIn">
                                <VscFolderLibrary className="about_icon"/>
                                <h5>{translate('projects')}</h5>
                                <small>{translate('numberProjects')}</small>
                            </article>
                        </Link>
                    </div>

                    <p className="animate__animated animate__backInRight">
                        {translate('aboutMeDescription')}
                    </p>

                    <Link
                        to="contact"
                        spy={true} smooth={true} duration={100} offset={-50} delay={500}
                        className="btn btn-primary animate__animated animate__fadeIn"
                    >
                        {translate('talkMe')}
                    </Link>
                </div>
            </div>
        </section>
    );
}
