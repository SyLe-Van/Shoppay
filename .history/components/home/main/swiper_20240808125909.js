import styles from "./styles.module.scss";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

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
        navigation={true}
        modules={[Pagination, Navigation]}
        className={StyleSheet.mainSwiper}
      >
        {/* {[...Array(10).keys()].map((i) => (
          <SwiperSlide>
            <img src={`../../../images/swiper/${i + 1}.jpg`} alt="" />
          </SwiperSlide>
        ))} */}
        <SwiperSlide>Slide 1</SwiperSlide>
      </Swiper>
    </>
  );
}
