import React from 'react';
import '../style/experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience =()=>{
  return (
    <section id='experience'>
      <h5>what skills I have</h5>
      <h2>My Experience</h2>

      
      <div className='container experience__container'>
      <div className="frontEnd-container">
      <h3>Frontend Development</h3>
      <div className='experience__content'>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__icons'/>
          <div>
          <h4>HTML</h4>
          <small className='text-light'>experience</small>
        
          </div>
         </article>

        <article className='experience__details'>
          <BsPatchCheckFill className='experience__icons'/>
          <div>
          <h4>CSS</h4>
          <small className='text-light'>intermidiate</small>
        
          </div>
         </article>
      
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__icons'/>
          <div>
          <h4>Javascript</h4>
          <small className='text-light'>intermidiate</small>
       
          </div>
           </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__icons'/>
          <div>
          <h4>Jquery</h4>
          <small className='text-light'>experience</small>
        
          </div>
          </article>
      
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__icons'/>
          <div>
          <h4>React</h4>
          <small className='text-light'>experience</small>
        
          </div>
          </article>
      
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__icons'/>
          <div>
          <h4>Bootstrap</h4>
          <small className='text-light'>experience</small>
        
          </div>
          </article>
        </div> 
        </div>
{
  /* End Of FrontEnd*/}

      <div className='experience__backend'>
 
      <h3>Backend Development</h3>
      <div className='experience__content'>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__icons'/>
          <div>
          <h4>Node</h4>
          <small className='text-light'>experience</small>
       
          </div>
          </article>

        <article className='experience__details'>
          <BsPatchCheckFill className='experience__icons'/>
          <div>
          <h4>Mysql</h4>
          <small className='text-light'>intermidiate</small>
        
          </div>
          </article>
      
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__icon'  />
          <div>
          <h4>PHP</h4>
          <small classNam e='text-light'>intermidiate</small>
       
          </div>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill className='experience__icons'/>
          <div>
          <h4>Mongo db</h4>
          <small classNam e='text-light'>intermidiate</small>
       
          </div>
          </article>
       
        </div>
        </div>
      </div>
      
    </section>
  )
}

export default Experience
