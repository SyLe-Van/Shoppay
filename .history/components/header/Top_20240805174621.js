"use client";
import styles from "./styles.module.scss";
import { useState } from "react";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import Link from "next/link";
export default function Top() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className={styles.top}>
      <div className={styles.top_container}>
        <div></div>
        <ul className={styles.top_list}>
          <li>
            <img
              src="https://i.pinimg.com/564x/2a/cb/7d/2acb7d9371550e4f145d5a1a841a41cb.jpg"
              alt="Vietnam Flag"
            />
            <span>Vietnam / NVD</span>
          </li>
          <li>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li>
            <span>Customer Service</span>
          </li>
          <li>
            <span>Help</span>
          </li>
          <li>
            <BsSuitHeart />
            <Link href="/profile/wishlist">
              <span>Wishlist</span>
            </Link>
          </li>
          {loggedIn ? (
            <li>
              <div className={styles.flex}>
                <img
                  src="https://i.pinimg.com/564x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg"
                  alt="User"
                />
                <span>SY LE</span>
                <RiArrowDropDownFill />
              </div>
            </li>
          ) : (
            <li>
              <div className={styles.flex}>
                <RiAccountPinCircleLine />
                <span>Account</span>
                <RiArrowDropDownFill />
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
