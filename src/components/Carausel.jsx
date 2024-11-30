import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import rasm from "../assets/bg.jpg"
import rasm2 from "../assets/bg.webp"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

const Carausel = () => {
  return (
    <Swiper 
        loop={true} 
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }} 
        // navigation={true} 
        modules={[ Autoplay]} 
        className="mySwiper select-none">
        <SwiperSlide>
           <div className='h-[800px] border relative'>
                <img className='w-full h-full object-cover absolute top-0 left-0' src={rasm} alt="" />
                <div className='relative'>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, officia!</h2>
                </div>
           </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className='h-[800px] border relative'>
                <img className='w-full h-full object-cover absolute top-0 left-0' src={rasm2} alt="" />
           </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className='h-[800px] border relative'>
                <img className='w-full h-full object-cover absolute top-0 left-0' src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70" alt="" />
           </div>
        </SwiperSlide>
    </Swiper>
  )
}

export default Carausel