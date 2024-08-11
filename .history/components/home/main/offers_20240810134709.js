import styles from "./styles.module.scss";
import { offersAarray } from "../../../data/home";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

export default function Offers() {
  return (
    <div className={styles.offers}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="offers_swiper"
      >
        {offersAarray.map((offer, index) => (
          <SwiperSlide key={index}>
            <Link href="">
              <img src={offer.image} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
