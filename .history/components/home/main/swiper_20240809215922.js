import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../styles/swiper.module.scss";
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
        // className={styles.swiper}
        className="mainSwiper"
      >
        {[...Array(10).keys()].map((i) => (
          <SwiperSlide>
            <img
              src={`../../../images/swiper/${i + 1}.jpg`}
              alt=""
              //   className={styles.slideImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
