import Link from "next/link";
import styles from "./styles.module.scss";
import { RiSearch2Line } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.main_container}>
        <Link href="/" className={styles.logo}>
          <img src="/images/logo.png" alt="logo" />
        </Link>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." />
          <div className={styles.search_icon}>
            <RiSearch2Line />
          </div>
        </div>
        <Link href="/cart" className={styles.cart}>
          <FaOpencart />
        </Link>
      </div>
    </div>
  );
}