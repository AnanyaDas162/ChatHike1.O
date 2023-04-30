import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import team1 from './Images/team1.jpg';
import team2 from './Images/team2.jpg';
import team3 from './Images/team3.jpg';
import team4 from './Images/team4.jpg';
import team5 from './Images/team5.jpg';
import team6 from './Images/team6.jpg';
import team7 from './Images/team7.jpg';
import team8 from './Images/team8.jpg';
import team9 from './Images/team9.jpg';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import {  Autoplay, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
           <img src={team1}></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={team2}></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={team3}></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={team4}></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={team5}></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={team6}></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={team7}></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={team8}></img>
        </SwiperSlide>
        <SwiperSlide>
           <img src={team9}></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
