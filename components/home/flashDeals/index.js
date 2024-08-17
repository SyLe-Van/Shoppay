import { MdFlashOn } from "react-icons/md";
import styles from "./styles.module.scss";
import Countdown from "../../countdown";
import React, { useRef, useState } from "react";
import { flashDealsArray } from "../../../data/home";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import FlashCard from "./Card";
export default function FlashDeals() {
  return (
    <div className={styles.flashDeals}>
      <div className={styles.flashDeals_header}>
        <h1>
          FLASH SALE
          <MdFlashOn />
        </h1>
        <Countdown date={new Date(2024, 8, 12, 25)} />
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="flashDeals_swiper"
        breakpoints={{
          450: {
            slidesPerView: 2,
          },
          630: {
            slidesPerView: 3,
          },
          920: {
            slidesPerView: 4,
          },
          1232: {
            slidesPerView: 5,
          },
          1520: {
            slidesPerView: 6,
          },
        }}
      >
        <div className={styles.flashDeals_list}>
          {flashDealsArray.map((product, index) => (
            <SwiperSlide>
              <FlashCard product={product} key={index} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
