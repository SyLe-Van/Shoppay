import styles from "./styles.module.scss";
export default function Top() {
  return (
    <div className={styles.top}>
      <div className={styles.top_container}>
        <div></div>
        <ul className={styles.top_list}>
          <li>
            <img
              src="https://www.seekpng.com/ipng/u2q8t4y3a9e6a9t4_vietnam-flag-icon-png/"
              alt="Vietnam Flag"
            />
            <span>Vietnam / NVD</span>
          </li>
          <li>Buyer protection</li>
        </ul>
      </div>
    </div>
  );
}
