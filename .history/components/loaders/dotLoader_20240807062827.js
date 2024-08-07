import styles from "./styles.module.scss";
import DotLoader from "react-spinners/DotLoader";
export default function DotLoader({ loading }) {
  return (
    <div className={styles.loader}>
      <DotLoader color="#2f82ff" loading={loading} size={50} />
    </div>
  );
}
