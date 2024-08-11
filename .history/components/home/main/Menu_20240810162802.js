import { BiCategory } from "react-icons/bi";
import styles from "./styles.module.scss";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <a href="" className={styles.menu_header}>
            <BiCategory />
          </a>
        </li>
      </ul>
    </div>
  );
}
