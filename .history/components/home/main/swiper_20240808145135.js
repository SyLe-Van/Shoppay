// import styles from "../../../styles/swiper.module.scss";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation]}
        className="mainSwiper"
      >
        {[...Array(10).keys()].map((i) => (
          <SwiperSlide>
            <img src={`../../../images/swiper/${i + 1}.jpg`} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
