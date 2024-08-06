import styles from "../../styles/page.module.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Footer />
    </main>
  );
}
