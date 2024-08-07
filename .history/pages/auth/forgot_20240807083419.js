import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "../../styles/forgot.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
export default function Forgot() {
  return (
    <>
      <Header country="Viet Nam" />
      <div className={styles.forgot}>
        <div>
          <div className={styles.forgot_header}>
            <div className={styles.back_svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              Forgot your password? <Link href="/">Login instead</Link>
            </span>
          </div>
        </div>
      </div>
      <Footer country="Viet Nam" />
    </>
  );
}
