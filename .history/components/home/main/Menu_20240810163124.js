import { BiCategory } from "react-icons/bi";
import styles from "./styles.module.scss";
import Link from "next/link";
import { menuArray } from "../../../data/home";
export default function Menu() {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <a href="" className={styles.menu_header}>
            <BiCategory />
            <b>Categories</b>
          </a>
        </li>
        <div className={styles.menu_list}>
          {menuArray.map((item) => (
            <Link href={item.link}>
              <a>
                <span>{item.name}</span>
              </a>
            </Link>
          ))}
        </div>
      </ul>
    </div>
  );
}
