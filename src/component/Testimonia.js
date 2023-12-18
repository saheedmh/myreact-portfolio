import React from 'react'
import '../style/testimonial.css'
import Avtr1 from "../images/computer.jpg"
import Avtr2 from "../images/computer.jpg"
import Avtr3 from "../images/computer.jpg"
// import Swiper core and required modules
import {  Navigation, Pagination,  Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
function Testimonia() {
  const data = [
    {
      avatar: Avtr1,
      name:"muhammed Abdul",
      review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nesciunt blanditiis nostrum, assumenda temporibus accusantium maiores quam repellendus tenetur saepe labore dicta quod animi nemo pariatur. Provident harum itaque odit'
    },

    {
      avatar: Avtr2,
      name:"job luck",
      review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nesciunt blanditiis nostrum, assumenda temporibus accusantium maiores quam repellendus tenetur saepe labore dicta quod animi nemo pariatur. Provident harum itaque odit'
    },
    {
      avatar: Avtr3,
      name:"joseph lord ",
      review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nesciunt blanditiis nostrum, assumenda temporibus accusantium maiores quam repellendus tenetur saepe labore dicta quod animi nemo pariatur. Provident harum itaque odit'
    }
    ,
    {
      avatar: Avtr3,
      name:"joseph lord ",
      review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nesciunt blanditiis nostrum, assumenda temporibus accusantium maiores quam repellendus tenetur saepe labore dicta quod animi nemo pariatur. Provident harum itaque odit'
    }
    
  ]
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container Testimonial__container"
      
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      >
        
        {
          data.map(({avatar, name, review}, index) =>{
            return (
              <SwiperSlide key={index} className='swiper-testimonials'>
      <div className="clients__avatar">
        <img src={avatar} alt="" />
        </div>
      <h5 className='client__name'>{name}</h5>
      <small>{review}</small>
        </SwiperSlide >

            )
          })
        }
       
       </Swiper>
    </section>
  )
}

export default Testimonia
