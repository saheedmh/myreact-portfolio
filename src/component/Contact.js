import React from 'react'
import '../style/contact.css'

import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
function Contact() {
  const form  = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_k9mf45j', 'template_cxw1zw4', form.current, 'zBK0leOJiy0RItAh2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.resend();
  };
  return (
    <section>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='contact contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
          <MdOutlineMailOutline  className='contact__option-icon'/>  
           <h4>Email</h4>
           <h5>menyagaseid2@gmail.com</h5>
           <a href="mailto:menyagaseid2@gmail.com" target='_blank'>Send a message </a>
          </article>

          <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon' /> 
           <h4>Messager</h4>
           <h5>on facebook</h5>
           <a href="https://m.me/seidm.harun" target="_blank">Send a message </a>
          </article>

          <article className='contact__option'>
          <FaWhatsapp  className='contact__option-icon' />
           <h4>WhatsApp me</h4>
           <h5>+23408135583538 </h5>
           <a href="https://api.whatsapp.com/send?phone+23408135583538 " target='_blank '>Send a message </a>
          </article>
</div>
        {/**End of contact */}

<form ref={form} onSubmit={sendEmail}>
<input type="text" name='name' placeholder='Your Full Name' required />
<input type="text" name='email' placeholder='Your Email'  required />
<textarea name="message" id="" rows="7" required></textarea>
<button type='submit' className='btn btn-primary '>Send Message</button>
</form> 
      </div>
    </section>
  )
}

export default Contact
