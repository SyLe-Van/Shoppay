import Link from "./Link";
import styles from "./styles.module.scss";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <Link />
      </div>
    </footer>
  );
}
