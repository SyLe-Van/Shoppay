import Link from "next/link";
import styles from "./styles.module.scss";
export default function Ad() {
  return (
    <Link href="/browse">
      <a className={styles.ad}>Ad</a>
    </Link>
  );
}
