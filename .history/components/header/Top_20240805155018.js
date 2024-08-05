import styles from "./styles.module.scss";
import { MiSecurity } from "react-icons/mi";
export default function Top() {
  return (
    <div className={styles.top}>
      <div className={styles.top_container}>
        <div></div>
        <ul className={styles.top_list}>
          <li>
            <img
              src="https://i.pinimg.com/564x/2a/cb/7d/2acb7d9371550e4f145d5a1a841a41cb.jpg"
              alt="Vietnam Flag"
            />
            <span>Vietnam / NVD</span>
          </li>
          <MiSecurity />
          <li>Buyer Protection</li>
        </ul>
      </div>
    </div>
  );
}
