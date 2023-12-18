import React from 'react'
import '../style/service.css'
import { BiCheck } from 'react-icons/bi'


function Services() {
  return (
   <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>

    <div className="container service__container">
      <article className='service'>
 <div className="service__head">
  <h3>Ms Offices</h3>
 </div>

 <ul className='service__list'>
  <li>
<BiCheck className='service__list-icon'/>
<p>Microsoft Words</p>
  </li>

  <li>
<BiCheck className='service__list-icon'/>
<p>Microsoft Excel   </p>
  </li>
 
  <li>
<BiCheck className='service__list-icon'/>
<p>Microsoft Powerpoint   </p>
  </li>
 
  <li>
<BiCheck className='service__list-icon'/>
<p>Microsoft Access</p>
  </li>
 
  <li>
<BiCheck className='service__list-icon'/>
<p>Microsoft Publisher </p>
  </li>
 
  <li>
<BiCheck className='service__list-icon'/>
<p>  </p>
  </li>
 
  <li>
<BiCheck className='service__list-icon'/>
<p>Microsoft Outlook </p>
  </li>
 
 </ul>
      </article>
      {/* end of web development*/}

      <article className='service'>
 <div className="service__head">
  <h3>Web Development</h3>
 </div>

 <ul className='service__list'>
  <li>
<BiCheck className='service__list-icon'/>
<p>Meet with  clients to discuss their website design and requirement</p>
  </li>

  <li>
<BiCheck className='service__list-icon'/>
<p>Create and Test apps for the website</p>
  </li>
 
  <li>
<BiCheck className='service__list-icon'/>
<p>Code for the site using HTML, CSS , JAVASCRIPT, REACT and others programming language</p>
  </li>
 
  <li>
<BiCheck className='service__list-icon'/>
<p>Engage with designer, such as graphic designer, to determine the site's layout</p>
  </li>
 
  <li>
<BiCheck className='service__list-icon'/>
<p>Integrate,audio, video, and graphics into the site</p>
  </li>
  <li>
<BiCheck className='service__list-icon'/>
<p>Quality-Test and troubleshoot the website and/or its application language, frameworks and technology</p>
  </li>
 
  <li>
<BiCheck className='service__list-icon'/>
<p>React js</p>
  </li>
 

 </ul>
      </article>
    </div>

   </section>
  )
}

export default Services
