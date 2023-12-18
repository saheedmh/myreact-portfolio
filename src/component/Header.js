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
        <h5 className='text-light'>FullStack Developer, i Created Web pages and web apps with interractive UI/UX interface. i have also built some project, which has helped me master my core language and libraries, and also freelanced for a moment. check out my CV for more clarity</h5>
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
