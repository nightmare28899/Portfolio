import "./contact.css";
import {useEffect, useRef, useState} from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTranslation from "../../hooks/useTranslation";
import {useSelector} from "react-redux";

export default function Contact() {
    const [captchaValid, changeCaptchaValid] = useState(true);
    const {translate, setLanguage} = useTranslation();
    const translateState = useSelector((state: any) => state.changeLanguage);
    const captcha = useRef<any>(null);

    useEffect(() => {
        setLanguage(translateState ? "es" : "en");
    }, [setLanguage, translateState]);

    const notify = () =>
        toast.success("¡Successfully Sent!", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

    const notifyError = () =>
        toast.error("¡Please Accept The Catpcha!", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

    const onChange = () => {
        if (captcha.current.getValue()) {
            changeCaptchaValid(true);
        }
    };

    const form: any = useRef();

    const sendEmail: any = (e: {
        preventDefault: () => void;
        target: { reset: () => void };
    }) => {
        e.preventDefault();

        if (captcha.current.getValue()) {
            emailjs.sendForm(
                "service_y1w723w",
                "template_3dh8e2k",
                form.current!,
                "y6-WHC_z5mMb9v8IO"
            ).then();

            notify();
            e.target.reset();
            captchaValid && captcha.current.reset();
        } else {
            changeCaptchaValid(false);
            notifyError();
        }
    };

    return (
        <section id="contact">
            <h5 className="animate__animated animate__fadeInUp">{translate('contactUs')}</h5>
            <h2 className="animate__animated animate__fadeInUp">{translate('contactMe')}</h2>

            <div className="container contact_container animate__animated animate__fadeInUp">
                {/* END OF THE CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="name"
                        placeholder={translate('placeholderName')}
                        required
                    />
                    <input type="email" name="email" placeholder={translate('placeholderEmail')} required/>
                    <textarea
                        name="message"
                        rows={7}
                        placeholder={translate('placeholderMessage')}
                        required
                    ></textarea>
                    {sendEmail !== "" && (
                        <ReCAPTCHA
                            ref={captcha}
                            sitekey="6LeO_TghAAAAAAxUZwXYaWSeZ3OCe6dVzXtcmXRy"
                            onChange={onChange}
                        />
                    )}
                    <button type="submit" className="btn btn-primary">
                        {translate('sendMessage')}
                    </button>
                </form>
            </div>

            <div>
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </div>
        </section>
    );
}
