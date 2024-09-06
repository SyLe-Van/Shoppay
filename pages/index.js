"use client";
import styles from "../styles/Home.module.scss";
import Header from "../components/header";
import Footer from "../components/footer";

import axios from "axios";
import { useSession } from "next-auth/react";
import Main from "../components/home/main";
import FlashDeals from "../components/home/flashDeals";
import Category from "../components/home/category";
import dbConnect from "../utils/db";
import Product from "../models/Products";
import {
  women_accessories,
  women_dresses,
  women_shoes,
  women_swiper,
} from "../data/home";
import { useMediaQuery } from "react-responsive";
import ProductsSwiper from "../components/productsSwiper";
import ProductCard from "../components/productCard";

export default function Home({ country, products }) {
  // console.log("products", products);
  const { data: session } = useSession();
  const isMedium = useMediaQuery({ query: "(max-width: 850px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 550px)" });
  console.log("session-home", session);
  return (
    <>
      <Header country={country} />
      <div className={styles.home}>
        <div className={styles.container}>
          <Main />
          <FlashDeals />
          <div className={styles.home_category}>
            <Category
              header="Dresses"
              products={women_dresses}
              background="#5a31f4"
            />
            {!isMedium && (
              <Category
                header="Shoes"
                products={women_shoes}
                background="#3c811f"
              />
            )}
            {isMobile && (
              <Category
                header="Shoes"
                products={women_shoes}
                background="#3c811f"
              />
            )}
            <Category
              header="Accessories"
              products={women_accessories}
              background="#000"
            />
          </div>
          <ProductsSwiper products={women_swiper} />
          <div className={styles.products}>
            {products.map((product, index) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </div>
      </div>
      <Footer country={country} />
    </>
  );
}

export async function getServerSideProps() {
  await dbConnect();
  let products = await Product.find().sort({ createdAt: -1 }).lean();
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
      products: JSON.parse(JSON.stringify(products)),
      country: {
        name: "Viet Nam",
        flag: "https://i.pinimg.com/564x/2a/cb/7d/2acb7d9371550e4f145d5a1a841a41cb.jpg",
      },
    },
  };
}
