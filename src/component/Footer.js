import React from 'react'
import '../style/footer.css'
import { FaFacebookF } from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
function Footer() {
  return (
<footer>
  <a href="a" className='footer__logo'>saheed</a>

  <ul className='permalink'>
    <li><a href="#">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#experience">Experience</a></li>
<li><a href="#services">Services</a></li>
<li><a href="#portfolio">Portfolio</a></li>
<li><a href="#testimonial">Testmonial</a></li>

<li><a href="#contact">Contact</a></li>
  </ul>

  <div className="footer__social">
    <a href="https://facebook.com"><FaFacebookF/></a>
    <a href="https://instagram.com "><FiInstagram/></a>
    <a href="https://twitter.com">  <IoLogoTwitter/> </a>
  </div>

  <div className="footer__copyright">
    <small>&copy; saheed web developments. all right reserved</small>
  </div>
</footer>
   )
}

export default Footer
