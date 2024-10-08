import Menu from "./Menu";
import Offers from "./Offers";
import styles from "./styles.module.scss";
import MainSwiper from "./swiper";
import User from "./User";
import "swiper/css";
import Header from "./Header";

export default function Main() {
  return (
    <div className={styles.main}>
      <Header />
      <Menu />
      <MainSwiper />
      <Offers />
      <User />
    </div>
  );
}
