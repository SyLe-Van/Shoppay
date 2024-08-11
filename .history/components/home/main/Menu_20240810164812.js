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
import { MdOutlineSportsEsports, MdOutlineSmartToy } from "react-icons/md";
import { BiCameraMovie, BiGift, BiCategory } from "react-icons/bi";
import { FaBaby } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { BsPhoneVibrate } from "react-icons/bs";

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
          {menuArray.map((item, i) => (
            <Link href={item.link} key={i}>
              {(() => {
                switch (i) {
                  case 0:
                    return <GiLargeDress />;
                  case 1:
                    return <GiClothes />;
                  case 2:
                    return <GiHeadphones />;
                  case 3:
                    return <GiWatch />;
                  case 4:
                    return <HiOutlineHome />;
                  case 5:
                    return <GiHealthCapsule />;
                  case 6:
                    return <GiBallerinaShoes />;
                  case 7:
                    return <GiBigDiamondRing />;
                  case 8:
                    return <GiSportMedal />;
                  case 9:
                    return <FaBaby />;
                  case 10:
                    return <BiCameraMovie />;
                  case 11:
                    return <MdOutlineSportsEsports />;
                  case 12:
                    return <BsPhoneVibrate />;
                  case 13:
                    return <MdOutlineSmartToy />;
                  case 14:
                    return <BiGift />;
                  case 15:
                    return <Gi3DHammer />;
                  case 16:
                    return <AiOutlineSecurityScan />;
                  default:
                    return null;
                }
              })()}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </ul>
    </div>
  );
}
