import Link from "next/link";
import styles from "./styles.module.scss";

export default function NewsLetter() {
  return (
    <div className={styles.footer_newsletter}>
      <h3>SIGN UP FOR OUR NEWSLETTER</h3>
      <div className={styles.footer_flex}>
        <input type="text" placeholder="Your email address..." />
        <button className={styles.btn_primary}>Subscribe</button>
      </div>
      <p>
        By subscribing to our mailing list you will always be update with the
        latest news from us
        <Link href="">ourPrivacy & Cookie Policy</Link>
      </p>
    </div>
  );
}
