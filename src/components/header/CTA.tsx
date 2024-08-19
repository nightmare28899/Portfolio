import { Link } from 'react-scroll'
import useTranslation from '../../hooks/useTranslation'
import {useEffect} from "react";
import {useSelector} from "react-redux";

export default function CTA() {
    const {translate, setLanguage} = useTranslation();
    const translateState = useSelector((state: any) => state.changeLanguage);

    useEffect(() => {
        setLanguage(translateState ? 'es' : 'en');
    }, [setLanguage, translateState]);

    const CV = 'https://firebasestorage.googleapis.com/v0/b/portfolio-15cc6.appspot.com/o/CV_KLG_ENGLISH.pdf?alt=media&token=ecddccba-9d8a-4540-b685-9c5ab2864d61';

    return (
        <div className='cta'>
            <a href={CV} download className='btn animate__animated animate__backInLeft' rel='noreferrer' target="_blank">{translate('downloadCV')}</a>
            <Link to="contact" className='btn btn-primary animate__animated animate__backInRight'>{translate('talkMe')}</Link>
        </div>
    )
}
