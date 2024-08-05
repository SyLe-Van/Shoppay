import styles from "./styles.module.scss";

export default function UserMenu({ loggedIn }) {
  return (
    <div className={styles.menu}>
      <h4>Welcome to Shoppay!</h4>
      {loggedIn ? (
        <div className={styles.flex}>
          <img
            src="https://i.pinimg.com/564x/2a/cb/7d/2acb7d9371550e4f145d5a1a841a41cb.jpg"
            alt="User image"
            className={menu_img}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
