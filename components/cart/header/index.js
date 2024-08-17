import Link from "next/link";
import styles from "./styles.module.scss";
import { MdPlayArrow } from "react-icons/md";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.header_left}>
          <Link href="/">
            <img src="/images/logo.png" alt="logo" />
          </Link>
        </div>
        <div className={styles.header_right}>
          <Link href="/browse">
            Continue Shopping
            <MdPlayArrow />
          </Link>
        </div>
      </div>
    </div>
  );
}
