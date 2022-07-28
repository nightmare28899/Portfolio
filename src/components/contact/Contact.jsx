/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y1w723w', 'TEMPLATE_ID', form.current, 'USER_ID')
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>nightmare28899@gmail.com</h5>
            <a href="mailto:nightmare28899@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>nightmare28899</h5>
            <a href="https://m.me/Kevin28899" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp />
            <h4>WhatsAPP</h4>
            <h5>+52 4436397414</h5>
            <a href="https://api.whatsapp.com/send?phone=4436397414" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF THE CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" id="" rows="7" placeholder="Your Message" required ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

