import { BiCategory } from "react-icons/bi";
import styles from "./styles.module.scss";
import Link from "next/link";
import { menuArray } from "../../../data/home";
import {
  GiLargeDress,
  GiClothes,
  Gi3DHammer,
  GiWatch,
  GiBallerinaShoes,
  GiHeadphones,
  GiHealthCapsule,
  GiSportMedal,
  GiBigDiamondRing,
} from "react-icons/gi";
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
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </ul>
    </div>
  );
}
