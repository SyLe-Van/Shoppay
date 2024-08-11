"use client";
import styles from "../styles/Home.module.scss";
import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home({ country }) {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <Header country={country} />
      <div className={styles.home}>
        <div className={styles.container}></div>
      </div>
      <Footer country={country} />
    </>
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
      //   country: { name: data.name, flag: data.flag.emojitwo },
      country: {
        name: "Viet Nam",
        flag: "https://i.pinimg.com/564x/2a/cb/7d/2acb7d9371550e4f145d5a1a841a41cb.jpg",
      },
    },
  };
}
6;
