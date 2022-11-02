import React from "react";
import styles from "./Buttons.module.css";
import { buttonCart } from "../../data";

export default function CartButton() {
  return (
    <div className={styles.cart_button_container}>
      {buttonCart.map((data, index) => {
        return (
          <div className={styles.cart_button}>
            <button key={index}>{data.icon}</button>
          </div>
        );
      })}
    </div>
  );
}
