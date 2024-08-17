import styles from "./checkout.module.scss";

export default function Checkout({
  subtotal,
  shippingFee,
  total,
  selected,
  saveCartToDbHandler,
}) {
  return (
    <div className={`${styles.cart_checkout} ${styles.cart}`}>
      <h2>Order Summary</h2>
      <div className={styles.cart_checkout_line}>
        <span>Subtotal</span>
        <span>US{subtotal}$</span>
      </div>
      <div className={styles.cart_checkout_line}>
        <span>Shipping</span>
        <span>+{shippingFee}$</span>
      </div>
      <div className={styles.cart_checkout_total}>
        <span>Total</span>
        <span>US{total}$</span>
      </div>
      <div className={styles.submit}>
        <button
          style={{
            background: `${selected.length == 0 ? "#eee" : ""}`,
            cursor: `${selected.length == 0 ? "not-allowed" : ""}`,
          }}
          disabled={selected.length == 0}
          onClick={() => saveCartToDbHandler()}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
