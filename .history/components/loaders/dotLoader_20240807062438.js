import styles from "./styles.module.scss";
export default function DotLoader() {
  return (
    <div className={styles.dot_loader}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
}
