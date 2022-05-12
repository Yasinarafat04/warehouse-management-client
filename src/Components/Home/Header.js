import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import smartWatch from '../Images/Smart-Watch.jpg'
import phone from '../Images/phone.jpg'
import lcd from './lcd.webp'


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Header() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className="img-fluid" src={phone} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.pinimg.com/originals/bd/98/35/bd983558d61361e66f41c5b9c622ea99.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://www.photoshopvideotutorial.com/freepsdmock/wp-content/uploads/2019/05/Free-Unique-Mouse-Pad-Mockup-scaled.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={smartWatch} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={lcd} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-50" src={'https://cdn.dribbble.com/users/3695363/screenshots/7059682/gaming_mouse_mockup_4x.jpg'} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
