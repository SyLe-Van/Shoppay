import Menu from "./Menu";
import Offers from "./Offers";
import styles from "./styles.module.scss";
import MainSwiper from "./swiper";
import User from "./User";
import "swiper/css";

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>header</div>
      <Menu />
      <MainSwiper />
      <Offers />
      <User />
    </div>
  );
}
