import styles from "./styles.module.scss";
import { MdSecurity } from "react-icons/md";
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
          <li>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li>
            <span>Customer Service</span>
          </li>
          <li>
            <span>Help</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
