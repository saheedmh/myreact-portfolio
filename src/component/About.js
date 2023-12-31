import React from 'react'
import '../style/about.css'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import Img from '../images/saheed.jpg'


function About() {
  return (
    <section id='about'>
      <h5>get To Know</h5>
      <h2>About Me</h2>

      <div className=" container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={Img} alt="" />
        </div>
      </div>
    <div className="about__content">
      <div className="about__cards">
        <article className='about__card'>
        <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>3+ Years Working </small>
        </article>

        <article className='about__card'>
        <FiUsers className='about__icon'/>
          <h5>Clients</h5>
          <small>100+ worldWide </small>
        </article>

        <article className='about__card'>
        <VscFolderLibrary className='about__icon'/>
          <h5>project</h5>
          <small>10+ completed</small>
        </article>
      </div>

      </div>
    </div>
    </section>
  )
}

export default About
