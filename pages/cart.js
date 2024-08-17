import CartHeader from "../components/cart/cartHeader";
import Checkout from "../components/cart/checkout";
import Empty from "../components/cart/empty";
import { useEffect, useState } from "react";
import Header from "../components/cart/header";
import Product from "../components/cart/product";
import styles from "../styles/cart.module.scss";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import PaymentMethods from "../components/cart/payment";
import ProductsSwiper from "../components/productsSwiper";
import { women_swiper } from "../data/home";
import { saveCart } from "../requests/user";
export default function Cart({ product }) {
  const { data: session } = useSession();
  const [selected, setSelected] = useState([]);
  const { cart } = useSelector((state) => ({ ...state }));
  const [shippingFee, setShippingFee] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const Router = useRouter();
  //----------------------//
  useEffect(() => {
    setShippingFee(
      selected.reduce((a, c) => a + Number(c.shipping), 0).toFixed(2)
    );
    setSubtotal(selected.reduce((a, c) => a + c.price * c.qty, 0).toFixed(2));
    setTotal(
      (
        selected.reduce((a, c) => a + c.price * c.qty, 0) + Number(shippingFee)
      ).toFixed(2)
    );
  }, [selected]);
  //----------------------//
  const saveCartToDbHandler = async () => {
    if (session) {
      const res = saveCart(selected);
      Router.push("/checkout");
    } else {
      signIn();
    }
  };
  return (
    <>
      <Header country="Viet Nam" />
      <div className={styles.cart}>
        {cart.cartItems.length > 0 ? (
          <div className={styles.cart_container}>
            <CartHeader
              cartItems={cart.cartItems}
              selected={selected}
              setSelected={setSelected}
            />
            <div className={styles.cart_products}>
              {cart.cartItems.map((product) => (
                <Product
                  key={product._uid}
                  product={product}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}
            </div>
            <Checkout
              subtotal={subtotal}
              shippingFee={shippingFee}
              total={total}
              selected={selected}
              saveCartToDbHandler={saveCartToDbHandler}
            />
            <PaymentMethods />
          </div>
        ) : (
          <Empty />
        )}
        <ProductsSwiper products={women_swiper} />
      </div>
    </>
  );
}
