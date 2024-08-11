import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../styles/swiper.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function MainSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 1500,
        //   disableOnInteraction: false,
        // }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mainSwiper"
      >
        {/* {[...Array(10).keys()].map((i) => (
          <SwiperSlide>
            <img
              src={`../../../images/swiper/${i + 1}.jpg`}
              alt=""
              //   className={styles.slideImage}
            />
          </SwiperSlide>
        ))} */}
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
