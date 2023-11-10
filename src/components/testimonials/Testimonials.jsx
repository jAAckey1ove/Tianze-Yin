import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/JetEngine.avif'
import AVTR2 from '../../assets/JetEngine.avif'
import AVTR3 from '../../assets/JetEngine.avif'
import AVTR4 from '../../assets/JetEngine.avif'


import {Pagination} from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name:'John',
    review: 'Tianze is a great man and genius'
  },
  {
    avatar: AVTR2,
    name:'John',
    review: 'Tianze is a great man and genius'
  },
  {
    avatar: AVTR3,
    name:'John',
    review: 'Tianze is a great man and genius'
  },
  {
    avatar: AVTR4,
    name:'John',
    review: 'Tianze is a great man and genius'
  },
]

const Testimonials = () => {
  return (
    <section id = 'Testimonials'>
      <h5>What others know about me</h5>
      <h2>Testimonials</h2>

      <Swiper className = 'container testimonials__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name , review}, index) => {
            return(
              <SwiperSlide key = {index} className = 'testimonials'>
              <div className = 'client__avatar'>
                <img src = {avatar}/>
              </div>
              <h5 className = 'client__name'>{name}</h5>
              <small className = 'client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials