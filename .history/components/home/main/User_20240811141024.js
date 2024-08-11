import { IoSettingsOutline } from "react-icons/io5";
import styles from "./styles.module.scss";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { HiOutlineClipboardList } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { userSwiperArray } from "../../../data/home";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards, Navigation } from "swiper/modules";

export default function User() {
  const { data: session } = useSession();

  return (
    <div className={styles.user}>
      <img
        src="../../../images/userheader.jpg"
        alt=""
        className={styles.user_header}
      />
      <div className={styles.user_container}>
        {session ? (
          <div className={styles.user_infos}>
            <img src={session.user?.image} alt="" />
            <h4>{session.user.name}</h4>
          </div>
        ) : (
          <div className={styles.user_infos}>
            <img
              src="https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg"
              alt=""
            />
            <div className={styles.user_infos_btns}>
              <button>Register</button>
              <button>Login</button>
            </div>
          </div>
        )}
        <ul className={styles.user_links}>
          <li>
            <Link href="/profile">
              <IoSettingsOutline />
            </Link>
          </li>
          <li>
            <Link href="">
              <HiOutlineClipboardList />
            </Link>
          </li>
          <li>
            <Link href="">
              <AiOutlineMessage />
            </Link>
          </li>
          <li>
            <Link href="">
              <BsHeart />
            </Link>
          </li>
        </ul>
        <div className={styles.user_swiper}>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            navigation={true}
            modules={[EffectCards, Navigation]}
            className="user_swiper"
            style={{
              maxWidth: "150px",
              height: "220px",
              marginTop: "2rem",
            }}
          >
            {userSwiperArray.map((item, index) => (
              <SwiperSlide>
                <Link href="">
                  <img src={item.image} alt="" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <img
        src="../../../images/userheader.jpg"
        alt=""
        className={styles.user_footer}
      />
    </div>
  );
}
