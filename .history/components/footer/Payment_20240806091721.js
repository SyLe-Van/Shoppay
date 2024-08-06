import styles from "./styles.module.scss";

export default function Payment() {
  return (
    <div className={styles.footer_payment}>
      <h3>WE ACCEPT</h3>
      <div className={styles.footer_flexwrap}>
        <img src="/images/payment/visa.webp" alt="visa" />
      </div>
    </div>
  );
}
