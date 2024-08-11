import styles from "./styles.module.scss";
import { useSession } from "next-auth/react";

export default function User() {
  const { data: session } = useSession();

  return (
    <div className={styles.user}>
      <img src="../../../images/userheader.jpg" alt="" />
      <div className={styles.user_container}>
        {session ? (
          <div className={styles.user_infos}>
            <img src={session.user?.image : ""} alt="" />
            <h4>{session.user ? session.user.name : ""}</h4>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
