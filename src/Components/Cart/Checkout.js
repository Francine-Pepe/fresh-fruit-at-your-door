import React from "react";
import CheckoutAnimation from "../Animations/CheckoutAnimation";
import styles from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";

function Checkout() {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  return (
    <div className={styles.checkout_container}>
      <div className={styles.checkout_content}>
        <div className={styles.checkout_box}>
          <div>
            <h1>Checkout</h1>
          </div>
          <div>
            <p>
              Thanks for buying with Fresh Fruit at your door. Your Fruits are
              being separated for you.
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
