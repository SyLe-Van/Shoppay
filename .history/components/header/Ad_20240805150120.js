import Link from "next/link";
import styles from "./styles.module.scss";
export default function Ad() {
  return (
    <Link href="/">
      <a className={styles.ad}>Ad</a>
    </Link>
  );
}
