"use client";
import styles from "./styles.module.scss";
import { useState } from "react";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import Link from "next/link";
import UserMenu from "./UserMenu";
import { useSession } from "next-auth/react";
export default function Top({ country }) {
  const { data: session } = useSession();
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.top}>
      <div className={styles.top_container}>
        <div></div>
        <ul className={styles.top_list}>
          <li className={styles.li}>
            {/* <img src={country.flag} alt="" /> */}
            {/* <span>{country.name}</span> */}
          </li>
          <li className={styles.li}>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li className={styles.li}>
            <span>Customer Service</span>
          </li>
          <li className={styles.li}>
            <span>Help</span>
          </li>
          <li className={styles.li}>
            <BsSuitHeart />
            <Link href="/profile/wishlist">
              <span>Wishlist</span>
            </Link>
          </li>
          <li
            className={styles.li}
            onMouseOver={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            {session ? (
              <div className={styles.flex}>
                <img src={session.user.image} alt="User" />
                <span>{session.user.name}</span>
                <RiArrowDropDownFill />
              </div>
            ) : (
              <div className={styles.flex}>
                <RiAccountPinCircleLine />
                <span>Account</span>
                <RiArrowDropDownFill />
              </div>
            )}
            {visible && <UserMenu session={session} />}
          </li>
        </ul>
      </div>
    </div>
  );
}
