import styles from "./styles.module.scss";
export default function Top() {
  return (
    <div className={styles.top}>
      <div className={styles.top_container}>
        <div></div>
        <ul className={styles.top_list}>
          <li>
            <img
              src="https://www.seekpng.com/ima/u2q8t4y3a9e6a9t4/"
              alt="Vietnam Flag"
            />
            <span>Vietnam / NVD</span>
          </li>
          <li>Buyer Protection</li>
        </ul>
      </div>
    </div>
  );
}
