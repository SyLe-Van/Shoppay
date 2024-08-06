"use client";
import styles from "../../styles/page.module.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Home() {
  const [country, setCountry] = useState("Loading...");
  // console.log(country);
  useEffect(() => {
    axios
      .get("/api/country")
      .then((res) => {
        setCountry(res.data.country);
      })
      .catch((err) => {
        console.log(err);
        setCountry("Unknown");
      });
  }, []);

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
