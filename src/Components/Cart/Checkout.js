import React from "react";
import CheckoutAnimation from "../Animations/CheckoutAnimation";
import styles from "./Cart.module.css";

function Checkout() {
  return (
    <div className={styles.checkout_container}>
      <div className={styles.checkout_content}>
        <div className={styles.checkout_box}>
          <div>
            <h1>Checkout</h1>
          </div>
          <div>
            <p>
              Thanks for buying with Fresh Fruit at your door. Your Fruits are being separated for you.
            </p>
          </div>
          <div>
            <CheckoutAnimation />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
