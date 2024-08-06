import Links from "./Links";
import styles from "./styles.module.scss";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <Links />
      </div>
    </footer>
  );
}
