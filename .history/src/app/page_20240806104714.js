import styles from "../../styles/page.module.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import axios from "axios";
export default function Home({ country }) {
  console.log(country);
  return (
    <main className={styles.main}>
      <Header />
      <Footer />
    </main>
  );
}

// export async function getServerSideProps() {
//   let data = await axios
//     .get("https://api.ipregistry.co/?key=lc424motdfemedh1")
//     .then((res) => {
//       return res.data.location.country;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   return {
//     props: {
//       country: data,
//     },
//   };
// }
