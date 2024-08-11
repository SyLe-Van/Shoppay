import styles from "./styles.module.scss";
import MainSwiper from "./swiper";
import "swiper/css";

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>header</div>
      <div className={styles.menu}>menu</div>
      <div classnName={styles.swiper}>
        <MainSwiper />
      </div>
      <div className={styles.offers}>offers</div>
      <div className={styles.user}>user</div>
    </div>
  );
}
