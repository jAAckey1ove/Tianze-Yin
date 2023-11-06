import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {BsSnapchat} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1s657yl', 'template_24mg37b', form.current, 'bBoplKa8Fdi6P_NK2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id = 'contact'>
      <h5>get in touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className = 'contact__options'>
          <article className = 'contact__option'>
            <AiOutlineMail className = 'contact__option-icon'/>
            <h4>Email</h4>
            <h5>yint25@gocrusaders.ca</h5>
            <a href = 'mailto:yint25@gocrusaders.ca' target = '_blank'>send a message</a>
          </article>
          <article className = 'contact__option'>
            <BsSnapchat className = 'contact__option-icon'/>
            <h4>Snapchat</h4>
            <h5>tianze-yin</h5>
            <a href = 'https://pornhub.com' target = '_blank'>send a message</a>
          </article>
          <article className = 'contact__option'>
            <AiFillInstagram className = 'contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>tianzeyin888</h5>
            <a href = 'https://www.instagram.com/tianzeyin888/' target = '_blank'>send a message</a>
          </article>
        </div>
        <form ref = {form} onSubmit = {sendEmail}>
          <input type = 'text' name = 'email' placeholder = 'Your Full Name' required/>
          <input type = 'email' name = 'email' placeholder = 'Your Email' required/>
          <textarea name = 'message' rows = '7' placeholder = 'Your Message' required></textarea>
          <button type = 'submit' className = 'btn btn-primary'>Send Message</button>  
        </form>
      </div>
    </section>
  )
}

export default Contact