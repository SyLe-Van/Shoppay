import Links from "./Link";
import NewsLetter from "./NewsLetter";
import Payment from "./Payment";
import Socials from "./Socials";
import styles from "./styles.module.scss";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <Links />
        <Socials />
        <NewsLetter />
        <Payment />
      </div>
    </footer>
  );
}