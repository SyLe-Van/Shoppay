import styles from "../../../styles/swiper.module.scss";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.swiper}
      >
        <SwiperSlide>
          <img
            src={`../../../images/swiper/${i + 1}.jpg`}
            alt=""
            className={styles.slideImage}
          />
        </SwiperSlide>
        ;
      </Swiper>
    </>
  );
}
