import styles from "../../../styles/swiper.module.scss";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className={styles.swiper}
      >
        {[...Array(10).keys()].map((i) => (
          <SwiperSlide>
            <img
              src={`../../../images/swiper/${i + 1}.jpg`}
              alt=""
              className={styles.slideImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
