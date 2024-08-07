import Link from "next/link";
import styles from "./styles.module.scss";
import { signOut, signIn, useSession } from "next-auth/react";

export default function UserMenu({ session }) {
  const handleLogin = async () => {
    if (session) {
      await signOut({ redirect: true, callbackUrl: "/" }); // Đăng xuất và điều hướng lại trang chủ
    } else {
      signIn(); // Điều hướng đến trang đăng nhập
    }
  };

  return (
    <div className={styles.menu}>
      <h4>Welcome to Shoppay!</h4>
      {session ? (
        <div className={styles.flex}>
          <img
            src={session.user.image}
            alt="User image"
            className={styles.menu_img}
          />
          <div className={styles.col}>
            <span>Welcome back!</span>
            <h3>{session.user.name}</h3>
            <span onClick={() => signOut()}>Sign out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined} onClick={handleLogin}>
            Login
          </button>
        </div>
      )}
      <ul>
        <li>
          <Link href="/profile">Account</Link>
        </li>
        <li>
          <Link href="/profile/orders">My orders</Link>
        </li>
        <li>
          <Link href="/profile/messages">Message Center</Link>
        </li>
        <li>
          <Link href="/profile/address">Address</Link>
        </li>
        <li>
          <Link href="/profile/whishlist">Whishlist </Link>
        </li>
      </ul>
    </div>
  );
}
