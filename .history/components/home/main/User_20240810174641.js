import styles from "./styles.module.scss";
import { useSession } from "next-auth/react";

export default function User() {
  const { data: session } = useSession();

  return (
    <div className={styles.user}>
      <img src="../../../images/userheader.jpg" alt="" />
      <div className={styles.user_container}></div>
    </div>
  );
}
