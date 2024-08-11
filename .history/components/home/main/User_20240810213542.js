import { IoSettingsOutline } from "react-icons/io5";
import styles from "./styles.module.scss";
import { useSession } from "next-auth/react";
import Link from "next/link";
export default function User() {
  const { data: session } = useSession();

  return (
    <div className={styles.user}>
      <img src="../../../images/userheader.jpg" alt="" />
      <div className={styles.user_container}>
        {session ? (
          <div className={styles.user_infos}>
            <img src={session.user?.image} alt="" />
            <h4>{session.user.name}</h4>
          </div>
        ) : (
          <div className={styles.user_infos}>
            <img
              src="https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg"
              alt=""
            />
            <div>
              <button>Register</button>
              <button>Login</button>
            </div>
          </div>
        )}
        <ul className={styles.user_links}>
          <li>
            <Link href="">
              <IoSettingsOutline />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
