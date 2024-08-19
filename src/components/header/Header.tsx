import "./header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocials";
import {animateScroll as scroll} from "react-scroll";
import {BsArrowRightCircleFill} from "react-icons/bs";
import {IconContext} from "react-icons";
import useTranslation from "../../hooks/useTranslation";
import {useSelector} from "react-redux";
import {useEffect} from "react";

export default function Header() {
    const ME =
        "https://firebasestorage.googleapis.com/v0/b/portfolio-15cc6.appspot.com/o/img%2Fkev.png?alt=media&token=224557e3-3c0c-43de-bd70-bc09faf01305";

    const scrollToBottom = () => {
        scroll.scrollToBottom();
    };

    const {translate, setLanguage} = useTranslation();
    const translateState = useSelector((state: any) => state.changeLanguage);

    useEffect(() => {
        setLanguage(translateState ? 'es' : 'en');
    }, [setLanguage, translateState]);

    return (
        <header id="/">
            <div className="container header_container">
                <h5 className="animate__animated animate__fadeIn">{translate('hello')}</h5>
                <h1 className="animate__animated animate__fadeIn">{translate('myName')}</h1>
                <h5 className="text-light animate__animated animate__fadeIn">
                    {translate('iam')}
                </h5>
                <CTA/>
                <HeaderSocial/>
                <br/>
                <div className="me animate__animated animate__fadeInUp">
                    <img src={ME} alt="me" style={{height: "100%"}}/>
                </div>

                <IconContext.Provider value={{size: "30px"}}>
                    <div>
                        <BsArrowRightCircleFill
                            onClick={scrollToBottom}
                            className="scroll_down"
                        />
                    </div>
                </IconContext.Provider>
            </div>
        </header>
    );
}
