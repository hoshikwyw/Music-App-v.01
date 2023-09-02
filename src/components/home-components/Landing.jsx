import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import {  Autoplay,Pagination } from "swiper/modules";

const Landing = () => {
  return (
    <div className=" w-full">
      <Swiper
        direction={"vertical"}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[ Pagination]}
        className="mySwiper">
        <SwiperSlide><div className=" bg-[url(https://i.pinimg.com/564x/67/8d/dd/678dddfb4c55bd8aef94c37cb04836a9.jpg)] bg-cover bg-no-repeat bg-center rounded h-full w-full">
          <h2>Hello this is landing 1</h2></div></SwiperSlide>
        <SwiperSlide>landing 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Landing;
