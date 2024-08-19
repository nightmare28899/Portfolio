import Flickity from "react-flickity-component";
import useTranslation from "../../hooks/useTranslation";

import "./companies.css";
import {useSelector} from "react-redux";
import {useEffect} from "react";

const LOGOS = [
    "https://firebasestorage.googleapis.com/v0/b/portfolio-15cc6.appspot.com/o/logos%2Flogo-lavoz.jpg?alt=media&token=c7d4b8cd-7e40-47a3-a007-4a0685ddf3ac",
    "https://firebasestorage.googleapis.com/v0/b/portfolio-15cc6.appspot.com/o/logos%2Flogo-scio.png?alt=media&token=40f30a6e-dbdc-4b17-9307-7c7ea83be4a2",
    "https://firebasestorage.googleapis.com/v0/b/portfolio-15cc6.appspot.com/o/logos%2Flogo-anmex.png?alt=media&token=31be427c-2be4-4d81-b412-ba630fc305c5",
    "https://firebasestorage.googleapis.com/v0/b/portfolio-15cc6.appspot.com/o/logos%2Flogo-newww.png?alt=media&token=0b2465f0-6192-42a9-a99b-13a1a867b59c",
];

const flickityOptions = {
    initialIndex: 1,
    prevNextButtons: false,
    pageDots: false,
    groupCells: true,
    wrapAround: true,
    autoPlay: 2000,
    pauseAutoPlayOnHover: false,
};

export default function Companies() {
    const {translate, setLanguage} = useTranslation();
    const translateState = useSelector((state: any) => state.changeLanguage);

    useEffect(() => {
        setLanguage(translateState ? "es" : "en");
    }, [setLanguage, translateState]);

    const Carousel = () => {
        return (
            <Flickity
                className={"carousel"}
                elementType={"div"}
                options={flickityOptions}
                disableImagesLoaded={false}
                reloadOnUpdate
                static
            >
                {LOGOS.map((logo, index) => (
                    <div className="container_carousel_cell" key={index}>
                        <img src={logo} alt="logo"/>
                    </div>
                ))}
            </Flickity>
        );
    }

    return (
        <section id="companies" className="animate__animated animate__backInUp">
            <h5>
                {translate('work')}
            </h5>
            <h2>{translate('companies')}</h2>
            <div className="container_flickity">
                <Carousel/>
            </div>
        </section>
    );
}
