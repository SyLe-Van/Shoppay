import Link from "next/link";
import styles from "./styles.module.scss";
import { MdFlashOn } from "react-icons/md";
export default function FlashCard({ product }) {
  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <Link href={product.link}>
          <img src={product.image} alt="" />
        </Link>
        <div className={styles.flash}>
          <MdFlashOn />
          <span>-{product.discount}%</span>
        </div>
      </div>
      <div className={styles.card_price}>
        <span>
          <span>
            USD{product.price - product.price * (product.discount / 100)}$
          </span>
        </span>
        <span className={styles.minus}>
          -USD
          {(
            product.price -
            (product.price - product.price / product.discount)
          ).toFixed(2)}
          $
        </span>
      </div>
      <div className={styles.card_bar}>
        <div className={styles.card_bar_inner} style={{ width: "75%" }}></div>
      </div>
      <div className={styles.card_percentage}>{product.sold}%</div>
    </div>
  );
}
