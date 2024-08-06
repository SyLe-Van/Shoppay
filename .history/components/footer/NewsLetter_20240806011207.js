import styles from "./styles.module.scss";

export default function NewsLetter() {
  return (
    <div className={styles.newsletter}>
      <h3>SIGN UP FOR OUR NEWSLETTER</h3>
      <div className={styles.flex}>
        <input type="text" placeholder="Your email address..." />
        <button className={styles.btn_primary}>Subscribe</button>
      </div>
    </div>
  );
}
