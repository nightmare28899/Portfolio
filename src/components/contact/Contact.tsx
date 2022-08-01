import "./contact.css";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [captchaValid, changeCaptchaValid] = useState(true);

  const captcha = useRef<any>(null);

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("The user is not a robot");
      changeCaptchaValid(true);
    }
  }

  const form: any = useRef();

  const sendEmail: any = (e: {
    preventDefault: () => void;
    target: { reset: () => void };
  }) => {
    e.preventDefault();

    if (captcha.current?.getValue()) {
      console.log("The user is not a robot");
      emailjs.sendForm(
        "service_y1w723w",
        "template_3dh8e2k",
        form.current!,
        "y6-WHC_z5mMb9v8IO"
      );

      changeCaptchaValid(true);
      e.target.reset();
    } else {
      console.log("Please accept the captcha");
      changeCaptchaValid(false);
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        {/* END OF THE CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <ReCAPTCHA
            ref={captcha}
            sitekey="6LeO_TghAAAAAAxUZwXYaWSeZ3OCe6dVzXtcmXRy"
            onChange={onChange}
          />
          { captchaValid === false && <div className="error-captcha ">¡Please accept the catpcha!</div> }
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
