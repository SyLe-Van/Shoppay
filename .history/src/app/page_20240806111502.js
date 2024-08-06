"use client";
import styles from "../../styles/page.module.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Home({ country }) {
  return (
    <main className={styles.main}>
      <Header country={country} />
      <Footer country={country} />
    </main>
  );
}

export async function getServerSideProps() {
  let data = await axios
    .get("https://api.ipregistry.co/?key=lc424motdfemedh1")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      country: { name: data.name, flag: data.flag.emojitwo },
    },
  };
}
