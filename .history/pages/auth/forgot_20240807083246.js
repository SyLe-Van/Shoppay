import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "../../styles/forgot.module.scss";
export default function Forgot() {
  return (
    <>
      <Header country="Viet Nam" />
      <div className={styles.forgot}>
        <div>
          <div className={styles.login_header}>
            <div className={styles.back_svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              We'd be happy to join us! <Link href="/">Go Store</Link>
            </span>
          </div>
        </div>
      </div>
      <Footer country="Viet Nam" />
    </>
  );
}
