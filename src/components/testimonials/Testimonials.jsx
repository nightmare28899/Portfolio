import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper' 
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swper/css'
import 'swiper/css/pagination'


export default function Testimonials() {

  const testimonials = [
    {
      name: 'John Doe',
      avatar: AVTR1,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis molestias nesciunt quos, dolor ipsa harum placeat doloribus, odit, dolorum cum repellat eligendi quo incidunt distinctio architecto qui dolorem eum voluptatibus?',
    },
    {
      name: 'Jane Doe',
      avatar: AVTR2,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis molestias nesciunt quos, dolor ipsa harum placeat doloribus, odit, dolorum cum repellat eligendi quo incidunt distinctio architecto qui dolorem eum voluptatibus?',
    },
    {
      name: 'John Doe',
      avatar: AVTR3,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis molestias nesciunt quos, dolor ipsa harum placeat doloribus, odit, dolorum cum repellat eligendi quo incidunt distinctio architecto qui dolorem eum voluptatibus?',
    },
    {
      name: 'Jane Doe',
      avatar: AVTR4,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis molestias nesciunt quos, dolor ipsa harum placeat doloribus, odit, dolorum cum repellat eligendi quo incidunt distinctio architecto qui dolorem eum voluptatibus?',
    }
  ]

  const listTestimonials = testimonials.map((testimonial, index) => (
    <SwiperSlide className='testimonial'>
      <div className='client_avatar'>
        <img src={testimonial.avatar} alt='avatar one' />
      </div>
      <h5 className='client_name'>{testimonial.name}</h5>
      <small className='client_review'>
        {testimonial.review}
      </small>
    </SwiperSlide>
  ));

  return (
    <Swiper id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials-container'>
        {listTestimonials}
      </div>
    </Swiper>
  )
}
