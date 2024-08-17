import styles from "./styles.module.scss";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
export default function ProductSwiper({ images }) {
  const swiperRef = useRef(null);
  useEffect(() => {
    swiperRef.current.swiper.autoplay.stop();
  }, [swiperRef]);
  return (
    <div
      className={styles.swiper}
      onMouseEnter={() => swiperRef.current.swiper.autoplay.start()}
      onMouseLeave={() => swiperRef.current.swiper.autoplay.stop()}
    >
      <Swiper
        ref={swiperRef}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          stopOnLastSlide: false,
        }}
        speed={500}
        modules={[Autoplay]}
      >
        {images.map((img) => (
          <SwiperSlide>
            <img src={img.url} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
