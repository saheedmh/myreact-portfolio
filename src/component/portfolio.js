import React from 'react'
import '../style/portfolio.css'
import Img1 from "../images/dribb1.png"
import Img2 from "../images/dribbb2.png"
import Img3 from "../images/dribb3.png"
import Img4 from "../images/dribbble.png"
import Img5 from "../images/dribb1.png"
import Img6 from "../images/dribbble.png"


function portfolio() {

  const data =[
    {
        id: 1,
        image:Img1,
        title:"Crypto Currency Dashboard and  Financial visualization",
        gtihub:'https://github.com',
        demo:'https:https://dribbble.com/shots/22760145-Jobsity-Characters',
    },

    {
        id: 2,
        image:Img2,
        title:"charts tempelate & infographic in Figma",
        gtihub:'https://github.com',
        demo:'https://dribbble.com/shots/23210044-NVO-Trading-panel'
     },

     {
        id: 3,
        image:Img3,
        title:"Figma dashboard UI kit for data design web app",
        gtihub:'https://github.com',
        demo:'https://dribbble.com/shots/23210044-NVO-Trading-panel'
     },
     {
        id: 4,
        image:Img4,
        title:"maintaining task and",
        github:'https://github.com',
        demo:'https://dribbble.com/shots/23210044-NVO-Trading-panel'
     },

     {
        id: 5,
        image:Img5,
        title:"Charts tempelate and infographic in figma",
        github:'https://github.com',
        demo:'https://dribbble.com/shots/23210044-NVO-Trading-panel'
     }
,
{
    id: 6,
    image:Img6,
    title:"Crypto Currency Dashboard and  Financial visualization",
    gtihub:'https://github.com',
    demo:'https://dribbble.com/shots/23210044-NVO-Trading-panel'
 }


]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
      {
        data.map(({id, image, title, github, demo})=>
       {
        return(
          <article  key={id} className='portfolio__item'>
       <div className='portfolio__item-image'>
       <img src={image} alt="" />
       
       <h3>This is a portfolio item title</h3>
       <div className="portfolio__item-cta">
       <a href={github} className='btn'>Github</a>
       <a href={demo} className='btn btn-primary' target='_ black'>Live Demo</a>
       
       </div>
        </div>
      </article>

        )
       } 
        )
      }
      
      
      </div>
    </section>
  )
}

export default portfolio

