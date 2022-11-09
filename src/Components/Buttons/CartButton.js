import React from "react";
import styles from "./Buttons.module.css";
import BuyButton from "./BuyButton";
import DeleteButton from "./DeleteButton";

export default function CartButton(props) {
  return (
    <>
      <div className={styles.cart_button_container}>
        <BuyButton />
        <DeleteButton />
      </div>
    </>
  );
}
