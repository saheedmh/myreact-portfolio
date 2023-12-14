import React from 'react'
import Cta from './Cta'
import HeaderSocial from './HeaderSocial'
import '../style/header.css'
import Image from "../images/saheed1.jpeg"

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>saheed harun</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <Cta/>
        <HeaderSocial/>
  
        <div className='img'>
<img src={Image} alt=""  width={400} height={700}/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
        </header>
  )
}

export default Header
