import Link from "next/link";
import styles from "./styles.module.scss";
export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.main_container}>
        <Link href="/" className={styles.logo}>
          <img src="../../public/images/logo.png" alt="logo" />
        </Link>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." />
          <div className={styles.search_icon}></div>
        </div>
      </div>
    </div>
  );
}
