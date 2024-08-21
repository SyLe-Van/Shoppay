import styles from "../../styles/order.module.scss";
import Header from "../../components/header";
import Order from "../../models/Order";
import User from "../../models/User";
import { IoIosArrowForward } from "react-icons/io";
import db from "../../utils/db";
import { useReducer, useEffect } from "react";
import axios from "axios";
import StripePayment from "../../components/stripePayment";
import {
  PayPalScriptProvider,
  usePayPalScriptReducer,
  PayPalButtons,
} from "@paypal/react-paypal-js";

function reducer(state, action) {
  switch (action.type) {
    case "PAY_REQUEST":
      return { ...state, loading: true };
    case "PAY_SUCCESS":
      return { ...state, loading: false, success: true };
    case "PAY_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "PAY_RESET":
      return { ...state, loading: false, success: false, error: false };
    default:
      return state;
  }
}

function PayPalSection({ orderData, paypal_client_id }) {
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
  const [dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
    success: "",
  });

  useEffect(() => {
    if (!orderData._id) {
      dispatch({
        type: "PAY_RESET",
      });
    } else {
      paypalDispatch({
        type: "resetOptions",
        value: {
          "client-id": paypal_client_id,
          currency: "USD",
        },
      });
      paypalDispatch({
        type: "setLoadingStatus",
        value: "pending",
      });
    }
  }, [orderData, paypalDispatch]);

  function createOrderHanlder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: orderData.total,
            },
          },
        ],
      })
      .then((order_id) => {
        return order_id;
      });
  }

  function onApproveHandler(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        dispatch({ type: "PAY_REQUEST" });
        const { data } = await axios.put(
          `/api/order/${orderData._id}/pay`,
          details
        );
        dispatch({ type: "PAY_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "PAY_FAIL", payload: error });
      }
    });
  }

  function onErrorHandler(error) {
    console.log(error);
  }

  return (
    <>
      {isPending ? (
        <span>loading...</span>
      ) : (
        <PayPalButtons
          createOrder={createOrderHanlder}
          onApprove={onApproveHandler}
          onError={onErrorHandler}
        ></PayPalButtons>
      )}
    </>
  );
}

