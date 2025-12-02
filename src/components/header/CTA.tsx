import { Link } from 'react-scroll'
import useTranslation from '../../hooks/useTranslation'
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function CTA() {
    const { translate, setLanguage } = useTranslation();
    const translateState = useSelector((state: any) => state.changeLanguage);

    useEffect(() => {
        setLanguage(translateState ? 'es' : 'en');
    }, [setLanguage, translateState]);

    const CV_EN = 'https://firebasestorage.googleapis.com/v0/b/portfolio-15cc6.appspot.com/o/CV_KLG.pdf?alt=media&token=cad81e9a-341f-4fec-bc25-e7a31ea7a266';
    const CV_ES = 'https://firebasestorage.googleapis.com/v0/b/portfolio-15cc6.appspot.com/o/CV_KLG_SPANISH.pdf?alt=media&token=512ba746-af14-4a9b-8e6c-52d119aebc36';

    return (
        <div className='cta'>
            <a href={translateState ? CV_ES : CV_EN} download className='btn animate__animated animate__backInLeft' rel='noreferrer' target="_blank">{translate('downloadCV')}</a>
            <Link to="contact" className='btn btn-primary animate__animated animate__backInRight'>{translate('talkMe')}</Link>
        </div>
    )
}
