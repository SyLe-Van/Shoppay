import Rating from "@mui/material/Rating";
import styles from "./styles.module.scss";
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import { Rate } from "antd";
import { addToCart, updateCart } from "../../../store/cartSlice";
import Share from "./share/index";
import { TbMinus, TbPlus } from "react-icons/tb";
import { BsHandbagFill, BsHeart } from "react-icons/bs";
import Accordian from "./Accordian";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import SimillarSwiper from "./SimillarSwiper";
import { set } from "mongoose";
import { useDispatch, useSelector } from "react-redux";

export default function Infos({ product, setActiveImg }) {
  const router = useRouter();
  const [size, setSize] = React.useState(router.query.sizes);
  const [qty, setQty] = React.useState(1);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  useEffect(() => {
    if (router.query.style !== undefined) {
      setSize(router.query.size || "");
      setQty(1);
    }
  }, [router.query.style, router.query.size]);

  useEffect(() => {
    setSize("");
    setQty(1);
  }, [router.query.style]);
  useEffect(() => {
    if (!isNaN(Number(router.query.size))) {
      if (qty > product.quantity) {
        setQty(product.quantity);
      }
    }
  }, [router.query.size]);

  const addToCartHandler = async () => {
    const style = router.query.style || "defaultStyle";
    const size = router.query.size || "defaultSize";
    if (!router.query.size) {
      setError("Please select a size");
      return;
    }
    const { data } = await axios.get(
      `/api/product/${product._id}?style=${style}&size=${size}`
    );
    if (qty > data.quantity) {
      setError("Not enough stock");
      return;
    } else if (data.quantity < 1) {
      setError("Out of stock");
      return;
    } else {
      let _uid = `${data._id}_${product.style}_${router.query.size}`;
      let exist = cart.cartItems.find((p) => p._uid === _uid);
      if (exist) {
        let newCart = cart.cartItems.map((p) => {
          if (p._uid == exist._uid) {
            return { ...p, qty: qty };
          }
          return p;
        });
        dispatch(updateCart(newCart));
      } else {
        dispatch(
          addToCart({
            ...data,
            qty,
            size: data.size,
            _uid,
          })
        );
      }
    }
  };
  return (
    <div className={styles.infos}>
      <div className={styles.infos_container}>
        <h1 className={styles.infos_name}>{product.name}</h1>
        <h2 className={styles.infos_sku}>{product.sku}</h2>
        <div className={styles.infos_rating}>
          <Rating
            name="half-rating-read"
            defaultValue={product.rating}
            precision={0.5}
            readOnly
            style={{ color: "#FACF19" }}
          />
          ({product.numReviews}
          {product.numReviews == 1 ? " review" : " reviews"})
        </div>
        <div className={styles.infos_price}>
          {!size ? <h2>{product.priceRange}</h2> : <h1>{product.price}</h1>}
          {product.discount > 0 ? (
            <h3>
              {size && <span>{product.priceBefore}$</span>}
              <span>(-{product.discount}%)</span>
            </h3>
          ) : (
            ""
          )}
        </div>
        <span className={styles.infos_shipping}>
          {product.shipping
            ? `+${product.shipping}$ Shipping fee`
            : "Free Shipping"}
        </span>
        <span>
          {size
            ? product.quantity
            : product.sizes.reduce((start, next) => start + next.qty, 0)}{" "}
          pieces avarilable.
        </span>
        <div className={styles.infos_sizes}>
          <h4>Select a Size : </h4>
          <div className={styles.infos_sizes_wrap}>
            {product.sizes.map((size, i) => (
              <Link
                key={i}
                href={`/product/${product.slug}?style=${router.query.style}&size=${i}`}
              >
                <div
                  className={`${styles.infos_sizes_size} ${
                    i == router.query.size && styles.active_size
                  }`}
                  onClick={() => setSize(size.size)}
                >
                  {size.size}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.infos_colors}>
        {product.colors &&
          product.colors.map((color, i) => (
            <span
              key={i}
              className={i == router.query.style ? styles.active_color : ""}
              onMouseOver={() =>
                setActiveImg(product.subProducts[i].images[0].url)
              }
              onMouseLeave={() => setActiveImg("")}
            >
              <Link href={`/product/${product.slug}?style=${i}`}>
                <img src={color.image} alt="" />
              </Link>
            </span>
          ))}
      </div>
      <div className={styles.infos_qty}>
        <button onClick={() => qty > 1 && setQty((prev) => prev - 1)}>
          <TbMinus />
        </button>
        <span>{qty}</span>
        <button
          onClick={() => qty < product.quantity && setQty((prev) => prev + 1)}
        >
          <TbPlus />
        </button>
      </div>
      <div className={styles.infos_actions}>
        <button
          disabled={product.quantity < 1}
          style={{ cursor: `${product.quantity < 1 ? "not-allowed" : ""}` }}
          onClick={() => addToCartHandler()}
        >
          <BsHandbagFill />
          <b>ADD TO CART</b>
        </button>
        <button onClick={() => handleWishlist()}>
          <BsHeart />
          WISHLIST
        </button>
      </div>
      {error && <span className={styles.error}>{error}</span>}
      {success && <span className={styles.success}>{success}</span>}
      <Share />
      <Accordian details={[product.description, ...product.details]} />
      <SimillarSwiper />
    </div>
  );
}