export default function OrderPage({
  orderData,
  paypal_client_id,
  stripe_public_key,
}) {
  return (
    <>
      <PayPalScriptProvider options={{ "client-id": paypal_client_id }}>
        <Header country="country" />
        <div className={styles.order}>
          <div className={styles.container}>
            <div className={styles.order_infos}>
              {/* Order Information Section */}
              <div className={styles.order_header}>
                <div className={styles.order_header_head}>
                  Home <IoIosArrowForward /> Orders <IoIosArrowForward /> ID{" "}
                  {orderData._id}
                </div>
                <div className={styles.order_header_status}>
                  Payment Status :{" "}
                  {orderData.isPaid ? (
                    <img src="../../../images/verified.png" alt="paid" />
                  ) : (
                    <img src="../../../images/unverified.png" alt="paid" />
                  )}
                </div>
                <div className={styles.order_header_status}>
                  Order Status :
                  <span
                    className={
                      orderData.status == "Not Processed"
                        ? styles.not_processed
                        : orderData.status == "Processing"
                        ? styles.processing
                        : orderData.status == "Dispatched"
                        ? styles.dispatched
                        : orderData.status == "Cancelled"
                        ? styles.cancelled
                        : orderData.status == "Completed"
                        ? styles.completed
                        : ""
                    }
                  >
                    {orderData.status}
                  </span>
                </div>
              </div>

              {/* Order Products Section */}
              <div className={styles.order_products}>
                {orderData.products.map((product) => (
                  <div className={styles.product} key={product._id}>
                    <div className={styles.product_img}>
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className={styles.product_infos}>
                      <h1 className={styles.product_infos_name}>
                        {product.name.length > 30
                          ? `${product.name.substring(0, 30)}...`
                          : product.name}
                      </h1>
                      <div className={styles.product_infos_style}>
                        <img src={product.color.image} alt="" /> /{" "}
                        {product.size}
                      </div>
                      <div className={styles.product_infos_priceQty}>
                        {product.price}$ x {product.qty}
                      </div>
                      <div className={styles.product_infos_total}>
                        {product.price * product.qty}$
                      </div>
                    </div>
                  </div>
                ))}
                <div className={styles.order_products_total}>
                  {orderData.couponApplied ? (
                    <>
                      <div className={styles.order_products_total_sub}>
                        <span>Subtotal</span>
                        <span>{orderData.totalBeforeDiscount}$</span>
                      </div>
                      <div className={styles.order_products_total_sub}>
                        <span>
                          Coupon Applied <em>({orderData.couponApplied})</em>{" "}
                        </span>
                        <span>
                          -
                          {(
                            orderData.totalBeforeDiscount - orderData.total
                          ).toFixed(2)}
                          $
                        </span>
                      </div>
                      <div className={styles.order_products_total_sub}>
                        <span>Tax price</span>
                        <span>+{orderData.taxPrice}$</span>
                      </div>
                      <div
                        className={`${styles.order_products_total_sub} ${styles.bordertop}`}
                      >
                        <span>TOTAL TO PAY</span>
                        <b>{orderData.total}$</b>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={styles.order_products_total_sub}>
                        <span>Tax price</span>
                        <span>+{orderData.taxPrice}$</span>
                      </div>
                      <div
                        className={`${styles.order_products_total_sub} ${styles.bordertop}`}
                      >
                        <span>TOTAL TO PAY</span>
                        <b>{orderData.total}$</b>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Payment Actions Section */}
            <div className={styles.order_actions}>
              <div className={styles.order_address}>
                <h1>Customer's Order</h1>
                <div className={styles.order_address_user}>
                  <div className={styles.order_address_user_infos}>
                    <img src={orderData.user.image} alt="" />
                    <div>
                      <span>{orderData.user.name}</span>
                      <span>{orderData.user.email}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.order_address_shipping}>
                  <h2>Shipping Address</h2>
                  <span>
                    {orderData.shippingAddress.firstName}{" "}
                    {orderData.shippingAddress.lastName}
                  </span>
                  <span>{orderData.shippingAddress.address1}</span>
                  <span>{orderData.shippingAddress.address2}</span>
                  <span>
                    {orderData.shippingAddress.state},
                    {orderData.shippingAddress.city}
                  </span>
                  <span>{orderData.shippingAddress.zipCode}</span>
                  <span>{orderData.shippingAddress.country}</span>
                </div>
                <div className={styles.order__address_shipping}>
                  <h2>Billing Address</h2>
                  <span>
                    {orderData.shippingAddress.firstName}{" "}
                    {orderData.shippingAddress.lastName}
                  </span>
                  <span>{orderData.shippingAddress.address1}</span>
                  <span>{orderData.shippingAddress.address2}</span>
                  <span>
                    {orderData.shippingAddress.state},
                    {orderData.shippingAddress.city}
                  </span>
                  <span>{orderData.shippingAddress.zipCode}</span>
                  <span>{orderData.shippingAddress.country}</span>
                </div>
              </div>
              {!orderData.isPaid && (
                <div className={styles.order_payment}>
                  {orderData.paymentMethod == "paypal" && (
                    <PayPalSection
                      orderData={orderData}
                      paypal_client_id={paypal_client_id}
                    />
                  )}
                  {orderData.paymentMethod == "credit_card" && (
                    <StripePayment
                      total={orderData.total}
                      order_id={orderData._id}
                      stripe_public_key={stripe_public_key}
                    />
                  )}
                  {orderData.paymentMethod == "cash" && (
                    <div className={styles.cash}>cash</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </PayPalScriptProvider>
    </>
  );
}

export async function getServerSideProps(context) {
  db.dbConnect();
  const { query } = context;
  const id = query.id;
  const order = await Order.findById(id)
    .populate({ path: "user", model: User })
    .lean();
  let paypal_client_id = process.env.PAYPAL_CLIENT_ID;
  let stripe_public_key = process.env.STRIPE_PUBLIC_KEY;
  // db.dbDisconnect();
  return {
    props: {
      orderData: JSON.parse(JSON.stringify(order)),
      paypal_client_id,
      stripe_public_key,
    },
  };
}
